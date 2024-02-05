let divGeolier = document.getElementById("geolierSection");
let divSferaEbbasta = document.getElementById("sferaebbastaSection");
let divRickRoss = document.getElementById("rickrossSection");

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=geolier")
.then((response) => response.json())
.then(json => {
const albums = json.data;
for (let i = 1; i < 5; i++) {
    const covers = albums[i];
    let img = document.createElement("img");
    const cover = covers.album.cover;
    img.setAttribute("src", cover);
    img.classList.add("col-3")
    divGeolier.appendChild(img)
}
})
.catch((err) => console.log("Error detected: ", err));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=sferaebbasta")
.then((response) => response.json())
.then(json => {
const albums = json.data;
for (let i = 2; i < 6; i++) {
    const covers = albums[i];
    let img = document.createElement("img");
    const cover = covers.album.cover;
    img.setAttribute("src", cover);
    img.classList.add("col-3")
    divSferaEbbasta.appendChild(img)
}
})
.catch((err) => console.log("Error detected: ", err));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=rickross")
.then((response) => response.json())
.then(json => {
const albums = json.data;
for (let i = 1; i < 5; i++) {
    const covers = albums[i];
    let img = document.createElement("img");
    const cover = covers.album.cover;
    img.setAttribute("src", cover);
    img.classList.add("col-3")
    divRickRoss.appendChild(img)
}
})
.catch((err) => console.log("Error detected: ", err));