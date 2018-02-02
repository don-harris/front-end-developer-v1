import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'
import { Row, Table, PageHeader } from 'react-bootstrap'
import { log } from 'util';

class CountryCodeTable extends Component {
  componentDidMount () {
    this.props.initialiseApp()
  }

  getRows (data) {
    //need to add something which could take the text and see if it is included in the data. 
    //I used my personal project just seeing a different way I had done it in the past.
    // Resource; LineItUp-Legit-this-time. I looked in container and componen
    //after testing it out realised I needed to make the case sensitivity more dynamic. I searched on google and found 'https://www.w3schools.com/jsref/jsref_toLowerCase.asp'. I also used https://stackoverflow.com/questions/154862/convert-javascript-string-to-be-all-lower-case
    const searchMatch = (item) => item.toLowerCase().includes(this.props.search.toLowerCase())
    return map(
      ({ name, code, dialCode }) => (
        <tr key={code}>
          <td>{name}</td>
          <td>{code}</td>
          <td>{dialCode}</td>
        </tr>
      ),
      // needed to add something to allow data to stay visible even after you start typing and then delete text. I tried to write this out in my planning which will be  attached in my email. Also used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter as a resource.
      data.filter(({name, code, dialCode}) => searchMatch(name) || searchMatch(code) || searchMatch(dialCode))
    )
  }

  //removed searchBar renderer and just placed the input straight into render()

  getTable (data) {
    return data ? (
      <Table striped responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Dial Code</th>
          </tr>
        </thead>
        <tbody>{this.getRows(this.props.externalData.externalData)}</tbody>
      </Table>
    ) : (
      <p>Loading data</p>
    )
  }

  //need to create a searchBar function to call a search function when the onChange happens.
  // Used my personal project LineItUp-Legit-this-time as a resource along with Ready-For-Shreddy (https://github.com/don-harris/Ready-For-Shreddy)
  
  render () {
    return (
      <div>
        <Row key='header-row'>
          <h1>Country Calling Codes</h1>
        </Row>
        <h3>Search:</h3><input name="search" onChange={this.props.searchFunc} value={this.props.search}/>
        <br/>
        <button type="reset" onClick={this.props.searchFunc} value="">Reset</button>
        <hr/>
        <Row key='body-row'>{this.getTable(this.props.externalData)}</Row>,
      </div>
    )
  }
}

CountryCodeTable.propTypes = {
  externalData: PropTypes.array,
  initialiseApp: PropTypes.func.isRequired,
  searchFunc: PropTypes.func.isRequired,
  search: PropTypes.string
  
}

export default CountryCodeTable
