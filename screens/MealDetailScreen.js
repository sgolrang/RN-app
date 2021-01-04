import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import DeprecatedViewPropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes';
// import { TextInput } from 'react-native-gesture-handler';

// How to add text input and show them on the screen:
const mealDetailScreen = props => {

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
        setMealGoals(currentState => [...currentState,
        // In order to solve the VirtualizedList warning which is related to FlatList, we random key and then we convert
        // it to a string:

        { key: Math.random().toString(), value: enteredGoal }])
    }

    const removeGoalHandler = (goalKey) => {
        setMealGoals(currentState => {
            return currentState.filter((goal) => goal.id !== goalKey)
        })
    }
    return (
        <View>
            <Text style={styles.headline}>Meal Detail Screen</Text>
            <Text >Meal Detail Screen</Text>
            {/* A placeholder to show a place for the user to entre text there */}
            <TextInput placeholder="Meal Details"
                style={styles.input}
                // onChangeText is a prop which takes a function that will execute for every key stroke, and we don't use () 
                // because it makes it to execute at once, as a fucntion we use the handler that previously was defined.
                onChangeText={goalInputHandler}
                // to pass the text back into the text input:
                value={enteredGoal} />

            {/* once the Add is pressed, the function addGoalHandler will add the text */}
            <Button title="ADD" onPress={addGoalHandler} />

            {/* to make the user able to scroll the page we use ScrollView. we cannot use ScrollView if we don't know how long 
         the list will be or it's a very long list -> FlatList*/}
            {/* <ScrollView > */}
            {/* to show the text on the screen: the map method which takes a fucntion and execute on every item in the array: */}
            {/* {mealGoals.map((goal)=>  ( 
            <View key={goal} style={styles.ListItem}>
                <Text >{goal}
                </Text>
                </View>
                ))} */}
            {/* </ScrollView> */}

            {/* Flatlist has 2 properties: data and renderItem */}
            <FlatList data={mealGoals}
                // we can another property: Key Extractor, which tells how to extract your key. It take two arguments: item and index
                //  this key in item.key refers to the name in the Handler(it can be anything such as id)
                keyExtractor={(item, index) => item.key}
                //    to show the text on the screen: 
                renderItem={itemData => (

                    // How to use touchable opacity, it gives us a visual feedback about our touch by changing the opacity
                    // of the element we touched
                    // to control the opacity, we canadd activeOpacity prop on touchable
                    <TouchableOpacity
                        id={itemData.item.key}
                        onPress={removeGoalHandler.bind()} >
                        <View style={styles.ListItem}>
                            <Text >{itemData.item.value}</Text>
                        </View>
                    </TouchableOpacity>

                )}>

            </FlatList>

        </View>
    );
};
const styles = StyleSheet.create({
    headline: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 50,
        width: 400,
    },
    ListItem: {
        // space between the border and the content
        padding: 10,
        // maring is the space between the border and the surrounding contents
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})
export default mealDetailScreen;