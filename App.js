/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ProductList from './src/screens/ProductList';
import CartItems from './src/screens/CartItems';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ProductList} />
          <Stack.Screen name="CartItems" component={CartItems} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
