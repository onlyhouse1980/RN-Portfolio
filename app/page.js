import PortfolioClient from './PortfolioClient';
import { getProjects } from '../lib/projects';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * Server Component entry point for the root route (/).
 * Renders the PortfolioClient which handles client-side providers and components.
 *
 * @returns {JSX.Element} The client portfolio wrapper.
 */
export default async function Page() {
  const projects = await getProjects();

  return <PortfolioClient projects={projects} />;
}
