'use client';

export default function Marquee() {
  const items = [
    { text: 'Next.js', symbol: '✦' },
    { text: 'React', symbol: '✦' },
    { text: 'TypeScript', symbol: '✦' },
    { text: 'Node.js', symbol: '✦' },
    { text: 'Tailwind CSS', symbol: '✦' },
    { text: 'GSAP', symbol: '✦' },
    { text: 'PostgreSQL', symbol: '✦' },
    { text: 'AWS', symbol: '✦' },
    { text: 'Docker', symbol: '✦' },
    { text: 'HTML', symbol: '✦' },
    { text: 'Wordpress', symbol: '✦' },
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {allItems.map((item, i) => (
          <div key={i} className="marquee-item">
            {item.text}
            <span>{item.symbol}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
