import { UserService } from "./services";

export const SET_USER = "profile/SET_USER";
export const FETCH_USER_BY_ID = "profile/FETCH_USER_BY_ID";

export const ProfileStore = {
  state: {
    user: null
  },
  mutations: {
    [SET_USER](state, { user }) {
      state.user = user;
    }
  },
  getters: {
    user: state => {
      return state.user;
    }
  },
  actions: {
    [FETCH_USER_BY_ID]: ({ commit }, { id }) => {
      commit(SET_USER, { user: null });
      return new Promise((res, rej) => {
        setTimeout(() => {
          const user = UserService.getUser({ id });
          res(user);
        }, 1000);
      }).then(user => {
        commit(SET_USER, { user });
        return user;
      });
    }
  }
};
