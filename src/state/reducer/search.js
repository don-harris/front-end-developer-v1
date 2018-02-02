const search = function (state = '', action) {
  switch(action.type) {
    case 'SEARCH_COUNTRY_CODES': return action.payload.search
    default: return state
  }
}

export default search