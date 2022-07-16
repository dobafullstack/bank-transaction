"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendSms";
exports.ids = ["pages/api/sendSms"];
exports.modules = {

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ "(api)/./pages/api/sendSms.ts":
/*!******************************!*\
  !*** ./pages/api/sendSms.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twilio */ \"twilio\");\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(twilio__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        var accountSid = \"AC17bc4654122bd09b233cfccb2d094eec\"; // Your Account SID from www.twilio.com/console\n        var authToken = \"d64a9527497e467c7d38229356fa015e\"; // Your Auth Token from www.twilio.com/console\n        const client = twilio__WEBPACK_IMPORTED_MODULE_0___default()(accountSid, authToken, {\n            lazyLoading: true\n        });\n        const response = await client.messages.create({\n            body: req.body.body,\n            from: \"+15706724897\",\n            to: \"+84944609933\"\n        });\n        res.status(200).json(response);\n    } else {\n        res.status(200).json(\"Only POST method is accepted\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZFNtcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFNEI7QUFHYixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBOEMsRUFDOUM7SUFDQSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSUMsVUFBVSxHQUFHLG9DQUFvQyxFQUFFLCtDQUErQztRQUN0RyxJQUFJQyxTQUFTLEdBQUcsa0NBQWtDLEVBQUUsOENBQThDO1FBRWxHLE1BQU1DLE1BQU0sR0FBR1AsNkNBQU0sQ0FBQ0ssVUFBVSxFQUFFQyxTQUFTLEVBQUU7WUFDM0NFLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFRixNQUFNQyxRQUFRLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxRQUFRLENBQUNDLE1BQU0sQ0FBQztZQUM1Q0MsSUFBSSxFQUFFVixHQUFHLENBQUNVLElBQUksQ0FBQ0EsSUFBSTtZQUNuQkMsSUFBSSxFQUFFLGNBQWM7WUFDcEJDLEVBQUUsRUFBRSxjQUFjO1NBQ25CLENBQUM7UUFFRlgsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1AsUUFBUSxDQUFDO0tBQy9CLE1BQU07UUFDTE4sR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0tBQ3REO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYW5rLXRyYW5zYWN0aW9uLy4vcGFnZXMvYXBpL3NlbmRTbXMudHM/MWYxMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB0d2lsaW8gZnJvbSBcInR3aWxpb1wiO1xuaW1wb3J0IHsgTWVzc2FnZUluc3RhbmNlIH0gZnJvbSBcInR3aWxpby9saWIvcmVzdC9hcGkvdjIwMTAvYWNjb3VudC9tZXNzYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPE1lc3NhZ2VJbnN0YW5jZSB8IHN0cmluZz5cbikge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB2YXIgYWNjb3VudFNpZCA9IFwiQUMxN2JjNDY1NDEyMmJkMDliMjMzY2ZjY2IyZDA5NGVlY1wiOyAvLyBZb3VyIEFjY291bnQgU0lEIGZyb20gd3d3LnR3aWxpby5jb20vY29uc29sZVxuICAgIHZhciBhdXRoVG9rZW4gPSBcImQ2NGE5NTI3NDk3ZTQ2N2M3ZDM4MjI5MzU2ZmEwMTVlXCI7IC8vIFlvdXIgQXV0aCBUb2tlbiBmcm9tIHd3dy50d2lsaW8uY29tL2NvbnNvbGVcblxuICAgIGNvbnN0IGNsaWVudCA9IHR3aWxpbyhhY2NvdW50U2lkLCBhdXRoVG9rZW4sIHtcbiAgICAgIGxhenlMb2FkaW5nOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQubWVzc2FnZXMuY3JlYXRlKHtcbiAgICAgIGJvZHk6IHJlcS5ib2R5LmJvZHksXG4gICAgICBmcm9tOiBcIisxNTcwNjcyNDg5N1wiLFxuICAgICAgdG86IFwiKzg0OTQ0NjA5OTMzXCIsXG4gICAgfSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSlcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcIk9ubHkgUE9TVCBtZXRob2QgaXMgYWNjZXB0ZWRcIik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0d2lsaW8iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYWNjb3VudFNpZCIsImF1dGhUb2tlbiIsImNsaWVudCIsImxhenlMb2FkaW5nIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImNyZWF0ZSIsImJvZHkiLCJmcm9tIiwidG8iLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendSms.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendSms.ts"));
module.exports = __webpack_exports__;

})();