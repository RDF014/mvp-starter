'use strict';

var express = require('express');
// var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsIml0ZW1zIiwiYXBwIiwidXNlIiwic3RhdGljIiwiX19kaXJuYW1lIiwiZ2V0IiwicmVxIiwicmVzIiwic2VsZWN0QWxsIiwiZXJyIiwiZGF0YSIsInNlbmRTdGF0dXMiLCJqc29uIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVQyxRQUFRLFNBQVIsQ0FBZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLFFBQVFELFFBQVEsbUJBQVIsQ0FBWjs7QUFFQSxJQUFJRSxNQUFNSCxTQUFWOztBQUVBO0FBQ0FHLElBQUlDLEdBQUosQ0FBUUosUUFBUUssTUFBUixDQUFlQyxZQUFZLHVCQUEzQixDQUFSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQUgsSUFBSUksR0FBSixDQUFRLFFBQVIsRUFBa0IsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ3BDUCxRQUFNUSxTQUFOLENBQWdCLFVBQVNDLEdBQVQsRUFBY0MsSUFBZCxFQUFvQjtBQUNsQyxRQUFHRCxHQUFILEVBQVE7QUFDTkYsVUFBSUksVUFBSixDQUFlLEdBQWY7QUFDRCxLQUZELE1BRU87QUFDTEosVUFBSUssSUFBSixDQUFTRixJQUFUO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0FSRDs7QUFVQVQsSUFBSVksTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBVztBQUMxQkMsVUFBUUMsR0FBUixDQUFZLHlCQUFaO0FBQ0QsQ0FGRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuLy8gdmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuLy8gVU5DT01NRU5UIFRIRSBEQVRBQkFTRSBZT1UnRCBMSUtFIFRPIFVTRVxuLy8gdmFyIGl0ZW1zID0gcmVxdWlyZSgnLi4vZGF0YWJhc2UtbXlzcWwnKTtcbnZhciBpdGVtcyA9IHJlcXVpcmUoJy4uL2RhdGFiYXNlLW1vbmdvJyk7XG5cbnZhciBhcHAgPSBleHByZXNzKCk7XG5cbi8vIFVOQ09NTUVOVCBGT1IgUkVBQ1RcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy8uLi9yZWFjdC1jbGllbnQvZGlzdCcpKTtcblxuLy8gVU5DT01NRU5UIEZPUiBBTkdVTEFSXG4vLyBhcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvLi4vYW5ndWxhci1jbGllbnQnKSk7XG4vLyBhcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvLi4vbm9kZV9tb2R1bGVzJykpO1xuXG5hcHAuZ2V0KCcvaXRlbXMnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgaXRlbXMuc2VsZWN0QWxsKGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgIGlmKGVycikge1xuICAgICAgcmVzLnNlbmRTdGF0dXMoNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLmpzb24oZGF0YSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5hcHAubGlzdGVuKDMwMDAsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnbGlzdGVuaW5nIG9uIHBvcnQgMzAwMCEnKTtcbn0pO1xuXG5cblxuXG5cbiJdfQ==