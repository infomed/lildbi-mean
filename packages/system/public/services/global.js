'use strict';

//Global service for global variables
angular.module('mean.system').factory('Global', [

    function () {
        var _this = this;
        _this._data = {
            user: window.user,
            authenticated: false,
            isAdmin: false,
            isDocumentalist: false,
            isEditor: false,
            currentRol: false
        };
        if (window.user && window.user.roles) {
            // _this._data.authenticated = ((window.user.roles.indexOf('authenticated') !== -1) && (window.user.roles.length == 1)) ? false : true;
            _this._data.authenticated = window.user.roles.length;
            _this._data.isAdmin = window.user.roles.indexOf('administrator') !== -1;
            _this._data.isDocumentalist = window.user.roles.indexOf('documentalist') !== -1;
            _this._data.isEditor = window.user.roles.indexOf('editor') !== -1;
        }
        return _this._data;
    }
]);
