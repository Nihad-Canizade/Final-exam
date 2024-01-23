let id = new URLSearchParams(window.location.search).get("id");
let favorites = document.querySelector('.sec4-boxs');

function forFavorites() {
    fetch("http://localhost:3000/favorites")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                favorites.innerHTML += `
                <div class="sec4-box">
                <img src="${element.image}" alt="Image">
                <p class="sec4-box-p1">${element.name}</p>
                <p class="sec4-box-p2"${element.description}</p>
                <p class="sec4-box-p3">${element.price}</p>
                <button class = "rmv-fav-btn" onclick = "boxDelete(${element.id})">Remove</button>
            </div>`
            })
        })
}


forFavorites();


// Delete from favorites
function boxDelete(id) {
    axios.delete("http://localhost:3000/favorites/" + id)
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
}