import type { Metadata } from "next";
import FramerPage from "@/components/FramerPage";

export const metadata: Metadata = {
  title: "About — Harshavardhan J | AWS Cloud × DevOps",
  description:
    "About Harshavardhan J — Computer Technology graduate building practical skills in AWS Cloud and DevOps.",
  openGraph: {
    type: "website",
    title: "About — Harshavardhan J | AWS Cloud × DevOps",
    description:
      "About Harshavardhan J — Computer Technology graduate building practical skills in AWS Cloud and DevOps.",
    images: ["https://framerusercontent.com/images/zDIJIiPlhfCfH7yoGdFVz7ukLxA.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Harshavardhan J | AWS Cloud × DevOps",
    description:
      "About Harshavardhan J — Computer Technology graduate building practical skills in AWS Cloud and DevOps.",
    images: ["https://framerusercontent.com/images/zDIJIiPlhfCfH7yoGdFVz7ukLxA.jpg"],
  },
};

export default function Page() {
  return <FramerPage source="about/index.html" />;
}
