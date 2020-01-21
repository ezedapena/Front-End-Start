console.log("Starting javascript...");
console.log("-------JavaScripts Basics-------")
console.log("---Exercise 1---"); //Muestra nombre
var name = "Ezequiel Dapena";
console.log(name);

console.log("---Exercise 2---"); //Muestra edad
var age = 19;
console.log(age);

console.log("---Exercise 3---"); //Muestra diferencia de edad con Ignasi
var ignasiAge = 32;
var ageDiff = ( ignasiAge - age)
console.log(ageDiff)

console.log("---Exercise 4---") //Muestra si sos mayor a 21
if (age > 21){
    console.log("You are older than 21");
}else{
    console.log("You are not older than 21")
}
console.log("---Exercise 5---") //Muestra tu edad comparada a la de Ignasi
if (age < ignasiAge) {
    console.log("Ignasi is older than you")
}else{
    if (age > ignasiAge) {
        console.log("Ignasi is youger than you")
    } else {
    console.log("You have the same age as Ignasi")    
    }
}
console.log("-------JavaScrips Array Functions-------")

console.log("---Exercise 1---") //Nombres de compañeros ordenados
var start = ["Rodrigo", "Branko", "Jose", "Nico Fresco", "Elias", "Agustin", "Nico Sauco", "Meji", "Lucio", "Ivan", "Teo", "Eri", "Lean", "Nahue J", "Ariel", "Diego", "Alan", "Lucas Isaac", "Roman", "Ro", "Gian", "Lucas Herrmann", "Mati", "Edu", "Gabi", "Nahue L", "Ezequiel" ];
start.sort();
console.log("First: " + start[0]);
console.log("last: " + start[start.length-1]);
console.log("   Nombres de la clase ordenados alfabeticamente:")
for (var i = 0 ; i < start.length ; i++){
    console.log("-" + start[i]);
}

console.log("---Exercise 2---") //Edades de START Program
var ageStart = [32, 26, 18, 20, 20, 17, 17, 20, 20, 21, 21, 19, 20, 19, 21, 19, 19, 23, 23, 23, 22, 25, 22, 17, 18, 18, 18]
console.log("---Ages from Start program---")
for (var i = 0 ; i < ageStart.length ; i++){
    console.log(ageStart[i]);
}
console.log("---Pair ages from Start program---")
for (var i = 0 ; i < ageStart.length ; i++){
    if ( (ageStart[i]%2)==0){
        console.log(ageStart[i]);
    }
}



