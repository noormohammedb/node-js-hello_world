var ar = [4,3,2,1]

console.log(ar);

for(i=0;i<ar.length;i++)
{
    for(j=i+1;j<ar.length;j++)
    {
        if(ar[i] > ar[j])
        {
            temp = ar[i];
            ar[i] = ar[j];
            ar[j] = temp;
        }
    }
}
console.log(ar);