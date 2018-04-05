
function add(int1, int2){
    let result = int1 + int2
    console.log(result)
}
function subtract(int1, int2){
    let result = int1 - int2
    console.log(result)
}

function calculate(int1, int2, operation){
    operation(int1,int2);
}

add(3,5)
add(9,14)
subtract(14,6)
subtract(5,1)

calculate(100, 99, add)
calculate(100,99,subtract)