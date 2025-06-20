//your JS code here. If required.
window.onload = function(){
const counterElement= document.getElementById("counter");
const button=document.getElementById("incrementBtn");

button.addEventListener('click', function(){
	let currValue=parseInt(counterElement.textContent, 10);
	alert(currValue);
	counterElement.textContent = currValue+1;
})
};
