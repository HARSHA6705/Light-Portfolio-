import type { Metadata } from "next";
import FramerPage from "@/components/FramerPage";

export const metadata: Metadata = {
  title: "Résumé — Harshavardhan J | AWS Cloud × DevOps",
  description:
    "Education, projects, skills and certifications of Harshavardhan J, AWS Cloud & DevOps fresher.",
  openGraph: {
    type: "website",
    title: "Résumé — Harshavardhan J | AWS Cloud × DevOps",
    description:
      "Education, projects, skills and certifications of Harshavardhan J, AWS Cloud & DevOps fresher.",
    images: ["https://framerusercontent.com/images/zDIJIiPlhfCfH7yoGdFVz7ukLxA.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Résumé — Harshavardhan J | AWS Cloud × DevOps",
    description:
      "Education, projects, skills and certifications of Harshavardhan J, AWS Cloud & DevOps fresher.",
    images: ["https://framerusercontent.com/images/zDIJIiPlhfCfH7yoGdFVz7ukLxA.jpg"],
  },
};

export default function Page() {
  return <FramerPage source="resume/index.html" />;
}
