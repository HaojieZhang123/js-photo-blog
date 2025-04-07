// get row element from DOM
const row = document.querySelector('.row');
// AJAX call endpoint
const endpoint = `https://lanciweb.github.io/demo/api/pictures/`
// array of objects
let images =[];

// functioon to create polaroid column
const createPolaroid = (array) => {
    let element = ``

    array.forEach((photo) => {
        let {id, title, date, url} = photo;
        element += `<div class="column polaroid d-flex flex-wrap position-relative">
                        <div class="polaroid-img col-100">
                            <img src="${url}" alt="immagine">
                        </div>
                        <div class="polaroid-text col-100">
                            <div class="title">${title}</div>
                            <div class="date">${date}</div>
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
    });