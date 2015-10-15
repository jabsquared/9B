var socket9 = io('https://9billion.mybluemix.net/');
// var socket9 = io('http://localhost:1314/');
var cnt   = document.getElementById('cnt');

console.log("HEY!");

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
socket9.emit('Image Clicked', null);
socket9.on('Population Changed', function(data) {
  cnt.textContent = numberWithCommas(data);
});
