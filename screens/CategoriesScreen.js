import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategooryGridTile';

const CategoriesScreen = props => {

    // a function that will recieve some data in the end here and that should return a jsx element
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title} 
             /* to make the color visible from the dummy-data that we had which had a color property, in the category.js
             we name the propoerty color so we use it here:  */
            color= {itemData.item.color}
            onSelect={() => {
                // 
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }} />

            /* All these moved to the CategoryGridTile */
            // <TouchableOpacity
            //     style={styles.gridItem}
            //     onPress={() => {
            //     props.navigation.navigate({ routeName: 'CategoryMeals',
            //     // another object to be passed to the navigator, and this takes an object of key-value, any key-value 
            //     // pairs and as many as you want. This is simply parameters, or extra data that is passing to the new screen
            //     params: {
            //         // the id of the category we tapped on, we are getting our item data in renderGridItem,
            //          categoryId: 
            //         //  now we are forwarding that Id to thh ne screen which is being loaded and this allows us to thn use
            //         // that data in that new screen --> CategoryMealScreen
            //          itemData.item.id
            //     }
            //     })
            //     }}>
            //     <View >
            //         {/* the item data object here has an item propperty */}
            //         <Text>{itemData.item.title}</Text>
            //     </View>
            // </TouchableOpacity>

        )
    }
    return (
        //  to output a grid of categories, we need to use flatlist, and render data from dummy data
        <FlatList
            //  it gets item and index and needs to return the value that should be used as a key but not essential in new versions of React native  
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} renderItem={renderGridItem}
            //    This defines how many columns we want to have
            numColumns={2} />
    )
};
// to set a Header Title, option #1 add a propperty:
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}


const styles = StyleSheet.create({
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 250,
        width: 400,
    },

})

export default CategoriesScreen;