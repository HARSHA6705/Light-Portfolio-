import type { Metadata } from "next";
import FramerPage from "@/components/FramerPage";

export const metadata: Metadata = {
  title: "Harshavardhan J | AWS Cloud × DevOps",
  description:
    "Building practical skills in AWS Cloud and DevOps, with a focus on cloud infrastructure, automation, containers, CI/CD, and reliable application deployment.",
  openGraph: {
    type: "website",
    title: "Harshavardhan J | AWS Cloud × DevOps",
    description:
      "Building practical skills in AWS Cloud and DevOps, with a focus on cloud infrastructure, automation, containers, CI/CD, and reliable application deployment.",
    images: ["https://framerusercontent.com/images/zDIJIiPlhfCfH7yoGdFVz7ukLxA.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshavardhan J | AWS Cloud × DevOps",
    description:
      "Building practical skills in AWS Cloud and DevOps, with a focus on cloud infrastructure, automation, containers, CI/CD, and reliable application deployment.",
    images: ["https://framerusercontent.com/images/zDIJIiPlhfCfH7yoGdFVz7ukLxA.jpg"],
  },
};

export default function Page() {
  return <FramerPage source="index.html" />;
}
