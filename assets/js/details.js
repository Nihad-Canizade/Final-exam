let id = new URLSearchParams(window.location.search).get("id");
let sec4Boxs = document.querySelector('.sec4-boxs');

function getDataApiId() {
    fetch(`http://localhost:3000/boxs/${id}`)
        .then(res => res.json())
        .then(data => {
            sec4Boxs.innerHTML += `
        <div class="sec4-box">
        <div class="sec4-box-forimg">
        <img src="${data.image}" alt="Image">
        </div>
        <div class="sec4-box-fortext">
        <p class="sec4-box-p1">${data.name}</p>
        <p class="sec4-box-p2">${data.description}</p>
        <p class="sec4-box-p3">$${data.price}</p>
        </div>
        </div>`
        })
}

getDataApiId();

