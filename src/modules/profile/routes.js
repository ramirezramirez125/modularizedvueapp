import ProfileModule from "./ProfileModule.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ProfileAboutPage from "./pages/ProfileAboutPage.vue";

export const ProfileRoutes = [
  {
    path: "/users/:id",
    component: ProfileModule,
    children: [
      {
        path: "/",
        name: "profile",
        component: ProfilePage
      },
      {
        path: "about",
        name: "profile.about",
        component: ProfileAboutPage
      }
    ]
  }
];
