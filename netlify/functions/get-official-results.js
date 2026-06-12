import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const store = getStore("official_results_store");
    const dataText = await store.get("live_results");

    // If no data has been published yet, return a clean default state
    if (!dataText) {
      const fallback = {
        actualResults: {},
        actualPlayoffs: { r16: [], r8: [], r4: [], r2: [], winner: "", topscorer: "" }
      };
      return new Response(JSON.stringify(fallback), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(dataText, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(error.toString(), { status: 500 });
  }
};