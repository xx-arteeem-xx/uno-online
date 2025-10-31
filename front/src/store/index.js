import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import test from "./test";

const store = new Vuex.Store({
    modules: {
        test
    },
    plugins: [createPersistedState()],
});

export default store;