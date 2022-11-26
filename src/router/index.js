import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Ambassador from "../views/Ambassador.vue";
import PrevAmb from "../views/PrevAmb.vue";
import HelpCenter from "../views/HelpCenter.vue";
// import Product from "../views/Product.vue";
// import Solutions from "../views/Solutions.vue";
// import Resources from "../views/Resources.vue";
// import Pricing from "../views/Pricing.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/product",
    name: "product",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Product.vue"),
  },
  // {
  //   path: "/solutions",
  //   name: "solutions",

  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Start.vue"),
  // },
  {
    path: "/resources",
    name: "resources",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Resources.vue"),
  },
  {
    path: "/company",
    name: "company",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Company.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pricing.vue"),
  },
  {
    path: "/cards",
    name: "cards",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cards.vue"),
  },

  {
    path: "/ambassador",
    name: "Ambassador",
    component: Ambassador,
  },
  {
    path: "/prevamb",
    name: "PrevAmb",
    component: PrevAmb,
  },
  {
    path: "/Help",
    name: "HelpCenter",
    component: HelpCenter,
  },

  {
    path: "/start",
    name: "start",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Start.vue"),
  },
  {
    path: "/sell",
    name: "sell",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sell.vue"),
  },
  {
    path: "/manage",
    name: "manage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Manage.vue"),
  },
  {
    path: "/grow",
    name: "grow",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Grow.vue"),
  },
  {
    path: "/legal",
    name: "legal",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Legal.vue"),
  },
  {
    path: "/intro",
    name: "intro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Intro.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
