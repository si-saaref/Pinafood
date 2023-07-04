/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tfont-family: Roboto !important;\n}\n\nbody {\n\toverflow-x: hidden;\n\tmin-height: 100vh;\n\tbackground: #f3f3f3;\n}\n\nimg {\n\tdisplay: block;\n}\n\n.skip-link {\n\tposition: absolute;\n\ttop: -40px;\n\tleft: 0;\n\tpadding: 8px;\n\tbackground-color: #3917bf;\n\tcolor: white;\n\tz-index: 100;\n}\n\n.skip-link:focus {\n\ttop: 12%;\n\tleft: 5%;\n}\n\n/* \n * Header\n */\n\nbody:has(.show-hero) .header {\n\tbackground: transparent;\n\tposition: fixed;\n\tbox-shadow: none;\n}\n\n.header {\n\tdisplay: flex;\n\talign-items: center;\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tz-index: 9;\n\t/* ! Black Session */\n\tbackground: white;\n\tbox-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.2);\n\tposition: fixed;\n}\n\nbody:has(.reveal-content) .header {\n\tbackground: white;\n\tbox-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.2);\n\tposition: fixed;\n}\n\n.header__inner {\n\twidth: 100%;\n\tflex: 1;\n}\n\nbody:has(.show-hero) .header__title {\n\tcolor: white;\n}\n\n.header__title,\nbody:has(.reveal-content) .header__title {\n\tfont-weight: 500;\n\tfont-size: 2em;\n\tdisplay: inline-block;\n\t/* ! Black Session */\n\tcolor: black;\n}\n\n.header__menu {\n\tposition: absolute;\n\ttop: 0px;\n\ttransform: translateX(-150%);\n\twidth: 200px;\n\ttransition: all 0.3s;\n\tpadding: 8px;\n\toverflow: hidden;\n\tz-index: 200;\n\theight: 50vh;\n}\n\n.active {\n\ttransform: translateX(0%);\n\tbackground-color: white;\n}\n\n#drawer {\n\tcolor: black;\n}\n\n.nav__list {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n\n.header__menu.active .nav__list {\n\tflex-direction: column;\n}\n\n.header__menu.active .nav__list a {\n\tcolor: black !important;\n}\n\nbody:has(.show-hero) .nav__list a {\n\tcolor: white;\n}\n\n.nav__list a {\n\ttransition: 0.2s;\n\tpadding: 40px;\n\tfont-weight: 400;\n\t/* ! Black Session */\n\tcolor: black;\n}\n\nbody:has(.reveal-content) .nav__list a {\n\tcolor: black;\n}\n\n.nav__list a:hover {\n\tfilter: invert(50%);\n}\n\nbody:has(.show-hero) .hamburger-wrapper {\n\tcolor: white;\n}\n\n.hamburger-wrapper {\n\tpadding: 22px;\n\tbackground: transparent;\n\tcolor: black;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.5rem;\n}\n\nbody:has(.reveal-content) .hamburger-wrapper {\n\tcolor: black;\n}\n\n/* \n * HERO\n */\n\n.hero {\n\twidth: 100%;\n\tmargin-bottom: 5%;\n\tdisplay: none;\n}\n\n.hero.show-hero {\n\tdisplay: block;\n}\n\n.hero img {\n\twidth: 100%;\n\tdisplay: block;\n\tfilter: grayscale(1);\n\theight: 20%;\n\tobject-fit: cover;\n}\n\n.hero::after {\n\tposition: absolute;\n\tcontent: '';\n\theight: 50%;\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\tbackground: linear-gradient(to top, rgba(255, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%);\n}\n\n/* \n  MAIN\n*/\n.main:focus {\n\toutline-offset: 200px;\n}\n\n.content-container {\n\tpadding: 0px;\n}\n\n/*\n * content-header\n */\n\n.content-header {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n}\n\n.content-header__label {\n\tfont-size: 32px;\n\tfont-weight: lighter;\n}\n\n.content-header__label::after {\n\tcontent: '';\n\tmargin-top: 16px;\n\tdisplay: block;\n\tborder-bottom: 1px solid #c5c5c5;\n}\n\n/*\n * content-post\n */\n\n.content-post {\n\tmargin: 32px auto auto;\n\ttext-align: left;\n\toverflow: auto;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tplace-items: center;\n\tgap: 16px;\n\tpadding: 30px;\n}\n\n/*\n * post item\n */\n\n.post-item {\n\tmargin: 16px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 5px;\n\toverflow: hidden;\n\tcursor: pointer;\n\tbackground-color: white;\n}\n\n.post-item img {\n\theight: 60%;\n}\n\n.post-item__content {\n\tpadding: 16px 12px 20px 12px;\n}\n\n.post-item__thumbnail {\n\twidth: 100%;\n}\n\n.post-item__city {\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tcolor: #999;\n}\n\n.post-item__title a {\n\tfont-weight: 500;\n\tfont-size: 18px;\n\tmargin-top: 16px;\n\ttransition: 0.3s opacity;\n\tcolor: black;\n\tpadding: 15px 0;\n}\n\n.post-item__title:hover {\n\topacity: 0.5;\n}\n\n.post-item__title {\n\ttext-decoration: none;\n\tcolor: inherit;\n\tfont-size: 1.6rem;\n}\n\n.post-item__description {\n\tmargin-top: 16px;\n\tfont-size: 13px;\n\tline-height: 1.5em;\n\toverflow: hidden;\n\tdisplay: -webkit-box;\n\t-webkit-box-orient: vertical;\n\t-webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */\n}\n\n/*\n * detail\n */\n.content-detail-container {\n\tpadding: 50px 0px;\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.detail-item {\n\twidth: 90%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.section-wrapper-item {\n\tbox-shadow: 0px 4px 10px rgba(3, 18, 26, 0.15);\n\tpadding: 1rem;\n\tborder-radius: 10px;\n\tbackground-color: white;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.section-wrapper-item:last-child {\n\tbackground: #fefefe;\n}\n\n.detail-item__title {\n\tfont-size: 2rem;\n\tfont-weight: bold;\n\tcolor: rgb(74, 74, 74);\n}\n\n.detail-item__content {\n\tdisplay: flex;\n\tgap: 20px;\n}\n\n.detail-item__info {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n}\n\n.info-item-wrapper,\n.menu-item-wrapper,\n.review-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.info-item-wrapper h1,\n.detail-item__description h1,\n.detail-item__reviews h1,\n.detail-item__menus h1 {\n\tfont-weight: bold;\n\tcolor: rgb(107, 107, 107);\n}\n\n.detail-item__thumbnail {\n\twidth: 50%;\n}\n\n.highlighted-item {\n\tbox-shadow: 0 2px 8px 0 rgba(48, 49, 53, 0.22);\n\tpadding: 4px 10px;\n\tborder-radius: 5px;\n\tbackground-color: rgb(250, 250, 250);\n\twhite-space: nowrap;\n}\n\n.highlighted-item.item-review {\n\tmax-width: 200px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\tgap: 16px;\n\twhite-space: wrap;\n\tpadding: 1rem;\n\tbackground-color: white;\n}\n\n.detail-item__menus {\n\tdisplay: flex;\n\tgap: 1rem;\n\tflex-direction: column;\n}\n\n.highlight-wrapper {\n\tdisplay: flex;\n\tgap: 10px;\n\tflex-wrap: wrap;\n}\n\n/*\n *Like\n */\n.like {\n\twidth: 55px;\n\theight: 55px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: #db0000;\n\n\tposition: fixed;\n\tbottom: 56px;\n\tright: 16px;\n\tborder-radius: 50%;\n\tborder: 0;\n\n\tfont-size: 18px;\n\tcolor: white;\n\tcursor: pointer;\n}\n\n/* \n * Not Home\n */\n.section-detail,\n.section-favorite {\n\tmargin-top: 5rem;\n\tmargin-bottom: 6rem;\n}\n\n/*\n * footer\n */\n\n.footer {\n\tbackground-color: #696969;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 1rem;\n\tbox-sizing: border-box;\n\tbottom: 0;\n\t/* ! Black Session */\n\tposition: fixed;\n}\n\n.show-hero ~ .footer {\n\tposition: relative;\n}\n\n.footer p {\n\tcolor: white;\n}\n\n.notfoundcontent {\n\twidth: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n/* \n * Skeleton\n */\n.post-item-skeleton {\n\tmin-height: 450px;\n}\n\n.post-item-skeleton__content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tflex-wrap: wrap;\n}\n\n.skeleton-image {\n\theight: 60%;\n\twidth: 100%;\n\tbackground: lightgray;\n\tanimation: skeleton-loading 1.6s linear infinite alternate;\n}\n\n.skeleton {\n\theight: 10px;\n\tbackground: lightgray;\n\tanimation: skeleton-loading 1.6s linear infinite alternate;\n}\n\n.skeleton-city {\n\twidth: 30%;\n}\n.skeleton-name {\n\twidth: 50%;\n}\n\n.post-item-skeleton__content.desc {\n\tmargin-top: 2rem;\n}\n\n@keyframes skeleton-loading {\n\t0% {\n\t\tbackground-color: hsl(201, 20%, 70%);\n\t}\n\t100% {\n\t\tbackground-color: hsl(204, 20%, 85%);\n\t}\n}\n\n@media screen and (min-width: 768px) {\n\t.content-post {\n\t\tmargin: 32px auto auto;\n\t\ttext-align: left;\n\t\toverflow: auto;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t.header {\n\t\tpadding: 1.5rem 2rem;\n\t}\n\n\t.header__menu {\n\t\tposition: static;\n\t\ttransform: translateX(0%);\n\t\theight: fit-content;\n\t\twidth: auto;\n\t}\n\n\t.nav__list {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\n\t.nav__list a {\n\t\tpadding: 22px;\n\t}\n\n\t.hamburger-wrapper {\n\t\tdisplay: none;\n\t}\n\n\t.content {\n\t\tpadding: 32px;\n\t}\n\n\t.header__menu.active .nav__list {\n\t\tflex-direction: row;\n\t}\n\n\t.detail-item {\n\t\twidth: 80%;\n\t}\n\n\t.section-detail,\n\t.section-favorite {\n\t\tmargin-top: 7rem;\n\t\tmargin-bottom: 6rem;\n\t}\n\n\t.like {\n\t\tright: 56px;\n\t}\n}\n\n@media screen and (min-width: 992px) {\n\t.content-post {\n\t\tmargin: 32px auto auto;\n\t\ttext-align: left;\n\t\toverflow: auto;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n\n\t.content-detail-container {\n\t\tpadding: 50px 30px;\n\t}\n\n\t.content-container {\n\t\tpadding: 20px;\n\t}\n\n\t.notfoundcontent {\n\t\twidth: 50vw;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["* {\n\tfont-family: Roboto !important;\n}\n\nbody {\n\toverflow-x: hidden;\n\tmin-height: 100vh;\n\tbackground: #f3f3f3;\n}\n\nimg {\n\tdisplay: block;\n}\n\n.skip-link {\n\tposition: absolute;\n\ttop: -40px;\n\tleft: 0;\n\tpadding: 8px;\n\tbackground-color: #3917bf;\n\tcolor: white;\n\tz-index: 100;\n}\n\n.skip-link:focus {\n\ttop: 12%;\n\tleft: 5%;\n}\n\n/* \n * Header\n */\n\nbody:has(.show-hero) .header {\n\tbackground: transparent;\n\tposition: fixed;\n\tbox-shadow: none;\n}\n\n.header {\n\tdisplay: flex;\n\talign-items: center;\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tz-index: 9;\n\t/* ! Black Session */\n\tbackground: white;\n\tbox-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.2);\n\tposition: fixed;\n}\n\nbody:has(.reveal-content) .header {\n\tbackground: white;\n\tbox-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.2);\n\tposition: fixed;\n}\n\n.header__inner {\n\twidth: 100%;\n\tflex: 1;\n}\n\nbody:has(.show-hero) .header__title {\n\tcolor: white;\n}\n\n.header__title,\nbody:has(.reveal-content) .header__title {\n\tfont-weight: 500;\n\tfont-size: 2em;\n\tdisplay: inline-block;\n\t/* ! Black Session */\n\tcolor: black;\n}\n\n.header__menu {\n\tposition: absolute;\n\ttop: 0px;\n\ttransform: translateX(-150%);\n\twidth: 200px;\n\ttransition: all 0.3s;\n\tpadding: 8px;\n\toverflow: hidden;\n\tz-index: 200;\n\theight: 50vh;\n}\n\n.active {\n\ttransform: translateX(0%);\n\tbackground-color: white;\n}\n\n#drawer {\n\tcolor: black;\n}\n\n.nav__list {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n\n.header__menu.active .nav__list {\n\tflex-direction: column;\n}\n\n.header__menu.active .nav__list a {\n\tcolor: black !important;\n}\n\nbody:has(.show-hero) .nav__list a {\n\tcolor: white;\n}\n\n.nav__list a {\n\ttransition: 0.2s;\n\tpadding: 40px;\n\tfont-weight: 400;\n\t/* ! Black Session */\n\tcolor: black;\n}\n\nbody:has(.reveal-content) .nav__list a {\n\tcolor: black;\n}\n\n.nav__list a:hover {\n\tfilter: invert(50%);\n}\n\nbody:has(.show-hero) .hamburger-wrapper {\n\tcolor: white;\n}\n\n.hamburger-wrapper {\n\tpadding: 22px;\n\tbackground: transparent;\n\tcolor: black;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: 1.5rem;\n}\n\nbody:has(.reveal-content) .hamburger-wrapper {\n\tcolor: black;\n}\n\n/* \n * HERO\n */\n\n.hero {\n\twidth: 100%;\n\tmargin-bottom: 5%;\n\tdisplay: none;\n}\n\n.hero.show-hero {\n\tdisplay: block;\n}\n\n.hero img {\n\twidth: 100%;\n\tdisplay: block;\n\tfilter: grayscale(1);\n\theight: 20%;\n\tobject-fit: cover;\n}\n\n.hero::after {\n\tposition: absolute;\n\tcontent: '';\n\theight: 50%;\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\tbackground: linear-gradient(to top, rgba(255, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%);\n}\n\n/* \n  MAIN\n*/\n.main:focus {\n\toutline-offset: 200px;\n}\n\n.content-container {\n\tpadding: 0px;\n}\n\n/*\n * content-header\n */\n\n.content-header {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n}\n\n.content-header__label {\n\tfont-size: 32px;\n\tfont-weight: lighter;\n}\n\n.content-header__label::after {\n\tcontent: '';\n\tmargin-top: 16px;\n\tdisplay: block;\n\tborder-bottom: 1px solid #c5c5c5;\n}\n\n/*\n * content-post\n */\n\n.content-post {\n\tmargin: 32px auto auto;\n\ttext-align: left;\n\toverflow: auto;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tplace-items: center;\n\tgap: 16px;\n\tpadding: 30px;\n}\n\n/*\n * post item\n */\n\n.post-item {\n\tmargin: 16px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 5px;\n\toverflow: hidden;\n\tcursor: pointer;\n\tbackground-color: white;\n}\n\n.post-item img {\n\theight: 60%;\n}\n\n.post-item__content {\n\tpadding: 16px 12px 20px 12px;\n}\n\n.post-item__thumbnail {\n\twidth: 100%;\n}\n\n.post-item__city {\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tcolor: #999;\n}\n\n.post-item__title a {\n\tfont-weight: 500;\n\tfont-size: 18px;\n\tmargin-top: 16px;\n\ttransition: 0.3s opacity;\n\tcolor: black;\n\tpadding: 15px 0;\n}\n\n.post-item__title:hover {\n\topacity: 0.5;\n}\n\n.post-item__title {\n\ttext-decoration: none;\n\tcolor: inherit;\n\tfont-size: 1.6rem;\n}\n\n.post-item__description {\n\tmargin-top: 16px;\n\tfont-size: 13px;\n\tline-height: 1.5em;\n\toverflow: hidden;\n\tdisplay: -webkit-box;\n\t-webkit-box-orient: vertical;\n\t-webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */\n}\n\n/*\n * detail\n */\n.content-detail-container {\n\tpadding: 50px 0px;\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.detail-item {\n\twidth: 90%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.section-wrapper-item {\n\tbox-shadow: 0px 4px 10px rgba(3, 18, 26, 0.15);\n\tpadding: 1rem;\n\tborder-radius: 10px;\n\tbackground-color: white;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.section-wrapper-item:last-child {\n\tbackground: #fefefe;\n}\n\n.detail-item__title {\n\tfont-size: 2rem;\n\tfont-weight: bold;\n\tcolor: rgb(74, 74, 74);\n}\n\n.detail-item__content {\n\tdisplay: flex;\n\tgap: 20px;\n}\n\n.detail-item__info {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n}\n\n.info-item-wrapper,\n.menu-item-wrapper,\n.review-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.info-item-wrapper h1,\n.detail-item__description h1,\n.detail-item__reviews h1,\n.detail-item__menus h1 {\n\tfont-weight: bold;\n\tcolor: rgb(107, 107, 107);\n}\n\n.detail-item__thumbnail {\n\twidth: 50%;\n}\n\n.highlighted-item {\n\tbox-shadow: 0 2px 8px 0 rgba(48, 49, 53, 0.22);\n\tpadding: 4px 10px;\n\tborder-radius: 5px;\n\tbackground-color: rgb(250, 250, 250);\n\twhite-space: nowrap;\n}\n\n.highlighted-item.item-review {\n\tmax-width: 200px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\tgap: 16px;\n\twhite-space: wrap;\n\tpadding: 1rem;\n\tbackground-color: white;\n}\n\n.detail-item__menus {\n\tdisplay: flex;\n\tgap: 1rem;\n\tflex-direction: column;\n}\n\n.highlight-wrapper {\n\tdisplay: flex;\n\tgap: 10px;\n\tflex-wrap: wrap;\n}\n\n/*\n *Like\n */\n.like {\n\twidth: 55px;\n\theight: 55px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: #db0000;\n\n\tposition: fixed;\n\tbottom: 56px;\n\tright: 16px;\n\tborder-radius: 50%;\n\tborder: 0;\n\n\tfont-size: 18px;\n\tcolor: white;\n\tcursor: pointer;\n}\n\n/* \n * Not Home\n */\n.section-detail,\n.section-favorite {\n\tmargin-top: 5rem;\n\tmargin-bottom: 6rem;\n}\n\n/*\n * footer\n */\n\n.footer {\n\tbackground-color: #696969;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 1rem;\n\tbox-sizing: border-box;\n\tbottom: 0;\n\t/* ! Black Session */\n\tposition: fixed;\n}\n\n.show-hero ~ .footer {\n\tposition: relative;\n}\n\n.footer p {\n\tcolor: white;\n}\n\n.notfoundcontent {\n\twidth: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n/* \n * Skeleton\n */\n.post-item-skeleton {\n\tmin-height: 450px;\n}\n\n.post-item-skeleton__content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tflex-wrap: wrap;\n}\n\n.skeleton-image {\n\theight: 60%;\n\twidth: 100%;\n\tbackground: lightgray;\n\tanimation: skeleton-loading 1.6s linear infinite alternate;\n}\n\n.skeleton {\n\theight: 10px;\n\tbackground: lightgray;\n\tanimation: skeleton-loading 1.6s linear infinite alternate;\n}\n\n.skeleton-city {\n\twidth: 30%;\n}\n.skeleton-name {\n\twidth: 50%;\n}\n\n.post-item-skeleton__content.desc {\n\tmargin-top: 2rem;\n}\n\n@keyframes skeleton-loading {\n\t0% {\n\t\tbackground-color: hsl(201, 20%, 70%);\n\t}\n\t100% {\n\t\tbackground-color: hsl(204, 20%, 85%);\n\t}\n}\n\n@media screen and (min-width: 768px) {\n\t.content-post {\n\t\tmargin: 32px auto auto;\n\t\ttext-align: left;\n\t\toverflow: auto;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t.header {\n\t\tpadding: 1.5rem 2rem;\n\t}\n\n\t.header__menu {\n\t\tposition: static;\n\t\ttransform: translateX(0%);\n\t\theight: fit-content;\n\t\twidth: auto;\n\t}\n\n\t.nav__list {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\n\t.nav__list a {\n\t\tpadding: 22px;\n\t}\n\n\t.hamburger-wrapper {\n\t\tdisplay: none;\n\t}\n\n\t.content {\n\t\tpadding: 32px;\n\t}\n\n\t.header__menu.active .nav__list {\n\t\tflex-direction: row;\n\t}\n\n\t.detail-item {\n\t\twidth: 80%;\n\t}\n\n\t.section-detail,\n\t.section-favorite {\n\t\tmargin-top: 7rem;\n\t\tmargin-bottom: 6rem;\n\t}\n\n\t.like {\n\t\tright: 56px;\n\t}\n}\n\n@media screen and (min-width: 992px) {\n\t.content-post {\n\t\tmargin: 32px auto auto;\n\t\ttext-align: left;\n\t\toverflow: auto;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n\n\t.content-detail-container {\n\t\tpadding: 50px 30px;\n\t}\n\n\t.content-container {\n\t\tpadding: 20px;\n\t}\n\n\t.notfoundcontent {\n\t\twidth: 50vw;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(756);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			209: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [946,2,495,337,268,535], () => (__webpack_require__(253)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app~04e4ec69.bundle.js.map