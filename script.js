let imagesize = parseInt(200)

function increase() {
    if (imagesize < 300) {

        imagesize = imagesize + 5
        document.getElementById('image').style.width = (imagesize + 'px')
        document.getElementById('size').textContent = (imagesize + 'px')
        document.getElementById('warning').textContent = ''
    }
    if (imagesize >= 300) {
        document.getElementById('warning').textContent = 'Image is too Big, Decrease the size'

    }
}

function decrease() {
    if (imagesize > 100) {
        imagesize = imagesize - 5
        document.getElementById('image').style.width = (imagesize + 'px')
        document.getElementById('size').textContent = (imagesize + 'px')
        document.getElementById('warning').textContent = ''
    }
    if (imagesize <= 100) {
        document.getElementById('warning').textContent = 'Image is too Small, increase the size'

    }
}