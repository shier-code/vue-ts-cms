/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2021-12-10 11:17:41
 */
import { createStore, storeKey, Store, useStore as useVuexStore } from "vuex";

import { IRootState, IStoreType } from "./type";

import login from "./login/login";
const store = createStore<IRootState>({
  state: () => {
    return {
      name: "shier",
      age: 19,
    };
  },
  mutations: {},
  actions: {},
  modules: {
    login,
  },
});
export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
