
//for each
console.log("foreach method")
let num = [1,2,3,4,5,6]

num.forEach((n) => {
    console.log(n);

});

console.log("filters")
//filter

let num1 = [1,2,3,4,5,6]
num.filter(n1 => n1%2===0)
.forEach(n1 => {
    console.log(n1)
});
console.log("map")

let num2 = [1,2,3,4,5,6]
num.filter(n2 => n2%2===0)
.map(n2 => n2*2)
.forEach(n2 => {
    console.log(n2)
});

console.log("reduce")

let num3 = [1,2,3,4,5,6,7,8,9]

let result = num.filter(n3 => n3%2===0)
.map(n3 => n3*2)
.reduce((a,b) =>(a+b))

console.log(result);
 
console.log("tostring")

let string = ['naveen','swaroop','somesh','akhil']

 let output = string.toString();
    console.log(output)

    console.log("join")

      let op = ['nav','swa']

      res = op.join(',');
      console.log(res)

