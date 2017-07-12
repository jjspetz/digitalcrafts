
var initialState = {
  top500: []
};

export default function reducer (state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'SET_top500':
      var new_state = {};
      new_state = Object.assign (
        {},
        state,
        {top500: action.articles}
      )
      return new_state;
    case 'CHANGE_PAGE':
      return Object.assign(
        {},
        state,
        {[action.id]: action.data}
      );
    case 'API_UPDATE':
      return {
      
      }
    default:
      return state;
  }
}
