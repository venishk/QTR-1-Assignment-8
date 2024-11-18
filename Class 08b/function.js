"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subfun = exports.addfunc = void 0;
function addfunc(n1, n2) {
    console.log(n1 + n2);
}
exports.addfunc = addfunc;
function subfun(n1, n2) {
    console.log(n1 - n2);
}
exports.subfun = subfun;
addfunc(10, 6);
subfun(10, 6);
