import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../util/redux'
import views from '../../navigation'
import * as navigationActions from '../../reducers/navigation/actions'
import * as cardActions from '../../reducers/cards/actions'

import React, { Component, PropTypes } from 'react'
import SwipeCards from 'react-native-swipe-cards'
import Card from '../../components/Card'
import NoMoreCards from '../../components/NoMoreCards'

class App extends Component {
  static propTypes = {
    currentView: PropTypes.string,
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
    const { toDo, currentView, refreshCards, swipeYes, swipeNo } = this.props
    let component
    if (currentView === views.SWIPE) {
      component = (
        <SwipeCards
          card={toDo[0]}
          loop={true}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards refreshCards={refreshCards} />}

          handleYup={swipeYes}
          handleNope={swipeNo}

          resetState={f => f}
        />
      )
    } else if (currentView === views.YES_DETAIL) {
      component = (
        <NoMoreCards />
      )
    }
    return component
  }
}

export default connect(
  state => {
    const cardsAsObj = state.cards.get('toDo').toJS()
    const cardsAsList = Object.keys(cardsAsObj)
      .map(key => cardsAsObj[key])
    return {
      currentView: state.navigation.get('current'),
      toDo: cardsAsList,
    }
  },
  mapDispatchToProps([navigationActions, cardActions])
)(App)
