// src/store/showcase/mutations.js
export const updateCounter = (state, counter) => {
  state.counter++
}

// src/store/showcase/state.js
// Always use a function to return state if you use SSR
export default function () {
  return {
    counter: 0
  }
}
