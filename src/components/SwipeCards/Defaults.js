import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  noMoreCardsText: {
    fontSize: 22,
  },
})

const NoMoreCards = () => (
  <View>
    <Text style={styles.noMoreCardsText}>No more cards</Text>
  </View>
)

export default {
  NoMoreCards,
}
