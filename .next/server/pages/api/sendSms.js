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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twilio */ \"twilio\");\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(twilio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst allowCors = (fn)=>async (req, res)=>{\n        res.setHeader(\"Access-Control-Allow-Credentials\", true);\n        res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n        // another common pattern\n        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);\n        res.setHeader(\"Access-Control-Allow-Methods\", \"GET,OPTIONS,PATCH,DELETE,POST,PUT\");\n        res.setHeader(\"Access-Control-Allow-Headers\", \"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version\");\n        if (req.method === \"OPTIONS\") {\n            res.status(200).end();\n            return;\n        }\n        return await fn(req, res);\n    };\nasync function handler(req, res) {\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_1___default()(req, res, {\n        // Options\n        methods: [\n            \"GET\",\n            \"HEAD\",\n            \"PUT\",\n            \"PATCH\",\n            \"POST\",\n            \"DELETE\"\n        ],\n        origin: \"*\",\n        optionsSuccessStatus: 200\n    });\n    if (req.method === \"POST\") {\n        var accountSid = \"AC17bc4654122bd09b233cfccb2d094eec\"; // Your Account SID from www.twilio.com/console\n        var authToken = \"85dbb3fc01926d6cf4f3f33f2cf95d7a\"; // Your Auth Token from www.twilio.com/console\n        const client = twilio__WEBPACK_IMPORTED_MODULE_0___default()(accountSid, authToken, {\n            lazyLoading: true\n        });\n        const response = await client.messages.create({\n            body: req.body.body,\n            from: \"+15706724897\",\n            to: \"+84944609933\"\n        });\n        res.status(200).json(response);\n    } else {\n        res.status(200).json(\"Only POST method is accepted\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allowCors(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZFNtcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QjtBQUVPO0FBSW5DLE1BQU1FLFNBQVMsR0FBRyxDQUFDQyxFQUFZLEdBQUssT0FBT0MsR0FBUSxFQUFFQyxHQUFRLEdBQUs7UUFDaEVBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hERCxHQUFHLENBQUNDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCx5QkFBeUI7UUFDekIsb0VBQW9FO1FBQ3BFRCxHQUFHLENBQUNDLFNBQVMsQ0FDWCw4QkFBOEIsRUFDOUIsbUNBQW1DLENBQ3BDLENBQUM7UUFDRkQsR0FBRyxDQUFDQyxTQUFTLENBQ1gsOEJBQThCLEVBQzlCLHdIQUF3SCxDQUN6SCxDQUFDO1FBQ0YsSUFBSUYsR0FBRyxDQUFDRyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzVCRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7WUFDdEIsT0FBTztTQUNSO1FBQ0QsT0FBTyxNQUFNTixFQUFFLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7S0FDM0I7QUFFRCxlQUFlSyxPQUFPLENBQ3BCTixHQUFtQixFQUNuQkMsR0FBOEMsRUFDOUM7SUFDQSxNQUFNSixrREFBUSxDQUFDRyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtRQUN2QixVQUFVO1FBQ1ZNLE9BQU8sRUFBRTtZQUFDLEtBQUs7WUFBRSxNQUFNO1lBQUUsS0FBSztZQUFFLE9BQU87WUFBRSxNQUFNO1lBQUUsUUFBUTtTQUFDO1FBQzFEQyxNQUFNLEVBQUUsR0FBRztRQUNYQyxvQkFBb0IsRUFBRSxHQUFHO0tBQzFCLENBQUMsQ0FBQztJQUVILElBQUlULEdBQUcsQ0FBQ0csTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJTyxVQUFVLEdBQUcsb0NBQW9DLEVBQUUsK0NBQStDO1FBQ3RHLElBQUlDLFNBQVMsR0FBRyxrQ0FBa0MsRUFBRSw4Q0FBOEM7UUFFbEcsTUFBTUMsTUFBTSxHQUFHaEIsNkNBQU0sQ0FBQ2MsVUFBVSxFQUFFQyxTQUFTLEVBQUU7WUFDM0NFLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFRixNQUFNQyxRQUFRLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxRQUFRLENBQUNDLE1BQU0sQ0FBQztZQUM1Q0MsSUFBSSxFQUFFakIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDQSxJQUFJO1lBQ25CQyxJQUFJLEVBQUUsY0FBYztZQUNwQkMsRUFBRSxFQUFFLGNBQWM7U0FDbkIsQ0FBQztRQUVGbEIsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNnQixJQUFJLENBQUNOLFFBQVEsQ0FBQyxDQUFDO0tBQ2hDLE1BQU07UUFDTGIsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNnQixJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN0RDtDQUNGO0FBRUQsaUVBQWV0QixTQUFTLENBQUNRLE9BQU8sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFuay10cmFuc2FjdGlvbi8uL3BhZ2VzL2FwaS9zZW5kU21zLnRzPzFmMTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgdHdpbGlvIGZyb20gXCJ0d2lsaW9cIjtcbmltcG9ydCB7IE1lc3NhZ2VJbnN0YW5jZSB9IGZyb20gXCJ0d2lsaW8vbGliL3Jlc3QvYXBpL3YyMDEwL2FjY291bnQvbWVzc2FnZVwiO1xuaW1wb3J0IE5leHRDb3JzIGZyb20gXCJuZXh0anMtY29yc1wiO1xuXG5pbXBvcnQgQ29ycyBmcm9tIFwiY29yc1wiO1xuXG5jb25zdCBhbGxvd0NvcnMgPSAoZm46IEZ1bmN0aW9uKSA9PiBhc3luYyAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG4gIHJlcy5zZXRIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiLCB0cnVlKTtcbiAgcmVzLnNldEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gIC8vIGFub3RoZXIgY29tbW9uIHBhdHRlcm5cbiAgLy8gcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgcmVxLmhlYWRlcnMub3JpZ2luKTtcbiAgcmVzLnNldEhlYWRlcihcbiAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIixcbiAgICBcIkdFVCxPUFRJT05TLFBBVENILERFTEVURSxQT1NULFBVVFwiXG4gICk7XG4gIHJlcy5zZXRIZWFkZXIoXG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsXG4gICAgXCJYLUNTUkYtVG9rZW4sIFgtUmVxdWVzdGVkLVdpdGgsIEFjY2VwdCwgQWNjZXB0LVZlcnNpb24sIENvbnRlbnQtTGVuZ3RoLCBDb250ZW50LU1ENSwgQ29udGVudC1UeXBlLCBEYXRlLCBYLUFwaS1WZXJzaW9uXCJcbiAgKTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiT1BUSU9OU1wiKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gYXdhaXQgZm4ocmVxLCByZXMpO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8TWVzc2FnZUluc3RhbmNlIHwgc3RyaW5nPlxuKSB7XG4gIGF3YWl0IE5leHRDb3JzKHJlcSwgcmVzLCB7XG4gICAgLy8gT3B0aW9uc1xuICAgIG1ldGhvZHM6IFtcIkdFVFwiLCBcIkhFQURcIiwgXCJQVVRcIiwgXCJQQVRDSFwiLCBcIlBPU1RcIiwgXCJERUxFVEVcIl0sXG4gICAgb3JpZ2luOiBcIipcIixcbiAgICBvcHRpb25zU3VjY2Vzc1N0YXR1czogMjAwLCAvLyBzb21lIGxlZ2FjeSBicm93c2VycyAoSUUxMSwgdmFyaW91cyBTbWFydFRWcykgY2hva2Ugb24gMjA0XG4gIH0pO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHZhciBhY2NvdW50U2lkID0gXCJBQzE3YmM0NjU0MTIyYmQwOWIyMzNjZmNjYjJkMDk0ZWVjXCI7IC8vIFlvdXIgQWNjb3VudCBTSUQgZnJvbSB3d3cudHdpbGlvLmNvbS9jb25zb2xlXG4gICAgdmFyIGF1dGhUb2tlbiA9IFwiODVkYmIzZmMwMTkyNmQ2Y2Y0ZjNmMzNmMmNmOTVkN2FcIjsgLy8gWW91ciBBdXRoIFRva2VuIGZyb20gd3d3LnR3aWxpby5jb20vY29uc29sZVxuXG4gICAgY29uc3QgY2xpZW50ID0gdHdpbGlvKGFjY291bnRTaWQsIGF1dGhUb2tlbiwge1xuICAgICAgbGF6eUxvYWRpbmc6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgYm9keTogcmVxLmJvZHkuYm9keSxcbiAgICAgIGZyb206IFwiKzE1NzA2NzI0ODk3XCIsXG4gICAgICB0bzogXCIrODQ5NDQ2MDk5MzNcIixcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcIk9ubHkgUE9TVCBtZXRob2QgaXMgYWNjZXB0ZWRcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxsb3dDb3JzKGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbInR3aWxpbyIsIk5leHRDb3JzIiwiYWxsb3dDb3JzIiwiZm4iLCJyZXEiLCJyZXMiLCJzZXRIZWFkZXIiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJoYW5kbGVyIiwibWV0aG9kcyIsIm9yaWdpbiIsIm9wdGlvbnNTdWNjZXNzU3RhdHVzIiwiYWNjb3VudFNpZCIsImF1dGhUb2tlbiIsImNsaWVudCIsImxhenlMb2FkaW5nIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImNyZWF0ZSIsImJvZHkiLCJmcm9tIiwidG8iLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendSms.ts\n");

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