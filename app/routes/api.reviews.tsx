import type { Route } from "./+types/api.reviews";
import { submitReview } from "~/lib/sanity.server";

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.rating || !data.text) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validate rating
    if (data.rating < 1 || data.rating > 5) {
      return new Response(
        JSON.stringify({ error: "Rating must be between 1 and 5" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate text length
    if (data.text.length < 10 || data.text.length > 500) {
      return new Response(
        JSON.stringify({ error: "Review text must be between 10 and 500 characters" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Submit to Sanity
    const review = await submitReview({
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      rating: parseInt(data.rating, 10),
      text: data.text.trim(),
    });

    return new Response(JSON.stringify({ success: true, review }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Review submission error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit review" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
