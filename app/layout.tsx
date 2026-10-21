import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const viewport: Viewport = {
  // Matches the original pages' <meta name="viewport" content="width=device-width">
  width: "device-width",
};

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "https://framerusercontent.com/images/v7z1kGU12MTRf2tV0m8a1icBsg.png" },
    ],
    apple: "https://framerusercontent.com/images/FX8uucO9lAxLSbNxydLpg.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html dir="ltr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
