import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// How to add text input and show them on the screen:
const mealDetailScreen = () => {

    // this is to get the user input
    const [enteredGoal, setEnteredGoal] = useState('');

    // this is to show the user input on the screen
    const [mealGoals, setMealGoals] = useState([]);

    //  A handler to get user input from the keyboard
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    // A handler to show the user input on the screen as an array
    const addGoalHandler = () => {
        // to update what we laready have, we either use setMealsGoals([..., ]) which is a javascript feature which takes an 
        // existing array and pulls out all the elements from that array and adds them to the new array but it is not %100 sure, 
        // so, we use this: it take two agruments what we have, and the user input:
        setMealGoals(currentState => [...currentState, enteredGoal]);
    }
return (
    <View >
        <Text style={styles.headline}>Meal Detail Screen</Text>
        <Text >Meal Detail Screen</Text>
        {/* A placeholder to show a place for the user to entre text there */}
        <TextInput placeholder="Meal Details"
        style={styles.input}
        // onChangeText is a prop which takes a function that will execute for every key stroke, and we don't use () 
        // because it makes it to execute at once, as a fucntion we use the handler that previously was defined.
        onChangeText={goalInputHandler}
        // to pass the text back into the text input:
        value={enteredGoal}/> 

        {/* once the Add is pressed, the function addGoalHandler will add the text */}
        <Button title= "ADD" onPress={addGoalHandler}/>
        <View>
            {/* to show the text on the screen: the map method which takes a fucntion and execute on every item in the array: */}
            {mealGoals.map((goal)=> <Text>{goal}</Text>)}
        </View>
    </View>
)
};
const styles = StyleSheet.create({
    headline: {
        flex:1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 400,
        width: 400,
    }
})
export default mealDetailScreen;