var samsungA52={
    brand:"samsung",
    price:24000,
    band:"4g",
    dispaly="amoled",
    processor="snapdragon"
}
var samsungA52s={
    price:34000,
    band:"5g"
}
samsungA52s.__proto__=samsungA52
console.log(samsungA52s.dispaly);