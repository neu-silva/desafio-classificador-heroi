
let nomeHeroi = "Arthur";
let xp = 7500;

let herois = [
    {
        nome: nomeHeroi,
        experiencia: xp
    }
];

for (let heroi of herois) {

    let nivel = "";

    if (heroi.experiencia <= 1000) {
        nivel = "Ferro";
    } else if (heroi.experiencia <= 2000) {
        nivel = "Bronze";
    } else if (heroi.experiencia <= 5000) {
        nivel = "Prata";
    } else if (heroi.experiencia <= 7000) {
        nivel = "Ouro";
    } else if (heroi.experiencia <= 8000) {
        nivel = "Platina";
    } else if (heroi.experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(
        "O Herói de nome " + heroi.nome +
        " está no nível de " + nivel
    );
}
