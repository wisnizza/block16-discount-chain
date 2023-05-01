 //given objects and parameter
 const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// calculate totalCost =pricePerRefill * refills
function cost(obj){
    return obj.pricePerRefill * obj.refills; 
}
// change the object to test
const totalCost = cost(sarah)

//if  subscription is true subtract subscription with totalCost-(totalCost*.25)
function lessSubscription(totalCost, obj){
    if (obj.subscription === true){
    	return totalCost - (totalCost * 0.25)
    }
    return totalCost;
}
// change the object to test
const withSubs = lessSubscription(totalCost, sarah);

// if coupon true subtract  totalCost with 10
function lessCoupon(totalCost, obj){
    if (obj.coupon === true){
    	return totalCost - 10;
    }
    return totalCost;
}
 // change the object to test
const withCoupon = lessCoupon(withSubs, sarah);

//print "Your grand total is ${finalAmount}." 
console.log(`Your grand total is $${withCoupon}.`);