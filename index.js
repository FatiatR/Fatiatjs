//Number 1 
function calc(firstnumber,secondnumber,operator)

{
    if (operator==="+")
    {
        return firstnumber+secondnumber; 
    }
    else if (operator==="-")
    {
        return firstnumber-secondnumber;
    }
    else if (operator==="*")
    {
        return firstnumber*secondnumber;
    }
    else if (operator==="/")
    {
        return firstnumber/secondnumber;
    }
    else if (operator==="%")
    {
        return firstnumber%secondnumber;
    }
}
const returnedValue= calc(3,8,"*");
let finalValue=returnedValue.toFixed(2);
console.log(finalValue);

//Number 2
