import React from 'react';
import { Text, View, StyleSheet, Button, ShadowPropTypesIOS } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesMealScreen = props => {
    // to access a param we defined in categoriesScreen.js, we have getParams: a method provided to extract a parameter
    // we receive. getParam takes a string with the name of the parameter we want to extract( the name is what you chose as a key)
     const catId = props.navigation.getParam('categoryId');

    // This will takes CATEGORIES and we execute find on eact element of it and gives us the item where this function 
    // returns true which should be the case of the id for the category we'are looking at matches the cat Id we're
    // retrieving from our params
     const selectedCategory = CATEGORIES.find(cat=> cat.id === catId );
    return (
        <View style={styles.headline}>
            <Text>The Category Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Details" onPress={() => {
                props.navigation.navigate('MealDetail')
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    )
};

/*  To set the navigation header, option #2: "Setting Dynamic Navigation Options": why to use dynamic? because here 
 selectedCategory is inside the function and navigation happens after the function definition, so in order to set 
 dynamically, we pass "naviationData" */
CategoriesMealScreen.navigationOptions = (navigationData) => {
    
   /*  // Then, to have access to the data that is previously used in the function, categoryId and selectedCategory, again
    // we define them. */
const catId = navigationData.navigation.getParam('categoryId');
const selectedCategory = CATEGORIES.find( cat=> cat.id === catId );

return {
    // This is how we can dynamically derive the header:
    headerTitle: selectedCategory.title
  
}
}

const styles = StyleSheet.create({
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 50,
        width: 400,
    }
})

export default CategoriesMealScreen;