import React, { PropTypes } from 'react'
import { View } from 'react-native'
import styles from './DetailList.styles'
import Detail from '../Detail'

const DetailList = ({ data, containerStyles, itemStyles }) => {
  const details = {
    organization: data.get('organization'),
    organizationUrl: data.get('organizationUrl'),
    dateOfEvent: data.get('dateOfEvent'),
    location: data.get('location'),
    shortDesc: data.get('shortDesc'),
    perks: data.get('perks')
  }

  return (
    <View style={containerStyles || styles.container}>
      {Object.keys(details).map((key, index) => {
        const detail = details[key]
        if (typeof detail === 'undefined' || detail === '') return null
        return <Detail key={index} style={itemStyles || null} icon={key} text={detail} />
      })}
    </View>
  )
}
DetailList.propTypes = {
  /** An immutable Parse object that represents the card **/
  data: PropTypes.object.isRequired,
  /** Optional styles for the container **/
  containerStyles: View.propTypes.style,
  /** Optional styles for the details **/
  itemStyles: View.propTypes.style
}

export default DetailList
