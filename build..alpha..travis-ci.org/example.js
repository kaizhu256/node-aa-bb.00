/*
example.js

this script will run a web-demo of aa-bb

instruction
    1. save this script as example.js
    2. run shell-command:
        $ npm install kaizhu256/node-aa-bb#alpha &&             PORT=8081 node example.js

    3. open a browser to http://127.0.0.1:8081 and play with web-demo
    4. edit this script to suit your needs
*/



/* istanbul instrument in package aa_bb */
/* istanbul ignore next */
/* jslint utility2:true */
(function (globalThis) {
    "use strict";
    var consoleError;
    var local;
    // init globalThis
    globalThis.globalThis = globalThis.globalThis || globalThis;
    // init debug_inline
    if (!globalThis["debug\u0049nline"]) {
        consoleError = console.error;
        globalThis["debug\u0049nline"] = function (...argList) {
        /*
         * this function will both print <argList> to stderr
         * and return <argList>[0]
         */
            // debug argList
            globalThis["debug\u0049nlineArgList"] = argList;
            consoleError("\n\ndebug\u0049nline");
            consoleError.apply(console, argList);
            consoleError("\n");
            // return arg0 for inspection
            return argList[0];
        };
    }
    // init local
    local = {};
    local.local = local;
    globalThis.globalLocal = local;
    // init isBrowser
    local.isBrowser = (
        typeof globalThis.XMLHttpRequest === "function"
        && globalThis.navigator
        && typeof globalThis.navigator.userAgent === "string"
    );
    // init function
    local.assertOrThrow = function (passed, message) {
    /*
     * this function will throw err.<message> if <passed> is falsy
     */
        var err;
        if (passed) {
            return;
        }
        err = (
            (
                message
                && typeof message.message === "string"
                && typeof message.stack === "string"
            )
            // if message is errObj, then leave as is
            ? message
            : new Error(
                typeof message === "string"
                // if message is a string, then leave as is
                ? message
                // else JSON.stringify message
                : JSON.stringify(message, null, 4)
            )
        );
        throw err;
    };
    local.fsRmrfSync = function (dir) {
    /*
     * this function will sync "rm -rf" <dir>
     */
        var child_process;
        try {
            child_process = require("child_process");
        } catch (ignore) {
            return;
        }
        child_process.spawnSync("rm", [
            "-rf", dir
        ], {
            stdio: [
                "ignore", 1, 2
            ]
        });
    };
    local.fsWriteFileWithMkdirpSync = function (file, data) {
    /*
     * this function will sync write <data> to <file> with "mkdir -p"
     */
        var fs;
        try {
            fs = require("fs");
        } catch (ignore) {
            return;
        }
        // try to write file
        try {
            fs.writeFileSync(file, data);
        } catch (ignore) {
            // mkdir -p
            require("child_process").spawnSync(
                "mkdir",
                [
                    "-p", require("path").dirname(file)
                ],
                {
                    stdio: [
                        "ignore", 1, 2
                    ]
                }
            );
            // rewrite file
            fs.writeFileSync(file, data);
        }
    };
    local.functionOrNop = function (fnc) {
    /*
     * this function will if <fnc> exists,
     * them return <fnc>,
     * else return <nop>
     */
        return fnc || local.nop;
    };
    local.identity = function (value) {
    /*
     * this function will return <value>
     */
        return value;
    };
    local.nop = function () {
    /*
     * this function will do nothing
     */
        return;
    };
    local.objectAssignDefault = function (target, source) {
    /*
     * this function will if items from <target> are
     * null, undefined, or empty-string,
     * then overwrite them with items from <source>
     */
        target = target || {};
        Object.keys(source || {}).forEach(function (key) {
            if (
                target[key] === null
                || target[key] === undefined
                || target[key] === ""
            ) {
                target[key] = target[key] || source[key];
            }
        });
        return target;
    };
    // require builtin
    if (!local.isBrowser) {
        local.assert = require("assert");
        local.buffer = require("buffer");
        local.child_process = require("child_process");
        local.cluster = require("cluster");
        local.crypto = require("crypto");
        local.dgram = require("dgram");
        local.dns = require("dns");
        local.domain = require("domain");
        local.events = require("events");
        local.fs = require("fs");
        local.http = require("http");
        local.https = require("https");
        local.net = require("net");
        local.os = require("os");
        local.path = require("path");
        local.querystring = require("querystring");
        local.readline = require("readline");
        local.repl = require("repl");
        local.stream = require("stream");
        local.string_decoder = require("string_decoder");
        local.timers = require("timers");
        local.tls = require("tls");
        local.tty = require("tty");
        local.url = require("url");
        local.util = require("util");
        local.vm = require("vm");
        local.zlib = require("zlib");
    }
}((typeof globalThis === "object" && globalThis) || (function () {
    return Function("return this")(); // jslint ignore:line
}())));



