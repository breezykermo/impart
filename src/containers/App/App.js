import React, { Component } from 'react'
import { View } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import Card from '../../components/Card'

const Cards = [
  { header: 'NEXT', text: 'Tomato' },
  { header: 'NEXT', text: 'Aubergine' },
  { header: 'NEXT', text: 'Courgette' },
  { header: 'NEXT', text: 'Blueberry' },
  { header: 'NEXT', text: 'Umm...' },
  { header: 'NEXT', text: 'orange' },
]

export default class App extends Component {
  state = {
    cards: Cards,
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope(card) {
    console.log(`Nope for ${card.text}`)
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <View />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
}
