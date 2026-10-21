import type { Metadata } from "next";
import FramerPage from "@/components/FramerPage";

export const metadata: Metadata = {
  title: "Contact — Harshavardhan J | AWS Cloud × DevOps",
  description:
    "Get in touch with Harshavardhan J — open to entry-level cloud and DevOps roles, internships and projects.",
  openGraph: {
    type: "website",
    title: "Contact — Harshavardhan J | AWS Cloud × DevOps",
    description:
      "Get in touch with Harshavardhan J — open to entry-level cloud and DevOps roles, internships and projects.",
    images: ["https://framerusercontent.com/images/zDIJIiPlhfCfH7yoGdFVz7ukLxA.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Harshavardhan J | AWS Cloud × DevOps",
    description:
      "Get in touch with Harshavardhan J — open to entry-level cloud and DevOps roles, internships and projects.",
    images: ["https://framerusercontent.com/images/zDIJIiPlhfCfH7yoGdFVz7ukLxA.jpg"],
  },
};

export default function Page() {
  return <FramerPage source="contact/index.html" />;
}