(function (local) {
"use strict";



// run shared js-env code - init-before
(function () {
// init local
local = (
    globalThis.utility2_rollup
    || globalThis.utility2_aa_bb
    || require("aa-bb")
);
// init exports
globalThis.local = local;
}());



/* istanbul ignore next */
// run browser js-env code - init-test
(function () {
if (!local.isBrowser) {
    return;
}
// log stderr and stdout to #outputStdout1
["error", "log"].forEach(function (key) {
    var elem;
    var fnc;
    elem = document.querySelector(
        "#outputStdout1"
    );
    if (!elem) {
        return;
    }
    fnc = console[key];
    console[key] = function (...argList) {
        fnc.apply(console, argList);
        // append text to #outputStdout1
        elem.textContent += argList.map(function (arg) {
            return (
                typeof arg === "string"
                ? arg
                : JSON.stringify(arg, null, 4)
            );
        }).join(" ").replace((
            /\u001b\[\d*m/g
        ), "") + "\n";
        // scroll textarea to bottom
        elem.scrollTop = elem.scrollHeight;
    };
});
local.objectAssignDefault(local, globalThis.domOnEventDelegateDict);
globalThis.domOnEventDelegateDict = local;
local.onEventDomDb = local.db && local.db.onEventDomDb;
local.testRunBrowser = function (evt) {
/*
 * this function will run browser-tests
 */
    switch (
        !evt.ctrlKey
        && !evt.metaKey
        && (
            evt.modeInit
            || (evt.type + "." + (evt.target && evt.target.id))
        )
    ) {
    // custom-case
    case true:
        return;
    // run browser-tests
    default:
        if (
            (evt.target && evt.target.id) !== "buttonTestRun1"
            && !(evt.modeInit && (
                /\bmodeTest=1\b/
            ).test(location.search))
        ) {
            return;
        }
        // show browser-tests
        if (document.querySelector(
            "#htmlTestReport1"
        ).style.maxHeight === "0px") {
            globalThis.domOnEventDelegateDict.domOnEventResetOutput();
            local.uiAnimateSlideDown(document.querySelector(
                "#htmlTestReport1"
            ));
            document.querySelector(
                "#buttonTestRun1"
            ).textContent = "hide internal test";
            local.modeTest = 1;
            local.testRunDefault(local);
            return;
        }
        // hide browser-tests
        local.uiAnimateSlideUp(document.querySelector(
            "#htmlTestReport1"
        ));
        document.querySelector(
            "#buttonTestRun1"
        ).textContent = "run internal test";
    }
};

local.testRunBrowser({
    modeInit: true
});
}());



/* istanbul ignore next */
// run node js-env code - init-test
(function () {
if (local.isBrowser) {
    return;
}
// init exports
module.exports = local;
/* validateLineSortedReset */
// init assets
local.assetsDict = local.assetsDict || {};
[
    "assets.index.template.html",
    "assets.swgg.swagger.json",
    "assets.swgg.swagger.server.json"
].forEach(function (file) {
    file = "/" + file;
    local.assetsDict[file] = local.assetsDict[file] || "";
    if (local.fs.existsSync(local.__dirname + file)) {
        local.assetsDict[file] = local.fs.readFileSync(
            local.__dirname + file,
            "utf8"
        );
    }
});
/* jslint ignore:start */
local.assetsDict["/assets.index.template.html"] = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<!-- "assets.utility2.template.html" -->\n<title>{{env.npm_package_name}} ({{env.npm_package_version}})</title>\n<style>\n/* jslint utility2:true */\n/*csslint\n*/\n/* csslint ignore:start */\n*,\n*:after,\n*:before {\n    box-sizing: border-box;\n}\n/* csslint ignore:end */\n@keyframes uiAnimateShake {\n0%,\n50% {\n    transform: translateX(10px);\n}\n100% {\n    transform: translateX(0);\n}\n25%,\n75% {\n    transform: translateX(-10px);\n}\n}\n@keyframes uiAnimateSpin {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\na {\n    overflow-wrap: break-word;\n}\nbody {\n    background: #f7f7f7;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: small;\n    margin: 0 40px;\n}\nbody > div,\nbody > form > div,\nbody > form > input,\nbody > form > pre,\nbody > form > .button,\nbody > form > .textarea,\nbody > input,\nbody > pre,\nbody > .button,\nbody > .textarea {\n    margin-bottom: 20px;\n    margin-top: 0;\n}\nbody > form > input,\nbody > form > .button,\nbody > input,\nbody > .button {\n    width: 20rem;\n}\nbody > form > .textarea,\nbody > .textarea {\n    height: 10rem;\n    width: 100%;\n}\nbody > .readonly {\n    background: #ddd;\n}\ncode,\npre,\n.textarea {\n    font-family: Consolas, Menlo, monospace;\n    font-size: smaller;\n}\npre {\n    overflow-wrap: break-word;\n    white-space: pre-wrap;\n}\n.button {\n    background: #ddd;\n    border: 1px solid #999;\n    color: #000;\n    cursor: pointer;\n    display: inline-block;\n    padding: 2px 5px;\n    text-align: center;\n    text-decoration: none;\n}\n.button:hover {\n    background: #bbb;\n}\n.colorError {\n    color: #d00;\n}\n.textarea {\n    background: #fff;\n    border: 1px solid #999;\n    border-radius: 0;\n    cursor: auto;\n    overflow: auto;\n    padding: 2px;\n}\n.uiAnimateShake {\n    animation-duration: 500ms;\n    animation-name: uiAnimateShake;\n}\n.uiAnimateSlide {\n    overflow-y: hidden;\n    transition: max-height ease-in 250ms, min-height ease-in 250ms, padding-bottom ease-in 250ms, padding-top ease-in 250ms;\n}\n.zeroPixel {\n    border: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    width: 0;\n}\n</style>\n</head>\n<body>\n<div class="uiAnimateSpin" style="animation: uiAnimateSpin 2s linear infinite; border: 5px solid #999; border-radius: 50%; border-top: 5px solid #7d7; display: none; height: 25px; vertical-align: middle; width: 25px;"></div>\n<a class="zeroPixel" download="db.persistence.json" href="" id="dbExportA1"></a>\n<input class="zeroPixel" data-onevent="onEventDomDb" data-onevent-db="dbImportInput" type="file">\n<script>\n/* jslint utility2:true */\n// init domOnEventWindowOnloadTimeElapsed\n(function () {\n/*\n * this function will measure and print time-elapsed for window.onload\n */\n    "use strict";\n    if (window.domOnEventWindowOnloadTimeElapsed) {\n        return;\n    }\n    window.domOnEventWindowOnloadTimeElapsed = Date.now() + 100;\n    window.addEventListener("load", function () {\n        setTimeout(function () {\n            window.domOnEventWindowOnloadTimeElapsed = (\n                Date.now()\n                - window.domOnEventWindowOnloadTimeElapsed\n            );\n            console.error(\n                "domOnEventWindowOnloadTimeElapsed = "\n                + window.domOnEventWindowOnloadTimeElapsed\n            );\n        }, 100);\n    });\n}());\n\n\n\n// init domOnEventAjaxProgressUpdate\n(function () {\n/*\n * this function will display incrementing ajax-progress-bar\n */\n    "use strict";\n    var opt;\n    if (window.domOnEventAjaxProgressUpdate) {\n        return;\n    }\n    window.domOnEventAjaxProgressUpdate = function (gotoState, onError) {\n        gotoState = (gotoState | 0) + 1;\n        switch (gotoState) {\n        // ajaxProgress - show\n        case 1:\n            // init timerInterval and timerTimeout\n            opt.timerInterval = (\n                opt.timerInterval || setInterval(opt, 2000, 1, onError)\n            );\n            opt.timerTimeout = (\n                opt.timerTimeout || setTimeout(opt, 30000, 2, onError)\n            );\n            // show ajaxProgress\n            if (opt.width !== -1) {\n                opt.style.background = opt.background;\n            }\n            setTimeout(opt, 50, gotoState, onError);\n            break;\n        // ajaxProgress - increment\n        case 2:\n            // show ajaxProgress\n            if (opt.width === -1) {\n                return;\n            }\n            opt.style.background = opt.background;\n            // reset ajaxProgress if it goes too high\n            if ((opt.style.width.slice(0, -1) | 0) > 95) {\n                opt.width = 0;\n            }\n            // this algorithm will indefinitely increment ajaxProgress\n            // with successively smaller increments without ever reaching 100%\n            opt.width += 1;\n            opt.style.width = Math.max(\n                100 - 75 * Math.exp(-0.125 * opt.width),\n                opt.style.width.slice(0, -1) | 0\n            ) + "%";\n            if (!opt.counter) {\n                setTimeout(opt, 0, gotoState, onError);\n            }\n            break;\n        // ajaxProgress - 100%\n        case 3:\n            opt.width = -1;\n            opt.style.width = "100%";\n            setTimeout(opt, 1000, gotoState, onError);\n            break;\n        // ajaxProgress - hide\n        case 4:\n            // cleanup timerInterval and timerTimeout\n            clearInterval(opt.timerInterval);\n            opt.timerInterval = null;\n            clearTimeout(opt.timerTimeout);\n            opt.timerTimeout = null;\n            // hide ajaxProgress\n            opt.style.background = "transparent";\n            if (onError) {\n                onError();\n            }\n            setTimeout(opt, 250, gotoState);\n            break;\n        // ajaxProgress - reset\n        default:\n            // reset ajaxProgress\n            opt.counter = 0;\n            opt.width = 0;\n            opt.style.width = "0%";\n        }\n    };\n    opt = window.domOnEventAjaxProgressUpdate;\n    opt.end = function (onError) {\n        opt.counter = 0;\n        window.domOnEventAjaxProgressUpdate(2, onError);\n    };\n    opt.elem = document.getElementById("domElementAjaxProgress1");\n    if (!opt.elem) {\n        opt.elem = document.createElement("div");\n        setTimeout(function () {\n            document.body.insertBefore(opt.elem, document.body.firstChild);\n        });\n    }\n    opt.elem.id = "domElementAjaxProgress1";\n    opt.style = opt.elem.style;\n    // init style\n    Object.entries({\n        background: "#d00",\n        height: "2px",\n        left: "0",\n        margin: "0",\n        padding: "0",\n        position: "fixed",\n        top: "0",\n        transition: "background 250ms, width 750ms",\n        width: "0%",\n        "z-index": "1"\n    }).forEach(function (entry) {\n        opt.style[entry[0]] = opt.style[entry[0]] || entry[1];\n    });\n    // init state\n    opt.background = opt.style.background;\n    opt.counter = 0;\n    opt.width = 0;\n}());\n\n\n\n// init domOnEventDelegateDict\n(function () {\n/*\n * this function will handle delegated dom-event\n */\n    "use strict";\n    var timerTimeoutDict;\n    if (window.domOnEventDelegateDict) {\n        return;\n    }\n    window.domOnEventDelegateDict = {};\n    timerTimeoutDict = {};\n    window.domOnEventDelegateDict.domOnEventDelegate = function (evt) {\n        evt.targetOnEvent = evt.target.closest(\n            "[data-onevent]"\n        );\n        if (\n            !evt.targetOnEvent\n            || evt.targetOnEvent.dataset.onevent === "domOnEventNop"\n            || evt.target.closest(\n                ".disabled, .readonly"\n            )\n        ) {\n            return;\n        }\n        // rate-limit high-frequency-event\n        switch (evt.type) {\n        case "keydown":\n        case "keyup":\n            // filter non-input keyboard-event\n            if (!evt.target.closest(\n                "input, option, select, textarea"\n            )) {\n                return;\n            }\n            if (timerTimeoutDict[evt.type] !== true) {\n                timerTimeoutDict[evt.type] = timerTimeoutDict[\n                    evt.type\n                ] || setTimeout(function () {\n                    timerTimeoutDict[evt.type] = true;\n                    window.domOnEventDelegateDict.domOnEventDelegate(evt);\n                }, 50);\n                return;\n            }\n            timerTimeoutDict[evt.type] = null;\n            break;\n        }\n        switch (evt.targetOnEvent.tagName) {\n        case "BUTTON":\n        case "FORM":\n            evt.preventDefault();\n            break;\n        }\n        evt.stopPropagation();\n        window.domOnEventDelegateDict[evt.targetOnEvent.dataset.onevent](\n            evt\n        );\n    };\n    window.domOnEventDelegateDict.domOnEventResetOutput = function () {\n        document.querySelectorAll(\n            ".onevent-reset-output"\n        ).forEach(function (elem) {\n            switch (elem.tagName) {\n            case "INPUT":\n            case "TEXTAREA":\n                elem.value = "";\n                break;\n            case "PRE":\n                elem.textContent = "";\n                break;\n            default:\n                elem.innerHTML = "";\n            }\n        });\n    };\n    // init event-handling\n    [\n        "change",\n        "click",\n        "keydown",\n        "submit"\n    ].forEach(function (eventType) {\n        document.addEventListener(\n            eventType,\n            window.domOnEventDelegateDict.domOnEventDelegate\n        );\n    });\n}());\n\n\n\n// init domOnEventSelectAllWithinPre\n(function () {\n/*\n * this function will limit select-all within <pre tabIndex="0"> elements\n * https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse\n */\n    "use strict";\n    if (window.domOnEventSelectAllWithinPre) {\n        return;\n    }\n    window.domOnEventSelectAllWithinPre = function (evt) {\n        var range;\n        var selection;\n        if (\n            evt\n            && evt.key === "a"\n            && (evt.ctrlKey || evt.metaKey)\n            && evt.target.closest(\n                "pre"\n            )\n        ) {\n            range = document.createRange();\n            range.selectNodeContents(evt.target.closest(\n                "pre"\n            ));\n            selection = window.getSelection();\n            selection.removeAllRanges();\n            selection.addRange(range);\n            evt.preventDefault();\n        }\n    };\n    // init event-handling\n    document.addEventListener(\n        "keydown",\n        window.domOnEventSelectAllWithinPre\n    );\n}());\n</script>\n<h1>\n<!-- utility2-comment\n<a\n    {{#if env.npm_package_homepage}}\n    href="{{env.npm_package_homepage}}"\n    {{/if env.npm_package_homepage}}\n    target="_blank"\n>\nutility2-comment -->\n    {{env.npm_package_name}} ({{env.npm_package_version}})\n<!-- utility2-comment\n</a>\nutility2-comment -->\n</h1>\n<h3>{{env.npm_package_description}}</h3>\n<!-- utility2-comment\n<a class="button" download href="assets.app.js">download standalone app</a><br>\n<button class="button" data-onevent="testRunBrowser" id="buttonTestRun1">run internal test</button><br>\n<div class="uiAnimateSlide" id="htmlTestReport1" style="border-bottom: 0; border-top: 0; margin-bottom: 0; margin-top: 0; max-height: 0; padding-bottom: 0; padding-top: 0;"></div>\nutility2-comment -->\n\n\n\n<!-- custom-html-start -->\n<label>stderr and stdout</label>\n<pre class="onevent-reset-output readonly textarea" id="outputStdout1" tabIndex="0"></pre>\n<!-- custom-html-end -->\n\n\n\n<!-- utility2-comment\n{{#if isRollup}}\n<script src="assets.app.js"></script>\n{{#unless isRollup}}\nutility2-comment -->\n<script src="assets.utility2.rollup.js"></script>\n<script>window.utility2_onReadyBefore.counter += 1;</script>\n<script src="jsonp.utility2.stateInit?callback=window.utility2.stateInit"></script>\n<script src="assets.aa_bb.js"></script>\n<script src="assets.example.js"></script>\n<script src="assets.test.js"></script>\n<script>window.utility2_onReadyBefore();</script>\n{{/if isRollup}}\n<script>\n/* jslint utility2:true */\n(function () {\n"use strict";\nvar htmlTestReport1;\nvar local;\nhtmlTestReport1 = document.querySelector("#htmlTestReport1");\nif (!htmlTestReport1) {\n    return;\n}\nlocal = window.utility2;\nlocal.on("utility2.testRunProgressUpdate", function (testReport) {\n    htmlTestReport1.innerHTML = local.testReportMerge(testReport, {});\n});\nlocal.on("utility2.testRunStart", function (testReport) {\n    local.uiAnimateSlideDown(htmlTestReport1);\n    htmlTestReport1.innerHTML = local.testReportMerge(testReport, {});\n});\n}());\n</script>\n<!-- utility2-comment\nutility2-comment -->\n<div style="text-align: center;">\n    [\n    this app was created with\n    <a\n        href="https://github.com/kaizhu256/node-utility2" target="_blank"\n    >utility2</a>\n    ]\n</div>\n</body>\n</html>\n';






























































































































































































































































































































































































































































































/* jslint ignore:end */
/* validateLineSortedReset */
/* jslint ignore:start */
local.assetsDict["/assets.aa_bb.js"] =
    local.assetsDict["/assets.aa_bb.js"] ||
    local.fs.readFileSync(local.__dirname + "/lib.aa_bb.js", "utf8"
).replace((/^#!\//), "// ");
/* jslint ignore:end */
/* validateLineSortedReset */
local.assetsDict["/"] = local.assetsDict[
    "/assets.index.template.html"
].replace((
    /\{\{env\.(\w+?)\}\}/g
), function (match0, match1) {
    switch (match1) {
    case "npm_package_description":
        return "the greatest app in the world!";
    case "npm_package_name":
        return "aa-bb";
    case "npm_package_nameLib":
        return "aa_bb";
    case "npm_package_version":
        return "0.0.1";
    default:
        return match0;
    }
});
local.assetsDict["/assets.example.html"] = local.assetsDict["/"];
local.assetsDict["/index.html"] = local.assetsDict["/"];
// init cli
if (module !== require.main || globalThis.utility2_rollup) {
    return;
}
/* validateLineSortedReset */
local.assetsDict["/assets.example.js"] = (
    local.assetsDict["/assets.example.js"]
    || local.fs.readFileSync(__filename, "utf8")
);
local.assetsDict["/favicon.ico"] = local.assetsDict["/favicon.ico"] || "";
// if $npm_config_timeout_exit exists,
// then exit this process after $npm_config_timeout_exit ms
if (Number(process.env.npm_config_timeout_exit)) {
    setTimeout(process.exit, Number(process.env.npm_config_timeout_exit));
}
// start server
if (globalThis.utility2_serverHttp1) {
    return;
}
process.env.PORT = process.env.PORT || "8081";
console.error("http-server listening on port " + process.env.PORT);
local.http.createServer(function (req, res) {
    req.urlParsed = local.url.parse(req.url);
    if (local.assetsDict[req.urlParsed.pathname] !== undefined) {
        res.end(local.assetsDict[req.urlParsed.pathname]);
        return;
    }
    res.statusCode = 404;
    res.end();
}).listen(process.env.PORT);
}());
}());
