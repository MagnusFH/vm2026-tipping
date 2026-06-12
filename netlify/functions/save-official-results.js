import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const bodyText = await req.text();
    const data = JSON.parse(bodyText);

    // Security check to ensure only you can update global scores.
    // Make sure to add ADMIN_SECRET to your Environment Variables in Netlify UI!
    if (!data.adminSecret || data.adminSecret !== process.env.ADMIN_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }

    const store = getStore("official_results_store");
    await store.set("live_results", JSON.stringify({
      actualResults: data.actualResults,
      actualPlayoffs: data.actualPlayoffs
    }));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(error.toString(), { status: 500 });
  }
};