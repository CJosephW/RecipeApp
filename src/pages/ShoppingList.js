import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {  } from 'react-native-gesture-handler';
import {useSelector, useDispatch } from 'react-redux';



const ShoppingList = ({navigation}) =>{

    const recipes = useSelector(state => state);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        
        const updatedIngredients = [];

        for(const recipe of recipes){
           recipe.recipe.item.ingredients.map(ing  =>{
                
                const ingIndex = updatedIngredients.findIndex(ingredient => ingredient.name === ing);

                if(ingIndex === -1){
                    var newIng = {}
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
    }, [])
    

    return(
        <View>
            {ingredients.map(ing =>(
                <Text>{ing.name} {ing.amount}</Text>
            ))}
        </View>
    );
}

export default ShoppingList;