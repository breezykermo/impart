import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../util/redux'
import views from '../../navigation'
import * as navigationActions from '../../reducers/navigation/actions'
import * as cardActions from '../../reducers/cards/actions'
import * as userActions from '../../reducers/user/actions'

import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Loading from '../../components/Loading'
import Nav from '../../components/Nav'
import SwipeCards from '../../components/SwipeCards'
import Card from '../../components/Card'
import NoMoreCards from '../../components/NoMoreCards'
import YesDetail from '../../components/YesDetail'

import styles from './App.styles'

class App extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    currentView: PropTypes.string,
    toDo: PropTypes.any.isRequired, /* immutable list */
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
        <View>
          {/* TODO: abstract this backdrop out??? */}
        {toDo.length != 0 ? (
          <View style={styles.backgroundCardContainer}>
            <Card styles={styles.backgroundCard} data={toDo[1] || toDo[0]} />
          </View>
        ) : null}
          <SwipeCards
            style={styles.swipeCards}


            card={toDo[0]}
            renderCard={cardData => <Card data={cardData} />}
            renderNoMoreCards={() => <NoMoreCards refreshCards={refreshCards} />}

            handleYup={() => goToView(views.YES_DETAIL)}
            handleNope={() => swipeNo(toDo[0])}
          />
        </View>
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
  state => ({
    currentView: state.navigation.get('current'),
    toDo: state.cards.get('toDo').toJS(),
    isLoading: state.cards.get('isFetching'),
    user: state.user.get('profile'),
  }),
  mapDispatchToProps([navigationActions, cardActions, userActions])
)(App)
