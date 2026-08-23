import { notFound } from "next/navigation";
import RecruiterLandingPage from "../../../components/recruiter/RecruiterLandingPage";
import { recruiterProjects } from "../../../data/recruiter-projects";
import { recruiterTargets, recruiterProfile } from "../../../data/recruiter-targets";

export const dynamicParams = false;

async function resolveSlug(params) {
  const resolved = await Promise.resolve(params);
  return resolved?.slug;
}

export function generateStaticParams() {
  return Object.keys(recruiterTargets).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const slug = await resolveSlug(params);
  const target = recruiterTargets[slug];

  if (!target) return {};

  const title = `${recruiterProfile.name} for ${target.company} — ${target.shortRole}`;
  const description = `Role-specific engineering evidence for ${target.role} at ${target.company}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://anewshade.de/for/${slug}`,
    },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://anewshade.de/for/${slug}`,
      type: "profile",
    },
  };
}

export default async function RecruiterTargetPage({ params }) {
  const slug = await resolveSlug(params);
  const target = recruiterTargets[slug];

  if (!target) notFound();

  const projects = target.projectSlugs
    .map((projectSlug) =>
      recruiterProjects.find((project) => project.slug === projectSlug)
    )
    .filter(Boolean);

  return (
    <RecruiterLandingPage
      target={target}
      projects={projects}
      profile={recruiterProfile}
    />
  );
}
