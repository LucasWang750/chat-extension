/* Connects to the socket server */
// var socket = io.connect('http://localhost:3002');
// socket.on('connect', function() {
// console.log('Client connected');
// });
var color = "#3aa757";  

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});