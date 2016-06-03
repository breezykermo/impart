import React, { Component } from 'react'
import { View } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import Card from '../../components/Card'

const Cards = [
  { text: 'Tomato', backgroundColor: 'red' },
  { text: 'Aubergine', backgroundColor: 'purple' },
  { text: 'Courgette', backgroundColor: 'green' },
  { text: 'Blueberry', backgroundColor: 'blue' },
  { text: 'Umm...', backgroundColor: 'cyan' },
  { text: 'orange', backgroundColor: 'orange' },
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
