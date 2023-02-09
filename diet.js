function whatCatWillEat(foodStuffs, ingredients) {

        return _.filter(foodStuffs, function(food) {
                // if it has 1,2,3 sets it will return 3 because it is is common
                // this basically filters out the words the intersection finds matching pairs
                // will only print out the largest array along with whatever is in other arrays
                // if the item is not found in smaller array, it will not print
                return _.intersection(food, ingredients).length > 0;
        })
}


console.log(whatCatWillEat([['flour', 'water'],
        ['potato', 'water', 'cream', 'flour', 'butter', 'salt', 'pepper'],
        ['chicken', 'oil', 'parsley', 'lemon', 'distilled vinegar', 'bay leaf',
            'salt', 'black pepper', 'clove', 'green onion', 'flour', 'white wine', 'egg yolk'],
        ['beef', 'salt', 'pepper', 'flour', 'lard', 'oil', 'butter', 'cream'],
        ['buttermilk', 'egg', 'flour', 'baking soda', 'butter'],
        ['pork grease', 'beef', 'flour', 'vinegar', 'salt', 'pepper'],
        ['cornmeal', 'salt', 'water'],
        ['pork', 'rice', 'sugar', 'flour', 'pepper'],
        ['flour', 'salt', 'pepper', 'water',
            'beef', 'egg', 'onion', 'potato', 'pork', 'dehydrated vegetable'],
        ['beef', 'salt', 'pepper'],
        ['egg', 'salt', 'nutmeg', 'butter', 'cream', 'bread'],
        ['breadcrumb', 'cheese', 'water'],
        ['fish', 'cayenne pepper', 'black pepper', 'salt', 'rosemary', 'thyme'],
        ['fish', 'cornmeal', 'salt', 'black pepper', 'cayenne pepper', 'bacon'],
        ['flour', 'salt', 'pepper', 'fish', 'oil', 'parsley', 'onion']],
    ['fish', 'beef', 'pork', 'chicken']));