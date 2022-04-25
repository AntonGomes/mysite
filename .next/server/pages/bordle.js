(() => {
var exports = {};
exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 3542:
/***/ ((module) => {

// Exports
module.exports = {
	"bord": "bordle_bord__n6Bhi",
	"bordHead": "bordle_bordHead__ioCLJ"
};


/***/ }),

/***/ 1159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ bordle),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/default.jsx + 2 modules
var components_default = __webpack_require__(1481);
;// CONCATENATED MODULE: ./utils/genLinks.js
async function readInFile(u) {
    const fs = __webpack_require__(7147);
    const path = __webpack_require__(1423);
    const p = path.join(process.cwd(), u);
    const s = fs.readFileSync(p, {
        encoding: 'utf8',
        flag: 'r'
    });
    return s.split("\n");
}
async function getGames() {
    return readInFile("media/boredLinks.txt");
}
async function getVids() {
    const arr = Array.from(await readInFile("/media/dailyDoseIds.txt"));
    console.log(arr);
    const fixedArr = arr.map((id)=>"https://www.youtube.com/watch?v=" + id + "&list=PLlUZ3i-FUgHqk9-C-Fw_C6YsvTyx2c8nc&ab_channel=DailyDoseOfInternet"
    );
    return fixedArr;
}
console.log(getVids()) /*export async function genList() {
    const dd = readInDd()
    const games = readInUrls("media/bordedLinks.txt")
    return(games.concat(dd))
}*/ ;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/bordle.module.css
var bordle_module = __webpack_require__(3542);
var bordle_module_default = /*#__PURE__*/__webpack_require__.n(bordle_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/bordle.js







function bordle(props) {
    const list = props.urls;
    (0,external_react_.useEffect)(()=>{
    //dragElement(document.getElementById("bord"));
    });
    function getRandomInt(max) {
        const r = Math.floor(Math.random() * max);
        return r;
    }
    function dragElement(elmnt) {
        const ps1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown1;
        } else {
            elmnt.onmousedown = dragMouseDown1;
        }
    }
    function dragMouseDown1(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement1;
        document.onmousemove = elementDrag1;
    }
    function elementDrag1(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
    function closeDragElement1() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_default/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: (bordle_module_default()).bord,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: (bordle_module_default()).bordHead,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: String(list[getRandomInt(list.length)]),
                    target: "_blank",
                    children: "bored?"
                })
            })
        })
    }));
};
async function getStaticProps({ params  }) {
    const games = await getGames();
    const vids = await getVids();
    const arr = games.concat(vids);
    return {
        props: {
            urls: arr
        }
    };
}


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 1423:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,481], () => (__webpack_exec__(1159)));
module.exports = __webpack_exports__;

})();