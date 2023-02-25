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
exports.id = "pages/api/users/create-account";
exports.ids = ["pages/api/users/create-account"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRTdCLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLENBQUM7QUFFM0QsaUVBQWVBLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./lib/withHandler.tsx":
/*!*****************************!*\
  !*** ./lib/withHandler.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , handler , isPrivate =true  }) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(401).json({\n                ok: false\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvd2l0aEhhbmRsZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFlZSxTQUFTQSxXQUFXLENBQ2pDLEVBQUNDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxTQUFTLEVBQUcsSUFBSSxHQUFhLEVBQ2hEO0lBQ0EsT0FBTyxlQUFnQkMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBZ0I7UUFDN0UsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxRQUFRLENBQUNILEdBQUcsQ0FBQ0UsTUFBTSxDQUFRLEVBQUU7WUFDdkQsT0FBT0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsSUFBSU4sU0FBUyxJQUFJLENBQUNDLEdBQUcsQ0FBQ00sT0FBTyxDQUFDQyxJQUFJLEVBQUU7WUFDbEMsT0FBT04sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQztnQkFBQ0MsRUFBRSxFQUFDLEtBQUs7YUFBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSTtZQUNGLE1BQU1YLE9BQU8sQ0FBQ0UsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztTQUN6QixDQUFDLE9BQU9TLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBT1QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQztnQkFBRUUsS0FBSzthQUFFLENBQUMsQ0FBQztTQUN4QztLQUNGLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvd2l0aEhhbmRsZXIudHN4PzM0Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVHlwZSB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG50eXBlIG1ldGhvZHMgPSBcIkdFVFwiIHwgXCJQT1NUXCIgfCBcIkRFTEVURVwiO1xyXG5cclxuaW50ZXJmYWNlIENvbmZpZ1R5cGUge1xyXG4gIG1ldGhvZHM6IG1ldGhvZHNbXSxcclxuICBoYW5kbGVyOiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHZvaWQsXHJcbiAgaXNQcml2YXRlPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoSGFuZGxlcihcclxuICB7bWV0aG9kcywgaGFuZGxlciwgaXNQcml2YXRlID0gdHJ1ZX06IENvbmZpZ1R5cGVcclxuKSB7XHJcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgOlByb21pc2U8YW55PiB7XHJcbiAgICAgaWYgKHJlcS5tZXRob2QgJiYgIW1ldGhvZHMuaW5jbHVkZXMocmVxLm1ldGhvZCBhcyBhbnkpKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNQcml2YXRlICYmICFyZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7b2s6ZmFsc2V9KVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgaGFuZGxlcihyZXEsIHJlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn0iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJtZXRob2RzIiwiaGFuZGxlciIsImlzUHJpdmF0ZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImluY2x1ZGVzIiwic3RhdHVzIiwiZW5kIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwib2siLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/withHandler.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/users/create-account.tsx":
/*!********************************************!*\
  !*** ./pages/api/users/create-account.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.ts\");\n/* harmony import */ var _lib_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/withHandler */ \"(api)/./lib/withHandler.tsx\");\n\n\nasync function handler(req, res) {\n    const { email , password , userName , userId  } = req.body;\n    const existingUser = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (existingUser) {\n        res.json({\n            ok: false,\n            exist: \"user\"\n        });\n        return;\n    }\n    const existingUserId = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            userId\n        }\n    });\n    if (existingUserId) {\n        res.json({\n            ok: false,\n            exist: \"userId\"\n        });\n    }\n    const user = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n        data: {\n            email,\n            password,\n            userName,\n            userId\n        }\n    });\n    return res.json({\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    methods: [\n        \"POST\"\n    ],\n    handler,\n    isPrivate: false\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvY3JlYXRlLWFjY291bnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUVvQztBQUVyRSxlQUFlRSxPQUFPLENBQ2xCQyxHQUFtQixFQUNuQkMsR0FBa0MsRUFDcEM7SUFDRSxNQUFNLEVBQUNDLEtBQUssR0FBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUVDLE1BQU0sR0FBQyxHQUFHTCxHQUFHLENBQUNNLElBQUk7SUFFcEQsTUFBTUMsWUFBWSxHQUFHLE1BQU1WLCtEQUFrQixDQUFDO1FBQzFDYSxLQUFLLEVBQUM7WUFBQ1IsS0FBSztTQUFDO0tBQ2hCLENBQUM7SUFDRixJQUFJSyxZQUFZLEVBQUU7UUFDZE4sR0FBRyxDQUFDVSxJQUFJLENBQUM7WUFDTEMsRUFBRSxFQUFDLEtBQUs7WUFDUkMsS0FBSyxFQUFDLE1BQU07U0FDZixDQUFDO1FBQ0YsT0FBTTtLQUNUO0lBRUQsTUFBTUMsY0FBYyxHQUFHLE1BQU1qQiwrREFBa0IsQ0FBQztRQUM1Q2EsS0FBSyxFQUFHO1lBQUNMLE1BQU07U0FBQztLQUNuQixDQUFDO0lBQ0YsSUFBR1MsY0FBYyxFQUFDO1FBQ2RiLEdBQUcsQ0FBQ1UsSUFBSSxDQUFDO1lBQ0xDLEVBQUUsRUFBQyxLQUFLO1lBQ1JDLEtBQUssRUFBQyxRQUFRO1NBQ2pCLENBQUM7S0FDTDtJQUVELE1BQU1MLElBQUksR0FBRyxNQUFNWCwyREFBYyxDQUFDO1FBQzlCbUIsSUFBSSxFQUFHO1lBQ0hkLEtBQUs7WUFDTEMsUUFBUTtZQUNSQyxRQUFRO1lBQ1JDLE1BQU07U0FDVDtLQUNKLENBQUM7SUFFRixPQUFPSixHQUFHLENBQUNVLElBQUksQ0FBQztRQUNoQkMsRUFBRSxFQUFDLElBQUk7S0FDTixDQUFDO0NBRUw7QUFFRCxpRUFBZWQsNERBQVcsQ0FBQztJQUFDbUIsT0FBTyxFQUFDO1FBQUMsTUFBTTtLQUFDO0lBQUVsQixPQUFPO0lBQUVtQixTQUFTLEVBQUUsS0FBSztDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3VzZXJzL2NyZWF0ZS1hY2NvdW50LnRzeD84OGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgd2l0aEhhbmRsZXIsIHsgUmVzcG9uc2VUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi93aXRoSGFuZGxlclwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XHJcbikge1xyXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCwgdXNlck5hbWUsIHVzZXJJZH0gPSByZXEuYm9keTtcclxuICAgIFxyXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTp7ZW1haWx9LFxyXG4gICAgfSlcclxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgIG9rOmZhbHNlLFxyXG4gICAgICAgICAgICBleGlzdDpcInVzZXJcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdVc2VySWQgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlIDoge3VzZXJJZH0sXHJcbiAgICB9KVxyXG4gICAgaWYoZXhpc3RpbmdVc2VySWQpe1xyXG4gICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgb2s6ZmFsc2UsXHJcbiAgICAgICAgICAgIGV4aXN0OlwidXNlcklkXCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICB1c2VyTmFtZSxcclxuICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICBvazp0cnVlLFxyXG4gICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoSGFuZGxlcih7bWV0aG9kczpbXCJQT1NUXCJdLCBoYW5kbGVyLCBpc1ByaXZhdGU6IGZhbHNlfSkiXSwibmFtZXMiOlsiZGIiLCJ3aXRoSGFuZGxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlck5hbWUiLCJ1c2VySWQiLCJib2R5IiwiZXhpc3RpbmdVc2VyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImpzb24iLCJvayIsImV4aXN0IiwiZXhpc3RpbmdVc2VySWQiLCJjcmVhdGUiLCJkYXRhIiwibWV0aG9kcyIsImlzUHJpdmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/create-account.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/create-account.tsx"));
module.exports = __webpack_exports__;

})();