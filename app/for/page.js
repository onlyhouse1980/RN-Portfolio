import { redirect } from "next/navigation";

export const metadata = {
  title: "Ryan Nyberg — Recruiter pages",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RecruiterIndexPage() {
  redirect("/");
}
