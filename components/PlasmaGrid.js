'use client';

import { useEffect, useRef } from 'react';

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_mouse;   // smoothed mouse in pixel coords, origin bottom-left

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float ar = u_res.x / u_res.y;

  // World-space position, aspect-corrected, centred at 0
  vec2 p = (uv - 0.5) * vec2(ar, 1.0) * 2.0;

  // Convert mouse to same space
  vec2 mp = (u_mouse / u_res - 0.5) * vec2(ar, 1.0) * 2.0;
  vec2 delta = p - mp;
  float dist = length(delta);

  // Mouse ripple — a damped radial sine wave emanating from cursor
  float ripple = sin(dist * 10.0 - u_time * 3.0) * 0.42 * exp(-dist * 1.5);

  // Plasma — four sinusoidal interference fields + mouse ripple
  float v = 0.0;
  v += sin(p.x * 3.2 + u_time * 0.32);
  v += sin(p.y * 3.2 + u_time * 0.26);
  v += sin((p.x + p.y) * 2.4 + u_time * 0.40);
  v += sin(sqrt(p.x * p.x + p.y * p.y) * 4.8 - u_time * 0.55);
  v += ripple * 4.0;
  v = v * 0.25 + 0.5; // remap to [0, 1]

  // Grid — 60 px cells with mouse-driven warp
  // Warp the grid sample coords toward the mouse
  float warp = 18.0 * exp(-dist * 2.6);
  vec2 warpDir = (dist > 0.001) ? normalize(delta) : vec2(0.0);
  vec2 gridCoord = gl_FragCoord.xy - warpDir * warp;
  vec2 cell = fract(gridCoord / 60.0);
  float gx = step(0.975, cell.x) + step(cell.x, 0.025);
  float gy = step(0.975, cell.y) + step(cell.y, 0.025);
  float grid = clamp(gx + gy, 0.0, 1.0);

  // Mouse proximity glow on grid lines
  float proximity = exp(-dist * 2.0);             // 1 at cursor, fades out

  // Palette: #060606 base, #b4ff00 lime
  vec3 bg   = vec3(0.0235, 0.0235, 0.0235);
  vec3 lime = vec3(0.706,  1.0,    0.0);
  vec3 deep = vec3(0.006,  0.032,  0.0);

  // Plasma base — very dark, barely perceptible colour shift
  vec3 col = mix(bg, deep, v * 1.6);

  // Lime shimmer at plasma peaks
  col += lime * pow(v, 5.0) * 0.10;

  // Grid lines glow with plasma intensity, extra bright near cursor
  float lineGlow = 0.38 + v * 0.38 + proximity * 0.55;
  col = mix(col, lime * 0.22, grid * lineGlow);

  // Subtle lens-flare halo around cursor
  col += lime * proximity * proximity * 0.06;

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function PlasmaGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Full-screen quad (two triangles)
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime  = gl.getUniformLocation(prog, 'u_time');
    const uRes   = gl.getUniformLocation(prog, 'u_res');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
      gl.viewport(0, 0, W, H);
    };
    resize();
    window.addEventListener('resize', resize);

    // Raw mouse in CSS pixels; start centred so there's no jump on load
    let rawX = W * 0.5;
    let rawY = H * 0.5;
    // Smoothed (lerped) mouse
    let smoothX = rawX;
    let smoothY = rawY;

    const onMouseMove = (e) => {
      rawX = e.clientX;
      rawY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const start = performance.now();
    let rafId;

    const draw = () => {
      // Smooth mouse with exponential decay (speed ≈ 8% per frame at 60fps)
      smoothX += (rawX - smoothX) * 0.08;
      smoothY += (rawY - smoothY) * 0.08;

      // WebGL origin is bottom-left, CSS origin is top-left
      const glY = H - smoothY;

      gl.uniform1f(uTime,  (performance.now() - start) * 0.001);
      gl.uniform2f(uRes,   W, H);
      gl.uniform2f(uMouse, smoothX, glY);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        display: 'block',
      }}
    />
  );
}
