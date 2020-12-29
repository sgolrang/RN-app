import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const CategoriesMealScreen = props => {
return (
    <View style={styles.headline}>
        <Text>The Category Meal Screen</Text>
        <Button  title="Go to Meal Details" onPress={()=>{
            props.navigation.navigate('MealDetail')
        }}/>
         <Button title="Go Back" onPress={()=>{
                props.navigation.goBack();
            }}/>
    </View>
)
};
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