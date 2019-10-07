import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { DrawerNavigatorItems } from 'react-navigation'

import DrawerContent from './components/DrawerContent'

import Login from './pages/Login'
import List from './pages/List'
import Book from './pages/Book'

const Teste = createStackNavigator(
   {
      Book: {
         screen: Book,
         navigationOptions: {
            headerTitle: "Reservar"
         }
      },
   },
   {
      mode: 'modal',
      headerMode: 'float',
   }
)

const Drawer = createDrawerNavigator(
   {
      List: {
         screen: List
      },
   },
   {
      contentComponent: (props) => (
         <DrawerContent {...props} />
      ),
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
   },
)

const Routes = createSwitchNavigator({
   Login,
   List: {
      screen: Drawer
   },
   Auth: {
      screen: Teste
   },
})

export default createAppContainer(Routes)