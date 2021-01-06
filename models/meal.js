/* The recipes should be rendered on the category meals screen which is the screen
 we're loading when we select a category: we define how a meal should look like */

class Meal {
    constructor(id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
        ) { 
            this.id= id;
            this.categoryIds = categoryIds;
            this.title = title;
            this.affordability = affordability;
            this.complexity= complexity;
            this.imageUrl = imageUrl;
            this.duration = duration;
            this.ingredients = ingredients;
            this.steps= steps;
            this.isGlutenFree = isGlutenFree;
            this.isVegan = isVegan;
            this.isVegetarian = isVegetarian;
            this.isLactoseFree = isLactoseFree;
        }
}

export default Meal;