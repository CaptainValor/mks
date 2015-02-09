$(document).ready(function() {
    // initialize quantities using an inventory object
	var inventory = {
	  product: {
	    money: 1000,
	    cookies: 0
	  },
	  ingredients: {
	    sugar: 10,
	    flour: 10
	  },
	  pot: {
	    sugar: 0,
	    flour: 0
	  }
	};

	// initialize prices
	var price = {
		sugar: 10,
		flour: 15
	};

	// Steps 1.1 and 1.2, generalized for any ingredient
	var useIngredient = function(ingredient,ingElement,potElement) {
		var ingredient = ingredient;
		var ingElement = ingElement;
		var potElement = potElement;

		if(inventory.ingredients[ingredient] > 0) {
			inventory.ingredients[ingredient]--;
			inventory.pot[ingredient]++;
			$(ingElement).html(inventory.ingredients[ingredient]);
			$(potElement).html(inventory.pot[ingredient]);
		} else {
			alert('Oops! You need to buy more ' + ingredient + '.');
		};
	};

	// Steps 1.4 and 1.5, generalized for any number ingredient
	var buyIngredient = function(ingredient,ingElement) {
		var ingredient = ingredient;
		var ingElement = ingElement;

		if(inventory.product.money > price[ingredient]) {
			inventory.ingredients[ingredient]++;
			inventory.product.money -= price[ingredient];
			$(ingElement).html(inventory.ingredients[ingredient]);
			$('div#product span.money').html(inventory.product.money);
		} else {
			alert('Oops! You do not have enough money to buy ' + ingredient + '.');
		};
	};

	// Define button actions

    $('button.use-sugar').click(function() {
        useIngredient(
        	'sugar',
	    	'div#ingredients span.sugar',
	    	'div#pot span.sugar'
    	);
    });

    $('button.use-flour').click(function() {
        useIngredient(
        	'flour',
	    	'div#ingredients span.flour',
	    	'div#pot span.flour'
    	);
    });

    $('button.buy-sugar').click(function() {
        buyIngredient(
        	'sugar',
        	'div#ingredients span.sugar'	
        );
    });

    $('button.buy-flour').click(function() {
        buyIngredient(
        	'flour',
        	'div#ingredients span.flour'	
        );
    });   

    $('div#pot button').click(function() {
        if((inventory.pot.sugar >= 3) && (inventory.pot.flour >= 6)) {
        	inventory.pot.sugar -= 3;
        	inventory.pot.flour -= 6;
        	inventory.product.cookies++;
        $('div#ingredients span.flour').html(inventory.pot.sugar);
        $('div#pot span.flour').html(inventory.pot.flour);
        $('div#product span.cookies').html(inventory.product.cookies);
        } else {
        	alert('D\'oh! You need to buy more ingredients.');
        };
    });
});