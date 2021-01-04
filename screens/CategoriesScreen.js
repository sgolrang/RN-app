import React from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

// a function that will recieve some data in the end here and that should return a jsx element
const renderGridItem = (itemData) => {
return (
    <View style={styles.gridItem}>
        {/* the item data object here has an item propperty */}
        <Text>{itemData.item.title}</Text> 
    </View>
)
}

const CategoriesScreen = props => {
    return (
       <FlatList
    //  it gets item and index and needs to return the value that should be used as a key but not essential in new versions of React native  
       keyExtractor={(item, index)=> item.id}
       data={CATEGORIES} renderItem={renderGridItem}
    //    This defines how many columns we want to have
       numColumns={2} />
    )
};
const styles = StyleSheet.create({
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 250,
        width: 400,
    },
    gridItem : {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesScreen;