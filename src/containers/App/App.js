import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../util/redux'
import views from '../../navigation'
import * as navigationActions from '../../reducers/navigation/actions'
import * as cardActions from '../../reducers/cards/actions'
import * as userActions from '../../reducers/user/actions'

import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import Loading from '../../components/Loading'
import Nav from '../../components/Nav'
import SwipeCards from 'react-native-swipe-cards'
import Card from '../../components/Card'
import NoMoreCards from '../../components/NoMoreCards'
import YesDetail from '../../components/YesDetail'

import styles from './App.styles'

class App extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    currentView: PropTypes.string,
    toDo: PropTypes.arrayOf(PropTypes.object).isRequired,
    swipeYes: PropTypes.func.isRequired,
    swipeNo: PropTypes.func.isRequired,
    refreshCards: PropTypes.func.isRequired,
    fetchFromParse: PropTypes.func.isRequired,
    goToView: PropTypes.func.isRequired,
    popView: PropTypes.func.isRequired,
    syncUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  state = {
    cards: this.props.toDo,
  }

  componentDidMount() {
    this.props.syncUser()
  }

  render() {
    const {
      user,
      toDo,
      currentView,
      refreshCards,
      swipeYes,
      swipeNo,
      goToView,
      popView,
      isLoading,
    } = this.props

    let innerComponent
    if (isLoading) {
      innerComponent = (
        <Loading />
      )
    } else if ((currentView === views.SWIPE) && !isLoading) {
      innerComponent = (
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
          handleNope={() => swipeNo(toDo[0])}

          resetState={f => f}
        />
      )
    } else if (currentView === views.YES_DETAIL) {
      innerComponent = (
        <YesDetail
          card={toDo[0]}
          userHasDetails={user.email !== '' && user.email !== undefined}
          acceptHandler={() => {
            swipeYes(toDo[0])
          }}
          rejectHandler={() => {
            swipeYes(toDo[0])
            goToView(views.SWIPE)
          }}
          backHandler={popView}
        />
      )
    }
    // return innerComponent
    return (
      <View style={styles.container}>
        <Nav />
        {innerComponent}
      </View>
    )
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
      isLoading: state.cards.get('isFetching'),
      user: state.user.get('profile'),
    }
  },
  mapDispatchToProps([navigationActions, cardActions, userActions])
)(App)
