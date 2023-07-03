/* eslint-disable no-undef */
Feature('Favorite Restaurant');

Before(({ I }) => {
	I.amOnPage('/');
});

Scenario('Check color header while scroll down', async ({ I }) => {
	I.scrollPageToBottom();
	const headerClass = await I.grabAttributeFrom('.header', 'class');
	headerClass.includes('header-white');
});

Scenario('Check Home Nav Item show homepage', async ({ I }) => {
	I.click(locate('.nav__item').withChild('a').withText('Home'));
	I.seeElement(locate('.content-header__label').withText('Explore Restaurant'));
});

Scenario('Check Favorite Nav Item show favorite page', async ({ I }) => {
	I.click(locate('.nav__item').withChild('a').withText('Favorite'));
	I.seeElement(locate('.content-header__label').withText('Favorites Resto'));
});

Scenario('Check About Nav Item show socmed page', async ({ I }) => {
	I.click(locate('.nav__item').withChild('a').withText('Favorite'));
	I.amOnPage('https://www.instagram.com/shii.syyuuuiiikkk/');
	// pause();
	I.waitForText('shii.syyuuuiiikkk', 5);
	I.see('shii.syyuuuiiikkk');
});
