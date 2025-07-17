/**
 * `post-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  coverImage: {
    fields: ["url", "alternativeText"],
  },
  author: {
    populate: {
      avatar: {
        fields: ["url", "alternativeText"],
      },
      posts: {
        fields: ["documentId", "title"],
      },
    },
  },
  categories: true,
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In post-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
