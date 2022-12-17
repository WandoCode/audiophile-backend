"use strict";

/**
 * customRoutes controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    const { category } = ctx.params;

    const entity = await strapi.db.query("api::product.product").findMany({
      select: ["name", "new", "description", "slug"],
      where: { category: `${category}` },
      populate: [
        "categoryImage.desktop",
        "categoryImage.tablet",
        "categoryImage.mobile",
      ],
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
