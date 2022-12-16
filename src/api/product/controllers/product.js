"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service("api::product.product").findOne(id, {
      ...query,
      populate: [
        "image.desktop",
        "image.tablet",
        "image.mobile",
        "gallery.first.mobile",
        "gallery.second.mobile",
        "gallery.third.mobile",
        "gallery.first.tablet",
        "gallery.second.tablet",
        "gallery.third.tablet",
        "gallery.first.desktop",
        "gallery.second.desktop",
        "gallery.third.desktop",
        "categoryImage.mobile",
        "categoryImage.tablet",
        "categoryImage.desktop",
      ],
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
