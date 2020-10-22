const x = 10;
function getSquare(){
    console.log(this)
    let x = 20;
    return this[x] * this[x]
}
console.log(getSquare())
