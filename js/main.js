const span = document.getElementById("Span&");
const classes = ["neon-rose", "neon-bleu"];

let index = 0;
setInterval(() => {
    // retirer toutes les classes avant d’ajouter la nouvelle
    span.className = classes[index];

    index++;

    // revenir au début quand on arrive à la fin
    if (index >= classes.length) {
        index = 0;
    }
}, 400); // 1000 = 1 seconde
