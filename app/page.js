import PortfolioClient from './PortfolioClient';

/**
 * Server Component entry point for the root route (/).
 * Renders the PortfolioClient which handles client-side providers and components.
 *
 * @returns {JSX.Element} The client portfolio wrapper.
 */
export default function Page() {
  return <PortfolioClient />;
}
