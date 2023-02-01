let A=[0,2,1,2,3,4,5,6,4,3,5,7,8,9,10]
let sum=0;
let c=0;
for(i=1;i<A.length;i++){
  if(A[i]%2==0){
    sum+=A[i];
    c++;
  }
}
console.log(sum/c);