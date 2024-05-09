// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]



function destructivelyAppendCat(cat){
    cats.push(cat)
}

function destructivelyPrependCat(name) {
    cats.unshift(name); 
}


function destructivelyRemoveLastCat() {
    cats.pop(); 
}

function destructivelyRemoveFirstCat() {
    cats.shift(); // Remove the first cat from the array
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}