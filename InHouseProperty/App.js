import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/components/usercredential/Splash';
import GetStart from './src/components/usercredential/GetStart';
import Places from './src/components/usercredential/Places';
import Home from './src/components/screens/Home.js';
import Demo from './src/components/screens/Demo';
import Filter from './src/components/screens/Filter';
import Details from './src/components/screens/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#001D4C" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          // initialRouteName="Demo"
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="GetStart" component={GetStart} />
          <Stack.Screen name="Places" component={Places} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="Details" component={Details} />

          <Stack.Screen name="Demo" component={Demo} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
