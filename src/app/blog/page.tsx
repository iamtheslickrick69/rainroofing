import { Metadata } from "next";
import { BlogPageClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Roofing Blog | Tips & Advice | Rain Roofing Lubbock",
  description:
    "Expert roofing tips, storm damage advice, and home maintenance guides from Rain Roofing. Learn how to protect your Lubbock home from West Texas weather.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
