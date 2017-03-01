
// takes the previous state of a _todo + the action and
// renders the new state of the todo
const todo = (state = {}, action) => {
  switch (action.type) {
    // if we're adding a td, then we just return the new obj
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    // if we're toggling a td, we need to return a new obj with the completed state flipped
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos