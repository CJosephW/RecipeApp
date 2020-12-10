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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { concat } from 'react-native-reanimated';



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
import ShoppingList from './src/pages/ShoppingList';
import RecipeModal from './src/pages/RecipeModal';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabStack() {
  return(
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          if (route.name === 'Recipes') {
            return <FontAwesomeIcon icon={faBookmark} size={25} color={'#5e99f7'} />;
          } else if (route.name === 'Shopping List') {
  
            return <FontAwesomeIcon icon={faShoppingBasket} size={25} color = {'#5e99f7'}/>;
          }
            // You can return any component that you like here!
            
          },
        })}
    >
      <Tab.Screen
        name = "Recipes"
        component={RecipeList}
      ></Tab.Screen>
      <Tab.Screen
        name = "Shopping List"
        component = {ShoppingList}
        ></Tab.Screen>


    </Tab.Navigator>
  )
}
const App: () => React$Node = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "All In One" component = {TabStack}></Stack.Screen>
          <Stack.Screen name = "RecipeModal" component = {RecipeModal}></Stack.Screen>
          <Stack.Screen name = "AddRecipes" component = {AddRecipesPage}></Stack.Screen>
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
      
  );
};

const styles = StyleSheet.create({
  
});

export default App;
