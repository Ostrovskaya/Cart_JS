/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/CartItems.js":
/*!************************************!*\
  !*** ./src/public/js/CartItems.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartItems; });\nclass CartItems{\r\n    constructor (item){\r\n        this.item = item;\r\n    }\r\n\r\n    getHTML(){\r\n        return  `<div class=\"goods\" data-id=\"${this.item.id}\">\r\n                    <img src=\"${this.item.img}\" alt=\"${this.item.product_name}\" class=\"goods__img\">\r\n                    <div class=\"goods__text\">\r\n                        <p class=\"goods__name\">${this.item.product_name}</p>\r\n                        <p class=\"goods__price\">${this.item.price}</p>\r\n                    </div>\r\n                    <input class=\"goods__count\" type=\"number\" min=\"1\" value=\"${this.item.count}\">\r\n                    <p class = \"goods__number\">&nbsp;шт</p>\r\n                    <div class=\"goods__delete\"><i class=\"delete far fa-trash-alt\"></i></div>\r\n                </div>`    \r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/public/js/CartItems.js?");

/***/ }),

/***/ "./src/public/js/CatalogItems.js":
/*!***************************************!*\
  !*** ./src/public/js/CatalogItems.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CatalogItems; });\nclass CatalogItems{\r\n    constructor (item){\r\n        this.item = item;\r\n    }\r\n\r\n    getHTML(){\r\n        return `<div class=\"product\"  data-id=\"${this.item.id}\">\r\n                    <img src=\"${this.item.img}\" alt=\"${this.item.product_name}\" class=\"product__img\">\r\n                    <p class=\"product__name\">${this.item.product_name}</p>\r\n                    <p class=\"product__price\">${this.item.price} &#8381;</p>\r\n                    <input type=\"button\" name=\"buy\" class=\"product__button\" value =\"Купить\">\r\n                </div>`\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/public/js/CatalogItems.js?");

/***/ }),

/***/ "./src/public/js/List.js":
/*!*******************************!*\
  !*** ./src/public/js/List.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var _CatalogItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogItems.js */ \"./src/public/js/CatalogItems.js\");\n/* harmony import */ var _CartItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItems.js */ \"./src/public/js/CartItems.js\");\nlet API = \"https://raw.githubusercontent.com/Ostrovskaya/js2_1803/master/students/Ostrovskaya%20Elena/Others/basket/\"\r\n\r\n\r\n\r\n\r\nlet list = {\r\n    Catalog: _CatalogItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    Cart: _CartItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n}\r\n\r\nclass List{\r\n    constructor(url, container){\r\n        this.url = url;\r\n        this.container = document.querySelector(container);\r\n        this.items = [];\r\n        this._init();\r\n    }\r\n    _init(){\r\n        return false;\r\n    }\r\n    render(){\r\n        let str = \"\";\r\n        this.items.forEach(item => {\r\n            str += new list[this.constructor.name](item).getHTML();\r\n        })\r\n        this.container.innerHTML = str;\r\n    }\r\n    async getData(){\r\n        const res = await fetch(API + this.url);\r\n        return await res.json();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/public/js/List.js?");

/***/ }),

