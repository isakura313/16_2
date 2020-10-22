function step(x, y, z){
    if(x > z){
        return
    }
    x += y
    console.log(x)
    step(x, y, z)
}

step(10, 5, 100)
