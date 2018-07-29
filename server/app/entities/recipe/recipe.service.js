const recipeRepository = require('./recipe.repository');

class RecipeService {
	getAllRecipes() {
		return recipeRepository.findAll();
	}

	getRecipeById(id) {
		return recipeRepository.findById(id);
	}

	addRecipe(recipe) {
		return recipeRepository.add(recipe);
	}

	updateRecipe(id, recipe) {
		return recipeRepository.update({ _id: id }, recipe);
	}

	deleteRecipe(id) {
		return recipeRepository.delete({ _id: id });
	}
	rateRecipe(id, rating){
		return recipeRepository.update({_id: id}, rating)
	}
}

module.exports = new RecipeService();