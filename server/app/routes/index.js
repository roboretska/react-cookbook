const recipe = require('../entities/recipe/recipe.routes');
const sort = require('../entities/recipe/sort');


module.exports = app => {
	app.use('/api/recipes', recipe);
};
