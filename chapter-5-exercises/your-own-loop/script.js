function loop(val, test, update, body) {
    if(test(val)){
        body(val)
    }else{
        return 0
    }
    return loop(update(val), test, update, body)
}



loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1