import React, { Component } from 'react'
import { View } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import Card from '../../components/Card'
import NoMoreCards from '../../components/NoMoreCards'

const Cards = [
  {
    header: 'Supervise holiday program',
    organization: 'MindLab',
    location: 'Carlton Gore Road, Newmarket, Auckland',
    body: `MindLab is looking for volunteers to supervise our holiday programs,
which we run for high school students. No specific experience is required.`,
  },
  { header: 'NEXT', body: 'Aubergine' },
  // { header: 'NEXT', body: 'Courgette' },
  // { header: 'NEXT', body: 'Blueberry' },
  // { header: 'NEXT', body: 'Umm...' },
  // { header: 'NEXT', body: 'orange' },
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
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}

        showYup={true}
        showNope={true}
      />
    )
  }
}
