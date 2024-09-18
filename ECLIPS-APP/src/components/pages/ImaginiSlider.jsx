export const ProductService = {
  getProductsData() {
    return [
      {
        id: "Deadpool",
        code: "f230fh0g3",
        name: "DEADPOOL & WOLVERINE",
        description:
          "Mentre si sta riprendendo dopo essere stato gravemente ferito, Wolverine ha la sfortuna di incontrare quel chiacchierone di Deadpool. I due, uno con più entusiasmo dell'altro, si alleano per sconfiggere un nemico comune.",
        image: "deadpool.jpg",
        genre: "Fantascienza",
        duration: "127 min",
        author: "Shawn Levy",
        distribution: "Walt Disney Studios Motion Pictures",
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "JOKER: FOLIE A' DEUX",
        description:
          "Il comico fallito Arthur Fleck incontra l'amore della sua vita, Harley Quinn, mentre è detenuto all'Arkham State Hospital. A seguito del suo rilascio, i due si imbarcano in una disavventura romantica.",
        image: "joker.jpg",
        genre: "Drammatico, Azione, Giallo",
        duration: "138 min",
        author: "Todd Phillips",
        distribution: "Warner Bros. Entertainment Italia",
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "A QUIET PLACE - GIORNO 1",
        description:
          "Quando New York City viene invasa dagli alieni, una donna e altri sopravvissuti cercano di trovare la salvezza. Presto imparano che devono rimanere assolutamente in silenzio, poiché le misteriose creature sono attratte dal suono.",
        image: "place.jpg",
        genre: "Horror",
        duration: "100 min",
        author: "Michael Sarnoski",
        distribution: "Eagle Pictures",
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "VENOM: THE LAST DANCE",
        description:
          "Dopo gli eventi di Spider-Man: No Way Home (2021), il governo statunitense dà la caccia a Eddie Brock e a Venom, mentre altri simbionti dallo spazio, mandati dal creatore di Venom Knull, giungono sulla Terra.",
        image: "venom.jpg",
        genre: "Azione, Fantascienza, Thriller",
        duration: "135 min",
        author: "Kelly Marcel",
        distribution: "Eagle Pictures",
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "WICKED",
        description:
          "Molto Prima dell'arrivo di Dorothy Gale nel Regno di Oz, Elphaba, una giovane donna nata con la pelle verde smeraldo, incontra Glinda, una giovane donna bionda, vivace ed estremamente popolare. Sebbene tutto si opponga a loro, le due faranno amicizia. Ma tra le rivalità e il governo corrotto del Mago di Oz la loro relazione prenderà rapidamente un'altra svolta.",
        image: "wicked.jpg",
        genre: "Family, Commedia, Musicale",
        duration: "142 min",
        author: "Jon M. Chu",
        distribution: "Universal Pictures",
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "IL GLADIATORE II",
        description:
          "La storia di Lucius, figlio di Lucilla, innamorata di Massimo, si svolge dopo la morte di quest'ultimo. Lucius, che è anche il nipote di Commodo, è ormai un uomo adulto.",
        image: "gladiator.jpg",
        genre: "storico, epico, azione, drammatico",
        duration: "141 min",
        author: "Ridley Scott",
        distribution: "Paramount Pictures",
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "BEETLEJUICE BEETLEJUICE",
        description:
          "La vecchia dimora dei Deetz è ancora infestata dallo spirito di Beetlejuice (Michael Keaton), relegato, però, nel mondo dei non morti. Quando la ribelle Astrid si reca in soffitta, scopre il modellino della città e apre accidentalmente il portale dell'Aldilà.",
        image: "juice.jpg",
        genre: "Commedia, Fantasy, Horror",
        duration: "104 min",
        author: "Tim Burton",
        distribution: "Warner Bros. Pictures",
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
