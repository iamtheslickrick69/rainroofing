import { Metadata } from "next";
import { ReviewsPageClient } from "./reviews-client";

export const metadata: Metadata = {
  title: "Customer Reviews | Rain Roofing Lubbock",
  description:
    "Read what Lubbock homeowners say about Rain Roofing. 5-star rated roofing contractor with 50+ verified reviews. See why customers trust us with their homes.",
};

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
