import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ved Prakash Arya | Founder of Snapforest",
  description: "Meet Ved Prakash Arya, the founder of Snapforest. Building India's premier creator space platform in Gaya, Bihar.",
};

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
