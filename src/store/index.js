import Vue from "vue";
import Vuex from "vuex";
import { event } from "@/store/event.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // 変数を定義する場所、参照専用で直接変更してはいけない
  state: {
    isOpenSideBar: true,
    createTaskDialog: false,
  },
  // stateの変更する処理のみを記述
  mutations: {
    updateIsOpenSideBar(state, value) {
      state.isOpenSideBar = value;
    },
    updateCreateTaskDialog(state, value) {
      state.createTaskDialog = value;
    },
  },
  // コンポーネントで使用する関数を定義する
  actions: {
    switchSideBar({ commit }, payload) {
      // 第２引数がmutationsの関数の第２引数に入る
      commit("updateIsOpenSideBar", payload);
    },
    switchCreateTaskDialog({ commit }, payload) {
      commit("updateCreateTaskDialog", payload);
    },
  },
  modules: {
    event,
  },
});
