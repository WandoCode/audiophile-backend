module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products/slugs",
      handler: "product.findAll",
    },
    {
      method: "GET",
      path: "/products/product/:slug",
      handler: "product.findOne",
    },
    {
      method: "POST",
      path: "/products/prices",
      handler: "product.findPrices",
    },
  ],
};
