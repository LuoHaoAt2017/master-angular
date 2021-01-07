"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_property_decorator_1 = require("vue-property-decorator");
let BaseController = class BaseController extends vue_property_decorator_1.Vue {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.r = 1;
    }
    foo() {
        console.log('foo');
    }
    bar() {
        console.log('bar');
    }
};
BaseController = __decorate([
    vue_property_decorator_1.Component({
        name: 'base-controller'
    })
], BaseController);
exports.default = BaseController;
//# sourceMappingURL=index.js.map