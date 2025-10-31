export default {
    state: {
        test: "This is a test value!"
    },

    getters: {
        test: state => {
            return state.test
        }
    },

    mutations: {
        setTest: (state, payload) => {
            state.test = payload;
        }
    },

    actions: {
        setTest: (context, payload) => {
            context.commit("setTest", payload)
        }
    }
}