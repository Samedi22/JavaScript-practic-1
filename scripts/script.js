var year = 2026;

var mercedes = {
    name: "Mercedes",
    model: "GL450",
    engine: 4.0,
    year: 2015,
    color: "black",
    hp: 300,
    forSale: true,
}

mercedes.carAge = year - mercedes.year;

var bmw = {
    name: "BMW",
    model: "X6",
    engine: 3.0,
    year: 2023,
    color: "white",
    hp: 313,
    forSale: false,
}

bmw.carAge = year - bmw.year;

var audi = {
    name: "Audi",
    model: "Q7",
    engine: 3.0,
    year: 2025,
    color: "blue",
    hp: 249,
    forSale: true,
}

audi.carAge = year - audi.year;

var names = [
    {name: "Mercedes", model: "GL450"},
    {name: "BMW", model: "X6"},
    {name: "Audi", model: "Q7"}];

averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;

var atLeastOneForSale = mercedes.forSale || bmw.forSale || audi.forSale;
var allYoungerThanFive = mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5;
var atLeastOneHasLittleHp = mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250;

alert(mercedes.carAge)
alert(bmw.carAge)
alert(audi.carAge)
alert('Марка и модель всех авто - ' + mercedes.name + ' ' + mercedes.model + ', ' + bmw.name + ' ' + bmw.model + ', ' + audi.name + ' ' + audi.model);
alert('Средний возраст всех авто - ' + averageAge);
alert('Хотя бы один автомобиль продаётся? - ' + atLeastOneForSale);
alert('Все авто младше 5 лет? - ' + allYoungerThanFive);
alert('Хотя бы один автомобиль имеет меньше 250 л.с.? - ' + atLeastOneHasLittleHp);

var car = bmw;

if (car.name === "Mercedes" && car.model === "GL450") {
    alert("Мой любимый мерседес!");
} else {
    alert("Это - " + car.name + " " + car.model);
}

if (car.carAge == 0) {
    alert("Новый автомобиль");
} else if (car.carAge <= 3) {
    alert("Свежий автомобиль");
} else {
    alert("Лет этому авто: " + car.carAge);
}

var consumption = car.engine > 3.0 ? "Прожорливый автомобиль" : "Экономичный автомобиль";
alert(consumption);

var russianColor;
switch (car.color) {
    case "black":
        russianColor = "черный";
        break;
    case "silver":
        russianColor = "серебристый";
        break;
    case "red":
        russianColor = "красный";
        break;
    case "white":
        russianColor = "белый";
        break;
    case "gray":
        russianColor = "серый";
        break;
    case "blue":
        russianColor = "синий";
        break;
    default:
        russianColor = "Невозможно определить цвет автомобиля";
}
alert(russianColor);

//var car =  mercedes;

