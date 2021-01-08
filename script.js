const trickBtn = document.getElementById('trick');
const btnContainer = document.querySelector('.btn-container');
// setting it initially
btnContainer.style.flexDirection = 'row';

trickBtn.addEventListener('mouseover', (e) => {
	const currentDir = btnContainer.style.flexDirection;
	if(currentDir === 'row') {
		btnContainer.style.flexDirection = 'row-reverse';
	} else {
		btnContainer.style.flexDirection = 'row';
	}
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}