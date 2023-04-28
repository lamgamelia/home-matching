"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgUpload = ImgUpload;
var _graphql = _interopRequireDefault(require("../graphql.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
function convertToBase64(file) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      resolve(fileReader.result);
    };
    fileReader.onerror = function (error) {
      reject(error);
    };
  });
}
function PropertyType(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "awesomeness",
    className: "col-sm-6 col-form-label"
  }, "Property Type"), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    name: "propertyType",
    id: "awesomeness",
    onChange: props.changeHandler
  }, /*#__PURE__*/React.createElement("option", null), /*#__PURE__*/React.createElement("option", null, "Hdb"), /*#__PURE__*/React.createElement("option", null, "Condo"), /*#__PURE__*/React.createElement("option", null, "Landed"))));
}
function PropertySize(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "propertySize",
    className: "col-sm-6 col-form-label"
  }, "Property Size in sqft"), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/React.createElement("input", {
    name: "propertySize",
    type: "number",
    className: "form-control",
    id: "propertySize",
    onChange: props.changeHandler
  })));
}
function DesignStyle1(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "designStyle1",
    className: "col-sm-6 col-form-label"
  }, "Primary Design Style"), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    name: "designStyle1",
    id: "designStyle1",
    onChange: props.changeHandler
  }, /*#__PURE__*/React.createElement("option", null), /*#__PURE__*/React.createElement("option", null, "Artistic"), /*#__PURE__*/React.createElement("option", null, "Industrial"), /*#__PURE__*/React.createElement("option", null, "Luxury"), /*#__PURE__*/React.createElement("option", null, "Minimalist"), /*#__PURE__*/React.createElement("option", null, "Modern"), /*#__PURE__*/React.createElement("option", null, "Other"))));
}
function DesignStyle2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "designStyle2",
    className: "col-sm-6 col-form-label"
  }, "Secondary Design Style"), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    name: "designStyle2",
    id: "designStyle2",
    onChange: props.changeHandler
  }, /*#__PURE__*/React.createElement("option", null), /*#__PURE__*/React.createElement("option", null, "Artistic"), /*#__PURE__*/React.createElement("option", null, "Industrial"), /*#__PURE__*/React.createElement("option", null, "Luxury"), /*#__PURE__*/React.createElement("option", null, "Minimalist"), /*#__PURE__*/React.createElement("option", null, "Modern"), /*#__PURE__*/React.createElement("option", null, "Other"))));
}
function NoOfBedrooms(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-group row"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "noOfBedrooms",
    className: "col-sm-6 col-form-label"
  }, "No of Bedrooms"), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    name: "noOfBedrooms",
    id: "noOfBedrooms",
    onChange: props.changeHandler
  }, /*#__PURE__*/React.createElement("option", null), /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "3"), /*#__PURE__*/React.createElement("option", null, "4"), /*#__PURE__*/React.createElement("option", null, "5"), /*#__PURE__*/React.createElement("option", null, "6 or more"))));
}
function ImgUpload() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedImages = _useState2[0],
    setSelectedImages = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBase64 = _useState4[0],
    setSelectedBase64 = _useState4[1];
  var _useState5 = useState({
      title: 'abc',
      company: 'def',
      propertyType: 'Condo',
      propertySize: 500,
      designStyle1: 'Modern',
      designStyle2: 'Nil',
      noOfBedrooms: 3
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    galleryData = _useState6[0],
    setGalleryData = _useState6[1];
  useEffect(function () {
    {
      console.log(galleryData);
    }
  }, [galleryData]);
  var changeHandler = function changeHandler(e) {
    var name = e.target.name;
    var value = e.target.value;
    setGalleryData(_objectSpread(_objectSpread({}, galleryData), {}, _defineProperty({}, name, value)));
  };
  useEffect(function () {
    {
      console.log(selectedBase64);
    }
  }, [selectedBase64]);
  var onSelectFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var selectedFiles, selectedFilesArray, Base64Array, imagesArray;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            selectedFiles = event.target.files;
            selectedFilesArray = Array.from(selectedFiles);
            _context2.next = 4;
            return Promise.all(selectedFilesArray.map( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return convertToBase64(file);
                    case 2:
                      return _context.abrupt("return", _context.sent);
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }()));
          case 4:
            Base64Array = _context2.sent;
            imagesArray = selectedFilesArray.map(function (file) {
              return URL.createObjectURL(file);
            });
            setSelectedImages(function (previousImages) {
              return previousImages.concat(imagesArray);
            });
            setSelectedBase64(function (previousBase64) {
              return previousBase64.concat(Base64Array);
            });

            // FOR BUG IN CHROME
            //event.target.value = "";
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function onSelectFile(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var deleteHandler = function deleteHandler(image) {
    var delImage = selectedBase64[selectedImages.indexOf(image)];
    setSelectedBase64(selectedBase64.filter(function (e) {
      return e !== delImage;
    }));
    setSelectedImages(selectedImages.filter(function (e) {
      return e !== image;
    }));
    URL.revokeObjectURL(image);
  };
  var uploadHandler = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var query;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            e.preventDefault();
            query = "mutation addGallery ($gallery: InputGallery!){\n        addGallery (newGallery: $gallery) {\n            id\n            title\n            company\n            propertyType\n            propertySize\n            designStyle1\n            designStyle2\n            noOfBedrooms \n            datetime\n            image\n        }\n    }";
            selectedBase64.forEach( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(base64) {
                var gallery, data;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      gallery = _objectSpread(_objectSpread({}, galleryData), {}, {
                        image: base64
                      });
                      _context3.next = 3;
                      return (0, _graphql.default)(query, {
                        gallery: gallery
                      });
                    case 3:
                      data = _context3.sent;
                      if (!data) {
                        console.log('image not uploaded');
                      } else {
                        console.log('image uploaded');
                      }
                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function (_x5) {
                return _ref4.apply(this, arguments);
              };
            }());
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function uploadHandler(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "2rem 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(PropertyType, {
    changeHandler: changeHandler
  }), /*#__PURE__*/React.createElement(PropertySize, {
    changeHandler: changeHandler
  }), /*#__PURE__*/React.createElement(DesignStyle1, {
    changeHandler: changeHandler
  }), /*#__PURE__*/React.createElement(DesignStyle2, {
    changeHandler: changeHandler
  }), /*#__PURE__*/React.createElement(NoOfBedrooms, {
    changeHandler: changeHandler
  })), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "1px dotted black",
      borderRadius: "20px",
      width: "10rem",
      height: "10rem",
      cursor: "pointer",
      fontSize: "large"
    }
  }, "+ Add Images", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "lighter",
      fontSize: "small",
      paddingTop: "0.5rem"
    }
  }, "up to 10 images"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    name: "images",
    onChange: onSelectFile,
    multiple: true,
    accept: "image/png , image/jpeg, image/webp",
    style: {
      display: "none"
    }
  })), /*#__PURE__*/React.createElement("br", null)))), selectedImages.length > 0 && (selectedImages.length > 10 ? /*#__PURE__*/React.createElement("p", {
    className: "error"
  }, "You can't upload more than 10 images! ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "please delete ", /*#__PURE__*/React.createElement("b", null, " ", selectedImages.length - 10, " "), " of them", " ")) : /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    style: {
      display: "block"
    },
    onClick: uploadHandler
  }, "UPLOAD ", selectedImages.length, " IMAGE", selectedImages.length === 1 ? "" : "S")), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-row flex-wrap align-items-center justify-content-center",
    style: {
      paddingTop: "30px",
      paddingBottom: "30px"
    }
  }, selectedImages && selectedImages.map(function (image, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: image,
      className: "position-relative",
      style: {
        marginLeft: "10px",
        marginRight: "10px"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      height: "200",
      alt: "upload"
    }), /*#__PURE__*/React.createElement("p", null, index + 1), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline-danger btn-sm",
      onClick: function onClick() {
        return deleteHandler(image);
      },
      style: {
        position: "absolute",
        bottom: 5,
        right: 0
      }
    }, "delete"));
  })));
}
;