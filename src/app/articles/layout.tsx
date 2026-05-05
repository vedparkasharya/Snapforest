import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Blog | Tips, Guides & Resources | Snapforest",
  description: "Read the best creator tips, podcasting guides, YouTube growth hacks, and photography lighting tips. Snapforest blog for content creators in Gaya.",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
