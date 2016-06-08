import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../util/redux'
import * as viewActions from '../../reducers/view/actions'
import * as cardActions from '../../reducers/cards/actions'

import React, { Component, PropTypes } from 'react'
import SwipeCards from 'react-native-swipe-cards'
import Card from '../../components/Card'
import NoMoreCards from '../../components/NoMoreCards'

class App extends Component {
  static propTypes = {
    toDo: PropTypes.arrayOf(PropTypes.object).isRequired,
    saidYes: PropTypes.func.isRequired,
    saidNo: PropTypes.func.isRequired,
    refreshCards: PropTypes.func.isRequired,
    goToView: PropTypes.func.isRequired,
  }

  state = {
    cards: this.props.toDo,
  }

  componentWilLReceiveProps(nextProps) {
    this.setState({
      cards: nextProps.toDo,
    })
  }

  handleYup(card) {
    this.props.saidYes(card)
  }

  handleNope(card) {
    this.props.saidNo(card)
  }

  render() {
    console.log(this.state.cards)
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={true}
        renderCard={cardData => <Card {...cardData} />}
        renderNoMoreCards={() => (
          <NoMoreCards
            refreshCards={() => {
              this.props.refreshCards()
              this.forceUpdate()
            }}
          />
        )}

        handleYup={card => this.handleYup(card)}
        handleNope={card => this.handleNope(card)}

        showYup={true}
        showNope={true}
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
