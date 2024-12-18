const menu = {
    Grill: 130,
    Kabab: 180,
    Nan: 30,
    Singara: 5,
    Chamucha: 5,
    Beef_Biriyani: 180,
    Chicken_Biriyani: 150,
    Jhal_Fry: 120,
    Chicken_Chap: 110
}

const menuContainer = document.getElementById('menu');
const foodName = document.createElement('span');
foodName.className = 'foodName';
foodName.textContent = Object.keys(menu.Beef_Biriyani);

const foodPrice = document.createElement('span');
foodPrice.className = 'foodPrice';
foodPrice.textContent = menu.price;

menuItem.appendChild(foodName);
menuItem.appendChild(foodPrice);
