/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
var i = 2, number=600851475143;
while (i <= number) {
    if (number % i == 0) {
        number /= i;
    } else {
        i++;
    }
    document.write(number);
    document.write("\n");
}

//answer is 6857
