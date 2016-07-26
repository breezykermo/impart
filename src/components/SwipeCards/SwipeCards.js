/* Gratefully ported from https://github.com/brentvatne/react-native-animated-demo-tinder */
/* eslint-disable */
import React, { Component } from 'react'
import {
  Text,
  View,
  Animated,
  PanResponder,
} from 'react-native'
import clamp from 'clamp' // eslint-i
import styles from './SwipeCards.styles'
import Defaults from './Defaults.js'

var SWIPE_THRESHOLD = 120;

class SwipeCards extends Component {
  static propTypes = {
    /* Dispatch an action in handleYup to change card,
       and the new card will show up. */
    card: React.PropTypes.object,
    renderCards: React.PropTypes.func,
    renderNoMoreCards: React.PropTypes.func,
    yupImage: React.PropTypes.any,
    nopeImage: React.PropTypes.any,
    handleYup: React.PropTypes.func,
    handleNope: React.PropTypes.func,
  };
  static defaultProps = {
    showYup: true,
    showNope: true,
  };

  state = {
    pan: new Animated.ValueXY(),
    enter: new Animated.Value(1),
    screenOpacity: new Animated.Value(1),
    cardOpacity: new Animated.Value(1)
  }

  componentDidMount() {
    this._animateEntrance();
  }

  // NB: This is the only function that is called each time
  //     a card is swiped, even though new props are registered.
  _animateEntrance() {
    this.state.pan.setValue({x: 0, y: 0});
    this.state.screenOpacity.setValue(1);
    this.state.cardOpacity.setValue(0.5);
    Animated.timing(
      this.state.cardOpacity,
      {
        toValue: 1,
        duration: 300,
      }
    ).start();
    // Delay this animation so that you can't see background
    // card behind front card opacity.
    Animated.timing(
      this.state.screenOpacity,
      {
        toValue: 0,
        // delay: 100,
        duration: 200,
      }
    ).start()
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        var velocity;

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {

          this.state.screenOpacity.setValue(1);

          this.state.pan.x._value > 0
            ? this.props.handleYup(this.props.card)
            : this.props.handleNope(this.props.card)

          this.props.cardRemoved
            ? this.props.cardRemoved(this.props.cards.indexOf(this.props.card))
            : null

          this._animateEntrance();
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 4
          }).start()
        }
      }
    })
  }

  _resetState() {
    this._animateEntrance();
  }

  renderNoMoreCards() {
    if (this.props.renderNoMoreCards)
      return this.props.renderNoMoreCards();

    return (
      <Defaults.NoMoreCards />
    )
  }

  renderCard(cardData) {
    return this.props.renderCard(cardData)
  }

  render() {
    let { pan, enter, } = this.state;

    let [translateX, translateY] = [pan.x, pan.y];

    let cardOpacity = pan.x.interpolate({inputRange: [-300, 0, 300], outputRange: [0.2, 1, 0.2]});
    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
    let scale = enter;
    let animatedCardstyles = {
      transform: [{translateX},
      {translateY}, {rotate},
      {scale}],
      opacity: cardOpacity,//this.state.cardOpacity, -- NB: I don't seem to able to switch between a panned value and an Animated.value
    };

    let screenOpacity = pan.x.interpolate({inputRange: [-300, 0, 300], outputRange: [0.9, 0.1, 0.9]});
    let animatedScreenstyles = {opacity: screenOpacity};

    let yupOpacity = pan.x.interpolate({inputRange: [0, 150], outputRange: [0, 1]});
    let yupScale = pan.x.interpolate({inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp'});
    let animatedYupStyles = {transform: [{scale: yupScale}], opacity: yupOpacity}

    let nopeOpacity = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0]});
    let nopeScale = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp'});
    let animatedNopeStyles = {transform: [{scale: nopeScale}], opacity: nopeOpacity}

    return (
      <View>
      {/* White screen view behind card. Second animated screen is to cover during componentDidMount animation */}
        <Animated.View style={[styles.screen, animatedScreenstyles]} />
        <Animated.View style={[styles.screen, { opacity: this.state.screenOpacity }]} />
      {/* Cards, yup, nope and NoMoreCards */}
        <View style={[styles.container, this.props.style]}>
          { this.props.card
              ? (
              <Animated.View style={[styles.card, animatedCardstyles]} {...this._panResponder.panHandlers}>
                {this.renderCard(this.props.card)}
              </Animated.View>
              )
              : this.renderNoMoreCards() }

              { this.props.renderNope
                ? this.props.renderNope(pan)
                : (
                    this.props.showNope
                    ? (
                      <Animated.View style={[styles.nope, animatedNopeStyles]}>
                        <Text style={styles.nopeText}>Nope!</Text>
                      </Animated.View>
                    ) : null
                  )
              }

              { this.props.renderYup
                ? this.props.renderYup(pan)
                : (
                    this.props.showYup
                    ? (
                      <Animated.View style={[styles.yup, animatedYupStyles]}>
                        <Text style={styles.yupText}>Yup!</Text>
                      </Animated.View>
                    ) : null
                  )
              }
        </View>
    </View>
    );
  }
}
/* eslint-enable */
export default SwipeCards
