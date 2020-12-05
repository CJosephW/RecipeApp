/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'; 
import store from './src/redux/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';




import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RecipeList from './src/pages/RecipeList';
import AddRecipesPage from './src/pages/AddRecipesPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabStack() {
  return(
    <Tab.Navigator
      initialRouteName="Feed"
    >
      <Tab.Screen
        name = "Recipes"
        component={RecipeList}
      ></Tab.Screen>


    </Tab.Navigator>
  )
}
const App: () => React$Node = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "All=>( )ne" component = {TabStack}>

          </Stack.Screen>
          <Stack.Screen name = "AddRecipes" component = {AddRecipesPage}></Stack.Screen>
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
      
  );
};

const styles = StyleSheet.create({
  
});

export default App;
