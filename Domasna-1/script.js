

let ime = "Shenol";
let godini = 24;
let grad = "Kicevo";

console.log("Zdravo! Jas sum " + ime + ", imam " + godini + " godini i ziveam vo " + grad + ".");


let prihod;
console.log(prihod); // undefined, zatoa shto nemame dodeleno vrednost




if (polnoleten) {
  console.log("Lice e polnoleteno.");
} else {
  console.log("Lice ne e polnoleteno.");
}



console.log(10 == "10"); 
console.log(10 === "10"); 
console.log(10 === 10);   



let temperatura = 25;

if (temperatura > 30) {
  console.log("Nadvor e mnogu toplo!");
} else if (temperatura >= 20) {
  console.log("Vremeto e prijatno.");
} else {
  console.log("E ladno, obleci jakna!");
}



let x = 8;
let y = 3;

console.log(x + y); 
console.log(x - y); 
console.log(x * y);
console.log(x / y); 
console.log(x % y); 



let broj = 47;

if (broj % 2 === 0) {
  console.log(broj + " e paren broj.");
} else {
  console.log(broj + " e neparen broj.");
}



let n = 30;

if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(n + " ne e deliv so 3 ili 5.");
}



let logiran = true;
let polnoleten2 = false;

if (logiran && polnoleten2) {
  console.log("Korisnik moze da kupi.");
} else {
  console.log("Korisnik NE moze da kupi.");
}

let licna = false;
let pasos = true;

if (licna || pasos) {
  console.log("Ima dokument i moze da patuva.");
} else {
  console.log("Nema dokumenti.");
}



let imaKreditnaKarticka = true;
let imaGotovina = false;
let balans = 150;
let cenaNaProizvod = 100;
let popust = true;

if ((imaKreditnaKarticka || imaGotovina) && balans >= cenaNaProizvod) {
  if (popust && balans >= cenaNaProizvod * 0.9) {
    console.log("Kupuvanjeto e uspeshno so popust!");
  } else if (!popust && balans >= cenaNaProizvod) {
    console.log("Kupuvanjeto e uspeshno bez popust.");
  } else {
    console.log("Nemate dovolno sredstva dori so popust.");
  }
} else if (!imaKreditnaKarticka && !imaGotovina) {
  console.log("Nemate metod za plakanje.");
} else {
  console.log("Kupuvanjeto ne e mozno vo momentot.");
}




let cas = 19; 
let den = "Petok";
let logiran = true;

if (logiran && (cas >= 8 && cas <= 17) && den !== "Sabota" && den !== "Nedela") {
  console.log("Korisnikot e logiran i mozhe da raboti.");
} else if (logiran && (den === "Sabota" || den === "Nedela")) {
  console.log("Korisnikot e logiran, no e vikend — odmor!");
} else if (!logiran && (cas >= 8 && cas <= 17)) {
  console.log("Korisnikot treba da se prijavi za da raboti.");
} else {
  console.log("Sistemot e zatvoren, nadvor od rabotno vreme.");
}


