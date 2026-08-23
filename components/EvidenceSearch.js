'use client';

import { useMemo, useState } from 'react';
import { projects, skills } from '@/data/profile';

const prompts = [
  'Has Ryan worked with OAuth?',
  'Which projects demonstrate MongoDB?',
  'What proves full-stack ownership?',
  'Has Ryan used Next.js 16?'
];

function answerQuestion(question) {
  const q = question.toLowerCase();
  const matchedProjects = projects.filter((p) => {
    const corpus = [p.title, p.summary, ...p.stack, ...p.evidence, ...p.fit].join(' ').toLowerCase();
    return q.split(/\W+/).filter((w) => w.length > 3).some((word) => corpus.includes(word));
  });

  if (q.includes('oauth') || q.includes('auth')) {
    return 'Yes. The Contract Management Platform uses Auth.js with Google OAuth, and the broader portfolio includes authentication-focused Next.js work.';
  }
  if (q.includes('mongodb') || q.includes('database') || q.includes('nosql')) {
    return 'The Water Utility Portal and Contract Management Platform both use MongoDB-based persistence. The utility portal uses MongoDB Atlas with the native Node.js driver.';
  }
  if (q.includes('next.js 16') || q.includes('nextjs 16') || q.includes('next 16')) {
    return 'Yes. The Digital Membership Platform is presented as a Next.js 16 App Router project, and this recruiter portfolio itself is packaged for Next.js 16.';
  }
  if (q.includes('full') || q.includes('ownership') || q.includes('end-to-end')) {
    return 'The strongest proof is the Water Utility Portal and Contract Management Platform: UI, server-side logic, database workflows, authentication and third-party integrations were treated as one product surface.';
  }
  if (matchedProjects.length) {
    return `Relevant evidence: ${matchedProjects.map((p) => p.title).join(', ')}. Open the Projects section for the specific implementation details.`;
  }
  const skillHit = skills.find((s) => q.includes(s.toLowerCase()));
  if (skillHit) return `${skillHit} is included in the current technical stack. The Projects section shows where it appears in context.`;
  return 'I could not match that question to a documented proof point. That is intentional: this portfolio only answers from explicit project evidence rather than inventing experience.';
}

export default function EvidenceSearch() {
  const [query, setQuery] = useState(prompts[0]);
  const answer = useMemo(() => answerQuestion(query), [query]);

  return (
    <section className="evidenceBox">
      <div>
        <p className="sectionLabel">Recruiter evidence search</p>
        <h2>Ask the portfolio a technical question.</h2>
        <p className="muted">Deterministic and evidence-bound: it will not claim experience that is not documented here.</p>
      </div>
      <div className="askPanel">
        <div className="promptRow">{prompts.map((p) => <button key={p} onClick={() => setQuery(p)}>{p}</button>)}</div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Ask a portfolio question" />
        <div className="answer">{answer}</div>
      </div>
    </section>
  );
}
