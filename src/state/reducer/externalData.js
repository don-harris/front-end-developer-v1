import { EXTERNAL_DATA_LOAD_FAILED, EXTERNAL_DATA_LOADED } from '../constants'

const initialState = {
  externalData: []
}

const externalData = function (state = initialState, action) {
  switch (action.type) {
    case EXTERNAL_DATA_LOAD_FAILED: {
      return {
        ...state,
        externalDataLoadError: action.payload.externalDataLoadError
      }
    }
    case EXTERNAL_DATA_LOADED: {
      console.log({action})
      return {
        ...state,
        externalData: action.payload.externalData
      }
    }
    default: {
      return state
    }
  }
}

export default externalData