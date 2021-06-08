let Lightbulb = function (name) {


    this.get = function () {
        this.name = name;
        this.power = +prompt('Мощность лампы Вт');
        this.costEnergy = +prompt('Стоимость электричества, кВт/ч');
        this.workTime = +prompt('Время работы лампы для рассчета')
        if (confirm('Включить лампочку?')) {
            this.work = 1;
        } else {
            this.work = 0;
        }
        this.operation();
    };

    this.operation = function () {
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;

        this.showMe();
    };

    this.showMe = function () {
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log('Лампочка ' + this.name + ' не включена');
        } else {
            console.log('Лампочка ' + this.name + ' проработала - ' + this.workTime + 'ч, и стоимость = ' + this.result + 'р.');
        }
    };


}


let kitchen = new Lightbulb('kitchen');
console.log(kitchen);
//kitchen.get();
//let totalCost = kitchen.result;

//console.log('Затраты на электричесво - ' + totalCost);

//--------------------------------------------------------------------------------------------------------------------------------



/*
let Calculate = function (name) {
    this.name = name;

};

Calculate.prototype = kitchen;     //Прототипно





let calculatePrice = new Calculate();

calculatePrice.get = function () {
    calculatePrice.name = prompt('Название вашей железяки');
    this.power = +prompt('Мощность устройства Вт');
    this.costEnergy = +prompt('Стоимость электричества, кВт/ч');
    this.workTime = +prompt('Время работы для рассчета');
    if (confirm('Включить устройство?')) {
        this.work = 1;
    } else {
        this.work = 0;
    }
    this.operation();
};

calculatePrice.repeat = function () {
    if (confirm('Добавим устройство?')) {
        calculatePrice.get();
    } else return;

};


calculatePrice.showMe = function () {
    if (this.workTime == 0 || this.workTime == undefined || this.work == 0) {
        console.log('Устройство ' + this.name + ' не включено');
        return calculatePrice.result = 0;
    } else {
        console.log('Устройство ' + this.name + ' время работы - ' + this.workTime + 'ч,' + ' стоимость = ' + Math.round(calculatePrice.result) + 'р.');
    }
    calculatePrice.repeat();
};


calculatePrice.get();

console.log(calculatePrice);


*/



//----------------------------------------------------------------------------------------------------




let Calculate = function (name) {
    this.name = name;
    Lightbulb.apply(this);     //Функционально

};

let calculatePrice1 = new Calculate();

calculatePrice1.get = function () {
    calculatePrice1.name = prompt('Название вашей железяки');
    this.power = +prompt('Мощность устройства Вт');
    this.costEnergy = +prompt('Стоимость электричества, кВт/ч');
    this.workTime = +prompt('Время работы для рассчета');
    if (confirm('Включить устройство?')) {
        this.work = 1;
    } else {
        this.work = 0;
    }
    this.operation();
};

calculatePrice1.repeat = function () {
    if (confirm('Добавим устройство?')) {
        calculatePrice1.get();
    } else return;

};


calculatePrice1.showMe = function () {
    if (this.workTime == 0 || this.workTime == undefined || this.work == 0) {
        console.log('Устройство ' + this.name + ' не включено');
        return calculatePrice1.result = 0;
    } else {
        console.log('Устройство ' + this.name + ' время работы - ' + this.workTime + 'ч,' + ' стоимость = ' + Math.round(calculatePrice1.result) + 'р.');
    }
    calculatePrice1.repeat();
};


calculatePrice1.get();
