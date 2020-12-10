import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Button, StyleSheet} from 'react-native';
import database_recipes from '../../database/recipes.json';
import {useSelector, useDispatch } from 'react-redux';
import { and } from 'react-native-reanimated';

const RecipeModal = ({route, navigation}) => {

    const {recipeItem} = route.params;

    const recipeSteps = recipeItem.recipe.item.steps;

    var stepIndex = 1;

    return(
        <View>
        <Text style = {{fontWeight:'bold'}}>
            {recipeItem.recipe.item.title}{":"}
        </Text>
        <Text>
        {recipeItem.recipe.item.description}{"\n"}
        </Text>
        {recipeSteps.map(step => {
            if(step != ''){
                return(
                    <View style = {{flexDirection:'row'}}>
                        <Text style= {{flex:1,flexWrap:'wrap'}}>{stepIndex++}{": "}{step}{"\n"}</Text>
                    </View>
                )
            }
            
        })}

        </View>
    )
}

const styles = StyleSheet.create({
    centeredView:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        position:'relative', 
        alignSelf:'stretch',
        flex:1
    }
})

export default RecipeModal;