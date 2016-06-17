import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './DetailList.styles'
import Detail from '../Detail'

const DetailList = ({ data }) => {
  const details = {
    organization: data.get('organization'),
    organizationUrl: data.get('organizationUrl'),
    dateOfEvent: data.get('dateOfEvent'),
    location: data.get('location'),
    shortDesc: data.get('shortDesc'),
    perks: data.get('perks'),
  }

  return (
    <View style={styles.container}>
      {Object.keys(details).map((key, index) => {
        const detail = details[key]
        if (typeof detail === 'undefined' || detail === '') return null
        return <Detail key={index} icon={key} text={detail} />
      })}
    </View>
  )
}
DetailList.propTypes = {
  /** An immutable Parse object that represents the card **/
  data: PropTypes.object.isRequired,
}

export default DetailList
