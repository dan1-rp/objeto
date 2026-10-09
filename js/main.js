let videojuego = {
    title: "Minecraft",
    genre: "Supervivencia",
    year: 2011
};

let videojuegos = [
    {
        title: "Hollow Knight",
        genre: "Metroidvania",
        year: 2017
    },
    {
        title: "Undertale",
        genre: "RPG",
        year: 2015
    },
    {
        title: "Little Nightmares",
        genre: "Terror",
        year: 2017
    }
];

// forEach()
console.log("--- Videojuegos ---");

videojuegos.forEach((juego) => {
    console.log(juego.title);
});

// push()
let nuevoJuego = {
    title: "Stardew Valley",
    genre: "Simulacion",
    year: 2016
};

let existe = false;

videojuegos.forEach((juego) => {
    if (juego.title.toLowerCase() === nuevoJuego.title.toLowerCase()) {
        existe = true;
    }
});

if (!existe) {
    videojuegos.push(nuevoJuego);
}

console.log("Total de videojuegos:", videojuegos.length);

// filter()
let juegosRPG = videojuegos.filter((juego) => {
    return juego.genre.toLowerCase().includes("rpg");
});

console.log("Videojuegos RPG:", juegosRPG);

// map()
let titulos = videojuegos.map((juego) => {
    return juego.title;
});

console.log("Titulos:", titulos);

// find()
let juegoEncontrado = videojuegos.find((juego) => {
    return juego.title === "Undertale";
});

console.log("Juego encontrado:", juegoEncontrado);

// CRUD
console.log("CRUD");

let juegoCrear = {
    title: "Celeste",
    genre: "Plataformas",
    year: 2018
};

videojuegos.push(juegoCrear);

let juegoLeer = videojuegos.find((juego) => {
    return juego.title === "Hollow Knight";
});

console.log("Consulta:", juegoLeer);

let indiceActualizar = videojuegos.findIndex((juego) => {
    return juego.title === "Little Nightmares";
});

if (indiceActualizar !== -1) {
    videojuegos[indiceActualizar].year = 2016;
}

// delete
let indiceEliminar = videojuegos.findIndex((juego) => {
    return juego.title === "Minecraft";
});

if (indiceEliminar !== -1) {
    videojuegos.splice(indiceEliminar, 1);
}

console.log("Videojuegos finales:", videojuegos);