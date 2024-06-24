"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Reviews({
  params,
}: {
  params: { id: string; reviewId: string };
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    // throw new Error("Error loading review details");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      this is product {params.id} review {params.reviewId}
    </div>
  );
}
