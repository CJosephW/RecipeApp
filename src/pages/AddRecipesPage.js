import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Button} from 'react-native';
import {  } from 'react-native-gesture-handler';
import database_recipes from '../../database/recipes.json';
import {useSelector, useDispatch } from 'react-redux';
import { and } from 'react-native-reanimated';


const AddRecipesPage = ({route, navigation: {goBack}}) =>{
    const recipes = useSelector(state => state);
    const IDArray = recipes.map(item =>{
        return item.id
    })
    const saveRecipe = (item) => {

        route.params.addRecipe({item});
        goBack();
    }
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() =>{
        const updated_recipes = [];

        for(const recipe of database_recipes.recipes){   
            updated_recipes.push(recipe);
        }

        setRecipeList(updated_recipes);
    }, []);

    return(
        
        <View>
            
            {recipeList.map(item =>{
                if(IDArray.indexOf(item.id) === -1){
                    return(<Text>{item.title}<Button title = 'add' onPress = {() => saveRecipe(item)}></Button></Text>);
                }
                
                return(<Text>{item.title} Already Added</Text>)
                
            })}
        </View>
    );
}

export default AddRecipesPage;