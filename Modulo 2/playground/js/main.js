num = 886123715
text = "Art is worth the pain"
console.log("Starting javascript...");
console.log("-------JavaScripts Basics-------")
console.log("---Exercise 1---"); //Muestra nombre
var myName = "Ezequiel Dapena";
console.log(myName);

console.log("---Exercise 2---"); //Muestra edad
var myAge = 19;
console.log(myAge);

console.log("---Exercise 3---"); //Muestra diferencia de edad con Ignasi
var ignasiAge = 32;
var ageDiff = ( ignasiAge - myAge)
console.log(ageDiff)

console.log("---Exercise 4---") //Muestra si sos mayor a 21
if (myAge > 21){
    console.log("You are older than 21");
}else{
    console.log("You are not older than 21")
}
console.log("---Exercise 5---") //Muestra tu edad comparada a la de Ignasi
if (myAge < ignasiAge) {
    console.log("Ignasi is older than you")
}else{
    if (myAge > ignasiAge) {
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
console.log("   Names from START ordered alphabetically:")
for (var i = 0 ; i < start.length ; i++){
    console.log("-" + start[i]);
}

console.log("---Exercise 2---") //Edades de START Program
var startAges = [32, 26, 18, 20, 20, 17, 17, 20, 20, 21, 21, 19, 20, 19, 21, 19, 19, 23, 23, 23, 22, 25, 22, 17, 18, 18, 18]
console.log("---Ages from Start program---")
for (var i = 0 ; i < startAges.length ; i++){
    console.log(startAges[i]);
}
console.log("---Pair ages from Start program---")
for (var i = 0 ; i < startAges.length ; i++){
    if ( (startAges[i]%2)==0){
        console.log(startAges[i]);
    }
}

console.log("---Exercise 3---")//Mostrar numero menos

var array1 = [10,9,8,7,6,1,2,3,4,5]
var array2 = [41,432,25,5,25,2,52,76,127]
var resultLower

function showLower(array)
{
    var flag=array[0];
    for (var i=0;i<array.length;i++)
    if(flag>array[i]){
        flag=array[i];
    }
    return flag;
}
resultLower=showLower(array2)
console.log("The lower number is: " + resultLower)

console.log("---Exercise 4---")
var resultHigher
function showHigher(array){
    var flag=array[0];
    for (var i=0;i<array.length;i++)
    if(flag<array[i]){
        flag=array[i];  
    }
    return flag;
}
resultHigher=showHigher(array2)
console.log("The higher number is: " + resultHigher)
console.log("---Exercise 5---")//Imprime en valor del array en la posicion index
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100,23,6,6,6,6];
var index = 1;
function showPosition(array,index){
    if ( index >= array.length ){
        console.log('The number of the array in the index position is: "undefined"')
    }else{
        console.log("The number of the array in the index position is: " + array[index]);
    }  
}
showPosition(array,index)

console.log("---Exercise 6---")//Imprime los valores que se repiten

function repeatedNumbers (array){
    let pushedArray = []
    for(var i = 0 ; i < array.length ; i++ ){
        if ( array.indexOf(array[i]) !=i && pushedArray.indexOf(array[i]) == -1 ){
            pushedArray.push(array[i])
        }
    }
    for ( let elements of pushedArray ){ // Imprime elementos del array hasta que llegue a la ultima posicion
        console.log(elements)
    }
}
repeatedNumbers(array)

console.log("---Exercise 7---") //Juntar un array de string en una variable string

myColor = ["Red", "Green", "White", "Black"]
function joinString (array){
    console.log('"' + array.join('","') + '"' )
}
joinString(myColor)

console.log("-------JavaScript String Functions-------")
console.log("---Exercise 1---")
function reverseString(num){
    num = num.toString()
    var reversed = ''
    for ( let i = num.length - 1 ; i >=0 ; i--){
        reversed += num[i]
    }
    console.log( num + " / " + reversed)
}
reverseString(num)


console.log("---Exercise 2---")
function orderAlphabetically(string){
    let splittedString = string.split("").sort().join("")
    console.log(splittedString)
}
orderAlphabetically(text)

console.log("---Exercise 3---")
function capitalize(string){
    let capitalized = string.split(" ")
    for (let i = 0 ; i < capitalized.length ; i++){
       capitalized[i] =  capitalized[i].charAt(0).toUpperCase() + capitalized[i].substring(1)
    }
     capitalized = capitalized.join(" ")
    console.log("Original text: " + string)
    console.log("Capitalized text: " + capitalized)
}
capitalize('prince of persia')

console.log("---Exercise 4---")
function showLongestWord(string){
    let splittedWord = string.split(" ")
    let longerWord = splittedWord[0]
    for ( let i = 1 ; i < splittedWord.length ; i++){
        if (splittedWord[i].length > longerWord.length ){
            longerWord = splittedWord[i]
        }
    }
    console.log("The longer word of the text is: " + longerWord)
}
showLongestWord(text)

