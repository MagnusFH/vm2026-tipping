import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  // Sjekk at det er en POST-forespørsel
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    // Hent ut json-dataen fra forespørselen på moderne vis
    const bodyText = await req.text();
    const coupon = JSON.parse(bodyText);

    if (!coupon.userId || !coupon.userName) {
      return new Response("Invalid Coupon Schema", { status: 400 });
    }

    // Her kobler Netlify Blobs seg på helt automatisk!
    const store = getStore("coupons_store");
    await store.set(coupon.userId, JSON.stringify(coupon));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(error.toString(), { status: 500 });
  }
};
