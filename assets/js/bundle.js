/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"carbon.core\"]; }());\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNhcmJvbi5jb3JlXCI/ODMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImNhcmJvbi5jb3JlXCJdOyB9KCkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2FyYm9uLmNvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"carbon.vendor\"]; }());\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNhcmJvbi52ZW5kb3JcIj9kZTI2Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiY2FyYm9uLnZlbmRvclwiXTsgfSgpKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNhcmJvbi52ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.enhance = exports.DisplayField = undefined;\n\nvar _react = __webpack_require__(8);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(6);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _recompose = __webpack_require__(9);\n\nvar _field = __webpack_require__(7);\n\nvar _field2 = _interopRequireDefault(_field);\n\nvar _withStore = __webpack_require__(4);\n\nvar _withStore2 = _interopRequireDefault(_withStore);\n\nvar _withSetup = __webpack_require__(5);\n\nvar _withSetup2 = _interopRequireDefault(_withSetup);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Render a display input field.\n *\n * @param  {Object}        props\n * @param  {String}        props.name\n * @param  {Object}        props.field\n * @param  {Function}      props.handleChange\n * @return {React.Element}\n */\n/**\n * The external dependencies.\n */\nvar DisplayField = exports.DisplayField = function DisplayField(_ref) {\n\tvar name = _ref.name,\n\t    field = _ref.field,\n\t    handleChange = _ref.handleChange;\n\n\treturn _react2.default.createElement(\n\t\t_field2.default,\n\t\t{ field: field },\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\tfield.value\n\t\t)\n\t);\n};\n\n/**\n * Validate the props.\n *\n * @type {Object}\n */\n\n\n/**\n * The internal dependencies.\n */\nDisplayField.propTypes = {\n\tname: _propTypes2.default.string,\n\tfield: _propTypes2.default.shape({\n\t\tid: _propTypes2.default.string,\n\t\tvalue: _propTypes2.default.string\n\n\t}),\n\thandleChange: _propTypes2.default.func\n};\n\n/**\n * The enhancer.\n *\n * @type {Function}\n */\nvar enhance = exports.enhance = (0, _recompose.compose)(\n/**\n * Connect to the Redux store.\n */\n(0, _withStore2.default)(),\n\n/**\n * Attach the setup hooks.\n */\n(0, _withSetup2.default)(),\n\n/**\n * The handlers passed to the component.\n */\n(0, _recompose.withHandlers)({\n\thandleChange: function handleChange(_ref2) {\n\t\tvar field = _ref2.field,\n\t\t    setFieldValue = _ref2.setFieldValue;\n\t\treturn function (_ref3) {\n\t\t\tvar value = _ref3.target.value;\n\t\t\treturn setFieldValue(field.id, value);\n\t\t};\n\t}\n}));\n\nexports.default = (0, _recompose.setStatic)('type', ['display'])(enhance(DisplayField));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9maWVsZC5qcz9hYzk2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGV4dGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoSGFuZGxlcnMsIHNldFN0YXRpYyB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbi8qKlxuICogVGhlIGludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuaW1wb3J0IEZpZWxkIGZyb20gJy4uLy4uLy4uLy4uLy4uL2h0bWxidXJnZXIvY2FyYm9uLWZpZWxkcy9hc3NldHMvanMvZmllbGRzL2NvbXBvbmVudHMvZmllbGQnO1xuaW1wb3J0IHdpdGhTdG9yZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9odG1sYnVyZ2VyL2NhcmJvbi1maWVsZHMvYXNzZXRzL2pzL2ZpZWxkcy9kZWNvcmF0b3JzL3dpdGgtc3RvcmUnO1xuaW1wb3J0IHdpdGhTZXR1cCBmcm9tICcuLi8uLi8uLi8uLi8uLi9odG1sYnVyZ2VyL2NhcmJvbi1maWVsZHMvYXNzZXRzL2pzL2ZpZWxkcy9kZWNvcmF0b3JzL3dpdGgtc2V0dXAnO1xuXG4vKipcbiAqIFJlbmRlciBhIGRpc3BsYXkgaW5wdXQgZmllbGQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgcHJvcHNcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgIHByb3BzLm5hbWVcbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgIHByb3BzLmZpZWxkXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgICBwcm9wcy5oYW5kbGVDaGFuZ2VcbiAqIEByZXR1cm4ge1JlYWN0LkVsZW1lbnR9XG4gKi9cbmV4cG9ydCBjb25zdCBEaXNwbGF5RmllbGQgPSAoe1xuXHRuYW1lLFxuXHRmaWVsZCxcblx0aGFuZGxlQ2hhbmdlXG59KSA9PiB7XG5cdHJldHVybiA8RmllbGQgZmllbGQ9e2ZpZWxkfT5cblx0XHQ8cD5cblx0XHRcdHtmaWVsZC52YWx1ZX1cblx0XHQ8L3A+XG5cdFx0XG5cdDwvRmllbGQ+O1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHRoZSBwcm9wcy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5EaXNwbGF5RmllbGQucHJvcFR5cGVzID0ge1xuXHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRmaWVsZDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRpZDogUHJvcFR5cGVzLnN0cmluZyxcblx0XHR2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRcblx0fSksXG5cdGhhbmRsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKipcbiAqIFRoZSBlbmhhbmNlci5cbiAqXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBlbmhhbmNlID0gY29tcG9zZShcblx0LyoqXG5cdCAqIENvbm5lY3QgdG8gdGhlIFJlZHV4IHN0b3JlLlxuXHQgKi9cblx0d2l0aFN0b3JlKCksXG5cblx0LyoqXG5cdCAqIEF0dGFjaCB0aGUgc2V0dXAgaG9va3MuXG5cdCAqL1xuXHR3aXRoU2V0dXAoKSxcblxuXHQvKipcblx0ICogVGhlIGhhbmRsZXJzIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LlxuXHQgKi9cblx0d2l0aEhhbmRsZXJzKHtcblx0XHRoYW5kbGVDaGFuZ2U6ICh7IGZpZWxkLCBzZXRGaWVsZFZhbHVlIH0pID0+ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldEZpZWxkVmFsdWUoZmllbGQuaWQsIHZhbHVlKSxcblx0fSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHNldFN0YXRpYygndHlwZScsIFtcblx0J2Rpc3BsYXknLFxuXSkoZW5oYW5jZShEaXNwbGF5RmllbGQpKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFzc2V0cy9qcy9jb21wb25lbnRzL2ZpZWxkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7OztBQWRBOzs7QUF1QkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7OztBQTdCQTs7O0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQUNBO0FBU0E7Ozs7O0FBS0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(\"uokr\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9hc3NldHMvanMvbGliL3JlZ2lzdHJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjYXJib24uY29yZT9jNzkwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKFwidW9rclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9hc3NldHMvanMvbGliL3JlZ2lzdHJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjYXJib24uY29yZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(\"0yqe\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9hc3NldHMvanMvZmllbGRzL2RlY29yYXRvcnMvd2l0aC1zdG9yZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY2FyYm9uLmNvcmU/NWYwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKShcIjB5cWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vYXNzZXRzL2pzL2ZpZWxkcy9kZWNvcmF0b3JzL3dpdGgtc3RvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGNhcmJvbi5jb3JlXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(\"8ctJ\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9hc3NldHMvanMvZmllbGRzL2RlY29yYXRvcnMvd2l0aC1zZXR1cC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY2FyYm9uLmNvcmU/OGUxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKShcIjhjdEpcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vYXNzZXRzL2pzL2ZpZWxkcy9kZWNvcmF0b3JzL3dpdGgtc2V0dXAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGNhcmJvbi5jb3JlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(1))(\"KSGD\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY2FyYm9uLnZlbmRvcj84ZTRhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKFwiS1NHRFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY2FyYm9uLnZlbmRvclxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(\"M6Uh\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9hc3NldHMvanMvZmllbGRzL2NvbXBvbmVudHMvZmllbGQvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGNhcmJvbi5jb3JlPzRlYzUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoXCJNNlVoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL2Fzc2V0cy9qcy9maWVsZHMvY29tcG9uZW50cy9maWVsZC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY2FyYm9uLmNvcmVcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(1))(\"U7vG\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGNhcmJvbi52ZW5kb3I/OTQ0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKShcIlU3dkdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBjYXJib24udmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(1))(\"zpMW\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL2VzL1JlY29tcG9zZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY2FyYm9uLnZlbmRvcj8yYmFiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKFwienBNV1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL2VzL1JlY29tcG9zZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgY2FyYm9uLnZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _registry = __webpack_require__(3);\n\nvar _field = __webpack_require__(2);\n\nvar _field2 = _interopRequireDefault(_field);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * The internal dependencies.\n */\n(0, _registry.registerFieldComponent)('display', _field2.default);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcz83NjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuaW1wb3J0IHsgcmVnaXN0ZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJ2xpYi9yZWdpc3RyeSc7XG5pbXBvcnQgRGlzcGxheUZpZWxkIGZyb20gJ2NvbXBvbmVudHMvZmllbGQnO1xuXG5yZWdpc3RlckZpZWxkQ29tcG9uZW50KCdkaXNwbGF5JywgRGlzcGxheUZpZWxkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhc3NldHMvanMvYm9vdHN0cmFwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUxBOzs7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);