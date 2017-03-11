'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _List = require('./components/List.jsx');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log('LOLOL');
      _jquery2.default.ajax({
        url: '/items',
        success: function success(data) {
          _this2.setState({
            items: data
          });
        },
        error: function error(err) {
          console.log('err', err);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Item List'
        ),
        _react2.default.createElement(_List2.default, { items: this.state.items })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlYWN0LWNsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwidXJsIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImVycm9yIiwiZXJyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCQyxjQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLHVCQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxRQURBO0FBRUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakIsaUJBQUtDLFFBQUwsQ0FBYztBQUNaUCxtQkFBT007QUFESyxXQUFkO0FBR0QsU0FOSTtBQU9MRSxlQUFPLGVBQUNDLEdBQUQsRUFBUztBQUNkUixrQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJPLEdBQW5CO0FBQ0Q7QUFUSSxPQUFQO0FBV0Q7Ozs2QkFFUztBQUNSLGFBQVE7QUFBQTtBQUFBO0FBQ047QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURNO0FBRU4sd0RBQU0sT0FBTyxLQUFLVixLQUFMLENBQVdDLEtBQXhCO0FBRk0sT0FBUjtBQUlEOzs7O0VBNUJlLGdCQUFNVSxTOztBQStCeEIsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvTGlzdC5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGl0ZW1zOiBbXVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdMT0xPTCcpXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9pdGVtcycsIFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXRlbXM6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPGgxPkl0ZW0gTGlzdDwvaDE+XG4gICAgICA8TGlzdCBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30vPlxuICAgIDwvZGl2PilcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==