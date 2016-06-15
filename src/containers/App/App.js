import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../util/redux'
import views from '../../navigation'
import * as navigationActions from '../../reducers/navigation/actions'
import * as cardActions from '../../reducers/cards/actions'

import React, { Component, PropTypes } from 'react'
import SwipeCards from 'react-native-swipe-cards'
import Card from '../../components/Card'
import NoMoreCards from '../../components/NoMoreCards'
import YesDetail from '../../components/YesDetail'

import styles from './App.styles'

class App extends Component {
  static propTypes = {
    currentView: PropTypes.string,
    toDo: PropTypes.arrayOf(PropTypes.object).isRequired,
    saidYes: PropTypes.func.isRequired,
    saidNo: PropTypes.func.isRequired,
    refreshCards: PropTypes.func.isRequired,
    fetchFromParse: PropTypes.func.isRequired,
    goToView: PropTypes.func.isRequired,
    popView: PropTypes.func.isRequired,
  }

  state = {
    cards: this.props.toDo,
  }

  componentDidMount() {
    this.props.fetchFromParse()
  }

  render() {
    const { toDo, currentView, refreshCards, saidYes, saidNo, goToView, popView } = this.props
    let component
    if (currentView === views.SWIPE) {
      component = (
        <SwipeCards
          style={styles.swipeCards}
          yupStyle={styles.yup}
          yupTextStyle={styles.yupText}
          nopeStyle={styles.nope}
          nopeTextStyle={styles.nopeText}

          card={toDo[0]}
          loop={true}
          renderCard={cardData => <Card data={cardData} />}
          renderNoMoreCards={() => <NoMoreCards refreshCards={refreshCards} />}

          handleYup={() => goToView(views.YES_DETAIL)}
          handleNope={() => saidNo(toDo[0])}

          resetState={f => f}
        />
      )
    } else if (currentView === views.YES_DETAIL) {
      component = (
        <YesDetail
          card={toDo[0]}
          acceptHandler={() => {
            saidYes(toDo[0])
          }}
          rejectHandler={() => {
            saidNo(toDo[0])
            goToView(views.SWIPE)
          }}
          backHandler={popView}
        />
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
