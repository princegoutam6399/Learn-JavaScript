// Factor of digits 

// var num=765;
// for(let i=0;i<num;num=parseInt(num/10)){
//         console.log(num%10);
// }

// var num = 765;
// var sum = 0;
// for (let i = 0; i < num; num = parseInt(num / 10)) {
//     sum = sum + num % 10;
// }
// console.log(sum);

// Multiply Numbers 
// var num = 765;
// var mul = 1;
// for (let i = 0; i < num; num = parseInt(num / 10)) {
//     mul = mul * (num % 10);
// }
// console.log(mul);

// Armstorng Number 

// var num = 23;
// var mul = 1;
// var sum=0;
// for (let i = 0; i < num; num = parseInt(num / 10)) {
//     sum = sum + num % 10;
//     mul = mul * (num % 10);
// }
// if(mul==sum){
//     console.log("Armstrong");
// }else{
//     console.log("Not Armstrong");
// }

// Armstorng Number 

// var num = 23;
// var mul = 1;
// var sum=0;
// for (let i = 0; i < num; num = parseInt(num / 10)) {
//     sum = sum + num % 10;
//     mul = mul * (num % 10);
// }
// if(mul==sum){
//     console.log("Armstrong");
// }else{
//     console.log("Not Armstrong");
// }

// Print ASCII value 
// var a = 'A'
// console.log(a.codePointAt(0)); 



// Automorphic Number 
// var num =76;
// var sq=num*num;
// console.log("Number : ",num);
// console.log("Square : ",sq);
// var flag=1;
// while(num>0){
//     if(num%10!=sq%10)
//         flag=0;
//     num=parseInt(num/10);
//     sq=parseInt(sq/10);
// }
// if(flag==1)
//     console.log("Automorphic");
// else
//     console.log("Not Automorphic");



// CHECK NUMBER IS PETERSON 

// function fact(n){
//     let f=1;
//     for(let i=1;i<=n;i++)
//         f=f*i;
//     return f;
// }
// var num=145;
// var temp=num;
// var sum=0;
// for(let i=0;i<num;num=parseInt(num/10)){
//     sum=sum+fact(num%10);
// }
// if(temp==sum)
// console.log("Peterson Number");
// else
// console.log("Not Peterson Number");


// Sunny Number 

// var num = 8;
// var newNum = num + 1;
// var flag = 0;
// for (let i = 1; i <= newNum / 2; i++)
//     if (i * i == newNum)
//         flag = 1;
// if (flag == 0)
//     console.log("Number is not Sunny");
// else
//     console.log(" Number Is Sunny ", num);

// Tech Number 

// var num = 2025;
// var len = (""+num).length;
// if(len%2==0){
//     var div = Math.pow(10,len/2);
//     var fnu = parseInt(num/div);
//     var lnu = num%div;
//     var sum = fnu+lnu;
//     var sq = sum*sum;
//     if(sq==num)
//         console.log("Tech Number");
//     else   
//         console.log("Not Tech Number");   
// }else{
//     console.log("Number is Not Tech")
// }


// Facinating Number 

// var num = 192;
// var str = ""+num+num*2+num*3;
// console.log("Number : "+num)
// console.log("String : "+str);
// let count=0;
// for(let i=1;i<=9;i++){
//     for(let j=0;j<str.length;j++){
//         if(i==str.charAt(j)){
//             count++;
//             break;
//         }
//     }
// }
// if(count==9)
//     console.log("Number is Facinating")
// else
//     console.log("Number is not Fascinating")


