import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {  } from 'react-native-gesture-handler';
import database_recipes from './recipes.json';

const AddRecipesPage = ({navigation}) =>{
    
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() =>{
        console.log('being run');
        const updated_recipes = [];

        for(const recipe of database_recipes.recipes){   
            console.log(recipe) ;
            updated_recipes.push(recipe);
        }

        setRecipeList(updated_recipes);
    }, []);

    return(
        <View>
            {recipeList.map(item =>(
                <Text>{item.title}</Text>
            ))}
        </View>
    );
}

export default AddRecipesPage;