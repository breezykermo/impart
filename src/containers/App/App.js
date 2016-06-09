import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../util/redux'
import * as viewActions from '../../reducers/navigation/actions'
import * as cardActions from '../../reducers/cards/actions'

import React, { Component, PropTypes } from 'react'
import SwipeCards from 'react-native-swipe-cards'
import Card from '../../components/Card'
import NoMoreCards from '../../components/NoMoreCards'

class App extends Component {
  static propTypes = {
    toDo: PropTypes.arrayOf(PropTypes.object).isRequired,
    swipeYes: PropTypes.func.isRequired,
    swipeNo: PropTypes.func.isRequired,
    refreshCards: PropTypes.func.isRequired,
    goToView: PropTypes.func.isRequired,
  }

  state = {
    cards: this.props.toDo,
  }

  render() {
    return (
      <SwipeCards
        card={this.props.toDo[0]}
        loop={true}
        renderCard={cardData => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards refreshCards={this.props.refreshCards} />}

        handleYup={this.props.swipeYes}
        handleNope={this.props.swipeNo}

        resetState={f => f}
      />
    )
  }
}

export default connect(
  state => {
    const cardsAsObj = state.cards.get('toDo').toJS()
    const cardsAsList = Object.keys(cardsAsObj)
      .map(key => cardsAsObj[key])
    return {
      toDo: cardsAsList,
    }
  },
  mapDispatchToProps([viewActions, cardActions])
)(App)
