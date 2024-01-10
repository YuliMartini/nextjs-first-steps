import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Description",
  keywords: ["About Page", "Giuliana", "información", "..."],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-5xl">About Page</span>
    </>
  );
}
