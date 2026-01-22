const runner = document.getElementById('samurai');

runner.addEventListener('animationiteration', (event) => {
    // Cette fonction se déclenche à CHAQUE fois que le perso termine sa traversée
    if (event.animationName === 'move') {
        console.log("Le Samouraï a fini sa course sur la carte !");
        runner.classList.add("runnerdie")
       
        
      
    }
});