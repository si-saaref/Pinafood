/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
	I.amOnPage('/');
});

Scenario('Liking a Restaurant', async ({ I }) => {
	I.waitForElement('.post-item__title a', 3);
	I.seeElement('.post-item__title a');

	const firstResto = locate('.post-item__title a').first();
	const firstRestoTitle = await I.grabTextFrom(firstResto);
	I.click(firstResto);

	// TODO => Open the detail page and click like button
	I.waitForElement('#likeButton', 3);
	I.seeElement('#likeButton');
	I.click('#likeButton');

	//  TODO => Open the favorite movies page and watching the element
	I.amOnPage('/#/favorites');
	I.seeElement('.post-item');
	const likedRestoTitle = await I.grabTextFrom('.post-item__title');

	// TODO =>
	assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking a Restaurant', async ({ I }) => {
	I.waitForElement('.post-item__title a', 3);
	I.seeElement('.post-item__title a');

	for (let i = 1; i <= 2; i++) {
		I.click(locate('.post-item__title a').at(i));
		I.waitForElement('#likeButton', 3);
		I.seeElement('#likeButton');
		I.click('#likeButton');
		I.amOnPage('/');
	}

	I.amOnPage('/#/favorites');
	I.seeElement('.post-item');

	for (let i = 1; i <= 2; i++) {
		I.click(locate('.post-item__title a').first());
		I.waitForElement('#likeButton', 3);
		I.seeElement('#likeButton');
		I.click('#likeButton');
		I.amOnPage('/#/favorites');
	}
});
