"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initWebContainer_1 = require("./initWebContainer");
var beemo_lib_1 = require("beemo-lib");
function initBeemoForWeb() {
    beemo_lib_1.initBeemoCore();
    initWebContainer_1.initWebContainer();
}
exports.initBeemoForWeb = initBeemoForWeb;
