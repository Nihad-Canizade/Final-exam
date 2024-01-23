let form = document.querySelector('form');
let formImg = document.querySelector(".form-img");
let formName = document.querySelector('.form-name');
let formPrice = document.querySelector('.form-price');
let formDescription = document.querySelector('.form-description');
let table = document.querySelector('table');
let addBtn = document.querySelector('.add-btn');
let idImg = document.querySelector('.id-img');

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


// Form for add
addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let requiredİmg = document.querySelector('.required-img');
    let requiredName = document.querySelector('.required-name');
    let requiredDescription = document.querySelector('.required-description');
    let requiredPrice = document.querySelector('.required-price');
    if (formImg.value == "") {
        requiredİmg.style.display = "block"
    } if (formName.value == "") {
        requiredName.style.display = "block"
    } if (formDescription.value == "") {
        requiredDescription.style.display = "block"
    } if (formPrice.value == "") {
        requiredPrice.style.display = "block"
    } if (formImg.value != "" && formName.value != "" && formDescription.value != "" && formPrice.value != "") {
        axios.post(`http://localhost:3000/boxs`, {
            image: idImg.src,
            name: formName.value,
            description: formDescription.value,
            price: formPrice.value,
        })
            .then(res => console.log(res.data));
        reader.readAsDataURL(src);
    }
})


// Get data Api
function getDataApi() {
    fetch('http://localhost:3000/boxs')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                table.innerHTML += `
                <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.description}</td>
                <td>${element.price}</td>
                <td><a href ="./update.html?id=${element.id}" target = "_blank"><i class="bi bi-gear"</i></a></td>
                <td><i class="bi bi-trash" onclick = "boxDelete(${element.id})"></i></td>
            </tr>`
            })
        })
}

getDataApi();


// Boxs delete function
function boxDelete(id) {
    axios.delete(`http://localhost:3000/boxs/${id}`)
        .then(res => window.location.reload())
    
}