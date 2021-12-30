//its a tradition to write class names 
//.. starting letter with caps
class Car {
    constructor(name, wheels, doors,engine){
        this.name = name;
        this.wheels = wheels;
        this.doors = doors;
        this.engine = engine;
    }
} 

//class is like blueprint, which we can resue from 
// .. below statements.

//below statments to create an object is 
//..called instantiating an object
const ferrari = new Car("Ferrari", 4, 2, "v4"); 
const venue = new Car("venue", 4, 4, "Inline-4");
const bmwx6 = new Car("bmw_x6", 4, 4, "v6");
const toyota_lc = new Car("toyota_lc", 4, 5, "v8");

// we are creating object by calling class in above 
//.. statements. which will first call constructor in the
//.. class.

console.log(ferrari, typeof ferrari);
console.log(venue, typeof venue);
console.log(bmwx6, typeof bmwx6);
console.log(toyota_lc, typeof toyota_lc);


class Account {
    constructor(aname, accno, balance){
        this.aname = aname;
        this.accno = accno;
        this.balance = balance;
    }
    //class method or member functions,
    getBalance(){
        return `${this.aname}, your balance is: ₹${this.balance}`;
    }
    withDraw(amount){
        if(this.balance >= amount) {
            this.balance = this.balance - amount;
            return this.getBalance();
        }
        else {
            return `Insufficient balance. ${this.getBalance()}`;
            }
    }
    deposit(amount){
        this.balance = this.balance + amount;
            return this.getBalance();
        }
}

const professor = new Account("professor", 1234, 50000);
const tokyo = new Account("tokyo", 5678, 250000);
const berlin = new Account("berlin", 2121, 3000);

console.log(professor);
console.log(tokyo);
console.log(berlin);

console.log(professor.getBalance());
console.log(tokyo.getBalance());
console.log(berlin.getBalance());

console.log(professor.withDraw(5000));
console.log(tokyo.withDraw(100000));
console.log(berlin.withDraw(4000));

console.log(berlin.deposit(10000));

const getCountries = () => {
    //creating the request object
    const xhr = new XMLHttpRequest();
    //reading the data
    //Method, URL
    xhr.open("GET", "https://restcountries.com/v3.1/all"); //opens the url with get request method
    xhr.send(); //sends the request object
    
    xhr.responseType = "json" //data format
    
    //to print the data on console,
    xhr.onload = () => {
        const countries = xhr.response;
        const countrynames = countries.map((country) => country.name.common);
    
        // var spac = countries.filter((cn) => cn.name.common == "Colombia");
        const spac = countries.filter(cn => cn.languages == "spa: Spanish");
        // const spac = countries.reduce((spa1,ctr) => spa1.languages == "spa:Spanish" ? spa1 : "query failed" );
    
    
        const onecplus = countries.filter((coun) => coun.population >= 10000000);
    
        
        console.log("Full Data", countries, countrynames);
    
        console.log("Spanish Speaking countries", spac);
        
        console.log("1c plus population", onecplus);
        
        };
    };
    
    getCountries();
    
    