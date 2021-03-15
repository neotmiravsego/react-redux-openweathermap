export const addCityActionCreator = (city) => {
  return {
    type: 'ADD_CITY',
    payload: city
  }
}

export const sortListActionCreator = (sortType) => {
  return {
    type: 'SORT_TABLE',
    payload: sortType
  }
}

export const delCityActionCreator = (city) => {
  return {
    type: 'DEL_CITY',
    payload: city
  }
}

