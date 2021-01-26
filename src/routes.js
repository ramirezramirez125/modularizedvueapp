import { ProfileRoutes } from "./modules/profile/routes";
import HomePage from "./pages/HomePage.vue";

export default [
  {
    path: "/",
    component: HomePage
  },
  // Module Routes
  ...ProfileRoutes
];
