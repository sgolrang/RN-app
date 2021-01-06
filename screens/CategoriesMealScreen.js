import React from 'react';
import { Text, View, StyleSheet, FlatList, ShadowPropTypesIOS } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import Colors from '../constants/Colors';
import { TextInput } from 'react-native-gesture-handler';

const CategoriesMealScreen = props => {
   /*   to access a param we defined in categoriesScreen.js, we have getParams: a method provided 
   to extract a parameter we receive. 
   getParam takes a string with the name of the parameter we want to extract( the name is what you chose as a key) */
     const catId = props.navigation.getParam('categoryId');
/* 
     This will takes CATEGORIES and we execute find on eact element of it and gives us the item where this function 
     returns true which should be the case of the id for the category we'are looking at matches the cat Id we're
     retrieving from our params */

    //  const selectedCategory = CATEGORIES.find(cat=> cat.id === catId );

    const renderMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }

    /* we want to find the meals that belong to the category we selected: if it's 0 or bigger than 0 then we know 
    it is available in MEALS */
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0 
    );

    return (
        <View style={styles.headline}>
            <FlatList data={displayedMeals}
            /* Modern version of react native does not need the keyExtractor, it does it automatically but just in case: */ 
            keyExtractor={(item, index) => item.id}
            renderItem= {renderMealItem}
            />
           
    
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