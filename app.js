// run animations.

barba.init({
  transitions: [
    //Transition entre les produits du showcase.
    {
      name: "default",
      leave(data) {
        /* Quand on appuis sur la flèche pour faire suivant on a accès à un object qui contient
          à la fois notre page courrante mais aussi la page vers laquelle on se dirige. */
        let current = data.current.container;

        gsap.fromTo(current, { opacity: 1 }, { opacity: 0, duration: 1 });
      },
      enter(data) {
        let next = data.next.container;
        gsap.fromTo(next, { opacity: 0 }, { opacity: 1, duration: 1 });
      },
    },
  ],
});
