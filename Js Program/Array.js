
// copy all elements of one array into another array
// var arr=[12,34,65,21];
// var copy=[];
// for(let i=0;i<arr.length;i++ ){
//     copy[i]=arr[i];
// }
// copy[1]=64;
// console.log(arr);
// console.log(copy);

// var arr = [52, 34, 65, 21];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++)
//         if (arr[j] > arr[j + 1]) {
//             let copy = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = copy;
//         }
// }
// console.log(arr)


// How to find max value in array
// var arr=[23,83,45,53,98];
// var max = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i])
//         max=arr[i];
// How to Sort an Array with Bubble Sort
// }
// console.log(max)


// find the frequency of each element in the array
// var arr=[2,3,3,2,2,2,2,3,3,4,4,5,4,2,2,3,2,2];
// for(let i=0;i<arr.length;i++){
//     let count = 1;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++;
//             arr[j]=-1;
//         }
//     }
//     if(arr[i]!=-1)
//         console.log(arr[i]+" Frequency is : "+count);
// }

//  left rotate the elements of an array
// var arr = [23,45,67,89];
// var rotation = 3;
// for(let i=1;i<=rotation;i++){
//     var temp = arr[0];
//     for(var j=0;j<arr.length-1;j++){
//         arr[j]=arr[j+1];
//     }   
//     arr[j]=temp;
// }
// console.log(arr);

// Right Rotation
// let arr = [23,34,56,67,56,78];
// let rotation = 1;
// for(let i=1;i<=rotation;i++){
//     let temp = arr[arr.length-1];
//     for(var j=arr.length-1;j>0;j--)
//             arr[j]=arr[j-1];
//     arr[j]=temp;
// }
// console.log(arr);


// print the duplicate elements of an array 
// var arr = [2, 3, 2, 4, 5, 3, 3, 2];
// for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             count++;
//             arr[j] = -1;
//         }
//     }
//     if ((count > 0) && (arr[i] != -1)) {
//         console.log(arr[i]);
//     }
// }


// print the elements of an array 
// var arr=[12,34,54,76];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// print the elements of an array in reverse order 
// var arr=[12,34,54,76];
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }

// print the elements of an array present on even position
// var arr=[12,45,65,88,10]
// for(let i=0;i<=arr.length;i++){
//     if(i%2==0){
//         console.log(arr[i],"Position is Even");
//     }
// }


// print the elements of an array present on odd position 
// var arr=[12,45,65,88,10]
// for(let i=0;i<arr.length;i++){
//     if(i%2!=0){
//         console.log(arr[i],"Position is Odd");
//     }
// }

// print the largest element in an array 
// var arr=[12,45,65,88,10];
// var max = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i])
//         max=arr[i];
// }
// console.log("largest Number is",max);

// print the smallest element in an array 
// var arr=[12,45,65,88,10];
// var min=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(min>arr[i])
//         min=arr[i];

// }
// console.log("Small Number",min);

// print the number of elements present in an array 
// var arr=[24,56,34,31,90];
// console.log(arr.length);

// print the sum of all the items of the array 
// var arr=[2,3,4,6,1];
// var sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log(sum);

// Find 3rd Largest Number in an array 
// var arr=[12,45,56,21,43,23,12];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j]<arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }

// }
// console.log("3rd Largest Number : "+arr[2]);


// Find 2nd Largest Number in an array 
// var arr = [12, 45, 56, 21, 43, 23, 12];
// for (let i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log("Secend Largest Number", arr[1])

// Remove Duplicate Element in an array 
// var arr = [2,4,2,4,3,5,5,3,3,3,4,5];
// var size = arr.length;
// for(let i=0;i<size;i++){
//     for(let j=i+1;j<size;j++){
//         if((arr[i]==arr[j])&&(arr[i]!=-1)){
//             arr[j]=-1;
//         }
//     }
// }
// for(let i=0;i<size;i++)
//     if(arr[i]!=-1)
//         console.log(arr[i]);

// Print Odd and Even Numbers from an array 
// var arr=[12,43,33,44,82];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i],"Even")
//     }else{
//         console.log(arr[i],"Odd");
//     }
// }

