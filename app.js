// run animations.

barba.init({
  /* PreventRunning permet de forcer les animations à se terminer même si on appuie à nouveau
    sur la flèche "suivant". Sans ça, l'animation s'interromp si on appuis rapidemment sur suivant. */
  preventRunning: true,
  transitions: [
    //Transition entre les produits du showcase.
    {
      name: "default",

      leave(data) {
        /* Quand on appuis sur la flèche pour faire suivant on a accès à un object qui contient
          à la fois notre page courrante mais aussi la page vers laquelle on se dirige. */
        let current = data.current.container;
        /* Petit soucis l'animation du enter commence alors que la première animation n'est pas terminée, 
        on est obligé d'utiliser une fonction async pour laisser la première terminer. */
        const done = this.async();
        /* Avec l'option OnComplete de GSAP on peux mettre n'importe quelle fonction qui s'executera
        quand l'animation est terminée. On peux y mettre une arrow function directement dedans memem si on veux. */
        gsap.fromTo(
          current,
          { opacity: 1 },
          { opacity: 0, duration: 1, onComplete: done }
        );
      },
      enter(data) {
        const done = this.async();
        let next = data.next.container;
        gsap.fromTo(
          next,
          { opacity: 0 },
          { opacity: 1, duration: 1, onComplete: done }
        );
      },
    },
  ],
});
