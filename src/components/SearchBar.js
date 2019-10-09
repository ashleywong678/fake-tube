import React, {Component} from 'react'

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState(state => {
      return {
        ...this.state,
        [name]: value
      }
    })
  }

  render(){
    return(
    <div className='search' >
      <form>
        <input type='text' name='search' 
        placeholder='Fake-tube and chill...'
        value={this.state.search} />
        <input type='submit' value='Search'/>
      </form>
    </div>
  )}

}
export default SearchBar