/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
	I.amOnPage('/');
	I.wait(5);
});

Scenario('Liking a Restaurant', async ({ I }) => {
	I.waitForElement('.post-item__title a', 5);
	I.seeElement('.post-item__title a');

	const firstResto = locate('.post-item__title a').first();
	const firstRestoTitle = await I.grabTextFrom(firstResto);
	I.click(firstResto);

	// TODO => Open the detail page and click like button
	I.waitForElement('#likeButton', 5);
	I.seeElement('#likeButton');
	I.click('#likeButton');

	//  TODO => Open the favorite page and watching the element
	I.amOnPage('/#/favorites');
	I.wait(5);
	I.seeElement('.post-item');
	const likedRestoTitle = await I.grabTextFrom('.post-item__title');

	// TODO =>
	assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking a Restaurant', async ({ I }) => {
	I.waitForElement('.post-item__title a', 5);
	I.seeElement('.post-item__title a');

	for (let i = 1; i <= 2; i++) {
		I.waitForElement('.post-item__title a', 5);
		I.click(locate('.post-item__title a').at(i));
		I.waitForElement('#likeButton', 5);
		I.seeElement('#likeButton');
		I.click('#likeButton');
		I.amOnPage('/');
		I.wait(5);
	}

	I.amOnPage('/#/favorites');
	I.wait(5);
	I.seeElement('.post-item');

	for (let i = 1; i <= 2; i++) {
		I.click(locate('.post-item__title a').first());
		I.waitForElement('#likeButton', 5);
		I.seeElement('#likeButton');
		I.click('#likeButton');
		I.amOnPage('/#/favorites');
		I.wait(5);
	}
});
