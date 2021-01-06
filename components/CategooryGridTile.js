import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TouchableNativeFeedback, Platform } from 'react-native';


const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                style={{flex:1}}
                onPress={props.onSelect}>
                <View style={{ ...styles.container,
                /* In here we want that the background color comes from the color property that we had: */
                    ...{ backgroundColor: props.color } }} >
                    <Text style={styles.title} 

                    /* To ensure that no line would be longer than 2, or it gets cutt of: */
                    numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCmp>

        </View>

    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150, 
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        /* To make sure that every item fills all the space it gets: flex */
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;