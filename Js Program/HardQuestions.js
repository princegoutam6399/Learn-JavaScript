// Keith Number
// 19 : (Fibonacci Series)
// 1 9 10 19 (Keith)
// 197: (Fibonacci Series)
// 1 9 7 17 33 53 103 197 (Keith)
// 23 : (Fibonacci Seriess)
// 2 3 5 8 13 21 34 (Not Keith) 

// var num = 19;
// var temp = num;
// var len = (""+num).length;
// var arr={};
// for(let i=len-1;i>=0;i--)
// {
//     arr[i]=temp%10;
//     temp=parseInt(temp/10);

// }
// var sum = 0;
// var flag=0;
// while(sum<num){
//     sum=0;
//     for(let i=0;i<len;i++)
//         sum=sum+arr[i];
//     if(sum==num)
//         flag=1;
//     for(let i=0;i<len-1;i++)
//         arr[i]=arr[i+1];
//     arr[len-1]=sum;
// }
// if(flag==1)
//     console.log(num,"Is Keith");
// else
//     console.log("Not Keith")

// Neon Number
// var num =1;
// var sq=num*num;
// var sum=0;
// for(let i=0;i<sq;sq=parseInt(sq/10))
//     sum=sum+sq%10;
// if(num==sum)
//     console.log("Neon Number");
// else
//     console.log("Not Neon Number");

// Spy Number
// var num = 1214;
// var m = 1;
// var s = 0;
// for(let i=0;i<num;num=parseInt(num/10))
// {
//     m=m*num%10;
//     s=s+num%10;
// }
// if(m==s)
//     console.log("Spy Number");
// else
//     console.log("Not Spy Number");

//  Autobiographical  Number
// 1210
// 0123
// var num = 1210;
// var str = ""+num;
// var len = str.length;
// var arr = {};
// for(let i=0;i<len;i++){
//     count=0;
//     for(let j=0;j<len;j++){
//         if(i==str.charAt(j))
//             count++;
//     }
//     arr[i]=count;
// }
// var flag=1;
// for(let m=0;m<len;m++){
//     if(arr[m]!=str.charAt(m))
//         flag=0;
// }
// if(flag==1)
//     console.log("Autobiographical Number");
// else
//     console.log("Not Autobiographical Number");
// console.log(arr);

// // Emirp Number 
// function Prime(num){
//     for (let i = 2; i <= num / 2; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
// return true;
// }
// function Reverse(num){
//     let temp = num;
//     var rev = 0;
//     for (let i = 0; num>i; num = parseInt(num / 10)) {
//         let rem = num % 10;
//         rev = rev * 10 + rem;
//     }
//     return rev;
// }
// var num = 13;
// if((Prime(num))&&Prime(Reverse(num)))
//     console.log("Emirp");
// else
//     console.log("Not Emirp")


// Sphenic Number 
// function Prime(num){
//     for (let i = 2; i <= num / 2; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// var num = 231;
// var temp = 1;
// var count=0;
// for(let i=2;i<=num/2;i++){
//     if(num%i==0)
//         if(Prime(i)){
//             temp=temp*i;    //231
//             count++;        //3
//         }
//         if(count==3)
//         break;
// }
// if(num==temp)
//     console.log("Sphenic");
// else
//     console.log("Not Sphenic")

// Buzz Number 
// function buzz(num){
//     if((num%10==7)||(num%7==0)){
//         console.log("Number Is Buzz");
//     }else{
//         console.log("Number Is Not Buzz");
//     }
// }
// var num=42;
// buzz(num);

// Duck Number 
// var num = "7065";
// var flag=0;

// console.log(num.indexOf('0'));
// if((num.indexOf('0')==0)||(num.indexOf('0')==-1))
//     console.log("Number is Not Duck")
// else
//     console.log("Number is Duck");


// Evil Number 
// var num = 9; // 11001 Not Evil Number , 27 : 11011
// var count = 0;
// while (num > 0) {
//     if (num % 2 == 1)
//         count++;
//     num = parseInt(num / 2);
// }
// if (count % 2 == 0)
//     console.log("Number Is Evil");
// else
//     console.log("Number Is Not Evil");


