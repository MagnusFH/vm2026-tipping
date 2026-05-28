const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const coupon = JSON.parse(event.body);
    if (!coupon.userId || !coupon.userName) {
      return { statusCode: 400, body: "Invalid Coupon Schema" };
    }

    // Connect to Netlify's high-performance native key-value storage engine
    const store = getStore("coupons_store");
    await store.set(coupon.userId, JSON.stringify(coupon));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
