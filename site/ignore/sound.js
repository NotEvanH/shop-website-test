document.getElementById('product-button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'sound.java', true);
    xhr.send();
});