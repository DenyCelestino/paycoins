import * as React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import DetailId from '../screens/DetailId'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import Preloader from '../screens/Preloader'
import Message from '../screens/Message'
import Mypayments from '../screens/Mypayments'
import Paymentgame from '../screens/Paymentgame'
import Paymentsuccess from '../screens/Paymentsuccess'
import Signupmessage from '../screens/Signupmessage'
import Support from '../screens/Support'
import Timeout from '../screens/Timeout'
import Paymentfailed from '../screens/Paymentfailed'
import Paymentgiftcard from '../screens/Paymentgiftcard'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Preloader">
      <Stack.Screen
        name="Preloader"
        component={Preloader}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Message"
        component={Message}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signupmessage"
        component={Signupmessage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Paymentsuccess"
        component={Paymentsuccess}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Paymentfailed"
        component={Paymentfailed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="timeout"
        component={Timeout}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailId"
        component={DetailId}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Paymentgame"
        component={Paymentgame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mypayments"
        component={Mypayments}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Paymentgiftcard"
        component={Paymentgiftcard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Routes
