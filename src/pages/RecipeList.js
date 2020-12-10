import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {  } from 'react-native-gesture-handler';
import {useSelector, useDispatch } from 'react-redux';
import {addrecipe, deleterecipe } from '../redux/HomeManagementApp';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { concat } from 'react-native-reanimated';

const RecipeList = ({navigation}) =>{
    
    const recipes = useSelector(state => state);
    const dispatch = useDispatch();
    const addRecipe = recipe => dispatch(addrecipe(recipe));
    const deleteRecipe = id => dispatch(deleterecipe(id));

    return(

            <View style ={styles.mainView} >
                {recipes.length === 0 ? (
                    <View>
                        <Text>
                          You have no recipes added
                        </Text>
                    </View>  
                ):
                    <View >
                         {recipes.map(rec => (
                             <TouchableOpacity
                                style = {styles.recipeItem}
                                
                             >
                                 <Text style = {{fontWeight:'bold', padding:5}} onPress = {() => {
                                        console.log(rec)
                                        navigation.navigate('RecipeModal', {
                                            recipeItem: rec
                                        })
                                    }}>{rec.recipe.item.title}</Text> 
                                 <FontAwesomeIcon
                                    style = {{ margin:20,}}
                                    icon={faTrash}
                                    size={20}
                                    color='#5e99f7'
                                    onPress={() => deleteRecipe(rec.id)}
                                />
                             </TouchableOpacity>
                             
                         ))}
                    </View>
                }
            
                <FontAwesomeIcon
                    style = {{position:'absolute', bottom:0, right:0, margin:5}}
                    icon={faPlusCircle}
                    size={50}
                    color='#5e99f7'
                     onPress={() =>navigation.navigate("AddRecipes", {
                        addRecipe
                    })}
                />
            </View>

    );
}
const styles = StyleSheet.create({
    titles: {
        color:'black',
        fontWeight: 'bold'
    },
    mainView:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        position:'relative', 
        alignSelf:'stretch',
        flex:1
    },
    recipeItem:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        margin:5,
    }
})
export default RecipeList;