'use client';

import EpicPortfolio from '../components/EpicPortfolio';
import { LanguageProvider } from '../lib/i18n';

/**
 * Client-side entry point for the portfolio.
 * Wraps the entire application with the LanguageProvider to supply translation context.
 *
 * @returns {JSX.Element} The wrapped PortfolioBody.
 */
export default function PortfolioClient({ projects }) {
  return (
    <LanguageProvider>
      <EpicPortfolio projects={projects} />
    </LanguageProvider>
  );
}
