import { ProfileStore } from "./modules/profile/store";

export const RootStore = {
  state: {
    applicationName: "Modularized Vue App"
  },
  getters: {
    appName(state) {
      return state.applicationName;
    }
  },
  modules: {
    profile: { ...ProfileStore }
  }
};
