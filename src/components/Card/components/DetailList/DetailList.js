import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './DetailList.styles'
import Detail from '../Detail'

const DetailList = ({ data }) => {
  const details = [
    data.get('organization'),
    data.get('organizationUrl'),
    data.get('dateOfEvent'),
    data.get('location'),
    data.get('shortDesc'),
    data.get('perks'),
  ]

  return (
    <View style={styles.container}>
      {details.map((detail, index) => {
        if (typeof detail === 'undefined' || detail === '') return null
        return <Detail key={index} icon="I" text={detail} />
      })}
    </View>
  )
}
DetailList.propTypes = {
  /** An immutable Parse object that represents the card **/
  data: PropTypes.object.isRequired,
}

export default DetailList
