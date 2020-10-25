import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

interface Store {
    count: number,
    obj: { name: string, age: number }
}

const counter = {
  state: {
    count: 1,
    obj: {
      name: 'Joen',
      age: 20
    }
  },
  mutations: {
    increment(state:Store) {
      state.count++;
    },
    nameUpdate(state:Store) {
      state.obj.name = 'sd'
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
  getters: {
    name: state => {
      return state.obj.name
    }
  }
}

export default new Vuex.Store<Store>(store);
