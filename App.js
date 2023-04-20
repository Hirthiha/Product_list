import React from 'react';
import {View} from 'react-native';
import Mainpage from './src/Screen/MainPage';
import Favourite from './src/Screen/FavouritePg';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/Redux/Action';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Mainpage}
            options={{title: 'Home'}}
          />
          <Stack.Screen name="Cart" component={Favourite} />
        </Stack.Navigator>
      </NavigationContainer>
      //{' '}
    </Provider>
  );
}

export default App;
