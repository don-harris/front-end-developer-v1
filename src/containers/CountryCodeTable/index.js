import { connect } from 'react-redux'

import { CountryCodeTable } from '../../components'
import { appInitialised } from '../../state/actions'
import { getExternalData } from '../../state/selectors'

//had to do some quick research on mapDispatchToProps. We had obviously used mapStateToProps all the time but not mapDispatchToProps.
// I read through https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops and https://learn.co/lessons/map-dispatch-to-props-readme.
//I wrote some notes which should be in the photos I will send while I was reading through.

function mapStateToProps (state) {
  return {
    externalData: getExternalData(state),
    search: state.search
  }
}

//I did look through two projects I've worked on just to make sure I was using e.target.value(or event.target.value) correctly.
//Previously I have added it in when I don't need it.
//resources https://github.com/don-harris/pings/blob/master/client/components/NewPing.jsx. https://github.com/don-harris/LineItUp-Legit-this-time/blob/master/client/components/SearchBar.jsx
function mapDispatchToProps (dispatch) {
  return {
    initialiseApp: () => dispatch(appInitialised()),
    searchFunc: (e) => dispatch(searchAction(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryCodeTable)
