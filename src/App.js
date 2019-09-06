import React, { Component } from 'react';
import List from './List'
import './App.css';

/*
const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}
*/

class App extends Component {
  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   }
  // };
  state = {
    lists: [
    {
      id: '1',
      header: 'First list',
      cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
    },
    {
      id: '2',
      header: 'Second list',
      cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
    },
    {
      id: '3',
      header: 'Third list',
      cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
    },
    {
      id: '4',
      header: 'Fourth list',
      cardIds: [ 'l', 'm' ],
    },
  ],
  allCards: {
    'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
    'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
    'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
    'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
    'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
    'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
    'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
    'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
    'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
    'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
    'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
  },
}

handleDelete = (listId, cardId) => {
  //Creates an array from list of lists with a function...
  const newList = this.state.lists.map(list => {
    //..where if the list ID matches the list pulled from props...
    if (list.id === listId){
      //A new cardIds variable for the list is generated that filters the list
      //only adding items that don't include our cardId.
     const newCardIds = list.cardIds.filter(listCardId => listCardId !== cardId);
     //This returns an object with a key 
     return Object.assign({}, list, {cardIds: newCardIds});
    }
    return list;
  });
  this.setState({
    lists: newList
  });

}

  // handleDelete(card){ console.log('handle delete item called', {card}) }

  handleAddRandom = (listId) => { 
//adds random card from store.allCards to list
    const newList = this.state.lists.map(list => {
      if (list.id === listId) {
        let numCards = Object.keys(this.state.allCards).length;
        let randomIndex = Math.ceil(Math.random() * numCards);
        let randomCardId = Object.keys(this.state.allCards)[randomIndex];
        list.cardIds.push(randomCardId);
      }
      return list;
  });
  this.setState({
    lists: newList
  });
}

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onDeleteItem = {this.handleDelete}
              onAddRandom = {this.handleAddRandom}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