/***/ "./src/public/js/cart.js":
/*!*******************************!*\
  !*** ./src/public/js/cart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./src/public/js/List.js\");\n/* harmony import */ var _CartItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItems.js */ \"./src/public/js/CartItems.js\");\n\r\n\r\n\r\nclass Cart extends _List_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(url, container){\r\n        super(url = 'cart_product.json', container = '.products');\r\n        //Инконка поверх корзины, отображающая количество продуктов в корзине\r\n        this.count = document.querySelector('.cart__count');\r\n        //Элемент, отображающий общую стоимость\r\n        this.total = document.querySelector('.goods__total');\r\n        //Иконка корзины\r\n        this.iconCart = document.querySelector('.cart');\r\n        //Иконка закрыть корзину\r\n        this.iconClose = document.querySelector('.drop__close');\r\n        this.drop = document.querySelector('.drop');\r\n    }\r\n\r\n    /**\r\n     *Инициализируем корзину\r\n     */\r\n    _init(){\r\n        this.getData()\r\n            .then(data => this.items = data)\r\n            .then(this.render.bind(this))\r\n            .finally(()=>{\r\n                this.addEventsListener();\r\n                this.changeCountBadge(this.getCountProduct());  \r\n                this.setTotalSum();\r\n            })\r\n    }\r\n\r\n    /**\r\n     *Добавляет ожидание события - открытие корзины\r\n     */\r\n    addEventOpenCart(){\r\n        this.iconCart.addEventListener('click',() => this.drop.style.display = 'block');\r\n    }\r\n\r\n    /**\r\n     *Добавляет ожидание события - закрытие корзины\r\n     */\r\n    addEventCloseCart(){\r\n        this.iconClose.addEventListener('click',(evt) => {\r\n            this.drop.style.display = 'none';\r\n            evt.stopPropagation();\r\n        });\r\n    }\r\n\r\n    /**\r\n     *Функция добавления товара в корзину       \r\n     *Проверяет есть ли такой товар уже в корзине           \r\n     *Если есть - меняет количество конкретного товара, если нет - добавляет товар       \r\n     */\r\n    addProductInBasket(product){   \r\n        if(this.isProductInBacket(product.id)){\r\n            this.addCountProduct(product.id);\r\n        }\r\n        else{\r\n            this.addNewProduct(product);\r\n        } \r\n        this.changeCountBadge(this.getCountProduct());  \r\n        this.setTotalSum();  \r\n    }\r\n\r\n    /**\r\n     *Функция добавляет новый элемен товара в разметку и массив товаров.          \r\n     *А так же добавляет ему обработчики событий    \r\n     */\r\n    addNewProduct(product){\r\n        let objProduct = this.getNewObjProduct(product);\r\n        this.container.insertAdjacentHTML('beforeend', new _CartItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](objProduct).getHTML());\r\n        this.items.push(objProduct);   \r\n    }\r\n\r\n        \r\n    /**\r\n     *Добавляем обработчики событий:    \r\n     *Нажатие на кнопку Delete      \r\n     *Изменение количества товара\r\n     */\r\n    addEventsListener(){\r\n        this.container.addEventListener('click', (evt)=>{\r\n            if(evt.target.className.includes(\"delete\")) {\r\n                this.handlerEventDelete(evt);\r\n            }\r\n        })\r\n\r\n        this.container.addEventListener('change', this.handlerEventChangeCount.bind(this));\r\n        this.container.addEventListener('keydown', evt => evt.preventDefault());\r\n    }\r\n\r\n    /**\r\n     *Обработчик события - изменения количества товара \r\n     */\r\n    handlerEventChangeCount(evt){\r\n        this.getObjProductById(evt.target.parentNode.dataset.id).count = +evt.target.value;\r\n        console.log(this.items)\r\n        this.changeCountBadge(this.getCountProduct()); \r\n        this.setTotalSum(); \r\n    }\r\n\r\n    /**\r\n     *Обработка события - нажатие на кнопку удалить продукт из корзины\r\n     */\r\n    handlerEventDelete(evt){\r\n        let product = evt.target.parentNode.parentNode;\r\n        this.deleteProduct(product.dataset.id);\r\n        product.remove();\r\n        this.changeCountBadge(this.getCountProduct()); \r\n        this.setTotalSum(); \r\n    }\r\n\r\n    /**\r\n     *Функция считаем сумму всех товаров в корзине      \r\n     *Если корзина пуста - выводит пустое поле      \r\n     *Если нет - умножает цену товара на его количество и суммирует всю стоимость\r\n     */\r\n    setTotalSum(){\r\n        if(this.items.length == 0){\r\n            this.total.querySelector('.drop__total').innerText = \"\";\r\n            return \r\n        }\r\n        let sum = 0;\r\n        this.items.forEach(function(product){\r\n            let price = product.price;\r\n            let count = +product.count;\r\n            sum += price * count;\r\n        })\r\n        this.total.querySelector('.drop__total').innerText =`${sum} ₽`;\r\n    }\r\n\r\n\r\n    /**\r\n     *Функция проверяет есть ли уже такой продукт в корзине\r\n     */\r\n    isProductInBacket(id){\r\n        for (let i = 0; i < this.items.length; i++) {\r\n            if(this.items[i].id == id){\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    /**\r\n     *Функция увеличивающая количество конкретного товара на 1\r\n     *\r\n     */\r\n    addCountProduct(id){\r\n        let product = this.getProductById(id);\r\n        product.querySelector('.goods__count').value ++;\r\n        this.getObjProductById(id).count++;\r\n    }\r\n\r\n    /**\r\n     *Возвращает новый объект продукта\r\n     */\r\n    getNewObjProduct(product){\r\n        return {\r\n            id: product.id,\r\n            product_name: product.product_name,\r\n            img: product.img,\r\n            price: product.price,\r\n            count: 1\r\n        }\r\n    }\r\n\r\n\r\n    /**\r\n     *Возвращает элемент продукта из корзины с указанным id\r\n     *\r\n     */\r\n    getProductById(id){\r\n        return this.container.querySelector(`.goods[data-id='${id}']`);\r\n    }\r\n\r\n    /**\r\n     *Возвращает объект продукта с указанным id из массива продуктов \r\n     *\r\n     */\r\n    getObjProductById(id){\r\n        for (let i = 0; i < this.items.length; i++) {\r\n            if(this.items[i].id == id){\r\n                return this.items[i];\r\n            }   \r\n        }\r\n    }\r\n\r\n\r\n    /**\r\n     *возвращает общее количество товара в корзине\r\n     */\r\n    getCountProduct(){\r\n        return this.items.reduce((count, product) => count + +product.count, 0) \r\n    }\r\n\r\n    /**\r\n     *Функция удаляет продукт из массива с продуктами в корзине\r\n     */\r\n    deleteProduct(id){\r\n        let index = this.items.indexOf(this.getObjProductById(id))\r\n        this.items.splice(index, 1);\r\n    }\r\n\r\n    /**\r\n     *Функция изменяет маркер с количеством товаров на иконке корзины\r\n     *Если товаров в корзине нет - маркер убирается и в корзину добавляется сообщение 'В корзине пусто'\r\n     */\r\n    changeCountBadge(count){\r\n        if(count == 0){\r\n            this.count.style.display = 'none';  \r\n            this.total.querySelector('.drop__info').innerText = 'В корзине пусто' ;        \r\n        }\r\n        else{\r\n            this.count.style.display = 'block';  \r\n            this.count.innerHTML = count;\r\n            this.total.querySelector('.drop__info').innerText = 'Total:';\r\n        }  \r\n    }\r\n\r\n   \r\n    \r\n}\r\n\n\n//# sourceURL=webpack:///./src/public/js/cart.js?");

