import React, { Component } from 'react'

export default class RecentProduct extends Component {
  render() {
    const item = this.props.item;
    const {id, title, brand, price, date} = item;
    return (
      <div>
        {id}
        {title}
        {brand}
        {price}
        {date}

        
      </div>
    )
  }
}
