const { getStore } = require("@netlify/blobs");

exports.handler = async () => {
  try {
    const store = getStore("coupons_store");
    const listResult = await store.list();
    const coupons = [];

    for (const key of listResult.blobs) {
      const dataStr = await store.get(key.key);
      if (dataStr) coupons.push(JSON.parse(dataStr));
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coupons)
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};