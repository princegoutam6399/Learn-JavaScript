// count the total number of characters in a string 
// var str="People";
// console.log(str.length);

// count the total number of characters in a string 
// var str="People";
// console.log(str.length);

// count the total number of characters in a string 2
// var str="People";
// var count=0;
// for(let i=0;i<str.length;i++){
//     count++;
// }
// console.log(count);

// count the total number of punctuation characters exists in a String
// var str="UFHTD(* &TF) (*&W^F JH)(*$$ %JHV";
// var count=0;
// for(let i=0;i<str.length;i++){
//     if(((str[i]>='A')&&(str[i]<='Z'))||(str[i]==' ')){
//         count++;
//     }
// }
// console.log("Punctuation and Spacial Characters Are : "+(str.length-count))


// count the total number of vowels and consonants in a string
// var str="People";
// var vowel=0;
// var consonant=0;
// for(let i=0;i<str.length;i++){
//     if((str[i]=='a')||(str[i]=='e')||(str[i]=='i')||(str[i]=='o')||(str[i]=='u')){
//         vowel++;
//     }else
//     consonant++;
// }
// console.log("Number Of Vowels",vowel);
// console.log("Number Of Consonent",consonant);

// determine whether two strings are the anagram 
// var str1="LISTEN";
// var str2="SILENT";
// var count=0;
// if(str1.length==str2.length){
//     for(let i=0;i<str1.length;i++){
//         for(let j=0;j<str2.length;j++){
//             if(str1.charAt(i)==str2.charAt(j)){
//                 str2=str2.replace(str2.charAt(j),"$");
//                 count++;
//                 break;
//             }
//         }
//     }
//     if(count==str1.length){
//         console.log("Anagram");
//     }else{
//         console.log("Not Anagram");
//     }
// }else{
//     console.log("Not Anagram");
// }


// divide a string in 'N' equal parts.
// var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var num = 2;
// var no = str.length/num;
// var i=0;
// for(let m=0;m<num;m++){
//     console.log(str.substring(i,no));   
//     i=i+2;
//     no=no+2;
// }

//  find all subsets of a string
//  ABC : A B C AB BC ABC
// var str="ABC";
// for(let i=1;i<=str.length;i++){
//     for(let j=0;j<str.length;j++){
//         if((j+i)<=str.length)
//             console.log(str.substring(j,j+i));
//         else
//             break;
//     }        
// }

// find the longest repeating sequence in a string
// var str = "ABCDBACDABCDFS";
// var temp = "";
// for (let i = 0; i < str.length; i++) {
//     for (let j = i+1; j < str.length; j++) {
//             if(str.charAt(i)==str.charAt(j)){
//                 let x=i;
//                 for(let m=j+1;m<str.length;m++){
//                     if(str.charAt(m)==str.charAt(x++)){
//                         temp = str.substring(j,m+1);
//                     }
//                 }
//             }
//     }
// }
// console.log(temp);


// remove all the white spaces from a string
// var str="The Lazy Fox";
// for(let i=0;i<str.length;i++){
//     if(str[i]==" "){
//         str=str.replace(" ","");
//     }
// }
// console.log(str);

// replace lower-case characters with upper-case and vice-versa
// var str = "The Lazy Dog";
// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) != " ") {
//         if ((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 122)) {
//             str = str.replace(str.charAt(i), String.fromCharCode(((str.charCodeAt(i)) - 32)));
//         } else {
//             str = str.replace(str.charAt(i), String.fromCharCode(((str.charCodeAt(i)) + 32)));
//         }
//     }
// }
// console.log(str);

// replace the spaces of a string with a specific character
// var str="The Lazy Dog";
// for(let i=0;i<str.length;i++){
//     if(str[i]==" "){
//         str=str.replace(" ","$");
//     }
// }
// console.log(str);

// determine whether a given string is palindrome
// var str="BAMAN";
// var start=0;
// var stop=str.length-1;
// var flag=1;
// while(start<stop){
//     if(str[start]!=str[stop]){
//         flag=0;
//         break;
//     }
//     start++;
//     stop--;
// }
// if(flag==1){
//     console.log("String Is Palindrome");
// }else{
//     console.log("String Is Not Palindrome");
// }

// determine whether one string is a rotation of another
// var str1 = "ABCD";
// var str2 = "BCDA";
// var flag = 0;
// for(let i=0;i<str1.length;i++){
//     let temp=str1.substring(i)+str1.substring(0,i);
//     if(temp==str2)
//         flag=1;
// }
// if(flag==0)
//     console.log("Not Rotation");
// else
//     console.log("is Rotation");

// // maximum and minimum occurring character in a string
// var str="SASAFSAFFFAASADAFAFDAFA";
// var max=0;
// var min=str.length;
// var maxchar="";
// var minchar="";
// for(let i=0;i<str.length;i++)
// {
//     let count=1;
//     for(let j=i+1;j<str.length;j++)
//     {
//         if((str.charAt(i)==str.charAt(j))&&(str.charAt(j)!="$"))
//         {
//             count++;
//             str=str.substring(0,j)+"$"+str.substring(j+1);
//         }
//     }
//     if(str.charAt(i)!="$"){
//         if(max<count)
//         {
//             maxchar=str.charAt(i);
//             max=count;
//         }
//         if(min>count)
//         {
//             minchar=str.charAt(i);
//             min=count;
//         }
//     }
// }
// console.log(max,maxchar);
// console.log(min,minchar);


// Reverse of the string

// var str = "ABCDE";
// var rev="";
// for(let i=str.length-1;i>=0;i--)
//     rev=rev+str.charAt(i);
// console.log(rev);

