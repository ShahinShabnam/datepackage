import { Component, Directive, ElementRef, Injectable, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';

var SampleComponent = (function () {
    function SampleComponent() {
    }
    return SampleComponent;
}());
SampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sample-component',
                template: "<head> <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn3.devexpress.com/jslib/17.1.6/css/dx.common.css\" /> <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn3.devexpress.com/jslib/17.1.6/css/dx.light.css\" /> </head> <h1>hi...</h1> <div> <dx-button text=\"Press me\" (onClick)=\"helloWorld()\"></dx-button> </div>",
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
    { type: Directive, args: [{
                selector: '[sampleDirective]'
            },] },
];
/**
 * @nocollapse
 */
SampleDirective.ctorParameters = function () { return [
    { type: ElementRef, },
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
    { type: Pipe, args: [{
                name: 'samplePipe'
            },] },
    { type: Injectable },
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
    { type: Injectable },
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    DxButtonModule
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

export { SampleModule, SampleComponent, SampleDirective, SamplePipe, SampleService };
