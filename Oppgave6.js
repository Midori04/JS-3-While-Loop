var sum = 0;

do {
    var number = Number(prompt("skriv et tall"));
    if (number != 0) {
        sum = sum + number;
    } else {
        console.log('Summen er ',sum);
        break;
    }
} while (true);
