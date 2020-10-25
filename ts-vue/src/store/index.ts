import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

interface Store {
    count: number,
}

const counter = {
  state: {
    count: 1,
  },
  mutations: {
    increment(state:Store) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
};



interface Store {
  name: string
}
const name = {
  state: {
    name: 'asd',
  },
  mutations: {
    increment(state:Store) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
};

const store: StoreOptions<Store> = {
  state: {
    ...counter.state,
    ...name.state
  },
  mutations: {
    ...counter.mutations
  },
  actions: {},
  modules: {},
}

export default new Vuex.Store<Store>(store);
