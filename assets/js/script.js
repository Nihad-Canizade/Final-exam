// Menu icon
function myIcon(x) {
    x.classList.toggle("change");
}

// Menu icon click open
let resNav = document.querySelector('.res-nav');
let menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    if (resNav.style.display === "none") {
        resNav.style.display = "flex";
    } else {
        resNav.style.display = "none";
    }
});


// Get data Api
let sec4Boxs = document.querySelector('.sec4-boxs');
let search = document.querySelector("input[type=search]");
let sort = document.getElementById("sort");
let info = [];


function getDataApi() {
    fetch("http://localhost:3000/boxs")
        .then(response => response.json())
        .then(data => {
            sec4Boxs.innerHTML = "";
            info = info.length ? info : data;
            info.forEach(element => {
                sec4Boxs.innerHTML += `
                <div class="sec4-box">
                <div class="sec4-box-icons">
                <a href="./details.html?id=${element.id}" target = "_blank"><i class="bi bi-eye"></i></a>
                    <i class="bi bi-heart-fill" onclick = "addFavorites(${element.id})"></i>
                </div>
                <img src="${element.image}" alt="Image">
                <p class="sec4-box-p1">${element.name}</p>
                <p class="sec4-box-p2"${element.description}</p>
                <p class="sec4-box-p3">${element.price}</p>
            </div>`
            });

            // Sort function
            sort.addEventListener("change", (e) => {
                if (e.target.value == "descending") {
                    info = info.sort((a, b) => b.price - a.price);
                } else if (e.target.value == "ascending") {
                    info = info.sort((a, b) => a.price - b.price);
                } else {
                    info = [];
                }
                getDataApi();
            });

            // Search function
            search.addEventListener("input", (e) => {
                let filter = data.filter((el) => {
                    return el.name.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase());
                });
                sec4Boxs.innerHTML = "";
                filter.forEach(element => {
                    sec4Boxs.innerHTML += `
                    <div class="sec4-box">
                <div class="sec4-box-icons">
                    <a href="./details.html?id=${element.id}"<i class="bi bi-eye"></i></a>
                    <i class="bi bi-heart-fill"></i>
                </div>
                <img src="${element.image}" alt="Image">
                <p class="sec4-box-p1">${element.name}</p>
                <p class="sec4-box-p2"${element.description}</p>
                <p class="sec4-box-p3">${element.price}</p>
            </div>
                    `
                })
            })
        })
}

getDataApi();

// Add Favorites function
function addFavorites(id) {
    axios.get("http://localhost:3000/boxs/" + id)
        .then(res => {
            axios.post("http://localhost:3000/favorites", res.data);
        });
}