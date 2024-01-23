let id = new URLSearchParams(window.location.search).get("id");
let form = document.querySelector('form');
let formImg = document.querySelector(".form-img");
let formName = document.querySelector('.form-name');
let formPrice = document.querySelector('.form-price');
let formDescription = document.querySelector('.form-description');
let addBtn = document.querySelector('.add-btn');
let idImg = document.querySelector('.id-img');


// Get data Api Id
function getDataApiId() {
    fetch(`http://localhost:3000/boxs/${id}`)
        .then(response => response.json())
        .then(data => {
            idImg.src = data.image;
            formName.value = data.name;
            formDescription.value = data.description;
            formPrice.value = data.price;
        })
}
getDataApiId();


// See cloose file
formImg.addEventListener('input', (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            idImg.src = reader.result;
        }
    }
})


// Update with Id
addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:3000/boxs/${id}`, {
        image: idImg.src,
        name: formName.value,
        description: formDescription.value,
        price: formPrice.value,
    })
        .then(res => console.log(res.data));
    window.location = "./add.html";
    reader.readAsDataURL(src);
});