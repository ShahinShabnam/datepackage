(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('devextreme-angular')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'devextreme-angular'], factory) :
	(factory((global.datepackage = {}),global.core,global.common,global.devextremeAngular));
}(this, (function (exports,core,common,devextremeAngular) { 'use strict';

var SampleComponent = (function () {
    function SampleComponent() {
    }
    /**
     * @return {?}
     */
    SampleComponent.prototype.helloWorld = function () {
        alert("1234");
    };
    return SampleComponent;
}());
SampleComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sample-component',
                template: "<head> <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn3.devexpress.com/jslib/17.1.6/css/dx.common.css\" /> <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn3.devexpress.com/jslib/17.1.6/css/dx.light.css\" /> </head> <h1>hi...</h1> <div> <dx-button text=\"Press me\" (onClick)=\"helloWorld()\"></dx-button> </div> <div> welcome to My own World||||||| </div>",
            },] },
];
/**
 * @nocollapse
 */
SampleComponent.ctorParameters = function () { return []; };

var SampleDirective = (function () {
    /**
     * @param {?} el
     */
    function SampleDirective(el) {
        this.el = el;
    }
    return SampleDirective;
}());
SampleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[sampleDirective]'
            },] },
];
/**
 * @nocollapse
 */
SampleDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };

/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    SamplePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return SamplePipe;
}());
SamplePipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'samplePipe'
            },] },
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
SamplePipe.ctorParameters = function () { return []; };

var SampleService = (function () {
    function SampleService() {
    }
    return SampleService;
}());
SampleService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
SampleService.ctorParameters = function () { return []; };

var SampleModule = (function () {
    function SampleModule() {
    }
    /**
     * @return {?}
     */
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule,
            providers: [SampleService]
        };
    };
    return SampleModule;
}());
SampleModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    devextremeAngular.DxButtonModule
                ],
                declarations: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ],
                exports: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ]
            },] },
];
/**
 * @nocollapse
 */
SampleModule.ctorParameters = function () { return []; };

exports.SampleModule = SampleModule;
exports.SampleComponent = SampleComponent;
exports.SampleDirective = SampleDirective;
exports.SamplePipe = SamplePipe;
exports.SampleService = SampleService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
