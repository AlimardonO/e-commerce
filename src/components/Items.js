import React, { Component } from 'react'
export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
          <div key={el.id} className="items">
            <div className='imagediv'>
              <img src={'./images/' + el.img} />
            </div>
            <div className='itemdiv'>
              <p className='title'>{el.title}</p>
              <p>{el.desc}</p>
              <p className='price'>{el.price}$</p>
              <button onClick={() => this.props.onAdd(el)}>+</button>
            </div>
          </div>
        ))}
      </main>
    )
  }
}

export default Items