import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/searchbox/searchbox';
class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [],
         searchField: '',
      };
   }

   componentDidMount() {
      const url = 'https://jsonplaceholder.typicode.com/users';
      fetch(url)
         .then((response) => response.json())
         .then((users) => this.setState({ monsters: users }))
         .catch((error) => {
            alert(error);
         });
   }

   handleChange = (e) => {
      this.setState({ searchField: e.target.value });
   };

   render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter((monster) =>
         monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
      return (
         <div className='App'>
            <h1>Monsters Rolodex</h1>
            <SearchBox
               placeholder='search monster'
               handleChange={this.handleChange}
            />
            <CardList monsters={filteredMonsters} />
         </div>
      );
   }
}

export default App;
