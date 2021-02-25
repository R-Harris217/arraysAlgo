var num = [6,3,5,1,2,4]
var sum = 0;
for(let i=0; i<6; i++){
    sum+=num[i];
    console.log("Num",num[i],"Sum",sum);
}

for(let i=0; i<6; i++){
    num[i] = num[i] * i;
}
console.log(num)