/***/ }),

/***/ "./src/public/js/catalog.js":
/*!**********************************!*\
  !*** ./src/public/js/catalog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Catalog; });\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./src/public/js/List.js\");\n\r\n\r\nclass Catalog extends _List_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(cart,url, container){\r\n        super(url = 'my_store.json', container = '.catalog');\r\n        this.cart = cart;\r\n    }\r\n\r\n    /**\r\n     *Инициализируем каталог\r\n     */\r\n    _init(){\r\n        this.getData()\r\n            .then(data => this.items = data)\r\n            .then(this.render.bind(this))\r\n            .finally(this.addEventListeners.bind(this))\r\n    }\r\n\r\n\r\n    /**\r\n     *Добавляем обработчик событий  - нажатие на кнопку Купить\r\n     */\r\n    addEventListeners(){\r\n        this.container.addEventListener('click', (evt)=>{\r\n            if(evt.target.name == \"buy\") {\r\n                this.items.forEach(item => {\r\n                    if(item.id == evt.target.parentNode.dataset.id){\r\n                        this.cart.addProductInBasket(item);\r\n                    }\r\n                })   \r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/public/js/catalog.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./src/public/js/cart.js\");\n/* harmony import */ var _catalog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog.js */ \"./src/public/js/catalog.js\");\n\r\n   \r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', ()=>{\r\n   const cart = new _cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n   const catalog = new _catalog_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cart);\r\n\r\n   cart.addEventOpenCart();\r\n   cart.addEventCloseCart();\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });