// get row element from DOM
const row = document.querySelector('.row');
// AJAX call endpoint
const endpoint = `https://lanciweb.github.io/demo/api/pictures/`
// array of objects
let images =[];

// overlay
const overlay = document.querySelector('.overlay')
// overlay button
const button = document.querySelector('button')
// overlay image container
const overlayImage = document.getElementById('overlay-img-container')

// functioon to create polaroid column
const createPolaroid = (array) => {
    let element = ``

    array.forEach((photo) => {
        let {id, title, date, url} = photo;
        // adding id class to polaroid-img to make every image easily distinguishible from each other in JS
        element += `<div class="column polaroid d-flex flex-wrap position-relative">
                        <div class="polaroid-img col-100 ${id}">
                            <img src="${url}" alt="immagine">
                        </div>
                        <div class="polaroid-text col-100">
                            <div class="date">${date}</div>
                            <div class="title">${title.toUpperCase()}</div>
                        </div>
                        <div class="pin">
                            <img src="./img/pin.svg" alt="pin">
                        </div>
                    </div>`
    });

    for(i=0; i<array.length; i++){
        
    }
    console.log(element)
    return element
}

// clicking overlay button will add overlay-hidden on overlay
button.addEventListener('click', (e) => {
    e.preventDefault;
    overlay.classList.remove('overlay-active')
    overlay.classList.add('overlay-hidden')
})

// axios call to get needed info
axios.get(endpoint)
    .then((resp) => {
        console.log(resp)
        console.log(resp.data)
        // save data into array
        images = resp.data
        console.log(images)

        // function to fill page with all object by calling createPolaroid
        const elements = createPolaroid(images);

        row.innerHTML += elements;

        // once images are presen in DOM, I can get polaroid-img to open overlay
        const polaroidImg = document.querySelectorAll('.polaroid-img')
        polaroidImg.forEach((image) => {
            image.addEventListener('click', (e) => {
                overlay.classList.remove('overlay-hidden')
                overlay.classList.add('overlay-active')
            })
        });
        
    });