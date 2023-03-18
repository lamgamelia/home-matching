function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
export var Designers = /*#__PURE__*/function (_React$Component) {
  _inherits(Designers, _React$Component);
  var _super = _createSuper(Designers);
  function Designers() {
    _classCallCheck(this, Designers);
    return _super.call(this);
  }
  _createClass(Designers, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "bg-light",
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "row no-gutters item-align-center p-5"
      }, /*#__PURE__*/React.createElement("h1", {
        className: ""
      }, "Top Recommendations")), /*#__PURE__*/React.createElement("div", {
        className: "row justify-content-center px-5 bg-light"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card col-md-4 d-flex justify-content-center justify-content-md-between bg-light",
        style: {
          width: "18rem",
          border: '3px'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: "home-design.jpg",
        className: "card-img-top",
        alt: "Designer1"
      }), /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text"
      }, "designer1"))), /*#__PURE__*/React.createElement("div", {
        className: "card col-md-4 d-flex justify-content-center justify-content-md-between bg-light",
        style: {
          width: "18rem",
          border: '3px'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: "home-design.jpg",
        className: "card-img-top",
        alt: "Designer2"
      }), /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text"
      }, "designer2"))), /*#__PURE__*/React.createElement("div", {
        className: "card col-md-4 d-flex justify-content-center justify-content-md-between bg-light",
        style: {
          width: "18rem",
          border: '3px'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: "home-design.jpg",
        className: "card-img-top",
        alt: "Designer3"
      }), /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text"
      }, "designer3"))))), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "row no-gutters item-align-center p-5"
      }, /*#__PURE__*/React.createElement("h1", {
        className: ""
      }, "Our Designers")), /*#__PURE__*/React.createElement("ul", {
        class: "nav nav-pills mb-3",
        id: "pills-tab",
        role: "tablist"
      }, /*#__PURE__*/React.createElement("li", {
        class: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/React.createElement("button", {
        class: "nav-link active",
        id: "designers-all",
        "data-bs-toggle": "pill",
        "data-bs-target": "#pills-home",
        type: "button",
        role: "tab",
        "aria-controls": "pills-home",
        "aria-selected": "true"
      }, "All")), /*#__PURE__*/React.createElement("li", {
        class: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/React.createElement("button", {
        class: "nav-link",
        id: "designers-registered",
        "data-bs-toggle": "pill",
        "data-bs-target": "#pills-profile",
        type: "button",
        role: "tab",
        "aria-controls": "pills-profile",
        "aria-selected": "false"
      }, "Registered")), /*#__PURE__*/React.createElement("li", {
        class: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/React.createElement("button", {
        class: "nav-link",
        id: "designers-popular",
        "data-bs-toggle": "pill",
        "data-bs-target": "#pills-contact",
        type: "button",
        role: "tab",
        "aria-controls": "pills-contact",
        "aria-selected": "false"
      }, "Popular"))), /*#__PURE__*/React.createElement("div", {
        class: "tab-content",
        id: "pills-tabContent"
      }, /*#__PURE__*/React.createElement("div", {
        class: "tab-pane fade show active",
        id: "pills-home",
        role: "tabpanel",
        "aria-labelledby": "designers-all",
        tabindex: "0"
      }, "..."), /*#__PURE__*/React.createElement("div", {
        class: "tab-pane fade",
        id: "pills-profile",
        role: "tabpanel",
        "aria-labelledby": "designers-registered",
        tabindex: "0"
      }, "..."), /*#__PURE__*/React.createElement("div", {
        class: "tab-pane fade",
        id: "pills-contact",
        role: "tabpanel",
        "aria-labelledby": "designers-popular",
        tabindex: "0"
      }, "..."))));
    }
  }]);
  return Designers;
}(React.Component);
;