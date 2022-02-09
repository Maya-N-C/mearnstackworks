var num=2;
var i=1;
low=8;
upp=36;
while(i<=upp){ //i<=36 2<=36 t 3<=36 t
    let res=i**num;//res=1**2=1 2**2=4 3**2=9
    if(res>=low && res<=upp){//1>=8 f 4>=8 f 9>=8
        console.log(i);
}
    i++;//2 3
}
