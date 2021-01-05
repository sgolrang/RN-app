import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoriesMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator ({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealScreen,
        
 /*  we can do the styling once here instead of styling for each componnet in the screens.
  we add navigationOptions in the navigation screen and make it stylish! But, again it's repetitive! */

        // navigationOptions: {
        //     headerStyle: {
        //         backgroundColor: Colors.primaryColor
        //     }, 
        //     headerTintColor: 'white'
        // }

    },
    MealDetail: MealDetailScreen
},
/*  To avoid repeating, we can pass a second argument to createStackNavigator, the first argument is an object with your screens,
 the seond argument allows you to configure that navigator: defaultNavigationOptions: this allows you to set up options
to every screen. */
{
    /* with the help of ctrl+space, there are lots of things we can have here, e.g: mode, though the defaul is card instead of modal */
// mode: 'modal', this makes the difference in push pop animation.
/* or we can change the initialRouteName to '' , as well. 
initialRouteName: 'Categories'
*/

 /*This takes object with your navigation options:   */
defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
}
}
);

export default createAppContainer(MealsNavigator)