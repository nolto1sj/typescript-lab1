//Tallest Mountain
interface Mountain {
    name: string;
    height: number;
}

let kilimanjaro = {
    name: "Kilimanjaro",
    height: 19341
};
let everest = {
    name: "Everest",
    height: 29029
};
let denali = {
    name: "Denali",
    height: 20310
};

let mountains: Mountain[] = [kilimanjaro, everest, denali];

function findNameOfTallestMountain(arr: Mountain[]): string {
    let highestMountainHeight: number = Math.max(...arr.map(function(m: Mountain) {return m.height}))
    let result = arr.filter(m => m.height === highestMountainHeight);
    return result[0].name;
}

let tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

//Products
interface Product {
    name: string;
    price: number;
}

let apple = {
    name: "Apple",
    price: 1.99
};
let carrot = {
    name: "Carrot",
    price: 0.99
};
let cheese = {
    name: "Cheese",
    price: 4.50
};

let products: Product[] = [apple, carrot, cheese];

function calcAverageProductPrice(arr: Product[]): number {
    let total: number = 0;
    for (let i: number = 0; i < arr.length; i++){
        total += arr[i].price ;
    }
    return total / arr.length;
}

let average: number = calcAverageProductPrice(products);
console.log(average);

//Inventory
interface InventoryItem{
    product: Product;
    quantity: number;
}

let motor = {
    name: "motor",
    price: 10.00
};
let sensor = {
    name: "sensor",
    price: 12.50
};
let led = {
    name: "LED",
    price: 1.00
};

let motorItem = {
    product: motor,
    quantity: 10
};
let sensorItem = {
    product: sensor,
    quantity: 4
};
let ledItem = {
    product: led,
    quantity: 20
};

let inventory: InventoryItem[] = [motorItem, sensorItem, ledItem]

function calcInventoryValue(arr: InventoryItem[]): number {
    let total: number = 0;
    
    function findItemPriceTotal(item: Product): number {
        return item.price
    }

    for(let i: number = 0; i < arr.length; i++){
       total += arr[i].quantity * findItemPriceTotal(arr[i].product);
    }
    return total;
}

let inventoryValue: number = calcInventoryValue(inventory);
console.log(inventoryValue);