// var num=9;
// var count=0;
// while(num>0){
//     if(num%2==1)
//     count++;
// num=parseInt(num/2)
// }
// if(count%2==0){
//     console.log("Evil")
// }else{
//     console.log("Not Evil")
// }

//  Krishnamurthy Number

// function fact(x){
//     var f = 1;
//     for(let i =1;i<=x;i++)
//         f=f*i;
//     return f;
// }

// var num=145;
// var temp=num;
// var sum=0;
// for(let i=1;i<=num;num=parseInt(num/10)){
//     sum=sum+fact(num%10);
// }
// if(temp==sum){
//     console.log("Number Is Krishnamurthy");
// }else{
//     console.log("Number Is Not Krishnamurthy");
// }

// function fact(x){
//     var  f=1;
//     for(let i=1;i<=x;i++){
//         f=f*i;
//     }
//     return f;
// }

// var num=145;
// var temp=num;
// var sum=0;
// for(let i=1;i<=num;num=parseInt(num/10)){
//     sum=sum+fact(num%10);
// }
// if (temp==sum){
//     console.log("Krishnamurthy");
// }else{
//     console.log("Not krishnamurthy");
// }


// Bouncy Number 
// var num = 319;
// var str = ""+num;
// var flag = 1;
// if(str.length>1){
//     if(str.charAt(0)>str.charAt(1))
//     {
//         for(let i=0;i<str.length-1;i++)
//             if(!(str.charAt(i)>str.charAt(i+1)))
//                 flag=0;
//     }else{
//         for(let i=0;i<str.length-1;i++)
//             if(!(str.charAt(i)<str.charAt(i+1)))
//                 flag=0;
//     }
// }
// if(flag==1)
//     console.log("Number is Not Bouncy");
// else
//     console.log("Number is Bouncy");



// // Mystery Number 
// function rev(num){
// var rev=0;
// for(let i=0;i<num;num=parseInt(num/10)){
//     let rem=num%10;
//     rev=rev*10+rem;
// }
// return rev;
// }

// var no = 22;
// var flag = 0;
// if(no>10){  
//     for(let i=1;i<=parseInt(no/2);i++){
//         if((i+rev(i))==no)
//         {
//             flag=1;
//             console.log(i+" and "+(rev(i))+" = "+no);
//         }
//     }
//     if(flag==0)
//     console.log("Not A Mystry Number");
// }else{
//     console.log("It is not a Mystry Number");
// }


// Smith Number 

// function prime(num){
//     for(let i=2;i<=num/2;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// function sum(num){
//     var sum=0;
//     for(let i=0;i<num;num=parseInt(num/10))
//         sum=sum+num%10;
//     return sum;
// }
// var num=634;
// var temp=num;
// var i=2;
// var numFdigit = 0;
// while(num>1){
//     if(num%i==0){
//         if(prime(i))
//         {
//             numFdigit = numFdigit+sum(i);
//             num = parseInt(num/i);
//             console.log(i)
// ;            i=1;
//         }
//     }
//     i=i+1;
// }
// if(sum(temp)==numFdigit)
//     console.log("Smith");
// else
//     console.log("Not Smith");

// Strontio Number
// var num=1221;
// if((num>=1000)&&(num<=9999))
//     {
//         num = num*2;
//         if((parseInt(num/10)%10)==((parseInt(num/100))%10))
//             console.log("Strontio");
//         else
//             console.log("Not Strontio");
//     }
// else{
//     console.log("Not Strnotio");
// }

// Xylem and Phloem Number 
// var num = 34326;
// var temp = num;
// var xy=0;
// var ph=0;
// while(num>0){
//     if((num==temp)||(num<10))
//         xy=xy+num%10;
//     else
//         ph=ph+num%10;
//     num=parseInt(num/10);   
// }
// if(xy==ph)
//     console.log("Xylem");
// else
//     console.log("Pholem");


