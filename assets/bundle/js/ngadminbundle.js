/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,c){'use strict';function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,e,f){var g,h;f=f||{};h=f.expires;g=c.isDefined(f.path)?f.path:d;c.isUndefined(e)&&(h="Thu, 01 Jan 1970 00:00:00 GMT",e="");c.isString(h)&&(h=new Date(h));e=encodeURIComponent(b)+"="+encodeURIComponent(e);e=e+(g?";path="+g:"")+(f.domain?";domain="+f.domain:"");e+=h?";expires="+h.toUTCString():"";e+=f.secure?";secure":"";f=e.length+1;4096<f&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
f+" > 4096 bytes)!");k.cookie=e}}c.module("ngCookies",["ng"]).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,void 0,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieStore",
["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,g){'use strict';function H(g){var l=[];t(l,A).chars(g);return l.join("")}var B=g.$$minErr("$sanitize"),C,l,D,E,q,A,F,t;g.module("ngSanitize",[]).provider("$sanitize",function(){function k(a,e){var b={},c=a.split(","),h;for(h=0;h<c.length;h++)b[e?q(c[h]):c[h]]=!0;return b}function I(a){for(var e={},b=0,c=a.length;b<c;b++){var h=a[b];e[h.name]=h.value}return e}function G(a){return a.replace(/&/g,"&amp;").replace(J,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(K,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u(a){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,b=0,c=e.length;b<c;b++){var h=e[b],d=h.name.toLowerCase();if("xmlns:ns1"===d||0===d.lastIndexOf("ns1:",0))a.removeAttributeNode(h),b--,c--}(e=a.firstChild)&&u(e);(e=a.nextSibling)&&u(e)}var v=!1;this.$get=["$$sanitizeUri",function(a){v&&l(w,x);return function(e){var b=[];F(e,t(b,function(b,h){return!/^unsafe:/.test(a(b,
h))}));return b.join("")}}];this.enableSvg=function(a){return E(a)?(v=a,this):v};C=g.bind;l=g.extend;D=g.forEach;E=g.isDefined;q=g.lowercase;A=g.noop;F=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);f.innerHTML=a;var b=5;do{if(0===b)throw B("uinput");b--;s.document.documentMode&&u(f);a=f.innerHTML;f.innerHTML=a}while(a!==f.innerHTML);for(b=f.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),I(b.attributes));break;case 3:e.chars(b.textContent)}var c;if(!(c=
b.firstChild)&&(1==b.nodeType&&e.end(b.nodeName.toLowerCase()),c=b.nextSibling,!c))for(;null==c;){b=b.parentNode;if(b===f)break;c=b.nextSibling;1==b.nodeType&&e.end(b.nodeName.toLowerCase())}b=c}for(;b=f.firstChild;)f.removeChild(b)};t=function(a,e){var b=!1,c=C(a,a.push);return{start:function(a,d){a=q(a);!b&&z[a]&&(b=a);b||!0!==w[a]||(c("<"),c(a),D(d,function(b,d){var f=q(d),g="img"===a&&"src"===f||"background"===f;!0!==m[f]||!0===n[f]&&!e(b,g)||(c(" "),c(d),c('="'),c(G(b)),c('"'))}),c(">"))},end:function(a){a=
q(a);b||!0!==w[a]||!0===y[a]||(c("</"),c(a),c(">"));a==b&&(b=!1)},chars:function(a){b||c(G(a))}}};var J=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,K=/([^\#-~ |!])/g,y=k("area,br,col,hr,img,wbr"),d=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),r=k("rp,rt"),p=l({},r,d),d=l({},d,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),r=l({},r,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
x=k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),z=k("script,style"),w=l({},y,d,r,p),n=k("background,cite,href,longdesc,src,xlink:href"),p=k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
r=k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),m=l({},n,r,p),f;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw B("noinert");var e=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===e.length?f=e[0]:(e=a.createElement("html"),f=a.createElement("body"),e.appendChild(f),a.appendChild(e))})(s)});g.module("ngSanitize").filter("linky",["$sanitize",function(k){var l=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
q=/^mailto:/i,u=g.$$minErr("linky"),v=g.isDefined,s=g.isFunction,t=g.isObject,y=g.isString;return function(d,g,p){function x(a){a&&m.push(H(a))}function z(a,b){var c,d=w(a);m.push("<a ");for(c in d)m.push(c+'="'+d[c]+'" ');!v(g)||"target"in d||m.push('target="',g,'" ');m.push('href="',a.replace(/"/g,"&quot;"),'">');x(b);m.push("</a>")}if(null==d||""===d)return d;if(!y(d))throw u("notstring",d);for(var w=s(p)?p:t(p)?function(){return p}:function(){return{}},n=d,m=[],f,a;d=n.match(l);)f=d[0],d[2]||
d[4]||(f=(d[3]?"http://":"mailto:")+f),a=d.index,x(n.substr(0,a)),z(f,d[0].replace(q,"")),n=n.substring(a+d[0].length);x(n);return k(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 angular-file-upload v2.3.4
 https://github.com/nervgh/angular-file-upload
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["angular-file-upload"] = factory();
	else
		root["angular-file-upload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _options = __webpack_require__(2);
	
	var _options2 = _interopRequireDefault(_options);
	
	var _FileUploader = __webpack_require__(3);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);
	
	var _FileLikeObject = __webpack_require__(4);
	
	var _FileLikeObject2 = _interopRequireDefault(_FileLikeObject);
	
	var _FileItem = __webpack_require__(5);
	
	var _FileItem2 = _interopRequireDefault(_FileItem);
	
	var _FileDirective = __webpack_require__(6);
	
	var _FileDirective2 = _interopRequireDefault(_FileDirective);
	
	var _FileSelect = __webpack_require__(7);
	
	var _FileSelect2 = _interopRequireDefault(_FileSelect);
	
	var _FileDrop = __webpack_require__(8);
	
	var _FileDrop2 = _interopRequireDefault(_FileDrop);
	
	var _FileOver = __webpack_require__(9);
	
	var _FileOver2 = _interopRequireDefault(_FileOver);
	
	var _FileSelect3 = __webpack_require__(10);
	
	var _FileSelect4 = _interopRequireDefault(_FileSelect3);
	
	var _FileDrop3 = __webpack_require__(11);
	
	var _FileDrop4 = _interopRequireDefault(_FileDrop3);
	
	var _FileOver3 = __webpack_require__(12);
	
	var _FileOver4 = _interopRequireDefault(_FileOver3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module(_config2.default.name, []).value('fileUploaderOptions', _options2.default).factory('FileUploader', _FileUploader2.default).factory('FileLikeObject', _FileLikeObject2.default).factory('FileItem', _FileItem2.default).factory('FileDirective', _FileDirective2.default).factory('FileSelect', _FileSelect2.default).factory('FileDrop', _FileDrop2.default).factory('FileOver', _FileOver2.default).directive('nvFileSelect', _FileSelect4.default).directive('nvFileDrop', _FileDrop4.default).directive('nvFileOver', _FileOver4.default).run(['FileUploader', 'FileLikeObject', 'FileItem', 'FileDirective', 'FileSelect', 'FileDrop', 'FileOver', function (FileUploader, FileLikeObject, FileItem, FileDirective, FileSelect, FileDrop, FileOver) {
	    // only for compatibility
	    FileUploader.FileLikeObject = FileLikeObject;
	    FileUploader.FileItem = FileItem;
	    FileUploader.FileDirective = FileDirective;
	    FileUploader.FileSelect = FileSelect;
	    FileUploader.FileDrop = FileDrop;
	    FileUploader.FileOver = FileOver;
	}]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"name": "angularFileUpload"
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    url: '/',
	    alias: 'file',
	    headers: {},
	    queue: [],
	    progress: 0,
	    autoUpload: false,
	    removeAfterUpload: false,
	    method: 'POST',
	    filters: [],
	    formData: [],
	    queueLimit: Number.MAX_VALUE,
	    withCredentials: false,
	    disableMultipart: false
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular;
	var copy = _angular.copy;
	var extend = _angular.extend;
	var forEach = _angular.forEach;
	var isObject = _angular.isObject;
	var isNumber = _angular.isNumber;
	var isDefined = _angular.isDefined;
	var isArray = _angular.isArray;
	var element = _angular.element;
	function __identity(fileUploaderOptions, $rootScope, $http, $window, $timeout, FileLikeObject, FileItem) {
	    var File = $window.File;
	    var FormData = $window.FormData;
	
	    var FileUploader = function () {
	        /**********************
	         * PUBLIC
	         **********************/
	        /**
	         * Creates an instance of FileUploader
	         * @param {Object} [options]
	         * @constructor
	         */
	
	        function FileUploader(options) {
	            _classCallCheck(this, FileUploader);
	
	            var settings = copy(fileUploaderOptions);
	
	            extend(this, settings, options, {
	                isUploading: false,
	                _nextIndex: 0,
	                _failFilterIndex: -1,
	                _directives: { select: [], drop: [], over: [] }
	            });
	
	            // add default filters
	            this.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
	            this.filters.unshift({ name: 'folder', fn: this._folderFilter });
	        }
	        /**
	         * Adds items to the queue
	         * @param {File|HTMLInputElement|Object|FileList|Array<Object>} files
	         * @param {Object} [options]
	         * @param {Array<Function>|String} filters
	         */
	
	
	        FileUploader.prototype.addToQueue = function addToQueue(files, options, filters) {
	            var _this = this;
	
	            var list = this.isArrayLikeObject(files) ? files : [files];
	            var arrayOfFilters = this._getFilters(filters);
	            var count = this.queue.length;
	            var addedFileItems = [];
	
	            forEach(list, function (some /*{File|HTMLInputElement|Object}*/) {
	                var temp = new FileLikeObject(some);
	
	                if (_this._isValidFile(temp, arrayOfFilters, options)) {
	                    var fileItem = new FileItem(_this, some, options);
	                    addedFileItems.push(fileItem);
	                    _this.queue.push(fileItem);
	                    _this._onAfterAddingFile(fileItem);
	                } else {
	                    var filter = arrayOfFilters[_this._failFilterIndex];
	                    _this._onWhenAddingFileFailed(temp, filter, options);
	                }
	            });
	
	            if (this.queue.length !== count) {
	                this._onAfterAddingAll(addedFileItems);
	                this.progress = this._getTotalProgress();
	            }
	
	            this._render();
	            if (this.autoUpload) this.uploadAll();
	        };
	        /**
	         * Remove items from the queue. Remove last: index = -1
	         * @param {FileItem|Number} value
	         */
	
	
	        FileUploader.prototype.removeFromQueue = function removeFromQueue(value) {
	            var index = this.getIndexOfItem(value);
	            var item = this.queue[index];
	            if (item.isUploading) item.cancel();
	            this.queue.splice(index, 1);
	            item._destroy();
	            this.progress = this._getTotalProgress();
	        };
	        /**
	         * Clears the queue
	         */
	
	
	        FileUploader.prototype.clearQueue = function clearQueue() {
	            while (this.queue.length) {
	                this.queue[0].remove();
	            }
	            this.progress = 0;
	        };
	        /**
	         * Uploads a item from the queue
	         * @param {FileItem|Number} value
	         */
	
	
	        FileUploader.prototype.uploadItem = function uploadItem(value) {
	            var index = this.getIndexOfItem(value);
	            var item = this.queue[index];
	            var transport = this.isHTML5 ? '_xhrTransport' : '_iframeTransport';
	
	            item._prepareToUploading();
	            if (this.isUploading) return;
	
	            this._onBeforeUploadItem(item);
	            if (item.isCancel) return;
	
	            item.isUploading = true;
	            this.isUploading = true;
	            this[transport](item);
	            this._render();
	        };
	        /**
	         * Cancels uploading of item from the queue
	         * @param {FileItem|Number} value
	         */
	
	
	        FileUploader.prototype.cancelItem = function cancelItem(value) {
	            var _this2 = this;
	
	            var index = this.getIndexOfItem(value);
	            var item = this.queue[index];
	            var prop = this.isHTML5 ? '_xhr' : '_form';
	            if (!item) return;
	            item.isCancel = true;
	            if (item.isUploading) {
	                // It will call this._onCancelItem() & this._onCompleteItem() asynchronously
	                item[prop].abort();
	            } else {
	                (function () {
	                    var dummy = [undefined, 0, {}];
	                    var onNextTick = function onNextTick() {
	                        _this2._onCancelItem.apply(_this2, [item].concat(dummy));
	                        _this2._onCompleteItem.apply(_this2, [item].concat(dummy));
	                    };
	                    $timeout(onNextTick); // Trigger callbacks asynchronously (setImmediate emulation)
	                })();
	            }
	        };
	        /**
	         * Uploads all not uploaded items of queue
	         */
	
	
	        FileUploader.prototype.uploadAll = function uploadAll() {
	            var items = this.getNotUploadedItems().filter(function (item) {
	                return !item.isUploading;
	            });
	            if (!items.length) return;
	
	            forEach(items, function (item) {
	                return item._prepareToUploading();
	            });
	            items[0].upload();
	        };
	        /**
	         * Cancels all uploads
	         */
	
	
	        FileUploader.prototype.cancelAll = function cancelAll() {
	            var items = this.getNotUploadedItems();
	            forEach(items, function (item) {
	                return item.cancel();
	            });
	        };
	        /**
	         * Returns "true" if value an instance of File
	         * @param {*} value
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype.isFile = function isFile(value) {
	            return this.constructor.isFile(value);
	        };
	        /**
	         * Returns "true" if value an instance of FileLikeObject
	         * @param {*} value
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype.isFileLikeObject = function isFileLikeObject(value) {
	            return this.constructor.isFileLikeObject(value);
	        };
	        /**
	         * Returns "true" if value is array like object
	         * @param {*} value
	         * @returns {Boolean}
	         */
	
	
	        FileUploader.prototype.isArrayLikeObject = function isArrayLikeObject(value) {
	            return this.constructor.isArrayLikeObject(value);
	        };
	        /**
	         * Returns a index of item from the queue
	         * @param {Item|Number} value
	         * @returns {Number}
	         */
	
	
	        FileUploader.prototype.getIndexOfItem = function getIndexOfItem(value) {
	            return isNumber(value) ? value : this.queue.indexOf(value);
	        };
	        /**
	         * Returns not uploaded items
	         * @returns {Array}
	         */
	
	
	        FileUploader.prototype.getNotUploadedItems = function getNotUploadedItems() {
	            return this.queue.filter(function (item) {
	                return !item.isUploaded;
	            });
	        };
	        /**
	         * Returns items ready for upload
	         * @returns {Array}
	         */
	
	
	        FileUploader.prototype.getReadyItems = function getReadyItems() {
	            return this.queue.filter(function (item) {
	                return item.isReady && !item.isUploading;
	            }).sort(function (item1, item2) {
	                return item1.index - item2.index;
	            });
	        };
	        /**
	         * Destroys instance of FileUploader
	         */
	
	
	        FileUploader.prototype.destroy = function destroy() {
	            var _this3 = this;
	
	            forEach(this._directives, function (key) {
	                forEach(_this3._directives[key], function (object) {
	                    object.destroy();
	                });
	            });
	        };
	        /**
	         * Callback
	         * @param {Array} fileItems
	         */
	
	
	        FileUploader.prototype.onAfterAddingAll = function onAfterAddingAll(fileItems) {};
	        /**
	         * Callback
	         * @param {FileItem} fileItem
	         */
	
	
	        FileUploader.prototype.onAfterAddingFile = function onAfterAddingFile(fileItem) {};
	        /**
	         * Callback
	         * @param {File|Object} item
	         * @param {Object} filter
	         * @param {Object} options
	         */
	
	
	        FileUploader.prototype.onWhenAddingFileFailed = function onWhenAddingFileFailed(item, filter, options) {};
	        /**
	         * Callback
	         * @param {FileItem} fileItem
	         */
	
	
	        FileUploader.prototype.onBeforeUploadItem = function onBeforeUploadItem(fileItem) {};
	        /**
	         * Callback
	         * @param {FileItem} fileItem
	         * @param {Number} progress
	         */
	
	
	        FileUploader.prototype.onProgressItem = function onProgressItem(fileItem, progress) {};
	        /**
	         * Callback
	         * @param {Number} progress
	         */
	
	
	        FileUploader.prototype.onProgressAll = function onProgressAll(progress) {};
	        /**
	         * Callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileUploader.prototype.onSuccessItem = function onSuccessItem(item, response, status, headers) {};
	        /**
	         * Callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileUploader.prototype.onErrorItem = function onErrorItem(item, response, status, headers) {};
	        /**
	         * Callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileUploader.prototype.onCancelItem = function onCancelItem(item, response, status, headers) {};
	        /**
	         * Callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileUploader.prototype.onCompleteItem = function onCompleteItem(item, response, status, headers) {};
	        /**
	         * Callback
	         */
	
	
	        FileUploader.prototype.onCompleteAll = function onCompleteAll() {};
	        /**********************
	         * PRIVATE
	         **********************/
	        /**
	         * Returns the total progress
	         * @param {Number} [value]
	         * @returns {Number}
	         * @private
	         */
	
	
	        FileUploader.prototype._getTotalProgress = function _getTotalProgress(value) {
	            if (this.removeAfterUpload) return value || 0;
	
	            var notUploaded = this.getNotUploadedItems().length;
	            var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
	            var ratio = 100 / this.queue.length;
	            var current = (value || 0) * ratio / 100;
	
	            return Math.round(uploaded * ratio + current);
	        };
	        /**
	         * Returns array of filters
	         * @param {Array<Function>|String} filters
	         * @returns {Array<Function>}
	         * @private
	         */
	
	
	        FileUploader.prototype._getFilters = function _getFilters(filters) {
	            if (!filters) return this.filters;
	            if (isArray(filters)) return filters;
	            var names = filters.match(/[^\s,]+/g);
	            return this.filters.filter(function (filter) {
	                return names.indexOf(filter.name) !== -1;
	            });
	        };
	        /**
	         * Updates html
	         * @private
	         */
	
	
	        FileUploader.prototype._render = function _render() {
	            if (!$rootScope.$$phase) $rootScope.$apply();
	        };
	        /**
	         * Returns "true" if item is a file (not folder)
	         * @param {File|FileLikeObject} item
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype._folderFilter = function _folderFilter(item) {
	            return !!(item.size || item.type);
	        };
	        /**
	         * Returns "true" if the limit has not been reached
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype._queueLimitFilter = function _queueLimitFilter() {
	            return this.queue.length < this.queueLimit;
	        };
	        /**
	         * Returns "true" if file pass all filters
	         * @param {File|Object} file
	         * @param {Array<Function>} filters
	         * @param {Object} options
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype._isValidFile = function _isValidFile(file, filters, options) {
	            var _this4 = this;
	
	            this._failFilterIndex = -1;
	            return !filters.length ? true : filters.every(function (filter) {
	                _this4._failFilterIndex++;
	                return filter.fn.call(_this4, file, options);
	            });
	        };
	        /**
	         * Checks whether upload successful
	         * @param {Number} status
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype._isSuccessCode = function _isSuccessCode(status) {
	            return status >= 200 && status < 300 || status === 304;
	        };
	        /**
	         * Transforms the server response
	         * @param {*} response
	         * @param {Object} headers
	         * @returns {*}
	         * @private
	         */
	
	
	        FileUploader.prototype._transformResponse = function _transformResponse(response, headers) {
	            var headersGetter = this._headersGetter(headers);
	            forEach($http.defaults.transformResponse, function (transformFn) {
	                response = transformFn(response, headersGetter);
	            });
	            return response;
	        };
	        /**
	         * Parsed response headers
	         * @param headers
	         * @returns {Object}
	         * @see https://github.com/angular/angular.js/blob/master/src/ng/http.js
	         * @private
	         */
	
	
	        FileUploader.prototype._parseHeaders = function _parseHeaders(headers) {
	            var parsed = {},
	                key,
	                val,
	                i;
	
	            if (!headers) return parsed;
	
	            forEach(headers.split('\n'), function (line) {
	                i = line.indexOf(':');
	                key = line.slice(0, i).trim().toLowerCase();
	                val = line.slice(i + 1).trim();
	
	                if (key) {
	                    parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	                }
	            });
	
	            return parsed;
	        };
	        /**
	         * Returns function that returns headers
	         * @param {Object} parsedHeaders
	         * @returns {Function}
	         * @private
	         */
	
	
	        FileUploader.prototype._headersGetter = function _headersGetter(parsedHeaders) {
	            return function (name) {
	                if (name) {
	                    return parsedHeaders[name.toLowerCase()] || null;
	                }
	                return parsedHeaders;
	            };
	        };
	        /**
	         * The XMLHttpRequest transport
	         * @param {FileItem} item
	         * @private
	         */
	
	
	        FileUploader.prototype._xhrTransport = function _xhrTransport(item) {
	            var _this5 = this;
	
	            var xhr = item._xhr = new XMLHttpRequest();
	            var sendable;
	
	            if (!item.disableMultipart) {
	                sendable = new FormData();
	                forEach(item.formData, function (obj) {
	                    forEach(obj, function (value, key) {
	                        sendable.append(key, value);
	                    });
	                });
	
	                sendable.append(item.alias, item._file, item.file.name);
	            } else {
	                sendable = item._file;
	            }
	
	            if (typeof item._file.size != 'number') {
	                throw new TypeError('The file specified is no longer valid');
	            }
	
	            xhr.upload.onprogress = function (event) {
	                var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
	                _this5._onProgressItem(item, progress);
	            };
	
	            xhr.onload = function () {
					var headers, response,gist,method;
					if(xhr.getResponseHeader("content-type") == "application/json"){
						headers = _this5._parseHeaders(xhr.getAllResponseHeaders());
						response = _this5._transformResponse(xhr.response, headers);
						gist = _this5._isSuccessCode(xhr.status) ? 'Success' : 'Error';
					}else{
						headers = null;
						response ="";
						gist = 'Error';
					}
					 method = '_on' + gist + 'Item';
	                _this5[method](item, response, xhr.status, headers);
	                _this5._onCompleteItem(item, response, xhr.status, headers);
	            };
	
	            xhr.onerror = function () {
	                var headers = _this5._parseHeaders(xhr.getAllResponseHeaders());
	                var response = _this5._transformResponse(xhr.response, headers);
	                _this5._onErrorItem(item, response, xhr.status, headers);
	                _this5._onCompleteItem(item, response, xhr.status, headers);
	            };
	
	            xhr.onabort = function () {
	                var headers = _this5._parseHeaders(xhr.getAllResponseHeaders());
	                var response = _this5._transformResponse(xhr.response, headers);
	                _this5._onCancelItem(item, response, xhr.status, headers);
	                _this5._onCompleteItem(item, response, xhr.status, headers);
	            };
	
	            xhr.open(item.method, item.url, true);
	
	            xhr.withCredentials = item.withCredentials;
	
	            forEach(item.headers, function (value, name) {
	                xhr.setRequestHeader(name, value);
	            });
	
	            xhr.send(sendable);
	        };
	        /**
	         * The IFrame transport
	         * @param {FileItem} item
	         * @private
	         */
	
	
	        FileUploader.prototype._iframeTransport = function _iframeTransport(item) {
	            var _this6 = this;
	
	            var form = element('<form style="display: none;" />');
	            var iframe = element('<iframe name="iframeTransport' + Date.now() + '">');
	            var input = item._input;
	
	            if (item._form) item._form.replaceWith(input); // remove old form
	            item._form = form; // save link to new form
	
	            input.prop('name', item.alias);
	
	            forEach(item.formData, function (obj) {
	                forEach(obj, function (value, key) {
	                    var element_ = element('<input type="hidden" name="' + key + '" />');
	                    element_.val(value);
	                    form.append(element_);
	                });
	            });
	
	            form.prop({
	                action: item.url,
	                method: 'POST',
	                target: iframe.prop('name'),
	                enctype: 'multipart/form-data',
	                encoding: 'multipart/form-data' // old IE
	            });
	
	            iframe.bind('load', function () {
	                var html = '';
	                var status = 200;
	
	                try {
	                    // Fix for legacy IE browsers that loads internal error page
	                    // when failed WS response received. In consequence iframe
	                    // content access denied error is thrown becouse trying to
	                    // access cross domain page. When such thing occurs notifying
	                    // with empty response object. See more info at:
	                    // http://stackoverflow.com/questions/151362/access-is-denied-error-on-accessing-iframe-document-object
	                    // Note that if non standard 4xx or 5xx error code returned
	                    // from WS then response content can be accessed without error
	                    // but 'XHR' status becomes 200. In order to avoid confusion
	                    // returning response via same 'success' event handler.
	
	                    // fixed angular.contents() for iframes
	                    html = iframe[0].contentDocument.body.innerHTML;
	                } catch (e) {
	                    // in case we run into the access-is-denied error or we have another error on the server side
	                    // (intentional 500,40... errors), we at least say 'something went wrong' -> 500
	                    status = 500;
	                }
	
	                var xhr = { response: html, status: status, dummy: true };
	                var headers = {};
	                var response = _this6._transformResponse(xhr.response, headers);
	
	                _this6._onSuccessItem(item, response, xhr.status, headers);
	                _this6._onCompleteItem(item, response, xhr.status, headers);
	            });
	
	            form.abort = function () {
	                var xhr = { status: 0, dummy: true };
	                var headers = {};
	                var response;
	
	                iframe.unbind('load').prop('src', 'javascript:false;');
	                form.replaceWith(input);
	
	                _this6._onCancelItem(item, response, xhr.status, headers);
	                _this6._onCompleteItem(item, response, xhr.status, headers);
	            };
	
	            input.after(form);
	            form.append(input).append(iframe);
	
	            form[0].submit();
	        };
	        /**
	         * Inner callback
	         * @param {File|Object} item
	         * @param {Object} filter
	         * @param {Object} options
	         * @private
	         */
	
	
	        FileUploader.prototype._onWhenAddingFileFailed = function _onWhenAddingFileFailed(item, filter, options) {
	            this.onWhenAddingFileFailed(item, filter, options);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         */
	
	
	        FileUploader.prototype._onAfterAddingFile = function _onAfterAddingFile(item) {
	            this.onAfterAddingFile(item);
	        };
	        /**
	         * Inner callback
	         * @param {Array<FileItem>} items
	         */
	
	
	        FileUploader.prototype._onAfterAddingAll = function _onAfterAddingAll(items) {
	            this.onAfterAddingAll(items);
	        };
	        /**
	         *  Inner callback
	         * @param {FileItem} item
	         * @private
	         */
	
	
	        FileUploader.prototype._onBeforeUploadItem = function _onBeforeUploadItem(item) {
	            item._onBeforeUpload();
	            this.onBeforeUploadItem(item);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {Number} progress
	         * @private
	         */
	
	
	        FileUploader.prototype._onProgressItem = function _onProgressItem(item, progress) {
	            var total = this._getTotalProgress(progress);
	            this.progress = total;
	            item._onProgress(progress);
	            this.onProgressItem(item, progress);
	            this.onProgressAll(total);
	            this._render();
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileUploader.prototype._onSuccessItem = function _onSuccessItem(item, response, status, headers) {
	            item._onSuccess(response, status, headers);
	            this.onSuccessItem(item, response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileUploader.prototype._onErrorItem = function _onErrorItem(item, response, status, headers) {
	            item._onError(response, status, headers);
	            this.onErrorItem(item, response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileUploader.prototype._onCancelItem = function _onCancelItem(item, response, status, headers) {
	            item._onCancel(response, status, headers);
	            this.onCancelItem(item, response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileUploader.prototype._onCompleteItem = function _onCompleteItem(item, response, status, headers) {
	            item._onComplete(response, status, headers);
	            this.onCompleteItem(item, response, status, headers);
	
	            var nextItem = this.getReadyItems()[0];
	            this.isUploading = false;
	
	            if (isDefined(nextItem)) {
	                nextItem.upload();
	                return;
	            }
	
	            this.onCompleteAll();
	            this.progress = this._getTotalProgress();
	            this._render();
	        };
	        /**********************
	         * STATIC
	         **********************/
	        /**
	         * Returns "true" if value an instance of File
	         * @param {*} value
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.isFile = function isFile(value) {
	            return File && value instanceof File;
	        };
	        /**
	         * Returns "true" if value an instance of FileLikeObject
	         * @param {*} value
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.isFileLikeObject = function isFileLikeObject(value) {
	            return value instanceof FileLikeObject;
	        };
	        /**
	         * Returns "true" if value is array like object
	         * @param {*} value
	         * @returns {Boolean}
	         */
	
	
	        FileUploader.isArrayLikeObject = function isArrayLikeObject(value) {
	            return isObject(value) && 'length' in value;
	        };
	        /**
	         * Inherits a target (Class_1) by a source (Class_2)
	         * @param {Function} target
	         * @param {Function} source
	         */
	
	
	        FileUploader.inherit = function inherit(target, source) {
	            target.prototype = Object.create(source.prototype);
	            target.prototype.constructor = target;
	            target.super_ = source;
	        };
	
	        return FileUploader;
	    }();
	
	    /**********************
	     * PUBLIC
	     **********************/
	    /**
	     * Checks a support the html5 uploader
	     * @returns {Boolean}
	     * @readonly
	     */
	
	
	    FileUploader.prototype.isHTML5 = !!(File && FormData);
	    /**********************
	     * STATIC
	     **********************/
	    /**
	     * @borrows FileUploader.prototype.isHTML5
	     */
	    FileUploader.isHTML5 = FileUploader.prototype.isHTML5;
	
	    return FileUploader;
	}
	
	__identity.$inject = ['fileUploaderOptions', '$rootScope', '$http', '$window', '$timeout', 'FileLikeObject', 'FileItem'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular;
	var copy = _angular.copy;
	var isElement = _angular.isElement;
	var isString = _angular.isString;
	function __identity() {
	
	    return function () {
	        /**
	         * Creates an instance of FileLikeObject
	         * @param {File|HTMLInputElement|Object} fileOrInput
	         * @constructor
	         */
	
	        function FileLikeObject(fileOrInput) {
	            _classCallCheck(this, FileLikeObject);
	
	            var isInput = isElement(fileOrInput);
	            var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
	            var postfix = isString(fakePathOrObject) ? 'FakePath' : 'Object';
	            var method = '_createFrom' + postfix;
	            this[method](fakePathOrObject);
	        }
	        /**
	         * Creates file like object from fake path string
	         * @param {String} path
	         * @private
	         */
	
	
	        FileLikeObject.prototype._createFromFakePath = function _createFromFakePath(path) {
	            this.lastModifiedDate = null;
	            this.size = null;
	            this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
	            this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
	        };
	        /**
	         * Creates file like object from object
	         * @param {File|FileLikeObject} object
	         * @private
	         */
	
	
	        FileLikeObject.prototype._createFromObject = function _createFromObject(object) {
	            this.lastModifiedDate = copy(object.lastModifiedDate);
	            this.size = object.size;
	            this.type = object.type;
	            this.name = object.name;
	        };
	
	        return FileLikeObject;
	    }();
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular;
	var copy = _angular.copy;
	var extend = _angular.extend;
	var element = _angular.element;
	var isElement = _angular.isElement;
	function __identity($compile, FileLikeObject) {
	
	    return function () {
	        /**
	         * Creates an instance of FileItem
	         * @param {FileUploader} uploader
	         * @param {File|HTMLInputElement|Object} some
	         * @param {Object} options
	         * @constructor
	         */
	
	        function FileItem(uploader, some, options) {
	            _classCallCheck(this, FileItem);
	
	            var isInput = isElement(some);
	            var input = isInput ? element(some) : null;
	            var file = !isInput ? some : null;
	
	            extend(this, {
	                url: uploader.url,
	                alamat: uploader.url,
	                alias: uploader.alias,
	                headers: copy(uploader.headers),
	                formData: copy(uploader.formData),
	                removeAfterUpload: uploader.removeAfterUpload,
	                withCredentials: uploader.withCredentials,
	                disableMultipart: uploader.disableMultipart,
	                method: uploader.method
	            }, options, {
	                uploader: uploader,
	                file: new FileLikeObject(some),
	                isReady: false,
	                isUploading: false,
	                isUploaded: false,
	                jSuccess: 0,
	                jGagal: 0,
	                jDouble: 0,
					isSuccess: false,
	                isCancel: false,
	                isError: false,
	                progress: 0,
	                index: null,
	                _file: file,
	                _input: input
	            });
	
	            if (input) this._replaceNode(input);
	        }
	        /**********************
	         * PUBLIC
	         **********************/
	        /**
	         * Uploads a FileItem
	         */
	
	
	        FileItem.prototype.upload = function upload() {
	            try {
	                this.uploader.uploadItem(this);
	            } catch (e) {
	                this.uploader._onCompleteItem(this, '', 0, []);
	                this.uploader._onErrorItem(this, '', 0, []);
	            }
	        };
	        /**
	         * Cancels uploading of FileItem
	         */
	
	
	        FileItem.prototype.cancel = function cancel() {
	            this.uploader.cancelItem(this);
	        };
	        /**
	         * Removes a FileItem
	         */
	
	
	        FileItem.prototype.remove = function remove() {
	            this.uploader.removeFromQueue(this);
	        };
	        /**
	         * Callback
	         * @private
	         */
	
	
	        FileItem.prototype.onBeforeUpload = function onBeforeUpload() {};
	        /**
	         * Callback
	         * @param {Number} progress
	         * @private
	         */
	
	
	        FileItem.prototype.onProgress = function onProgress(progress) {};
	        /**
	         * Callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileItem.prototype.onSuccess = function onSuccess(response, status, headers) {};
	        /**
	         * Callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileItem.prototype.onError = function onError(response, status, headers) {};
	        /**
	         * Callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileItem.prototype.onCancel = function onCancel(response, status, headers) {};
	        /**
	         * Callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileItem.prototype.onComplete = function onComplete(response, status, headers) {};
	        /**********************
	         * PRIVATE
	         **********************/
	        /**
	         * Inner callback
	         */
	
	
	        FileItem.prototype._onBeforeUpload = function _onBeforeUpload() {
	            this.isReady = true;
	            this.isUploading = false;
	            this.isUploaded = false;
	            this.isSuccess = false;
	            this.isCancel = false;
	            this.isError = false;
	            this.progress = 0;
	            this.onBeforeUpload();
	        };
	        /**
	         * Inner callback
	         * @param {Number} progress
	         * @private
	         */
	
	
	        FileItem.prototype._onProgress = function _onProgress(progress) {
	            this.progress = progress;
	            this.onProgress(progress);
	        };
	        /**
	         * Inner callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileItem.prototype._onSuccess = function _onSuccess(response, status, headers) {
	            this.isReady = false;
	            this.isUploading = false;
	            this.isUploaded = true;
	            this.jSuccess = response.sukses;
	            this.jGagal = response.gagal;
	            this.jDouble = response.double1;
	            this.isSuccess = true;
	            this.isCancel = false;
	            this.isError = false;
	            this.progress = 100;
	            this.index = null;
	            this.onSuccess(response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileItem.prototype._onError = function _onError(response, status, headers) {
	            this.isReady = false;
	            this.isUploading = false;
	            this.isUploaded = true;
	            this.isSuccess = false;
	            this.isCancel = false;
	            this.isError = true;
	            this.progress = 0;
	            this.index = null;
	            this.onError(response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileItem.prototype._onCancel = function _onCancel(response, status, headers) {
	            this.isReady = false;
	            this.isUploading = false;
	            this.isUploaded = false;
	            this.isSuccess = false;
	            this.isCancel = true;
	            this.isError = false;
	            this.progress = 0;
	            this.index = null;
	            this.onCancel(response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileItem.prototype._onComplete = function _onComplete(response, status, headers) {
	            this.onComplete(response, status, headers);
	            if (this.removeAfterUpload) this.remove();
	        };
	        /**
	         * Destroys a FileItem
	         */
	
	
	        FileItem.prototype._destroy = function _destroy() {
	            if (this._input) this._input.remove();
	            if (this._form) this._form.remove();
	            delete this._form;
	            delete this._input;
	        };
	        /**
	         * Prepares to uploading
	         * @private
	         */
	
	
	        FileItem.prototype._prepareToUploading = function _prepareToUploading() {
	            this.index = this.index || ++this.uploader._nextIndex;
	            this.isReady = true;
	        };
	        /**
	         * Replaces input element on his clone
	         * @param {JQLite|jQuery} input
	         * @private
	         */
	
	
	        FileItem.prototype._replaceNode = function _replaceNode(input) {
	            var clone = $compile(input.clone())(input.scope());
	            clone.prop('value', null); // FF fix
	            input.css('display', 'none');
	            input.after(clone); // remove jquery dependency
	        };
	
	        return FileItem;
	    }();
	}
	
	__identity.$inject = ['$compile', 'FileLikeObject'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular;
	var extend = _angular.extend;
	function __identity() {
	    var FileDirective = function () {
	        /**
	         * Creates instance of {FileDirective} object
	         * @param {Object} options
	         * @param {Object} options.uploader
	         * @param {HTMLElement} options.element
	         * @param {Object} options.events
	         * @param {String} options.prop
	         * @constructor
	         */
	
	        function FileDirective(options) {
	            _classCallCheck(this, FileDirective);
	
	            extend(this, options);
	            this.uploader._directives[this.prop].push(this);
	            this._saveLinks();
	            this.bind();
	        }
	        /**
	         * Binds events handles
	         */
	
	
	        FileDirective.prototype.bind = function bind() {
	            for (var key in this.events) {
	                var prop = this.events[key];
	                this.element.bind(key, this[prop]);
	            }
	        };
	        /**
	         * Unbinds events handles
	         */
	
	
	        FileDirective.prototype.unbind = function unbind() {
	            for (var key in this.events) {
	                this.element.unbind(key, this.events[key]);
	            }
	        };
	        /**
	         * Destroys directive
	         */
	
	
	        FileDirective.prototype.destroy = function destroy() {
	            var index = this.uploader._directives[this.prop].indexOf(this);
	            this.uploader._directives[this.prop].splice(index, 1);
	            this.unbind();
	            // this.element = null;
	        };
	        /**
	         * Saves links to functions
	         * @private
	         */
	
	
	        FileDirective.prototype._saveLinks = function _saveLinks() {
	            for (var key in this.events) {
	                var prop = this.events[key];
	                this[prop] = this[prop].bind(this);
	            }
	        };
	
	        return FileDirective;
	    }();
	
	    /**
	     * Map of events
	     * @type {Object}
	     */
	
	
	    FileDirective.prototype.events = {};
	
	    return FileDirective;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _angular = angular;
	var extend = _angular.extend;
	function __identity($compile, FileDirective) {
	
	    return function (_FileDirective) {
	        _inherits(FileSelect, _FileDirective);
	
	        /**
	         * Creates instance of {FileSelect} object
	         * @param {Object} options
	         * @constructor
	         */
	
	        function FileSelect(options) {
	            _classCallCheck(this, FileSelect);
	
	            var extendedOptions = extend(options, {
	                // Map of events
	                events: {
	                    $destroy: 'destroy',
	                    change: 'onChange'
	                },
	                // Name of property inside uploader._directive object
	                prop: 'select'
	            });
	
	            var _this = _possibleConstructorReturn(this, _FileDirective.call(this, extendedOptions));
	
	            if (!_this.uploader.isHTML5) {
	                _this.element.removeAttr('multiple');
	            }
	            _this.element.prop('value', null); // FF fix
	            return _this;
	        }
	        /**
	         * Returns options
	         * @return {Object|undefined}
	         */
	
	
	        FileSelect.prototype.getOptions = function getOptions() {};
	        /**
	         * Returns filters
	         * @return {Array<Function>|String|undefined}
	         */
	
	
	        FileSelect.prototype.getFilters = function getFilters() {};
	        /**
	         * If returns "true" then HTMLInputElement will be cleared
	         * @returns {Boolean}
	         */
	
	
	        FileSelect.prototype.isEmptyAfterSelection = function isEmptyAfterSelection() {
	            return !!this.element.attr('multiple');
	        };
	        /**
	         * Event handler
	         */
	
	
	        FileSelect.prototype.onChange = function onChange() {
	            var files = this.uploader.isHTML5 ? this.element[0].files : this.element[0];
	            var options = this.getOptions();
	            var filters = this.getFilters();
	
	            if (!this.uploader.isHTML5) this.destroy();
	            this.uploader.addToQueue(files, options, filters);
	            if (this.isEmptyAfterSelection()) {
	                this.element.prop('value', null);
	                this.element.replaceWith($compile(this.element.clone())(this.scope)); // IE fix
	            }
	        };
	
	        return FileSelect;
	    }(FileDirective);
	}
	
	__identity.$inject = ['$compile', 'FileDirective'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _angular = angular;
	var extend = _angular.extend;
	var forEach = _angular.forEach;
	function __identity(FileDirective) {
	
	    return function (_FileDirective) {
	        _inherits(FileDrop, _FileDirective);
	
	        /**
	         * Creates instance of {FileDrop} object
	         * @param {Object} options
	         * @constructor
	         */
	
	        function FileDrop(options) {
	            _classCallCheck(this, FileDrop);
	
	            var extendedOptions = extend(options, {
	                // Map of events
	                events: {
	                    $destroy: 'destroy',
	                    drop: 'onDrop',
	                    dragover: 'onDragOver',
	                    dragleave: 'onDragLeave'
	                },
	                // Name of property inside uploader._directive object
	                prop: 'drop'
	            });
	
	            return _possibleConstructorReturn(this, _FileDirective.call(this, extendedOptions));
	        }
	        /**
	         * Returns options
	         * @return {Object|undefined}
	         */
	
	
	        FileDrop.prototype.getOptions = function getOptions() {};
	        /**
	         * Returns filters
	         * @return {Array<Function>|String|undefined}
	         */
	
	
	        FileDrop.prototype.getFilters = function getFilters() {};
	        /**
	         * Event handler
	         */
	
	
	        FileDrop.prototype.onDrop = function onDrop(event) {
	            var transfer = this._getTransfer(event);
	            if (!transfer) return;
	            var options = this.getOptions();
	            var filters = this.getFilters();
	            this._preventAndStop(event);
	            forEach(this.uploader._directives.over, this._removeOverClass, this);
	            this.uploader.addToQueue(transfer.files, options, filters);
	        };
	        /**
	         * Event handler
	         */
	
	
	        FileDrop.prototype.onDragOver = function onDragOver(event) {
	            var transfer = this._getTransfer(event);
	            if (!this._haveFiles(transfer.types)) return;
	            transfer.dropEffect = 'copy';
	            this._preventAndStop(event);
	            forEach(this.uploader._directives.over, this._addOverClass, this);
	        };
	        /**
	         * Event handler
	         */
	
	
	        FileDrop.prototype.onDragLeave = function onDragLeave(event) {
	            if (event.currentTarget === this.element[0]) return;
	            this._preventAndStop(event);
	            forEach(this.uploader._directives.over, this._removeOverClass, this);
	        };
	        /**
	         * Helper
	         */
	
	
	        FileDrop.prototype._getTransfer = function _getTransfer(event) {
	            return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
	        };
	        /**
	         * Helper
	         */
	
	
	        FileDrop.prototype._preventAndStop = function _preventAndStop(event) {
	            event.preventDefault();
	            event.stopPropagation();
	        };
	        /**
	         * Returns "true" if types contains files
	         * @param {Object} types
	         */
	
	
	        FileDrop.prototype._haveFiles = function _haveFiles(types) {
	            if (!types) return false;
	            if (types.indexOf) {
	                return types.indexOf('Files') !== -1;
	            } else if (types.contains) {
	                return types.contains('Files');
	            } else {
	                return false;
	            }
	        };
	        /**
	         * Callback
	         */
	
	
	        FileDrop.prototype._addOverClass = function _addOverClass(item) {
	            item.addOverClass();
	        };
	        /**
	         * Callback
	         */
	
	
	        FileDrop.prototype._removeOverClass = function _removeOverClass(item) {
	            item.removeOverClass();
	        };
	
	        return FileDrop;
	    }(FileDirective);
	}
	
	__identity.$inject = ['FileDirective'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _angular = angular;
	var extend = _angular.extend;
	function __identity(FileDirective) {
	
	    return function (_FileDirective) {
	        _inherits(FileOver, _FileDirective);
	
	        /**
	         * Creates instance of {FileDrop} object
	         * @param {Object} options
	         * @constructor
	         */
	
	        function FileOver(options) {
	            _classCallCheck(this, FileOver);
	
	            var extendedOptions = extend(options, {
	                // Map of events
	                events: {
	                    $destroy: 'destroy'
	                },
	                // Name of property inside uploader._directive object
	                prop: 'over',
	                // Over class
	                overClass: 'nv-file-over'
	            });
	
	            return _possibleConstructorReturn(this, _FileDirective.call(this, extendedOptions));
	        }
	        /**
	         * Adds over class
	         */
	
	
	        FileOver.prototype.addOverClass = function addOverClass() {
	            this.element.addClass(this.getOverClass());
	        };
	        /**
	         * Removes over class
	         */
	
	
	        FileOver.prototype.removeOverClass = function removeOverClass() {
	            this.element.removeClass(this.getOverClass());
	        };
	        /**
	         * Returns over class
	         * @returns {String}
	         */
	
	
	        FileOver.prototype.getOverClass = function getOverClass() {
	            return this.overClass;
	        };
	
	        return FileOver;
	    }(FileDirective);
	}
	
	__identity.$inject = ['FileDirective'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function __identity($parse, FileUploader, FileSelect) {
	
	    return {
	        link: function link(scope, element, attributes) {
	            var uploader = scope.$eval(attributes.uploader);
	
	            if (!(uploader instanceof FileUploader)) {
	                throw new TypeError('"Uploader" must be an instance of FileUploader');
	            }
	
	            var object = new FileSelect({
	                uploader: uploader,
	                element: element,
	                scope: scope
	            });
	
	            object.getOptions = $parse(attributes.options).bind(object, scope);
	            object.getFilters = function () {
	                return attributes.filters;
	            };
	        }
	    };
	}
	
	__identity.$inject = ['$parse', 'FileUploader', 'FileSelect'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function __identity($parse, FileUploader, FileDrop) {
	
	    return {
	        link: function link(scope, element, attributes) {
	            var uploader = scope.$eval(attributes.uploader);
	
	            if (!(uploader instanceof FileUploader)) {
	                throw new TypeError('"Uploader" must be an instance of FileUploader');
	            }
	
	            if (!uploader.isHTML5) return;
	
	            var object = new FileDrop({
	                uploader: uploader,
	                element: element
	            });
	
	            object.getOptions = $parse(attributes.options).bind(object, scope);
	            object.getFilters = function () {
	                return attributes.filters;
	            };
	        }
	    };
	}
	
	__identity.$inject = ['$parse', 'FileUploader', 'FileDrop'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function __identity(FileUploader, FileOver) {
	
	    return {
	        link: function link(scope, element, attributes) {
	            var uploader = scope.$eval(attributes.uploader);
	
	            if (!(uploader instanceof FileUploader)) {
	                throw new TypeError('"Uploader" must be an instance of FileUploader');
	            }
	
	            var object = new FileOver({
	                uploader: uploader,
	                element: element
	            });
	
	            object.getOverClass = function () {
	                return attributes.overClass || object.overClass;
	            };
	        }
	    };
	}
	
	__identity.$inject = ['FileUploader', 'FileOver'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-file-upload.js.map
/**
 * State-based routing for AngularJS
 * @version v0.2.18
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return R(new(R(function(){},{prototype:a})),b)}function e(a){return Q(arguments,function(b){b!==a&&Q(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return Q(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return R({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return Q(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return Q(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=P(a),d=c?[]:{};return Q(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=P(a)?[]:{};return Q(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=R(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,N(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);Q(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return O(a)&&a.then&&a.$$promises}if(!O(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return Q(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!L(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;Q(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!O(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=R({},d),u=1+q.length/3,v=!1;if(L(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),R(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return L(a.template)?this.fromString(a.template,b):L(a.templateUrl)?this.fromUrl(a.templateUrl,b):L(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return M(a)?a(b):a},this.fromUrl=function(c,d){return M(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new U.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=U.type(h)||d(U.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=R({params:{}},O(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new U.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){R(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function e(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){R(this,a||{})}U=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!L(a)||"string"==typeof a},pattern:/[^\/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return L(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return L(a)&&(m=a),m},this.strictMode=function(a){return L(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!L(a))return q;if(a!==!0&&a!==!1&&!N(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,R(f(),b))},this.isMatcher=function(a){if(!O(a))return!1;var b=!0;return Q(r.prototype,function(c,d){M(c)&&(b=b&&L(a[d])&&M(a[d]))}),b},this.type=function(a,b,c){if(!L(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(R({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},Q(x,function(a,b){u[b]=new s(R({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),Q(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=O(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?u[c.type]:c.type instanceof s?c.type:new s(c.type):"config"===e?u.any:u.string}function m(){var b={array:"search"===f?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return R(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!L(c)||null==c)return q;if(c===!0||N(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function r(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=P(a.replace)?a.replace:[],N(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),L(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=r(e,y,z,A);R(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,R(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),Q(b,function(b){Q(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return Q(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return Q(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return L(d)?d:!0}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return b?(N(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!M(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(N(a)){var b=a;a=function(){return b}}else if(!M(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=N(b);if(N(a)&&(a=d.compile(a)),!h&&!M(b)&&!P(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),R(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:N(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),R(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=N(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!N(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):N(b.parent)?b.parent:O(b.parent)&&N(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)M(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return N(a)&&!L(b)?C[a]:M(b)&&N(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return O(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return Q(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(M(d.controllerProvider)||P(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==y.transition&&p.update(),C;for(var J=e.when(G),K=D;K<z.length;K++,F=z[K])G=H[K]=d(G),J=v(F,c,F===b,J,G,f);var M=y.transition=J.then(function(){var d,e,g;if(y.transition!==M)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return y.transition!==M?A:(y.$current=b,y.current=b.self,y.params=c,S(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==M?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return M},y.is=function(a,b,d){d=R({relative:y.$current},d||{});var e=m(a,d.relative);return L(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=R({relative:y.$current},d||{}),N(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return L(e)?L(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=R({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!L(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new U.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(L(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(N(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new U.ParamSet;return Q(a.params||{},function(a,c){b[c]||(b[c]=new U.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?R(a.parent.params.$$new(),b):new U.ParamSet},views:function(a){var b={};return Q(L(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=R(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,c){function d(a){return 1===V&&W>=4?!!j.enabled(a):1===V&&W>=2?!!j.enabled():!!i}var e={enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}};if(a.noanimation)return e;if(j)return{enter:function(a,c,f){d(a)?b.version.minor>2?j.enter(a,null,c).then(f):j.enter(a,null,c,f):e.enter(a,c,f)},leave:function(a,c){d(a)?b.version.minor>2?j.leave(a).then(c):j.leave(a,c):e.leave(a,c)}};if(i){var f=i&&i(c,a);return{enter:function(a,b,c){f.enter(a,null,b),c()},leave:function(a,b){f.leave(a),b()}}}return e}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){function a(){b&&b.remove(),c&&c.$destroy()}var b=l,c=n;c&&(c._willBeDestroyed=!0),m?(r.leave(m,function(){a(),l=null}),l=m):(a(),l=null),m=null,n=null}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if((g||s!==o)&&!c._willBeDestroyed){k=c.$new(),o=a.$current.locals[l],k.$emit("$viewContentLoading",l);var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded",l),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function E(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h=B(f.uiSref,a.current.name),i={state:h.state,href:null,params:null},j=D(e),k=g[1]||g[0];i.options=R(F(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var l=function(c){c&&(i.params=b.copy(c)),i.href=a.href(h.state,i.params,i.options),k&&k.$$addStateInfo(h.state,i.params),null!==i.href&&f.$set(j.attr,i.href)};h.paramExpr&&(d.$watch(h.paramExpr,function(a){a!==i.params&&l(a)},!0),i.params=b.copy(d.$eval(h.paramExpr))),l(),j.clickable&&e.bind("click",E(e,a,c,j,function(){return i}))}}}function H(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){l.state=b[0],l.params=b[1],l.options=b[2],l.href=a.href(l.state,l.params,l.options),i&&i.$$addStateInfo(l.state,l.params),l.href&&e.$set(h.attr,l.href)}var h=D(d),i=f[1]||f[0],j=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],k="["+j.map(function(a){return a||"null"}).join(", ")+"]",l={state:null,params:null,options:null,href:null};c.$watch(k,g,!0),g(c.$eval(k)),h.clickable&&d.bind("click",E(d,a,b,h,function(){return l}))}}}function I(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,C(d)),g=h(b,c);p.push({state:f||{name:b},params:c,hash:g}),q[g]=e}function h(a,c){if(!N(a))throw new Error("state should be a string");return O(c)?a+T(c):(c=b.$eval(c),O(c)?a+T(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(r){}o=o||c(e.uiSrefActive||"",!1)(b),O(o)&&Q(o,function(c,d){if(N(c)){var e=B(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){O(o)&&p.length>0||(g(a,b,o),i())},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var U;r.prototype.concat=function(a,b){var c={caseInsensitive:U.caseInsensitive(),strict:U.strictMode(),squash:U.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,R(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;j>e;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;i>e;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},r.prototype.parameters=function(a){return L(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=P(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else N(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return P(a)?a:L(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(P(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x);var V=b.version.major,W=b.version.minor;y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiState",H),
J.$inject=["$state"],K.$inject=["$state"],b.module("ui.router.state").filter("isState",J).filter("includedByState",K)}(window,window.angular);
/**
 * oclazyload - Load modules on demand (lazy load) with angularJS
 * @version v1.0.9
 * @link https://github.com/ocombe/ocLazyLoad
 * @license MIT
 * @author Olivier Combe <olivier.combe@gmail.com>
 */
!function(e,n){"use strict";var r=["ng","oc.lazyLoad"],o={},t=[],i=[],a=[],s=[],u=e.noop,c={},l=[],d=e.module("oc.lazyLoad",["ng"]);d.provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(d,f,p,m,v,y){function L(n,o,t){if(o){var i,s,d,f=[];for(i=o.length-1;i>=0;i--)if(s=o[i],e.isString(s)||(s=E(s)),s&&-1===l.indexOf(s)&&(!w[s]||-1!==a.indexOf(s))){var h=-1===r.indexOf(s);if(d=g(s),h&&(r.push(s),L(n,d.requires,t)),d._runBlocks.length>0)for(c[s]=[];d._runBlocks.length>0;)c[s].push(d._runBlocks.shift());e.isDefined(c[s])&&(h||t.rerun)&&(f=f.concat(c[s])),j(n,d._invokeQueue,s,t.reconfig),j(n,d._configBlocks,s,t.reconfig),u(h?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",s),o.pop(),l.push(s)}var p=n.getInstanceInjector();e.forEach(f,function(e){p.invoke(e)})}}function $(n,r){function t(n,r){var o,t=!0;return r.length&&(o=i(n),e.forEach(r,function(e){t=t&&i(e)!==o})),t}function i(n){return e.isArray(n)?M(n.toString()):e.isObject(n)?M(S(n)):e.isDefined(n)&&null!==n?M(n.toString()):n}var a=n[2][0],s=n[1],c=!1;e.isUndefined(o[r])&&(o[r]={}),e.isUndefined(o[r][s])&&(o[r][s]={});var l=function(e,n){o[r][s].hasOwnProperty(e)||(o[r][s][e]=[]),t(n,o[r][s][e])&&(c=!0,o[r][s][e].push(n),u("ocLazyLoad.componentLoaded",[r,s,e]))};if(e.isString(a))l(a,n[2][1]);else{if(!e.isObject(a))return!1;e.forEach(a,function(n,r){e.isString(n)?l(n,a[1]):l(r,n)})}return c}function j(n,r,o,i){if(r){var a,s,u,c;for(a=0,s=r.length;s>a;a++)if(u=r[a],e.isArray(u)){if(null!==n){if(!n.hasOwnProperty(u[0]))throw new Error("unsupported provider "+u[0]);c=n[u[0]]}var l=$(u,o);if("invoke"!==u[1])l&&e.isDefined(c)&&c[u[1]].apply(c,u[2]);else{var d=function(n){var r=t.indexOf(o+"-"+n);(-1===r||i)&&(-1===r&&t.push(o+"-"+n),e.isDefined(c)&&c[u[1]].apply(c,u[2]))};if(e.isFunction(u[2][0]))d(u[2][0]);else if(e.isArray(u[2][0]))for(var f=0,h=u[2][0].length;h>f;f++)e.isFunction(u[2][0][f])&&d(u[2][0][f])}}}}function E(n){var r=null;return e.isString(n)?r=n:e.isObject(n)&&n.hasOwnProperty("name")&&e.isString(n.name)&&(r=n.name),r}function _(n){if(!e.isString(n))return!1;try{return g(n)}catch(r){if(/No module/.test(r)||r.message.indexOf("$injector:nomod")>-1)return!1}}var w={},O={$controllerProvider:d,$compileProvider:p,$filterProvider:m,$provide:f,$injector:v,$animateProvider:y},x=!1,b=!1,z=[],D={};z.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},this.config=function(n){e.isDefined(n.modules)&&(e.isArray(n.modules)?e.forEach(n.modules,function(e){w[e.name]=e}):w[n.modules.name]=n.modules),e.isDefined(n.debug)&&(x=n.debug),e.isDefined(n.events)&&(b=n.events)},this._init=function(o){if(0===i.length){var t=[o],a=["ng:app","ng-app","x-ng-app","data-ng-app"],u=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,c=function(e){return e&&t.push(e)};e.forEach(a,function(n){a[n]=!0,c(document.getElementById(n)),n=n.replace(":","\\:"),"undefined"!=typeof o[0]&&o[0].querySelectorAll&&(e.forEach(o[0].querySelectorAll("."+n),c),e.forEach(o[0].querySelectorAll("."+n+"\\:"),c),e.forEach(o[0].querySelectorAll("["+n+"]"),c))}),e.forEach(t,function(n){if(0===i.length){var r=" "+o.className+" ",t=u.exec(r);t?i.push((t[2]||"").replace(/\s+/g,",")):e.forEach(n.attributes,function(e){0===i.length&&a[e.name]&&i.push(e.value)})}})}0!==i.length||(n.jasmine||n.mocha)&&e.isDefined(e.mock)||console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");var l=function d(n){if(-1===r.indexOf(n)){r.push(n);var o=e.module(n);j(null,o._invokeQueue,n),j(null,o._configBlocks,n),e.forEach(o.requires,d)}};e.forEach(i,function(e){l(e)}),i=[],s.pop()};var S=function(n){try{return JSON.stringify(n)}catch(r){var o=[];return JSON.stringify(n,function(n,r){if(e.isObject(r)&&null!==r){if(-1!==o.indexOf(r))return;o.push(r)}return r})}},M=function(e){var n,r,o,t=0;if(0==e.length)return t;for(n=0,o=e.length;o>n;n++)r=e.charCodeAt(n),t=(t<<5)-t+r,t|=0;return t};this.$get=["$log","$rootElement","$rootScope","$cacheFactory","$q",function(n,t,a,c,d){function f(e){var r=d.defer();return n.error(e.message),r.reject(e),r.promise}var p,m=c("ocLazyLoad");return x||(n={},n.error=e.noop,n.warn=e.noop,n.info=e.noop),O.getInstanceInjector=function(){return p?p:p=t.data("$injector")||e.injector()},u=function(e,r){b&&a.$broadcast(e,r),x&&n.info(e,r)},{_broadcast:u,_$log:n,_getFilesCache:function(){return m},toggleWatch:function(e){e?s.push(!0):s.pop()},getModuleConfig:function(n){if(!e.isString(n))throw new Error("You need to give the name of the module to get");return w[n]?e.copy(w[n]):null},setModuleConfig:function(n){if(!e.isObject(n))throw new Error("You need to give the module config object to set");return w[n.name]=n,n},getModules:function(){return r},isLoaded:function(n){var o=function(e){var n=r.indexOf(e)>-1;return n||(n=!!_(e)),n};if(e.isString(n)&&(n=[n]),e.isArray(n)){var t,i;for(t=0,i=n.length;i>t;t++)if(!o(n[t]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},_getModuleName:E,_getModule:function(e){try{return g(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)&&(n.message='The module "'+S(e)+'" that you are trying to load does not exist. '+n.message),n}},moduleExists:_,_loadDependencies:function(n,r){var o,t,i,a=[],s=this;if(n=s._getModuleName(n),null===n)return d.when();try{o=s._getModule(n)}catch(u){return f(u)}return t=s.getRequires(o),e.forEach(t,function(o){if(e.isString(o)){var t=s.getModuleConfig(o);if(null===t)return void z.push(o);o=t,t.name=void 0}if(s.moduleExists(o.name))return i=o.files.filter(function(e){return s.getModuleConfig(o.name).files.indexOf(e)<0}),0!==i.length&&s._$log.warn('Module "',n,'" attempted to redefine configuration for dependency. "',o.name,'"\n Additional Files Loaded:',i),e.isDefined(s.filesLoader)?void a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)})):f(new Error("Error: New dependencies need to be loaded from external files ("+o.files+"), but no loader has been defined."));if(e.isArray(o)){var u=[];e.forEach(o,function(e){var n=s.getModuleConfig(e);null===n?u.push(e):n.files&&(u=u.concat(n.files))}),u.length>0&&(o={files:u})}else e.isObject(o)&&o.hasOwnProperty("name")&&o.name&&(s.setModuleConfig(o),z.push(o.name));if(e.isDefined(o.files)&&0!==o.files.length){if(!e.isDefined(s.filesLoader))return f(new Error('Error: the module "'+o.name+'" is defined in external files ('+o.files+"), but no loader has been defined."));a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)}))}}),d.all(a)},inject:function(n){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],t=this,a=d.defer();if(e.isDefined(n)&&null!==n){if(e.isArray(n)){var s=[];return e.forEach(n,function(e){s.push(t.inject(e,r,o))}),d.all(s)}t._addToLoadList(t._getModuleName(n),!0,o)}if(i.length>0){var u=i.slice(),c=function f(e){z.push(e),D[e]=a.promise,t._loadDependencies(e,r).then(function(){try{l=[],L(O,z,r)}catch(e){return t._$log.error(e.message),void a.reject(e)}i.length>0?f(i.shift()):a.resolve(u)},function(e){a.reject(e)})};c(i.shift())}else{if(r&&r.name&&D[r.name])return D[r.name];a.resolve()}return a.promise},getRequires:function(n){var o=[];return e.forEach(n.requires,function(e){-1===r.indexOf(e)&&o.push(e)}),o},_invokeQueue:j,_registerInvokeList:$,_register:L,_addToLoadList:h,_unregister:function(n){e.isDefined(n)&&e.isArray(n)&&e.forEach(n,function(e){o[e]=void 0})}}}],this._init(e.element(n.document))}]);var f=e.bootstrap;e.bootstrap=function(n,r,o){return e.forEach(r.slice(),function(e){h(e,!0,!0)}),f(n,r,o)};var h=function(n,r,o){(s.length>0||r)&&e.isString(n)&&-1===i.indexOf(n)&&(i.push(n),o&&a.push(n))},g=e.module;e.module=function(e,n,r){return h(e,!1,!0),g(e,n,r)},"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="oc.lazyLoad")}(angular,window),function(e){"use strict";e.module("oc.lazyLoad").directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse","$timeout",function(n,r,o,t,i){return{restrict:"A",terminal:!0,priority:1e3,compile:function(i,a){var s=i[0].innerHTML;return i.html(""),function(i,a,u){var c=t(u.ocLazyLoad);i.$watch(function(){return c(i)||u.ocLazyLoad},function(t){e.isDefined(t)&&n.load(t).then(function(){o.enter(s,a),r(a.contents())(i)})},!0)}}}}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q","$window","$interval",function(n,r,o,t){var i=!1,a=!1,s=o.document.getElementsByTagName("head")[0]||o.document.getElementsByTagName("body")[0];return n.buildElement=function(u,c,l){var d,f,h=r.defer(),g=n._getFilesCache(),p=function(e){var n=(new Date).getTime();return e.indexOf("?")>=0?"&"===e.substring(0,e.length-1)?e+"_dc="+n:e+"&_dc="+n:e+"?_dc="+n};switch(e.isUndefined(g.get(c))&&g.put(c,h.promise),u){case"css":d=o.document.createElement("link"),d.type="text/css",d.rel="stylesheet",d.href=l.cache===!1?p(c):c;break;case"js":d=o.document.createElement("script"),d.src=l.cache===!1?p(c):c;break;default:g.remove(c),h.reject(new Error('Requested type "'+u+'" is not known. Could not inject "'+c+'"'))}d.onload=d.onreadystatechange=function(e){d.readyState&&!/^c|loade/.test(d.readyState)||f||(d.onload=d.onreadystatechange=null,f=1,n._broadcast("ocLazyLoad.fileLoaded",c),h.resolve())},d.onerror=function(){g.remove(c),h.reject(new Error("Unable to load "+c))},d.async=l.serie?0:1;var m=s.lastChild;if(l.insertBefore){var v=e.element(e.isDefined(window.jQuery)?l.insertBefore:document.querySelector(l.insertBefore));v&&v.length>0&&(m=v[0])}if(m.parentNode.insertBefore(d,m),"css"==u){if(!i){var y=o.navigator.userAgent.toLowerCase();if(/iP(hone|od|ad)/.test(o.navigator.platform)){var L=o.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),$=parseFloat([parseInt(L[1],10),parseInt(L[2],10),parseInt(L[3]||0,10)].join("."));a=6>$}else if(y.indexOf("android")>-1){var j=parseFloat(y.slice(y.indexOf("android")+8));a=4.4>j}else if(y.indexOf("safari")>-1){var E=y.match(/version\/([\.\d]+)/i);a=E&&E[1]&&parseFloat(E[1])<6}}if(a)var _=1e3,w=t(function(){try{d.sheet.cssRules,t.cancel(w),d.onload()}catch(e){--_<=0&&d.onerror()}},20)}return h.promise},n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,r){return n.filesLoader=function(o){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=[],a=[],s=[],u=[],c=null,l=n._getFilesCache();n.toggleWatch(!0),e.extend(t,o);var d=function(r){var o,d=null;if(e.isObject(r)&&(d=r.type,r=r.path),c=l.get(r),e.isUndefined(c)||t.cache===!1){if(null!==(o=/^(css|less|html|htm|js)?(?=!)/.exec(r))&&(d=o[1],r=r.substr(o[1].length+1,r.length)),!d)if(null!==(o=/[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(r)))d=o[1];else{if(n.jsLoader.hasOwnProperty("ocLazyLoadLoader")||!n.jsLoader.hasOwnProperty("requirejs"))return void n._$log.error("File type could not be determined. "+r);d="js"}"css"!==d&&"less"!==d||-1!==i.indexOf(r)?"html"!==d&&"htm"!==d||-1!==a.indexOf(r)?"js"===d||-1===s.indexOf(r)?s.push(r):n._$log.error("File type is not valid. "+r):a.push(r):i.push(r)}else c&&u.push(c)};if(t.serie?d(t.files.shift()):e.forEach(t.files,function(e){d(e)}),i.length>0){var f=r.defer();n.cssLoader(i,function(r){e.isDefined(r)&&n.cssLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(r),f.reject(r)):f.resolve()},t),u.push(f.promise)}if(a.length>0){var h=r.defer();n.templatesLoader(a,function(r){e.isDefined(r)&&n.templatesLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(r),h.reject(r)):h.resolve()},t),u.push(h.promise)}if(s.length>0){var g=r.defer();n.jsLoader(s,function(r){e.isDefined(r)&&(n.jsLoader.hasOwnProperty("ocLazyLoadLoader")||n.jsLoader.hasOwnProperty("requirejs"))?(n._$log.error(r),g.reject(r)):g.resolve()},t),u.push(g.promise)}if(0===u.length){var p=r.defer(),m="Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";return n._$log.error(m),p.reject(m),p.promise}return t.serie&&t.files.length>0?r.all(u).then(function(){return n.filesLoader(o,t)}):r.all(u)["finally"](function(e){return n.toggleWatch(!1),e})},n.load=function(o){var t,i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=this,s=null,u=[],c=r.defer(),l=e.copy(o),d=e.copy(i);if(e.isArray(l))return e.forEach(l,function(e){u.push(a.load(e,d))}),r.all(u).then(function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise;if(e.isString(l)?(s=a.getModuleConfig(l),s||(s={files:[l]})):e.isObject(l)&&(s=e.isDefined(l.path)&&e.isDefined(l.type)?{files:[l]}:a.setModuleConfig(l)),null===s){var f=a._getModuleName(l);return t='Module "'+(f||"unknown")+'" is not configured, cannot load.',n._$log.error(t),c.reject(new Error(t)),c.promise}e.isDefined(s.template)&&(e.isUndefined(s.files)&&(s.files=[]),e.isString(s.template)?s.files.push(s.template):e.isArray(s.template)&&s.files.concat(s.template));var h=e.extend({},d,s);return e.isUndefined(s.files)&&e.isDefined(s.name)&&n.moduleExists(s.name)?n.inject(s.name,h,!0):(n.filesLoader(s,h).then(function(){n.inject(null,h).then(function(e){c.resolve(e)},function(e){c.reject(e)})},function(e){c.reject(e)}),c.promise)},n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,r){return n.cssLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement("css",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.cssLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,r){return n.jsLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement("js",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.jsLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$templateCache","$q","$http",function(n,r,o,t){return n.templatesLoader=function(i,a,s){var u=[],c=n._getFilesCache();return e.forEach(i,function(n){var i=o.defer();u.push(i.promise),t.get(n,s).success(function(o){e.isString(o)&&o.length>0&&e.forEach(e.element(o),function(e){"SCRIPT"===e.nodeName&&"text/ng-template"===e.type&&r.put(e.id,e.innerHTML)}),e.isUndefined(c.get(n))&&c.put(n,!0),i.resolve()}).error(function(e){i.reject(new Error('Unable to load template file "'+n+'": '+e))})}),o.all(u).then(function(){a()},function(e){a(e)})},n.templatesLoader.ocLazyLoadLoader=!0,n}])}])}(angular),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,n){var r;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),t=o.length>>>0;if(0===t)return-1;var i=+n||0;if(Math.abs(i)===1/0&&(i=0),i>=t)return-1;for(r=Math.max(i>=0?i:t-Math.abs(i),0);t>r;){if(r in o&&o[r]===e)return r;r++}return-1});
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 1.3.3 - 2016-05-22
 * License: MIT
 */angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/backdrop.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(a,b,c,d){var e=d.has("$animateCss")?d.get("$animateCss"):null;return{link:function(d,f,g){function h(){f.hasClass("collapse")&&f.hasClass("in")||b.resolve(l(d)).then(function(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start()["finally"](i):a.addClass(f,"in",{to:{height:f[0].scrollHeight+"px"}}).then(i)})}function i(){f.removeClass("collapsing").addClass("collapse").css({height:"auto"}),m(d)}function j(){return f.hasClass("collapse")||f.hasClass("in")?void b.resolve(n(d)).then(function(){f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),e?e(f,{removeClass:"in",to:{height:"0"}}).start()["finally"](k):a.removeClass(f,"in",{to:{height:"0"}}).then(k)}):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse"),o(d)}var l=c(g.expanding),m=c(g.expanded),n=c(g.collapsing),o=c(g.collapsed);d.$eval(g.uibCollapse)||f.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css({height:"auto"}),d.$watch(g.uibCollapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass||"panel-default",a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)};var e="accordiongroup-"+a.$id+"-"+Math.floor(1e4*Math.random());a.headingId=e+"-tab",a.panelId=e+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){function a(){return"uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"}return{require:"^uibAccordionGroup",link:function(b,c,d,e){b.$watch(function(){return e[d.uibAccordionTransclude]},function(b){if(b){var d=angular.element(c[0].querySelector(a()));d.html(""),d.append(b)}})}}}),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$interpolate","$timeout",function(a,b,c,d){a.closeable=!!b.close;var e=angular.isDefined(b.dismissOnTimeout)?c(b.dismissOnTimeout)(a.$parent):null;e&&d(function(){a.close()},parseInt(e,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"uib/template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",["$parse",function(a){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(b,c,d,e){var f=e[0],g=e[1],h=a(d.uibUncheckable);c.find("input").css({display:"none"}),g.$render=function(){c.toggleClass(f.activeClass,angular.equals(g.$modelValue,b.$eval(d.uibBtnRadio)))},c.on(f.toggleEvent,function(){if(!d.disabled){var a=c.hasClass(f.activeClass);a&&!angular.isDefined(d.uncheckable)||b.$apply(function(){g.$setViewValue(a?null:b.$eval(d.uibBtnRadio)),g.$render()})}}),d.uibUncheckable&&b.$watch(h,function(a){d.$set("uncheckable",a?"":void 0)})}}}]).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(a,b,c,d,e){function f(){for(;t.length;)t.shift()}function g(a){for(var b=0;b<q.length;b++)q[b].slide.active=b===a}function h(c,d,i){if(!u){if(angular.extend(c,{direction:i}),angular.extend(q[s].slide||{},{direction:i}),e.enabled(b)&&!a.$currentTransition&&q[d].element&&p.slides.length>1){q[d].element.data(r,c.direction);var j=p.getCurrentIndex();angular.isNumber(j)&&q[j].element&&q[j].element.data(r,c.direction),a.$currentTransition=!0,e.on("addClass",q[d].element,function(b,c){if("close"===c&&(a.$currentTransition=null,e.off("addClass",b),t.length)){var d=t.pop().slide,g=d.index,i=g>p.getCurrentIndex()?"next":"prev";f(),h(d,g,i)}})}a.active=c.index,s=c.index,g(d),l()}}function i(a){for(var b=0;b<q.length;b++)if(q[b].slide===a)return b}function j(){n&&(c.cancel(n),n=null)}function k(b){b.length||(a.$currentTransition=null,f())}function l(){j();var b=+a.interval;!isNaN(b)&&b>0&&(n=c(m,b))}function m(){var b=+a.interval;o&&!isNaN(b)&&b>0&&q.length?a.next():a.pause()}var n,o,p=this,q=p.slides=a.slides=[],r="uib-slideDirection",s=a.active,t=[],u=!1;p.addSlide=function(b,c){q.push({slide:b,element:c}),q.sort(function(a,b){return+a.slide.index-+b.slide.index}),(b.index===a.active||1===q.length&&!angular.isNumber(a.active))&&(a.$currentTransition&&(a.$currentTransition=null),s=b.index,a.active=b.index,g(s),p.select(q[i(b)]),1===q.length&&a.play())},p.getCurrentIndex=function(){for(var a=0;a<q.length;a++)if(q[a].slide.index===s)return a},p.next=a.next=function(){var b=(p.getCurrentIndex()+1)%q.length;return 0===b&&a.noWrap()?void a.pause():p.select(q[b],"next")},p.prev=a.prev=function(){var b=p.getCurrentIndex()-1<0?q.length-1:p.getCurrentIndex()-1;return a.noWrap()&&b===q.length-1?void a.pause():p.select(q[b],"prev")},p.removeSlide=function(b){var c=i(b),d=t.indexOf(q[c]);-1!==d&&t.splice(d,1),q.splice(c,1),q.length>0&&s===c?c>=q.length?(s=q.length-1,a.active=s,g(s),p.select(q[q.length-1])):(s=c,a.active=s,g(s),p.select(q[c])):s>c&&(s--,a.active=s),0===q.length&&(s=null,a.active=null,f())},p.select=a.select=function(b,c){var d=i(b.slide);void 0===c&&(c=d>p.getCurrentIndex()?"next":"prev"),b.slide.index===s||a.$currentTransition?b&&b.slide.index!==s&&a.$currentTransition&&t.push(q[d]):h(b.slide,d,c)},a.indexOfSlide=function(a){return+a.slide.index},a.isActive=function(b){return a.active===b.slide.index},a.isPrevDisabled=function(){return 0===a.active&&a.noWrap()},a.isNextDisabled=function(){return a.active===q.length-1&&a.noWrap()},a.pause=function(){a.noPause||(o=!1,j())},a.play=function(){o||(o=!0,l())},a.$on("$destroy",function(){u=!0,j()}),a.$watch("noTransition",function(a){e.enabled(b,!a)}),a.$watch("interval",l),a.$watchCollection("slides",k),a.$watch("active",function(a){if(angular.isNumber(a)&&s!==a){for(var b=0;b<q.length;b++)if(q[b].slide.index===a){a=b;break}var c=q[a];c&&(g(a),p.select(q[a]),s=a)}})}]).directive("uibCarousel",function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",function(){return{require:"^uibCarousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)})}}}).animation(".item",["$animateCss",function(a){function b(a,b,c){a.removeClass(b),c&&c()}var c="uib-slideDirection";return{beforeAddClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i+" "+h,f);return d.addClass(h),a(d,{addClass:i}).start().done(j),function(){g=!0}}f()},beforeRemoveClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i,f);return a(d,{addClass:i}).start().done(j),function(){g=!0}}f()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter",function(a,b,c,d){function e(a,b){var c=[],e=a.split(""),f=a.indexOf("'");if(f>-1){var g=!1;a=a.split("");for(var h=f;h<a.length;h++)g?("'"===a[h]&&(h+1<a.length&&"'"===a[h+1]?(a[h+1]="$",e[h+1]=""):(e[h]="",g=!1)),a[h]="$"):"'"===a[h]&&(a[h]="$",e[h]="",g=!0);a=a.join("")}return angular.forEach(n,function(d){var f=a.indexOf(d.key);if(f>-1){a=a.split(""),e[f]="("+d.regex+")",a[f]="$";for(var g=f+1,h=f+d.key.length;h>g;g++)e[g]="",a[g]="$";a=a.join(""),c.push({index:f,key:d.key,apply:d[b],matcher:d.regex})}}),{regex:new RegExp("^"+e.join("")+"$"),map:d(c,"index")}}function f(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}function g(a){return parseInt(a,10)}function h(a,b){return a&&b?l(a,b):a}function i(a,b){return a&&b?l(a,b,!0):a}function j(a,b){a=a.replace(/:/g,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function k(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function l(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset(),e=j(b,d);return k(a,c*(e-d))}var m,n,o=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){m=b.id,this.parsers={},this.formatters={},n=[{key:"yyyy",regex:"\\d{4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(a){a=+a,this.year=69>a?a+2e3:a+1900},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){var b=a.getMonth();return/^[0-9]$/.test(b)?c(a,"MM"):c(a,"M")}},{key:"MMMM",regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)},formatter:function(a){return c(a,"MMMM")}},{key:"MMM",regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)},formatter:function(a){return c(a,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"M")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){var b=a.getDate();return/^[1-9]$/.test(b)?c(a,"dd"):c(a,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"d")}},{key:"EEEE",regex:b.DATETIME_FORMATS.DAY.join("|"),formatter:function(a){return c(a,"EEEE")}},{key:"EEE",regex:b.DATETIME_FORMATS.SHORTDAY.join("|"),formatter:function(a){return c(a,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"hh")}},{key:"H",regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"m")}},{key:"sss",regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a},formatter:function(a){return c(a,"sss")}},{key:"ss",regex:"[0-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"s")}},{key:"a",regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)},formatter:function(a){return c(a,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(a){var b=a.match(/([+-])(\d{2})(\d{2})/),c=b[1],d=b[2],e=b[3];this.hours+=g(c+d),this.minutes+=g(c+e)},formatter:function(a){return c(a,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(a){return c(a,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(a){return c(a,"w")}},{key:"GGGG",regex:b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),formatter:function(a){return c(a,"GGGG")}},{key:"GGG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GGG")}},{key:"GG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GG")}},{key:"G",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"G")}}]},this.init(),this.filter=function(a,c){if(!angular.isDate(a)||isNaN(a)||!c)return"";c=b.DATETIME_FORMATS[c]||c,b.id!==m&&this.init(),this.formatters[c]||(this.formatters[c]=e(c,"formatter"));var d=this.formatters[c],f=d.map,g=c;return f.reduce(function(b,c,d){var e=g.match(new RegExp("(.*)"+c.key));e&&angular.isString(e[1])&&(b+=e[1],g=g.replace(e[1]+c.key,""));var h=d===f.length-1?g:"";return c.apply?b+c.apply.call(null,a)+h:b+h},"")},this.parse=function(c,d,g){if(!angular.isString(c)||!d)return c;d=b.DATETIME_FORMATS[d]||d,d=d.replace(o,"\\$&"),b.id!==m&&this.init(),this.parsers[d]||(this.parsers[d]=e(d,"apply"));var h=this.parsers[d],i=h.regex,j=h.map,k=c.match(i),l=!1;if(k&&k.length){var n,p;angular.isDate(g)&&!isNaN(g.getTime())?n={year:g.getFullYear(),month:g.getMonth(),date:g.getDate(),hours:g.getHours(),minutes:g.getMinutes(),seconds:g.getSeconds(),milliseconds:g.getMilliseconds()}:(g&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var q=1,r=k.length;r>q;q++){var s=j[q-1];"Z"===s.matcher&&(l=!0),s.apply&&s.apply.call(n,k[q])}var t=l?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,u=l?Date.prototype.setUTCHours:Date.prototype.setHours;return f(n.year,n.month,n.date)&&(!angular.isDate(g)||isNaN(g.getTime())||l?(p=new Date(0),t.call(p,n.year,n.month,n.date),u.call(p,n.hours||0,n.minutes||0,n.seconds||0,n.milliseconds||0)):(p=new Date(g),t.call(p,n.year,n.month,n.date),u.call(p,n.hours,n.minutes,n.seconds,n.milliseconds))),p}},this.toTimezone=h,this.fromTimezone=i,this.timezoneToOffset=j,this.addDateMinutes=k,this.convertTimezoneToLocal=l}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(a){var b=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,c=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(d,e){function f(a,b,c){i.push(a),j.push({scope:a,element:b}),o.forEach(function(b,c){g(b,a)}),a.$on("$destroy",h)}function g(b,d){var e=b.match(c),f=d.$eval(e[1]),g=e[2],h=k[b];if(!h){var i=function(b){var c=null;j.some(function(a){var d=a.scope.$eval(m);return d===b?(c=a,!0):void 0}),h.lastActivated!==c&&(h.lastActivated&&a.removeClass(h.lastActivated.element,f),c&&a.addClass(c.element,f),h.lastActivated=c)};k[b]=h={lastActivated:null,scope:d,watchFn:i,compareWithExp:g,watcher:d.$watch(g,i)}}h.watchFn(d.$eval(g))}function h(a){var b=a.targetScope,c=i.indexOf(b);if(i.splice(c,1),j.splice(c,1),i.length){var d=i[0];angular.forEach(k,function(a){a.scope===b&&(a.watcher=d.$watch(a.compareWithExp,a.watchFn),a.scope=d)})}else k={}}var i=[],j=[],k={},l=e.uibIsClass.match(b),m=l[2],n=l[1],o=n.split(",");return f}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(a,b,c,d,e,f,g,h,i,j,k){function l(b){a.datepickerMode=b,a.datepickerOptions.datepickerMode=b}var m=this,n={$setViewValue:angular.noop},o={},p=[];!!b.datepickerOptions;a.datepickerOptions||(a.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(b){switch(b){case"customClass":case"dateDisabled":a[b]=a.datepickerOptions[b]||angular.noop;break;case"datepickerMode":a.datepickerMode=angular.isDefined(a.datepickerOptions.datepickerMode)?a.datepickerOptions.datepickerMode:h.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":m[b]=angular.isDefined(a.datepickerOptions[b])?d(a.datepickerOptions[b])(a.$parent):h[b];break;case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":m[b]=angular.isDefined(a.datepickerOptions[b])?a.datepickerOptions[b]:h[b];break;case"startingDay":angular.isDefined(a.datepickerOptions.startingDay)?m.startingDay=a.datepickerOptions.startingDay:angular.isNumber(h.startingDay)?m.startingDay=h.startingDay:m.startingDay=(e.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":a.$watch("datepickerOptions."+b,function(a){a?angular.isDate(a)?m[b]=k.fromTimezone(new Date(a),o.timezone):(i&&f.warn("Literal date support has been deprecated, please switch to date object usage"),m[b]=new Date(g(a,"medium"))):m[b]=h[b]?k.fromTimezone(new Date(h[b]),o.timezone):null,m.refreshView()});break;case"maxMode":case"minMode":a.datepickerOptions[b]?a.$watch(function(){return a.datepickerOptions[b]},function(c){m[b]=a[b]=angular.isDefined(c)?c:datepickerOptions[b],("minMode"===b&&m.modes.indexOf(a.datepickerOptions.datepickerMode)<m.modes.indexOf(m[b])||"maxMode"===b&&m.modes.indexOf(a.datepickerOptions.datepickerMode)>m.modes.indexOf(m[b]))&&(a.datepickerMode=m[b],a.datepickerOptions.datepickerMode=m[b])}):m[b]=a[b]=h[b]||null}}),a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),a.disabled=angular.isDefined(b.disabled)||!1,angular.isDefined(b.ngDisabled)&&p.push(a.$parent.$watch(b.ngDisabled,function(b){a.disabled=b,m.refreshView()})),a.isActive=function(b){return 0===m.compare(b.date,m.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(b){n=b,o=b.$options||h.ngModelOptions,a.datepickerOptions.initDate?(m.activeDate=k.fromTimezone(a.datepickerOptions.initDate,o.timezone)||new Date,a.$watch("datepickerOptions.initDate",function(a){a&&(n.$isEmpty(n.$modelValue)||n.$invalid)&&(m.activeDate=k.fromTimezone(a,o.timezone),m.refreshView())})):m.activeDate=new Date;var c=n.$modelValue?new Date(n.$modelValue):new Date;this.activeDate=isNaN(c)?k.fromTimezone(new Date,o.timezone):k.fromTimezone(c,o.timezone),n.$render=function(){m.render()}},this.render=function(){if(n.$viewValue){var a=new Date(n.$viewValue),b=!isNaN(a);b?this.activeDate=k.fromTimezone(a,o.timezone):j||f.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){a.selectedDt=null,this._refreshView(),a.activeDt&&(a.activeDateId=a.activeDt.uid);var b=n.$viewValue?new Date(n.$viewValue):null;b=k.fromTimezone(b,o.timezone),n.$setValidity("dateDisabled",!b||this.element&&!this.isDisabled(b))}},this.createDateObject=function(b,c){var d=n.$viewValue?new Date(n.$viewValue):null;d=k.fromTimezone(d,o.timezone);var e=new Date;e=k.fromTimezone(e,o.timezone);var f=this.compare(b,e),g={date:b,label:k.filter(b,c),selected:d&&0===this.compare(b,d),disabled:this.isDisabled(b),past:0>f,current:0===f,future:f>0,customClass:this.customClass(b)||null};return d&&0===this.compare(b,d)&&(a.selectedDt=g),m.activeDate&&0===this.compare(g.date,m.activeDate)&&(a.activeDt=g),g},this.isDisabled=function(b){return a.disabled||this.minDate&&this.compare(b,this.minDate)<0||this.maxDate&&this.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===m.minMode){var c=n.$viewValue?k.fromTimezone(new Date(n.$viewValue),o.timezone):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),c=k.toTimezone(c,o.timezone),n.$setViewValue(c),n.$render()}else m.activeDate=b,l(m.modes[m.modes.indexOf(a.datepickerMode)-1]),a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus")},a.move=function(a){var b=m.activeDate.getFullYear()+a*(m.step.years||0),c=m.activeDate.getMonth()+a*(m.step.months||0);m.activeDate.setFullYear(b,c,1),m.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===m.maxMode&&1===b||a.datepickerMode===m.minMode&&-1===b||(l(m.modes[m.modes.indexOf(a.datepickerMode)+b]),a.$emit("uib:datepicker.mode"))},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var q=function(){m.element[0].focus()};a.$on("uib:datepicker.focus",q),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey&&!a.disabled)if(b.preventDefault(),m.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(m.isDisabled(m.activeDate))return;a.select(m.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(m.handleKeyDown(c,b),m.refreshView()):a.toggleMode("up"===c?1:-1)},a.$on("$destroy",function(){for(;p.length;)p.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(b.getFullYear(),b.getMonth(),b.getDate());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth()),d=new Date(b.getFullYear(),b.getMonth());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/f,10)*f+1}var e,f;this.element=b,this.yearpickerInit=function(){e=this.yearColumns,f=this.yearRows*e,this.step={years:f}},this._refreshView=function(){for(var b,c=new Array(f),g=0,h=d(this.activeDate.getFullYear());f>g;g++)b=new Date(this.activeDate),b.setFullYear(h+g,0,1),c[g]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=this.split(c,e),a.columns=e},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=e:"right"===a?c+=1:"down"===a?c+=e:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*f:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+f-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/day.html"},require:["^uibDatepicker","uibDaypicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/month.html"},require:["^uibDatepicker","uibMonthpicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/year.html"},require:["^uibDatepicker","uibYearpicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){var c,d,e={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},f={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},g=/(HTML|BODY)/;return{getRawNode:function(a){return a.nodeName?a:a[0]||a},parseStyle:function(a){return a=parseFloat(a),isFinite(a)?a:0},offsetParent:function(c){function d(a){return"static"===(b.getComputedStyle(a).position||"static")}c=this.getRawNode(c);for(var e=c.offsetParent||a[0].documentElement;e&&e!==a[0].documentElement&&d(e);)e=e.offsetParent;return e||a[0].documentElement},scrollbarWidth:function(e){if(e){if(angular.isUndefined(d)){var f=a.find("body");f.addClass("uib-position-body-scrollbar-measure"),d=b.innerWidth-f[0].clientWidth,d=isFinite(d)?d:0,f.removeClass("uib-position-body-scrollbar-measure")}return d}if(angular.isUndefined(c)){var g=angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g),c=g[0].offsetWidth-g[0].clientWidth,c=isFinite(c)?c:0,g.remove()}return c},scrollbarPadding:function(a){a=this.getRawNode(a);var c=b.getComputedStyle(a),d=this.parseStyle(c.paddingRight),e=this.parseStyle(c.paddingBottom),f=this.scrollParent(a,!1,!0),h=this.scrollbarWidth(f,g.test(f.tagName));return{scrollbarWidth:h,widthOverflow:f.scrollWidth>f.clientWidth,right:d+h,originalRight:d,heightOverflow:f.scrollHeight>f.clientHeight,
bottom:e+h,originalBottom:e}},isScrollable:function(a,c){a=this.getRawNode(a);var d=c?e.hidden:e.normal,f=b.getComputedStyle(a);return d.test(f.overflow+f.overflowY+f.overflowX)},scrollParent:function(c,d,f){c=this.getRawNode(c);var g=d?e.hidden:e.normal,h=a[0].documentElement,i=b.getComputedStyle(c);if(f&&g.test(i.overflow+i.overflowY+i.overflowX))return c;var j="absolute"===i.position,k=c.parentElement||h;if(k===h||"fixed"===i.position)return h;for(;k.parentElement&&k!==h;){var l=b.getComputedStyle(k);if(j&&"static"!==l.position&&(j=!1),!j&&g.test(l.overflow+l.overflowY+l.overflowX))break;k=k.parentElement}return k},position:function(c,d){c=this.getRawNode(c);var e=this.offset(c);if(d){var f=b.getComputedStyle(c);e.top-=this.parseStyle(f.marginTop),e.left-=this.parseStyle(f.marginLeft)}var g=this.offsetParent(c),h={top:0,left:0};return g!==a[0].documentElement&&(h=this.offset(g),h.top+=g.clientTop-g.scrollTop,h.left+=g.clientLeft-g.scrollLeft),{width:Math.round(angular.isNumber(e.width)?e.width:c.offsetWidth),height:Math.round(angular.isNumber(e.height)?e.height:c.offsetHeight),top:Math.round(e.top-h.top),left:Math.round(e.left-h.left)}},offset:function(c){c=this.getRawNode(c);var d=c.getBoundingClientRect();return{width:Math.round(angular.isNumber(d.width)?d.width:c.offsetWidth),height:Math.round(angular.isNumber(d.height)?d.height:c.offsetHeight),top:Math.round(d.top+(b.pageYOffset||a[0].documentElement.scrollTop)),left:Math.round(d.left+(b.pageXOffset||a[0].documentElement.scrollLeft))}},viewportOffset:function(c,d,e){c=this.getRawNode(c),e=e!==!1;var f=c.getBoundingClientRect(),g={top:0,left:0,bottom:0,right:0},h=d?a[0].documentElement:this.scrollParent(c),i=h.getBoundingClientRect();if(g.top=i.top+h.clientTop,g.left=i.left+h.clientLeft,h===a[0].documentElement&&(g.top+=b.pageYOffset,g.left+=b.pageXOffset),g.bottom=g.top+h.clientHeight,g.right=g.left+h.clientWidth,e){var j=b.getComputedStyle(h);g.top+=this.parseStyle(j.paddingTop),g.bottom-=this.parseStyle(j.paddingBottom),g.left+=this.parseStyle(j.paddingLeft),g.right-=this.parseStyle(j.paddingRight)}return{top:Math.round(f.top-g.top),bottom:Math.round(g.bottom-f.bottom),left:Math.round(f.left-g.left),right:Math.round(g.right-f.right)}},parsePlacement:function(a){var b=f.auto.test(a);return b&&(a=a.replace(f.auto,"")),a=a.split("-"),a[0]=a[0]||"top",f.primary.test(a[0])||(a[0]="top"),a[1]=a[1]||"center",f.secondary.test(a[1])||(a[1]="center"),b?a[2]=!0:a[2]=!1,a},positionElements:function(a,c,d,e){a=this.getRawNode(a),c=this.getRawNode(c);var g=angular.isDefined(c.offsetWidth)?c.offsetWidth:c.prop("offsetWidth"),h=angular.isDefined(c.offsetHeight)?c.offsetHeight:c.prop("offsetHeight");d=this.parsePlacement(d);var i=e?this.offset(a):this.position(a),j={top:0,left:0,placement:""};if(d[2]){var k=this.viewportOffset(a,e),l=b.getComputedStyle(c),m={width:g+Math.round(Math.abs(this.parseStyle(l.marginLeft)+this.parseStyle(l.marginRight))),height:h+Math.round(Math.abs(this.parseStyle(l.marginTop)+this.parseStyle(l.marginBottom)))};if(d[0]="top"===d[0]&&m.height>k.top&&m.height<=k.bottom?"bottom":"bottom"===d[0]&&m.height>k.bottom&&m.height<=k.top?"top":"left"===d[0]&&m.width>k.left&&m.width<=k.right?"right":"right"===d[0]&&m.width>k.right&&m.width<=k.left?"left":d[0],d[1]="top"===d[1]&&m.height-i.height>k.bottom&&m.height-i.height<=k.top?"bottom":"bottom"===d[1]&&m.height-i.height>k.top&&m.height-i.height<=k.bottom?"top":"left"===d[1]&&m.width-i.width>k.right&&m.width-i.width<=k.left?"right":"right"===d[1]&&m.width-i.width>k.left&&m.width-i.width<=k.right?"left":d[1],"center"===d[1])if(f.vertical.test(d[0])){var n=i.width/2-g/2;k.left+n<0&&m.width-i.width<=k.right?d[1]="left":k.right+n<0&&m.width-i.width<=k.left&&(d[1]="right")}else{var o=i.height/2-m.height/2;k.top+o<0&&m.height-i.height<=k.bottom?d[1]="top":k.bottom+o<0&&m.height-i.height<=k.top&&(d[1]="bottom")}}switch(d[0]){case"top":j.top=i.top-h;break;case"bottom":j.top=i.top+i.height;break;case"left":j.left=i.left-g;break;case"right":j.left=i.left+i.width}switch(d[1]){case"top":j.top=i.top;break;case"bottom":j.top=i.top+i.height-h;break;case"left":j.left=i.left;break;case"right":j.left=i.left+i.width-g;break;case"center":f.vertical.test(d[0])?j.left=i.left+i.width/2-g/2:j.top=i.top+i.height/2-h/2}return j.top=Math.round(j.top),j.left=Math.round(j.left),j.placement="center"===d[1]?d[0]:d[0]+"-"+d[1],j},positionArrow:function(a,c){a=this.getRawNode(a);var d=a.querySelector(".tooltip-inner, .popover-inner");if(d){var e=angular.element(d).hasClass("tooltip-inner"),g=e?a.querySelector(".tooltip-arrow"):a.querySelector(".arrow");if(g){var h={top:"",bottom:"",left:"",right:""};if(c=this.parsePlacement(c),"center"===c[1])return void angular.element(g).css(h);var i="border-"+c[0]+"-width",j=b.getComputedStyle(g)[i],k="border-";k+=f.vertical.test(c[0])?c[0]+"-"+c[1]:c[1]+"-"+c[0],k+="-radius";var l=b.getComputedStyle(e?d:a)[k];switch(c[0]){case"top":h.bottom=e?"0":"-"+j;break;case"bottom":h.top=e?"0":"-"+j;break;case"left":h.right=e?"0":"-"+j;break;case"right":h.left=e?"0":"-"+j}h[c[1]]=l,angular.element(g).css(h)}}}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(b){var c=l.parse(b,w,a.date);if(isNaN(c))for(var d=0;d<I.length;d++)if(c=l.parse(b,I[d],a.date),!isNaN(c))return c;return c}function r(a){if(angular.isNumber(a)&&(a=new Date(a)),!a)return null;if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=q(a);if(!isNaN(b))return l.toTimezone(b,J)}return F.$options&&F.$options.allowInvalid?a:void 0}function s(a,b){var d=a||b;return c.ngRequired||d?(angular.isNumber(d)&&(d=new Date(d)),d?angular.isDate(d)&&!isNaN(d)?!0:angular.isString(d)?!isNaN(q(b)):!1:!0):!0}function t(c){if(a.isOpen||!a.disabled){var d=H[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}}function u(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}function v(){if(a.isOpen){var d=angular.element(H[0].querySelector(".uib-datepicker-popup")),e=c.popupPlacement?c.popupPlacement:m.placement,f=j.positionElements(b,d,e,y);d.css({top:f.top+"px",left:f.left+"px"}),d.hasClass("uib-position-measure")&&d.removeClass("uib-position-measure")}}var w,x,y,z,A,B,C,D,E,F,G,H,I,J,K=!1,L=[];this.init=function(e){if(F=e,G=e.$options,x=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):m.closeOnDateSelection,y=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):m.appendToBody,z=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):m.onOpenFocus,A=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:m.datepickerPopupTemplateUrl,B=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:m.datepickerTemplateUrl,I=angular.isDefined(c.altInputFormats)?a.$parent.$eval(c.altInputFormats):m.altInputFormats,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):m.showButtonBar,m.html5Types[c.type]?(w=m.html5Types[c.type],K=!0):(w=c.uibDatepickerPopup||m.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||m.datepickerPopup;if(c!==w&&(w=c,F.$modelValue=null,!w))throw new Error("uibDatepickerPopup must have a date format specified.")})),!w)throw new Error("uibDatepickerPopup must have a date format specified.");if(K&&c.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");C=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),G?(J=G.timezone,a.ngModelOptions=angular.copy(G),a.ngModelOptions.timezone=null,a.ngModelOptions.updateOnDefault===!0&&(a.ngModelOptions.updateOn=a.ngModelOptions.updateOn?a.ngModelOptions.updateOn+" default":"default"),C.attr("ng-model-options","ngModelOptions")):J=null,C.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":A}),D=angular.element(C.children()[0]),D.attr("template-url",B),a.datepickerOptions||(a.datepickerOptions={}),K&&"month"===c.type&&(a.datepickerOptions.datepickerMode="month",a.datepickerOptions.minMode="month"),D.attr("datepicker-options","datepickerOptions"),K?F.$formatters.push(function(b){return a.date=l.fromTimezone(b,J),b}):(F.$$parserName="date",F.$validators.date=s,F.$parsers.unshift(r),F.$formatters.push(function(b){return F.$isEmpty(b)?(a.date=b,b):(angular.isNumber(b)&&(b=new Date(b)),a.date=l.fromTimezone(b,J),l.filter(a.date,w))})),F.$viewChangeListeners.push(function(){a.date=q(F.$viewValue)}),b.on("keydown",u),H=d(C)(a),C.remove(),y?h.find("body").append(H):b.after(H),a.$on("$destroy",function(){for(a.isOpen===!0&&(i.$$phase||a.$apply(function(){a.isOpen=!1})),H.remove(),b.off("keydown",u),h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v);L.length;)L.shift()()})},a.getText=function(b){return a[b+"Text"]||m[b+"Text"]},a.isDisabled=function(b){"today"===b&&(b=l.fromTimezone(new Date,J));var c={};return angular.forEach(["minDate","maxDate"],function(b){a.datepickerOptions[b]?angular.isDate(a.datepickerOptions[b])?c[b]=l.fromTimezone(new Date(a.datepickerOptions[b]),J):(p&&e.warn("Literal date support has been deprecated, please switch to date object usage"),c[b]=new Date(k(a.datepickerOptions[b],"medium"))):c[b]=null}),a.datepickerOptions&&c.minDate&&a.compare(b,c.minDate)<0||c.maxDate&&a.compare(b,c.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?l.filter(a.date,w):null;b.val(d),F.$setViewValue(d),x&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(c.stopPropagation(),a.isOpen=!1,b[0].focus())},a.select=function(b,c){if(c.stopPropagation(),"today"===b){var d=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(d.getFullYear(),d.getMonth(),d.getDate())):b=new Date(d.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(c){c.stopPropagation(),a.isOpen=!1,b[0].focus()},a.disabled=angular.isDefined(c.disabled)||!1,c.ngDisabled&&L.push(a.$parent.$watch(f(c.ngDisabled),function(b){a.disabled=b})),a.$watch("isOpen",function(d){d?a.disabled?a.isOpen=!1:n(function(){v(),z&&a.$broadcast("uib:datepicker.focus"),h.on("click",t);var d=c.popupPlacement?c.popupPlacement:m.placement;y||j.parsePlacement(d)[2]?(E=E||angular.element(j.scrollParent(b)),E&&E.on("scroll",v)):E=null,angular.element(g).on("resize",v)},0,!1):(h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v))}),a.$on("uib:datepicker.mode",function(){n(v,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(a){return function(b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments);d&&a.cancel(d),d=a(function(){b.apply(e,f)},c)}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b,f){c||(a.on("click",d),f.on("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b,f){c===b&&(c=null,a.off("click",d),f.off("keydown",e))};var d=function(a){if(c&&!(a&&"disabled"===c.getAutoClose()||a&&3===a.which)){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(a.stopPropagation(),c.focusToggleElement(),d()):c.isKeynavEnabled()&&-1!==[38,40].indexOf(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.appendToOpenClass,q=e.openClass,r=angular.noop,s=c.onToggle?d(c.onToggle):angular.noop,t=!1,u=null,v=!1,w=i.find("body");b.addClass("dropdown"),this.init=function(){if(c.isOpen&&(m=d(c.isOpen),r=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),angular.isDefined(c.dropdownAppendTo)){var e=d(c.dropdownAppendTo)(o);e&&(u=angular.element(e))}t=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.keyboardNav),t&&!u&&(u=w),u&&n.dropdownMenu&&(u.append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen,angular.isFunction(r)&&r(o,o.isOpen),o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return v},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):b.find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(u&&n.dropdownMenu){var e,i,m,v=h.positionElements(b,n.dropdownMenu,"bottom-left",!0);if(e={top:v.top+"px",display:c?"block":"none"},i=n.dropdownMenu.hasClass("dropdown-menu-right"),i?(e.left="auto",m=h.scrollbarWidth(!0),e.right=window.innerWidth-m-(v.left+b.prop("offsetWidth"))+"px"):(e.left=v.left+"px",e.right="auto"),!t){var w=h.offset(u);e.top=v.top-w.top+"px",i?e.right=window.innerWidth-(v.left-w.left+b.prop("offsetWidth"))+"px":e.left=v.left-w.left+"px"}n.dropdownMenu.css(e)}var x=u?u:b,y=x.hasClass(u?p:q);if(y===!c&&g[c?"addClass":"removeClass"](x,u?p:q).then(function(){angular.isDefined(c)&&c!==d&&s(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o,b);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var z=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(z),n.dropdownMenu=z}f.close(o,b),n.selectedOption=null}angular.isFunction(r)&&r(a,c)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b===a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b===a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap","ui.bootstrap.position"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).provider("$uibResolve",function(){var a=this;this.resolver=null,this.setResolver=function(a){this.resolver=a},this.$get=["$injector","$q",function(b,c){var d=a.resolver?b.get(a.resolver):null;return{resolve:function(a,e,f,g){if(d)return d.resolve(a,e,f,g);var h=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?h.push(c.resolve(b.invoke(a))):angular.isString(a)?h.push(c.resolve(b.get(a))):h.push(c.resolve(a))}),c.all(h).then(function(b){var c={},d=0;return angular.forEach(a,function(a,e){c[e]=b[d++]}),c})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,e){e.modalInClass&&(a.addClass(d,e.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(c,f){var g=f();b.modalOptions.animation?a.removeClass(d,e.modalInClass).then(g):g()}))}return{replace:!0,templateUrl:"uib/template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(a,b,c,d){return{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/modal/window.html"},link:function(e,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),e.size=g.size,e.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",e.close),e.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"===a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=c(f,{addClass:g.modalInClass}).start(),e.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();c(f,{removeClass:g.modalInClass}).start().then(d)})),b.when(h).then(function(){var b=a.getTop();if(b&&a.modalRendered(b.key),!d[0].activeElement||!f[0].contains(d[0].activeElement)){var c=f[0].querySelector("[autofocus]");c?c.focus():f[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(a,b,c,d,e,f,g,h,i){function j(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)}function k(){for(var a=-1,b=v.keys(),c=0;c<b.length;c++)v.get(b[c]).value.backdrop&&(a=c);return a>-1&&y>a&&(a=y),a}function l(a,b){var c=v.get(a).value,d=c.appendTo;v.remove(a),z=v.top(),z&&(y=parseInt(z.value.modalDomEl.attr("index"),10)),o(c.modalDomEl,c.modalScope,function(){var b=c.openedClass||u;w.remove(b,a);var e=w.hasKey(b);d.toggleClass(b,e),!e&&t&&t.heightOverflow&&t.scrollbarWidth&&(t.originalRight?d.css({paddingRight:t.originalRight+"px"}):d.css({paddingRight:""}),t=null),m(!0)},c.closedDeferred),n(),b&&b.focus?b.focus():d.focus&&d.focus()}function m(a){var b;v.length()>0&&(b=v.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function n(){if(r&&-1===k()){var a=s;o(r,s,function(){a=null}),r=void 0,s=void 0}}function o(b,c,d,e){function g(){g.done||(g.done=!0,a.leave(b).then(function(){b.remove(),e&&e.resolve()}),c.$destroy(),d&&d())}var h,i=null,j=function(){return h||(h=f.defer(),i=h.promise),function(){h.resolve()}};return c.$broadcast(x.NOW_CLOSING_EVENT,j),f.when(i).then(g)}function p(a){if(a.isDefaultPrevented())return a;var b=v.top();if(b)switch(a.which){case 27:b.value.keyboard&&(a.preventDefault(),e.$apply(function(){x.dismiss(b.key,"escape key press")}));break;case 9:var c=x.loadFocusElementList(b),d=!1;a.shiftKey?(x.isFocusInFirstItem(a,c)||x.isModalFocused(a,b))&&(d=x.focusLastFocusableElement(c)):x.isFocusInLastItem(a,c)&&(d=x.focusFirstFocusableElement(c)),d&&(a.preventDefault(),a.stopPropagation())}}function q(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var r,s,t,u="modal-open",v=h.createNew(),w=g.createNew(),x={NOW_CLOSING_EVENT:"modal.stack.now-closing"},y=0,z=null,A="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(k,function(a){s&&(s.index=a)}),c.on("keydown",p),e.$on("$destroy",function(){c.off("keydown",p)}),x.open=function(b,f){var g=c[0].activeElement,h=f.openedClass||u;m(!1),z=v.top(),v.add(b,{deferred:f.deferred,renderDeferred:f.renderDeferred,closedDeferred:f.closedDeferred,modalScope:f.scope,backdrop:f.backdrop,keyboard:f.keyboard,openedClass:f.openedClass,windowTopClass:f.windowTopClass,animation:f.animation,appendTo:f.appendTo}),w.put(h,b);var j=f.appendTo,l=k();if(!j.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");l>=0&&!r&&(s=e.$new(!0),s.modalOptions=f,s.index=l,r=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),r.attr("backdrop-class",f.backdropClass),f.animation&&r.attr("modal-animation","true"),d(r)(s),a.enter(r,j),t=i.scrollbarPadding(j),t.heightOverflow&&t.scrollbarWidth&&j.css({paddingRight:t.right+"px"})),y=z?parseInt(z.value.modalDomEl.attr("index"),10)+1:0;var n=angular.element('<div uib-modal-window="modal-window"></div>');n.attr({"template-url":f.windowTemplateUrl,"window-class":f.windowClass,"window-top-class":f.windowTopClass,size:f.size,index:y,animate:"animate"}).html(f.content),f.animation&&n.attr("modal-animation","true"),j.addClass(h),a.enter(d(n)(f.scope),j),v.top().value.modalDomEl=n,v.top().value.modalOpener=g},x.close=function(a,b){var c=v.get(a);return c&&q(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),l(a,c.value.modalOpener),!0):!c},x.dismiss=function(a,b){var c=v.get(a);return c&&q(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),l(a,c.value.modalOpener),!0):!c},x.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},x.getTop=function(){return v.top()},x.modalRendered=function(a){var b=v.get(a);b&&b.value.renderDeferred.resolve()},x.focusFirstFocusableElement=function(a){return a.length>0?(a[0].focus(),!0):!1},x.focusLastFocusableElement=function(a){return a.length>0?(a[a.length-1].focus(),!0):!1},x.isModalFocused=function(a,b){if(a&&b){var c=b.value.modalDomEl;if(c&&c.length)return(a.target||a.srcElement)===c[0]}return!1},x.isFocusInFirstItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[0]:!1},x.isFocusInLastItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[b.length-1]:!1},x.loadFocusElementList=function(a){if(a){var b=a.value.modalDomEl;if(b&&b.length){var c=b[0].querySelectorAll(A);return c?Array.prototype.filter.call(c,function(a){return j(a)}):c}}},x}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?c.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(e){function j(){return r}var l=c.defer(),m=c.defer(),n=c.defer(),o=c.defer(),p={result:l.promise,opened:m.promise,closed:n.promise,rendered:o.promise,close:function(a){return h.close(p,a)},dismiss:function(a){return h.dismiss(p,a)}};if(e=angular.extend({},a.options,e),e.resolve=e.resolve||{},e.appendTo=e.appendTo||d.find("body").eq(0),!e.template&&!e.templateUrl)throw new Error("One of template or templateUrl options is required.");var q,r=c.all([i(e),g.resolve(e.resolve,{},null,null)]);return q=k=c.all([k]).then(j,j).then(function(a){var c=e.scope||b,d=c.$new();d.$close=p.close,d.$dismiss=p.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var g,i,j={};e.controller&&(j.$scope=d,j.$scope.$resolve={},j.$uibModalInstance=p,angular.forEach(a[1],function(a,b){j[b]=a,j.$scope.$resolve[b]=a}),i=f(e.controller,j,!0,e.controllerAs),e.controllerAs&&e.bindToController&&(g=i.instance,g.$close=d.$close,g.$dismiss=d.$dismiss,angular.extend(g,{$resolve:j.$scope.$resolve},c)),g=i(),angular.isFunction(g.$onInit)&&g.$onInit()),h.open(p,{scope:d,deferred:l,renderDeferred:o,closedDeferred:n,content:a[0],animation:e.animation,backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowTopClass:e.windowTopClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,size:e.size,openedClass:e.openedClass,appendTo:e.appendTo}),m.resolve(!0)},function(a){m.reject(a),l.reject(a)})["finally"](function(){k===q&&(k=null)}),p},j}]};return a}),angular.module("ui.bootstrap.paging",[]).factory("uibPaging",["$parse",function(a){return{create:function(b,c,d){b.setNumPages=d.numPages?a(d.numPages).assign:angular.noop,b.ngModelCtrl={$setViewValue:angular.noop},b._watchers=[],b.init=function(a,e){b.ngModelCtrl=a,b.config=e,a.$render=function(){b.render()},d.itemsPerPage?b._watchers.push(c.$parent.$watch(d.itemsPerPage,function(a){b.itemsPerPage=parseInt(a,10),c.totalPages=b.calculateTotalPages(),b.updatePage()})):b.itemsPerPage=e.itemsPerPage,c.$watch("totalItems",function(a,d){(angular.isDefined(a)||a!==d)&&(c.totalPages=b.calculateTotalPages(),b.updatePage())})},b.calculateTotalPages=function(){var a=b.itemsPerPage<1?1:Math.ceil(c.totalItems/b.itemsPerPage);return Math.max(a||0,1)},b.render=function(){c.page=parseInt(b.ngModelCtrl.$viewValue,10)||1},c.selectPage=function(a,d){d&&d.preventDefault();var e=!c.ngDisabled||!d;e&&c.page!==a&&a>0&&a<=c.totalPages&&(d&&d.target&&d.target.blur(),b.ngModelCtrl.$setViewValue(a),b.ngModelCtrl.$render())},c.getText=function(a){return c[a+"Text"]||b.config[a+"Text"]},c.noPrevious=function(){return 1===c.page},c.noNext=function(){return c.page===c.totalPages},b.updatePage=function(){b.setNumPages(c.$parent,c.totalPages),c.page>c.totalPages?c.selectPage(c.totalPages):b.ngModelCtrl.$render()},c.$on("$destroy",function(){for(;b._watchers.length;)b._watchers.shift()()})}}}]),angular.module("ui.bootstrap.pager",["ui.bootstrap.paging"]).controller("UibPagerController",["$scope","$attrs","uibPaging","uibPagerConfig",function(a,b,c,d){a.align=angular.isDefined(b.align)?a.$parent.$eval(b.align):d.align,c.create(this,a,b)}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"?? Previous",nextText:"Next ??",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPagerController",controllerAs:"pager",templateUrl:function(a,b){return b.templateUrl||"uib/template/pager/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&f.init(g,a)}}}]),angular.module("ui.bootstrap.pagination",["ui.bootstrap.paging"]).controller("UibPaginationController",["$scope","$attrs","$parse","uibPaging","uibPaginationConfig",function(a,b,c,d,e){function f(a,b,c){return{number:a,text:b,active:c}}function g(a,b){var c=[],d=1,e=b,g=angular.isDefined(i)&&b>i;g&&(j?(d=Math.max(a-Math.floor(i/2),1),e=d+i-1,e>b&&(e=b,d=e-i+1)):(d=(Math.ceil(a/i)-1)*i+1,e=Math.min(d+i-1,b)));for(var h=d;e>=h;h++){var n=f(h,m(h),h===a);c.push(n)}if(g&&i>0&&(!j||k||l)){if(d>1){if(!l||d>3){var o=f(d-1,"...",!1);c.unshift(o)}if(l){if(3===d){var p=f(2,"2",!1);c.unshift(p)}var q=f(1,"1",!1);c.unshift(q)}}if(b>e){if(!l||b-2>e){var r=f(e+1,"...",!1);c.push(r)}if(l){if(e===b-2){var s=f(b-1,b-1,!1);c.push(s)}var t=f(b,b,!1);c.push(t)}}}return c}var h=this,i=angular.isDefined(b.maxSize)?a.$parent.$eval(b.maxSize):e.maxSize,j=angular.isDefined(b.rotate)?a.$parent.$eval(b.rotate):e.rotate,k=angular.isDefined(b.forceEllipses)?a.$parent.$eval(b.forceEllipses):e.forceEllipses,l=angular.isDefined(b.boundaryLinkNumbers)?a.$parent.$eval(b.boundaryLinkNumbers):e.boundaryLinkNumbers,m=angular.isDefined(b.pageLabel)?function(c){return a.$parent.$eval(b.pageLabel,{$page:c})}:angular.identity;a.boundaryLinks=angular.isDefined(b.boundaryLinks)?a.$parent.$eval(b.boundaryLinks):e.boundaryLinks,a.directionLinks=angular.isDefined(b.directionLinks)?a.$parent.$eval(b.directionLinks):e.directionLinks,d.create(this,a,b),b.maxSize&&h._watchers.push(a.$parent.$watch(c(b.maxSize),function(a){i=parseInt(a,10),h.render()}));var n=this.render;this.render=function(){n(),a.page>0&&a.page<=a.totalPages&&(a.pages=g(a.page,a.totalPages))}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,boundaryLinkNumbers:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0,forceEllipses:!1}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"uib/template/pagination/pagination.html"},replace:!0,link:function(a,c,d,e){var f=e[0],g=e[1];g&&f.init(g,b)}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){function n(a){if(27===a.which){var b=o.top();b&&(b.value.close(),o.removeTop(),b=null)}}var o=m.createNew();return h.on("keypress",n),k.$on("$destroy",function(){h.off("keypress",n)}),function(e,k,m,n){function p(a){var b=(a||n.trigger||m).split(" "),d=b.map(function(a){
return c[a]||a});return{show:b,hide:d}}n=angular.extend({},b,d,n);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup uib-title="'+r+"title"+s+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen" origin-scope="origScope" class="uib-position-measure"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){N.isOpen?q():m()}function m(){M&&!a.$eval(d[k+"Enable"])||(u(),x(),N.popupDelay?G||(G=g(r,N.popupDelay,!1)):r())}function q(){s(),N.popupCloseDelay?H||(H=g(t,N.popupCloseDelay,!1)):t()}function r(){return s(),u(),N.content?(v(),void N.$evalAsync(function(){N.isOpen=!0,y(!0),S()})):angular.noop}function s(){G&&(g.cancel(G),G=null),I&&(g.cancel(I),I=null)}function t(){N&&N.$evalAsync(function(){N&&(N.isOpen=!1,y(!1),N.animation?F||(F=g(w,150,!1)):w())})}function u(){H&&(g.cancel(H),H=null),F&&(g.cancel(F),F=null)}function v(){D||(E=N.$new(),D=c(E,function(a){K?h.find("body").append(a):b.after(a)}),z())}function w(){s(),u(),A(),D&&(D.remove(),D=null),E&&(E.$destroy(),E=null)}function x(){N.title=d[k+"Title"],Q?N.content=Q(a):N.content=d[e],N.popupClass=d[k+"Class"],N.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:n.placement;var b=i.parsePlacement(N.placement);J=b[1]?b[0]+"-"+b[1]:b[0];var c=parseInt(d[k+"PopupDelay"],10),f=parseInt(d[k+"PopupCloseDelay"],10);N.popupDelay=isNaN(c)?n.popupDelay:c,N.popupCloseDelay=isNaN(f)?n.popupCloseDelay:f}function y(b){P&&angular.isFunction(P.assign)&&P.assign(a,b)}function z(){R.length=0,Q?(R.push(a.$watch(Q,function(a){N.content=a,!a&&N.isOpen&&t()})),R.push(E.$watch(function(){O||(O=!0,E.$$postDigest(function(){O=!1,N&&N.isOpen&&S()}))}))):R.push(d.$observe(e,function(a){N.content=a,!a&&N.isOpen?t():S()})),R.push(d.$observe(k+"Title",function(a){N.title=a,N.isOpen&&S()})),R.push(d.$observe(k+"Placement",function(a){N.placement=a?a:n.placement,N.isOpen&&S()}))}function A(){R.length&&(angular.forEach(R,function(a){a()}),R.length=0)}function B(a){N&&N.isOpen&&D&&(b[0].contains(a.target)||D[0].contains(a.target)||q())}function C(){var a=d[k+"Trigger"];T(),L=p(a),"none"!==L.show&&L.show.forEach(function(a,c){"outsideClick"===a?(b.on("click",j),h.on("click",B)):a===L.hide[c]?b.on(a,j):a&&(b.on(a,m),b.on(L.hide[c],q)),b.on("keypress",function(a){27===a.which&&q()})})}var D,E,F,G,H,I,J,K=angular.isDefined(n.appendToBody)?n.appendToBody:!1,L=p(void 0),M=angular.isDefined(d[k+"Enable"]),N=a.$new(!0),O=!1,P=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,Q=n.useContentExp?l(d[e]):!1,R=[],S=function(){D&&D.html()&&(I||(I=g(function(){var a=i.positionElements(b,D,N.placement,K);D.css({top:a.top+"px",left:a.left+"px"}),D.hasClass(a.placement.split("-")[0])||(D.removeClass(J.split("-")[0]),D.addClass(a.placement.split("-")[0])),D.hasClass(n.placementClassPrefix+a.placement)||(D.removeClass(n.placementClassPrefix+J),D.addClass(n.placementClassPrefix+a.placement)),D.hasClass("uib-position-measure")?(i.positionArrow(D,a.placement),D.removeClass("uib-position-measure")):J!==a.placement&&i.positionArrow(D,a.placement),J=a.placement,I=null},0,!1)))};N.origScope=a,N.isOpen=!1,o.add(N,{close:t}),N.contentExp=function(){return N.content},d.$observe("disabled",function(a){a&&s(),a&&N.isOpen&&t()}),P&&a.$watch(P,function(a){N&&!a===N.isOpen&&j()});var T=function(){L.show.forEach(function(a){"outsideClick"===a?b.off("click",j):(b.off(a,m),b.off(a,j))}),L.hide.forEach(function(a){"outsideClick"===a?h.off("click",B):b.off(a,q)})};C();var U=a.$eval(d[k+"Animation"]);N.animation=angular.isDefined(U)?!!U:n.animation;var V,W=k+"AppendToBody";V=W in d&&void 0===d[W]?!0:a.$eval(d[W]),K=angular.isDefined(V)?V:K,a.$on("$destroy",function(){T(),w(),o.remove(N),N=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",["$uibPosition",function(a){return{restrict:"A",link:function(b,c,d){if(b.placement){var e=a.parsePlacement(b.placement);c.addClass(e[0])}b.popupClass&&c.addClass(b.popupClass),b.animation()&&c.addClass(d.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{uibTitle:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"uib/template/popover/popover-template.html"}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",uibTitle:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/popover/popover-html.html"}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{uibTitle:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/popover/popover.html"}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){function d(){return angular.isDefined(a.maxParam)?a.maxParam:c.max}var e=this,f=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=d(),this.addBar=function(a,b,c){f||b.css({transition:"none"}),this.bars.push(a),a.max=d(),a.title=c&&angular.isDefined(c.title)?c.title:"progressbar",a.$watch("value",function(b){a.recalculatePercentage()}),a.recalculatePercentage=function(){var b=e.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);b>100&&(a.percent-=b-100)},a.$on("$destroy",function(){b=null,e.removeBar(a)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("maxParam",function(a){e.bars.forEach(function(a){a.max=d(),a.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,enableReset:!0,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop},e=this;this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff,this.enableReset=angular.isDefined(b.enableReset)?a.$parent.$eval(b.enableReset):c.enableReset;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){if(!a.readonly&&b>=0&&b<=a.range.length){var c=e.enableReset&&d.$viewValue===b?0:b;d.$setViewValue(c),d.$render()}},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue,a.title=e.getTitle(a.value-1)}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?readOnly",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"uib/template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){function b(a){for(var b=0;b<d.tabs.length;b++)if(d.tabs[b].index===a)return b}var c,d=this;d.tabs=[],d.select=function(a,f){if(!e){var g=b(c),h=d.tabs[g];if(h){if(h.tab.onDeselect({$event:f,$selectedIndex:a}),f&&f.isDefaultPrevented())return;h.tab.active=!1}var i=d.tabs[a];i?(i.tab.onSelect({$event:f}),i.tab.active=!0,d.active=i.index,c=i.index):!i&&angular.isDefined(c)&&(d.active=null,c=null)}},d.addTab=function(a){if(d.tabs.push({tab:a,index:a.index}),d.tabs.sort(function(a,b){return a.index>b.index?1:a.index<b.index?-1:0}),a.index===d.active||!angular.isDefined(d.active)&&1===d.tabs.length){var c=b(a.index);d.select(c)}},d.removeTab=function(a){for(var b,c=0;c<d.tabs.length;c++)if(d.tabs[c].tab===a){b=c;break}if(d.tabs[b].index===d.active){var e=b===d.tabs.length-1?b-1:b+1%d.tabs.length;d.select(e)}d.tabs.splice(b,1)},a.$watch("tabset.active",function(a){angular.isDefined(a)&&a!==c&&d.select(b(a))});var e;a.$on("$destroy",function(){e=!0})}]).directive("uibTabset",function(){return{transclude:!0,replace:!0,scope:{},bindToController:{active:"=?",type:"@"},controller:"UibTabsetController",controllerAs:"tabset",templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tabset.html"},link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tab.html"},transclude:!0,scope:{heading:"@",index:"=?",classes:"@?",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},controllerAs:"tab",link:function(b,c,d,e,f){b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),angular.isUndefined(d.index)&&(e.tabs&&e.tabs.length?b.index=Math.max.apply(null,e.tabs.map(function(a){return a.index}))+1:b.index=0),angular.isUndefined(d.classes)&&(b.classes=""),b.select=function(a){if(!b.disabled){for(var c,d=0;d<e.tabs.length;d++)if(e.tabs[d].tab===b){c=d;break}e.select(c,a)}},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:"^uibTab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase()||"uib:tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^uibTabset",link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,secondStep:1,showMeridian:!0,showSeconds:!1,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0,templateUrl:"uib/template/timepicker/timepicker.html"}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=+a.hours,c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c&&""!==a.hours?(a.showMeridian&&(12===b&&(b=0),a.meridian===v[1]&&(b+=12)),b):void 0}function i(){var b=+a.minutes,c=b>=0&&60>b;return c&&""!==a.minutes?b:void 0}function j(){var b=+a.seconds;return b>=0&&60>b?b:void 0}function k(a,b){return null===a?"":angular.isDefined(a)&&a.toString().length<2&&!b?"0"+a:a.toString()}function l(a){m(),u.$setViewValue(new Date(s)),n(a)}function m(){u.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1,a.invalidSeconds=!1}function n(b){if(u.$modelValue){var c=s.getHours(),d=s.getMinutes(),e=s.getSeconds();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:k(c,!w),"m"!==b&&(a.minutes=k(d)),a.meridian=s.getHours()<12?v[0]:v[1],"s"!==b&&(a.seconds=k(e)),a.meridian=s.getHours()<12?v[0]:v[1]}else a.hours=null,a.minutes=null,a.seconds=null,a.meridian=v[0]}function o(a){s=q(s,a),l()}function p(a,b){return q(a,60*b)}function q(a,b){var c=new Date(a.getTime()+1e3*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes(),c.getSeconds()),d}function r(){return(null===a.hours||""===a.hours)&&(null===a.minutes||""===a.minutes)&&(!a.showSeconds||a.showSeconds&&(null===a.seconds||""===a.seconds))}var s=new Date,t=[],u={$setViewValue:angular.noop},v=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS,w=angular.isDefined(c.padHours)?a.$parent.$eval(c.padHours):!0;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){u=b,u.$render=this.render,u.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=d.eq(2),i=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;i&&this.setupMousewheelEvents(e,f,h);var j=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;j&&this.setupArrowkeyEvents(e,f,h),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f,h)};var x=g.hourStep;c.hourStep&&t.push(a.$parent.$watch(d(c.hourStep),function(a){x=+a}));var y=g.minuteStep;c.minuteStep&&t.push(a.$parent.$watch(d(c.minuteStep),function(a){y=+a}));var z;t.push(a.$parent.$watch(d(c.min),function(a){var b=new Date(a);z=isNaN(b)?void 0:b}));var A;t.push(a.$parent.$watch(d(c.max),function(a){var b=new Date(a);A=isNaN(b)?void 0:b}));var B=!1;c.ngDisabled&&t.push(a.$parent.$watch(d(c.ngDisabled),function(a){B=a})),a.noIncrementHours=function(){var a=p(s,60*x);return B||a>A||s>a&&z>a},a.noDecrementHours=function(){var a=p(s,60*-x);return B||z>a||a>s&&a>A},a.noIncrementMinutes=function(){var a=p(s,y);return B||a>A||s>a&&z>a},a.noDecrementMinutes=function(){var a=p(s,-y);return B||z>a||a>s&&a>A},a.noIncrementSeconds=function(){var a=q(s,C);return B||a>A||s>a&&z>a},a.noDecrementSeconds=function(){var a=q(s,-C);return B||z>a||a>s&&a>A},a.noToggleMeridian=function(){return s.getHours()<12?B||p(s,720)>A:B||p(s,-720)<z};var C=g.secondStep;c.secondStep&&t.push(a.$parent.$watch(d(c.secondStep),function(a){C=+a})),a.showSeconds=g.showSeconds,c.showSeconds&&t.push(a.$parent.$watch(d(c.showSeconds),function(b){a.showSeconds=!!b})),a.showMeridian=g.showMeridian,c.showMeridian&&t.push(a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,u.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(s.setHours(c),l())}else n()})),this.setupMousewheelEvents=function(b,c,d){var e=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()}),d.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementSeconds():a.decrementSeconds()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c,d){b.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply()))}),c.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply()))}),d.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementSeconds(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementSeconds(),a.$apply()))})},this.setupInputEvents=function(b,c,d){if(a.readonlyInput)return a.updateHours=angular.noop,a.updateMinutes=angular.noop,void(a.updateSeconds=angular.noop);var e=function(b,c,d){u.$setViewValue(null),u.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c),angular.isDefined(d)&&(a.invalidSeconds=d)};a.updateHours=function(){var a=h(),b=i();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(a),s.setMinutes(b),z>s||s>A?e(!0):l("h")):e(!0)},b.bind("blur",function(b){u.$setTouched(),r()?m():null===a.hours||""===a.hours?e(!0):!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=k(a.hours,!w)})}),a.updateMinutes=function(){var a=i(),b=h();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(b),s.setMinutes(a),z>s||s>A?e(void 0,!0):l("m")):e(void 0,!0)},c.bind("blur",function(b){u.$setTouched(),r()?m():null===a.minutes?e(void 0,!0):!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=k(a.minutes)})}),a.updateSeconds=function(){var a=j();u.$setDirty(),angular.isDefined(a)?(s.setSeconds(a),l("s")):e(void 0,void 0,!0)},d.bind("blur",function(b){r()?m():!a.invalidSeconds&&a.seconds<10&&a.$apply(function(){a.seconds=k(a.seconds)})})},this.render=function(){var b=u.$viewValue;isNaN(b)?(u.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(s=b),z>s||s>A?(u.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):m(),n())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*x*60)},a.decrementHours=function(){a.noDecrementHours()||o(60*-x*60)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(60*y)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(60*-y)},a.incrementSeconds=function(){a.noIncrementSeconds()||o(C)},a.decrementSeconds=function(){a.noDecrementSeconds()||o(-C)},a.toggleMeridian=function(){var b=i(),c=h();a.noToggleMeridian()||(angular.isDefined(b)&&angular.isDefined(c)?o(720*(s.getHours()<12?60:-60)):a.meridian=a.meridian===v[0]?v[1]:v[0])},a.blur=function(){u.$setTouched()},a.$on("$destroy",function(){for(;t.length;)t.shift()()})}]).directive("uibTimepicker",["uibTimepickerConfig",function(a){return{require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(b,c){return c.templateUrl||a.templateUrl},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){O.moveInProgress||(O.moveInProgress=!0,O.$digest()),Z()}function o(){O.position=E?l.offset(b):l.position(b),O.position.top+=b.prop("offsetHeight")}var p,q,r=[9,13,27,38,40],s=200,t=a.$eval(c.typeaheadMinLength);t||0===t||(t=1),a.$watch(c.typeaheadMinLength,function(a){t=a||0===a?a:1});var u=a.$eval(c.typeaheadWaitMs)||0,v=a.$eval(c.typeaheadEditable)!==!1;a.$watch(c.typeaheadEditable,function(a){v=a!==!1});var w,x,y=e(c.typeaheadLoading).assign||angular.noop,z=c.typeaheadShouldSelect?e(c.typeaheadShouldSelect):function(a,b){var c=b.$event;return 13===c.which||9===c.which},A=e(c.typeaheadOnSelect),B=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,C=e(c.typeaheadNoResults).assign||angular.noop,D=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,E=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,F=c.typeaheadAppendTo?a.$eval(c.typeaheadAppendTo):null,G=a.$eval(c.typeaheadFocusFirst)!==!1,H=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,I=e(c.typeaheadIsOpen).assign||angular.noop,J=a.$eval(c.typeaheadShowHint)||!1,K=e(c.ngModel),L=e(c.ngModel+"($$$p)"),M=function(b,c){return angular.isFunction(K(a))&&q&&q.$options&&q.$options.getterSetter?L(b,{$$$p:c}):K.assign(b,c)},N=m.parse(c.uibTypeahead),O=a.$new(),P=a.$on("$destroy",function(){O.$destroy()});O.$on("$destroy",P);var Q="typeahead-"+O.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":Q});var R,S;J&&(R=angular.element("<div></div>"),R.css("position","relative"),b.after(R),S=b.clone(),S.attr("placeholder",""),S.attr("tabindex","-1"),S.val(""),S.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",color:"#999"}),b.css({position:"relative","vertical-align":"top","background-color":"transparent"}),R.append(S),S.after(b));var T=angular.element("<div uib-typeahead-popup></div>");T.attr({id:Q,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(c.typeaheadTemplateUrl)&&T.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&T.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var U=function(){J&&S.val("")},V=function(){O.matches=[],O.activeIdx=-1,b.attr("aria-expanded",!1),U()},W=function(a){return Q+"-option-"+a};O.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",W(a))});var X=function(a,b){return O.matches.length>b&&a?a.toUpperCase()===O.matches[b].label.toUpperCase():!1},Y=function(c,d){var e={$viewValue:c};y(a,!0),C(a,!1),f.when(N.source(a,e)).then(function(f){var g=c===p.$viewValue;if(g&&w)if(f&&f.length>0){O.activeIdx=G?0:-1,C(a,!1),O.matches.length=0;for(var h=0;h<f.length;h++)e[N.itemName]=f[h],O.matches.push({id:W(h),label:N.viewMapper(O,e),model:f[h]});if(O.query=c,o(),b.attr("aria-expanded",!0),H&&1===O.matches.length&&X(c,0)&&(angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(0,d)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(0,d)),J){var i=O.matches[0].label;angular.isString(c)&&c.length>0&&i.slice(0,c.length).toUpperCase()===c.toUpperCase()?S.val(c+i.slice(c.length)):S.val("")}}else V(),C(a,!0);g&&y(a,!1)},function(){V(),y(a,!1),C(a,!0)})};E&&(angular.element(i).on("resize",n),h.find("body").on("scroll",n));var Z=k(function(){O.matches.length&&o(),O.moveInProgress=!1},s);O.moveInProgress=!1,O.query=void 0;var $,_=function(a){$=g(function(){Y(a)},u)},aa=function(){$&&g.cancel($)};V(),O.assignIsOpen=function(b){I(a,b)},O.select=function(d,e){var f,h,i={};x=!0,i[N.itemName]=h=O.matches[d].model,f=N.modelMapper(a,i),M(a,f),p.$setValidity("editable",!0),p.$setValidity("parse",!0),A(a,{$item:h,$model:f,$label:N.viewMapper(a,i),$event:e}),V(),O.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.on("keydown",function(b){if(0!==O.matches.length&&-1!==r.indexOf(b.which)){var c=z(a,{$event:b});if(-1===O.activeIdx&&c||9===b.which&&b.shiftKey)return V(),void O.$digest();b.preventDefault();var d;switch(b.which){case 27:b.stopPropagation(),V(),a.$digest();break;case 38:O.activeIdx=(O.activeIdx>0?O.activeIdx:O.matches.length)-1,O.$digest(),d=T.find("li")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;case 40:O.activeIdx=(O.activeIdx+1)%O.matches.length,O.$digest(),d=T.find("li")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;default:c&&O.$apply(function(){angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(O.activeIdx,b)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(O.activeIdx,b)})}}}),b.bind("focus",function(a){w=!0,0!==t||p.$viewValue||g(function(){Y(p.$viewValue,a)},0)}),b.bind("blur",function(a){B&&O.matches.length&&-1!==O.activeIdx&&!x&&(x=!0,O.$apply(function(){angular.isObject(O.debounceUpdate)&&angular.isNumber(O.debounceUpdate.blur)?k(function(){O.select(O.activeIdx,a)},O.debounceUpdate.blur):O.select(O.activeIdx,a)})),!v&&p.$error.editable&&(p.$setViewValue(),p.$setValidity("editable",!0),p.$setValidity("parse",!0),b.val("")),w=!1,x=!1});var ba=function(c){b[0]!==c.target&&3!==c.which&&0!==O.matches.length&&(V(),j.$$phase||a.$digest())};h.on("click",ba),a.$on("$destroy",function(){h.off("click",ba),(E||F)&&ca.remove(),E&&(angular.element(i).off("resize",n),h.find("body").off("scroll",n)),T.remove(),J&&R.remove()});var ca=d(T)(O);E?h.find("body").append(ca):F?angular.element(F).eq(0).append(ca):b.after(ca),this.init=function(b,c){p=b,q=c,O.debounceUpdate=p.$options&&e(p.$options.debounce)(a),p.$parsers.unshift(function(b){return w=!0,0===t||b&&b.length>=t?u>0?(aa(),_(b)):Y(b):(y(a,!1),aa(),V()),v?b:b?void p.$setValidity("editable",!1):(p.$setValidity("editable",!0),null)}),p.$formatters.push(function(b){var c,d,e={};return v||p.$setValidity("editable",!0),D?(e.$model=b,D(a,e)):(e[N.itemName]=b,c=N.viewMapper(a,e),e[N.itemName]=void 0,d=N.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",["$$debounce",function(a){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"uib/template/typeahead/typeahead-popup.html"},link:function(b,c,d){b.templateUrl=d.templateUrl,b.isOpen=function(){var a=b.matches.length>0;return b.assignIsOpen({isOpen:a}),a},b.isActive=function(a){return b.active===a},b.selectActive=function(a){b.active=a},b.selectMatch=function(c,d){var e=b.debounce();angular.isNumber(e)||angular.isObject(e)?a(function(){b.select({activeIdx:c,evt:d})},angular.isNumber(e)?e:e["default"]):b.select({activeIdx:c,evt:d})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"uib/template/typeahead/typeahead-match.html";a(g).then(function(a){var c=angular.element(a.trim());e.replaceWith(c),b(c)(d)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("uib/template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion-group.html",'<div class="panel" ng-class="panelClass || \'panel-default\'">\n  <div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n    <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>')}]),angular.module("uib/template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("uib/template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>\n');
}]),angular.module("uib/template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("uib/template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/datepicker.html",'<div class="uib-datepicker" ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>\n')}]),angular.module("uib/template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/day.html",'<table class="uib-daypicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/month.html",'<table class="uib-monthpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/year.html",'<table class="uib-yearpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepickerPopup/popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepickerPopup/popup.html",'<div>\n  <ul class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n    <li ng-transclude></li>\n    <li ng-if="showButtonBar" class="uib-button-bar">\n      <span class="btn-group pull-left">\n        <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n        <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n      </span>\n      <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n    </li>\n  </ul>\n</div>\n')}]),angular.module("uib/template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/backdrop.html",'<div class="modal-backdrop"\n     uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog {{size ? \'modal-\' + size : \'\'}}"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')}]),angular.module("uib/template/pager/pager.html",[]).run(["$templateCache",function(a){a.put("uib/template/pager/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("uib/template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("uib/template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("uib/template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-html-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("uib/template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("uib/template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-template-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-html.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-template.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')}]),angular.module("uib/template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("uib/template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("uib/template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n')}]),angular.module("uib/template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tab.html",'<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("uib/template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("uib/template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/timepicker/timepicker.html",'<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-match.html",'<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n')}]),angular.module("uib/template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),angular.module("ui.bootstrap.carousel").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibCarouselCss&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),angular.$$uibCarouselCss=!0}),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),angular.$$uibTooltipCss=!0}),angular.module("ui.bootstrap.timepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTimepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'),angular.$$uibTimepickerCss=!0}),angular.module("ui.bootstrap.typeahead").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),angular.$$uibTypeaheadCss=!0});
/**
 * Enhanced Select2 Dropmenus
 *
 * @AJAX Mode - When in this mode, your value will be an object (or array of objects) of the data used by Select2
 *     This change is so that you do not have to do an additional query yourself on top of Select2's own query
 * @params [options] {object} The configuration options passed to $.fn.select2(). Refer to the documentation
 */
angular.module('ui.select2', []).value('uiSelect2Config', {}).directive('uiSelect2', ['uiSelect2Config', '$timeout', function (uiSelect2Config, $timeout) {
  var options = {};
  if (uiSelect2Config) {
    angular.extend(options, uiSelect2Config);
  }
  return {
    require: 'ngModel',
    priority: 1,
    compile: function (tElm, tAttrs) {
      var watch,
        repeatOption,
        repeatAttr,
        isSelect = tElm.is('select'),
        isMultiple = angular.isDefined(tAttrs.multiple);

      // Enable watching of the options dataset if in use
      if (tElm.is('select')) {
        repeatOption = tElm.find( 'optgroup[ng-repeat], optgroup[data-ng-repeat], option[ng-repeat], option[data-ng-repeat]');

        if (repeatOption.length) {
          repeatAttr = repeatOption.attr('ng-repeat') || repeatOption.attr('data-ng-repeat');
          watch = jQuery.trim(repeatAttr.split('|')[0]).split(' ').pop();
        }
      }

      return function (scope, elm, attrs, controller) {
        // instance-specific options
        var opts = angular.extend({}, options, scope.$eval(attrs.uiSelect2));

        /*
        Convert from Select2 view-model to Angular view-model.
        */
        var convertToAngularModel = function(select2_data) {
          var model;
          if (opts.simple_tags) {
            model = [];
            angular.forEach(select2_data, function(value, index) {
              model.push(value.id);
            });
          } else {
            model = select2_data;
          }
          return model;
        };

        /*
        Convert from Angular view-model to Select2 view-model.
        */
        var convertToSelect2Model = function(angular_data) {
          var model = [];
          if (!angular_data) {
            return model;
          }

          if (opts.simple_tags) {
            model = [];
            angular.forEach(
              angular_data,
              function(value, index) {
                model.push({'id': value, 'text': value});
              });
          } else {
            model = angular_data;
          }
          return model;
        };

        if (isSelect) {
          // Use <select multiple> instead
          delete opts.multiple;
          delete opts.initSelection;
        } else if (isMultiple) {
          opts.multiple = true;
        }

        if (controller) {
          // Watch the model for programmatic changes
           scope.$watch(tAttrs.ngModel, function(current, old) {
            if (!current) {
              return;
            }
            if (current === old) {
              return;
            }
            controller.$render();
          }, true);
          controller.$render = function () {
            if (isSelect) {
              elm.select2('val', controller.$viewValue);
            } else {
              if (opts.multiple) {
                controller.$isEmpty = function (value) {
                  return !value || value.length === 0;
                };
                var viewValue = controller.$viewValue;
                if (angular.isString(viewValue)) {
                  viewValue = viewValue.split(',');
                }
                elm.select2(
                  'data', convertToSelect2Model(viewValue));
                if (opts.sortable) {
                  elm.select2("container").find("ul.select2-choices").sortable({
                    containment: 'parent',
                    start: function () {
                      elm.select2("onSortStart");
                    },
                    update: function () {
                      elm.select2("onSortEnd");
                      elm.trigger('change');
                    }
                  });
                }                  
              } else {
                if (angular.isObject(controller.$viewValue)) {
                  elm.select2('data', controller.$viewValue);
                } else if (!controller.$viewValue) {
                  elm.select2('data', null);
                } else {
                  elm.select2('val', controller.$viewValue);
                }
              }
            }
          };

          // Watch the options dataset for changes
          if (watch) {
            scope.$watch(watch, function (newVal, oldVal, scope) {
              if (angular.equals(newVal, oldVal)) {
                return;
              }
              // Delayed so that the options have time to be rendered
              $timeout(function () {
                elm.select2('val', controller.$viewValue);
                // Refresh angular to remove the superfluous option
                controller.$render();
                if(newVal && !oldVal && controller.$setPristine) {
                  controller.$setPristine(true);
                }
              });
            });
          }

          // Update valid and dirty statuses
          controller.$parsers.push(function (value) {
            var div = elm.prev();
            div
              .toggleClass('ng-invalid', !controller.$valid)
              .toggleClass('ng-valid', controller.$valid)
              .toggleClass('ng-invalid-required', !controller.$valid)
              .toggleClass('ng-valid-required', controller.$valid)
              .toggleClass('ng-dirty', controller.$dirty)
              .toggleClass('ng-pristine', controller.$pristine);
            return value;
          });

          if (!isSelect) {
            // Set the view and model value and update the angular template manually for the ajax/multiple select2.
            elm.bind("change", function (e) {
              e.stopImmediatePropagation();
              
              if (scope.$$phase || scope.$root.$$phase) {
                return;
              }
              scope.$apply(function () {
                controller.$setViewValue(
                  convertToAngularModel(elm.select2('data')));
              });
            });

            if (opts.initSelection) {
              var initSelection = opts.initSelection;
              opts.initSelection = function (element, callback) {
                initSelection(element, function (value) {
                  var isPristine = controller.$pristine;
                  controller.$setViewValue(convertToAngularModel(value));
                  callback(value);
                  if (isPristine) {
                    controller.$setPristine();
                  }
                  elm.prev().toggleClass('ng-pristine', controller.$pristine);
                });
              };
            }
          }
        }

        elm.bind("$destroy", function() {
          elm.select2("destroy");
        });

        attrs.$observe('disabled', function (value) {
          elm.select2('enable', !value);
        });

        attrs.$observe('readonly', function (value) {
          elm.select2('readonly', !!value);
        });

        if (attrs.ngMultiple) {
          scope.$watch(attrs.ngMultiple, function(newVal) {
            attrs.$set('multiple', !!newVal);
            elm.select2(opts);
          });
        }

        // Initialize the plugin late so that the injected DOM does not disrupt the template compiler
        $timeout(function () {
          elm.select2(opts);

          // Set initial value - I'm not sure about this but it seems to need to be there
          elm.select2('data', controller.$modelValue);
          // important!
          controller.$render();

          // Not sure if I should just check for !isSelect OR if I should check for 'tags' key
          if (!opts.initSelection && !isSelect) {
              var isPristine = controller.$pristine;
              controller.$pristine = false;
              controller.$setViewValue(
                  convertToAngularModel(elm.select2('data'))
              );
              if (isPristine) {
                  controller.$setPristine();
              }
            elm.prev().toggleClass('ng-pristine', controller.$pristine);
          }
        });
      };
    }
  };
}]);

/*!
 * angular-datatables - v0.6.2
 * https://github.com/l-lin/angular-datatables
 * License: MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="datatables"),function(a,b,c,d){"use strict";function e(a,b,c,e,f,g){function h(a){var b=a[0].innerHTML;return function(a,c,e,g){function h(a,d){a!==d&&g.render(c,g.buildOptionsPromise(),b)}var i=e.dtDisableDeepWatchers?"$watchCollection":"$watch";d.forEach(["dtColumns","dtColumnDefs","dtOptions"],function(b){a[i].call(a,b,h,!0)}),f.showLoading(c,a),g.render(c,g.buildOptionsPromise(),b)}}function i(h){function i(){var e=a.defer();return a.all([a.when(h.dtOptions),a.when(h.dtColumns),a.when(h.dtColumnDefs)]).then(function(e){var f=e[0],h=e[1],i=e[2];g.deleteProperty(f,"$promise"),g.deleteProperty(h,"$promise"),g.deleteProperty(i,"$promise");var j;if(d.isDefined(f)&&(j={},d.extend(j,f),d.isArray(h)&&(j.aoColumns=h),d.isArray(i)&&(j.aoColumnDefs=i),j.language&&j.language.url)){var k=a.defer(),l=j.language.url;b.get(j.language.url).then(function(a){k.resolve(a.data)},function(){c.error("Could not fetch the content of the language from "+l)}),j.language=k.promise}return g.resolveObjectPromises(j,["data","aaData","fnPromise"])}).then(function(a){e.resolve(a)}),e.promise}function j(a,b,c){b.then(function(b){f.preRender(b);var d=h.datatable&&"ng"===h.datatable;l&&l._renderer?l._renderer.withOptions(b).render(a,h,c).then(function(a){l=a,k(a)}):e.fromOptions(b,d).render(a,h,c).then(function(a){l=a,k(a)})})}function k(a){d.isFunction(h.dtInstance)?h.dtInstance(a):d.isDefined(h.dtInstance)&&(h.dtInstance=a)}var l,m=this;m.buildOptionsPromise=i,m.render=j}return h.$inject=["tElm"],i.$inject=["$scope"],{restrict:"A",scope:{dtOptions:"=",dtColumns:"=",dtColumnDefs:"=",datatable:"@",dtInstance:"="},compile:h,controller:i}}function f(){var a={withOption:function(a,b){return d.isString(a)&&(this[a]=b),this},withSource:function(a){return this.ajax=a,this},withDataProp:function(a){return this.sAjaxDataProp=a,this},withFnServerData:function(a){if(!d.isFunction(a))throw new Error("The parameter must be a function");return this.fnServerData=a,this},withPaginationType:function(a){if(!d.isString(a))throw new Error("The pagination type must be provided");return this.sPaginationType=a,this},withLanguage:function(a){return this.language=a,this},withLanguageSource:function(a){return this.withLanguage({url:a})},withDisplayLength:function(a){return this.iDisplayLength=a,this},withFnPromise:function(a){return this.fnPromise=a,this},withDOM:function(a){return this.dom=a,this}};return{newOptions:function(){return Object.create(a)},fromSource:function(b){var c=Object.create(a);return c.ajax=b,c},fromFnPromise:function(b){var c=Object.create(a);return c.fnPromise=b,c}}}function g(){var a={withOption:function(a,b){return d.isString(a)&&(this[a]=b),this},withTitle:function(a){return this.sTitle=a,this},withClass:function(a){return this.sClass=a,this},notVisible:function(){return this.bVisible=!1,this},notSortable:function(){return this.bSortable=!1,this},renderWith:function(a){return this.mRender=a,this}};return{newColumn:function(b,c){if(d.isUndefined(b))throw new Error('The parameter "mData" is not defined!');var e=Object.create(a);return e.mData=b,d.isDefined(c)&&(e.sTitle=c),e},DTColumn:a}}function h(a){return{newColumnDef:function(b){if(d.isUndefined(b))throw new Error('The parameter "targets" must be defined! See https://datatables.net/reference/option/columnDefs.targets');var c=Object.create(a.DTColumn);return d.isArray(b)?c.aTargets=b:c.aTargets=[b],c}}}function i(a,b,c){return{compileHtml:function(e){return a(d.element('<div class="'+c+'">'+b.loadingTemplate+"</div>"))(e)},isLoading:function(a){return a.hasClass(c)}}}function j(){function a(a){var b=Object.create(f);return b._renderer=a,b}function b(a,b){b.id=a.id,b.DataTable=a.DataTable,b.dataTable=a.dataTable}function c(a,b){this._renderer.reloadData(a,b)}function d(a){this._renderer.changeData(a)}function e(){this._renderer.rerender()}var f={reloadData:c,changeData:d,rerender:e};return{newDTInstance:a,copyDTProperties:b}}function k(){c.fn.DataTable.Api&&c.fn.DataTable.Api.register("ngDestroy()",function(b){return b=b||!1,this.iterator("table",function(d){var e,f=d.nTableWrapper.parentNode,g=d.oClasses,h=d.nTable,i=d.nTBody,j=d.nTHead,k=d.nTFoot,l=c(h),m=c(i),n=c(d.nTableWrapper),o=c.map(d.aoData,function(a){return a.nTr});d.bDestroying=!0,c.fn.DataTable.ext.internal._fnCallbackFire(d,"aoDestroyCallback","destroy",[d]),b||new c.fn.DataTable.Api(d).columns().visible(!0),n.unbind(".DT").find(":not(tbody *)").unbind(".DT"),c(a).unbind(".DT-"+d.sInstance),h!==j.parentNode&&(l.children("thead").detach(),l.append(j)),k&&h!==k.parentNode&&(l.children("tfoot").detach(),l.append(k)),l.detach(),n.detach(),d.aaSorting=[],d.aaSortingFixed=[],c.fn.DataTable.ext.internal._fnSortingClasses(d),c(o).removeClass(d.asStripeClasses.join(" ")),c("th, td",j).removeClass(g.sSortable+" "+g.sSortableAsc+" "+g.sSortableDesc+" "+g.sSortableNone),d.bJUI&&(c("th span."+g.sSortIcon+", td span."+g.sSortIcon,j).detach(),c("th, td",j).each(function(){var a=c("div."+g.sSortJUIWrapper,this);c(this).append(a.contents()),a.detach()})),!b&&f&&(f.contains(d.nTableReinsertBefore)?f.insertBefore(h,d.nTableReinsertBefore):f.appendChild(h)),l.css("width",d.sDestroyWidth).removeClass(g.sTable),(e=d.asDestroyStripes.length)&&m.children().each(function(a){c(this).addClass(d.asDestroyStripes[a%e])});var p=c.inArray(d,c.fn.DataTable.settings);p!==-1&&c.fn.DataTable.settings.splice(p,1)})})}function l(){function a(a){return j.loadingTemplate=a,j}function b(a){return c.ajax({dataType:"json",url:a,success:function(a){c.extend(!0,c.fn.DataTable.defaults,{language:a})}}),j}function e(a){return c.extend(!0,c.fn.DataTable.defaults,{language:a}),j}function f(a){return c.extend(c.fn.DataTable.defaults,{displayLength:a}),j}function g(a){return j.bootstrapOptions=a,j}function h(a){return c.extend(c.fn.DataTable.defaults,{dom:a}),j}function i(a,b){if(d.isString(a)){var e={};e[a]=b,c.extend(c.fn.DataTable.defaults,e)}}var j={loadingTemplate:"<h3>Loading...</h3>",bootstrapOptions:{},setLoadingTemplate:a,setLanguageSource:b,setLanguage:e,setDisplayLength:f,setBootstrapOptions:g,setDOM:h,setOption:i};return j}function m(a){function b(b,c){var e=d.element(a.compileHtml(c));b.after(e),b.hide(),e.show()}function e(b){b.show();var c=b.next();a.isLoading(c)&&c.remove()}function f(a,b){var e="#"+a.attr("id");c.fn.dataTable.isDataTable(e)&&d.isObject(b)&&(b.destroy=!0);var f=a.DataTable(b),g=a.dataTable(),h={id:a.attr("id"),DataTable:f,dataTable:g};return i(b,h),h}function g(a,b){return l.hideLoading(a),l.renderDataTable(a,b)}function h(a){k.push(a)}function i(a,b){d.forEach(k,function(c){d.isFunction(c.postRender)&&c.postRender(a,b)})}function j(a){d.forEach(k,function(b){d.isFunction(b.preRender)&&b.preRender(a)})}var k=[],l={showLoading:b,hideLoading:e,renderDataTable:f,hideLoadingAndRenderDataTable:g,registerPlugin:h,postRender:i,preRender:j};return l}function n(){return{withOptions:function(a){return this.options=a,this}}}function o(a,b,c,d){function e(e){function f(b,e){k=b,l=e;var f=d.newDTInstance(m),g=c.hideLoadingAndRenderDataTable(b,m.options);return j=g.DataTable,d.copyDTProperties(g,f),a.when(f)}function g(){}function h(){}function i(){j.destroy(),c.showLoading(k,l),f(k,l)}var j,k,l,m=Object.create(b);return m.name="DTDefaultRenderer",m.options=e,m.render=f,m.reloadData=g,m.changeData=h,m.rerender=i,m}return{create:e}}function p(a,b,c,d,e,f,g){function h(h){function i(a,c,e){n=e,p=a,q=c.$parent,s=g.newDTInstance(t);var h=b.defer(),i=n.match(/<tbody([\s\S]*)<\/tbody>/i),j=i[1],k=j.match(/^\s*.+?\s+in\s+([a-zA-Z0-9\.-_$]*)\s*/m);if(!k)throw new Error('Expected expression in form of "_item_ in _collection_[ track by _id_]" but got "{0}".',j);var l=k[1],r=!1;return q.$watchCollection(l,function(){o&&r&&m(),d(function(){r=!0,f.preRender(t.options);var a=f.hideLoadingAndRenderDataTable(p,t.options);o=a.DataTable,g.copyDTProperties(a,s),h.resolve(s)},0,!1)},!0),h.promise}function j(){a.warn("The Angular Renderer does not support reloading data. You need to do it directly on your model")}function k(){a.warn("The Angular Renderer does not support changing the data. You need to change your model directly.")}function l(){m(),f.showLoading(p,q),f.preRender(h),d(function(){var a=f.hideLoadingAndRenderDataTable(p,t.options);o=a.DataTable,g.copyDTProperties(a,s)},0,!1)}function m(){r&&r.$destroy(),o.ngDestroy(),p.html(n),r=q.$new(),c(p.contents())(r)}var n,o,p,q,r,s,t=Object.create(e);return t.name="DTNGRenderer",t.options=h,t.render=i,t.reloadData=j,t.changeData=k,t.rerender=l,t}return{create:h}}function q(a,b,c,e,f,g){function h(h){function i(b,c){var d=a.defer();return t=g.newDTInstance(v),r=b,s=c,m(v.options.fnPromise,f.renderDataTable).then(function(a){q=a.DataTable,g.copyDTProperties(a,t),d.resolve(t)}),d.promise}function j(a,b){var e=q&&q.page()?q.page():0;d.isFunction(v.options.fnPromise)?m(v.options.fnPromise,p).then(function(c){d.isFunction(a)&&a(c.DataTable.data()),b===!1&&c.DataTable.page(e).draw(!1)}):c.warn("In order to use the reloadData functionality with a Promise renderer, you need to provide a function that returns a promise.")}function k(a){v.options.fnPromise=a,s.dtOptions.fnPromise=a,m(v.options.fnPromise,p)}function l(){q.destroy(),f.showLoading(r,s),f.preRender(h),i(r,s)}function m(b,c){var e=a.defer();if(d.isUndefined(b))throw new Error("You must provide a promise or a function that returns a promise!");return u?u.then(function(){e.resolve(n(b,c))}):e.resolve(n(b,c)),e.promise}function n(b,c){var e=a.defer();return u=d.isFunction(b)?b():b,u.then(function(a){var b=a;if(v.options.sAjaxDataProp)for(var d=v.options.sAjaxDataProp.split(".");d.length;){var f=d.shift();f in b&&(b=b[f])}u=null,e.resolve(o(v.options,r,b,c))}),e.promise}function o(c,d,e,g){var h=a.defer();return delete e.$promise,c.aaData=e,b(function(){f.hideLoading(d),c.bDestroy=!0,h.resolve(g(d,c))},0,!1),h.promise}function p(a,b){return q.clear(),q.rows.add(b.aaData).draw(b.redraw),{id:t.id,DataTable:t.DataTable,dataTable:t.dataTable}}var q,r,s,t,u=null,v=Object.create(e);return v.name="DTPromiseRenderer",v.options=h,v.render=i,v.reloadData=j,v.changeData=k,v.rerender=l,v}return{create:h}}function r(a,b,c,e,f,g){function h(h){function i(b,c){p=b,q=c;var e=a.defer(),h=g.newDTInstance(r);return d.isUndefined(r.options.sAjaxDataProp)&&(r.options.sAjaxDataProp=f.sAjaxDataProp),d.isUndefined(r.options.aoColumns)&&(r.options.aoColumns=f.aoColumns),m(r.options,b).then(function(a){o=a.DataTable,g.copyDTProperties(a,h),e.resolve(h)}),e.promise}function j(a,b){o&&o.ajax.reload(a,b)}function k(a){r.options.ajax=a,q.dtOptions.ajax=a}function l(){e.preRender(h),i(p,q)}function m(c,d){var f=a.defer();return c.bDestroy=!0,o&&(o.destroy(),e.showLoading(p,q),d.empty()),e.hideLoading(d),n(c)?b(function(){f.resolve(e.renderDataTable(d,c))},0,!1):f.resolve(e.renderDataTable(d,c)),f.promise}function n(a){return!(!d.isDefined(a)||!d.isDefined(a.dom))&&a.dom.indexOf("S")>=0}var o,p,q,r=Object.create(c);return r.name="DTAjaxRenderer",r.options=h,r.render=i,r.reloadData=j,r.changeData=k,r.rerender=l,r}return{create:h}}function s(a,b,c,e){function f(f,g){if(g){if(f&&f.serverSide)throw new Error("You cannot use server side processing along with the Angular renderer!");return b.create(f)}if(d.isDefined(f)){if(d.isDefined(f.fnPromise)&&null!==f.fnPromise){if(f.serverSide)throw new Error("You cannot use server side processing along with the Promise renderer!");return c.create(f)}return d.isDefined(f.ajax)&&null!==f.ajax||d.isDefined(f.ajax)&&null!==f.ajax?e.create(f):a.create(f)}return a.create()}return{fromOptions:f}}function t(a){function b(a,c){var e=d.copy(a);if((d.isUndefined(e)||null===e)&&(e={}),d.isUndefined(c)||null===c)return e;if(d.isObject(c))for(var f in c)c.hasOwnProperty(f)&&(e[f]=b(e[f],c[f]));else e=d.copy(c);return e}function e(a,b){d.isObject(a)&&delete a[b]}function f(b,e){var f=a.defer(),h=[],i={},j=e||[];if(!d.isObject(b)||d.isArray(b))f.resolve(b);else{i=d.extend(i,b);for(var k in i)i.hasOwnProperty(k)&&c.inArray(k,j)===-1&&(d.isArray(i[k])?h.push(g(i[k])):h.push(a.when(i[k])));a.all(h).then(function(a){var b=0;for(var d in i)i.hasOwnProperty(d)&&c.inArray(d,j)===-1&&(i[d]=a[b++]);f.resolve(i)})}return f.promise}function g(b){var c=a.defer(),e=[],g=[];return d.isArray(b)?(d.forEach(b,function(b){d.isObject(b)?e.push(f(b)):e.push(a.when(b))}),a.all(e).then(function(a){d.forEach(a,function(a){g.push(a)}),c.resolve(g)})):c.resolve(b),c.promise}return{overrideProperties:b,deleteProperty:e,resolveObjectPromises:f,resolveArrayPromises:g}}d.module("datatables.directive",["datatables.instances","datatables.renderer","datatables.options","datatables.util"]).directive("datatable",e),e.$inject=["$q","$http","$log","DTRendererFactory","DTRendererService","DTPropertyUtil"],d.module("datatables.factory",[]).factory("DTOptionsBuilder",f).factory("DTColumnBuilder",g).factory("DTColumnDefBuilder",h).factory("DTLoadingTemplate",i),h.$inject=["DTColumnBuilder"],i.$inject=["$compile","DTDefaultOptions","DT_LOADING_CLASS"],d.module("datatables.instances",["datatables.util"]).factory("DTInstanceFactory",j),d.module("datatables",["datatables.directive","datatables.factory"]).run(k),d.module("datatables.options",[]).constant("DT_DEFAULT_OPTIONS",{sAjaxDataProp:"",aoColumns:[]}).constant("DT_LOADING_CLASS","dt-loading").service("DTDefaultOptions",l),d.module("datatables.renderer",["datatables.instances","datatables.factory","datatables.options","datatables.instances"]).factory("DTRendererService",m).factory("DTRenderer",n).factory("DTDefaultRenderer",o).factory("DTNGRenderer",p).factory("DTPromiseRenderer",q).factory("DTAjaxRenderer",r).factory("DTRendererFactory",s),m.$inject=["DTLoadingTemplate"],o.$inject=["$q","DTRenderer","DTRendererService","DTInstanceFactory"],p.$inject=["$log","$q","$compile","$timeout","DTRenderer","DTRendererService","DTInstanceFactory"],q.$inject=["$q","$timeout","$log","DTRenderer","DTRendererService","DTInstanceFactory"],r.$inject=["$q","$timeout","DTRenderer","DTRendererService","DT_DEFAULT_OPTIONS","DTInstanceFactory"],s.$inject=["DTDefaultRenderer","DTNGRenderer","DTPromiseRenderer","DTAjaxRenderer"],d.module("datatables.util",[]).factory("DTPropertyUtil",t),t.$inject=["$q"]}(window,document,jQuery,angular);
/*!
 * angular-datatables - v0.6.2
 * https://github.com/l-lin/angular-datatables
 * License: MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="datatables.buttons"),function(a,b,c,d){"use strict";function e(a){function b(a){function b(a,b){function e(a){var b="B";if(f.dom=f.dom?f.dom:c.fn.dataTable.defaults.sDom,f.dom.indexOf(b)===-1&&(f.dom=b+f.dom),d.isUndefined(a))throw new Error("You must define the options for the button extension. See https://datatables.net/reference/option/buttons#Examples for some example");return f.buttons=a,f}var f=a(b);return f.withButtons=e,f}var e=a.newOptions,f=a.fromSource,g=a.fromFnPromise;return a.newOptions=function(){return b(e)},a.fromSource=function(a){return b(f,a)},a.fromFnPromise=function(a){return b(g,a)},a}a.decorator("DTOptionsBuilder",b),b.$inject=["$delegate"]}function f(a){function b(a){a&&d.isArray(a.buttons)&&(a.buttonsTmp=a.buttons.slice())}function c(a){a&&d.isDefined(a.buttonsTmp)&&(a.buttons=a.buttonsTmp,delete a.buttonsTmp)}var e={preRender:b,postRender:c};a.registerPlugin(e)}d.module("datatables.buttons",["datatables"]).config(e).run(f),e.$inject=["$provide"],f.$inject=["DTRendererService"]}(window,document,jQuery,angular);
/*!
 * angular-datatables - v0.6.2
 * https://github.com/l-lin/angular-datatables
 * License: MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="datatables.colreorder"),function(a,b,c,d){"use strict";function e(a){function b(a){function b(a,b){function e(){var a="R";return i.dom=i.dom?i.dom:c.fn.dataTable.defaults.sDom,i.dom.indexOf(a)===-1&&(i.dom=a+i.dom),i.hasColReorder=!0,i}function f(a,b){return d.isString(a)&&(i.oColReorder=i.oColReorder&&null!==i.oColReorder?i.oColReorder:{},i.oColReorder[a]=b),i}function g(a){return d.isArray(a)&&i.withColReorderOption("aiOrder",a),i}function h(a){if(!d.isFunction(a))throw new Error("The reorder callback must be a function");return i.withColReorderOption("fnReorderCallback",a),i}var i=a(b);return i.withColReorder=e,i.withColReorderOption=f,i.withColReorderOrder=g,i.withColReorderCallback=h,i}var e=a.newOptions,f=a.fromSource,g=a.fromFnPromise;return a.newOptions=function(){return b(e)},a.fromSource=function(a){return b(f,a)},a.fromFnPromise=function(a){return b(g,a)},a}a.decorator("DTOptionsBuilder",b),b.$inject=["$delegate"]}d.module("datatables.colreorder",["datatables"]).config(e),e.$inject=["$provide"]}(window,document,jQuery,angular);
/*!
 * angular-datatables - v0.6.2
 * https://github.com/l-lin/angular-datatables
 * License: MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="datatables.columnfilter"),function(a,b,c,d){"use strict";function e(a){function b(a){function b(a,b){function c(a){return d.hasColumnFilter=!0,a&&(d.columnFilterOptions=a),d}var d=a(b);return d.withColumnFilter=c,d}var c=a.newOptions,d=a.fromSource,e=a.fromFnPromise;return a.newOptions=function(){return b(c)},a.fromSource=function(a){return b(d,a)},a.fromFnPromise=function(a){return b(e,a)},a}a.decorator("DTOptionsBuilder",b),b.$inject=["$delegate"]}function f(a){function b(a,b){a&&a.hasColumnFilter&&b.dataTable.columnFilter(a.columnFilterOptions)}var c={postRender:b};a.registerPlugin(c)}d.module("datatables.columnfilter",["datatables"]).config(e).run(f),e.$inject=["$provide"],f.$inject=["DTRendererService"]}(window,document,jQuery,angular);
/**
 * Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0
 * Build date: 10 May 2015
 */
!function(a,b){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(a):"undefined"!=typeof module&&"object"==typeof exports?
// Node/CommonJS style
module.exports=a():
// No AMD or CommonJS support so we place Rangy in (probably) the global variable
b.rangy=a()}(function(){/*----------------------------------------------------------------------------------------------------------------*/
// Trio of functions taken from Peter Michaux's article:
// http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
function a(a,b){var c=typeof a[b];return c==u||!(c!=t||!a[b])||"unknown"==c}function b(a,b){return!(typeof a[b]!=t||!a[b])}function c(a,b){return typeof a[b]!=v}
// Creates a convenience function to save verbose repeated calls to tests functions
function d(a){return function(b,c){for(var d=c.length;d--;)if(!a(b,c[d]))return!1;return!0}}function e(a){return a&&A(a,z)&&C(a,y)}function f(a){return b(a,"body")?a.body:a.getElementsByTagName("body")[0]}function g(b){typeof console!=v&&a(console,"log")&&console.log(b)}function h(a,b){F&&b?alert(a):g(a)}function i(a){H.initialized=!0,H.supported=!1,h("Rangy is not supported in this environment. Reason: "+a,H.config.alertOnFail)}function j(a){h("Rangy warning: "+a,H.config.alertOnWarn)}function k(a){return a.message||a.description||String(a)}
// Initialization
function l(){if(F&&!H.initialized){var b,c=!1,d=!1;
// First, perform basic feature tests
a(document,"createRange")&&(b=document.createRange(),A(b,x)&&C(b,w)&&(c=!0));var h=f(document);if(!h||"body"!=h.nodeName.toLowerCase())return void i("No body element found");if(h&&a(h,"createTextRange")&&(b=h.createTextRange(),e(b)&&(d=!0)),!c&&!d)return void i("Neither Range nor TextRange are available");H.initialized=!0,H.features={implementsDomRange:c,implementsTextRange:d};
// Initialize modules
var j,l;for(var m in E)(j=E[m])instanceof p&&j.init(j,H);
// Call init listeners
for(var n=0,o=K.length;n<o;++n)try{K[n](H)}catch(a){l="Rangy init listener threw an exception. Continuing. Detail: "+k(a),g(l)}}}function m(a,b,c){c&&(a+=" in module "+c.name),H.warn("DEPRECATED: "+a+" is deprecated. Please use "+b+" instead.")}function n(a,b,c,d){a[b]=function(){return m(b,c,d),a[c].apply(a,G.toArray(arguments))}}function o(a){a=a||window,l();
// Notify listeners
for(var b=0,c=L.length;b<c;++b)L[b](a)}function p(a,b,c){this.name=a,this.dependencies=b,this.initialized=!1,this.supported=!1,this.initializer=c}function q(a,b,c){var d=new p(a,b,function(b){if(!b.initialized){b.initialized=!0;try{c(H,b),b.supported=!0}catch(b){var d="Module '"+a+"' failed to load: "+k(b);g(d),b.stack&&g(b.stack)}}});return E[a]=d,d}/*----------------------------------------------------------------------------------------------------------------*/
// Ensure rangy.rangePrototype and rangy.selectionPrototype are available immediately
function r(){}function s(){}var t="object",u="function",v="undefined",w=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],x=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],y=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],z=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","select","setEndPoint","getBoundingClientRect"],A=d(a),B=d(b),C=d(c),D=[].forEach?function(a,b){a.forEach(b)}:function(a,b){for(var c=0,d=a.length;c<d;++c)b(a[c],c)},E={},F=typeof window!=v&&typeof document!=v,G={isHostMethod:a,isHostObject:b,isHostProperty:c,areHostMethods:A,areHostObjects:B,areHostProperties:C,isTextRange:e,getBody:f,forEach:D},H={version:"1.3.0",initialized:!1,isBrowser:F,supported:!0,util:G,features:{},modules:E,config:{alertOnFail:!1,alertOnWarn:!1,preferTextRange:!1,autoInitialize:typeof rangyAutoInitialize==v||rangyAutoInitialize}};H.fail=i,H.warn=j;
// Add utility extend() method
var I;({}).hasOwnProperty?(G.extend=I=function(a,b,c){var d,e;for(var f in b)b.hasOwnProperty(f)&&(d=a[f],e=b[f],c&&null!==d&&"object"==typeof d&&null!==e&&"object"==typeof e&&I(d,e,!0),a[f]=e);
// Special case for toString, which does not show up in for...in loops in IE <= 8
return b.hasOwnProperty("toString")&&(a.toString=b.toString),a},G.createOptions=function(a,b){var c={};return I(c,b),a&&I(c,a),c}):i("hasOwnProperty not supported"),
// Test whether we're in a browser and bail out if not
F||i("Rangy can only run in a browser"),
// Test whether Array.prototype.slice can be relied on for NodeLists and use an alternative toArray() if not
function(){var a;if(F){var b=document.createElement("div");b.appendChild(document.createElement("span"));var c=[].slice;try{1==c.call(b.childNodes,0)[0].nodeType&&(a=function(a){return c.call(a,0)})}catch(a){}}a||(a=function(a){for(var b=[],c=0,d=a.length;c<d;++c)b[c]=a[c];return b}),G.toArray=a}();
// Very simple event handler wrapper function that doesn't attempt to solve issues such as "this" handling or
// normalization of event properties
var J;F&&(a(document,"addEventListener")?J=function(a,b,c){a.addEventListener(b,c,!1)}:a(document,"attachEvent")?J=function(a,b,c){a.attachEvent("on"+b,c)}:i("Document does not have required addEventListener or attachEvent method"),G.addListener=J);var K=[];G.deprecationNotice=m,G.createAliasForDeprecatedMethod=n,
// Allow external scripts to initialize this library in case it's loaded after the document has loaded
H.init=l,
// Execute listener immediately if already initialized
H.addInitListener=function(a){H.initialized?a(H):K.push(a)};var L=[];H.addShimListener=function(a){L.push(a)},F&&(H.shim=H.createMissingNativeApi=o,n(H,"createMissingNativeApi","shim")),p.prototype={init:function(){for(var a,b,c=this.dependencies||[],d=0,e=c.length;d<e;++d){if(b=c[d],a=E[b],!(a&&a instanceof p))throw new Error("required module '"+b+"' not found");if(a.init(),!a.supported)throw new Error("required module '"+b+"' not supported")}
// Now run initializer
this.initializer(this)},fail:function(a){throw this.initialized=!0,this.supported=!1,new Error(a)},warn:function(a){H.warn("Module "+this.name+": "+a)},deprecationNotice:function(a,b){H.warn("DEPRECATED: "+a+" in module "+this.name+" is deprecated. Please use "+b+" instead")},createError:function(a){return new Error("Error in Rangy "+this.name+" module: "+a)}},H.createModule=function(a){
// Allow 2 or 3 arguments (second argument is an optional array of dependencies)
var b,c;2==arguments.length?(b=arguments[1],c=[]):(b=arguments[2],c=arguments[1]);var d=q(a,c,b);
// Initialize the module immediately if the core is already initialized
H.initialized&&H.supported&&d.init()},H.createCoreModule=function(a,b,c){q(a,b,c)},H.RangePrototype=r,H.rangePrototype=new r,H.selectionPrototype=new s,/*----------------------------------------------------------------------------------------------------------------*/
// DOM utility methods used by Rangy
H.createCoreModule("DomUtil",[],function(a,b){
// Opera 11 puts HTML elements in the null namespace, it seems, and IE 7 has undefined namespaceURI
function c(a){var b;return typeof a.namespaceURI==F||null===(b=a.namespaceURI)||"http://www.w3.org/1999/xhtml"==b}function d(a){var b=a.parentNode;return 1==b.nodeType?b:null}function e(a){for(var b=0;a=a.previousSibling;)++b;return b}function f(a){switch(a.nodeType){case 7:case 10:return 0;case 3:case 8:return a.length;default:return a.childNodes.length}}function g(a,b){var c,d=[];for(c=a;c;c=c.parentNode)d.push(c);for(c=b;c;c=c.parentNode)if(K(d,c))return c;return null}function h(a,b,c){for(var d=c?b:b.parentNode;d;){if(d===a)return!0;d=d.parentNode}return!1}function i(a,b){return h(a,b,!0)}function j(a,b,c){for(var d,e=c?a:a.parentNode;e;){if(d=e.parentNode,d===b)return e;e=d}return null}function k(a){var b=a.nodeType;return 3==b||4==b||8==b}function l(a){if(!a)return!1;var b=a.nodeType;return 3==b||8==b}function m(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a}
// Note that we cannot use splitText() because it is bugridden in IE 9.
function n(a,b,c){var d=a.cloneNode(!1);
// Preserve positions
if(d.deleteData(0,b),a.deleteData(b,a.length-b),m(d,a),c)for(var f,g=0;f=c[g++];)
// Handle case where position was inside the portion of node after the split point
f.node==a&&f.offset>b?(f.node=d,f.offset-=b):f.node==a.parentNode&&f.offset>e(a)&&++f.offset;return d}function o(a){if(9==a.nodeType)return a;if(typeof a.ownerDocument!=F)return a.ownerDocument;if(typeof a.document!=F)return a.document;if(a.parentNode)return o(a.parentNode);throw b.createError("getDocument: no document found for node")}function p(a){var c=o(a);if(typeof c.defaultView!=F)return c.defaultView;if(typeof c.parentWindow!=F)return c.parentWindow;throw b.createError("Cannot get a window object for node")}function q(a){if(typeof a.contentDocument!=F)return a.contentDocument;if(typeof a.contentWindow!=F)return a.contentWindow.document;throw b.createError("getIframeDocument: No Document object found for iframe element")}function r(a){if(typeof a.contentWindow!=F)return a.contentWindow;if(typeof a.contentDocument!=F)return a.contentDocument.defaultView;throw b.createError("getIframeWindow: No Window object found for iframe element")}
// This looks bad. Is it worth it?
function s(a){return a&&G.isHostMethod(a,"setTimeout")&&G.isHostObject(a,"document")}function t(a,b,c){var d;if(a?G.isHostProperty(a,"nodeType")?d=1==a.nodeType&&"iframe"==a.tagName.toLowerCase()?q(a):o(a):s(a)&&(d=a.document):d=document,!d)throw b.createError(c+"(): Parameter must be a Window object or DOM node");return d}function u(a){for(var b;b=a.parentNode;)a=b;return a}function v(a,c,d,f){
// See http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Comparing
var h,i,k,l,m;if(a==d)
// Case 1: nodes are the same
return c===f?0:c<f?-1:1;if(h=j(d,a,!0))
// Case 2: node C (container B or an ancestor) is a child node of A
return c<=e(h)?-1:1;if(h=j(a,d,!0))
// Case 3: node C (container A or an ancestor) is a child node of B
return e(h)<f?-1:1;if(i=g(a,d),!i)throw new Error("comparePoints error: nodes have no common ancestor");if(
// Case 4: containers are siblings or descendants of siblings
k=a===i?i:j(a,i,!0),l=d===i?i:j(d,i,!0),k===l)
// This shouldn't be possible
throw b.createError("comparePoints got to case 4 and childA and childB are the same!");for(m=i.firstChild;m;){if(m===k)return-1;if(m===l)return 1;m=m.nextSibling}}function w(a){var b;try{return b=a.parentNode,!1}catch(a){return!0}}/*----------------------------------------------------------------------------------------------------------------*/
function x(a){if(!a)return"[No node]";if(L&&w(a))return"[Broken node]";if(k(a))return'"'+a.data+'"';if(1==a.nodeType){var b=a.id?' id="'+a.id+'"':"";return"<"+a.nodeName+b+">[index:"+e(a)+",length:"+a.childNodes.length+"]["+(a.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return a.nodeName}function y(a){for(var b,c=o(a).createDocumentFragment();b=a.firstChild;)c.appendChild(b);return c}function z(a,b,c){var d=H(a),e=a.createElement("div");e.contentEditable=""+!!c,b&&(e.innerHTML=b);
// Insert the test element at the start of the body to prevent scrolling to the bottom in iOS (issue #292)
var f=d.firstChild;return f?d.insertBefore(e,f):d.appendChild(e),e}function A(a){return a.parentNode.removeChild(a)}function B(a){this.root=a,this._next=a}function C(a){return new B(a)}function D(a,b){this.node=a,this.offset=b}function E(a){this.code=this[a],this.codeName=a,this.message="DOMException: "+this.codeName}var F="undefined",G=a.util,H=G.getBody;
// Perform feature tests
G.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||b.fail("document missing a Node creation method"),G.isHostMethod(document,"getElementsByTagName")||b.fail("document missing getElementsByTagName method");var I=document.createElement("div");G.areHostMethods(I,["insertBefore","appendChild","cloneNode"]||!G.areHostObjects(I,["previousSibling","nextSibling","childNodes","parentNode"]))||b.fail("Incomplete Element implementation"),
// innerHTML is required for Range's createContextualFragment method
G.isHostProperty(I,"innerHTML")||b.fail("Element is missing innerHTML property");var J=document.createTextNode("test");G.areHostMethods(J,["splitText","deleteData","insertData","appendData","cloneNode"]||!G.areHostObjects(I,["previousSibling","nextSibling","childNodes","parentNode"])||!G.areHostProperties(J,["data"]))||b.fail("Incomplete Text Node implementation");/*----------------------------------------------------------------------------------------------------------------*/
// Removed use of indexOf because of a bizarre bug in Opera that is thrown in one of the Acid3 tests. I haven't been
// able to replicate it outside of the test. The bug is that indexOf returns -1 when called on an Array that
// contains just the document as a single element and the value searched for is the document.
var K=/*Array.prototype.indexOf ?
            function(arr, val) {
                return arr.indexOf(val) > -1;
            }:*/
function(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1},L=!1;!function(){var b=document.createElement("b");b.innerHTML="1";var c=b.firstChild;b.innerHTML="<br />",L=w(c),a.features.crashyTextNodes=L}();var M;typeof window.getComputedStyle!=F?M=function(a,b){return p(a).getComputedStyle(a,null)[b]}:typeof document.documentElement.currentStyle!=F?M=function(a,b){return a.currentStyle?a.currentStyle[b]:""}:b.fail("No means of obtaining computed style properties found"),B.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var a,b,c=this._current=this._next;if(this._current)if(a=c.firstChild)this._next=a;else{for(b=null;c!==this.root&&!(b=c.nextSibling);)c=c.parentNode;this._next=b}return this._current},detach:function(){this._current=this._next=this.root=null}},D.prototype={equals:function(a){return!!a&&this.node===a.node&&this.offset==a.offset},inspect:function(){return"[DomPosition("+x(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},E.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11,INVALID_NODE_TYPE_ERR:24},E.prototype.toString=function(){return this.message},a.dom={arrayContains:K,isHtmlNamespace:c,parentElement:d,getNodeIndex:e,getNodeLength:f,getCommonAncestor:g,isAncestorOf:h,isOrIsAncestorOf:i,getClosestAncestorIn:j,isCharacterDataNode:k,isTextOrCommentNode:l,insertAfter:m,splitDataNode:n,getDocument:o,getWindow:p,getIframeWindow:r,getIframeDocument:q,getBody:H,isWindow:s,getContentDocument:t,getRootContainer:u,comparePoints:v,isBrokenNode:w,inspectNode:x,getComputedStyleProperty:M,createTestElement:z,removeNode:A,fragmentFromNodeChildren:y,createIterator:C,DomPosition:D},a.DOMException=E}),/*----------------------------------------------------------------------------------------------------------------*/
// Pure JavaScript implementation of DOM Range
H.createCoreModule("DomRange",["DomUtil"],function(a,b){/*----------------------------------------------------------------------------------------------------------------*/
// Utility functions
function c(a,b){return 3!=a.nodeType&&(P(a,b.startContainer)||P(a,b.endContainer))}function d(a){return a.document||Q(a.startContainer)}function e(a){return W(a.startContainer)}function f(a){return new L(a.parentNode,O(a))}function g(a){return new L(a.parentNode,O(a)+1)}function h(a,b,c){var d=11==a.nodeType?a.firstChild:a;return N(b)?c==b.length?J.insertAfter(a,b):b.parentNode.insertBefore(a,0==c?b:S(b,c)):c>=b.childNodes.length?b.appendChild(a):b.insertBefore(a,b.childNodes[c]),d}function i(a,b,c){if(z(a),z(b),d(b)!=d(a))throw new M("WRONG_DOCUMENT_ERR");var e=R(a.startContainer,a.startOffset,b.endContainer,b.endOffset),f=R(a.endContainer,a.endOffset,b.startContainer,b.startOffset);return c?e<=0&&f>=0:e<0&&f>0}function j(a){for(var b,c,e,f=d(a.range).createDocumentFragment();c=a.next();){if(b=a.isPartiallySelectedSubtree(),c=c.cloneNode(!b),b&&(e=a.getSubtreeIterator(),c.appendChild(j(e)),e.detach()),10==c.nodeType)// DocumentType
throw new M("HIERARCHY_REQUEST_ERR");f.appendChild(c)}return f}function k(a,b,c){var d,e;c=c||{stop:!1};for(var f,g;f=a.next();)if(a.isPartiallySelectedSubtree()){if(b(f)===!1)return void(c.stop=!0);if(
// The node is partially selected by the Range, so we can use a new RangeIterator on the portion of
// the node selected by the Range.
g=a.getSubtreeIterator(),k(g,b,c),g.detach(),c.stop)return}else for(
// The whole node is selected, so we can use efficient DOM iteration to iterate over the node and its
// descendants
d=J.createIterator(f);e=d.next();)if(b(e)===!1)return void(c.stop=!0)}function l(a){for(var b;a.next();)a.isPartiallySelectedSubtree()?(b=a.getSubtreeIterator(),l(b),b.detach()):a.remove()}function m(a){for(var b,c,e=d(a.range).createDocumentFragment();b=a.next();){if(a.isPartiallySelectedSubtree()?(b=b.cloneNode(!1),c=a.getSubtreeIterator(),b.appendChild(m(c)),c.detach()):a.remove(),10==b.nodeType)// DocumentType
throw new M("HIERARCHY_REQUEST_ERR");e.appendChild(b)}return e}function n(a,b,c){var d,e=!(!b||!b.length),f=!!c;e&&(d=new RegExp("^("+b.join("|")+")$"));var g=[];return k(new p(a,!1),function(b){if((!e||d.test(b.nodeType))&&(!f||c(b))){
// Don't include a boundary container if it is a character data node and the range does not contain any
// of its character data. See issue 190.
var h=a.startContainer;if(b!=h||!N(h)||a.startOffset!=h.length){var i=a.endContainer;b==i&&N(i)&&0==a.endOffset||g.push(b)}}}),g}function o(a){var b="undefined"==typeof a.getName?"Range":a.getName();return"["+b+"("+J.inspectNode(a.startContainer)+":"+a.startOffset+", "+J.inspectNode(a.endContainer)+":"+a.endOffset+")]"}/*----------------------------------------------------------------------------------------------------------------*/
// RangeIterator code partially borrows from IERange by Tim Ryan (http://github.com/timcameronryan/IERange)
function p(a,b){if(this.range=a,this.clonePartiallySelectedTextNodes=b,!a.collapsed){this.sc=a.startContainer,this.so=a.startOffset,this.ec=a.endContainer,this.eo=a.endOffset;var c=a.commonAncestorContainer;this.sc===this.ec&&N(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==c||N(this.sc)?T(this.sc,c,!0):this.sc.childNodes[this.so],this._last=this.ec!==c||N(this.ec)?T(this.ec,c,!0):this.ec.childNodes[this.eo-1])}}function q(a){return function(b,c){for(var d,e=c?b:b.parentNode;e;){if(d=e.nodeType,V(a,d))return e;e=e.parentNode}return null}}function r(a,b){if(ea(a,b))throw new M("INVALID_NODE_TYPE_ERR")}function s(a,b){if(!V(b,a.nodeType))throw new M("INVALID_NODE_TYPE_ERR")}function t(a,b){if(b<0||b>(N(a)?a.length:a.childNodes.length))throw new M("INDEX_SIZE_ERR")}function u(a,b){if(ca(a,!0)!==ca(b,!0))throw new M("WRONG_DOCUMENT_ERR")}function v(a){if(da(a,!0))throw new M("NO_MODIFICATION_ALLOWED_ERR")}function w(a,b){if(!a)throw new M(b)}function x(a,b){return b<=(N(a)?a.length:a.childNodes.length)}function y(a){return!!a.startContainer&&!!a.endContainer&&!(X&&(J.isBrokenNode(a.startContainer)||J.isBrokenNode(a.endContainer)))&&W(a.startContainer)==W(a.endContainer)&&x(a.startContainer,a.startOffset)&&x(a.endContainer,a.endOffset)}function z(a){if(!y(a))throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: ("+a.inspect()+")")}function A(a,b){z(a);var c=a.startContainer,d=a.startOffset,e=a.endContainer,f=a.endOffset,g=c===e;N(e)&&f>0&&f<e.length&&S(e,f,b),N(c)&&d>0&&d<c.length&&(c=S(c,d,b),g?(f-=d,e=c):e==c.parentNode&&f>=O(c)&&f++,d=0),a.setStartAndEnd(c,d,e,f)}function B(a){z(a);var b=a.commonAncestorContainer.parentNode.cloneNode(!1);return b.appendChild(a.cloneContents()),b.innerHTML}function C(a){a.START_TO_START=ja,a.START_TO_END=ka,a.END_TO_END=la,a.END_TO_START=ma,a.NODE_BEFORE=na,a.NODE_AFTER=oa,a.NODE_BEFORE_AND_AFTER=pa,a.NODE_INSIDE=qa}function D(a){C(a),C(a.prototype)}function E(a,b){return function(){z(this);var c,d,e=this.startContainer,f=this.startOffset,h=this.commonAncestorContainer,i=new p(this,!0);e!==h&&(c=T(e,h,!0),d=g(c),e=d.node,f=d.offset),
// Check none of the range is read-only
k(i,v),i.reset();
// Remove the content
var j=a(i);
// Move to the new position
return i.detach(),b(this,e,f,e,f),j}}function F(b,d){function e(a,b){return function(c){s(c,Z),s(W(c),$);var d=(a?f:g)(c);(b?h:i)(this,d.node,d.offset)}}function h(a,b,c){var e=a.endContainer,f=a.endOffset;b===a.startContainer&&c===a.startOffset||(
// Check the root containers of the range and the new boundary, and also check whether the new boundary
// is after the current end. In either case, collapse the range to the new position
W(b)==W(e)&&1!=R(b,c,e,f)||(e=b,f=c),d(a,b,c,e,f))}function i(a,b,c){var e=a.startContainer,f=a.startOffset;b===a.endContainer&&c===a.endOffset||(
// Check the root containers of the range and the new boundary, and also check whether the new boundary
// is after the current end. In either case, collapse the range to the new position
W(b)==W(e)&&R(b,c,e,f)!=-1||(e=b,f=c),d(a,e,f,b,c))}
// Set up inheritance
var j=function(){};j.prototype=a.rangePrototype,b.prototype=new j,K.extend(b.prototype,{setStart:function(a,b){r(a,!0),t(a,b),h(this,a,b)},setEnd:function(a,b){r(a,!0),t(a,b),i(this,a,b)},/**
                 * Convenience method to set a range's start and end boundaries. Overloaded as follows:
                 * - Two parameters (node, offset) creates a collapsed range at that position
                 * - Three parameters (node, startOffset, endOffset) creates a range contained with node starting at
                 *   startOffset and ending at endOffset
                 * - Four parameters (startNode, startOffset, endNode, endOffset) creates a range starting at startOffset in
                 *   startNode and ending at endOffset in endNode
                 */
setStartAndEnd:function(){var a=arguments,b=a[0],c=a[1],e=b,f=c;switch(a.length){case 3:f=a[2];break;case 4:e=a[2],f=a[3]}d(this,b,c,e,f)},setBoundary:function(a,b,c){this["set"+(c?"Start":"End")](a,b)},setStartBefore:e(!0,!0),setStartAfter:e(!1,!0),setEndBefore:e(!0,!1),setEndAfter:e(!1,!1),collapse:function(a){z(this),a?d(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):d(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(a){r(a,!0),d(this,a,0,a,U(a))},selectNode:function(a){r(a,!1),s(a,Z);var b=f(a),c=g(a);d(this,b.node,b.offset,c.node,c.offset)},extractContents:E(m,d),deleteContents:E(l,d),canSurroundContents:function(){z(this),v(this.startContainer),v(this.endContainer);
// Check if the contents can be surrounded. Specifically, this means whether the range partially selects
// no non-text nodes.
var a=new p(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);return a.detach(),!b},splitBoundaries:function(){A(this)},splitBoundariesPreservingPositions:function(a){A(this,a)},normalizeBoundaries:function(){z(this);var a,b=this.startContainer,c=this.startOffset,e=this.endContainer,f=this.endOffset,g=function(a){var b=a.nextSibling;b&&b.nodeType==a.nodeType&&(e=a,f=a.length,a.appendData(b.data),Y(b))},h=function(a){var d=a.previousSibling;if(d&&d.nodeType==a.nodeType){b=a;var g=a.length;if(c=d.length,a.insertData(0,d.data),Y(d),b==e)f+=c,e=b;else if(e==a.parentNode){var h=O(a);f==h?(e=a,f=g):f>h&&f--}}},i=!0;if(N(e))f==e.length?g(e):0==f&&(a=e.previousSibling,a&&a.nodeType==e.nodeType&&(f=a.length,b==e&&(i=!1),a.appendData(e.data),Y(e),e=a));else{if(f>0){var j=e.childNodes[f-1];j&&N(j)&&g(j)}i=!this.collapsed}if(i){if(N(b))0==c?h(b):c==b.length&&(a=b.nextSibling,a&&a.nodeType==b.nodeType&&(e==a&&(e=b,f+=b.length),b.appendData(a.data),Y(a)));else if(c<b.childNodes.length){var k=b.childNodes[c];k&&N(k)&&h(k)}}else b=e,c=f;d(this,b,c,e,f)},collapseToPoint:function(a,b){r(a,!0),t(a,b),this.setStartAndEnd(a,b)}}),D(b)}/*----------------------------------------------------------------------------------------------------------------*/
// Updates commonAncestorContainer and collapsed after boundary change
function G(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset,a.commonAncestorContainer=a.collapsed?a.startContainer:J.getCommonAncestor(a.startContainer,a.endContainer)}function H(a,b,c,d,e){a.startContainer=b,a.startOffset=c,a.endContainer=d,a.endOffset=e,a.document=J.getDocument(b),G(a)}function I(a){this.startContainer=a,this.startOffset=0,this.endContainer=a,this.endOffset=0,this.document=a,G(this)}var J=a.dom,K=a.util,L=J.DomPosition,M=a.DOMException,N=J.isCharacterDataNode,O=J.getNodeIndex,P=J.isOrIsAncestorOf,Q=J.getDocument,R=J.comparePoints,S=J.splitDataNode,T=J.getClosestAncestorIn,U=J.getNodeLength,V=J.arrayContains,W=J.getRootContainer,X=a.features.crashyTextNodes,Y=J.removeNode;p.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){
// Move to next node
var a=this._current=this._next;
// Check for partially selected text nodes
return a&&(this._next=a!==this._last?a.nextSibling:null,N(a)&&this.clonePartiallySelectedTextNodes&&(a===this.ec&&(a=a.cloneNode(!0)).deleteData(this.eo,a.length-this.eo),this._current===this.sc&&(a=a.cloneNode(!0)).deleteData(0,this.so))),a},remove:function(){var a,b,c=this._current;!N(c)||c!==this.sc&&c!==this.ec?c.parentNode&&Y(c):(a=c===this.sc?this.so:0,b=c===this.ec?this.eo:c.length,a!=b&&c.deleteData(a,b-a))},
// Checks if the current node is partially selected
isPartiallySelectedSubtree:function(){var a=this._current;return c(a,this.range)},getSubtreeIterator:function(){var a;if(this.isSingleCharacterDataNode)a=this.range.cloneRange(),a.collapse(!1);else{a=new I(d(this.range));var b=this._current,c=b,e=0,f=b,g=U(b);P(b,this.sc)&&(c=this.sc,e=this.so),P(b,this.ec)&&(f=this.ec,g=this.eo),H(a,c,e,f,g)}return new p(a,this.clonePartiallySelectedTextNodes)},detach:function(){this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}};/*----------------------------------------------------------------------------------------------------------------*/
var Z=[1,3,4,5,7,8,10],$=[2,9,11],_=[5,6,10,12],aa=[1,3,4,5,7,8,10,11],ba=[1,3,4,5,7,8],ca=q([9,11]),da=q(_),ea=q([6,10,12]),fa=document.createElement("style"),ga=!1;try{fa.innerHTML="<b>x</b>",ga=3==fa.firstChild.nodeType}catch(a){}a.features.htmlParsingConforms=ga;var ha=ga?
// Implementation as per HTML parsing spec, trusting in the browser's implementation of innerHTML. See
// discussion and base code for this implementation at issue 67.
// Spec: http://html5.org/specs/dom-parsing.html#extensions-to-the-range-interface
// Thanks to Aleks Williams.
function(a){
// "Let node the context object's start's node."
var b=this.startContainer,c=Q(b);
// "If the context object's start's node is null, raise an INVALID_STATE_ERR
// exception and abort these steps."
if(!b)throw new M("INVALID_STATE_ERR");
// "Let element be as follows, depending on node's interface:"
// Document, Document Fragment: null
var d=null;
// "If this raises an exception, then abort these steps. Otherwise, let new
// children be the nodes returned."
// "Let fragment be a new DocumentFragment."
// "Append all new children to fragment."
// "Return fragment."
// "Element: node"
// "If either element is null or element's ownerDocument is an HTML document
// and element's local name is "html" and element's namespace is the HTML
// namespace"
// "let element be a new Element with "body" as its local name and the HTML
// namespace as its namespace.""
// "If the node's document is an HTML document: Invoke the HTML fragment parsing algorithm."
// "If the node's document is an XML document: Invoke the XML fragment parsing algorithm."
// "In either case, the algorithm must be invoked with fragment as the input
// and element as the context element."
return 1==b.nodeType?d=b:N(b)&&(d=J.parentElement(b)),d=null===d||"HTML"==d.nodeName&&J.isHtmlNamespace(Q(d).documentElement)&&J.isHtmlNamespace(d)?c.createElement("body"):d.cloneNode(!1),d.innerHTML=a,J.fragmentFromNodeChildren(d)}:
// In this case, innerHTML cannot be trusted, so fall back to a simpler, non-conformant implementation that
// previous versions of Rangy used (with the exception of using a body element rather than a div)
function(a){var b=d(this),c=b.createElement("body");return c.innerHTML=a,J.fragmentFromNodeChildren(c)},ia=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],ja=0,ka=1,la=2,ma=3,na=0,oa=1,pa=2,qa=3;K.extend(a.rangePrototype,{compareBoundaryPoints:function(a,b){z(this),u(this.startContainer,b.startContainer);var c,d,e,f,g=a==ma||a==ja?"start":"end",h=a==ka||a==ja?"start":"end";return c=this[g+"Container"],d=this[g+"Offset"],e=b[h+"Container"],f=b[h+"Offset"],R(c,d,e,f)},insertNode:function(a){if(z(this),s(a,aa),v(this.startContainer),P(a,this.startContainer))throw new M("HIERARCHY_REQUEST_ERR");
// No check for whether the container of the start of the Range is of a type that does not allow
// children of the type of node: the browser's DOM implementation should do this for us when we attempt
// to add the node
var b=h(a,this.startContainer,this.startOffset);this.setStartBefore(b)},cloneContents:function(){z(this);var a,b;if(this.collapsed)return d(this).createDocumentFragment();if(this.startContainer===this.endContainer&&N(this.startContainer))return a=this.startContainer.cloneNode(!0),a.data=a.data.slice(this.startOffset,this.endOffset),b=d(this).createDocumentFragment(),b.appendChild(a),b;var c=new p(this,!0);return a=j(c),c.detach(),a},canSurroundContents:function(){z(this),v(this.startContainer),v(this.endContainer);
// Check if the contents can be surrounded. Specifically, this means whether the range partially selects
// no non-text nodes.
var a=new p(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);return a.detach(),!b},surroundContents:function(a){if(s(a,ba),!this.canSurroundContents())throw new M("INVALID_STATE_ERR");
// Extract the contents
var b=this.extractContents();
// Clear the children of the node
if(a.hasChildNodes())for(;a.lastChild;)a.removeChild(a.lastChild);
// Insert the new node and add the extracted contents
h(a,this.startContainer,this.startOffset),a.appendChild(b),this.selectNode(a)},cloneRange:function(){z(this);for(var a,b=new I(d(this)),c=ia.length;c--;)a=ia[c],b[a]=this[a];return b},toString:function(){z(this);var a=this.startContainer;if(a===this.endContainer&&N(a))return 3==a.nodeType||4==a.nodeType?a.data.slice(this.startOffset,this.endOffset):"";var b=[],c=new p(this,!0);return k(c,function(a){
// Accept only text or CDATA nodes, not comments
3!=a.nodeType&&4!=a.nodeType||b.push(a.data)}),c.detach(),b.join("")},
// The methods below are all non-standard. The following batch were introduced by Mozilla but have since
// been removed from Mozilla.
compareNode:function(a){z(this);var b=a.parentNode,c=O(a);if(!b)throw new M("NOT_FOUND_ERR");var d=this.comparePoint(b,c),e=this.comparePoint(b,c+1);return d<0?e>0?pa:na:e>0?oa:qa},comparePoint:function(a,b){return z(this),w(a,"HIERARCHY_REQUEST_ERR"),u(a,this.startContainer),R(a,b,this.startContainer,this.startOffset)<0?-1:R(a,b,this.endContainer,this.endOffset)>0?1:0},createContextualFragment:ha,toHtml:function(){return B(this)},
// touchingIsIntersecting determines whether this method considers a node that borders a range intersects
// with it (as in WebKit) or not (as in Gecko pre-1.9, and the default)
intersectsNode:function(a,b){if(z(this),W(a)!=e(this))return!1;var c=a.parentNode,d=O(a);if(!c)return!0;var f=R(c,d,this.endContainer,this.endOffset),g=R(c,d+1,this.startContainer,this.startOffset);return b?f<=0&&g>=0:f<0&&g>0},isPointInRange:function(a,b){return z(this),w(a,"HIERARCHY_REQUEST_ERR"),u(a,this.startContainer),R(a,b,this.startContainer,this.startOffset)>=0&&R(a,b,this.endContainer,this.endOffset)<=0},
// The methods below are non-standard and invented by me.
// Sharing a boundary start-to-end or end-to-start does not count as intersection.
intersectsRange:function(a){return i(this,a,!1)},
// Sharing a boundary start-to-end or end-to-start does count as intersection.
intersectsOrTouchesRange:function(a){return i(this,a,!0)},intersection:function(a){if(this.intersectsRange(a)){var b=R(this.startContainer,this.startOffset,a.startContainer,a.startOffset),c=R(this.endContainer,this.endOffset,a.endContainer,a.endOffset),d=this.cloneRange();return b==-1&&d.setStart(a.startContainer,a.startOffset),1==c&&d.setEnd(a.endContainer,a.endOffset),d}return null},union:function(a){if(this.intersectsOrTouchesRange(a)){var b=this.cloneRange();return R(a.startContainer,a.startOffset,this.startContainer,this.startOffset)==-1&&b.setStart(a.startContainer,a.startOffset),1==R(a.endContainer,a.endOffset,this.endContainer,this.endOffset)&&b.setEnd(a.endContainer,a.endOffset),b}throw new M("Ranges do not intersect")},containsNode:function(a,b){return b?this.intersectsNode(a,!1):this.compareNode(a)==qa},containsNodeContents:function(a){return this.comparePoint(a,0)>=0&&this.comparePoint(a,U(a))<=0},containsRange:function(a){var b=this.intersection(a);return null!==b&&a.equals(b)},containsNodeText:function(a){var b=this.cloneRange();b.selectNode(a);var c=b.getNodes([3]);if(c.length>0){b.setStart(c[0],0);var d=c.pop();return b.setEnd(d,d.length),this.containsRange(b)}return this.containsNodeContents(a)},getNodes:function(a,b){return z(this),n(this,a,b)},getDocument:function(){return d(this)},collapseBefore:function(a){this.setEndBefore(a),this.collapse(!1)},collapseAfter:function(a){this.setStartAfter(a),this.collapse(!0)},getBookmark:function(b){var c=d(this),e=a.createRange(c);b=b||J.getBody(c),e.selectNodeContents(b);var f=this.intersection(e),g=0,h=0;return f&&(e.setEnd(f.startContainer,f.startOffset),g=e.toString().length,h=g+f.toString().length),{start:g,end:h,containerNode:b}},moveToBookmark:function(a){var b=a.containerNode,c=0;this.setStart(b,0),this.collapse(!0);for(var d,e,f,g,h=[b],i=!1,j=!1;!j&&(d=h.pop());)if(3==d.nodeType)e=c+d.length,!i&&a.start>=c&&a.start<=e&&(this.setStart(d,a.start-c),i=!0),i&&a.end>=c&&a.end<=e&&(this.setEnd(d,a.end-c),j=!0),c=e;else for(g=d.childNodes,f=g.length;f--;)h.push(g[f])},getName:function(){return"DomRange"},equals:function(a){return I.rangesEqual(this,a)},isValid:function(){return y(this)},inspect:function(){return o(this)},detach:function(){}}),F(I,H),K.extend(I,{rangeProperties:ia,RangeIterator:p,copyComparisonConstants:D,createPrototypeRange:F,inspect:o,toHtml:B,getRangeDocument:d,rangesEqual:function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset}}),a.DomRange=I}),/*----------------------------------------------------------------------------------------------------------------*/
// Wrappers for the browser's native DOM Range and/or TextRange implementation
H.createCoreModule("WrappedRange",["DomRange"],function(a,b){var c,d,e=a.dom,f=a.util,g=e.DomPosition,h=a.DomRange,i=e.getBody,j=e.getContentDocument,k=e.isCharacterDataNode;if(/*----------------------------------------------------------------------------------------------------------------*/
a.features.implementsDomRange&&
// This is a wrapper around the browser's native DOM Range. It has two aims:
// - Provide workarounds for specific browser bugs
// - provide convenient extensions, which are inherited from Rangy's DomRange
!function(){function d(a){for(var b,c=m.length;c--;)b=m[c],a[b]=a.nativeRange[b];
// Fix for broken collapsed property in IE 9.
a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset}function g(a,b,c,d,e){var f=a.startContainer!==b||a.startOffset!=c,g=a.endContainer!==d||a.endOffset!=e,h=!a.equals(a.nativeRange);
// Always set both boundaries for the benefit of IE9 (see issue 35)
(f||g||h)&&(a.setEnd(d,e),a.setStart(b,c))}var k,l,m=h.rangeProperties;c=function(a){if(!a)throw b.createError("WrappedRange: Range must be specified");this.nativeRange=a,d(this)},h.createPrototypeRange(c,g),k=c.prototype,k.selectNode=function(a){this.nativeRange.selectNode(a),d(this)},k.cloneContents=function(){return this.nativeRange.cloneContents()},
// Due to a long-standing Firefox bug that I have not been able to find a reliable way to detect,
// insertNode() is never delegated to the native range.
k.surroundContents=function(a){this.nativeRange.surroundContents(a),d(this)},k.collapse=function(a){this.nativeRange.collapse(a),d(this)},k.cloneRange=function(){return new c(this.nativeRange.cloneRange())},k.refresh=function(){d(this)},k.toString=function(){return this.nativeRange.toString()};
// Create test range and node for feature detection
var n=document.createTextNode("test");i(document).appendChild(n);var o=document.createRange();/*--------------------------------------------------------------------------------------------------------*/
// Test for Firefox 2 bug that prevents moving the start of a Range to a point after its current end and
// correct for it
o.setStart(n,0),o.setEnd(n,0);try{o.setStart(n,1),k.setStart=function(a,b){this.nativeRange.setStart(a,b),d(this)},k.setEnd=function(a,b){this.nativeRange.setEnd(a,b),d(this)},l=function(a){return function(b){this.nativeRange[a](b),d(this)}}}catch(a){k.setStart=function(a,b){try{this.nativeRange.setStart(a,b)}catch(c){this.nativeRange.setEnd(a,b),this.nativeRange.setStart(a,b)}d(this)},k.setEnd=function(a,b){try{this.nativeRange.setEnd(a,b)}catch(c){this.nativeRange.setStart(a,b),this.nativeRange.setEnd(a,b)}d(this)},l=function(a,b){return function(c){try{this.nativeRange[a](c)}catch(d){this.nativeRange[b](c),this.nativeRange[a](c)}d(this)}}}k.setStartBefore=l("setStartBefore","setEndBefore"),k.setStartAfter=l("setStartAfter","setEndAfter"),k.setEndBefore=l("setEndBefore","setStartBefore"),k.setEndAfter=l("setEndAfter","setStartAfter"),/*--------------------------------------------------------------------------------------------------------*/
// Always use DOM4-compliant selectNodeContents implementation: it's simpler and less code than testing
// whether the native implementation can be trusted
k.selectNodeContents=function(a){this.setStartAndEnd(a,0,e.getNodeLength(a))},/*--------------------------------------------------------------------------------------------------------*/
// Test for and correct WebKit bug that has the behaviour of compareBoundaryPoints round the wrong way for
// constants START_TO_END and END_TO_START: https://bugs.webkit.org/show_bug.cgi?id=20738
o.selectNodeContents(n),o.setEnd(n,3);var p=document.createRange();p.selectNodeContents(n),p.setEnd(n,4),p.setStart(n,2),o.compareBoundaryPoints(o.START_TO_END,p)==-1&&1==o.compareBoundaryPoints(o.END_TO_START,p)?
// This is the wrong way round, so correct for it
k.compareBoundaryPoints=function(a,b){return b=b.nativeRange||b,a==b.START_TO_END?a=b.END_TO_START:a==b.END_TO_START&&(a=b.START_TO_END),this.nativeRange.compareBoundaryPoints(a,b)}:k.compareBoundaryPoints=function(a,b){return this.nativeRange.compareBoundaryPoints(a,b.nativeRange||b)};/*--------------------------------------------------------------------------------------------------------*/
// Test for IE deleteContents() and extractContents() bug and correct it. See issue 107.
var q=document.createElement("div");q.innerHTML="123";var r=q.firstChild,s=i(document);s.appendChild(q),o.setStart(r,1),o.setEnd(r,2),o.deleteContents(),"13"==r.data&&(
// Behaviour is correct per DOM4 Range so wrap the browser's implementation of deleteContents() and
// extractContents()
k.deleteContents=function(){this.nativeRange.deleteContents(),d(this)},k.extractContents=function(){var a=this.nativeRange.extractContents();return d(this),a}),s.removeChild(q),s=null,/*--------------------------------------------------------------------------------------------------------*/
// Test for existence of createContextualFragment and delegate to it if it exists
f.isHostMethod(o,"createContextualFragment")&&(k.createContextualFragment=function(a){return this.nativeRange.createContextualFragment(a)}),/*--------------------------------------------------------------------------------------------------------*/
// Clean up
i(document).removeChild(n),k.getName=function(){return"WrappedRange"},a.WrappedRange=c,a.createNativeRange=function(a){return a=j(a,b,"createNativeRange"),a.createRange()}}(),a.features.implementsTextRange){/*
            This is a workaround for a bug where IE returns the wrong container element from the TextRange's parentElement()
            method. For example, in the following (where pipes denote the selection boundaries):

            <ul id="ul"><li id="a">| a </li><li id="b"> b |</li></ul>

            var range = document.selection.createRange();
            alert(range.parentElement().id); // Should alert "ul" but alerts "b"

            This method returns the common ancestor node of the following:
            - the parentElement() of the textRange
            - the parentElement() of the textRange after calling collapse(true)
            - the parentElement() of the textRange after calling collapse(false)
            */
var l=function(a){var b=a.parentElement(),c=a.duplicate();c.collapse(!0);var d=c.parentElement();c=a.duplicate(),c.collapse(!1);var f=c.parentElement(),g=d==f?d:e.getCommonAncestor(d,f);return g==b?g:e.getCommonAncestor(b,g)},m=function(a){return 0==a.compareEndPoints("StartToEnd",a)},n=function(a,b,c,d,f){var h=a.duplicate();h.collapse(c);var i=h.parentElement();
// Deal with nodes that cannot "contain rich HTML markup". In practice, this means form inputs, images and
// similar. See http://msdn.microsoft.com/en-us/library/aa703950%28VS.85%29.aspx
if(
// Sometimes collapsing a TextRange that's at the start of a text node can move it into the previous node, so
// check for that
e.isOrIsAncestorOf(b,i)||(i=b),!i.canHaveHTML){var j=new g(i.parentNode,e.getNodeIndex(i));return{boundaryPosition:j,nodeInfo:{nodeIndex:j.offset,containerElement:j.node}}}var l=e.getDocument(i).createElement("span");
// Workaround for HTML5 Shiv's insane violation of document.createElement(). See Rangy issue 104 and HTML5
// Shiv issue 64: https://github.com/aFarkas/html5shiv/issues/64
l.parentNode&&e.removeNode(l);for(var m,n,o,p,q,r=c?"StartToStart":"StartToEnd",s=f&&f.containerElement==i?f.nodeIndex:0,t=i.childNodes.length,u=t,v=u;;){if(v==t?i.appendChild(l):i.insertBefore(l,i.childNodes[v]),h.moveToElementText(l),m=h.compareEndPoints(r,a),0==m||s==u)break;if(m==-1){if(u==s+1)
// We know the endth child node is after the range boundary, so we must be done.
break;s=v}else u=u==s+1?s:v;v=Math.floor((s+u)/2),i.removeChild(l)}if(
// We've now reached or gone past the boundary of the text range we're interested in
// so have identified the node we want
q=l.nextSibling,m==-1&&q&&k(q)){
// This is a character data node (text, comment, cdata). The working range is collapsed at the start of
// the node containing the text range's boundary, so we move the end of the working range to the
// boundary point and measure the length of its text to get the boundary's offset within the node.
h.setEndPoint(c?"EndToStart":"EndToEnd",a);var w;if(/[\r\n]/.test(q.data)){/*
                        For the particular case of a boundary within a text node containing rendered line breaks (within a
                        <pre> element, for example), we need a slightly complicated approach to get the boundary's offset in
                        IE. The facts:

                        - Each line break is represented as \r in the text node's data/nodeValue properties
                        - Each line break is represented as \r\n in the TextRange's 'text' property
                        - The 'text' property of the TextRange does not contain trailing line breaks

                        To get round the problem presented by the final fact above, we can use the fact that TextRange's
                        moveStart() and moveEnd() methods return the actual number of characters moved, which is not
                        necessarily the same as the number of characters it was instructed to move. The simplest approach is
                        to use this to store the characters moved when moving both the start and end of the range to the
                        start of the document body and subtracting the start offset from the end offset (the
                        "move-negative-gazillion" method). However, this is extremely slow when the document is large and
                        the range is near the end of it. Clearly doing the mirror image (i.e. moving the range boundaries to
                        the end of the document) has the same problem.

                        Another approach that works is to use moveStart() to move the start boundary of the range up to the
                        end boundary one character at a time and incrementing a counter with the value returned by the
                        moveStart() call. However, the check for whether the start boundary has reached the end boundary is
                        expensive, so this method is slow (although unlike "move-negative-gazillion" is largely unaffected
                        by the location of the range within the document).

                        The approach used below is a hybrid of the two methods above. It uses the fact that a string
                        containing the TextRange's 'text' property with each \r\n converted to a single \r character cannot
                        be longer than the text of the TextRange, so the start of the range is moved that length initially
                        and then a character at a time to make up for any trailing line breaks not contained in the 'text'
                        property. This has good performance in most situations compared to the previous two methods.
                        */
var x=h.duplicate(),y=x.text.replace(/\r\n/g,"\r").length;for(w=x.moveStart("character",y);(m=x.compareEndPoints("StartToEnd",x))==-1;)w++,x.moveStart("character",1)}else w=h.text.length;p=new g(q,w)}else
// If the boundary immediately follows a character data node and this is the end boundary, we should favour
// a position within that, and likewise for a start boundary preceding a character data node
n=(d||!c)&&l.previousSibling,o=(d||c)&&l.nextSibling,p=o&&k(o)?new g(o,0):n&&k(n)?new g(n,n.data.length):new g(i,e.getNodeIndex(l));
// Clean up
return e.removeNode(l),{boundaryPosition:p,nodeInfo:{nodeIndex:v,containerElement:i}}},o=function(a,b){var c,d,f,g,h=a.offset,j=e.getDocument(a.node),l=i(j).createTextRange(),m=k(a.node);
// Position the range immediately before the node containing the boundary
// Making the working element non-empty element persuades IE to consider the TextRange boundary to be within
// the element rather than immediately before or after it
// insertBefore is supposed to work like appendChild if the second parameter is null. However, a bug report
// for IERange suggests that it can crash the browser: http://code.google.com/p/ierange/issues/detail?id=12
// Clean up
// Move the working range to the text offset, if required
return m?(c=a.node,d=c.parentNode):(g=a.node.childNodes,c=h<g.length?g[h]:null,d=a.node),f=j.createElement("span"),f.innerHTML="&#feff;",c?d.insertBefore(f,c):d.appendChild(f),l.moveToElementText(f),l.collapse(!b),d.removeChild(f),m&&l[b?"moveStart":"moveEnd"]("character",h),l};/*------------------------------------------------------------------------------------------------------------*/
// This is a wrapper around a TextRange, providing full DOM Range functionality using rangy's DomRange as a
// prototype
d=function(a){this.textRange=a,this.refresh()},d.prototype=new h(document),d.prototype.refresh=function(){var a,b,c,d=l(this.textRange);m(this.textRange)?b=a=n(this.textRange,d,!0,!0).boundaryPosition:(c=n(this.textRange,d,!0,!1),a=c.boundaryPosition,
// An optimization used here is that if the start and end boundaries have the same parent element, the
// search scope for the end boundary can be limited to exclude the portion of the element that precedes
// the start boundary
b=n(this.textRange,d,!1,!1,c.nodeInfo).boundaryPosition),this.setStart(a.node,a.offset),this.setEnd(b.node,b.offset)},d.prototype.getName=function(){return"WrappedTextRange"},h.copyComparisonConstants(d);var p=function(a){if(a.collapsed)return o(new g(a.startContainer,a.startOffset),!0);var b=o(new g(a.startContainer,a.startOffset),!0),c=o(new g(a.endContainer,a.endOffset),!1),d=i(h.getRangeDocument(a)).createTextRange();return d.setEndPoint("StartToStart",b),d.setEndPoint("EndToEnd",c),d};
// IE 9 and above have both implementations and Rangy makes both available. The next few lines sets which
// implementation to use by default.
if(d.rangeToTextRange=p,d.prototype.toTextRange=function(){return p(this)},a.WrappedTextRange=d,!a.features.implementsDomRange||a.config.preferTextRange){
// Add WrappedTextRange as the Range property of the global object to allow expression like Range.END_TO_END to work
var q=function(a){return a("return this;")()}(Function);"undefined"==typeof q.Range&&(q.Range=d),a.createNativeRange=function(a){return a=j(a,b,"createNativeRange"),i(a).createTextRange()},a.WrappedRange=d}}a.createRange=function(c){return c=j(c,b,"createRange"),new a.WrappedRange(a.createNativeRange(c))},a.createRangyRange=function(a){return a=j(a,b,"createRangyRange"),new h(a)},f.createAliasForDeprecatedMethod(a,"createIframeRange","createRange"),f.createAliasForDeprecatedMethod(a,"createIframeRangyRange","createRangyRange"),a.addShimListener(function(b){var c=b.document;"undefined"==typeof c.createRange&&(c.createRange=function(){return a.createRange(c)}),c=b=null})}),/*----------------------------------------------------------------------------------------------------------------*/
// This module creates a selection object wrapper that conforms as closely as possible to the Selection specification
// in the HTML Editing spec (http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections)
H.createCoreModule("WrappedSelection",["DomRange","WrappedRange"],function(a,b){
// Utility function to support direction parameters in the API that may be a string ("backward", "backwards",
// "forward" or "forwards") or a Boolean (true for backwards).
function c(a){return"string"==typeof a?/^backward(s)?$/i.test(a):!!a}function d(a,c){if(a){if(C.isWindow(a))return a;if(a instanceof r)return a.win;var d=C.getContentDocument(a,b,c);return C.getWindow(d)}return window}function e(a){return d(a,"getWinSelection").getSelection()}function f(a){return d(a,"getDocSelection").document.selection}function g(a){var b=!1;return a.anchorNode&&(b=1==C.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset)),b}function h(a,b,c){var d=c?"end":"start",e=c?"start":"end";a.anchorNode=b[d+"Container"],a.anchorOffset=b[d+"Offset"],a.focusNode=b[e+"Container"],a.focusOffset=b[e+"Offset"]}function i(a){var b=a.nativeSelection;a.anchorNode=b.anchorNode,a.anchorOffset=b.anchorOffset,a.focusNode=b.focusNode,a.focusOffset=b.focusOffset}function j(a){a.anchorNode=a.focusNode=null,a.anchorOffset=a.focusOffset=0,a.rangeCount=0,a.isCollapsed=!0,a._ranges.length=0}function k(b){var c;return b instanceof F?(c=a.createNativeRange(b.getDocument()),c.setEnd(b.endContainer,b.endOffset),c.setStart(b.startContainer,b.startOffset)):b instanceof G?c=b.nativeRange:J.implementsDomRange&&b instanceof C.getWindow(b.startContainer).Range&&(c=b),c}function l(a){if(!a.length||1!=a[0].nodeType)return!1;for(var b=1,c=a.length;b<c;++b)if(!C.isAncestorOf(a[0],a[b]))return!1;return!0}function m(a){var c=a.getNodes();if(!l(c))throw b.createError("getSingleElementFromRange: range "+a.inspect()+" did not consist of a single element");return c[0]}
// Simple, quick test which only needs to distinguish between a TextRange and a ControlRange
function n(a){return!!a&&"undefined"!=typeof a.text}function o(a,b){
// Create a Range from the selected TextRange
var c=new G(b);a._ranges=[c],h(a,c,!1),a.rangeCount=1,a.isCollapsed=c.collapsed}function p(b){if(
// Update the wrapped selection based on what's now in the native selection
b._ranges.length=0,"None"==b.docSelection.type)j(b);else{var c=b.docSelection.createRange();if(n(c))
// This case (where the selection type is "Control" and calling createRange() on the selection returns
// a TextRange) can happen in IE 9. It happens, for example, when all elements in the selected
// ControlRange have been removed from the ControlRange and removed from the document.
o(b,c);else{b.rangeCount=c.length;for(var d,e=L(c.item(0)),f=0;f<b.rangeCount;++f)d=a.createRange(e),d.selectNode(c.item(f)),b._ranges.push(d);b.isCollapsed=1==b.rangeCount&&b._ranges[0].collapsed,h(b,b._ranges[b.rangeCount-1],!1)}}}function q(a,c){for(var d=a.docSelection.createRange(),e=m(c),f=L(d.item(0)),g=M(f).createControlRange(),h=0,i=d.length;h<i;++h)g.add(d.item(h));try{g.add(e)}catch(a){throw b.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}g.select(),
// Update the wrapped selection based on what's now in the native selection
p(a)}function r(a,b,c){this.nativeSelection=a,this.docSelection=b,this._ranges=[],this.win=c,this.refresh()}function s(a){a.win=a.anchorNode=a.focusNode=a._ranges=null,a.rangeCount=a.anchorOffset=a.focusOffset=0,a.detached=!0}function t(a,b){for(var c,d,e=ba.length;e--;)if(c=ba[e],d=c.selection,"deleteAll"==b)s(d);else if(c.win==a)return"delete"==b?(ba.splice(e,1),!0):d;return"deleteAll"==b&&(ba.length=0),null}function u(a,c){for(var d,e=L(c[0].startContainer),f=M(e).createControlRange(),g=0,h=c.length;g<h;++g){d=m(c[g]);try{f.add(d)}catch(a){throw b.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")}}f.select(),
// Update the wrapped selection based on what's now in the native selection
p(a)}function v(a,b){if(a.win.document!=L(b))throw new H("WRONG_DOCUMENT_ERR")}function w(b){return function(c,d){var e;this.rangeCount?(e=this.getRangeAt(0),e["set"+(b?"Start":"End")](c,d)):(e=a.createRange(this.win.document),e.setStartAndEnd(c,d)),this.setSingleRange(e,this.isBackward())}}function x(a){var b=[],c=new I(a.anchorNode,a.anchorOffset),d=new I(a.focusNode,a.focusOffset),e="function"==typeof a.getName?a.getName():"Selection";if("undefined"!=typeof a.rangeCount)for(var f=0,g=a.rangeCount;f<g;++f)b[f]=F.inspect(a.getRangeAt(f));return"["+e+"(Ranges: "+b.join(", ")+")(anchor: "+c.inspect()+", focus: "+d.inspect()+"]"}a.config.checkSelectionRanges=!0;var y,z,A="boolean",B="number",C=a.dom,D=a.util,E=D.isHostMethod,F=a.DomRange,G=a.WrappedRange,H=a.DOMException,I=C.DomPosition,J=a.features,K="Control",L=C.getDocument,M=C.getBody,N=F.rangesEqual,O=E(window,"getSelection"),P=D.isHostObject(document,"selection");J.implementsWinGetSelection=O,J.implementsDocSelection=P;var Q=P&&(!O||a.config.preferTextRange);if(Q)y=f,a.isSelectionValid=function(a){var b=d(a,"isSelectionValid").document,c=b.selection;
// Check whether the selection TextRange is actually contained within the correct document
return"None"!=c.type||L(c.createRange().parentElement())==b};else{if(!O)return b.fail("Neither document.selection or window.getSelection() detected."),!1;y=e,a.isSelectionValid=function(){return!0}}a.getNativeSelection=y;var R=y();
// In Firefox, the selection is null in an iframe with display: none. See issue #138.
if(!R)return b.fail("Native selection was null (possibly issue 138?)"),!1;var S=a.createNativeRange(document),T=M(document),U=D.areHostProperties(R,["anchorNode","focusNode","anchorOffset","focusOffset"]);J.selectionHasAnchorAndFocus=U;
// Test for existence of native selection extend() method
var V=E(R,"extend");J.selectionHasExtend=V;
// Test if rangeCount exists
var W=typeof R.rangeCount==B;J.selectionHasRangeCount=W;var X=!1,Y=!0,Z=V?function(b,c){var d=F.getRangeDocument(c),e=a.createRange(d);e.collapseToPoint(c.endContainer,c.endOffset),b.addRange(k(e)),b.extend(c.startContainer,c.startOffset)}:null;D.areHostMethods(R,["addRange","getRangeAt","removeAllRanges"])&&typeof R.rangeCount==B&&J.implementsDomRange&&!function(){
// Previously an iframe was used but this caused problems in some circumstances in IE, so tests are
// performed on the current document's selection. See issue 109.
// Note also that if a selection previously existed, it is wiped and later restored by these tests. This
// will result in the selection direction begin reversed if the original selection was backwards and the
// browser does not support setting backwards selections (Internet Explorer, I'm looking at you).
var b=window.getSelection();if(b){for(var c=b.rangeCount,d=c>1,e=[],f=g(b),h=0;h<c;++h)e[h]=b.getRangeAt(h);
// Create some test elements
var i=C.createTestElement(document,"",!1),j=i.appendChild(document.createTextNode("??????")),k=document.createRange();
// Test whether the native selection is capable of supporting multiple ranges.
if(k.setStart(j,1),k.collapse(!0),b.removeAllRanges(),b.addRange(k),Y=1==b.rangeCount,b.removeAllRanges(),!d){
// Doing the original feature test here in Chrome 36 (and presumably later versions) prints a
// console error of "Discontiguous selection is not supported." that cannot be suppressed. There's
// nothing we can do about this while retaining the feature test so we have to resort to a browser
// sniff. I'm not happy about it. See
// https://code.google.com/p/chromium/issues/detail?id=399791
var l=window.navigator.appVersion.match(/Chrome\/(.*?) /);if(l&&parseInt(l[1])>=36)X=!1;else{var m=k.cloneRange();k.setStart(j,0),m.setEnd(j,3),m.setStart(j,2),b.addRange(k),b.addRange(m),X=2==b.rangeCount}}for(
// Clean up
C.removeNode(i),b.removeAllRanges(),h=0;h<c;++h)0==h&&f?Z?Z(b,e[h]):(a.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend"),b.addRange(e[h])):b.addRange(e[h])}}(),J.selectionSupportsMultipleRanges=X,J.collapsedNonEditableSelectionsSupported=Y;
// ControlRanges
var $,_=!1;T&&E(T,"createControlRange")&&($=T.createControlRange(),D.areHostProperties($,["item","add"])&&(_=!0)),J.implementsControlRange=_,
// Selection collapsedness
z=U?function(a){return a.anchorNode===a.focusNode&&a.anchorOffset===a.focusOffset}:function(a){return!!a.rangeCount&&a.getRangeAt(a.rangeCount-1).collapsed};var aa;E(R,"getRangeAt")?
// try/catch is present because getRangeAt() must have thrown an error in some browser and some situation.
// Unfortunately, I didn't write a comment about the specifics and am now scared to take it out. Let that be a
// lesson to us all, especially me.
aa=function(a,b){try{return a.getRangeAt(b)}catch(a){return null}}:U&&(aa=function(b){var c=L(b.anchorNode),d=a.createRange(c);
// Handle the case when the selection was selected backwards (from the end to the start in the
// document)
return d.setStartAndEnd(b.anchorNode,b.anchorOffset,b.focusNode,b.focusOffset),d.collapsed!==this.isCollapsed&&d.setStartAndEnd(b.focusNode,b.focusOffset,b.anchorNode,b.anchorOffset),d}),r.prototype=a.selectionPrototype;var ba=[],ca=function(a){
// Check if the parameter is a Rangy Selection object
if(a&&a instanceof r)return a.refresh(),a;a=d(a,"getNativeSelection");var b=t(a),c=y(a),e=P?f(a):null;return b?(b.nativeSelection=c,b.docSelection=e,b.refresh()):(b=new r(c,e,a),ba.push({win:a,selection:b})),b};a.getSelection=ca,D.createAliasForDeprecatedMethod(a,"getIframeSelection","getSelection");var da=r.prototype;
// Selecting a range
if(!Q&&U&&D.areHostMethods(R,["removeAllRanges","addRange"])){da.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),j(this)};var ea=function(a,b){Z(a.nativeSelection,b),a.refresh()};W?da.addRange=function(b,d){if(_&&P&&this.docSelection.type==K)q(this,b);else if(c(d)&&V)ea(this,b);else{var e;X?e=this.rangeCount:(this.removeAllRanges(),e=0);
// Clone the native range so that changing the selected range does not affect the selection.
// This is contrary to the spec but is the only way to achieve consistency between browsers. See
// issue 80.
var f=k(b).cloneRange();try{this.nativeSelection.addRange(f)}catch(a){}if(
// Check whether adding the range was successful
this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==e+1){
// The range was added successfully
// Check whether the range that we added to the selection is reflected in the last range extracted from
// the selection
if(a.config.checkSelectionRanges){var g=aa(this.nativeSelection,this.rangeCount-1);g&&!N(g,b)&&(
// Happens in WebKit with, for example, a selection placed at the start of a text node
b=new G(g))}this._ranges[this.rangeCount-1]=b,h(this,b,ha(this.nativeSelection)),this.isCollapsed=z(this)}else
// The range was not added successfully. The simplest thing is to refresh
this.refresh()}}:da.addRange=function(a,b){c(b)&&V?ea(this,a):(this.nativeSelection.addRange(k(a)),this.refresh())},da.setRanges=function(a){if(_&&P&&a.length>1)u(this,a);else{this.removeAllRanges();for(var b=0,c=a.length;b<c;++b)this.addRange(a[b])}}}else{if(!(E(R,"empty")&&E(S,"select")&&_&&Q))return b.fail("No means of selecting a Range or TextRange was found"),!1;da.removeAllRanges=function(){
// Added try/catch as fix for issue #21
try{
// Check for empty() not working (issue #24)
if(this.docSelection.empty(),"None"!=this.docSelection.type){
// Work around failure to empty a control selection by instead selecting a TextRange and then
// calling empty()
var a;if(this.anchorNode)a=L(this.anchorNode);else if(this.docSelection.type==K){var b=this.docSelection.createRange();b.length&&(a=L(b.item(0)))}if(a){var c=M(a).createTextRange();c.select(),this.docSelection.empty()}}}catch(a){}j(this)},da.addRange=function(b){this.docSelection.type==K?q(this,b):(a.WrappedTextRange.rangeToTextRange(b).select(),this._ranges[0]=b,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,h(this,b,!1))},da.setRanges=function(a){this.removeAllRanges();var b=a.length;b>1?u(this,a):b&&this.addRange(a[0])}}da.getRangeAt=function(a){if(a<0||a>=this.rangeCount)throw new H("INDEX_SIZE_ERR");
// Clone the range to preserve selection-range independence. See issue 80.
return this._ranges[a].cloneRange()};var fa;if(Q)fa=function(b){var c;a.isSelectionValid(b.win)?c=b.docSelection.createRange():(c=M(b.win.document).createTextRange(),c.collapse(!0)),b.docSelection.type==K?p(b):n(c)?o(b,c):j(b)};else if(E(R,"getRangeAt")&&typeof R.rangeCount==B)fa=function(b){if(_&&P&&b.docSelection.type==K)p(b);else if(b._ranges.length=b.rangeCount=b.nativeSelection.rangeCount,b.rangeCount){for(var c=0,d=b.rangeCount;c<d;++c)b._ranges[c]=new a.WrappedRange(b.nativeSelection.getRangeAt(c));h(b,b._ranges[b.rangeCount-1],ha(b.nativeSelection)),b.isCollapsed=z(b)}else j(b)};else{if(!U||typeof R.isCollapsed!=A||typeof S.collapsed!=A||!J.implementsDomRange)return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;fa=function(a){var b,c=a.nativeSelection;c.anchorNode?(b=aa(c,0),a._ranges=[b],a.rangeCount=1,i(a),a.isCollapsed=z(a)):j(a)}}da.refresh=function(a){var b=a?this._ranges.slice(0):null,c=this.anchorNode,d=this.anchorOffset;if(fa(this),a){
// Check the range count first
var e=b.length;if(e!=this._ranges.length)return!0;
// Now check the direction. Checking the anchor position is the same is enough since we're checking all the
// ranges after this
if(this.anchorNode!=c||this.anchorOffset!=d)return!0;
// Finally, compare each range in turn
for(;e--;)if(!N(b[e],this._ranges[e]))return!0;return!1}};
// Removal of a single range
var ga=function(a,b){var c=a.getAllRanges();a.removeAllRanges();for(var d=0,e=c.length;d<e;++d)N(b,c[d])||a.addRange(c[d]);a.rangeCount||j(a)};_&&P?da.removeRange=function(a){if(this.docSelection.type==K){for(var b,c=this.docSelection.createRange(),d=m(a),e=L(c.item(0)),f=M(e).createControlRange(),g=!1,h=0,i=c.length;h<i;++h)b=c.item(h),b!==d||g?f.add(c.item(h)):g=!0;f.select(),
// Update the wrapped selection based on what's now in the native selection
p(this)}else ga(this,a)}:da.removeRange=function(a){ga(this,a)};
// Detecting if a selection is backward
var ha;!Q&&U&&J.implementsDomRange?(ha=g,da.isBackward=function(){return ha(this)}):ha=da.isBackward=function(){return!1},
// Create an alias for backwards compatibility. From 1.3, everything is "backward" rather than "backwards"
da.isBackwards=da.isBackward,
// Selection stringifier
// This is conformant to the old HTML5 selections draft spec but differs from WebKit and Mozilla's implementation.
// The current spec does not yet define this method.
da.toString=function(){for(var a=[],b=0,c=this.rangeCount;b<c;++b)a[b]=""+this._ranges[b];return a.join("")},
// No current browser conforms fully to the spec for this method, so Rangy's own method is always used
da.collapse=function(b,c){v(this,b);var d=a.createRange(b);d.collapseToPoint(b,c),this.setSingleRange(d),this.isCollapsed=!0},da.collapseToStart=function(){if(!this.rangeCount)throw new H("INVALID_STATE_ERR");var a=this._ranges[0];this.collapse(a.startContainer,a.startOffset)},da.collapseToEnd=function(){if(!this.rangeCount)throw new H("INVALID_STATE_ERR");var a=this._ranges[this.rangeCount-1];this.collapse(a.endContainer,a.endOffset)},
// The spec is very specific on how selectAllChildren should be implemented and not all browsers implement it as
// specified so the native implementation is never used by Rangy.
da.selectAllChildren=function(b){v(this,b);var c=a.createRange(b);c.selectNodeContents(b),this.setSingleRange(c)},da.deleteFromDocument=function(){
// Sepcial behaviour required for IE's control selections
if(_&&P&&this.docSelection.type==K){for(var a,b=this.docSelection.createRange();b.length;)a=b.item(0),b.remove(a),C.removeNode(a);this.refresh()}else if(this.rangeCount){var c=this.getAllRanges();if(c.length){this.removeAllRanges();for(var d=0,e=c.length;d<e;++d)c[d].deleteContents();
// The spec says nothing about what the selection should contain after calling deleteContents on each
// range. Firefox moves the selection to where the final selected range was, so we emulate that
this.addRange(c[e-1])}}},
// The following are non-standard extensions
da.eachRange=function(a,b){for(var c=0,d=this._ranges.length;c<d;++c)if(a(this.getRangeAt(c)))return b},da.getAllRanges=function(){var a=[];return this.eachRange(function(b){a.push(b)}),a},da.setSingleRange=function(a,b){this.removeAllRanges(),this.addRange(a,b)},da.callMethodOnEachRange=function(a,b){var c=[];return this.eachRange(function(d){c.push(d[a].apply(d,b||[]))}),c},da.setStart=w(!0),da.setEnd=w(!1),
// Add select() method to Range prototype. Any existing selection will be removed.
a.rangePrototype.select=function(a){ca(this.getDocument()).setSingleRange(this,a)},da.changeEachRange=function(a){var b=[],c=this.isBackward();this.eachRange(function(c){a(c),b.push(c)}),this.removeAllRanges(),c&&1==b.length?this.addRange(b[0],"backward"):this.setRanges(b)},da.containsNode=function(a,b){return this.eachRange(function(c){return c.containsNode(a,b)},!0)||!1},da.getBookmark=function(a){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[a])}},da.moveToBookmark=function(b){for(var c,d,e=[],f=0;c=b.rangeBookmarks[f++];)d=a.createRange(this.win),d.moveToBookmark(c),e.push(d);b.backward?this.setSingleRange(e[0],"backward"):this.setRanges(e)},da.saveRanges=function(){return{backward:this.isBackward(),ranges:this.callMethodOnEachRange("cloneRange")}},da.restoreRanges=function(a){this.removeAllRanges();for(var b,c=0;b=a.ranges[c];++c)this.addRange(b,a.backward&&0==c)},da.toHtml=function(){var a=[];return this.eachRange(function(b){a.push(F.toHtml(b))}),a.join("")},J.implementsTextRange&&(da.getNativeTextRange=function(){var c;if(c=this.docSelection){var d=c.createRange();if(n(d))return d;throw b.createError("getNativeTextRange: selection is a control selection")}if(this.rangeCount>0)return a.WrappedTextRange.rangeToTextRange(this.getRangeAt(0));throw b.createError("getNativeTextRange: selection contains no range")}),da.getName=function(){return"WrappedSelection"},da.inspect=function(){return x(this)},da.detach=function(){t(this.win,"delete"),s(this)},r.detachAll=function(){t(null,"deleteAll")},r.inspect=x,r.isDirectionBackward=c,a.Selection=r,a.selectionPrototype=da,a.addShimListener(function(a){"undefined"==typeof a.getSelection&&(a.getSelection=function(){return ca(a)}),a=null})});/*----------------------------------------------------------------------------------------------------------------*/
// Wait for document to load before initializing
var M=!1,N=function(a){M||(M=!0,!H.initialized&&H.config.autoInitialize&&l())};
// Test whether the document has already been loaded and initialize immediately if so
// Add a fallback in case the DOMContentLoaded event isn't supported
return F&&("complete"==document.readyState?N():(a(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",N,!1),J(window,"load",N))),H},this),/**
 * Selection save and restore module for Rangy.
 * Saves and restores user selections using marker invisible elements in the DOM.
 *
 * Part of Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Depends on Rangy core.
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0
 * Build date: 10 May 2015
 */
function(a,b){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module with a dependency on Rangy.
define(["./rangy-core"],a):"undefined"!=typeof module&&"object"==typeof exports?
// Node/CommonJS style
module.exports=a(require("rangy")):
// No AMD or CommonJS support so we use the rangy property of root (probably the global variable)
a(b.rangy)}(function(a){return a.createModule("SaveRestore",["WrappedRange"],function(a,b){function c(a,b){return(b||document).getElementById(a)}function d(a,b){var c,d="selectionBoundary_"+ +new Date+"_"+(""+Math.random()).slice(2),e=o.getDocument(a.startContainer),f=a.cloneRange();
// Create the marker element containing a single invisible character using DOM methods and insert it
return f.collapse(b),c=e.createElement("span"),c.id=d,c.style.lineHeight="0",c.style.display="none",c.className="rangySelectionBoundary",c.appendChild(e.createTextNode(r)),f.insertNode(c),c}function e(a,d,e,f){var g=c(e,a);g?(d[f?"setStartBefore":"setEndBefore"](g),p(g)):b.warn("Marker element has been removed. Cannot restore selection.")}function f(a,b){return b.compareBoundaryPoints(a.START_TO_START,a)}function g(b,c){var e,f,g=a.DomRange.getRangeDocument(b),h=b.toString(),i=q(c);return b.collapsed?(f=d(b,!1),{document:g,markerId:f.id,collapsed:!0}):(f=d(b,!1),e=d(b,!0),{document:g,startMarkerId:e.id,endMarkerId:f.id,collapsed:!1,backward:i,toString:function(){return"original text: '"+h+"', new text: '"+b.toString()+"'"}})}function h(d,f){var g=d.document;"undefined"==typeof f&&(f=!0);var h=a.createRange(g);if(d.collapsed){var i=c(d.markerId,g);if(i){i.style.display="inline";var j=i.previousSibling;
// Workaround for issue 17
j&&3==j.nodeType?(p(i),h.collapseToPoint(j,j.length)):(h.collapseBefore(i),p(i))}else b.warn("Marker element has been removed. Cannot restore selection.")}else e(g,h,d.startMarkerId,!0),e(g,h,d.endMarkerId,!1);return f&&h.normalizeBoundaries(),h}function i(b,d){var e,h,i=[],j=q(d);
// Order the ranges by position within the DOM, latest first, cloning the array to leave the original untouched
b=b.slice(0),b.sort(f);for(var k=0,l=b.length;k<l;++k)i[k]=g(b[k],j);
// Now that all the markers are in place and DOM manipulation over, adjust each range's boundaries to lie
// between its markers
for(k=l-1;k>=0;--k)e=b[k],h=a.DomRange.getRangeDocument(e),e.collapsed?e.collapseAfter(c(i[k].markerId,h)):(e.setEndBefore(c(i[k].endMarkerId,h)),e.setStartAfter(c(i[k].startMarkerId,h)));return i}function j(c){if(!a.isSelectionValid(c))return b.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus."),null;var d=a.getSelection(c),e=d.getAllRanges(),f=1==e.length&&d.isBackward(),g=i(e,f);
// Ensure current selection is unaffected
return f?d.setSingleRange(e[0],f):d.setRanges(e),{win:c,rangeInfos:g,restored:!1}}function k(a){for(var b=[],c=a.length,d=c-1;d>=0;d--)b[d]=h(a[d],!0);return b}function l(b,c){if(!b.restored){var d=b.rangeInfos,e=a.getSelection(b.win),f=k(d),g=d.length;1==g&&c&&a.features.selectionHasExtend&&d[0].backward?(e.removeAllRanges(),e.addRange(f[0],!0)):e.setRanges(f),b.restored=!0}}function m(a,b){var d=c(b,a);d&&p(d)}function n(a){for(var b,c=a.rangeInfos,d=0,e=c.length;d<e;++d)b=c[d],b.collapsed?m(a.doc,b.markerId):(m(a.doc,b.startMarkerId),m(a.doc,b.endMarkerId))}var o=a.dom,p=o.removeNode,q=a.Selection.isDirectionBackward,r="\ufeff";a.util.extend(a,{saveRange:g,restoreRange:h,saveRanges:i,restoreRanges:k,saveSelection:j,restoreSelection:l,removeMarkerElement:m,removeMarkers:n})}),a},this);
/**
 * @license AngularJS v1.3.10
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function(a,b,c){"use strict";/**
 * @ngdoc module
 * @name ngSanitize
 * @description
 *
 * # ngSanitize
 *
 * The `ngSanitize` module provides functionality to sanitize HTML.
 *
 *
 * <div doc-module-components="ngSanitize"></div>
 *
 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
 */
/*
 * HTML Parser By Misko Hevery (misko@hevery.com)
 * based on:  HTML Parser By John Resig (ejohn.org)
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * // Use like so:
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 */
/**
 * @ngdoc service
 * @name $sanitize
 * @kind function
 *
 * @description
 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
 *   then serialized back to properly escaped html string. This means that no unsafe input can make
 *   it into the returned string, however, since our parser is more strict than a typical browser
 *   parser, it's possible that some obscure input, which would be recognized as valid HTML by a
 *   browser, won't make it through the sanitizer. The input may also contain SVG markup.
 *   The whitelist is configured using the functions `aHrefSanitizationWhitelist` and
 *   `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider `$compileProvider`}.
 *
 * @param {string} html HTML input.
 * @returns {string} Sanitized HTML.
 *
 * @example
   <example module="sanitizeExample" deps="angular-sanitize.js">
   <file name="index.html">
     <script>
         angular.module('sanitizeExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
             $scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
             $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };
           }]);
     </script>
     <div ng-controller="ExampleController">
        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Directive</td>
           <td>How</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="bind-html-with-sanitize">
           <td>ng-bind-html</td>
           <td>Automatically uses $sanitize</td>
           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind-html="snippet"></div></td>
         </tr>
         <tr id="bind-html-with-trust">
           <td>ng-bind-html</td>
           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
           <td>
           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
           </td>
           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
         </tr>
         <tr id="bind-default">
           <td>ng-bind</td>
           <td>Automatically escapes</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
       </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should sanitize the html snippet by default', function() {
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });

     it('should inline raw snippet if bound to a trusted value', function() {
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });

     it('should escape snippet without any filter', function() {
       expect(element(by.css('#bind-default div')).getInnerHtml()).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });

     it('should update', function() {
       element(by.model('snippet')).clear();
       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('new <b>text</b>');
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
         'new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
     });
   </file>
   </example>
 */
function d(){this.$get=["$$sanitizeUri",function(a){return function(b){"undefined"!=typeof arguments[1]&&(arguments[1].version="taSanitize");var c=[];return g(b,l(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function e(a){var c=[],d=l(c,b.noop);return d.chars(a),c.join("")}function f(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}/**
 * @example
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * @param {string} html string
 * @param {object} handler
 */
function g(a,c){function d(a,d,f,g){if(d=b.lowercase(d),D[d])for(;k.last()&&E[k.last()];)e("",k.last());C[d]&&k.last()==d&&e("",d),g=z[d]||!!g,g||k.push(d);var i={};f.replace(p,function(a,b,c,d,e){var f=c||d||e||"";i[b]=h(f)}),c.start&&c.start(d,i,g)}function e(a,d){var e,f=0;if(d=b.lowercase(d))
// Find the closest opened tag of the same type
for(f=k.length-1;f>=0&&k[f]!=d;f--);if(f>=0){
// Close all the open elements, up the stack
for(e=k.length-1;e>=f;e--)c.end&&c.end(k[e]);
// Remove the open elements from the stack
k.length=f}}"string"!=typeof a&&(a=null===a||"undefined"==typeof a?"":""+a);var f,g,i,j,k=[],l=a;for(k.last=function(){return k[k.length-1]};a;){
// Make sure we're not in a script or style element
if(j="",g=!0,k.last()&&G[k.last()])a=a.replace(new RegExp("([^]*)<\\s*\\/\\s*"+k.last()+"[^>]*>","i"),function(a,b){return b=b.replace(s,"$1").replace(v,"$1"),c.chars&&c.chars(h(b)),""}),e("",k.last());else{
// White space
if(y.test(a)){if(i=a.match(y)){i[0];c.whitespace&&c.whitespace(i[0]),a=a.replace(i[0],""),g=!1}}else t.test(a)?(i=a.match(t),i&&(c.comment&&c.comment(i[1]),a=a.replace(i[0],""),g=!1)):u.test(a)?(i=a.match(u),i&&(a=a.replace(i[0],""),g=!1)):r.test(a)?(i=a.match(o),i&&(a=a.substring(i[0].length),i[0].replace(o,e),g=!1)):q.test(a)&&(i=a.match(n),i?(
// We only have a valid start-tag if there is a '>'.
i[4]&&(a=a.substring(i[0].length),i[0].replace(n,d)),g=!1):(
// no ending tag found --- this piece should be encoded as an entity.
j+="<",a=a.substring(1)));g&&(f=a.indexOf("<"),j+=f<0?a:a.substring(0,f),a=f<0?"":a.substring(f),c.chars&&c.chars(h(j)))}if(a==l)throw m("badparse","The sanitizer was unable to parse the following block of html: {0}",a);l=a}
// Clean up any remaining tags
e()}/**
 * decodes all entities into regular string
 * @param value
 * @returns {string} A string with decoded entities.
 */
function h(a){if(!a)return"";
// Note: IE8 does not preserve spaces at the start/end of innerHTML
// so we must capture them and reattach them afterward
var b=N.exec(a),c=b[1],d=b[3],e=b[2];
// innerText depends on styling as it doesn't display hidden elements.
// Therefore, it's better to use textContent not to cause unnecessary
// reflows. However, IE<9 don't support textContent so the innerText
// fallback is necessary.
return e&&(M.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in M?M.textContent:M.innerText),c+e+d}/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param value
 * @returns {string} escaped text
 */
function i(a){return a.replace(/&/g,"&amp;").replace(w,function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(c-56320)+65536)+";"}).replace(x,function(a){
// unsafe chars are: \u0000-\u001f \u007f-\u009f \u00ad \u0600-\u0604 \u070f \u17b4 \u17b5 \u200c-\u200f \u2028-\u202f \u2060-\u206f \ufeff \ufff0-\uffff from jslint.com/lint.html
// decimal values are: 0-31, 127-159, 173, 1536-1540, 1807, 6068, 6069, 8204-8207, 8232-8239, 8288-8303, 65279, 65520-65535
var b=a.charCodeAt(0);
// if unsafe character encode
// if unsafe character encode
return b<=159||173==b||b>=1536&&b<=1540||1807==b||6068==b||6069==b||b>=8204&&b<=8207||b>=8232&&b<=8239||b>=8288&&b<=8303||65279==b||b>=65520&&b<=65535?"&#"+b+";":a}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}
// Custom logic for accepting certain style options only - textAngular
// Currently allows only the color, background-color, text-align, float, width and height attributes
// all other attributes should be easily done through classes.
function j(a){var c="",d=a.split(";");return b.forEach(d,function(a){var d=a.split(":");if(2==d.length){var e=O(b.lowercase(d[0])),a=O(b.lowercase(d[1]));(("color"===e||"background-color"===e)&&(a.match(/^rgb\([0-9%,\. ]*\)$/i)||a.match(/^rgba\([0-9%,\. ]*\)$/i)||a.match(/^hsl\([0-9%,\. ]*\)$/i)||a.match(/^hsla\([0-9%,\. ]*\)$/i)||a.match(/^#[0-9a-f]{3,6}$/i)||a.match(/^[a-z]*$/i))||"text-align"===e&&("left"===a||"right"===a||"center"===a||"justify"===a)||"text-decoration"===e&&("underline"===a||"line-through"===a)||"font-weight"===e&&"bold"===a||"font-style"===e&&"italic"===a||"float"===e&&("left"===a||"right"===a||"none"===a)||"vertical-align"===e&&("baseline"===a||"sub"===a||"super"===a||"test-top"===a||"text-bottom"===a||"middle"===a||"top"===a||"bottom"===a||a.match(/[0-9]*(px|em)/)||a.match(/[0-9]+?%/))||"font-size"===e&&("xx-small"===a||"x-small"===a||"small"===a||"medium"===a||"large"===a||"x-large"===a||"xx-large"===a||"larger"===a||"smaller"===a||a.match(/[0-9]*\.?[0-9]*(px|em|rem|mm|q|cm|in|pt|pc|%)/))||("width"===e||"height"===e)&&a.match(/[0-9\.]*(px|em|rem|%)/)||// Reference #520
"direction"===e&&a.match(/^ltr|rtl|initial|inherit$/))&&(c+=e+": "+a+";")}}),c}
// this function is used to manually allow specific attributes on specific tags with certain prerequisites
function k(a,b,c,d){
// catch the div placeholder for the iframe replacement
return!("img"!==a||!b["ta-insert-video"]||"ta-insert-video"!==c&&"allowfullscreen"!==c&&"frameborder"!==c&&("contenteditable"!==c||"false"!==d))}/**
 * create an HTML/XML writer which writes to buffer
 * @param {Array} buf use buf.jain('') to get out sanitized html string
 * @returns {object} in the form of {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * }
 */
function l(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&G[a]&&(d=a),d||H[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,g){var h=b.lowercase(g),l="img"===a&&"src"===h||"background"===h;("style"===h&&""!==(d=j(d))||k(a,f,h,d)||L[h]===!0&&(I[h]!==!0||c(d,l)))&&(e(" "),e(g),e('="'),e(i(d)),e('"'))}),e(g?"/>":">"))},comment:function(a){e(a)},whitespace:function(a){e(i(a))},end:function(a){a=b.lowercase(a),d||H[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(i(a))}}}var m=b.$$minErr("$sanitize"),n=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,o=/^<\/\s*([\w:-]+)[^>]*>/,p=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,q=/^</,r=/^<\//,s=/<!--(.*?)-->/g,t=/(^<!--.*?-->)/,u=/<!DOCTYPE([^>]*?)>/i,v=/<!\[CDATA\[(.*?)]]>/g,w=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
// Match everything outside of normal chars and " (quote character)
x=/([^\#-~| |!])/g,y=/^(\s+)/,z=f("area,br,col,hr,img,wbr,input"),A=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),B=f("rp,rt"),C=b.extend({},B,A),D=b.extend({},A,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),E=b.extend({},B,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),F=f("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),G=f("script,style"),H=b.extend({},z,D,E,C,F),I=f("background,cite,href,longdesc,src,usemap,xlink:href"),J=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,id,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),K=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),L=b.extend({},I,K,J),M=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/,O=function(){
// native trim is way faster: http://jsperf.com/angular-trim-test
// but IE doesn't have it... :-(
// TODO: we should move this into IE/ES5 polyfill
// native trim is way faster: http://jsperf.com/angular-trim-test
// but IE doesn't have it... :-(
// TODO: we should move this into IE/ES5 polyfill
return String.prototype.trim?function(a){return b.isString(a)?a.trim():a}:function(a){return b.isString(a)?a.replace(/^\s\s*/,"").replace(/\s\s*$/,""):a}}();
// define ngSanitize module and register $sanitize service
b.module("ngSanitize",[]).provider("$sanitize",d),/* global sanitizeText: false */
/**
 * @ngdoc filter
 * @name linky
 * @kind function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} target Window (_blank|_self|_parent|_top) or named frame to open links in.
 * @returns {string} Html-linkified text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <example module="linkyExample" deps="angular-sanitize.js">
     <file name="index.html">
       <script>
         angular.module('linkyExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.snippet =
               'Pretty text with some links:\n'+
               'http://angularjs.org/,\n'+
               'mailto:us@somewhere.org,\n'+
               'another@somewhere.org,\n'+
               'and one more: ftp://127.0.0.1/.';
             $scope.snippetWithTarget = 'http://angularjs.org/';
           }]);
       </script>
       <div ng-controller="ExampleController">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Filter</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithTarget | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithTarget | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </file>
     <file name="protractor.js" type="protractor">
       it('should linkify the snippet with urls', function() {
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
       });

       it('should not linkify snippet without the linky filter', function() {
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
       });

       it('should update', function() {
         element(by.model('snippet')).clear();
         element(by.model('snippet')).sendKeys('new http://link.');
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('new http://link.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
             .toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(element(by.id('linky-target')).
            element(by.binding("snippetWithTarget | linky:'_blank'")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
       });
     </file>
   </example>
 */
b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"??????]/,d=/^mailto:/;return function(f,g){function h(a){a&&n.push(e(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&n.push('target="',g,'" '),n.push('href="',a.replace(/"/g,"&quot;"),'">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)
// We can not end in these as they are sometimes found at the end of the sentence
k=j[0],
// if we did not match ftp/http/www/mailto then assume mailto
j[2]||j[4]||(k=(j[3]?"http://":"mailto:")+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(d,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular);
!function(a,b){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define("textAngular",["rangy","rangy/lib/rangy-selectionsaverestore"],function(c,d){return a["textAngular.name"]=b(c,d)}):"object"==typeof exports?
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=b(require("rangy"),require("rangy/lib/rangy-selectionsaverestore")):a.textAngular=b(rangy)}(this,function(a){
// tests against the current jqLite/jquery implementation if this can be an element
function b(a){try{return 0!==angular.element(a).length}catch(a){return!1}}/*
    A tool definition is an object with the following key/value parameters:
        action: [function(deferred, restoreSelection)]
                a function that is executed on clicking on the button - this will allways be executed using ng-click and will
                overwrite any ng-click value in the display attribute.
                The function is passed a deferred object ($q.defer()), if this is wanted to be used `return false;` from the action and
                manually call `deferred.resolve();` elsewhere to notify the editor that the action has finished.
                restoreSelection is only defined if the rangy library is included and it can be called as `restoreSelection()` to restore the users
                selection in the WYSIWYG editor.
        display: [string]?
                Optional, an HTML element to be displayed as the button. The `scope` of the button is the tool definition object with some additional functions
                If set this will cause buttontext and iconclass to be ignored
        class: [string]?
                Optional, if set will override the taOptions.classes.toolbarButton class.
        buttontext: [string]?
                if this is defined it will replace the contents of the element contained in the `display` element
        iconclass: [string]?
                if this is defined an icon (<i>) will be appended to the `display` element with this string as it's class
        tooltiptext: [string]?
                Optional, a plain text description of the action, used for the title attribute of the action button in the toolbar by default.
        activestate: [function(commonElement)]?
                this function is called on every caret movement, if it returns true then the class taOptions.classes.toolbarButtonActive
                will be applied to the `display` element, else the class will be removed
        disabled: [function()]?
                if this function returns true then the tool will have the class taOptions.classes.disabled applied to it, else it will be removed
    Other functions available on the scope are:
        name: [string]
                the name of the tool, this is the first parameter passed into taRegisterTool
        isDisabled: [function()]
                returns true if the tool is disabled, false if it isn't
        displayActiveToolClass: [function(boolean)]
                returns true if the tool is 'active' in the currently focussed toolbar
        onElementSelect: [Object]
                This object contains the following key/value pairs and is used to trigger the ta-element-select event
                element: [String]
                    an element name, will only trigger the onElementSelect action if the tagName of the element matches this string
                filter: [function(element)]?
                    an optional filter that returns a boolean, if true it will trigger the onElementSelect.
                action: [function(event, element, editorScope)]
                    the action that should be executed if the onElementSelect function runs
*/
// name and toolDefinition to add into the tools available to be added on the toolbar
function c(a,c){if(!a||""===a||e.hasOwnProperty(a))throw"textAngular Error: A unique name is required for a Tool Definition";if(c.display&&(""===c.display||!b(c.display))||!c.display&&!c.buttontext&&!c.iconclass)throw'textAngular Error: Tool Definition for "'+a+'" does not have a valid display/iconclass/buttontext value';e[a]=c}
// usage is:
// var t0 = performance.now();
// doSomething();
// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to do something!');
//
// turn html into pure text that shows visiblity
function d(a){var b=document.createElement("DIV");b.innerHTML=a;var c=b.textContent||b.innerText||"";// zero width space
return c.replace("???",""),c=c.trim()}
// setup the global contstant functions for setting up the toolbar
// all tool definitions
var e={};angular.module("textAngularSetup",[]).constant("taRegisterTool",c).value("taTools",e).value("taOptions",{
//////////////////////////////////////////////////////////////////////////////////////
// forceTextAngularSanitize
// set false to allow the textAngular-sanitize provider to be replaced
// with angular-sanitize or a custom provider.
forceTextAngularSanitize:!0,
///////////////////////////////////////////////////////////////////////////////////////
// keyMappings
// allow customizable keyMappings for specialized key boards or languages
//
// keyMappings provides key mappings that are attached to a given commandKeyCode.
// To modify a specific keyboard binding, simply provide function which returns true
// for the event you wish to map to.
// Or to disable a specific keyboard binding, provide a function which returns false.
// Note: 'RedoKey' and 'UndoKey' are internally bound to the redo and undo functionality.
// At present, the following commandKeyCodes are in use:
// 98, 'TabKey', 'ShiftTabKey', 105, 117, 'UndoKey', 'RedoKey'
//
// To map to an new commandKeyCode, add a new key mapping such as:
// {commandKeyCode: 'CustomKey', testForKey: function (event) {
//  if (event.keyCode=57 && event.ctrlKey && !event.shiftKey && !event.altKey) return true;
// } }
// to the keyMappings. This example maps ctrl+9 to 'CustomKey'
// Then where taRegisterTool(...) is called, add a commandKeyCode: 'CustomKey' and your
// tool will be bound to ctrl+9.
//
// To disble one of the already bound commandKeyCodes such as 'RedoKey' or 'UndoKey' add:
// {commandKeyCode: 'RedoKey', testForKey: function (event) { return false; } },
// {commandKeyCode: 'UndoKey', testForKey: function (event) { return false; } },
// to disable them.
//
keyMappings:[],toolbar:[["h1","h2","h3","h4","h5","h6","p","pre","quote"],["bold","italics","underline","strikeThrough","ul","ol","redo","undo","clear"],["justifyLeft","justifyCenter","justifyRight","justifyFull","indent","outdent"],["html","insertImage","insertLink","insertVideo","wordcount","charcount"]],classes:{focussed:"focussed",toolbar:"btn-toolbar",toolbarGroup:"btn-group",toolbarButton:"btn btn-default",toolbarButtonActive:"active",disabled:"disabled",textEditor:"form-control",htmlEditor:"form-control"},defaultTagAttributes:{a:{target:""}},setup:{
// wysiwyg mode
textEditorSetup:function(a){},
// raw html
htmlEditorSetup:function(a){}},defaultFileDropHandler:/* istanbul ignore next: untestable image processing */
function(a,b){var c=new FileReader;return"image"===a.type.substring(0,5)&&(c.onload=function(){""!==c.result&&b("insertImage",c.result,!0)},c.readAsDataURL(a),!0)}}).value("taSelectableElements",["a","img"]).value("taCustomRenderers",[{
// Parse back out: '<div class="ta-insert-video" ta-insert-video src="' + urlLink + '" allowfullscreen="true" width="300" frameborder="0" height="250"></div>'
// To correct video element. For now only support youtube
selector:"img",customAttribute:"ta-insert-video",renderLogic:function(a){var b=angular.element("<iframe></iframe>"),c=a.prop("attributes");
// loop through element attributes and apply them on iframe
angular.forEach(c,function(a){b.attr(a.name,a.value)}),b.attr("src",b.attr("ta-insert-video")),a.replaceWith(b)}}]).value("taTranslations",{
// moved to sub-elements
//toggleHTML: "Toggle HTML",
//insertImage: "Please enter a image URL to insert",
//insertLink: "Please enter a URL to insert",
//insertVideo: "Please enter a youtube URL to embed",
html:{tooltip:"Toggle html / Rich Text"},
// tooltip for heading - might be worth splitting
heading:{tooltip:"Heading "},p:{tooltip:"Paragraph"},pre:{tooltip:"Preformatted text"},ul:{tooltip:"Unordered List"},ol:{tooltip:"Ordered List"},quote:{tooltip:"Quote/unquote selection or paragraph"},undo:{tooltip:"Undo"},redo:{tooltip:"Redo"},bold:{tooltip:"Bold"},italic:{tooltip:"Italic"},underline:{tooltip:"Underline"},strikeThrough:{tooltip:"Strikethrough"},justifyLeft:{tooltip:"Align text left"},justifyRight:{tooltip:"Align text right"},justifyFull:{tooltip:"Justify text"},justifyCenter:{tooltip:"Center"},indent:{tooltip:"Increase indent"},outdent:{tooltip:"Decrease indent"},clear:{tooltip:"Clear formatting"},insertImage:{dialogPrompt:"Please enter an image URL to insert",tooltip:"Insert image",hotkey:"the - possibly language dependent hotkey ... for some future implementation"},insertVideo:{tooltip:"Insert video",dialogPrompt:"Please enter a youtube URL to embed"},insertLink:{tooltip:"Insert / edit link",dialogPrompt:"Please enter a URL to insert"},editLink:{reLinkButton:{tooltip:"Relink"},unLinkButton:{tooltip:"Unlink"},targetToggle:{buttontext:"Open in New Window"}},wordcount:{tooltip:"Display words Count"},charcount:{tooltip:"Display characters Count"}}).factory("taToolFunctions",["$window","taTranslations",function(a,b){return{imgOnSelectAction:function(a,b,c){
// setup the editor toolbar
// Credit to the work at http://hackerwins.github.io/summernote/ for this editbar logic/display
var d=function(){c.updateTaBindtaTextElement(),c.hidePopover()};a.preventDefault(),c.displayElements.popover.css("width","375px");var e=c.displayElements.popoverContainer;e.empty();var f=angular.element('<div class="btn-group" style="padding-right: 6px;">'),g=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">100% </button>');g.on("click",function(a){a.preventDefault(),b.css({width:"100%",height:""}),d()});var h=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">50% </button>');h.on("click",function(a){a.preventDefault(),b.css({width:"50%",height:""}),d()});var i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">25% </button>');i.on("click",function(a){a.preventDefault(),b.css({width:"25%",height:""}),d()});var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">Reset</button>');j.on("click",function(a){a.preventDefault(),b.css({width:"",height:""}),d()}),f.append(g),f.append(h),f.append(i),f.append(j),e.append(f),f=angular.element('<div class="btn-group" style="padding-right: 6px;">');var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-left"></i></button>');k.on("click",function(a){a.preventDefault(),
// webkit
b.css("float","left"),
// firefox
b.css("cssFloat","left"),
// IE < 8
b.css("styleFloat","left"),d()});var l=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-right"></i></button>');l.on("click",function(a){a.preventDefault(),
// webkit
b.css("float","right"),
// firefox
b.css("cssFloat","right"),
// IE < 8
b.css("styleFloat","right"),d()});var m=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-justify"></i></button>');m.on("click",function(a){a.preventDefault(),
// webkit
b.css("float",""),
// firefox
b.css("cssFloat",""),
// IE < 8
b.css("styleFloat",""),d()}),f.append(k),f.append(m),f.append(l),e.append(f),f=angular.element('<div class="btn-group">');var n=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-trash-o"></i></button>');n.on("click",function(a){a.preventDefault(),b.remove(),d()}),f.append(n),e.append(f),c.showPopover(b),c.showResizeOverlay(b)},aOnSelectAction:function(c,d,e){
// setup the editor toolbar
// Credit to the work at http://hackerwins.github.io/summernote/ for this editbar logic
c.preventDefault(),e.displayElements.popover.css("width","436px");var f=e.displayElements.popoverContainer;f.empty(),f.css("line-height","28px");var g=angular.element('<a href="'+d.attr("href")+'" target="_blank">'+d.attr("href")+"</a>");g.css({display:"inline-block","max-width":"200px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","vertical-align":"middle"}),f.append(g);var h=angular.element('<div class="btn-group pull-right">'),i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.reLinkButton.tooltip+'"><i class="fa fa-edit icon-edit"></i></button>');i.on("click",function(c){c.preventDefault();var f=a.prompt(b.insertLink.dialogPrompt,d.attr("href"));f&&""!==f&&"http://"!==f&&(d.attr("href",f),e.updateTaBindtaTextElement()),e.hidePopover()}),h.append(i);var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.unLinkButton.tooltip+'"><i class="fa fa-unlink icon-unlink"></i></button>');
// directly before this click event is fired a digest is fired off whereby the reference to $element is orphaned off
j.on("click",function(a){a.preventDefault(),d.replaceWith(d.contents()),e.updateTaBindtaTextElement(),e.hidePopover()}),h.append(j);var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on">'+b.editLink.targetToggle.buttontext+"</button>");"_blank"===d.attr("target")&&k.addClass("active"),k.on("click",function(a){a.preventDefault(),d.attr("target","_blank"===d.attr("target")?"":"_blank"),k.toggleClass("active"),e.updateTaBindtaTextElement()}),h.append(k),f.append(h),e.showPopover(d)},extractYoutubeVideoId:function(a){var b=/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i,c=a.match(b);return c&&c[1]||null}}}]).run(["taRegisterTool","$window","taTranslations","taSelection","taToolFunctions","$sanitize","taOptions","$log",function(a,b,c,d,e,f,g,h){
// test for the version of $sanitize that is in use
// You can disable this check by setting taOptions.textAngularSanitize == false
var i={};/* istanbul ignore next, throws error */
if(f("",i),g.forceTextAngularSanitize===!0&&"taSanitize"!==i.version)throw angular.$$minErr("textAngular")("textAngularSetup","The textAngular-sanitize provider has been replaced by another -- have you included angular-sanitize by mistake?");a("html",{iconclass:"fa fa-code",tooltiptext:c.html.tooltip,action:function(){this.$editor().switchView()},activeState:function(){return this.$editor().showHtml}});
// add the Header tools
// convenience functions so that the loop works correctly
var j=function(a){return function(){return this.$editor().queryFormatBlockState(a)}},k=function(){return this.$editor().wrapSelection("formatBlock","<"+this.name.toUpperCase()+">")};angular.forEach(["h1","h2","h3","h4","h5","h6"],function(b){a(b.toLowerCase(),{buttontext:b.toUpperCase(),tooltiptext:c.heading.tooltip+b.charAt(1),action:k,activeState:j(b.toLowerCase())})}),a("p",{buttontext:"P",tooltiptext:c.p.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<P>")},activeState:function(){return this.$editor().queryFormatBlockState("p")}}),
// key: pre -> taTranslations[key].tooltip, taTranslations[key].buttontext
a("pre",{buttontext:"pre",tooltiptext:c.pre.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<PRE>")},activeState:function(){return this.$editor().queryFormatBlockState("pre")}}),a("ul",{iconclass:"fa fa-list-ul",tooltiptext:c.ul.tooltip,action:function(){return this.$editor().wrapSelection("insertUnorderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertUnorderedList")}}),a("ol",{iconclass:"fa fa-list-ol",tooltiptext:c.ol.tooltip,action:function(){return this.$editor().wrapSelection("insertOrderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertOrderedList")}}),a("quote",{iconclass:"fa fa-quote-right",tooltiptext:c.quote.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<BLOCKQUOTE>")},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")}}),a("undo",{iconclass:"fa fa-undo",tooltiptext:c.undo.tooltip,action:function(){return this.$editor().wrapSelection("undo",null)}}),a("redo",{iconclass:"fa fa-repeat",tooltiptext:c.redo.tooltip,action:function(){return this.$editor().wrapSelection("redo",null)}}),a("bold",{iconclass:"fa fa-bold",tooltiptext:c.bold.tooltip,action:function(){return this.$editor().wrapSelection("bold",null)},activeState:function(){return this.$editor().queryCommandState("bold")},commandKeyCode:98}),a("justifyLeft",{iconclass:"fa fa-align-left",tooltiptext:c.justifyLeft.tooltip,action:function(){return this.$editor().wrapSelection("justifyLeft",null)},activeState:function(a){/* istanbul ignore next: */
if(a&&"#document"===a.nodeName)return!1;var b=!1;if(a)
// commonELement.css('text-align') can throw an error 'Cannot read property 'defaultView' of null' in rare conditions
// so we do try catch here...
try{b="left"===a.css("text-align")||"left"===a.attr("align")||"right"!==a.css("text-align")&&"center"!==a.css("text-align")&&"justify"!==a.css("text-align")&&!this.$editor().queryCommandState("justifyRight")&&!this.$editor().queryCommandState("justifyCenter")&&!this.$editor().queryCommandState("justifyFull")}catch(a){/* istanbul ignore next: error handler */
//console.log(e);
b=!1}return b=b||this.$editor().queryCommandState("justifyLeft")}}),a("justifyRight",{iconclass:"fa fa-align-right",tooltiptext:c.justifyRight.tooltip,action:function(){return this.$editor().wrapSelection("justifyRight",null)},activeState:function(a){/* istanbul ignore next: */
if(a&&"#document"===a.nodeName)return!1;var b=!1;if(a)
// commonELement.css('text-align') can throw an error 'Cannot read property 'defaultView' of null' in rare conditions
// so we do try catch here...
try{b="right"===a.css("text-align")}catch(a){/* istanbul ignore next: error handler */
//console.log(e);
b=!1}return b=b||this.$editor().queryCommandState("justifyRight")}}),a("justifyFull",{iconclass:"fa fa-align-justify",tooltiptext:c.justifyFull.tooltip,action:function(){return this.$editor().wrapSelection("justifyFull",null)},activeState:function(a){var b=!1;if(a)
// commonELement.css('text-align') can throw an error 'Cannot read property 'defaultView' of null' in rare conditions
// so we do try catch here...
try{b="justify"===a.css("text-align")}catch(a){/* istanbul ignore next: error handler */
//console.log(e);
b=!1}return b=b||this.$editor().queryCommandState("justifyFull")}}),a("justifyCenter",{iconclass:"fa fa-align-center",tooltiptext:c.justifyCenter.tooltip,action:function(){return this.$editor().wrapSelection("justifyCenter",null)},activeState:function(a){/* istanbul ignore next: */
if(a&&"#document"===a.nodeName)return!1;var b=!1;if(a)
// commonELement.css('text-align') can throw an error 'Cannot read property 'defaultView' of null' in rare conditions
// so we do try catch here...
try{b="center"===a.css("text-align")}catch(a){/* istanbul ignore next: error handler */
//console.log(e);
b=!1}return b=b||this.$editor().queryCommandState("justifyCenter")}}),a("indent",{iconclass:"fa fa-indent",tooltiptext:c.indent.tooltip,action:function(){return this.$editor().wrapSelection("indent",null)},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")},commandKeyCode:"TabKey"}),a("outdent",{iconclass:"fa fa-outdent",tooltiptext:c.outdent.tooltip,action:function(){return this.$editor().wrapSelection("outdent",null)},activeState:function(){return!1},commandKeyCode:"ShiftTabKey"}),a("italics",{iconclass:"fa fa-italic",tooltiptext:c.italic.tooltip,action:function(){return this.$editor().wrapSelection("italic",null)},activeState:function(){return this.$editor().queryCommandState("italic")},commandKeyCode:105}),a("underline",{iconclass:"fa fa-underline",tooltiptext:c.underline.tooltip,action:function(){return this.$editor().wrapSelection("underline",null)},activeState:function(){return this.$editor().queryCommandState("underline")},commandKeyCode:117}),a("strikeThrough",{iconclass:"fa fa-strikethrough",tooltiptext:c.strikeThrough.tooltip,action:function(){return this.$editor().wrapSelection("strikeThrough",null)},activeState:function(){return document.queryCommandState("strikeThrough")}}),a("clear",{iconclass:"fa fa-ban",tooltiptext:c.clear.tooltip,action:function(a,b){var c;this.$editor().wrapSelection("removeFormat",null);var e=angular.element(d.getSelectionElement());c=d.getAllSelectedElements();
//$log.log('selectedElements:', selectedElements);
// remove lists
var f=function(a,b){a=angular.element(a);var c=b;return b||(c=a),angular.forEach(a.children(),function(a){if("ul"===a.tagName.toLowerCase()||"ol"===a.tagName.toLowerCase())c=f(a,c);else{var b=angular.element("<p></p>");b.html(angular.element(a).html()),c.after(b),c=b}}),a.remove(),c};angular.forEach(c,function(a){"ul"!==a.nodeName.toLowerCase()&&"ol"!==a.nodeName.toLowerCase()||
//console.log('removeListElements', element);
f(a)}),angular.forEach(e.find("ul"),f),angular.forEach(e.find("ol"),f);
// clear out all class attributes. These do not seem to be cleared via removeFormat
var g=this.$editor(),h=function(a){a=angular.element(a),/* istanbul ignore next: this is not triggered in tests any longer since we now never select the whole displayELement */
a[0]!==g.displayElements.text[0]&&a.removeAttr("class"),angular.forEach(a.children(),h)};angular.forEach(e,h),
// check if in list. If not in list then use formatBlock option
e[0]&&"li"!==e[0].tagName.toLowerCase()&&"ol"!==e[0].tagName.toLowerCase()&&"ul"!==e[0].tagName.toLowerCase()&&"true"!==e[0].getAttribute("contenteditable")&&this.$editor().wrapSelection("formatBlock","default"),b()}});/* jshint -W099 */
/****************************
     //  we don't use this code - since the previous way CLEAR is expected to work does not clear partially selected <li>

     var removeListElement = function(listE){
                console.log(listE);
                var _list = listE.parentNode.childNodes;
                console.log('_list', _list);
                var _preLis = [], _postLis = [], _found = false;
                for (i = 0; i < _list.length; i++) {
                    if (_list[i] === listE) {
                        _found = true;
                    } else if (!_found) _preLis.push(_list[i]);
                    else _postLis.push(_list[i]);
                }
                var _parent = angular.element(listE.parentNode);
                var newElem = angular.element('<p></p>');
                newElem.html(angular.element(listE).html());
                if (_preLis.length === 0 || _postLis.length === 0) {
                    if (_postLis.length === 0) _parent.after(newElem);
                    else _parent[0].parentNode.insertBefore(newElem[0], _parent[0]);

                    if (_preLis.length === 0 && _postLis.length === 0) _parent.remove();
                    else angular.element(listE).remove();
                } else {
                    var _firstList = angular.element('<' + _parent[0].tagName + '></' + _parent[0].tagName + '>');
                    var _secondList = angular.element('<' + _parent[0].tagName + '></' + _parent[0].tagName + '>');
                    for (i = 0; i < _preLis.length; i++) _firstList.append(angular.element(_preLis[i]));
                    for (i = 0; i < _postLis.length; i++) _secondList.append(angular.element(_postLis[i]));
                    _parent.after(_secondList);
                    _parent.after(newElem);
                    _parent.after(_firstList);
                    _parent.remove();
                }
                taSelection.setSelectionToElementEnd(newElem[0]);
            };

     elementsSeen = [];
     if (selectedElements.length !==0) console.log(selectedElements);
     angular.forEach(selectedElements, function (element) {
                if (elementsSeen.indexOf(element) !== -1 || elementsSeen.indexOf(element.parentElement) !== -1) {
                    return;
                }
                elementsSeen.push(element);
                if (element.nodeName.toLowerCase() === 'li') {
                    console.log('removeListElement', element);
                    removeListElement(element);
                }
                else if (element.parentElement && element.parentElement.nodeName.toLowerCase() === 'li') {
                    console.log('removeListElement', element.parentElement);
                    elementsSeen.push(element.parentElement);
                    removeListElement(element.parentElement);
                }
            });
     **********************/
/**********************
     if(possibleNodes[0].tagName.toLowerCase() === 'li'){
                var _list = possibleNodes[0].parentNode.childNodes;
                var _preLis = [], _postLis = [], _found = false;
                for(i = 0; i < _list.length; i++){
                    if(_list[i] === possibleNodes[0]){
                        _found = true;
                    }else if(!_found) _preLis.push(_list[i]);
                    else _postLis.push(_list[i]);
                }
                var _parent = angular.element(possibleNodes[0].parentNode);
                var newElem = angular.element('<p></p>');
                newElem.html(angular.element(possibleNodes[0]).html());
                if(_preLis.length === 0 || _postLis.length === 0){
                    if(_postLis.length === 0) _parent.after(newElem);
                    else _parent[0].parentNode.insertBefore(newElem[0], _parent[0]);

                    if(_preLis.length === 0 && _postLis.length === 0) _parent.remove();
                    else angular.element(possibleNodes[0]).remove();
                }else{
                    var _firstList = angular.element('<'+_parent[0].tagName+'></'+_parent[0].tagName+'>');
                    var _secondList = angular.element('<'+_parent[0].tagName+'></'+_parent[0].tagName+'>');
                    for(i = 0; i < _preLis.length; i++) _firstList.append(angular.element(_preLis[i]));
                    for(i = 0; i < _postLis.length; i++) _secondList.append(angular.element(_postLis[i]));
                    _parent.after(_secondList);
                    _parent.after(newElem);
                    _parent.after(_firstList);
                    _parent.remove();
                }
                taSelection.setSelectionToElementEnd(newElem[0]);
            }
     *******************/
/* istanbul ignore next: if it's javascript don't worry - though probably should show some kind of error message */
var l=function(a){return a.toLowerCase().indexOf("javascript")!==-1};a("insertImage",{iconclass:"fa fa-picture-o",tooltiptext:c.insertImage.tooltip,action:function(){var a;if(a=b.prompt(c.insertImage.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a&&!l(a)){d.getSelectionElement().tagName&&"a"===d.getSelectionElement().tagName.toLowerCase()&&
// due to differences in implementation between FireFox and Chrome, we must move the
// insertion point past the <a> element, otherwise FireFox inserts inside the <a>
// With this change, both FireFox and Chrome behave the same way!
d.setSelectionAfterElement(d.getSelectionElement());
// In the past we used the simple statement:
//return this.$editor().wrapSelection('insertImage', imageLink, true);
//
// However on Firefox only, when the content is empty this is a problem
// See Issue #1201
// Investigation reveals that Firefox only inserts a <p> only!!!!
// So now we use insertHTML here and all is fine.
// NOTE: this is what 'insertImage' is supposed to do anyway!
var e='<img src="'+a+'">';return this.$editor().wrapSelection("insertHTML",e,!0)}},onElementSelect:{element:"img",action:e.imgOnSelectAction}}),a("insertVideo",{iconclass:"fa fa-youtube-play",tooltiptext:c.insertVideo.tooltip,action:function(){var a;
// block javascript here
/* istanbul ignore else: if it's javascript don't worry - though probably should show some kind of error message */
if(a=b.prompt(c.insertVideo.dialogPrompt,"https://"),!l(a)&&a&&""!==a&&"https://"!==a&&(videoId=e.extractYoutubeVideoId(a),videoId)){
// create the embed link
var f="https://www.youtube.com/embed/"+videoId,g='<img class="ta-insert-video" src="https://img.youtube.com/vi/'+videoId+'/hqdefault.jpg" ta-insert-video="'+f+'" contenteditable="false" allowfullscreen="true" frameborder="0" />';
// insert
/* istanbul ignore next: don't know how to test this... since it needs a dialogPrompt */
// due to differences in implementation between FireFox and Chrome, we must move the
// insertion point past the <a> element, otherwise FireFox inserts inside the <a>
// With this change, both FireFox and Chrome behave the same way!
return d.getSelectionElement().tagName&&"a"===d.getSelectionElement().tagName.toLowerCase()&&d.setSelectionAfterElement(d.getSelectionElement()),this.$editor().wrapSelection("insertHTML",g,!0)}},onElementSelect:{element:"img",onlyWithAttrs:["ta-insert-video"],action:e.imgOnSelectAction}}),a("insertLink",{tooltiptext:c.insertLink.tooltip,iconclass:"fa fa-link",action:function(){var a;if(
// if this link has already been set, we need to just edit the existing link
/* istanbul ignore if: we do not test this */
a=d.getSelectionElement().tagName&&"a"===d.getSelectionElement().tagName.toLowerCase()?b.prompt(c.insertLink.dialogPrompt,d.getSelectionElement().href):b.prompt(c.insertLink.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a&&!l(a))return this.$editor().wrapSelection("createLink",a,!0)},activeState:function(a){return!!a&&"A"===a[0].tagName},onElementSelect:{element:"a",action:e.aOnSelectAction}}),a("wordcount",{display:'<div id="toolbarWC" style="display:block; min-width:100px;">Words: <span ng-bind="wordcount"></span></div>',disabled:!0,wordcount:0,activeState:function(){// this fires on keyup
var a=this.$editor().displayElements.text,b=a[0].innerHTML||"",c=0;/* istanbul ignore if: will default to '' when undefined */
//Set current scope
//Set editor scope
return""!==b.replace(/\s*<[^>]*?>\s*/g,"")&&""!==b.trim()&&(c=b.replace(/<\/?(b|i|em|strong|span|u|strikethrough|a|img|small|sub|sup|label)( [^>*?])?>/gi,"").replace(/(<[^>]*?>\s*<[^>]*?>)/gi," ").replace(/(<[^>]*?>)/gi,"").replace(/\s+/gi," ").match(/\S+/g).length),this.wordcount=c,this.$editor().wordcount=c,!1}}),a("charcount",{display:'<div id="toolbarCC" style="display:block; min-width:120px;">Characters: <span ng-bind="charcount"></span></div>',disabled:!0,charcount:0,activeState:function(){// this fires on keyup
var a=this.$editor().displayElements.text,b=a[0].innerText||a[0].textContent,c=b.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+/g," ").replace(/\s+$/g," ").length;
//Set current scope
//Set editor scope
return this.charcount=c,this.$editor().charcount=c,!1}})}]);// NOTE: textAngularVersion must match the Gruntfile.js 'setVersion' task.... and have format v/d+./d+./d+
var f="v1.5.16",g={ie:function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}(),webkit:/AppleWebKit\/([\d.]+)/i.test(navigator.userAgent),isFirefox:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},h=h||{};/* istanbul ignore next: untestable browser check */
h.now=function(){return h.now||h.mozNow||h.msNow||h.oNow||h.webkitNow||function(){return(new Date).getTime()}}();
// Global to textAngular REGEXP vars for block and list elements.
var i=/^(address|article|aside|audio|blockquote|canvas|center|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video)$/i,j=/^(ul|li|ol)$/i,k=/^(#text|span|address|article|aside|audio|blockquote|canvas|center|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video|li)$/i;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Compatibility
/* istanbul ignore next: trim shim for older browsers */
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});/*
	Custom stylesheet for the placeholders rules.
	Credit to: http://davidwalsh.name/add-rules-stylesheets
*/
var l,m,n,o,p,q;/* istanbul ignore else: IE <8 test*/
if(g.ie>8||void 0===g.ie){/* istanbul ignore next: preference for stylesheet loaded externally */
for(var r=document.styleSheets,s=0;s<r.length;s++)if((0===r[s].media.length||r[s].media.mediaText.match(/(all|screen)/gi))&&r[s].href&&r[s].href.match(/textangular\.(min\.|)css/gi)){l=r[s];break}/* istanbul ignore next: preference for stylesheet loaded externally */
l||(
// this sheet is used for the placeholders later on.
l=function(){
// Create the <style> tag
var a=document.createElement("style");/* istanbul ignore else : WebKit hack :( */
// Add the <style> element to the page, add as first so the styles can be overridden by custom stylesheets
return g.webkit&&a.appendChild(document.createTextNode("")),document.getElementsByTagName("head")[0].appendChild(a),a.sheet}()),
// use as: addCSSRule("header", "float: left");
m=function(a,b){return o(l,a,b)},o=function(a,b,c){var d,e;
// return the inserted stylesheet rule
// This order is important as IE 11 has both cssRules and rules but they have different lengths - cssRules is correct, rules gives an error in IE 11
/* istanbul ignore next: browser catches */
/* istanbul ignore else: untestable IE option */
/* istanbul ignore next: browser catches */
return a.cssRules?d=Math.max(a.cssRules.length-1,0):a.rules&&(d=Math.max(a.rules.length-1,0)),a.insertRule?a.insertRule(b+"{"+c+"}",d):a.addRule(b,c,d),l.rules?e=l.rules[d]:l.cssRules&&(e=l.cssRules[d]),e},q=function(a,b){var c,d;for(c=0;c<b.length;c++)/* istanbul ignore else: check for correct rule */
if(b[c].cssText===a.cssText){d=c;break}return d},n=function(a){p(l,a)},/* istanbul ignore next: tests are browser specific */
p=function(a,b){var c=a.cssRules||a.rules;if(c&&0!==c.length){var d=q(b,c);a.removeRule?a.removeRule(d):a.deleteRule(d)}}}angular.module("textAngular.factories",[]).factory("taBrowserTag",[function(){return function(a){/* istanbul ignore next: ie specific test */
/* istanbul ignore next: ie specific test */
return a?""===a?void 0===g.ie?"div":g.ie<=8?"P":"p":g.ie<=8?a.toUpperCase():a:g.ie<=8?"P":"p"}}]).factory("taApplyCustomRenderers",["taCustomRenderers","taDOM",function(a,b){return function(c){var d=angular.element("<div></div>");return d[0].innerHTML=c,angular.forEach(a,function(a){var c=[];
// get elements based on what is defined. If both defined do secondary filter in the forEach after using selector string
a.selector&&""!==a.selector?c=d.find(a.selector):a.customAttribute&&""!==a.customAttribute&&(c=b.getByAttribute(d,a.customAttribute)),
// process elements if any found
angular.forEach(c,function(b){b=angular.element(b),a.selector&&""!==a.selector&&a.customAttribute&&""!==a.customAttribute?void 0!==b.attr(a.customAttribute)&&a.renderLogic(b):a.renderLogic(b)})}),d[0].innerHTML}}]).factory("taFixChrome",function(){
// get whaterever rubbish is inserted in chrome
// should be passed an html string, returns an html string
var a=function(a,b){if(!a||!angular.isString(a)||a.length<=0)return a;
// remove all the Apple-converted-space spans and replace with the content of the span
//console.log('before:', html);
/* istanbul ignore next: apple-contereted-space span match */
for(
// grab all elements with a style attibute
// a betterSpanMatch matches only a style=... with matching quotes
// this captures the whole:
// 'style="background-color: rgb(255, 255, 255);"'
var c,d,e,f=/style\s?=\s?(["'])(?:(?=(\\?))\2.)*?\1/gi,g=/<span class="Apple-converted-space">([^<]+)<\/span>/gi,h="",i=0;c=g.exec(a);)e=c[1],e=e.replace(/&nbsp;/gi," "),h+=a.substring(i,c.index)+e,i=c.index+c[0].length;
/////////////////////////////////////////////////////////////
//
// Allow control of this modification
// taKeepStyles: False - removes these modification
//
// taFixChrome removes the following styles:
//    font-family: inherit;
//    line-height: <number>
//    color: inherit;
//    color: rgb( <rgb-component>#{3} )
//    background-color: rgb( <rgb-component>#{3} )
//
/////////////////////////////////////////////////////////////
if(/* istanbul ignore next: apple-contereted-space span has matched */
i&&(
// modified....
h+=a.substring(i),a=h,h="",i=0),!b){for(;c=f.exec(a);)h+=a.substring(i,c.index-1),d=c[0],
// test for chrome inserted junk
c=/font-family: inherit;|line-height: 1.[0-9]{3,12};|color: inherit; line-height: 1.1;|color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);|background-color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);/gi.exec(d),c?(d=d.replace(/( |)font-family: inherit;|( |)line-height: 1.[0-9]{3,12};|( |)color: inherit;|( |)color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);|( |)background-color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);/gi,""),
//console.log(styleVal, styleVal.length);
d.length>8&&(h+=" "+d)):h+=" "+d,i=f.lastIndex;h+=a.substring(i)}
//console.log('final:', finalHtml);
// only replace when something has changed, else we get focus problems on inserting lists
if(i>0){
// replace all empty strings
var j=h.replace(/<span\s?>(.*?)<\/span>(<br(\/|)>|)/gi,"$1");return j}return a};return a}).factory("taSanitize",["$sanitize",function(a){function b(a,b){for(var c,d=0,e=0,f=/<[^>]*>/gi;c=f.exec(a);)if(e=c.index,"/"===c[0].substr(1,1)){if(0===d)break;d--}else d++;
// get the start tags reversed - this is safe as we construct the strings with no content except the tags
return b+a.substring(0,e)+angular.element(b)[0].outerHTML.substring(b.length)+a.substring(e)}function c(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var d,f,g,h,i,k,l=/<([^>\/]+?)style=("([^"]+)"|'([^']+)')([^>]*)>/gi,m="",n="",o=0;f=l.exec(a);){
// one of the quoted values ' or "
/* istanbul ignore next: quotations match */
h=f[3]||f[4];var p=new RegExp(j,"i");
// test for style values to change
if(angular.isString(h)&&p.test(h)){
// remove build tag list
i="";
// find relevand tags and build a string of them
for(
// init regex here for exec
var q=new RegExp(j,"ig");g=q.exec(h);)for(d=0;d<e.length;d++)g[2*d+2]&&(i+="<"+e[d].tag+">");
// recursively find more legacy styles in html before this tag and after the previous match (if any)
k=c(a.substring(o,f.index)),
// build up html
n+=m.length>0?b(k,m):k,
// grab the style val without the transformed values
h=h.replace(new RegExp(j,"ig"),""),
// build the html tag
n+="<"+f[1].trim(),h.length>0&&(n+=' style="'+h+'"'),n+=f[5]+">",
// update the start index to after this tag
o=f.index+f[0].length,m=i}}return n+=m.length>0?b(a.substring(o),m):a.substring(o)}function d(a){if(!a||!angular.isString(a)||a.length<=0)return a;
// match all attr tags
for(
// replace all align='...' tags with text-align attributes
var b,c=/<([^>\/]+?)align=("([^"]+)"|'([^']+)')([^>]*)>/gi,d="",e=0;b=c.exec(a);){
// add all html before this tag
d+=a.substring(e,b.index),
// record last index after this tag
e=b.index+b[0].length;
// construct tag without the align attribute
var f="<"+b[1]+b[5];
// add the style attribute
/style=("([^"]+)"|'([^']+)')/gi.test(f)?/* istanbul ignore next: quotations match */
f=f.replace(/style=("([^"]+)"|'([^']+)')/i,'style="$2$3 text-align:'+(b[3]||b[4])+';"'):/* istanbul ignore next: quotations match */
f+=' style="text-align:'+(b[3]||b[4])+';"',f+=">",
// add to html
d+=f}
// return with remaining html
return d+a.substring(e)}for(var e=[{property:"font-weight",values:["bold"],tag:"b"},{property:"font-style",values:["italic"],tag:"i"}],f=[],g=0;g<e.length;g++){for(var h="("+e[g].property+":\\s*(",i=0;i<e[g].values.length;i++)/* istanbul ignore next: not needed to be tested yet */
i>0&&(h+="|"),h+=e[g].values[i];h+=");)",f.push(h)}var j="("+f.join("|")+")",k=new RegExp(/<span id="selectionBoundary_\d+_\d+" class="rangySelectionBoundary">[^<>]+?<\/span>/gi),l=new RegExp(/<span class="rangySelectionBoundary" id="selectionBoundary_\d+_\d+">[^<>]+?<\/span>/gi),m=new RegExp(/<span id="selectionBoundary_\d+_\d+" class="rangySelectionBoundary">[^<>]+?<\/span>/gi);return function(b,e,f){
// unsafe html should NEVER built into a DOM object via angular.element. This allows XSS to be inserted and run.
if(!f)try{b=c(b)}catch(a){}
// we had an issue in the past, where we dumped a whole bunch of <span>'s into the content...
// so we remove them here
// IN A FUTURE release this can be removed after all have updated through release 1.5.9
if(
// unsafe and oldsafe should be valid HTML strings
// any exceptions (lets say, color for example) should be made here but with great care
// setup unsafe element for modification
b=d(b))try{b=b.replace(k,""),b=b.replace(l,""),b=b.replace(k,""),b=b.replace(m,"")}catch(a){}var g;try{g=a(b),
// do this afterwards, then the $sanitizer should still throw for bad markup
f&&(g=b)}catch(a){g=e||""}
// Do processing for <pre> tags, removing tabs and return carriages outside of them
var h,i=g.match(/(<pre[^>]*>.*?<\/pre[^>]*>)/gi),j=g.replace(/(&#(9|10);)*/gi,""),n=/<pre[^>]*>.*?<\/pre[^>]*>/gi,o=0,p=0;for(g="";null!==(h=n.exec(j))&&o<i.length;)g+=j.substring(p,h.index)+i[o],p=h.index+h[0].length,o++;return g+j.substring(p)}}]).factory("taToolExecuteAction",["$q","$log",function(a,b){
// this must be called on a toolScope or instance
return function(c){void 0!==c&&(this.$editor=function(){return c});var d,e=a.defer(),f=e.promise,g=this.$editor();try{d=this.action(e,g.startAction()),
// We set the .finally callback here to make sure it doesn't get executed before any other .then callback.
f.finally(function(){g.endAction.call(g)})}catch(a){b.error(a)}(d||void 0===d)&&
// if true or undefined is returned then the action has finished. Otherwise the deferred action will be resolved manually.
e.resolve()}}]),angular.module("textAngular.DOM",["textAngular.factories"]).factory("taExecCommand",["taSelection","taBrowserTag","$document",function(b,c,d){var e=function(a,c){var d,e,f=a.find("li");for(e=f.length-1;e>=0;e--)d=angular.element("<"+c+">"+f[e].innerHTML+"</"+c+">"),a.after(d);a.remove(),b.setSelectionToElementEnd(d[0])},f=function(a,d,e,f,g){var h,i,j,k,l,m=a.find("li");for(i=0;i<m.length;i++)if(m[i].outerHTML===d[0].outerHTML){
// found it...
l=i,i>0&&(j=m[i-1]),i+1<m.length&&(k=m[i+1]);break}
//console.log('listElementToSelfTag', list, listElement, selfTag, bDefault, priorElement, nextElement);
// un-list the listElement
var n="";
//console.log('$target', $target[0]);
if(f?n+="<"+g+">"+d[0].innerHTML+"</"+g+">":(n+="<"+c(e)+">",n+="<li>"+d[0].innerHTML+"</li>",n+="</"+c(e)+">"),h=angular.element(n),!j)
// this is the first the list, so we just remove it...
return d.remove(),a.after(angular.element(a[0].outerHTML)),a.after(h),a.remove(),void b.setSelectionToElementEnd(h[0]);if(k){var o=(a.parent(),""),p=a[0].nodeName.toLowerCase();for(o+="<"+p+">",i=0;i<l;i++)o+="<li>"+m[i].innerHTML+"</li>";o+="</"+p+">";var q="";for(q+="<"+p+">",i=l+1;i<m.length;i++)q+="<li>"+m[i].innerHTML+"</li>";q+="</"+p+">",
//console.log(html1, $target[0], html2);
a.after(angular.element(q)),a.after(h),a.after(angular.element(o)),a.remove(),
//console.log('parent ******XXX*****', p[0]);
b.setSelectionToElementEnd(h[0])}else
// this is the last in the list, so we just remove it..
d.remove(),a.after(h),b.setSelectionToElementEnd(h[0])},g=function(a,d,e,f,g){var h,i,j,k,l,m=a.find("li"),n=[];for(i=0;i<m.length;i++)for(j=0;j<d.length;j++)m[i].isEqualNode(d[j])&&(
// found it...
n[j]=i);n[0]>0&&(k=m[n[0]-1]),n[d.length-1]+1<m.length&&(l=m[n[d.length-1]+1]);
//console.log('listElementsToSelfTag', list, listElements, selfTag, bDefault, !priorElement, !afterElement, foundIndexes[listElements.length-1], children.length);
// un-list the listElements
var o="";if(f)for(j=0;j<d.length;j++)o+="<"+g+">"+d[j].innerHTML+"</"+g+">",d[j].remove();else{for(o+="<"+c(e)+">",j=0;j<d.length;j++)o+=d[j].outerHTML,d[j].remove();o+="</"+c(e)+">"}if(h=angular.element(o),!k)
// this is the first the list, so we just remove it...
return a.after(angular.element(a[0].outerHTML)),a.after(h),a.remove(),void b.setSelectionToElementEnd(h[0]);if(!l)
// this is the last in the list, so we just remove it..
return a.after(h),void b.setSelectionToElementEnd(h[0]);
// okay it was some where in the middle... so we need to break apart the list...
var p="",q=a[0].nodeName.toLowerCase();for(p+="<"+q+">",i=0;i<n[0];i++)p+="<li>"+m[i].innerHTML+"</li>";p+="</"+q+">";var r="";for(r+="<"+q+">",i=n[d.length-1]+1;i<m.length;i++)r+="<li>"+m[i].innerHTML+"</li>";r+="</"+q+">",a.after(angular.element(r)),a.after(h),a.after(angular.element(p)),a.remove(),
//console.log('parent ******YYY*****', list.parent()[0]);
b.setSelectionToElementEnd(h[0])},h=function(a){/(<br(|\/)>)$/i.test(a.innerHTML.trim())?b.setSelectionBeforeElement(angular.element(a).find("br")[0]):b.setSelectionToElementEnd(a)},k=function(a,b){var c=angular.element("<"+b+">"+a[0].innerHTML+"</"+b+">");a.after(c),a.remove(),h(c.find("li")[0])},l=function(a,b,d){for(var e="",f=0;f<a.length;f++)e+="<"+c("li")+">"+a[f].innerHTML+"</"+c("li")+">";var g=angular.element("<"+d+">"+e+"</"+d+">");b.after(g),b.remove(),h(g.find("li")[0])},m=function(a,b){for(var c=0;c<a.childNodes.length;c++){var d=a.childNodes[c];/* istanbul ignore next - more complex testing*/
d.tagName&&d.tagName.match(i)&&m(d,b)}/* istanbul ignore next - very rare condition that we do not test*/
if(null===a.parentNode)
// nothing left to do..
return a;/* istanbul ignore next - not sure have to test this */
if("<br>"===b)return a;var e=angular.element(b);return e[0].innerHTML=a.innerHTML,a.parentNode.insertBefore(e[0],a),a.parentNode.removeChild(a),e};return function(h,n){
// NOTE: here we are dealing with the html directly from the browser and not the html the user sees.
// IF you want to modify the html the user sees, do it when the user does a switchView
return h=c(h),function(o,p,q,r){var s,t,u,v,w,x,y,z,A=angular.element("<"+h+">");try{b.getSelection&&(z=b.getSelection()),y=b.getSelectionElement();
// special checks and fixes when we are selecting the whole container
var B,C;/* istanbul ignore next */
void 0!==y.tagName&&("div"===y.tagName.toLowerCase()&&/taTextElement.+/.test(y.id)&&z&&z.start&&1===z.start.offset&&1===z.end.offset?(
// opps we are actually selecting the whole container!
//console.log('selecting whole container!');
B=y.innerHTML,/<br>/i.test(B)&&(
// Firefox adds <br>'s and so we remove the <br>
B=B.replace(/<br>/i,"&#8203;")),/<br\/>/i.test(B)&&(
// Firefox adds <br/>'s and so we remove the <br/>
B=B.replace(/<br\/>/i,"&#8203;")),
// remove stacked up <span>'s
/<span>(<span>)+/i.test(B)&&(B=__.replace(/<span>(<span>)+/i,"<span>")),
// remove stacked up </span>'s
/<\/span>(<\/span>)+/i.test(B)&&(B=__.replace(/<\/span>(<\/span>)+/i,"</span>")),/<span><\/span>/i.test(B)&&(
// if we end up with a <span></span> here we remove it...
B=B.replace(/<span><\/span>/i,"")),
//console.log('inner whole container', selectedElement.childNodes);
C="<div>"+B+"</div>",y.innerHTML=C,b.setSelectionToElementEnd(y.childNodes[0]),y=b.getSelectionElement()):"span"===y.tagName.toLowerCase()&&z&&z.start&&1===z.start.offset&&1===z.end.offset?(
// just a span -- this is a problem...
//console.log('selecting span!');
B=y.innerHTML,/<br>/i.test(B)&&(
// Firefox adds <br>'s and so we remove the <br>
B=B.replace(/<br>/i,"&#8203;")),/<br\/>/i.test(B)&&(
// Firefox adds <br/>'s and so we remove the <br/>
B=B.replace(/<br\/>/i,"&#8203;")),
// remove stacked up <span>'s
/<span>(<span>)+/i.test(B)&&(B=__.replace(/<span>(<span>)+/i,"<span>")),
// remove stacked up </span>'s
/<\/span>(<\/span>)+/i.test(B)&&(B=__.replace(/<\/span>(<\/span>)+/i,"</span>")),/<span><\/span>/i.test(B)&&(
// if we end up with a <span></span> here we remove it...
B=B.replace(/<span><\/span>/i,"")),
//console.log('inner span', selectedElement.childNodes);
// we wrap this in a <div> because otherwise the browser get confused when we attempt to select the whole node
// and the focus is not set correctly no matter what we do
C="<div>"+B+"</div>",y.innerHTML=C,b.setSelectionToElementEnd(y.childNodes[0]),y=b.getSelectionElement()):"p"===y.tagName.toLowerCase()&&z&&z.start&&1===z.start.offset&&1===z.end.offset?(
//console.log('p special');
// we need to remove the </br> that firefox adds!
B=y.innerHTML,/<br>/i.test(B)&&(
// Firefox adds <br>'s and so we remove the <br>
B=B.replace(/<br>/i,"&#8203;"),// no space-space
y.innerHTML=B)):"li"===y.tagName.toLowerCase()&&z&&z.start&&z.start.offset===z.end.offset&&(
// we need to remove the </br> that firefox adds!
B=y.innerHTML,/<br>/i.test(B)&&(
// Firefox adds <br>'s and so we remove the <br>
B=B.replace(/<br>/i,""),// nothing
y.innerHTML=B)))}catch(a){}
//console.log('************** selectedElement:', selectedElement);
/* istanbul ignore if: */
if(y){var D=angular.element(y),E=y&&y.tagName&&y.tagName.toLowerCase()||/* istanbul ignore next: */
"";if("insertorderedlist"===o.toLowerCase()||"insertunorderedlist"===o.toLowerCase()){var F=c("insertorderedlist"===o.toLowerCase()?"ol":"ul"),G=b.getOnlySelectedElements();
//console.log('PPPPPPPPPPPPP', tagName, selfTag, selectedElements, tagName.match(BLOCKELEMENTS), $selected.hasClass('ta-bind'), $selected.parent()[0].tagName);
if(G.length>1&&("ol"===E||"ul"===E))return g(D,G,F,F===E,h);if(E===F)
// if all selected then we should remove the list
// grab all li elements and convert to taDefaultWrap tags
//console.log('tagName===selfTag');
// if all selected then we should remove the list
// grab all li elements and convert to taDefaultWrap tags
//console.log('tagName===selfTag');
return D[0].childNodes.length!==G.length&&1===G.length?(D=angular.element(G[0]),f(D.parent(),D,F,!0,h)):e(D,h);if("li"===E&&D.parent()[0].tagName.toLowerCase()===F&&1===D.parent().children().length)
// catch for the previous statement if only one li exists
return e(D.parent(),h);if("li"===E&&D.parent()[0].tagName.toLowerCase()!==F&&1===D.parent().children().length)
// catch for the previous statement if only one li exists
return k(D.parent(),F);if(E.match(i)&&!D.hasClass("ta-bind")){
// if it's one of those block elements we have to change the contents
// if it's a ol/ul we are changing from one to the other
if(G.length&&D[0].childNodes.length!==G.length&&1===G.length)
//console.log('&&&&&&&&&&&&&&& --------- &&&&&&&&&&&&&&&&', selectedElements[0], $selected[0].childNodes);
return D=angular.element(G[0]),f(D.parent(),D,F,F===E,h);if("ol"===E||"ul"===E)
// now if this is a set of selected elements... behave diferently
return k(D,F);var H=!1;return angular.forEach(D.children(),function(a){a.tagName.match(i)&&(H=!0)}),H?l(D.children(),D,F):l([angular.element("<div>"+y.innerHTML+"</div>")[0]],D,F)}if(E.match(i)){
//console.log('_nodes', _nodes, tagName);
if(
// if we get here then the contents of the ta-bind are selected
v=b.getOnlySelectedElements(),0===v.length)
// here is if there is only text in ta-bind ie <div ta-bind>test content</div>
t=angular.element("<"+F+"><li>"+y.innerHTML+"</li></"+F+">"),D.html(""),D.append(t);else{if(1===v.length&&("ol"===v[0].tagName.toLowerCase()||"ul"===v[0].tagName.toLowerCase()))return v[0].tagName.toLowerCase()===F?e(angular.element(v[0]),h):k(angular.element(v[0]),F);u="";var I=[];for(s=0;s<v.length;s++)/* istanbul ignore else: catch for real-world can't make it occur in testing */
if(3!==v[s].nodeType){var J=angular.element(v[s]);/* istanbul ignore if: browser check only, phantomjs doesn't return children nodes but chrome at least does */
if("li"===v[s].tagName.toLowerCase())continue;u+="ol"===v[s].tagName.toLowerCase()||"ul"===v[s].tagName.toLowerCase()?J[0].innerHTML:"span"!==v[s].tagName.toLowerCase()||"ol"!==v[s].childNodes[0].tagName.toLowerCase()&&"ul"!==v[s].childNodes[0].tagName.toLowerCase()?"<"+c("li")+">"+J[0].innerHTML+"</"+c("li")+">":J[0].childNodes[0].innerHTML,I.unshift(J)}
//console.log('$nodes', $nodes);
t=angular.element("<"+F+">"+u+"</"+F+">"),I.pop().replaceWith(t),angular.forEach(I,function(a){a.remove()})}return void b.setSelectionToElementEnd(t[0])}}else{if("formatblock"===o.toLowerCase()){
// find the first blockElement
for(x=q.toLowerCase().replace(/[<>]/gi,""),"default"===x.trim()&&(x=h,q="<"+h+">"),t="li"===E?D.parent():D;!t[0].tagName||!t[0].tagName.match(i)&&!t.parent().attr("contenteditable");)t=t.parent(),/* istanbul ignore next */
E=(t[0].tagName||"").toLowerCase();if(E===x){
// $target is wrap element
v=t.children();var K=!1;for(s=0;s<v.length;s++)K=K||v[s].tagName.match(i);K?(t.after(v),w=t.next(),t.remove(),t=w):(A.append(t[0].childNodes),t.after(A),t.remove(),t=A)}else if(t.parent()[0].tagName.toLowerCase()!==x||t.parent().hasClass("ta-bind"))if(E.match(j))
// wrapping a list element
t.wrap(q);else{
// find the parent block element if any of the nodes are inline or text
for(
// default wrap behaviour
v=b.getOnlySelectedElements(),0===v.length&&(
// no nodes at all....
v=[t[0]]),s=0;s<v.length;s++)if(3===v[s].nodeType||!v[s].tagName.match(i))for(;3===v[s].nodeType||!v[s].tagName||!v[s].tagName.match(i);)v[s]=v[s].parentNode;if(
// remove any duplicates from the array of _nodes!
v=v.filter(function(a,b,c){return c.indexOf(a)===b}),
// remove all whole taTextElement if it is here... unless it is the only element!
v.length>1&&(v=v.filter(function(a,b,c){return!("div"===a.nodeName.toLowerCase()&&/^taTextElement/.test(a.id))})),angular.element(v[0]).hasClass("ta-bind"))t=angular.element(q),t[0].innerHTML=v[0].innerHTML,v[0].innerHTML=t[0].outerHTML;else if("blockquote"===x){for(
// blockquotes wrap other block elements
u="",s=0;s<v.length;s++)u+=v[s].outerHTML;for(t=angular.element(q),t[0].innerHTML=u,v[0].parentNode.insertBefore(t[0],v[0]),s=v.length-1;s>=0;s--)/* istanbul ignore else:  */
v[s].parentNode&&v[s].parentNode.removeChild(v[s])}else/* istanbul ignore next: not tested since identical to blockquote */
if("pre"===x&&b.getStateShiftKey()){for(
//console.log('shift pre', _nodes);
// pre wrap other block elements
u="",s=0;s<v.length;s++)u+=v[s].outerHTML;for(t=angular.element(q),t[0].innerHTML=u,v[0].parentNode.insertBefore(t[0],v[0]),s=v.length-1;s>=0;s--)/* istanbul ignore else:  */
v[s].parentNode&&v[s].parentNode.removeChild(v[s])}else
//console.log(optionsTagName, _nodes);
// regular block elements replace other block elements
for(s=0;s<v.length;s++){var L=m(v[s],q);v[s]===t[0]&&(t=angular.element(L))}}else{
//unwrap logic for parent
var M=t.parent(),N=M.contents();for(s=0;s<N.length;s++)/* istanbul ignore next: can't test - some wierd thing with how phantomjs works */
M.parent().hasClass("ta-bind")&&3===N[s].nodeType&&(A=angular.element("<"+h+">"),A[0].innerHTML=N[s].outerHTML,N[s]=A[0]),M.parent()[0].insertBefore(N[s],M[0]);M.remove()}
// looses focus when we have the whole container selected and no text!
// refocus on the shown display element, this fixes a bug when using firefox
return b.setSelectionToElementEnd(t[0]),void t[0].focus()}if("createlink"===o.toLowerCase()){/* istanbul ignore next: firefox specific fix */
if("a"===E)
// already a link!!! we are just replacing it...
return void(b.getSelectionElement().href=q);var O='<a href="'+q+'" target="'+(r.a.target?r.a.target:"")+'">',P="</a>",Q=b.getSelection();if(Q.collapsed)
//console.log('collapsed');
// insert text at selection, then select then just let normal exec-command run
b.insertHtml(O+q+P,n);else if(a.getSelection().getRangeAt(0).canSurroundContents()){var R=angular.element(O+P)[0];a.getSelection().getRangeAt(0).surroundContents(R)}return}if("inserthtml"===o.toLowerCase())
//console.log('inserthtml');
return void b.insertHtml(q,n)}try{d[0].execCommand(o,p,q)}catch(a){}}}}}]).service("taSelection",["$document","taDOM","$log",/* istanbul ignore next: all browser specifics and PhantomJS dosen't seem to support half of it */
function(b,c,d){
// need to dereference the document else the calls don't work correctly
var e,f=b[0],g=function(a,b){/* check if selection is a BR element at the beginning of a container. If so, get
        * the parentNode instead.
        * offset should be zero in this case. Otherwise, return the original
        * element.
        */
/* check if selection is a BR element at the beginning of a container. If so, get
        * the parentNode instead.
        * offset should be zero in this case. Otherwise, return the original
        * element.
        */
return a.tagName&&a.tagName.match(/^br$/i)&&0===b&&!a.previousSibling?{element:a.parentNode,offset:0}:{element:a,offset:b}},h={getSelection:function(){var b;try{
// catch any errors from rangy and ignore the issue
b=a.getSelection().getRangeAt(0)}catch(a){
//console.info(e);
return}var c=b.commonAncestorContainer,d={start:g(b.startContainer,b.startOffset),end:g(b.endContainer,b.endOffset),collapsed:b.collapsed};
//console.log('***selection container:', selection.container.nodeName, selection.start.offset, selection.container);
// This has problems under Firefox.
// On Firefox with
// <p>Try me !</p>
// <ul>
// <li>line 1</li>
// <li>line 2</li>
// </ul>
// <p>line 3</p>
// <ul>
// <li>line 4</li>
// <li>line 5</li>
// </ul>
// <p>Hello textAngular</p>
// WITH the cursor after the 3 on line 3, it gets the commonAncestorContainer as:
// <TextNode textContent='line 3'>
// AND Chrome gets the commonAncestorContainer as:
// <p>line 3</p>
//
// Check if the container is a text node and return its parent if so
// unless this is the whole taTextElement.  If so we return the textNode
//console.log('*********taTextElement************');
//console.log('commonAncestorContainer:', container);
return 3===c.nodeType&&("div"===c.parentNode.nodeName.toLowerCase()&&/^taTextElement/.test(c.parentNode.id)||(c=c.parentNode)),"div"===c.nodeName.toLowerCase()&&/^taTextElement/.test(c.id)?(d.start.element=c.childNodes[d.start.offset],d.end.element=c.childNodes[d.end.offset],d.container=c):c.parentNode===d.start.element||c.parentNode===d.end.element?d.container=c.parentNode:d.container=c,d},
// if we use the LEFT_ARROW and we are at the special place <span>&#65279;</span> we move the cursor over by one...
// Chrome and Firefox behave differently so so fix this for Firefox here.  No adjustment needed for Chrome.
updateLeftArrowKey:function(b){var c=a.getSelection().getRangeAt(0);if(c&&c.collapsed){var d=h.getFlattenedDom(c);if(!d.findIndex)return;var e,f,g=c.startContainer,i=d.findIndex(function(a,b){if(a.node===g)return!0;var c=a.parents.indexOf(g);return c!==-1});
//console.log('updateLeftArrowKey', range.startOffset, range.startContainer.textContent);
// this first section handles the case for Chrome browser
// if the first character of the nextNode is a \ufeff we know that we are just before the special span...
// and so we most left by one character
if(
//console.log('indexStartContainer', indexStartContainer, _nodes.length, 'startContainer:', _node, _node === _nodes[indexStartContainer].node);
d.forEach(function(a,b){
//console.log(i, n.node);
a.parents.forEach(function(a,b){})}),i+1<d.length&&(
// we need the node just after this startContainer
// so we can check and see it this is a special place
f=d[i+1].node),f&&f.textContent&&(e=/^\ufeff([^\ufeff]*)$/.exec(f.textContent)))
// we are before the special node with begins with a \ufeff character
//console.log('LEFT ...found it...', 'startOffset:', range.startOffset, m[0].length, m[1].length);
// no need to change anything in this case
return;var j;if(i>0&&(
// we need the node just after this startContainer
// so we can check and see it this is a special place
j=d[i-1].node),0===c.startOffset&&j&&(
//console.log(nextNodeToLeft, range.startOffset, nextNodeToLeft.textContent);
e=/^\ufeff([^\ufeff]*)$/.exec(j.textContent)))
//console.log('LEFT &&&&&&&&&&&&&&&&&&&...found it...&&&&&&&&&&&', nextNodeToLeft, m[0].length, m[1].length);
// move over to the left my one -- Firefox triggers this case
return void h.setSelectionToElementEnd(j)}},
// if we use the RIGHT_ARROW and we are at the special place <span>&#65279;</span> we move the cursor over by one...
updateRightArrowKey:function(a){},getFlattenedDom:function(a){function b(a){if(a.node.childNodes.length){var c=Array.prototype.slice.call(a.node.childNodes);// converts NodeList to Array
c.forEach(function(c){var d=a.parents.slice();d.slice(-1)[0]!==a.node&&d.push(a.node),b({parents:d,node:c})})}else d.push({parents:a.parents,node:a.node})}var c=a.commonAncestorContainer.parentNode;if(!c)return a.commonAncestorContainer.childNodes;var d=Array.prototype.slice.call(c.childNodes),e=d.indexOf(a.startContainer);
// make sure that we have a big enough set of nodes
// now walk the parent
return e+1<d.length&&e>0||c.parentNode&&(c=c.parentNode),d=[],b({parents:[c],node:c}),d},getOnlySelectedElements:function(){var b=a.getSelection().getRangeAt(0),c=b.commonAncestorContainer;
// get the nodes in the range that are ELEMENT_NODE and are children of the container
// in this range...
// Node.TEXT_NODE === 3
// Node.ELEMENT_NODE === 1
// Node.COMMENT_NODE === 8
// Check if the container is a text node and return its parent if so
return c=3===c.nodeType?c.parentNode:c,b.getNodes([1],function(a){return a.parentNode===c})},
// this includes the container element if all children are selected
getAllSelectedElements:function(){var b=a.getSelection().getRangeAt(0),c=b.commonAncestorContainer;
// Node.TEXT_NODE === 3
// Node.ELEMENT_NODE === 1
// Node.COMMENT_NODE === 8
// Check if the container is a text node and return its parent if so
c=3===c.nodeType?c.parentNode:c;
// get the nodes in the range that are ELEMENT_NODE and are children of the container
// in this range...
var d=b.getNodes([1],function(a){return a.parentNode===c}),e=c.innerHTML;
//console.log(innerHtml);
//console.log(range.toHtml());
//console.log(innerHtml === range.toHtml());
if(
// remove the junk that rangy has put down
e=e.replace(/<span id=.selectionBoundary[^>]+>\ufeff?<\/span>/gi,""),e===b.toHtml()&&("div"!==c.nodeName.toLowerCase()||!/^taTextElement/.test(c.id))){for(var f=[],g=d.length;g--;f.unshift(d[g]));d=f,d.push(c)}return d},
// Some basic selection functions
getSelectionElement:function(){var a=h.getSelection();return a?h.getSelection().container:void 0},setSelection:function(b,c,d,e){var f=a.createRange();f.setStart(b,d),f.setEnd(c,e),a.getSelection().setSingleRange(f)},setSelectionBeforeElement:function(b){var c=a.createRange();c.selectNode(b),c.collapse(!0),a.getSelection().setSingleRange(c)},setSelectionAfterElement:function(b){var c=a.createRange();c.selectNode(b),c.collapse(!1),a.getSelection().setSingleRange(c)},setSelectionToElementStart:function(b){var c=a.createRange();c.selectNodeContents(b),c.collapse(!0),a.getSelection().setSingleRange(c)},setSelectionToElementEnd:function(b){var c=a.createRange();c.selectNodeContents(b),c.collapse(!1),b.childNodes&&b.childNodes[b.childNodes.length-1]&&"br"===b.childNodes[b.childNodes.length-1].nodeName&&(c.startOffset=c.endOffset=c.startOffset-1),a.getSelection().setSingleRange(c)},setStateShiftKey:function(a){e=a},getStateShiftKey:function(){return e},
// from http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div
// topNode is the contenteditable normally, all manipulation MUST be inside this.
insertHtml:function(b,d){var e,g,j,l,m,n,o,p=angular.element("<div>"+b+"</div>"),q=a.getSelection().getRangeAt(0),r=f.createDocumentFragment(),s=p[0].childNodes,t=!0;if(s.length>0){for(
// NOTE!! We need to do the following:
// check for blockelements - if they exist then we have to split the current element in half (and all others up to the closest block element) and insert all children in-between.
// If there are no block elements, or there is a mixture we need to create textNodes for the non wrapped text (we don't want them spans messing up the picture).
l=[],j=0;j<s.length;j++){var u=s[j];"p"===u.nodeName.toLowerCase()&&""===u.innerHTML.trim()||(/****************
                     *  allow any text to be inserted...
                    if((   _cnode.nodeType === 3 &&
                           _cnode.nodeValue === '\ufeff'[0] &&
                           _cnode.nodeValue.trim() === '') // empty no-space space element
                        ) {
                        // no change to isInline
                        nodes.push(_cnode);
                        continue;
                    }
                    if(_cnode.nodeType === 3 &&
                         _cnode.nodeValue.trim() === '') { // empty text node
                        continue;
                    }
                    *****************/
t=t&&!i.test(u.nodeName),l.push(u))}for(var v=0;v<l.length;v++)n=r.appendChild(l[v]);!t&&q.collapsed&&/^(|<br(|\/)>)$/i.test(q.startContainer.innerHTML)&&q.selectNode(q.startContainer)}else t=!0,
// paste text of some sort
n=r=f.createTextNode(b);
// Other Edge case - selected data spans multiple blocks.
if(t)q.deleteContents();else// not inline insert
if(q.collapsed&&q.startContainer!==d)if(q.startContainer.innerHTML&&q.startContainer.innerHTML.match(/^<[^>]*>$/i))
// this log is to catch when innerHTML is something like `<img ...>`
e=q.startContainer,1===q.startOffset?(
// before single tag
q.setStartAfter(e),q.setEndAfter(e)):(
// after single tag
q.setStartBefore(e),q.setEndBefore(e));else{
// split element into 2 and insert block element in middle
if(3===q.startContainer.nodeType&&q.startContainer.parentNode!==d)
// Escape out of the inline tags like b
for(// if text node
e=q.startContainer.parentNode,g=e.cloneNode(),
// split the nodes into two lists - before and after, splitting the node with the selection into 2 text nodes.
c.splitNodes(e.childNodes,e,g,q.startContainer,q.startOffset);!k.test(e.nodeName);){angular.element(e).after(g),e=e.parentNode;var w=g;g=e.cloneNode(),
// split the nodes into two lists - before and after, splitting the node with the selection into 2 text nodes.
c.splitNodes(e.childNodes,e,g,w)}else e=q.startContainer,g=e.cloneNode(),c.splitNodes(e.childNodes,e,g,void 0,void 0,q.startOffset);if(angular.element(e).after(g),
// put cursor to end of inserted content
//console.log('setStartAfter', parent);
q.setStartAfter(e),q.setEndAfter(e),/^(|<br(|\/)>)$/i.test(e.innerHTML.trim())&&(q.setStartBefore(e),q.setEndBefore(e),angular.element(e).remove()),/^(|<br(|\/)>)$/i.test(g.innerHTML.trim())&&angular.element(g).remove(),"li"===e.nodeName.toLowerCase()){for(o=f.createDocumentFragment(),m=0;m<r.childNodes.length;m++)p=angular.element("<li>"),c.transferChildNodes(r.childNodes[m],p[0]),c.transferNodeAttributes(r.childNodes[m],p[0]),o.appendChild(p[0]);r=o,n&&(n=r.childNodes[r.childNodes.length-1],n=n.childNodes[n.childNodes.length-1])}}else q.deleteContents();q.insertNode(r),n&&h.setSelectionToElementEnd(n)}};return h}]).service("taDOM",function(){var a={
// recursive function that returns an array of angular.elements that have the passed attribute set on them
getByAttribute:function(b,c){var d=[],e=b.children();return e.length&&angular.forEach(e,function(b){d=d.concat(a.getByAttribute(angular.element(b),c))}),void 0!==b.attr(c)&&d.push(b),d},transferChildNodes:function(a,b){for(
// clear out target
b.innerHTML="";a.childNodes.length>0;)b.appendChild(a.childNodes[0]);return b},splitNodes:function(b,c,d,e,f,g){if(!e&&isNaN(g))throw new Error("taDOM.splitNodes requires a splitNode or splitIndex");for(var h=document.createDocumentFragment(),i=document.createDocumentFragment(),j=0;b.length>0&&(isNaN(g)||g!==j)&&b[0]!==e;)h.appendChild(b[0]),// this removes from the nodes array (if proper childNodes object.
j++;for(!isNaN(f)&&f>=0&&b[0]&&(h.appendChild(document.createTextNode(b[0].nodeValue.substring(0,f))),b[0].nodeValue=b[0].nodeValue.substring(f));b.length>0;)i.appendChild(b[0]);a.transferChildNodes(h,c),a.transferChildNodes(i,d)},transferNodeAttributes:function(a,b){for(var c=0;c<a.attributes.length;c++)b.setAttribute(a.attributes[c].name,a.attributes[c].value);return b}};return a}),angular.module("textAngular.validators",[]).directive("taMaxText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMaxText));if(isNaN(e))throw"Max text must be an integer";c.$observe("taMaxText",function(a){if(e=parseInt(a),isNaN(e))throw"Max text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMaxText=function(a){var b=angular.element("<div/>");return b.html(a),b.text().length<=e}}}}).directive("taMinText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMinText));if(isNaN(e))throw"Min text must be an integer";c.$observe("taMinText",function(a){if(e=parseInt(a),isNaN(e))throw"Min text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMinText=function(a){var b=angular.element("<div/>");return b.html(a),!b.text().length||b.text().length>=e}}}}),angular.module("textAngular.taBind",["textAngular.factories","textAngular.DOM"]).service("_taBlankTest",[function(){return function(a){
// we radically restructure this code.
// what was here before was incredibly fragile.
// What we do now is to check that the html is non-blank visually
// which we check by looking at html->text
if(!a)return!0;
// find first non-tag match - ie start of string or after tag that is not whitespace
// var t0 = performance.now();
// Takes a small fraction of a mSec to do this...
var b=d(a);
// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');
// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');
return""===b&&!/<img[^>]+>/.test(a)}}]).directive("taButton",[function(){return{link:function(a,b,c){b.attr("unselectable","on"),b.on("mousedown",function(a,b){/* istanbul ignore else: this is for catching the jqLite testing*/
// this prevents focusout from firing on the editor when clicking toolbar buttons
return b&&angular.extend(a,b),a.preventDefault(),!1})}}}]).directive("taBind",["taSanitize","$timeout","$document","taFixChrome","taBrowserTag","taSelection","taSelectableElements","taApplyCustomRenderers","taOptions","_taBlankTest","$parse","taDOM","textAngularManager",function(b,c,d,e,f,h,j,l,o,p,q,r,s){
// Uses for this are textarea or input with ng-model and ta-bind='text'
// OR any non-form element with contenteditable="contenteditable" ta-bind="html|text" ng-model
return{priority:2,// So we override validators correctly
require:["ngModel","?ngModelOptions"],link:function(f,r,u,v){function w(a){var b;return V.forEach(function(c){if(c.keyCode===a.keyCode){var d=(a.metaKey?N:0)+(a.ctrlKey?M:0)+(a.shiftKey?P:0)+(a.altKey?O:0);if(c.forbiddenModifiers&d)return;c.mustHaveModifiers.every(function(a){return d&a})&&(b=c.specialKey)}}),b}var x,y,z,A,B=v[0],C=v[1]||{},D=void 0!==r.attr("contenteditable")&&r.attr("contenteditable"),E=D||"textarea"===r[0].tagName.toLowerCase()||"input"===r[0].tagName.toLowerCase(),F=!1,G=!1,H=!1,I=u.taUnsafeSanitizer||o.disableSanitizer,J=u.taKeepStyles||o.keepStyles,K=/^(9|19|20|27|33|34|35|36|37|38|39|40|45|112|113|114|115|116|117|118|119|120|121|122|123|144|145)$/i,L=/^(8|13|32|46|59|61|107|109|173|186|187|188|189|190|191|192|219|220|221|222)$/i,M=1,N=2,O=4,P=8,Q=13,R=16,S=9,T=37,U=39,V=[
//		ctrl/command + z
{specialKey:"UndoKey",forbiddenModifiers:O+P,mustHaveModifiers:[N+M],keyCode:90},
//		ctrl/command + shift + z
{specialKey:"RedoKey",forbiddenModifiers:O,mustHaveModifiers:[N+M,P],keyCode:90},
//		ctrl/command + y
{specialKey:"RedoKey",forbiddenModifiers:O+P,mustHaveModifiers:[N+M],keyCode:89},
//		TabKey
{specialKey:"TabKey",forbiddenModifiers:N+P+O+M,mustHaveModifiers:[],keyCode:S},
//		shift + TabKey
{specialKey:"ShiftTabKey",forbiddenModifiers:N+O+M,mustHaveModifiers:[P],keyCode:S}];
// set the default to be a paragraph value
void 0===u.taDefaultWrap&&(u.taDefaultWrap="p"),/* istanbul ignore next: ie specific test */
""===u.taDefaultWrap?(z="",A=void 0===g.ie?"<div><br></div>":g.ie>=11?"<p><br></p>":g.ie<=8?"<P>&nbsp;</P>":"<p>&nbsp;</p>"):(z=void 0===g.ie||g.ie>=11?"br"===u.taDefaultWrap.toLowerCase()?"<BR><BR>":"<"+u.taDefaultWrap+"><br></"+u.taDefaultWrap+">":g.ie<=8?"<"+u.taDefaultWrap.toUpperCase()+"></"+u.taDefaultWrap.toUpperCase()+">":"<"+u.taDefaultWrap+"></"+u.taDefaultWrap+">",A=void 0===g.ie||g.ie>=11?"br"===u.taDefaultWrap.toLowerCase()?"<br><br>":"<"+u.taDefaultWrap+"><br></"+u.taDefaultWrap+">":g.ie<=8?"<"+u.taDefaultWrap.toUpperCase()+">&nbsp;</"+u.taDefaultWrap.toUpperCase()+">":"<"+u.taDefaultWrap+">&nbsp;</"+u.taDefaultWrap+">"),/* istanbul ignore else */
C.$options||(C.$options={});// ng-model-options support
var W=function(a){if(p(a))return a;var b=angular.element("<div>"+a+"</div>");
//console.log('domTest.children().length():', domTest.children().length);
//console.log('_ensureContentWrapped', domTest.children());
//console.log(value, attrs.taDefaultWrap);
if(0===b.children().length)
// if we have a <br> and the attrs.taDefaultWrap is a <p> we need to remove the <br>
//value = value.replace(/<br>/i, '');
a="<"+u.taDefaultWrap+">"+a+"</"+u.taDefaultWrap+">";else{var c,d=b[0].childNodes,e=!1;for(c=0;c<d.length&&!(e=d[c].nodeName.toLowerCase().match(i));c++);if(e)for(a="",c=0;c<d.length;c++){var f=d[c],g=f.nodeName.toLowerCase();
//console.log('node#:', i, 'name:', nodeName);
if("#comment"===g)a+="<!--"+f.nodeValue+"-->";else if("#text"===g){
// determine if this is all whitespace, if so, we will leave it as it is.
// otherwise, we will wrap it as it is
var h=f.textContent;
// not pure white space so wrap in <p>...</p> or whatever attrs.taDefaultWrap is set to.
a+=h.trim()?"<"+u.taDefaultWrap+">"+h+"</"+u.taDefaultWrap+">":h}else if(g.match(i))a+=f.outerHTML;else{/* istanbul ignore  next: Doesn't seem to trigger on tests */
var j=f.outerHTML||f.nodeValue;/* istanbul ignore else: Doesn't seem to trigger on tests, is tested though */
a+=""!==j.trim()?"<"+u.taDefaultWrap+">"+j+"</"+u.taDefaultWrap+">":j}}else a="<"+u.taDefaultWrap+">"+a+"</"+u.taDefaultWrap+">"}
//console.log(value);
return a};u.taPaste&&(y=q(u.taPaste)),r.addClass("ta-bind");var X;f["$undoManager"+(u.id||"")]=B.$undoManager={_stack:[],_index:0,_max:1e3,push:function(a){return"undefined"==typeof a||null===a||"undefined"!=typeof this.current()&&null!==this.current()&&a===this.current()?a:(this._index<this._stack.length-1&&(this._stack=this._stack.slice(0,this._index+1)),this._stack.push(a),X&&c.cancel(X),this._stack.length>this._max&&this._stack.shift(),this._index=this._stack.length-1,a)},undo:function(){return this.setToIndex(this._index-1)},redo:function(){return this.setToIndex(this._index+1)},setToIndex:function(a){if(!(a<0||a>this._stack.length-1))return this._index=a,this.current()},current:function(){return this._stack[this._index]}};
// in here we are undoing the converts used elsewhere to prevent the < > and & being displayed when they shouldn't in the code.
var Y,Z=function(){if(D)return r[0].innerHTML;if(E)return r.val();throw"textAngular Error: attempting to update non-editable taBind"},$=function(a){
// emit the element-select event, pass the element
return f.$emit("ta-element-select",this),a.preventDefault(),!1},_=f["reApplyOnSelectorHandlers"+(u.id||"")]=function(){/* istanbul ignore else */
F||angular.forEach(j,function(a){
// check we don't apply the handler twice
r.find(a).off("click",$).on("click",$)})},aa=function(a,b,c){H=c||!1,"undefined"!=typeof b&&null!==b||(b=D),// if not contentEditable then the native undo/redo is fine
"undefined"!=typeof a&&null!==a||(a=Z()),p(a)?(
// this avoids us from tripping the ng-pristine flag if we click in and out with out typing
""!==B.$viewValue&&B.$setViewValue(""),b&&""!==B.$undoManager.current()&&B.$undoManager.push("")):(_(),B.$viewValue!==a&&(B.$setViewValue(a),b&&B.$undoManager.push(a))),B.$render()},ba=function(a){r[0].innerHTML=a},ca=f["$undoTaBind"+(u.id||"")]=function(){/* istanbul ignore else: can't really test it due to all changes being ignored as well in readonly */
if(!F&&D){var a=B.$undoManager.undo();"undefined"!=typeof a&&null!==a&&(ba(a),aa(a,!1),Y&&c.cancel(Y),Y=c(function(){r[0].focus(),h.setSelectionToElementEnd(r[0])},1))}},da=f["$redoTaBind"+(u.id||"")]=function(){/* istanbul ignore else: can't really test it due to all changes being ignored as well in readonly */
if(!F&&D){var a=B.$undoManager.redo();"undefined"!=typeof a&&null!==a&&(ba(a),aa(a,!1),/* istanbul ignore next */
Y&&c.cancel(Y),Y=c(function(){r[0].focus(),h.setSelectionToElementEnd(r[0])},1))}};
//used for updating when inserting wrapped elements
f["updateTaBind"+(u.id||"")]=function(){F||aa(void 0,void 0,!0)};
// catch DOM XSS via taSanitize
// Sanitizing both ways is identical
var ea=function(a){return B.$oldViewValue=b(e(a,J),B.$oldViewValue,I)};
//this code is used to update the models when data is entered/deleted
if(
// trigger the validation calls
r.attr("required")&&(B.$validators.required=function(a,b){return!p(a||b)}),
// parsers trigger from the above keyup function or any other time that the viewValue is updated and parses it for storage in the ngModel
B.$parsers.push(ea),B.$parsers.unshift(W),
// because textAngular is bi-directional (which is awesome) we need to also sanitize values going in from the server
B.$formatters.push(ea),B.$formatters.unshift(W),B.$formatters.unshift(function(a){return B.$undoManager.push(a||"")}),E)if(f.events={},D){
// all the code specific to contenteditable divs
var fa=!1,ga=function(a){var d=void 0!==a&&a.match(/content=["']*OneNote.File/i);/* istanbul ignore else: don't care if nothing pasted */
//console.log(text);
if(a&&a.trim().length){
// test paste from word/microsoft product
if(a.match(/class=["']*Mso(Normal|List)/i)||a.match(/content=["']*Word.Document/i)||a.match(/content=["']*OneNote.File/i)){var e=a.match(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/i);e=e?e[1]:a,e=e.replace(/<o:p>[\s\S]*?<\/o:p>/gi,"").replace(/class=(["']|)MsoNormal(["']|)/gi,"");var g=angular.element("<div>"+e+"</div>"),i=angular.element("<div></div>"),j={element:null,lastIndent:[],lastLi:null,isUl:!1};j.lastIndent.peek=function(){var a=this.length;if(a>0)return this[a-1]};for(var k=function(a){j.isUl=a,j.element=angular.element(a?"<ul>":"<ol>"),j.lastIndent=[],j.lastIndent.peek=function(){var a=this.length;if(a>0)return this[a-1]},j.lastLevelMatch=null},l=0;l<=g[0].childNodes.length;l++)if(g[0].childNodes[l]&&"#text"!==g[0].childNodes[l].nodeName){var m=g[0].childNodes[l].tagName.toLowerCase();if("p"===m||"ul"===m||"h1"===m||"h2"===m||"h3"===m||"h4"===m||"h5"===m||"h6"===m||"table"===m){var n=angular.element(g[0].childNodes[l]),o=(n.attr("class")||"").match(/MsoList(Bullet|Number|Paragraph)(CxSp(First|Middle|Last)|)/i);if(o){if(n[0].childNodes.length<2||n[0].childNodes[1].childNodes.length<1)continue;var p="bullet"===o[1].toLowerCase()||"number"!==o[1].toLowerCase()&&!(/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(n[0].childNodes[1].innerHTML)||/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(n[0].childNodes[1].childNodes[0].innerHTML)),q=(n.attr("style")||"").match(/margin-left:([\-\.0-9]*)/i),s=parseFloat(q?q[1]:0),t=(n.attr("style")||"").match(/mso-list:l([0-9]+) level([0-9]+) lfo[0-9+]($|;)/i);if(
// prefers the mso-list syntax
t&&t[2]&&(s=parseInt(t[2])),t&&(!j.lastLevelMatch||t[1]!==j.lastLevelMatch[1])||!o[3]||"first"===o[3].toLowerCase()||null===j.lastIndent.peek()||j.isUl!==p&&j.lastIndent.peek()===s)k(p),i.append(j.element);else if(null!=j.lastIndent.peek()&&j.lastIndent.peek()<s)j.element=angular.element(p?"<ul>":"<ol>"),j.lastLi.append(j.element);else if(null!=j.lastIndent.peek()&&j.lastIndent.peek()>s){for(;null!=j.lastIndent.peek()&&j.lastIndent.peek()>s;)if("li"!==j.element.parent()[0].tagName.toLowerCase()){if(!/[uo]l/i.test(j.element.parent()[0].tagName.toLowerCase()))// else it's it should be a sibling
break;j.element=j.element.parent(),j.lastIndent.pop()}else j.element=j.element.parent();j.isUl="ul"===j.element[0].tagName.toLowerCase(),p!==j.isUl&&(k(p),i.append(j.element))}j.lastLevelMatch=t,s!==j.lastIndent.peek()&&j.lastIndent.push(s),j.lastLi=angular.element("<li>"),j.element.append(j.lastLi),j.lastLi.html(n.html().replace(/<!(--|)\[if !supportLists\](--|)>[\s\S]*?<!(--|)\[endif\](--|)>/gi,"")),n.remove()}else k(!1),i.append(n)}}var u=function(a){a=angular.element(a);for(var b=a[0].childNodes.length-1;b>=0;b--)a.after(a[0].childNodes[b]);a.remove()};angular.forEach(i.find("span"),function(a){a.removeAttribute("lang"),a.attributes.length<=0&&u(a)}),angular.forEach(i.find("font"),u),a=i.html(),d&&(a=i.html()||g.html()),
// LF characters instead of spaces in some spots and they are replaced by '/n', so we need to just swap them to spaces
a=a.replace(/\n/g," ")}else{if(
// remove unnecessary chrome insert
a=a.replace(/<(|\/)meta[^>]*?>/gi,""),a.match(/<[^>]*?(ta-bind)[^>]*?>/)){
// entire text-angular or ta-bind has been pasted, REMOVE AT ONCE!!
if(a.match(/<[^>]*?(text-angular)[^>]*?>/)){var v=angular.element("<div>"+a+"</div>");v.find("textarea").remove();for(var w=0;w<binds.length;w++){for(var x=binds[w][0].parentNode.parentNode,z=0;z<binds[w][0].childNodes.length;z++)x.parentNode.insertBefore(binds[w][0].childNodes[z],x);x.parentNode.removeChild(x)}a=v.html().replace('<br class="Apple-interchange-newline">',"")}}else a.match(/^<span/)&&(
// in case of pasting only a span - chrome paste, remove them. THis is just some wierd formatting
// if we remove the '<span class="Apple-converted-space">??</span>' here we destroy the spacing
// on paste from even ourselves!
a.match(/<span class=(\"Apple-converted-space\"|\'Apple-converted-space\')>.<\/span>/gi)||(a=a.replace(/<(|\/)span[^>]*?>/gi,"")));
// Webkit on Apple tags
a=a.replace(/<br class="Apple-interchange-newline"[^>]*?>/gi,"").replace(/<span class="Apple-converted-space">( |&nbsp;)<\/span>/gi,"&nbsp;")}/<li(\s.*)?>/i.test(a)&&/(<ul(\s.*)?>|<ol(\s.*)?>).*<li(\s.*)?>/i.test(a)===!1&&(
// insert missing parent of li element
a=a.replace(/<li(\s.*)?>.*<\/li(\s.*)?>/i,"<ul>$&</ul>")),
// parse whitespace from plaintext input, starting with preceding spaces that get stripped on paste
a=a.replace(/^[ |\u00A0]+/gm,function(a){for(var b="",c=0;c<a.length;c++)b+="&nbsp;";return b}).replace(/\n|\r\n|\r/g,"<br />").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),y&&(a=y(f,{$html:a})||a),
// turn span vertical-align:super into <sup></sup>
a=a.replace(/<span style=("|')([^<]*?)vertical-align\s*:\s*super;?([^>]*?)("|')>([^<]+?)<\/span>/g,"<sup style='$2$3'>$5</sup>"),a=b(a,"",I),
//console.log('DONE\n', text);
h.insertHtml(a,r[0]),c(function(){B.$setViewValue(Z()),fa=!1,r.removeClass("processing-paste")},0)}else fa=!1,r.removeClass("processing-paste")};r.on("paste",f.events.paste=function(b,e){if(/* istanbul ignore else: this is for catching the jqLite testing*/
e&&angular.extend(b,e),F||fa)return b.stopPropagation(),b.preventDefault(),!1;
// Code adapted from http://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser/6804718#6804718
fa=!0,r.addClass("processing-paste");var f,g=(b.originalEvent||b).clipboardData;/* istanbul ignore next: Handle legacy IE paste */
if(!g&&window.clipboardData&&window.clipboardData.getData)return f=window.clipboardData.getData("Text"),ga(f),b.stopPropagation(),b.preventDefault(),!1;if(g&&g.getData&&g.types.length>0){for(var h="",i=0;i<g.types.length;i++)h+=" "+g.types[i];/* istanbul ignore next: browser tests */
return/text\/html/i.test(h)?f=g.getData("text/html"):/text\/plain/i.test(h)&&(f=g.getData("text/plain")),ga(f),b.stopPropagation(),b.preventDefault(),!1}// Everything else - empty editdiv and allow browser to paste content into it, then cleanup
var j=a.saveSelection(),k=angular.element('<div class="ta-hidden-input" contenteditable="true"></div>');d.find("body").append(k),k[0].focus(),c(function(){
// restore selection
a.restoreSelection(j),ga(k[0].innerHTML),r[0].focus(),k.remove()},0)}),r.on("cut",f.events.cut=function(a){
// timeout to next is needed as otherwise the paste/cut event has not finished actually changing the display
F?a.preventDefault():c(function(){B.$setViewValue(Z())},0)}),r.on("keydown",f.events.keydown=function(a,b){/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),a.keyCode===R?h.setStateShiftKey(!0):h.setStateShiftKey(!1),a.specialKey=w(a);var c;/* istanbul ignore else: readonly check */
if(/* istanbul ignore next: difficult to test */
o.keyMappings.forEach(function(b){a.specialKey===b.commandKeyCode&&(
// taOptions has remapped this binding... so
// we disable our own
a.specialKey=void 0),b.testForKey(a)&&(c=b.commandKeyCode),"UndoKey"!==b.commandKeyCode&&"RedoKey"!==b.commandKeyCode||b.enablePropagation||a.preventDefault()}),/* istanbul ignore next: difficult to test */
"undefined"!=typeof c&&(a.specialKey=c),/* istanbul ignore next: difficult to test as can't seem to select */
"undefined"==typeof a.specialKey||"UndoKey"===a.specialKey&&"RedoKey"===a.specialKey||(a.preventDefault(),s.sendKeyCommand(f,a)),!(F||("UndoKey"===a.specialKey&&(ca(),a.preventDefault()),"RedoKey"===a.specialKey&&(da(),a.preventDefault()),a.keyCode!==Q||a.shiftKey||a.ctrlKey||a.metaKey||a.altKey))){var d,e=function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},g=h.getSelectionElement();
// shifted to nodeName here from tagName since it is more widely supported see: http://stackoverflow.com/questions/4878484/difference-between-tagname-and-nodename
if(!g.nodeName.match(k))return;var i=angular.element(z),j=["blockquote","ul","ol"];if(e(j,g.parentNode.tagName.toLowerCase())){if(/^<br(|\/)>$/i.test(g.innerHTML.trim())&&!g.nextSibling){
// if last element is blank, pull element outside.
d=angular.element(g);var l=d.parent();l.after(i),d.remove(),0===l.children().length&&l.remove(),h.setSelectionToElementStart(i[0]),a.preventDefault()}/^<[^>]+><br(|\/)><\/[^>]+>$/i.test(g.innerHTML.trim())&&(d=angular.element(g),d.after(i),d.remove(),h.setSelectionToElementStart(i[0]),a.preventDefault())}}});var ha;r.on("keyup",f.events.keyup=function(a,b){// clear the ShiftKey state
/* istanbul ignore next: FF specific bug fix */
if(/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),h.setStateShiftKey(!1),a.keyCode===S){var d=h.getSelection();return void(d.start.element===r[0]&&r.children().length&&h.setSelectionToElementStart(r.children()[0]))}if(
// we do this here during the 'keyup' so that the browser has already moved the slection by one character...
a.keyCode!==T||a.shiftKey||h.updateLeftArrowKey(r),
// we do this here during the 'keyup' so that the browser has already moved the slection by one character...
a.keyCode!==U||a.shiftKey||h.updateRightArrowKey(r),X&&c.cancel(X),!F&&!K.test(a.keyCode))/* istanbul ignore next: Ignore any _ENTER_KEYCODE that has ctrlKey, metaKey or alKey */
if(a.keyCode===Q&&(a.ctrlKey||a.metaKey||a.altKey));else{
// if enter - insert new taDefaultWrap, if shift+enter insert <br/>
if(""!==z&&"<BR><BR>"!==z&&a.keyCode===Q&&!a.ctrlKey&&!a.metaKey&&!a.altKey){for(var e=h.getSelectionElement();!e.nodeName.match(k)&&e!==r[0];)e=e.parentNode;if(a.shiftKey){
// shift + Enter
var f=e.tagName.toLowerCase();
//console.log('Shift+Enter', selection.tagName, attrs.taDefaultWrap, selection.innerHTML.trim());
// For an LI: We see: LI p ....<br><br>
// For a P: We see: P p ....<br><br>
// on Safari, the browser ignores the Shift+Enter and acts just as an Enter Key
// For an LI: We see: LI p <br>
// For a P: We see: P p <br>
if((f===u.taDefaultWrap||"li"===f||"pre"===f||"div"===f)&&!/.+<br><br>/.test(e.innerHTML.trim())){var g=e.previousSibling;
//console.log('wrong....', ps);
// we need to remove this selection and fix the previousSibling up...
g&&(g.innerHTML=g.innerHTML+"<br><br>",angular.element(e).remove(),h.setSelectionToElementEnd(g))}}else
// new paragraph, br should be caught correctly
// shifted to nodeName here from tagName since it is more widely supported see: http://stackoverflow.com/questions/4878484/difference-between-tagname-and-nodename
//console.log('Enter', selection.nodeName, attrs.taDefaultWrap, selection.innerHTML.trim());
if(e.tagName.toLowerCase()!==u.taDefaultWrap&&"li"!==e.nodeName.toLowerCase()&&(""===e.innerHTML.trim()||"<br>"===e.innerHTML.trim())){
// Chrome starts with a <div><br></div> after an EnterKey
// so we replace this with the _defaultVal
var i=angular.element(z);angular.element(e).replaceWith(i),h.setSelectionToElementStart(i[0])}}var j=Z();""===z||""!==j.trim()&&"<br>"!==j.trim()?"<"!==j.substring(0,1)&&""!==u.taDefaultWrap:(ba(z),h.setSelectionToElementStart(r.children()[0]));var l=x!==a.keyCode&&L.test(a.keyCode);ha&&c.cancel(ha),ha=c(function(){aa(j,l,!0)},C.$options.debounce||400),l||(X=c(function(){B.$undoManager.push(j)},250)),x=a.keyCode}});
// when there is a change from a spelling correction in the browser, the only
// change that is seen is a 'input' and the $watch('html') sees nothing... So
// we added this element.on('input') to catch this change and call the _setViewValue()
// so the ngModel is updated and all works as it should.
var ia;
// Placeholders not supported on ie 8 and below
if(r.on("input",function(){Z()!==B.$viewValue&&(
// we wait a time now to allow the natural $watch('html') to handle this change
// and then after a 1 second delay, if there is still a difference we will do the
// _setViewValue() call.
/* istanbul ignore if: can't test */
ia&&c.cancel(ia),/* istanbul ignore next: cant' test? */
ia=c(function(){var b=a.saveSelection(),c=Z();c!==B.$viewValue&&
//console.log('_setViewValue');
//console.log('old:', ngModel.$viewValue);
//console.log('new:', _val);
aa(c,!0),
// if the savedSelection marker is gone at this point, we cannot restore the selection!!!
//console.log('rangy.restoreSelection', ngModel.$viewValue.length, _savedSelection);
0!==B.$viewValue.length&&a.restoreSelection(b)},1e3))}),r.on("blur",f.events.blur=function(){G=!1,/* istanbul ignore else: if readonly don't update model */
F?(H=!0,// don't redo the whole thing, just check the placeholder logic
B.$render()):aa(void 0,void 0,!0)}),u.placeholder&&(g.ie>8||void 0===g.ie)){var ja;if(!u.id)throw"textAngular Error: An unique ID is required for placeholders to work";ja=m("#"+u.id+".placeholder-text:before",'content: "'+u.placeholder+'"'),f.$on("$destroy",function(){n(ja)})}r.on("focus",f.events.focus=function(){G=!0,r.removeClass("placeholder-text"),_()}),r.on("mouseup",f.events.mouseup=function(){var a=h.getSelection();a&&a.start.element===r[0]&&r.children().length&&h.setSelectionToElementStart(r.children()[0])}),
// prevent propagation on mousedown in editor, see #206
r.on("mousedown",f.events.mousedown=function(a,b){/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),a.stopPropagation()})}else{
// if a textarea or input just add in change and blur handlers, everything else is done by angulars input directive
r.on("change blur",f.events.change=f.events.blur=function(){F||B.$setViewValue(Z())}),r.on("keydown",f.events.keydown=function(a,b){
// Reference to http://stackoverflow.com/questions/6140632/how-to-handle-tab-in-textarea
/* istanbul ignore else: otherwise normal functionality */
if(/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),a.keyCode===S){// tab was pressed
// get caret position/selection
var c=this.selectionStart,d=this.selectionEnd,e=r.val();if(a.shiftKey){
// find \t
var f=e.lastIndexOf("\n",c),g=e.lastIndexOf("\t",c);g!==-1&&g>=f&&(
// set textarea value to: text before caret + tab + text after caret
r.val(e.substring(0,g)+e.substring(g+1)),
// put caret at right position again (add one for the tab)
this.selectionStart=this.selectionEnd=c-1)}else
// set textarea value to: text before caret + tab + text after caret
r.val(e.substring(0,c)+"\t"+e.substring(d)),
// put caret at right position again (add one for the tab)
this.selectionStart=this.selectionEnd=c+1;
// prevent the focus lose
a.preventDefault()}});var ka=function(a,b){for(var c="",d=0;d<b;d++)c+=a;return c},la=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},ma=function(a,b){var c="",d=a.childNodes;
// tab out and add the <ul> or <ol> html piece
// now add on the </ol> or </ul> piece
return b++,c+=ka("\t",b-1)+a.outerHTML.substring(0,4),la(d,function(a,d){/* istanbul ignore next: browser catch */
var e=d.nodeName.toLowerCase();/* istanbul ignore next: not tested, and this was original code -- so not wanting to possibly cause an issue, leaving it... */
return"#comment"===e?void(c+="<!--"+d.nodeValue+"-->"):"#text"===e?void(c+=d.textContent):void(d.outerHTML&&(c+="ul"===e||"ol"===e?"\n"+ma(d,b):"\n"+ka("\t",b)+d.outerHTML))}),c+="\n"+ka("\t",b-1)+a.outerHTML.substring(a.outerHTML.lastIndexOf("<"))};
// handle formating of something like:
// <ol><!--First comment-->
//  <li>Test Line 1<!--comment test list 1--></li>
//    <ul><!--comment ul-->
//      <li>Nested Line 1</li>
//        <!--comment between nested lines--><li>Nested Line 2</li>
//    </ul>
//  <li>Test Line 3</li>
// </ol>
B.$formatters.unshift(function(a){
// tabulate the HTML so it looks nicer
//
// first get a list of the nodes...
// we do this by using the element parser...
//
// doing this -- which is simpiler -- breaks our tests...
//var _nodes=angular.element(htmlValue);
var b=angular.element("<div>"+a+"</div>")[0].childNodes;
// do the reformatting of the layout...
return b.length>0&&(a="",la(b,function(b,c){var d=c.nodeName.toLowerCase();/* istanbul ignore next: not tested, and this was original code -- so not wanting to possibly cause an issue, leaving it... */
// we aready have some content, so drop to a new line
// okay a set of list stuff we want to reformat in a nested way
return"#comment"===d?void(a+="<!--"+c.nodeValue+"-->"):"#text"===d?void(a+=c.textContent):void(c.outerHTML&&(a.length>0&&(a+="\n"),a+="ul"===d||"ol"===d?""+ma(c,0):""+c.outerHTML))})),a})}var na,oa=function(a,b){
// emit the drop event, pass the element, preventing should be done elsewhere
if(/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),!t&&!F){t=!0;var d;d=a.originalEvent?a.originalEvent.dataTransfer:a.dataTransfer,f.$emit("ta-drop-event",this,a,d),c(function(){t=!1,aa(void 0,void 0,!0)},100)}},pa=!1;
// changes to the model variable from outside the html/text inputs
B.$render=function(){/* istanbul ignore if: Catches rogue renders, hard to replicate in tests */
if(!pa){pa=!0;
// catch model being null or undefined
var a=B.$viewValue||"";
// if the editor isn't focused it needs to be updated, otherwise it's receiving user input
H||(/* istanbul ignore else: in other cases we don't care */
D&&G&&(
// update while focussed
r.removeClass("placeholder-text"),/* istanbul ignore next: don't know how to test this */
na&&c.cancel(na),na=c(function(){/* istanbul ignore if: Can't be bothered testing this... */
G||(r[0].focus(),h.setSelectionToElementEnd(r.children()[r.children().length-1])),na=void 0},1)),D?(
// blank
ba(
// WYSIWYG Mode
u.placeholder?""===a?z:a:""===a?z:a),
// if in WYSIWYG and readOnly we kill the use of links by clicking
F?r.off("drop",oa):(_(),r.on("drop",oa))):"textarea"!==r[0].tagName.toLowerCase()&&"input"!==r[0].tagName.toLowerCase()?
// make sure the end user can SEE the html code as a display. This is a read-only display element
ba(l(a)):
// only for input and textarea inputs
r.val(a)),D&&u.placeholder&&(""===a?G?r.removeClass("placeholder-text"):r.addClass("placeholder-text"):r.removeClass("placeholder-text")),pa=H=!1}},u.taReadonly&&(
//set initial value
F=f.$eval(u.taReadonly),F?(r.addClass("ta-readonly"),
// we changed to readOnly mode (taReadonly='true')
"textarea"!==r[0].tagName.toLowerCase()&&"input"!==r[0].tagName.toLowerCase()||r.attr("disabled","disabled"),void 0!==r.attr("contenteditable")&&r.attr("contenteditable")&&r.removeAttr("contenteditable")):(r.removeClass("ta-readonly"),
// we changed to NOT readOnly mode (taReadonly='false')
"textarea"===r[0].tagName.toLowerCase()||"input"===r[0].tagName.toLowerCase()?r.removeAttr("disabled"):D&&r.attr("contenteditable","true")),
// taReadonly only has an effect if the taBind element is an input or textarea or has contenteditable='true' on it.
// Otherwise it is readonly by default
f.$watch(u.taReadonly,function(a,b){b!==a&&(a?(r.addClass("ta-readonly"),
// we changed to readOnly mode (taReadonly='true')
"textarea"!==r[0].tagName.toLowerCase()&&"input"!==r[0].tagName.toLowerCase()||r.attr("disabled","disabled"),void 0!==r.attr("contenteditable")&&r.attr("contenteditable")&&r.removeAttr("contenteditable"),
// turn ON selector click handlers
angular.forEach(j,function(a){r.find(a).on("click",$)}),r.off("drop",oa)):(r.removeClass("ta-readonly"),
// we changed to NOT readOnly mode (taReadonly='false')
"textarea"===r[0].tagName.toLowerCase()||"input"===r[0].tagName.toLowerCase()?r.removeAttr("disabled"):D&&r.attr("contenteditable","true"),
// remove the selector click handlers
angular.forEach(j,function(a){r.find(a).off("click",$)}),r.on("drop",oa)),F=a)})),
// Initialise the selectableElements
// if in WYSIWYG and readOnly we kill the use of links by clicking
D&&!F&&(angular.forEach(j,function(a){r.find(a).on("click",$)}),r.on("drop",oa))}}}]);
// this global var is used to prevent multiple fires of the drop event. Needs to be global to the textAngular file.
var t=!1,u=angular.module("textAngular",["ngSanitize","textAngularSetup","textAngular.factories","textAngular.DOM","textAngular.validators","textAngular.taBind"]);//This makes ngSanitize required
return u.config([function(){
// clear taTools variable. Just catches testing and any other time that this config may run multiple times...
angular.forEach(e,function(a,b){delete e[b]})}]),u.directive("textAngular",["$compile","$timeout","taOptions","taSelection","taExecCommand","textAngularManager","$document","$animate","$log","$q","$parse",function(b,c,d,e,f,g,h,i,j,k,l){return{require:"?ngModel",scope:{},restrict:"EA",priority:2,// So we override validators correctly
link:function(m,n,o,p){
// all these vars should not be accessable outside this directive
var q,r,s,t,u,v,w,x,y,z,A,B,C=o.serial?o.serial:Math.floor(1e16*Math.random());m._name=o.name?o.name:"textAngularEditor"+C;var D=function(a,b,d){c(function(){a.one(b,d)},100)};if(y=f(o.taDefaultWrap),
// get the settings from the defaults and add our specific functions that need to be on the scope
angular.extend(m,angular.copy(d),{
// wraps the selection in the provided tag / execCommand function. Should only be called in WYSIWYG mode.
wrapSelection:function(a,b,c){
// we restore the saved selection that was saved when focus was lost
/* NOT FUNCTIONAL YET */
/* textAngularManager.restoreFocusSelection(scope._name, scope); */
"undo"===a.toLowerCase()?m["$undoTaBindtaTextElement"+C]():"redo"===a.toLowerCase()?m["$redoTaBindtaTextElement"+C]():(
// catch errors like FF erroring when you try to force an undo with nothing done
y(a,!1,b,m.defaultTagAttributes),c&&
// re-apply the selectable tool events
m["reApplyOnSelectorHandlerstaTextElement"+C](),
// refocus on the shown display element, this fixes a display bug when using :focus styles to outline the box.
// You still have focus on the text/html input it just doesn't show up
m.displayElements.text[0].focus())},showHtml:m.$eval(o.taShowHtml)||!1}),
// setup the options from the optional attributes
o.taFocussedClass&&(m.classes.focussed=o.taFocussedClass),o.taTextEditorClass&&(m.classes.textEditor=o.taTextEditorClass),o.taHtmlEditorClass&&(m.classes.htmlEditor=o.taHtmlEditorClass),o.taDefaultTagAttributes)try{
//	TODO: This should use angular.merge to enhance functionality once angular 1.4 is required
angular.extend(m.defaultTagAttributes,angular.fromJson(o.taDefaultTagAttributes))}catch(a){j.error(a)}
// optional setup functions
o.taTextEditorSetup&&(m.setup.textEditorSetup=m.$parent.$eval(o.taTextEditorSetup)),o.taHtmlEditorSetup&&(m.setup.htmlEditorSetup=m.$parent.$eval(o.taHtmlEditorSetup)),
// optional fileDropHandler function
o.taFileDrop?m.fileDropHandler=m.$parent.$eval(o.taFileDrop):m.fileDropHandler=m.defaultFileDropHandler,w=n[0].innerHTML,
// clear the original content
n[0].innerHTML="",
// Setup the HTML elements as variable references for use later
m.displayElements={
// we still need the hidden input even with a textarea as the textarea may have invalid/old input in it,
// wheras the input will ALLWAYS have the correct value.
forminput:angular.element("<input type='hidden' tabindex='-1' style='display: none;'>"),html:angular.element("<textarea></textarea>"),text:angular.element("<div></div>"),
// other toolbased elements
scrollWindow:angular.element("<div class='ta-scroll-window'></div>"),popover:angular.element('<div class="popover fade bottom" style="max-width: none; width: 305px;"></div>'),popoverArrow:angular.element('<div class="arrow"></div>'),popoverContainer:angular.element('<div class="popover-content"></div>'),resize:{overlay:angular.element('<div class="ta-resizer-handle-overlay"></div>'),background:angular.element('<div class="ta-resizer-handle-background"></div>'),anchors:[angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tr"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-bl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-br"></div>')],info:angular.element('<div class="ta-resizer-handle-info"></div>')}},
// Setup the popover
m.displayElements.popover.append(m.displayElements.popoverArrow),m.displayElements.popover.append(m.displayElements.popoverContainer),m.displayElements.scrollWindow.append(m.displayElements.popover),m.displayElements.popover.on("mousedown",function(a,b){/* istanbul ignore else: this is for catching the jqLite testing*/
// this prevents focusout from firing on the editor when clicking anything in the popover
return b&&angular.extend(a,b),a.preventDefault(),!1}),/* istanbul ignore next: popover resize and scroll events handled */
m.handlePopoverEvents=function(){"block"===m.displayElements.popover.css("display")&&(B&&c.cancel(B),B=c(function(){
//console.log('resize', scope.displayElements.popover.css('display'));
m.reflowPopover(m.resizeElement),m.reflowResizeOverlay(m.resizeElement)},100))},/* istanbul ignore next: browser resize check */
angular.element(window).on("resize",m.handlePopoverEvents),/* istanbul ignore next: browser scroll check */
angular.element(window).on("scroll",m.handlePopoverEvents);
// we want to know if a given node has a scrollbar!
// credit to lotif on http://stackoverflow.com/questions/4880381/check-whether-html-element-has-scrollbars
var E=function(a){var b,c={vertical:!1,horizontal:!1};try{if(b=window.getComputedStyle(a),null===b)return c}catch(a){/* istanbul ignore next: error handler */
return c}var d=b["overflow-y"],e=b["overflow-x"];return{vertical:("scroll"===d||"auto"===d)&&/* istanbul ignore next: not tested */
a.scrollHeight>a.clientHeight,horizontal:("scroll"===e||"auto"===e)&&/* istanbul ignore next: not tested */
a.scrollWidth>a.clientWidth}};
// getScrollTop
//
// we structure this so that it can climb the parents of the _el and when it finds
// one with scrollbars, it adds an EventListener, so that no matter how the
// DOM is structured in the user APP, if there is a scrollbar not as part of the
// ta-scroll-window, we will still capture the 'scroll' events...
// and handle the scroll event properly and do the resize, etc.
//
m.getScrollTop=function(a,b){var c=a.scrollTop;/* istanbul ignore next: triggered only if has scrollbar and scrolled */
/* istanbul ignore next: triggered only if has scrollbar */
// remove element eventListener
/* istanbul ignore next: triggered only if has scrollbar and scrolled */
/* istanbul ignore else: catches only if no scroll */
return"undefined"==typeof c&&(c=0),b&&E(a).vertical&&(a.removeEventListener("scroll",m._scrollListener,!1),a.addEventListener("scroll",m._scrollListener,!1)),0!==c?{node:a.nodeName,top:c}:a.parentNode?m.getScrollTop(a.parentNode,b):{node:"<none>",top:0}},
// define the popover show and hide functions
m.showPopover=function(a){m.getScrollTop(m.displayElements.scrollWindow[0],!0),m.displayElements.popover.css("display","block"),
// we must use a $timeout here, or the css change to the
// displayElements.resize.overlay will not take!!!
// WHY???
c(function(){m.displayElements.resize.overlay.css("display","block")}),m.resizeElement=a,m.reflowPopover(a),i.addClass(m.displayElements.popover,"in"),D(h.find("body"),"click keyup",function(){m.hidePopover()})},/* istanbul ignore next: browser scroll event handler */
m._scrollListener=function(a,b){m.handlePopoverEvents()},m.reflowPopover=function(a){var b=m.getScrollTop(m.displayElements.scrollWindow[0],!1),c=a[0].offsetTop-b.top;
//var spaceBelowImage = scope.displayElements.text[0].offsetHeight - _el[0].offsetHeight - spaceAboveImage;
//console.log(spaceAboveImage, spaceBelowImage);
/* istanbul ignore if: catches only if near bottom of editor */
c<51?(m.displayElements.popover.css("top",a[0].offsetTop+a[0].offsetHeight+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("top").addClass("bottom")):(m.displayElements.popover.css("top",a[0].offsetTop-54+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("bottom").addClass("top"));var d=m.displayElements.text[0].offsetWidth-m.displayElements.popover[0].offsetWidth,e=a[0].offsetLeft+a[0].offsetWidth/2-m.displayElements.popover[0].offsetWidth/2,f=Math.max(0,Math.min(d,e)),g=Math.min(e,Math.max(0,e-d))-11;f+=window.scrollX,g-=window.scrollX,m.displayElements.popover.css("left",f+"px"),m.displayElements.popoverArrow.css("margin-left",g+"px")},m.hidePopover=function(){m.displayElements.popover.css("display","none"),m.displayElements.popoverContainer.attr("style",""),m.displayElements.popoverContainer.attr("class","popover-content"),m.displayElements.popover.removeClass("in"),m.displayElements.resize.overlay.css("display","none")},
// setup the resize overlay
m.displayElements.resize.overlay.append(m.displayElements.resize.background),angular.forEach(m.displayElements.resize.anchors,function(a){m.displayElements.resize.overlay.append(a)}),m.displayElements.resize.overlay.append(m.displayElements.resize.info),m.displayElements.scrollWindow.append(m.displayElements.resize.overlay),
// A click event on the resize.background will now shift the focus to the editor
/* istanbul ignore next: click on the resize.background to focus back to editor */
m.displayElements.resize.background.on("click",function(a){m.displayElements.text[0].focus()}),
// define the show and hide events
m.reflowResizeOverlay=function(a){a=angular.element(a)[0],m.displayElements.resize.overlay.css({display:"block",left:a.offsetLeft-5+"px",top:a.offsetTop-5+"px",width:a.offsetWidth+10+"px",height:a.offsetHeight+10+"px"}),m.displayElements.resize.info.text(a.offsetWidth+" x "+a.offsetHeight)},/* istanbul ignore next: pretty sure phantomjs won't test this */
m.showResizeOverlay=function(a){var b=h.find("body");z=function(c){var d={width:parseInt(a.attr("width")),height:parseInt(a.attr("height")),x:c.clientX,y:c.clientY};(void 0===d.width||isNaN(d.width))&&(d.width=a[0].offsetWidth),(void 0===d.height||isNaN(d.height))&&(d.height=a[0].offsetHeight),m.hidePopover();var e=d.height/d.width,f=function(b){function c(a){return Math.round(Math.max(0,a))}
// calculate new size
var f={x:Math.max(0,d.width+(b.clientX-d.x)),y:Math.max(0,d.height+(b.clientY-d.y))},g=void 0!==o.taResizeForceAspectRatio,h=o.taResizeMaintainAspectRatio,i=g||h&&!b.shiftKey;if(i){var j=f.y/f.x;f.x=e>j?f.x:f.y/e,f.y=e>j?f.x*e:f.y}var k=angular.element(a);k.css("height",c(f.y)+"px"),k.css("width",c(f.x)+"px"),
// reflow the popover tooltip
m.reflowResizeOverlay(a)};b.on("mousemove",f),D(b,"mouseup",function(a){a.preventDefault(),a.stopPropagation(),b.off("mousemove",f),
// at this point, we need to force the model to update! since the css has changed!
// this fixes bug: #862 - we now hide the popover -- as this seems more consitent.
// there are still issues under firefox, the window does not repaint. -- not sure
// how best to resolve this, but clicking anywhere works.
m.$apply(function(){m.hidePopover(),m.updateTaBindtaTextElement()},100)}),c.stopPropagation(),c.preventDefault()},m.displayElements.resize.anchors[3].off("mousedown"),m.displayElements.resize.anchors[3].on("mousedown",z),m.reflowResizeOverlay(a),D(b,"click",function(){m.hideResizeOverlay()})},/* istanbul ignore next: pretty sure phantomjs won't test this */
m.hideResizeOverlay=function(){m.displayElements.resize.anchors[3].off("mousedown",z),m.displayElements.resize.overlay.css("display","none")},
// allow for insertion of custom directives on the textarea and div
m.setup.htmlEditorSetup(m.displayElements.html),m.setup.textEditorSetup(m.displayElements.text),m.displayElements.html.attr({id:"taHtmlElement"+C,"ng-show":"showHtml","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.text.attr({id:"taTextElement"+C,contentEditable:"true","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.scrollWindow.attr({"ng-hide":"showHtml"}),o.taDefaultWrap&&
// taDefaultWrap is only applied to the text and not the html view
m.displayElements.text.attr("ta-default-wrap",o.taDefaultWrap),o.taUnsafeSanitizer&&(m.displayElements.text.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer),m.displayElements.html.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer)),o.taKeepStyles&&(m.displayElements.text.attr("ta-keep-styles",o.taKeepStyles),m.displayElements.html.attr("ta-keep-styles",o.taKeepStyles)),
// add the main elements to the origional element
m.displayElements.scrollWindow.append(m.displayElements.text),n.append(m.displayElements.scrollWindow),n.append(m.displayElements.html),m.displayElements.forminput.attr("name",m._name),n.append(m.displayElements.forminput),o.tabindex&&(n.removeAttr("tabindex"),m.displayElements.text.attr("tabindex",o.tabindex),m.displayElements.html.attr("tabindex",o.tabindex)),o.placeholder&&(m.displayElements.text.attr("placeholder",o.placeholder),m.displayElements.html.attr("placeholder",o.placeholder)),o.taDisabled&&(m.displayElements.text.attr("ta-readonly","disabled"),m.displayElements.html.attr("ta-readonly","disabled"),m.disabled=m.$parent.$eval(o.taDisabled),m.$parent.$watch(o.taDisabled,function(a){m.disabled=a,m.disabled?n.addClass(m.classes.disabled):n.removeClass(m.classes.disabled)})),o.taPaste&&(m._pasteHandler=function(a){return l(o.taPaste)(m.$parent,{$html:a})},m.displayElements.text.attr("ta-paste","_pasteHandler($html)")),
// compile the scope with the text and html elements only - if we do this with the main element it causes a compile loop
b(m.displayElements.scrollWindow)(m),b(m.displayElements.html)(m),m.updateTaBindtaTextElement=m["updateTaBindtaTextElement"+C],m.updateTaBindtaHtmlElement=m["updateTaBindtaHtmlElement"+C],
// add the classes manually last
n.addClass("ta-root"),m.displayElements.scrollWindow.addClass("ta-text ta-editor "+m.classes.textEditor),m.displayElements.html.addClass("ta-html ta-editor "+m.classes.htmlEditor);var F=function(a,b){/* istanbul ignore next: this is only here because of a bug in rangy where rangy.saveSelection() has cleared the state */
b!==h[0].queryCommandState(a)&&h[0].execCommand(a,!1,null)};
// used in the toolbar actions
m._actionRunning=!1;var G=!1;
// changes to the model variable from outside the html/text inputs
// if no ngModel, then the only input is from inside text-angular
if(m.startAction=function(){var b=!1,c=!1,d=!1,e=!1;
//console.log('B', $document[0].queryCommandState('bold'), 'I', $document[0].queryCommandState('italic'), '_', $document[0].queryCommandState('underline'), 'S', $document[0].queryCommandState('strikeThrough') );
//console.log('B', _beforeStateBold, 'I', _beforeStateItalic, '_', _beforeStateUnderline, 'S', _beforeStateStrikethough);
// if rangy library is loaded return a function to reload the current selection
// rangy.saveSelection() clear the state of bold, italic, underline, strikethrough
// so we reset them here....!!!
// this fixes bugs #423, #1129, #1105, #693 which are actually rangy bugs!
return m._actionRunning=!0,b=h[0].queryCommandState("bold"),c=h[0].queryCommandState("italic"),d=h[0].queryCommandState("underline"),e=h[0].queryCommandState("strikeThrough"),G=a.saveSelection(),F("bold",b),F("italic",c),F("underline",d),F("strikeThrough",e),function(){G&&a.restoreSelection(G)}},m.endAction=function(){m._actionRunning=!1,G&&(m.showHtml?m.displayElements.html[0].focus():m.displayElements.text[0].focus(),
// rangy.restoreSelection(_savedSelection);
a.removeMarkers(G)),G=!1,m.updateSelectedStyles(),
// only update if in text or WYSIWYG mode
m.showHtml||m["updateTaBindtaTextElement"+C]()},
// note that focusout > focusin is called everytime we click a button - except bad support: http://www.quirksmode.org/dom/events/blurfocus.html
// cascades to displayElements.text and displayElements.html automatically.
u=function(a){m.focussed=!0,n.addClass(m.classes.focussed),/*******  NOT FUNCTIONAL YET
                    if (e.target.id === 'taTextElement' + _serial) {
                        console.log('_focusin taTextElement');
                        // we only do this if NOT focussed
                        textAngularManager.restoreFocusSelection(scope._name);
                    }
*******/
x.focus(),n.triggerHandler("focus"),
// we call editorScope.updateSelectedStyles() here because we want the toolbar to be focussed
// as soon as we have focus.  Otherwise this only happens on mousedown or keydown etc...
/* istanbul ignore else: don't run if already running */
m.updateSelectedStyles&&!m._bUpdateSelectedStyles&&
// we don't set editorScope._bUpdateSelectedStyles here, because we do not want the
// updateSelectedStyles() to run twice which it will do after 200 msec if we have
// set editorScope._bUpdateSelectedStyles
//
// WOW, normally I would do a scope.$apply here, but this causes ERRORs when doing tests!
c(function(){m.updateSelectedStyles()},0)},m.displayElements.html.on("focus",u),m.displayElements.text.on("focus",u),v=function(a){/****************** NOT FUNCTIONAL YET
                    try {
                        var _s = rangy.getSelection();
                        if (_s) {
                            // we save the selection when we loose focus so that if do a wrapSelection, the
                            // apropriate selection in the editor is restored before action.
                            var _savedFocusRange = rangy.saveRange(_s.getRangeAt(0));
                            textAngularManager.saveFocusSelection(scope._name, _savedFocusRange);
                        }
                    } catch(error) { }
                    *****************/
// if we are NOT runnig an action and have NOT focussed again on the text etc then fire the blur events
// to prevent multiple apply error defer to next seems to work.
return m._actionRunning||h[0].activeElement===m.displayElements.html[0]||h[0].activeElement===m.displayElements.text[0]||(n.removeClass(m.classes.focussed),x.unfocus(),c(function(){m._bUpdateSelectedStyles=!1,n.triggerHandler("blur"),m.focussed=!1},0)),a.preventDefault(),!1},m.displayElements.html.on("blur",v),m.displayElements.text.on("blur",v),m.displayElements.text.on("paste",function(a){n.triggerHandler("paste",a)}),
// Setup the default toolbar tools, this way allows the user to add new tools like plugins.
// This is on the editor for future proofing if we find a better way to do this.
m.queryFormatBlockState=function(a){
// $document[0].queryCommandValue('formatBlock') errors in Firefox if we call this when focussed on the textarea
return!m.showHtml&&a.toLowerCase()===h[0].queryCommandValue("formatBlock").toLowerCase()},m.queryCommandState=function(a){
// $document[0].queryCommandValue('formatBlock') errors in Firefox if we call this when focussed on the textarea
return m.showHtml?"":h[0].queryCommandState(a)},m.switchView=function(){m.showHtml=!m.showHtml,i.enabled(!1,m.displayElements.html),i.enabled(!1,m.displayElements.text),
//Show the HTML view
/* istanbul ignore next: ngModel exists check */
/* THIS is not the correct thing to do, here....
   The ngModel is correct, but it is not formatted as the user as done it...
                    var _model;
                    if (ngModel) {
                        _model = ngModel.$viewValue;
                    } else {
                        _model = scope.html;
                    }
                    var _html = scope.displayElements.html[0].value;
                    if (getDomFromHtml(_html).childElementCount !== getDomFromHtml(_model).childElementCount) {
                        // the model and the html do not agree
                        // they can get out of sync and when they do, we correct that here...
                        scope.displayElements.html.val(_model);
                    }
*/
m.showHtml?
//defer until the element is visible
c(function(){
// [0] dereferences the DOM object from the angular.element
return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.html[0].focus()},100):
//Show the WYSIWYG view
//defer until the element is visible
c(function(){
// [0] dereferences the DOM object from the angular.element
return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.text[0].focus()},100)},o.ngModel){var H=!0;p.$render=function(){if(H){
// we need this firstRun to set the originalContents otherwise it gets overrided by the setting of ngModel to undefined from NaN
H=!1;
// if view value is null or undefined initially and there was original content, set to the original content
var a=m.$parent.$eval(o.ngModel);void 0!==a&&null!==a||!w||""===w||
// on passing through to taBind it will be sanitised
p.$setViewValue(w)}m.displayElements.forminput.val(p.$viewValue),
// if the editors aren't focused they need to be updated, otherwise they are doing the updating
m.html=p.$viewValue||""},
// trigger the validation calls
n.attr("required")&&(p.$validators.required=function(a,b){var c=a||b;return!(!c||""===c.trim())})}else
// if no ngModel then update from the contents of the origional html.
m.displayElements.forminput.val(w),m.html=w;if(
// changes from taBind back up to here
m.$watch("html",function(a,b){a!==b&&(o.ngModel&&p.$viewValue!==a&&p.$setViewValue(a),m.displayElements.forminput.val(a))}),o.taTargetToolbars)x=g.registerEditor(m._name,m,o.taTargetToolbars.split(","));else{var I=angular.element('<div text-angular-toolbar name="textAngularToolbar'+C+'">');
// passthrough init of toolbar options
o.taToolbar&&I.attr("ta-toolbar",o.taToolbar),o.taToolbarClass&&I.attr("ta-toolbar-class",o.taToolbarClass),o.taToolbarGroupClass&&I.attr("ta-toolbar-group-class",o.taToolbarGroupClass),o.taToolbarButtonClass&&I.attr("ta-toolbar-button-class",o.taToolbarButtonClass),o.taToolbarActiveButtonClass&&I.attr("ta-toolbar-active-button-class",o.taToolbarActiveButtonClass),o.taFocussedClass&&I.attr("ta-focussed-class",o.taFocussedClass),n.prepend(I),b(I)(m.$parent),x=g.registerEditor(m._name,m,["textAngularToolbar"+C])}m.$on("$destroy",function(){g.unregisterEditor(m._name),angular.element(window).off("blur"),angular.element(window).off("resize",m.handlePopoverEvents),angular.element(window).off("scroll",m.handlePopoverEvents)}),
// catch element select event and pass to toolbar tools
m.$on("ta-element-select",function(a,b){x.triggerElementSelect(a,b)&&m["reApplyOnSelectorHandlerstaTextElement"+C]()}),/******************* no working fully
                var distanceFromPoint = function (px, py, x, y) {
                    return Math.sqrt((px-x)*(px-x)+(py-y)*(py-y));
                };
                // because each object is a rectangle and we have a single point,
                // we need to give priority if the point is inside the rectangle
                var getPositionDistance = function(el, x, y) {
                    var range = document.createRange();
                    range.selectNode(el);
                    var rect = range.getBoundingClientRect();
                    console.log(el, rect);
                    range.detach();
                    var bcr = rect;
                    // top left
                    var d1 = distanceFromPoint(bcr.left, bcr.top, x, y);
                    // bottom left
                    var d2 = distanceFromPoint(bcr.left, bcr.bottom, x, y);
                    // top right
                    var d3 = distanceFromPoint(bcr.right, bcr.top, x, y);
                    // bottom right
                    var d4 = distanceFromPoint(bcr.right, bcr.bottom, x, y);
                    return Math.min(d1, d2, d3, d4);
                };
                var findClosest = function(el, minElement, maxDistance, x, y) {
                    var _d=0;
                    for (var i = 0; i < el.childNodes.length; i++) {
                        var _n = el.childNodes[i];
                        if (!_n.childNodes.length) {
                            _d = getPositionDistance(_n, x, y);
                            //console.log(_n, _n.childNodes, _d);
                            if (_d < maxDistance) {
                                maxDistance = _d;
                                minElement = _n;
                            }
                        }
                        var res = findClosest(_n, minElement, maxDistance, x, y);
                        if (res.max < maxDistance) {
                            maxDistance = res.max;
                            minElement = res.min;
                        }
                    }
                    return { max: maxDistance, min: minElement };
                };
                var getClosestElement = function (el, x, y) {
                    return findClosest(el, null, 12341234124, x, y);
                };
****************/
m.$on("ta-drop-event",function(a,b,d,f){f&&f.files&&f.files.length>0?(m.displayElements.text[0].focus(),
// we must set the location of the drop!
//console.log(dropEvent.clientX, dropEvent.clientY, dropEvent.target);
e.setSelectionToElementEnd(d.target),angular.forEach(f.files,function(a){
// taking advantage of boolean execution, if the fileDropHandler returns true, nothing else after it is executed
// If it is false then execute the defaultFileDropHandler if the fileDropHandler is NOT the default one
// Once one of these has been executed wrap the result as a promise, if undefined or variable update the taBind, else we should wait for the promise
try{k.when(m.fileDropHandler(a,m.wrapSelection)||m.fileDropHandler!==m.defaultFileDropHandler&&k.when(m.defaultFileDropHandler(a,m.wrapSelection))).then(function(){m["updateTaBindtaTextElement"+C]()})}catch(a){j.error(a)}}),d.preventDefault(),d.stopPropagation()):c(function(){m["updateTaBindtaTextElement"+C]()},0)}),
// the following is for applying the active states to the tools that support it
m._bUpdateSelectedStyles=!1,/* istanbul ignore next: browser window/tab leave check */
angular.element(window).on("blur",function(){m._bUpdateSelectedStyles=!1,m.focussed=!1}),
// loop through all the tools polling their activeState function if it exists
m.updateSelectedStyles=function(){var a;/* istanbul ignore next: This check is to ensure multiple timeouts don't exist */
A&&c.cancel(A),
// test if the common element ISN'T the root ta-text node
void 0!==(a=e.getSelectionElement())&&a.parentNode!==m.displayElements.text[0]?x.updateSelectedStyles(angular.element(a)):x.updateSelectedStyles(),
// used to update the active state when a key is held down, ie the left arrow
/* istanbul ignore else: browser only check */
m._bUpdateSelectedStyles&&(A=c(m.updateSelectedStyles,200))},
// start updating on keydown
q=function(){/* istanbul ignore next: ie catch */
/* istanbul ignore next: ie catch */
/* istanbul ignore else: don't run if already running */
return m.focussed?void(m._bUpdateSelectedStyles||(m._bUpdateSelectedStyles=!0,m.$apply(function(){m.updateSelectedStyles()}))):void(m._bUpdateSelectedStyles=!1)},m.displayElements.html.on("keydown",q),m.displayElements.text.on("keydown",q),
// stop updating on key up and update the display/model
r=function(){m._bUpdateSelectedStyles=!1},m.displayElements.html.on("keyup",r),m.displayElements.text.on("keyup",r),
// stop updating on key up and update the display/model
s=function(a,b){
// bug fix for Firefox.  If we are selecting a <a> already, any characters will
// be added within the <a> which is bad!
/* istanbul ignore next: don't see how to test this... */
if(e.getSelection){var c=e.getSelection();
// in a weird case (can't reproduce) taSelection.getSelectionElement() can be undefined!!
// this comes from range.commonAncestorContainer;
// so I check for this here which fixes the error case
e.getSelectionElement()&&"a"===e.getSelectionElement().nodeName.toLowerCase()&&(
// check and see if we are at the edge of the <a>
3===c.start.element.nodeType&&c.start.element.textContent.length===c.end.offset&&
// we are at the end of the <a>!!!
// so move the selection to after the <a>!!
e.setSelectionAfterElement(e.getSelectionElement()),3===c.start.element.nodeType&&0===c.start.offset&&
// we are at the start of the <a>!!!
// so move the selection before the <a>!!
e.setSelectionBeforeElement(e.getSelectionElement()))}/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),m.$apply(function(){if(x.sendKeyCommand(a))/* istanbul ignore else: don't run if already running */
return m._bUpdateSelectedStyles||m.updateSelectedStyles(),a.preventDefault(),!1})},m.displayElements.html.on("keypress",s),m.displayElements.text.on("keypress",s),
// update the toolbar active states when we click somewhere in the text/html boxed
t=function(){
// ensure only one execution of updateSelectedStyles()
m._bUpdateSelectedStyles=!1,
// for some reason, unless we do a $timeout here, after a _mouseup when the line is
// highlighted, and instead use a scope.$apply(function(){ scope.updateSelectedStyles(); });
// doesn't work properly, so we replaced this with:
/* istanbul ignore next: not tested  */
c(function(){m.updateSelectedStyles()},0)},m.displayElements.html.on("mouseup",t),m.displayElements.text.on("mouseup",t)}}}]),u.service("textAngularManager",["taToolExecuteAction","taTools","taRegisterTool","$interval","$rootScope","$log",function(a,b,c,d,e,g){
// this service is used to manage all textAngular editors and toolbars.
// All publicly published functions that modify/need to access the toolbar or editor scopes should be in here
// these contain references to all the editors and toolbars that have been initialised in this app
var h,i={},j={},k=0,l=function(a){angular.forEach(j,function(b){b.editorFunctions.updateSelectedStyles(a)})},m=50,n=function(){k=Date.now(),/* istanbul ignore next: setup a one time updateStyles() */
h=d(function(){l(),h=void 0},m,1)};/* istanbul ignore next: make sure clean up on destroy */
e.$on("destroy",function(){h&&(d.cancel(h),h=void 0)});var o=function(){Math.abs(Date.now()-k)>m&&
// we have already triggered the updateStyles a long time back... so setup it again...
n()};
// when we focus into a toolbar, we need to set the TOOLBAR's $parent to be the toolbars it's linked to.
// We also need to set the tools to be updated to be the toolbars...
return{
// register an editor and the toolbars that it is affected by
registerEditor:function(c,d,e){
// NOTE: name === editorScope._name
// targetToolbars is an [] of 'toolbar name's
// targetToolbars are optional, we don't require a toolbar to function
if(!c||""===c)throw"textAngular Error: An editor requires a name";if(!d)throw"textAngular Error: An editor requires a scope";if(j[c])throw'textAngular Error: An Editor with name "'+c+'" already exists';return j[c]={scope:d,toolbars:e,
// toolbarScopes used by this editor
toolbarScopes:[],_registerToolbarScope:function(a){
// add to the list late
this.toolbars.indexOf(a.name)>=0&&
// if this toolbarScope is being used by this editor we add it as one of the scopes
this.toolbarScopes.push(a)},
// this is a suite of functions the editor should use to update all it's linked toolbars
editorFunctions:{disable:function(){
// disable all linked toolbars
angular.forEach(j[c].toolbarScopes,function(a){a.disabled=!0})},enable:function(){
// enable all linked toolbars
angular.forEach(j[c].toolbarScopes,function(a){a.disabled=!1})},focus:function(){
// this should be called when the editor is focussed
angular.forEach(j[c].toolbarScopes,function(a){a._parent=d,a.disabled=!1,a.focussed=!0}),d.focussed=!0},unfocus:function(){
// this should be called when the editor becomes unfocussed
angular.forEach(j[c].toolbarScopes,function(a){a.disabled=!0,a.focussed=!1}),d.focussed=!1},updateSelectedStyles:function(a){
// update the active state of all buttons on liked toolbars
angular.forEach(j[c].toolbarScopes,function(b){angular.forEach(b.tools,function(c){c.activeState&&(b._parent=d,
// selectedElement may be undefined if nothing selected
c.active=c.activeState(a))})})},sendKeyCommand:function(e){
// we return true if we applied an action, false otherwise
var f=!1;return(e.ctrlKey||e.metaKey||e.specialKey)&&angular.forEach(b,function(b,g){if(b.commandKeyCode&&(b.commandKeyCode===e.which||b.commandKeyCode===e.specialKey))for(var h=0;h<j[c].toolbarScopes.length;h++)if(void 0!==j[c].toolbarScopes[h].tools[g]){a.call(j[c].toolbarScopes[h].tools[g],d),f=!0;break}}),f},triggerElementSelect:function(a,e){
// search through the taTools to see if a match for the tag is made.
// if there is, see if the tool is on a registered toolbar and not disabled.
// NOTE: This can trigger on MULTIPLE tools simultaneously.
var f=function(a,b){for(var c=!0,d=0;d<b.length;d++)c=c&&a.attr(b[d]);return c},g=[],h={},i=!1;e=angular.element(e);
// get all valid tools by element name, keep track if one matches the
var k=!1;
// Run the actions on the first visible filtered tool only
if(angular.forEach(b,function(a,b){a.onElementSelect&&a.onElementSelect.element&&a.onElementSelect.element.toLowerCase()===e[0].tagName.toLowerCase()&&(!a.onElementSelect.filter||a.onElementSelect.filter(e))&&(
// this should only end up true if the element matches the only attributes
k=k||angular.isArray(a.onElementSelect.onlyWithAttrs)&&f(e,a.onElementSelect.onlyWithAttrs),a.onElementSelect.onlyWithAttrs&&!f(e,a.onElementSelect.onlyWithAttrs)||(h[b]=a))}),
// if we matched attributes to filter on, then filter, else continue
k?(angular.forEach(h,function(a,b){a.onElementSelect.onlyWithAttrs&&f(e,a.onElementSelect.onlyWithAttrs)&&g.push({name:b,tool:a})}),
// sort most specific (most attrs to find) first
g.sort(function(a,b){return b.tool.onElementSelect.onlyWithAttrs.length-a.tool.onElementSelect.onlyWithAttrs.length})):angular.forEach(h,function(a,b){g.push({name:b,tool:a})}),g.length>0)for(var l=0;l<g.length;l++){for(var m=g[l].tool,n=g[l].name,o=0;o<j[c].toolbarScopes.length;o++)if(void 0!==j[c].toolbarScopes[o].tools[n]){m.onElementSelect.action.call(j[c].toolbarScopes[o].tools[n],a,e,d),i=!0;break}if(i)break}return i}}},angular.forEach(e,function(a){i[a]&&j[c].toolbarScopes.push(i[a])}),o(),j[c].editorFunctions},
// retrieve editor by name, largely used by testing suites only
retrieveEditor:function(a){return j[a]},unregisterEditor:function(a){delete j[a],o()},
// registers a toolbar such that it can be linked to editors
registerToolbar:function(a){if(!a)throw"textAngular Error: A toolbar requires a scope";if(!a.name||""===a.name)throw"textAngular Error: A toolbar requires a name";if(i[a.name])throw'textAngular Error: A toolbar with name "'+a.name+'" already exists';i[a.name]=a,
// walk all the editors and connect this toolbarScope to the editors.... if we need to.  This way, it does
// not matter if we register the editors after the toolbars or not
// Note the editor will ignore this toolbarScope if it is not connected to it...
angular.forEach(j,function(b){b._registerToolbarScope(a)}),o()},
// retrieve toolbar by name, largely used by testing suites only
retrieveToolbar:function(a){return i[a]},
// retrieve toolbars by editor name, largely used by testing suites only
retrieveToolbarsViaEditor:function(a){var b=[],c=this;return angular.forEach(this.retrieveEditor(a).toolbars,function(a){b.push(c.retrieveToolbar(a))}),b},unregisterToolbar:function(a){delete i[a],o()},
// functions for updating the toolbar buttons display
updateToolsDisplay:function(a){
// pass a partial struct of the taTools, this allows us to update the tools on the fly, will not change the defaults.
var b=this;angular.forEach(a,function(a,c){b.updateToolDisplay(c,a)})},
// this function resets all toolbars to their default tool definitions
resetToolsDisplay:function(){var a=this;angular.forEach(b,function(b,c){a.resetToolDisplay(c)}),o()},
// update a tool on all toolbars
updateToolDisplay:function(a,b){var c=this;angular.forEach(i,function(d,e){c.updateToolbarToolDisplay(e,a,b)}),o()},
// resets a tool to the default/starting state on all toolbars
resetToolDisplay:function(a){var b=this;angular.forEach(i,function(c,d){b.resetToolbarToolDisplay(d,a)}),o()},
// update a tool on a specific toolbar
updateToolbarToolDisplay:function(a,b,c){if(!i[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';i[a].updateToolDisplay(b,c)},
// reset a tool on a specific toolbar to it's default starting value
resetToolbarToolDisplay:function(a,c){if(!i[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';i[a].updateToolDisplay(c,b[c],!0)},
// removes a tool from all toolbars and it's definition
removeTool:function(a){delete b[a],angular.forEach(i,function(b){delete b.tools[a];for(var c=0;c<b.toolbar.length;c++){for(var d,e=0;e<b.toolbar[c].length;e++){if(b.toolbar[c][e]===a){d={group:c,index:e};break}if(void 0!==d)break}void 0!==d&&(b.toolbar[d.group].slice(d.index,1),b._$element.children().eq(d.group).children().eq(d.index).remove())}}),o()},
// toolkey, toolDefinition are required. If group is not specified will pick the last group, if index isnt defined will append to group
addTool:function(a,b,d,e){c(a,b),angular.forEach(i,function(c){c.addTool(a,b,d,e)}),o()},
// adds a Tool but only to one toolbar not all
addToolToToolbar:function(a,b,d,e,f){c(a,b),i[d].addTool(a,b,e,f),o()},
// this is used when externally the html of an editor has been changed and textAngular needs to be notified to update the model.
// this will call a $digest if not already happening
refreshEditor:function(a){if(!j[a])throw'textAngular Error: No Editor with name "'+a+'" exists';j[a].scope.updateTaBindtaTextElement(),/* istanbul ignore else: phase catch */
j[a].scope.$$phase||j[a].scope.$digest(),o()},
// this is used by taBind to send a key command in response to a special key event
sendKeyCommand:function(a,b){var c=j[a._name];/* istanbul ignore else: if nothing to do, do nothing */
if(c&&c.editorFunctions.sendKeyCommand(b))/* istanbul ignore else: don't run if already running */
return a._bUpdateSelectedStyles||a.updateSelectedStyles(),b.preventDefault(),!1},
//
// When a toolbar and tools are created, it isn't until there is a key event or mouse event
// that the updateSelectedStyles() is called behind the scenes.
// This function forces an update through the existing editors to help the application make sure
// the inital state is correct.
//
updateStyles:l,
// return the current version of textAngular in use to the user
getVersion:function(){return f},
// for testing
getToolbarScopes:function(){var a=[];return angular.forEach(j,function(b){a=a.concat(b.toolbarScopes)}),a}}}]),u.directive("textAngularToolbar",["$compile","textAngularManager","taOptions","taTools","taToolExecuteAction","$window",function(a,b,c,d,e,f){return{scope:{name:"@"},restrict:"EA",link:function(g,h,i){if(!g.name||""===g.name)throw"textAngular Error: A toolbar requires a name";angular.extend(g,angular.copy(c)),i.taToolbar&&(g.toolbar=g.$parent.$eval(i.taToolbar)),i.taToolbarClass&&(g.classes.toolbar=i.taToolbarClass),i.taToolbarGroupClass&&(g.classes.toolbarGroup=i.taToolbarGroupClass),i.taToolbarButtonClass&&(g.classes.toolbarButton=i.taToolbarButtonClass),i.taToolbarActiveButtonClass&&(g.classes.toolbarButtonActive=i.taToolbarActiveButtonClass),i.taFocussedClass&&(g.classes.focussed=i.taFocussedClass),g.disabled=!0,g.focussed=!1,g._$element=h,h[0].innerHTML="",h.addClass("ta-toolbar "+g.classes.toolbar),g.$watch("focussed",function(){g.focussed?h.addClass(g.classes.focussed):h.removeClass(g.classes.focussed)});var j=function(b,c){var d;if(d=b&&b.display?angular.element(b.display):angular.element("<button type='button'>"),b&&b.class?d.addClass(b.class):d.addClass(g.classes.toolbarButton),d.attr("name",c.name),
// important to not take focus from the main text/html entry
d.attr("ta-button","ta-button"),d.attr("ng-disabled","isDisabled()"),d.attr("tabindex","-1"),d.attr("ng-click","executeAction()"),d.attr("ng-class","displayActiveToolClass(active)"),b&&b.tooltiptext&&d.attr("title",b.tooltiptext),b&&!b.display&&!c._display&&(
// first clear out the current contents if any
d[0].innerHTML="",
// add the buttonText
b.buttontext&&(d[0].innerHTML=b.buttontext),b.iconclass)){var e=angular.element("<i>"),f=d[0].innerHTML;e.addClass(b.iconclass),d[0].innerHTML="",d.append(e),f&&""!==f&&d.append("&nbsp;"+f)}return c._lastToolDefinition=angular.copy(b),a(d)(c)};
// Keep a reference for updating the active states later
g.tools={},
// create the tools in the toolbar
// default functions and values to prevent errors in testing and on init
g._parent={disabled:!0,showHtml:!1,queryFormatBlockState:function(){return!1},queryCommandState:function(){return!1}};var k={$window:f,$editor:function(){
// dynamically gets the editor as it is set
return g._parent},isDisabled:function(){
// view selection button is always enabled since it doesn not depend on a selction!
// view selection button is always enabled since it doesn not depend on a selction!
// this bracket is important as without it it just returns the first bracket and ignores the rest
// when the button's disabled function/value evaluates to true
// all buttons except the HTML Switch button should be disabled in the showHtml (RAW html) mode
// if the toolbar is disabled
// if the current editor is disabled
return("html"!==this.name||!g._parent.startAction)&&("function"!=typeof this.$eval("disabled")&&this.$eval("disabled")||this.$eval("disabled()")||"html"!==this.name&&this.$editor().showHtml||this.$parent.disabled||this.$editor().disabled)},displayActiveToolClass:function(a){return a?g.classes.toolbarButtonActive:""},executeAction:e};angular.forEach(g.toolbar,function(a){
// setup the toolbar group
var b=angular.element("<div>");b.addClass(g.classes.toolbarGroup),angular.forEach(a,function(a){
// init and add the tools to the group
// a tool name (key name from taTools struct)
//creates a child scope of the main angularText scope and then extends the childScope with the functions of this particular tool
// reference to the scope and element kept
g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]),
// append the tool compiled with the childScope to the group element
b.append(g.tools[a].$element)}),
// append the group to the toolbar
h.append(b)}),
// update a tool
// if a value is set to null, remove from the display
// when forceNew is set to true it will ignore all previous settings, used to reset to taTools definition
// to reset to defaults pass in taTools[key] as _newTool and forceNew as true, ie `updateToolDisplay(key, taTools[key], true);`
g.updateToolDisplay=function(a,b,c){var d=g.tools[a];if(d){if(
// get the last toolDefinition, then override with the new definition
d._lastToolDefinition&&!c&&(b=angular.extend({},d._lastToolDefinition,b)),null===b.buttontext&&null===b.iconclass&&null===b.display)throw'textAngular Error: Tool Definition for updating "'+a+'" does not have a valid display/iconclass/buttontext value';
// if tool is defined on this toolbar, update/redo the tool
null===b.buttontext&&delete b.buttontext,null===b.iconclass&&delete b.iconclass,null===b.display&&delete b.display;var e=j(b,d);d.$element.replaceWith(e),d.$element=e}},
// we assume here that all values passed are valid and correct
g.addTool=function(a,b,c,e){g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]);var f;void 0===c&&(c=g.toolbar.length-1),f=angular.element(h.children()[c]),void 0===e?(f.append(g.tools[a].$element),g.toolbar[c][g.toolbar[c].length-1]=a):(f.children().eq(e).after(g.tools[a].$element),g.toolbar[c][e]=a)},b.registerToolbar(g),g.$on("$destroy",function(){b.unregisterToolbar(g.name)})}}}]),u.directive("textAngularVersion",["textAngularManager",function(a){var b=a.getVersion();return{restrict:"EA",link:function(a,c,d){c.html(b)}}}]),u.name});
/*!
 * angular-datatables - v0.6.2
 * https://github.com/l-lin/angular-datatables
 * License: MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="datatables.colvis"),function(a,b,c,d){"use strict";function e(a){function b(a){function b(a,b){function e(){console.warn("The colvis extension has been retired. Please use the button extension instead: https://datatables.net/extensions/buttons/");var a="C";return h.dom=h.dom?h.dom:c.fn.dataTable.defaults.sDom,h.dom.indexOf(a)===-1&&(h.dom=a+h.dom),h.hasColVis=!0,h}function f(a,b){return d.isString(a)&&(h.oColVis=h.oColVis&&null!==h.oColVis?h.oColVis:{},h.oColVis[a]=b),h}function g(a){if(!d.isFunction(a))throw new Error("The state change must be a function");return h.withColVisOption("fnStateChange",a),h}var h=a(b);return h.withColVis=e,h.withColVisOption=f,h.withColVisStateChange=g,h}var e=a.newOptions,f=a.fromSource,g=a.fromFnPromise;return a.newOptions=function(){return b(e)},a.fromSource=function(a){return b(f,a)},a.fromFnPromise=function(a){return b(g,a)},a}a.decorator("DTOptionsBuilder",b),b.$inject=["$delegate"]}d.module("datatables.colvis",["datatables"]).config(e),e.$inject=["$provide"]}(window,document,jQuery,angular);
