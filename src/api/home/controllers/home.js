"use strict";

/**
 * home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.service("api::home.home").find({
      populate: [
        "heroProduct.image.mobile",
        "heroProduct.image.desktop",
        "heroProduct.image.tablet",
        "product1.image.mobile",
        "product1.image.desktop",
        "product1.image.tablet",
        "product2.image.mobile",
        "product2.image.desktop",
        "product2.image.tablet",
        "product3.image.mobile",
        "product3.image.desktop",
        "product3.image.tablet",
      ],
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
