
let passord = 123;



let x = 1;
while (x <= 3) {
    let person = Number(prompt("Please enter your password"));
    if (passord == person) {
        document.write("Velkommen :)")
        break;
    }
    console.log(x);
    if (x == 3) {
        document.write(" Ikke Velkommen :(");
        break;  
    }

    x++;
   
}



