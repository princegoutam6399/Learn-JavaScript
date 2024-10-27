// a=10;

// if(a>18){
//     console.log("You Can Vote");
// }else{
//     console.log("You Can Not Vote");
// }


// for(num=0;num<=a;num++){
//     console.log(num);
// }


// let num=0;
// if(num%2==0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

// for(num=0;num<=a;num++){
//     if(num%2==0){
//         console.log(num+"num is even");
//     }else{
//         console.log(num +"num is Odd");
//     }
// }

// Check Number Is Prime Or Not 

// var num = 72;
// var count=0;
// for(let i=1;i<=num;i++)
//     if(num%i==0)
//         count++;
// if(count==2)
//     console.log("Prime");
// else
//     console.log("Not Prime");


//  Time Complexity : N

// second methods
// var num = 75;
// var flag = 1;
// for(let i=2;i<=num/2;i++)
//     if(num%i==0){
//         flag=0;
//         break;
//     }
// if(flag==1)
//     console.log("Prime");
// else
// console.log("Not Prime");
// Time Complexity : N/2


// var num=11;
// var flag=1;
// for(let i=2;i<=num/2;i++)
//     if(num%i==0){
//         flag=0;
//         break;
//     }
// if(flag==1){
//     console.log("Number Is Prime");
// }else{
//     console.log("Number Is Not Prime");
// }




// Print Fibonacci series
// var num = 0;
// var num2 = 1;

// for(let i=0;i<10;i++){
//     var copy = num+num2;
//     console.log(copy);
//     num=num2;
//     num2=copy;
// }



// Print Factorial of a Number
// var num=7;
// var fact=1;
// for(let i=2;i<=num;i++){
//     fact=fact*i;
// }
// console.log(fact);


// Patterns Program
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(""+i);
//     }
//     console.log();
// }
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(""+j);
//     }
//     console.log();
// }


// *            1           1
// **           22          12
// ***          333         123
// ****         4444        1234
// *****        55555       12345
// for(let i=1;i<=5;i++){
//     for(let j=5;j>i;j--){
//         process.stdout.write(" ");
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }



//     *
//    **
//   ***
//  ****
// *****
// for(let i=1;i<=5;i++){
//     for(let j=5;j>i;j--){
//         process.stdout.write(" ");
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//         *
//        * *
//       * * *
//      * * * *
//     * * * * *

// function fact(num){
//     if(num==1)
//     return 1;
//     else
//     return num*fact(num-1);
// }
// console.log(fact(6));

// Write a program to print sum of digits 

// var sum=0;
// for(let i=1;i<=200;i++){
//     sum=sum+i;
// }
// console.log(sum);

// second methods
// var range = 100;
// var sum = range*(range+1)/2;
// console.log(sum);


// var start = 101;
// var stop = 200;
// var sum = stop*(stop+1)/2-(start-1)*(start-1+1)/2;
// console.log(sum);


// How to reverse a number
// HINT : num = 123 , reverse = 321
// var num = 121;
// var rev=0;
// for(let i=0;i<num;num=parseInt(num/10)){
//     let rem=num%10;
//     rev=rev*10+rem;
// }
// console.log(rev);


// Check Number Is Palindrome

// var num=123;
// var temp=num;
// var rev=0;
// for(let i=0;i<num;num=parseInt(num/10)){
//     let rem=num%10;
//     rev=rev+rem;
// }
// console.log("Number : "+temp);
// console.log("Reverse : "+rev);
// if(temp==rev)
//     console.log("Palindrome");
// else
//     console.log("Not Palindrome");


// Check Number Is Leap Year or Not

// var num =2012;
// if(num%4==0){
//     console.log("Leap Year ");
// }else{
//     console.log("Not A Leap Year");
// }

// Revere A string
// var str = "BAMAN";
// var str2="";
// for(let i=str.length-1;i>=0;i--)
//     str2=str2+str[i];
// console.log("String : "+str);
// console.log("Reverse : "+str2);
// if(str==str2)
//     console.log("Palindrone")
// else
//     console.log("Not Palindrome")


// var str = "BAMAN";
// let start = 0;
// let stop = str.length-1;
// var flag = 1;
// while(start<stop)
// {
//     if(str[start]!=str[stop]){
//         flag=0;
//         break;
//     }
//     start++;
//     stop--;
// }
// if(flag==1)
//     console.log("Palindrome");
// else
//     console.log("Not Palindrome");


// SWAP OF TWO NUMBERS
// var a = 10;
// var b = 20;
// let temp = a;
// a = b;
// b = temp;
// console.log(temp);
// console.log("a=",a);
// console.log("b=",b);

    
// SWAP OF TWO NUMBERS WITHOUT USING 3rd VARIABLE

// a=30;
// b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

// SWAP OF TWO NUMBERS WITHOUT USING 3rd VARIABLE WITHOUT USIING +,-
// a=10;
// b=20;
// a=a*b;
// b=a/b;
// a=a/b;
// console.log(a);
// console.log(b);


// SWAP OF TWO NUMBERS WITHOUT USING 3rd VARIABLE WITHOUT USIING ARIHMETIC Operator
// a=10;
// b=20;
// a=a^b;
// b=a^b;
// a=a^b;
// console.log(a);
// console.log(b);

// this is XOR operator


// Learn Array


// arr = [12, 53, 23, 43]
// console.log(arr.sort());
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         var temp=0;
//         if (arr[i] < arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr)

// console.log(arr.indexOf(23));
// console.log(arr.splice(2));


// Print Table Of A Number 
// var num=5;
// for(let i=1;i<=10;i++){
//     console.log(i*num);
// }

// Print Table Of A Number these format 5*1=5[x]
// var num=5;
// for(let i=1;i<=10;i++){
//     console.log(num,"*",i,"=",num*i);
// }
// Check Number Is Ngative Or Positive or Zero
// var num = 10;
// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// }else{
//     console.log("Number Is Zero");
// }

