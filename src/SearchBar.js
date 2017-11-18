import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearch(term)
  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }
}
