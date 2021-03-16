const initialState = {
  sortType:null,
  list: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CITY':
      return { ...state, list: [...state.list, action.payload] }
    case 'DEL_CITY':
      return { ...state, list:[...state.list].filter(item => item.name !== action.payload) }
    case 'SORT_TABLE':
      if(state.list.length >= 2) {
        let sorted ;
        let isSorted ;
        if(!state.sortType) {
          sorted = [...state.list].sort((a,b) => {
            if(a.name > b.name) { return 1; }
            if(a.name < b.name) { return -1; }
            return 0;
          })
          isSorted = true;
        } else {
          sorted = [...state.list].reverse();
        }
        return {...state,sortType:isSorted,list:sorted}
      }
    default:
      break;
  }

  return state
}