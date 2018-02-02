import {
  APP_INITIALISED,
  EXTERNAL_DATA_LOAD_FAILED,
  EXTERNAL_DATA_LOADED
} from '../constants'

export const appInitialised = () => ({
  type: APP_INITIALISED
})

export const externalDataLoaded = externalData => ({
  type: EXTERNAL_DATA_LOADED,
  payload: {
    externalData
  }
})

export const externalDataLoadFailed = externalDataLoadError => ({
  type: EXTERNAL_DATA_LOAD_FAILED,
  payload: {
    externalDataLoadError
  }
})

//hadn't used the term payloads when we worked with react/redux (not sure why !) so I had to do some research again. I used https://redux.js.org/docs/basics/Actions.html which explained it well enough. Understand the context now. Took me a while to get the order right of the action when using the term. Easy enough to get when its as simple as 'all payloads are actions'.
//another resource used; https://github.com/don-harris/LineItUp-Legit-this-time/blob/master/client/actions/index.js

export function searchAction (search) {
  return {
    type: 'SEARCH_COUNTRY_CODES',
    payload: {
      search
    }
  }
}