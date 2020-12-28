import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.headline}>
            <Text>Categories Screen</Text>
            <Button title=" Go to Meals!" onPress={() => {
                props.navigation.navigate({ routeName: 'CategoryMeals'});
            }} />

        </View>
    )
};
const styles = StyleSheet.create({
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 400,
        width: 400,
    }
})

export default CategoriesScreen;