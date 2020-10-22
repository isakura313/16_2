const arr = [1, 2, 4];

//bad function
// function sqrt(ar){
//     arr = ar.map((el)=>{
//         return el*2;
//     })
// }

//good function
function sqrt(ar){
    let arr_2 = [...ar];
    arr_2 = arr_2.map((el) =>{
        return el**2;
    })
    return arr_2;
}

//best function
const arr_2 = arr.map(el=> el**2);

console.log(sqrt(arr))
console.log(arr_2)
console.log(arr);
