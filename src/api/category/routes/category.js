module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/category/:category",
      handler: "category.find",
    },
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/categories",
      handler: "category.findNames",
    },
  ],
};
