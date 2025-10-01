// zad 1
class KontoBankowe {
    #saldo
 
    constructor() {
        this.saldo = 0
    }

    deposit(amount) {
        if (amount > 0)
            this.saldo += amount
    }
 
    withdraw(amount) {
        if (amount > 0 && this.saldo - amount >= 0)
            this.saldo -= amount
    }
 
    getSaldo() {
        return this.saldo
    }
}

// zad 2

class Person {
    static powitanie(firstname, surname) {
        if (surname === undefined)
            return `Mam na imię ${firstname}`
        else
            return `Nazywam się ${firstname} ${surname}`
    }
}
 
console.log(Person.powitanie("Dawid"))
console.log(Person.powitanie("Kamil", "Nowak"))

// zad 3

const Osoba = {
    powitanie: function() {
        console.log("Siemson")
    }
}

Osoba.powitanie()

const uczen = Object.create(Osoba)
uczen.oceny = [6,4,4,6]
uczen.obliczSrednia = function(){
    let suma = 0;
    for (ocena of this.oceny) suma+=ocena
    return suma / this.oceny.length
}

console.log(uczen.obliczSrednia())

// zad 4

 
class SrodekTransportu {
    rodzajSilnika;
    mocSilnika;
 
    constructor(rodzajSilnika, mocSilnika) {
        if (this.constructor === SrodekTransportu)
            throw new Error("Nie można wywołać konstruktora abstrakcyjnej klasy");
 
        this.rodzajSilnika = rodzajSilnika;
        this.mocSilnika = mocSilnika;
    }
 
    dzwiek() {
        throw new Error("Nie można wywołać metody abstrakcyjnej klasy");
    }
}
 
class Samolot extends SrodekTransportu {
    maxPasazerow;
 
    constructor(maxPasazerow, mocSilnika) {
        super("Spalinowy", mocSilnika);
        this.maxPasazerow = maxPasazerow;
    }
 
    dzwiek() {
        console.log("hhhhhhhhhhhhhHHHHHHHHHHHHH");
    }
}
 
class Auto extends SrodekTransportu {
    iloscDrzwi;
 
    constructor(iloscDrzwi, rodzajSilnika, mocSilnika) {
        super(rodzajSilnika, mocSilnika);
        this.iloscDrzwi = iloscDrzwi;
    }
 
    dzwiek() {
        console.log("wrrrrrr");
    }
}
 
class Lodz extends SrodekTransportu {
    czyPodwodna;
 
    constructor(czyPodwodna, rodzajSilnika, mocSilnika) {
        super(rodzajSilnika, mocSilnika);
        this.czyPodwodna = czyPodwodna;
    }
 
    dzwiek() {
        if (this.czyPodwodna)
            console.log("bulbulbul");
        else
            console.log("kszsszzszsz");
    }
}
 
try {
    new SrodekTransportu("Spalinowy", 10);
} catch (e) { console.log(e) }
 
new Samolot(250, 8000).dzwiek();
new Auto(5, "Elektryczny", 250).dzwiek();
new Lodz(true, "Elektryczny", 230).dzwiek();
new Lodz(false, "Spalinowy", 1600).dzwiek();
 

// zad 5

const Psowate={
    dajGlos: ()=>console.log("miau?")
}

const Szczeniak = Object.create(Psowate)
Szczeniak.dajGlos = ()=>console.log("raur!")

const Pies = Object.create(Szczeniak)
Pies.dajGlos = ()=>console.log("woof!")

const Wilk = Object.create(Pies)
Wilk.dajGlos = ()=>console.log("auuu!")

 Psowate.dajGlos();
 Wilk.dajGlos();
 Pies.dajGlos();
 Szczeniak.dajGlos();

class PsowateKlasa {
    dajGlos() { console.log("?????") }
}
class WilkKlasa extends PsowateKlasa {
    dajGlos() { console.log("auuuuuu") }
}
class PiesKlasa extends WilkKlasa {
    dajGlos() { console.log("hau hau") }
}
class SzczeniakKlasa extends PiesKlasa {
    dajGlos() { console.log("rrrr rau rah rau") }
}
 
new PsowateKlasa().dajGlos();
new WilkKlasa().dajGlos();
new PiesKlasa().dajGlos();
new SzczeniakKlasa().dajGlos();
 

// zad 6

// Słyszałem że tego nie robimy (interfejsy)
// Dziękuje za wyrozumiałość i pozdrawiam

// zad 7
const username = document.getElementById("username")
const password = document.getElementById("password")

class Uzytkownik{
    uzytkownicy=[]
    weryfikacja = function(haslo) {
        return /[0-9]/.test(haslo) && /[A-Za-z]{8,}/.test(haslo)
        
    }
    dodajUzytkownika = (name) => this.uzytkownicy.push(name) 
    
}

let uzytkownik = new Uzytkownik

function submit() {
    if(uzytkownik.weryfikacja(password.value)){
        uzytkownik.dodajUzytkownika(username.value)
        console.log(uzytkownik.uzytkownicy)
    } else{
        alert("beka z typa wpisał złe hasło\n (min 8 znaków, musi zawierać litere i cyfrę)")
    }
}

// zad 

class KalkulatorProsty {
    static add = (a, b) => a+b;
    static subtract = (a, b) => a-b;
    static multiply = (a, b) => a*b;
    static divide = (a, b) => ( (b == 0) ? NaN : a/b );
    static sqrt = (a) => ( (a < 0) ? NaN : Math.sqrt(a) );
}
 
console.log(KalkulatorProsty.add(10,2));
console.log(KalkulatorProsty.subtract(10,2));
console.log(KalkulatorProsty.multiply(10,2));
console.log(KalkulatorProsty.divide(10,2));
console.log(KalkulatorProsty.sqrt(4));
