class Animal {
  constructor(br = "Human", name = "Nobody", lang = "silence") {
    this.breed = br;
    this.name = name;
    this.language = lang;
  }

  talk() {
    console.log(this.language);
  }

  expressYourself() {
    console.log("Hello ji, I'm "+this.breed+" I say " + this.language)
  }
}

function setup() {

  let blackCat = new Animal("Cat", "Blacky", "meaaaooowwww, i want to snort catnip")
  blackCat.talk();
  blackCat.expressYourself();
}
