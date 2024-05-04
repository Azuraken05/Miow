
function openModal() {
    document.getElementById('popup').style.display = 'block';
}

function closeModal() {
    document.getElementById('popup').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('popup');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}