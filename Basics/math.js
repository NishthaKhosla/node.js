//single object export
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

//exporting a object to prevent override and we can do it only once.
module.exports={
add,
subtract,
};