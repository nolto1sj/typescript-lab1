var kilimanjaro = {
    name: "Kilimanjaro",
    height: 19341
};
var everest = {
    name: "Everest",
    height: 29029
};
var denali = {
    name: "Denali",
    height: 20310
};
var mountains = [kilimanjaro, everest, denali];
function findNameOfTallestMountain(arr) {
    var highestMountainHeight = Math.max.apply(Math, arr.map(function (m) { return m.height; }));
    var result = arr.filter(function (m) { return m.height === highestMountainHeight; });
    return result[0].name;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var apple = {
    name: "Apple",
    price: 1.99
};
var carrot = {
    name: "Carrot",
    price: 0.99
};
var cheese = {
    name: "Cheese",
    price: 4.50
};
var products = [apple, carrot, cheese];
function calcAverageProductPrice(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i].price;
    }
    return total / arr.length;
}
var average = calcAverageProductPrice(products);
console.log(average);
var motor = {
    name: "motor",
    price: 10.00
};
var sensor = {
    name: "sensor",
    price: 12.50
};
var led = {
    name: "LED",
    price: 1.00
};
var motorItem = {
    product: motor,
    quantity: 10
};
var sensorItem = {
    product: sensor,
    quantity: 4
};
var ledItem = {
    product: led,
    quantity: 20
};
var inventory = [motorItem, sensorItem, ledItem];
function calcInventoryValue(arr) {
    var total = 0;
    function findItemPriceTotal(item) {
        return item.price;
    }
    for (var i = 0; i < arr.length; i++) {
        total += arr[i].quantity * findItemPriceTotal(arr[i].product);
    }
    return total;
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
