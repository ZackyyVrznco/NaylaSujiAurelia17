function changeBackground(selectElement) {
    var selectedImage = selectElement.value;
    document.body.style.backgroundImage = 'url(' + selectedImage + ')';
    localStorage.setItem('bgImage', selectedImage);
	
}

window.onload = function() {
    var savedImage = localStorage.getItem('bgImage');
    if (savedImage) {
        document.body.style.backgroundImage = 'url(' + savedImage + ')';
        document.getElementById('latarBelakang').value = savedImage;
    }
};
