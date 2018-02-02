//used personal project LineItUp to see what is needed for a combined reducer. (https://github.com/don-harris/LineItUp-Legit-this-time/blob/master/client/reducers/index.js)

// I decided to add in the combine reducer because that's what I've used many times. I moved the original reducer into its own file. 

import { combineReducers } from 'redux'

import externalData from './externalData'
import search from './search'

export default combineReducers({
  externalData,
  search
})
