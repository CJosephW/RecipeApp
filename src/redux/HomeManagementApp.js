import remove from 'lodash.remove';
// Action Types
export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

// Action Creators

let recipeId = 0;

export function addrecipe(recipe) {
    return{
        type: ADD_RECIPE,
        id: recipeId++,
        recipe
    }
}

export function deleterecipe(id){
    return{
        type: DELETE_RECIPE,
        payload: id
    }
}

// reducer 

const initialState = [];

function recipeReducer(state = initialState, action) {
    switch (action.type){
        case ADD_RECIPE:
            return[
                ...state,
                {
                    id: action.id,
                    note: action.note
                }
            ]
    
        case DELETE_RECIPE:
            const deletedNewArray = remove(state, obj => {
                return obj.id != action.payload;
            })
            return deletedNewArray;
        
        default:
            return state;
    }        
}

export default recipeReducer;