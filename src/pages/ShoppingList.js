import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {  } from 'react-native-gesture-handler';
import {useSelector, useDispatch } from 'react-redux';



const ShoppingList = ({navigation}) =>{

    const [ingredients, setIngredients] = useState([]);
    const recipes = useSelector(state => state);


    useEffect(() => {

        const updatedIngredients = [];

        for(const recipe of recipes){
           recipe.recipe.item.ingredients.map(ing  =>{
                
                const ingIndex = updatedIngredients.findIndex(ingredient => ingredient.name === ing);

                if(ingIndex === -1){
                    const newIng = {}
                    newIng['name'] = ing;
                    newIng['amount'] = 1;
                    updatedIngredients.push(newIng);
                }
                else if(ingIndex !== -1){
                    updatedIngredients[ingIndex].amount += 1;
                }
           })
        }    
        setIngredients(updatedIngredients);
    }, [recipes])
    

    return(
        <View style = {styles.mainView}>
            {ingredients.map(ing =>(
                <Text>{ing.name} {ing.amount}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    mainView:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        position:'relative', 
        alignSelf:'stretch',
        flex:1
    }
})

export default ShoppingList;