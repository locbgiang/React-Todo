import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const list = [];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list
    };
  }
  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name : item,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  }
  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      list: this.state.list.map(item => {
        if(itemId === item.id){
          return {
            ...item, 
            purchased: !item.purchased
          }
        }
        return item;
      })
    });
  };
  clearPurchased = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(item=>!item.purchased)
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1>Todo List: MVP</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          list = {this.state.list}
          toggleItem = {this.toggleItem}
          clearPurchased = {this.clearPurchased}
        />
      </div>

    );
  }
}

export default App;
