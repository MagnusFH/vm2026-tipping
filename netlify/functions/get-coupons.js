import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  try {
    const store = getStore("coupons_store");
    const listResult = await store.list();
    const coupons = [];

    for (const key of listResult.blobs) {
      const dataStr = await store.get(key.key);
      if (dataStr) coupons.push(JSON.parse(dataStr));
    }

    return new Response(JSON.stringify(coupons), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(error.toString(), { status: 500 });
  }
};