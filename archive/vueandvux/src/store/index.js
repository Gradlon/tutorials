import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import test from './test'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      test
    },
    state: {
      counter: 0,
      value: 0
    },
    getters: {
      doubleCounter: state => {
        return state.counter * 2
      },
      stringCounter: state => {
        return state.counter + ' Clicks'
      },
      value: state => {
        return state.value
      }
    },
    mutations: {
      increment: (state, payload) => {
        state.counter += payload
      },
      decrement: (state, payload) => {
        state.counter -= payload
      },
      updateValue: (state, payload) => {
        state.value = payload
      }
    },
    actions: {
      // increment: context => {
      //   context.commit('increment')
      // } Same as bellow but destructured
      increment: ({ commit }, payload) => {
        commit('increment', payload)
      },
      decrement: ({ commit }, payload) => {
        commit('decrement', payload)
      },
      asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
          commit('increment', payload.by)
        }, payload.duration)
      },
      asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
          commit('decrement', payload.by)
        }, payload.duration)
      },
      updateValue: ({ commit }, payload) => {
        commit('updateValue', payload)
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./test'], () => {
      const newTest = require('./test').default
      Store.hotUpdate({ modules: { test: newTest } })
    })
  }

  return Store
}
