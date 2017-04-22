import React from 'react'
import { Image } from 'react-native'

const defaultStyles = {
  square: { height: 21, width: 21 },
  tall: { height: 21, width: 14 },
  calendar: { height: 20, width: 21 },
  drops: { height: 16, width: 16 }
}

export const returnIconAsImage = (iconName, style) => {
  switch (iconName) {
    case 'organization':
      return (<Image
        source={require('../../media/organization.png')}
        style={[defaultStyles.tall, style]}
      />)
    case 'organizationUrl':
      return (<Image
        source={require('../../media/website.png')}
        style={[defaultStyles.square, style]}
      />)
    case 'location':
      return (<Image
        source={require('../../media/location.png')}
        style={[defaultStyles.tall, style]}
      />)
    case 'dateOfEvent':
      return (<Image
        source={require('../../media/calendar.png')}
        style={[defaultStyles.calendar, style]}
      />)
    case 'shortDesc':
      return (<Image
        source={require('../../media/commitment.png')}
        style={[defaultStyles.square, style]}
      />)
    case 'perks':
      return (<Image
        source={require('../../media/perks.png')}
        style={[defaultStyles.square, style]}
      />)
    case 'dropdown':
      return (<Image
        source={require('../../media/dropdown.png')}
        style={[defaultStyles.drops, style]}
      />)
    case 'dropup':
      return (<Image
        source={require('../../media/dropup.png')}
        style={[defaultStyles.drops, style]}
      />)
    default:
      return (<Image
        source={require('../../media/calendar.png')}
        style={[defaultStyles.tall, style]}
      />)
  }
}
