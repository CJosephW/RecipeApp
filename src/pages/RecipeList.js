import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch } from 'react-redux';
import {addrecipe, deleterecipe } from '../redux/HomeManagementApp';

const RecipeList = ({navigation}) =>{
    
    const recipes = useSelector(state => state);
    const dispatch = useDispatch();
    const addRecipe = recipe => dispatch(addrecipe(recipe));
    const deleteRecipe = recipe => dispatch(deleterecipe(id));

    return(

            <View>
                {recipes.length === 0 ? (
                    <View>
                        <Text>
                          You have no recipes added
                        </Text>
                    </View>  
                ):
                    <View>
                        <Text>item </Text>
                    </View>

                
                }
            </View>

    );
}

export default RecipeList;