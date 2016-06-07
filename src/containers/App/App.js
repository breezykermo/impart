import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../util/redux'
import * as viewActions from '../../reducers/view/actions'
import * as cardActions from '../../reducers/cards/actions'

import React, { Component, PropTypes } from 'react'
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

class App extends Component {
  static propTypes = {
    saidYes: PropTypes.func.isRequired,
    saidNo: PropTypes.func.isRequired,
    goToView: PropTypes.func.isRequired,
  }

  state = {
    cards: Cards,
  }

  handleYup(card) {
    this.props.saidYes(card)
  }

  handleNope(card) {
    this.props.saidNo(card)
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}

        renderCard={cardData => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={card => this.handleYup(card)}
        handleNope={card => this.handleNope(card)}

        showYup={true}
        showNope={true}
      />
    )
  }
}

export default connect(
  state => state,
  mapDispatchToProps([viewActions, cardActions])
)(App)
