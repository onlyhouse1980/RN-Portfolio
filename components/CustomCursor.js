'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    let rafId;
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      rafId = requestAnimationFrame(animateFollower);
    };
    rafId = requestAnimationFrame(animateFollower);

    const onMouseEnterHover = () => {
      cursor.classList.add('cursor--hover');
      follower.classList.add('cursor--hover');
    };
    const onMouseLeaveHover = () => {
      cursor.classList.remove('cursor--hover');
      follower.classList.remove('cursor--hover');
    };

    document.addEventListener('mousemove', onMouseMove);

    const hoverTargets = document.querySelectorAll('a, button, .project-card, .tech-badge, .about__stat');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterHover);
      el.addEventListener('mouseleave', onMouseLeaveHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      hoverTargets.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterHover);
        el.removeEventListener('mouseleave', onMouseLeaveHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
