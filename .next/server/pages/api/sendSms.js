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

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twilio */ \"twilio\");\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(twilio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst allowCors = (fn)=>async (req, res)=>{\n        res.setHeader(\"Access-Control-Allow-Credentials\", true);\n        res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n        // another common pattern\n        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);\n        res.setHeader(\"Access-Control-Allow-Methods\", \"GET,OPTIONS,PATCH,DELETE,POST,PUT\");\n        res.setHeader(\"Access-Control-Allow-Headers\", \"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version\");\n        if (req.method === \"OPTIONS\") {\n            res.status(200).end();\n            return;\n        }\n        return await fn(req, res);\n    };\nasync function handler(req, res) {\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_1___default()(req, res, {\n        // Options\n        methods: [\n            \"GET\",\n            \"HEAD\",\n            \"PUT\",\n            \"PATCH\",\n            \"POST\",\n            \"DELETE\"\n        ],\n        origin: \"*\",\n        optionsSuccessStatus: 200\n    });\n    if (req.method === \"POST\") {\n        var accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console\n        var authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console\n        const client = twilio__WEBPACK_IMPORTED_MODULE_0___default()(accountSid, authToken, {\n            lazyLoading: true\n        });\n        const response = await client.messages.create({\n            body: req.body.body,\n            from: process.env.PHONE_NUMBER_FROM,\n            to: process.env.PHONE_NUMBER_TO\n        });\n        res.status(200).json(response);\n    } else {\n        res.status(200).json(\"Only POST method is accepted\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allowCors(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZFNtcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QjtBQUVPO0FBSW5DLE1BQU1FLFNBQVMsR0FBRyxDQUFDQyxFQUFZLEdBQUssT0FBT0MsR0FBUSxFQUFFQyxHQUFRLEdBQUs7UUFDaEVBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hERCxHQUFHLENBQUNDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCx5QkFBeUI7UUFDekIsb0VBQW9FO1FBQ3BFRCxHQUFHLENBQUNDLFNBQVMsQ0FDWCw4QkFBOEIsRUFDOUIsbUNBQW1DLENBQ3BDLENBQUM7UUFDRkQsR0FBRyxDQUFDQyxTQUFTLENBQ1gsOEJBQThCLEVBQzlCLHdIQUF3SCxDQUN6SCxDQUFDO1FBQ0YsSUFBSUYsR0FBRyxDQUFDRyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzVCRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7WUFDdEIsT0FBTztTQUNSO1FBQ0QsT0FBTyxNQUFNTixFQUFFLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7S0FDM0I7QUFFRCxlQUFlSyxPQUFPLENBQ3BCTixHQUFtQixFQUNuQkMsR0FBOEMsRUFDOUM7SUFDQSxNQUFNSixrREFBUSxDQUFDRyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtRQUN2QixVQUFVO1FBQ1ZNLE9BQU8sRUFBRTtZQUFDLEtBQUs7WUFBRSxNQUFNO1lBQUUsS0FBSztZQUFFLE9BQU87WUFBRSxNQUFNO1lBQUUsUUFBUTtTQUFDO1FBQzFEQyxNQUFNLEVBQUUsR0FBRztRQUNYQyxvQkFBb0IsRUFBRSxHQUFHO0tBQzFCLENBQUMsQ0FBQztJQUVILElBQUlULEdBQUcsQ0FBQ0csTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJTyxVQUFVLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUUsK0NBQStDO1FBQ3pGLElBQUlDLFNBQVMsR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLFVBQVUsRUFBRSw4Q0FBOEM7UUFFdEYsTUFBTUMsTUFBTSxHQUFHcEIsNkNBQU0sQ0FBQ2MsVUFBVSxFQUFFSSxTQUFTLEVBQUU7WUFDM0NHLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFRixNQUFNQyxRQUFRLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxRQUFRLENBQUNDLE1BQU0sQ0FBQztZQUM1Q0MsSUFBSSxFQUFFckIsR0FBRyxDQUFDcUIsSUFBSSxDQUFDQSxJQUFJO1lBQ25CQyxJQUFJLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxpQkFBaUI7WUFDbkNDLEVBQUUsRUFBRWIsT0FBTyxDQUFDQyxHQUFHLENBQUNhLGVBQWU7U0FDaEMsQ0FBQztRQUVGeEIsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNzQixJQUFJLENBQUNSLFFBQVEsQ0FBQyxDQUFDO0tBQ2hDLE1BQU07UUFDTGpCLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDc0IsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDdEQ7Q0FDRjtBQUVELGlFQUFlNUIsU0FBUyxDQUFDUSxPQUFPLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbmstdHJhbnNhY3Rpb24vLi9wYWdlcy9hcGkvc2VuZFNtcy50cz8xZjEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHR3aWxpbyBmcm9tIFwidHdpbGlvXCI7XG5pbXBvcnQgeyBNZXNzYWdlSW5zdGFuY2UgfSBmcm9tIFwidHdpbGlvL2xpYi9yZXN0L2FwaS92MjAxMC9hY2NvdW50L21lc3NhZ2VcIjtcbmltcG9ydCBOZXh0Q29ycyBmcm9tIFwibmV4dGpzLWNvcnNcIjtcblxuaW1wb3J0IENvcnMgZnJvbSBcImNvcnNcIjtcblxuY29uc3QgYWxsb3dDb3JzID0gKGZuOiBGdW5jdGlvbikgPT4gYXN5bmMgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xuICByZXMuc2V0SGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIiwgdHJ1ZSk7XG4gIHJlcy5zZXRIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICAvLyBhbm90aGVyIGNvbW1vbiBwYXR0ZXJuXG4gIC8vIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIHJlcS5oZWFkZXJzLm9yaWdpbik7XG4gIHJlcy5zZXRIZWFkZXIoXG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCIsXG4gICAgXCJHRVQsT1BUSU9OUyxQQVRDSCxERUxFVEUsUE9TVCxQVVRcIlxuICApO1xuICByZXMuc2V0SGVhZGVyKFxuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLFxuICAgIFwiWC1DU1JGLVRva2VuLCBYLVJlcXVlc3RlZC1XaXRoLCBBY2NlcHQsIEFjY2VwdC1WZXJzaW9uLCBDb250ZW50LUxlbmd0aCwgQ29udGVudC1NRDUsIENvbnRlbnQtVHlwZSwgRGF0ZSwgWC1BcGktVmVyc2lvblwiXG4gICk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIk9QVElPTlNcIikge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIGF3YWl0IGZuKHJlcSwgcmVzKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPE1lc3NhZ2VJbnN0YW5jZSB8IHN0cmluZz5cbikge1xuICBhd2FpdCBOZXh0Q29ycyhyZXEsIHJlcywge1xuICAgIC8vIE9wdGlvbnNcbiAgICBtZXRob2RzOiBbXCJHRVRcIiwgXCJIRUFEXCIsIFwiUFVUXCIsIFwiUEFUQ0hcIiwgXCJQT1NUXCIsIFwiREVMRVRFXCJdLFxuICAgIG9yaWdpbjogXCIqXCIsXG4gICAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMCwgLy8gc29tZSBsZWdhY3kgYnJvd3NlcnMgKElFMTEsIHZhcmlvdXMgU21hcnRUVnMpIGNob2tlIG9uIDIwNFxuICB9KTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB2YXIgYWNjb3VudFNpZCA9IHByb2Nlc3MuZW52LkFDQ09VTlRfU0lEOyAvLyBZb3VyIEFjY291bnQgU0lEIGZyb20gd3d3LnR3aWxpby5jb20vY29uc29sZVxuICAgIHZhciBhdXRoVG9rZW4gPSBwcm9jZXNzLmVudi5BVVRIX1RPS0VOOyAvLyBZb3VyIEF1dGggVG9rZW4gZnJvbSB3d3cudHdpbGlvLmNvbS9jb25zb2xlXG5cbiAgICBjb25zdCBjbGllbnQgPSB0d2lsaW8oYWNjb3VudFNpZCwgYXV0aFRva2VuLCB7XG4gICAgICBsYXp5TG9hZGluZzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50Lm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICBib2R5OiByZXEuYm9keS5ib2R5LFxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuUEhPTkVfTlVNQkVSX0ZST00sXG4gICAgICB0bzogcHJvY2Vzcy5lbnYuUEhPTkVfTlVNQkVSX1RPIGFzIHN0cmluZyxcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcIk9ubHkgUE9TVCBtZXRob2QgaXMgYWNjZXB0ZWRcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxsb3dDb3JzKGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbInR3aWxpbyIsIk5leHRDb3JzIiwiYWxsb3dDb3JzIiwiZm4iLCJyZXEiLCJyZXMiLCJzZXRIZWFkZXIiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJoYW5kbGVyIiwibWV0aG9kcyIsIm9yaWdpbiIsIm9wdGlvbnNTdWNjZXNzU3RhdHVzIiwiYWNjb3VudFNpZCIsInByb2Nlc3MiLCJlbnYiLCJBQ0NPVU5UX1NJRCIsImF1dGhUb2tlbiIsIkFVVEhfVE9LRU4iLCJjbGllbnQiLCJsYXp5TG9hZGluZyIsInJlc3BvbnNlIiwibWVzc2FnZXMiLCJjcmVhdGUiLCJib2R5IiwiZnJvbSIsIlBIT05FX05VTUJFUl9GUk9NIiwidG8iLCJQSE9ORV9OVU1CRVJfVE8iLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendSms.ts\n");

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