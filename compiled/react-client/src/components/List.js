'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('./ListItem.jsx');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      ' List Component '
    ),
    'There are ',
    props.items.length,
    ' items.',
    props.items.map(function (item) {
      return _react2.default.createElement(_ListItem2.default, { item: item });
    })
  );
};

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlYWN0LWNsaWVudC9zcmMvY29tcG9uZW50cy9MaXN0LmpzeCJdLCJuYW1lcyI6WyJMaXN0IiwicHJvcHMiLCJpdGVtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFBQTtBQUVjQSxVQUFNQyxLQUFOLENBQVlDLE1BRjFCO0FBQUE7QUFHSUYsVUFBTUMsS0FBTixDQUFZRSxHQUFaLENBQWdCO0FBQUEsYUFBUSxvREFBVSxNQUFNQyxJQUFoQixHQUFSO0FBQUEsS0FBaEI7QUFISixHQURXO0FBQUEsQ0FBYjs7a0JBUWVMLEkiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbS5qc3gnO1xuXG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGg0PiBMaXN0IENvbXBvbmVudCA8L2g0PlxuICAgIFRoZXJlIGFyZSB7IHByb3BzLml0ZW1zLmxlbmd0aCB9IGl0ZW1zLlxuICAgIHsgcHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4gPExpc3RJdGVtIGl0ZW09e2l0ZW19Lz4pfVxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDsiXX0=