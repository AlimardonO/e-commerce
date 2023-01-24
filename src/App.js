import React, { Component } from 'react';
import Header from './components/Header';
import Items from './components/Items';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Black Chair',
          img: 'chair.jpg',
          desc: 'Lorem lorem lorem lorem',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'chairs_table.jpg',
          desc: 'Lorem lorem lorem lorem',
          category: 'tables',
          price: '99.99'
        },
        {
          id: 3,
          title: 'Coffee Table',
          img: 'coffee-table.jpg',
          desc: 'Lorem lorem lorem lorem',
          category: 'coffee-table',
          price: '299.99'
        },
        {
          id: 4,
          title: 'Lamp',
          img: 'lamp.jpg',
          desc: 'Lorem lorem lorem lorem',
          category: 'lamps',
          price: '49.99'
        },
        {
          id: 5,
          title: 'Plants',
          img: 'plants.jpg',
          desc: 'Lorem lorem lorem lorem',
          category: 'plants',
          price: '299.99'
        },
        {
          id: 6,
          title: 'Sofa',
          img: 'sofa.jpg',
          desc: 'Lorem lorem lorem lorem',
          category: 'sofas',
          price: '399.99'
        },
      ],
    }
    this.itemAdd = this.itemAdd.bind(this);
  }
  render() {
    return (
      <div>
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.itemAdd}/>
      </div>
    )
  }
  itemAdd(item){
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App