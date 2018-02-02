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
    // Resource; LineItUp-Legit-this-time. I looked in container and components/DealComponents/Mens.jsx
    const searchMatch = (item) => item.includes(this.props.search)
    return map(
      ({ name, code, dialCode }) => (
        <tr key={code}>
          <td>{name}</td>
          <td>{code}</td>
          <td>{dialCode}</td>
        </tr>
      ),
      data
    )
  }

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
      <input name="search" onChange={this.props.searchFunc} value={this.props.search}/>
        {this.searchBar()}
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