// find the duplicate characters in a string
// var str="ABBCHKJLSJKLS";
// var dupli="";
// for(let i=0;i<str.length;i++){
//     let count=1;
//     for(let j=i+1;j<str.length;j++){
//         if((str.charAt(i)==(str.charAt(j)))&&(str.charAt(i)!="$")){
//             count++;
//             str=str.substring(0,j)+"$"+str.substring(j+1);
//         }
//     }
//     if(count>1){
//         console.log("Duplicate Character String",str.charAt(i));
//     }
// }


// find the duplicate words in a string
// var str="Aman is my Brother and Aman is a good boy";
// var strarr = str.split(" ");
// for(let i=0;i<strarr.length;i++)
// {
//     for(let j=i+1;j<strarr.length;j++)
//         if(strarr[i]==strarr[j])
//             console.log(strarr[i]);
// }

// find the duplicate words in a string second method
// var str="Aman is my Brother and Aman is a good boy";
// var strarr=[];
// var temp="";
// var m=0;
// for(let i=0;i<=str.length;i++)
// {
//     if((str.charAt(i)==" ")||(i==(str.length)))
//     {
//         strarr[m]=temp;
//         m++;
//         temp="";
//     }
//     else
//     {
//         temp=temp+str.charAt(i);
//     }
// }
// for(let i=0;i<strarr.length;i++)
// {
//     for(let j=i+1;j<strarr.length;j++)
//     {
//         if(strarr[i]==strarr[j])
//             console.log(strarr[i]);
//     }
// }



// find the frequency of characters
// var str="KJDKJDGKDGKJDGKDJGKJD";
// for(let i=0;i<str.length;i++){
//     var count=1;
//     for(let j=i+1;j<str.length;j++){
//         if((str.charAt(i)==str.charAt(j))){
//             count++;
//             str=str.substring(0,j)+"$"+str.substring(j+1);
//         }
//     }
//     if(str.charAt(i)!="$")
//         {
//             console.log(str.charAt(i)+" Frequency : "+count);
//         }
// }

// find the largest and smallest word in a string
// var str = "The lazy Dog Jump Over The Brown Fox";
// var strArr = str.split(" ");
// var sm = strArr[0];
// var lg = strArr[0];
// for(let i=0;i<strArr.length;i++)
// {
//     if(sm.length>strArr[i].length)
//         sm=strArr[i];
//         if(lg.length<strArr[i].length)
//         lg=strArr[i];
// }
// console.log(sm);
// console.log(lg);
// most repeated word in a string
// var str = "aman is a good boy aman is my brother and he is in 12th class";
// var strarr = str.split(" ");
// var rep = "";
// var temp=0;
// for (let i = 0; i < strarr.length; i++) {
//     let count = 1;
//     for (let j =i+1; j < strarr.length; j++) {
//         if (strarr[i] == strarr[j]) {
//             count++;
//         }
//     }
//     if(count>temp)
//         {
//             temp=count;
//             rep=strarr[i];
//         }
// }
// console.log("Most Repeated Word ",rep);


// Seprate an individual Character from String
// var str = "naman is my friend";
// let char = "n";
// for(let i=0;i<str.length;i++)
// {
//     if(str.charAt(i)==char)
//     {
//         str = str.substring(0,i)+"b"+str.substring(i+1);      
//     }
// } 
// console.log(str);

// swap two string variables without using third or temp variable
// var str1 = "Hello";
// var str2 = "India";
// str1 = str1+str2;
// str2 = str1.substring(0,str2.length);
// str1 = str1.substring(str2.length);
// console.log(str1);
// console.log(str2);

// Linear Search in JavaScript
// var arr=[12,34,54,67];
// var num=54;
// var flag=0;
// for(let i=0;i<arr.length;i++){
//     if(num==arr[i]){
//         flag=1;
//     }
// }
// if(flag==1){
//     console.log("Number is Linear Serach")
// }else{
//     console.log("Number Is Not Linear Search");
// }

//  Binary Search in JavaScript
// var arr=[12,23,34,45,56,67,78,89];
// var num = 45;
// var start=0;
// var end=arr.length-1;
// var flag=0;
// while(start<=end)
// {
//     let mid = parseInt((start+end)/2);
//     if(arr[mid]==num){
//         console.log("Number Found on Position : "+mid);
//         flag=1;
//     }
//     if(num>arr[mid])
//         start=mid+1;
//     else   
//         end=mid-1;
// }
// if(flag==0)     
//     console.log("Number is Not Found!");

// Bubble Sort in JavaScript
//  var arr=[12,47,67,21,89,22];
//  for (let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         var temp=0;
//         if(arr[i]>arr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
//  }
//  console.log(arr);


//  Selection Sort in JavaScript
// var arr=[5,3,7,4,1,8,4,2,3,9,5,6];
// var val=0;
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i;j<arr.length;j++)
//     {
//         if(arr[val]>arr[j])
//             val=j;
//     }
//     let temp=arr[i];
//     arr[i]=arr[val];
//     arr[val]=temp;
// }
// console.log(arr);

// Insertion Sort in JavaScript
// var arr=[2,4,9,2,1,5,6,8];
// for(let i=0;i<arr.length;i++){
//     let index=i;
//     for(let j=i;j<arr.length;j++)
//     {
//         if(arr[index]>arr[j])
//         {
//             let temp = arr[index];
//             arr[index]=arr[j];
//             arr[j]=temp;
//             index=j;
//         }
//     }
// }
// console.log(arr)

// How to convert String to int

