// Take the object as array

const menu = [
    {
        name: "Plain Rice & Chicken Jhal Fry",
        price: 100
    },
    {
        name: "Grill & 1 Butter Nan",
        price: 150
    },
    {
        name: "Chicken Chap & 1 Parata ",
        price: 130
    },
    {
        name: "Butter Nan",
        price: 30
    },
    {
        name: "Parata",
        price: 20
    },
    {
        name: "BBQ Kabab",
        price: 180
    },
    {
        name: "Singara Per Pieces",
        price: 5
    },
    {
        name: "Chamucha Per Piece",
        price: 5
    },
    {
        name: "Halim Standard",
        price: 80
    },
    {
        name: "Halim Premium",
        price: 150
    },
]

    const menuContainer = document.getElementById('menu');

menu.forEach(item=>{

    //Declearing a div for menu
    const menuItem = document.createElement('div');
    menuItem.className ='menuItem';

    //Declearing a span for food name and price
    const foodName = document.createElement('span');
    foodName.className = 'foodName';
    foodName.textContent = item.name;

    const foodPrice = document.createElement('span');
    foodPrice.className = 'foodPrice';
    foodPrice.textContent = `${item.price}tk`;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodPrice);
    menuContainer.appendChild(menuItem); 
});