import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Notifications } from './Notifications'
import { Home } from './Home'
import { CreateDIS } from './CreateDIS'
import { DIS } from './DIS'
import { FindDIS } from './FindDIS'
import { ApplyDIS } from './ApplyDIS'

const { Navigator, Screen } = createStackNavigator()

const HomeNavigator = () => (
  <Navigator>
    <Screen
      name="Notifications"
      component={Notifications}
      options={{ title: 'Upphandling.app' }}
    />
    <Screen
      name="Home"
      component={Home}
      options={{ title: 'Upphandling.app' }}
    />
    <Screen
      name="CreateDIS"
      component={CreateDIS}
      options={{ title: 'Skapa nytt DIS' }}
    />
    <Screen name="OpenDIS" component={DIS} options={{ title: 'Detaljer' }} />
    <Screen name="ApplyDIS" component={ApplyDIS} options={{ title: 'Ansök' }} />

    <Screen
      name="FindDIS"
      component={FindDIS}
      options={{ title: 'Hitta upphandling' }}
    />
  </Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
)
