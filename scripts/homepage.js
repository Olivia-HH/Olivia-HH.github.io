class character {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.isFlipped = false;
    this.flipInterval = Math.floor(Math.random() * 10) + 1;
  }

  setHeading() {
    heading.textContent = this.name;
  }

  jump() {
    this.id.style.animation = "jump 0.7s";
    let that = this;
    setTimeout(function () {
      that.id.style.animation = "";
    }, 800); // reset after delay -- allow enough time for animation to complete
  }

  wait() {
    //check orientation
    //console.log(this)
    if (!this.isFlipped) {
      this.id.style.scale = "-1 1"; //mirror the x
      this.isFlipped = true; // is flipped now
    } else {
      this.id.style.scale = "1 1"; //revert the x
      this.isFlipped = false; // is normal now
    }
    this.flip(); //recurse so it keeps running
  }

  flip() {
    //console.log(this.id)
    let flipInterval = Math.floor(Math.random() * 10) + 1; //init to something between 1-10sec

    setTimeout(this.wait.bind(this), flipInterval * 1000); //wait (interval) seconds
  }
}

function wait(time) {
  // waits for the specified time (in seconds)
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}

function resetHeading() {
  // console.log("doingg");
  heading.textContent = "Welcome!";
}

let heading = document.getElementById("welcomeText");

let oliviaChar = new character("Olivia", document.getElementById("olivia"));
let rhysChar = new character("Rhys", document.getElementById("rhys"));
let michaelChar = new character("Michael", document.getElementById("michael"));
let leoChar = new character("Leo", document.getElementById("leo"));
let alexChar = new character("Alex", document.getElementById("alex"));

chars = [oliviaChar, rhysChar, michaelChar, leoChar, alexChar];

for (i = 0; i < 5; i++) {
  chars[i].id.d;
  chars[i].id.onmouseenter = chars[i].setHeading.bind(chars[i]);
  chars[i].id.onmouseleave = resetHeading;
  chars[i].id.onclick = chars[i].jump.bind(chars[i]);
}

oliviaChar.flip(); // recurse so it keeps running
michaelChar.flip(); // recurse so it keeps running
rhysChar.flip(); // recurse so it keeps running
leoChar.flip(); // recurse so it keeps running
alexChar.flip(); // recurse so it keeps running
