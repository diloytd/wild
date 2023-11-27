// ФУНКЦИОНАЛ С БУРГЕР МЕНЮ


const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu__icon");
const body = document.body;
const menuCls = document.querySelector(".menu__close")
if (menu && menuBtn){
    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("active");
        menuBtn.classList.toggle("active");
        body.classList.toggle("lock");
        menuCls.classList.toggle("active")
    }
    
    )
}

// ФУНКЦИОНАЛ С КНОПКАМИ-СЧЁТЧИКАМИ

let cart = {
    "tshirt1":{
        "price" : 522,
        "count" : 1
    },
    "phone":{
        "price1" : 10500,
        "count1" : 1,
    }  ,
    "pencil":{
        "price2" : 247,
        "count2" : 1,
    }  ,
}

 

// Кол-во товаров в корзине в header

let countGoods = ["tshirt1","phone","pencil"];

let navBasket = document.querySelector(".navbar-pc__notify");
let countLenght = countGoods.length;
navBasket.innerHTML = countLenght

// Кол-во товаров в корзине в header









let massivGoods = [1];
let massivPhone = [1];
let massivPencil = [1];



// основные переменные
let btnResult = document.querySelector(".btn-result");
let btnResultOne = document.querySelector(".btn-resultOne");
let btnResultTwo = document.querySelector(".btn-resultTwo");

let firstCurrentPrice = document.querySelector(".main__basket_product_result-price");
let secondCurrentPrice = document.querySelector(".second__basket_product_result-price");
let firstMinus = document.querySelector(".main__basket_product_count_button-minus");
let firstPlus = document.querySelector(".main__basket_product_count_button-plus");
let secondPlus = document.querySelector(".second__basket_product_count_button-plus");
let secondMinus = document.querySelector(".second__basket_product_count_button-minus");
let currentPrice = document.querySelector(".current_price");
let currentPrice1 = document.querySelector(".current_price1");
let currentPrice2 = document.querySelector(".current_price2");





let btnBlock = document.getElementById("block")
let BlockPlus = document.getElementById("BlockPlus")

let penPlus = document.getElementById("penPlus");
let penMinus = document.getElementById("penMinus")

let phoneMinus = document.getElementById("phoneMinus");
let phonePlus = document.getElementById("phonePlus")
// ПРИ НАЖАТИИ НА КНОПКУ + И - СРАБАТЫВАЕТ УВЕЛИЧЕНИЕ И УМЕНЬШЕНИЕ ТОВАРА, УВЕЛИЧ. И УМЕНЬШ. ЦЕНЫ.

document.addEventListener("click", function (Event) {
    console.log(Event.target.classList);
    if(Event.target.classList.contains ("plus")){
         plusFunction(Event.target.dataset.id);
         currentPricePlus(Event.target.dataset.id) 
   }
   if(Event.target.classList.contains ("minus")){
    minusFunction(Event.target.dataset.id);
    currentPriceMinus(Event.target.dataset.id)
}});






// прибавлять КОЛ-ВО товар
const plusFunction = id => {
        if (id === "tshirt1" ) {
        cart.tshirt1["count"] ++;
    massivGoods.push(["count"] );
    btnResult.innerHTML = massivGoods.length;
    
    }

    if (massivGoods.length === 1) {btnBlock.disabled = true;}
    if (massivGoods.length === 2 ){BlockPlus.disabled = true;}
 if (massivGoods.length > 1){btnBlock.disabled = false;}

 if (massivGoods.length < 2 ){BlockPlus.disabled = false;}


     if (id === "phone"){
        cart.phone["count1"] ++;
     massivPhone.push(["count1"]);
     btnResultOne.innerHTML = massivPhone.length;
     renderCart();
    }

if(massivPhone.length === 1){phoneMinus.disabled = true};
if(massivPhone.length > 1){phoneMinus.disabled = false};
    
    


if (id === "pencil"){
    cart.pencil.count2 ++;
massivPencil.push(["count2"]);
btnResultTwo.innerHTML = massivPencil.length
}

if (massivPencil.length === 1 ){penMinus.disabled = true;}
if(massivPencil.length > 1) {penMinus.disabled = false};
if(massivPencil.length === 2){penPlus.disabled= true};
if(massivPencil.length < 2){penPlus.disabled = false}; 

};
    
    const renderCart = () => {
    console.log(cart);
    };
    
   
   
   
   
   
   
    // уменьшать КО-ВО товар
    const minusFunction = id => {
        // if (cart[id] > 0) {
        //     cart[id]--;
            if (id === "tshirt1") {
               massivGoods.pop();
                btnResult.innerHTML = massivGoods.length;
               
            }


      
    if (massivGoods.length === 1) {btnBlock.disabled = true;}
    if (massivGoods.length > 1){btnBlock.disabled = false;}
    if (massivGoods.length === 2 ){BlockPlus.disabled = true;}
    if (massivGoods.length < 2 ){BlockPlus.disabled = false;}
             
             

            if (id === "phone") {
                massivPhone.pop(["count1"]);
                btnResultOne.innerHTML = massivPhone.length;
            }

            if(massivPhone.length === 1){phoneMinus.disabled = true};
            if(massivPhone.length > 1){phoneMinus.disabled = false};


            if (id === "pencil"){
                cart.pencil.count2 --;
            massivPencil.pop(["count2"]);
            btnResultTwo.innerHTML = massivPencil.length
            }
if (massivPencil.length === 1 ){penMinus.disabled = true;}
if(massivPencil.length > 1) {penMinus.disabled = false};
if(massivPencil.length === 2){penPlus.disabled= true};
if(massivPencil.length < 2){penPlus.disabled = false}; 


            
    renderCart();
            renderCart();
        }
    ;

    
    
    
    
    
    
    // ИЗМЕНЕНИЕ ЦЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ ПЛЮС И МИНУС
    // ИЗМЕНЕНИЕ ЦЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ ПЛЮС И МИНУС
    // ИЗМЕНЕНИЕ ЦЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ ПЛЮС И МИНУС
    // ИЗМЕНЕНИЕ ЦЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ ПЛЮС И МИНУС
    
    
    
    
    
    
    let mobCart = {
        "tshirt":{
            "price" : 522,
            "count" : 1
        },
        "phoneMob":{
            "price1" : 10500,
            "count1" : 1,
        }  ,
        "pencilMob":{
            "price22" : 247,
            "count2" : 1,
        }  ,
    }
    
 let massivGoodsMoney = [522];
let massivPhoneMoney = [10500];
let massivPencileMoney = [247];

let massivGoodsMoneyMob = [522];
let massivPhoneMoneyMob = [10500];
let massivPencileMoneyMob = [247];

let mobPlus = document.querySelector(".mobPlus");
let mobMinus = document.querySelector(".mobMinus");
// let btnResult = document.querySelector(".btn-result");
let mobPriceCurrent = document.querySelector(".mobPriceCurrent");


mobPlus.addEventListener("click", function() {
    let sum = mobCart.tshirt.price;
    for (let i = 0; i < massivGoodsMoneyMob.length; i++) {
    sum = sum + massivGoodsMoneyMob[0];
if(massivGoodsMoneyMob[2]){break};};
  
    massivGoodsMoneyMob.push(sum);
    mobPriceCurrent.innerHTML = `${massivGoodsMoneyMob[massivGoodsMoneyMob.length - 1]}`;
});

 
mobMinus.addEventListener("click", function(){
let sumMinus = mobCart.tshirt.price;
for(let i= massivGoodsMoneyMob.length - 1; i <massivGoodsMoneyMob.length; i--)
{

 sumMinus =   sumMinus - massivGoodsMoneyMob[0];
  if(massivGoodsMoneyMob[0]){break};
        }
    massivGoodsMoneyMob.pop(sumMinus);
    mobPriceCurrent.innerHTML = `${massivGoodsMoneyMob[massivGoodsMoneyMob.length - 1]}`;
     })


 let mobPriceCurrentPhone = document.querySelector(".mobPriceCurrentPhone");
  let mobCurrentPricePhonePlus = document.querySelector(".mobCurrentPricePhonePlus");
  let mobCurrentPricePhoneMinus = document.querySelector(".mobCurrentPricePhoneMinus");

  mobCurrentPricePhonePlus.addEventListener("click", function(){
    let phonePrice = mobCart.phoneMob.price1;
    for ( let i = 0; i < massivPhoneMoneyMob.length; i++){
    phonePrice = phonePrice + massivPhoneMoneyMob[0]
    };
    massivPhoneMoneyMob.push(phonePrice);
    mobPriceCurrentPhone.innerHTML = massivPhoneMoneyMob[massivPhoneMoneyMob.length - 1];
  })

  mobCurrentPricePhoneMinus.addEventListener("click", function(){
    let phonePriceMin = mobCart.phoneMob.price1;
for (let i = massivPhoneMoneyMob.length - 1; i < massivPhoneMoneyMob.length; i--)
{
    phonePriceMin = phonePriceMin - massivPhoneMoneyMob[0];
     if(massivPhoneMoneyMob[0]){break}
}
massivPhoneMoneyMob.pop(phonePriceMin);
mobPriceCurrentPhone.innerHTML =`${massivPhoneMoneyMob[massivPhoneMoneyMob.length - 1]}`;
});

let mobCurrentPricePencil = document.querySelector(".mobCurrentPricePencil");

let mobCurrentPricePenPlus = document.querySelector(".mobCurrentPricePenPlus");

let mobCurrentPricePenMinus = document.querySelector(".mobCurrentPricePenMinus");


mobCurrentPricePenPlus.addEventListener("click", function(){
    let moneyPen = mobCart.pencilMob.price22;
    for (let i = 0; i < massivPencileMoneyMob.length; i++){
        moneyPen = moneyPen + massivPencileMoneyMob[0];
        if(massivPencileMoneyMob[0]) {break};
    }
    massivPencileMoneyMob.push(moneyPen);
    mobCurrentPricePencil.innerHTML =  `${massivPencileMoneyMob[massivPencileMoneyMob.length - 1]}`;
})


mobCurrentPricePenMinus.addEventListener("click", function(){
    let moneyPenMin = mobCart.pencilMob.price22;
    for (let i = massivPencileMoneyMob.length - 1; i < massivPencileMoneyMob; i--){
    moneyPenMin = moneyPenMin - massivPencileMoneyMob[0];
    if(massivPencileMoneyMob[0]) {break}}

    massivPencileMoneyMob.pop(moneyPenMin);
    mobCurrentPricePencil.innerHTML =  `${massivPencileMoneyMob[massivPencileMoneyMob.length - 1]}`;
})


// ИЗМЕНЕНИЕ ЦЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ ПЛЮС И МИНУС КОНЕЦ
// ИЗМЕНЕНИЕ ЦЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ ПЛЮС И МИНУС КОНЕЦ 
// ИЗМЕНЕНИЕ ЦЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ ПЛЮС И МИНУС КОНЕЦ
// ИЗМЕНЕНИЕ ЦЕНЫ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ ПЛЮС И МИНУС КОНЕЦ









// ИЗМЕНЕНИЕ ЦЕНЫ ПРИ КОЛ-ВЕ ТОВАРА (ПЛЮС)
    // ПЛЮС
    const currentPricePlus = id => {
        if (id === "tshirt1") {
                let money = cart.tshirt1.price;
                for (let i = 0; i < massivGoodsMoney.length; i++) {
                  money = money + massivGoodsMoney[0];
                }
                massivGoodsMoney.push(money);
                currentPrice.innerHTML = `${massivGoodsMoney[massivGoodsMoney.length - 1]} COM`;}
                           
                if (id === "phone")
                {
                    let phonePrice = cart.phone.price1;
                    for ( let i = 0; i < massivPhoneMoney.length; i++){
                        phonePrice = phonePrice + massivPhoneMoney[0];
                      
               }
               massivPhoneMoney.push(phonePrice);
               currentPrice1.innerHTML = `${massivPhoneMoney[massivPhoneMoney.length - 1]} COM`}
               
               if (id === "pencil"){

                let pencilPrice = cart.pencil.price2;
                for(let i = 0; i < massivPencileMoney.length; i++){
                    pencilPrice = pencilPrice + massivPencileMoney[0];
                }
                massivPencileMoney.push(pencilPrice);
                currentPrice2.innerHTML = `${massivPencileMoney[massivPencileMoney.length - 1]}  COM`
                
 }};

// ИЗМЕНЕНИЕ ЦЕНЫ ПРИ КОЛ-ВЕ ТОВАРА (МИНУС)

    // МИНУС
               const currentPriceMinus = id => {
                if (id === "tshirt1"){
                    let money = cart.tshirt1.price;
                    for (let i = 0; i < massivGoodsMoney.length; i++) {
                      money = money - massivGoodsMoney[0];
                    }
                    massivGoodsMoney.pop(money);
                    currentPrice.innerHTML = `${massivGoodsMoney[massivGoodsMoney.length - 1]} COM`;
                }
                if (id === "phone"){
                    let phonePrice = cart.phone.price1;
                    for ( let i = 0; i < massivPhoneMoney.length; i++){
                        phonePrice = phonePrice - massivPhoneMoney[0];
                      
               }
               massivPhoneMoney.pop(phonePrice);
               currentPrice1.innerHTML = `${massivPhoneMoney[massivPhoneMoney.length - 1]} COM`
                }
                if (id === "pencil"){

                    let pencilPrice = cart.pencil.price2;
                    for(let i = 1; i < massivPencileMoney.length; i++){
                        pencilPrice = pencilPrice - massivPencileMoney[0];
                    }
                    massivPencileMoney.pop(pencilPrice);
                    currentPrice2.innerHTML = `${massivPencileMoney[massivPencileMoney.length - 1]}  COM`
               }}
    
    
    
    
    
    
    
    // УДАЛЯТЬ ПОЛНОСТЬЮ ТОВАР С КОРЗИНЫ С ПОМОЩЬЮ КНОПКИ 


const btnDelete = document.querySelector(".main__basket_product_delete_btn");
const btnDelete2 =document.querySelector(".second__basket_product_delete_btn");
const btnDelete3 = document.querySelector(".thirty__basket_product_delete_btn");
const delOne = document.querySelector(".delFirst");
const delSec = document.querySelector(".delSec")
const delthree = document.querySelector(".delthree")

btnDelete.addEventListener("click", function(event) {
    let delt = document.getElementById("delt");
    if (delt) {
        delt.remove();
    }
});

btnDelete2.addEventListener("click", function(event){
    let second = document.getElementById("second");
    if (second) {
        second.remove();
    }
})

btnDelete3.addEventListener('click', function (event){
    let thirty = document.getElementById("thirty");
    if(thirty) {
        thirty.remove();
    }

})
delOne.addEventListener("click", function(){
    let onedel = document.getElementById("firstSection");
    onedel.remove();
})

delSec.addEventListener("click", function(){
    let twodel = document.getElementById("secondDel");
    twodel.remove();
})

delthree.addEventListener("click", function(){
    let threedel = document.getElementById("thirtyDel");
    threedel.remove();
})

// УДАЛЯТЬ ПОЛНОСТЬЮ ТОВАР С КОРЗИНЫ С ПОМОЩЬЮ КНОПКИ 


// CHECKBOX ВЫБРАТЬ ВСЁ

function checkAll() {
   
    // Получаем NodeList дочерних элементов input формы: 
    let items = document.querySelectorAll(".choose");
   let chooseAll = document.querySelector(".chooseAll");
    // Здесь, увы цикл по элементам формы:
    for (let i = 0; i < items.length; i++) {
      // Если текущий элемент является чекбоксом...
      if ((items[i].type === "checkbox" && chooseAll.type === "checkbox")) {
        //  если checkbox "Выбрать всё" - отмечен            
        if (chooseAll.checked) {
          // Отмечаем все чекбоксы...
          items[i].checked = true;
        
        } else {
          // Иначе снимаем отметки со всех чекбоксов:
          items[i].checked = false;
        }     
        
      }
    }}
   

// CHECKBOX ВЫБРАТЬ ВСЁ

// КНОПКА ДЛЯ ЗАКРЫТИЯ СЕКЦИИ ОТСУТСВУЮЩИХ ТОВАРОВ

    const btnCls = document.querySelector('.tittleAbsenceGoods__btn');
 const clsMenu = document.querySelector(".absence_main__basket");
    
    btnCls.addEventListener("click", function(){
clsMenu.classList.toggle("close")
    })


    // КНОПКА ДЛЯ ЗАКРЫТИЯ СЕКЦИИ ОТСУТСВУЮЩИХ ТОВАРОВ


    
    // КНОПКА ДЛЯ ЗАКРЫТИЯ СЕКЦИИ  ТОВАРОВ
    let mainBasketTitleBtn = document.querySelector(".main__basket_title_btn")

    let closeSection = document.querySelector(".closeSection")
    
    mainBasketTitleBtn.addEventListener("click", function(){
      
    closeSection.classList.toggle("open");
        
    
    })

  // КНОПКА ДЛЯ ЗАКРЫТИЯ СЕКЦИИ  ТОВАРОВ



    //  МОДАЛЬНОЕ ОКНО ОТДЕЛА ДОСТАВКИ

   let asideChangeDelivery = document.getElementById("asideChangeDelivery");
 let opnModal = document.getElementById("opnModal");
let clsModalBox = document.getElementById ("clsModalBox");
let asideChangePayCard = document.getElementById("asideChangePayCard");

    opnModal.addEventListener("click", function(){
        let modalDelevery = document.getElementById("modalDelevery");
        modalDelevery.classList.add("opn")
    })

    clsModalBox.addEventListener("click", function(){
        let modalDelevery = document.getElementById("modalDelevery");
        modalDelevery.classList.remove("opn")
    })

    body.onclick = function(event) {
        if (event.target === modalDelevery) {
        modalDelevery.classList.remove("opn");
        }}

        asideChangeDelivery.addEventListener("click", function(){
            let modalDelevery = document.getElementById("modalDelevery");
            modalDelevery.classList.add("opn")
        })
    
    //  МОДАЛЬНОЕ ОКНО ОТДЕЛА ДОСТАВКИ
   
        let opnPaymentSection = document.getElementById("opnPaymentSection");

        let paymentModalBoxBtn = document.getElementById("payment_modal_box_btn");



        // ОТКРЫТИЕ МОДАЛЬНОГО ОКНА С ОПЛАТОЙ
        opnPaymentSection.addEventListener("click", function(){
        let paymentModal = document.querySelector(".payment_modal");
        paymentModal.classList.add("open")
        })

        asideChangePayCard.addEventListener("click", function(){
            let paymentModal = document.querySelector(".payment_modal");
            paymentModal.classList.add("open")
            })
// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА С ОПЛАТОЙ



// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
paymentModalBoxBtn = document.querySelector(".payment_modal_box_btn")

paymentModalBoxBtn.addEventListener("click", function(){
    let paymentModal = document.querySelector(".payment_modal");
    paymentModal.classList.remove("open")
        })
    
       window.onclick = function(event) {
        let paymentModal = document.querySelector(".payment_modal");;
             if (event.target === paymentModal) {
                paymentModal.style.display = "none";
             } else{paymentModal.style.display = "grid";}
             }
// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА



// ПРОВЕРКА ФОРМЫ INPUT



// const form = document.getElementById("form");

// function validation(form){
// function createError(input, text){
//     const parent = input.parentNode;
    
//     parent.classList.add("parentRed");

//     console.log(parent);
// }






//     let result = true;
//     const inputCustom = form.querySelectorAll("input");
// for (const input of inputCustom){

//     if (input.value == ""){
//         console.log("error")
//         createError(input, "не заполнено")
//         result = false
//     }
// }
//     return result

// }


// form.addEventListener("submit", function(event){
//     event.preventDefault()

//     if(validation(this) == true){
//         console.log("Форма отправлена")
//     }
// })

// function validName (){
//     let result= true;

// const inputName = document.getElementById("main_input_name");
//     const labelNname = document.querySelector(".label_name");
//     const nameI = document.getElementById("input_name");
//     if (nameI.value == ""){ result = false;

//  labelNname.textContent = "Укажите имя";
//     inputName.append(labelNname);}
//     else{ result = true}
// }

// form.addEventListener("submit", function(event){
//     event.preventDefault()

//     if(validName(this) == true){
//         console.log("Форма отправлена")
//     }
// })

// function validName () {
//     const inputName = document.getElementById("input_name");
//     const labelName = document.querySelector(".label_name");
    
//     if (inputName.value === "") {
//     labelName.textContent = "Укажите имя";
//     return false;
//     } else {
//     return true;
//     }
//     }
    
//     const form = document.querySelector('form');
    
//     form.addEventListener("submit", function(event){
//     event.preventDefault();
    
//     if (validName()) {
//     console.log("Форма отправлена");
//     form.submit();
//     }
//     });

let order = document.querySelector(".order");
let orderMob = document.querySelector(".orderMob")
function validName (inputElement, labelElement, labelText)  {
    let result = true;

      if (inputElement.value == "") {
        result = false;
        labelElement.innerHTML = labelText;
    inputElement.style.borderColor = "red"} 


   
else
{return true} ;
};

const inputName = document.getElementById("input_name");
const labelName = document.getElementById("labelName");

const labelSecName = document.getElementById("labelSecName");
const inputSecName = document.getElementById("input_secname");

const labelMail = document.getElementById("labelMail");
const inputMail = document.getElementById("input_mail");

const labelTel = document.getElementById("labelTel");
const inputTel = document.getElementById("input_tel");


const labelDoc = document.getElementById("labelDoc");
const inputDoc = document.getElementById("input_doc");


const form = document.getElementById("form");



orderMob.addEventListener("click", function(Event){
    // form.addEventListener("submit", function(Event){
    Event.preventDefault();  
    
    const nameValid = validName(inputName, labelName, "Укажите имя");
     const secnameValid = validName(inputSecName, labelSecName, "Укажите фамилию");
    const emailValid = validName(inputMail, labelMail, "Укажите электронную почту");
    const telValid = validName(inputTel, labelTel, "Укажите номер телефона");
     const DocValid = validName(inputDoc, labelDoc, "Укажите ИНН");
    
    
    
    if (nameValid && secnameValid && emailValid && telValid ) {
        alert("Заказ принят");
        }
        });











order.addEventListener("click", function(Event){
// form.addEventListener("submit", function(Event){
Event.preventDefault();  

const nameValid = validName(inputName, labelName, "Укажите имя");
 const secnameValid = validName(inputSecName, labelSecName, "Укажите фамилию");
const emailValid = validName(inputMail, labelMail, "Укажите электронную почту");
const telValid = validName(inputTel, labelTel, "Укажите номер телефона");
 const DocValid = validName(inputDoc, labelDoc, "Укажите ИНН");



if (nameValid && secnameValid && emailValid && telValid ) {
    alert("Заказ принят");
    }
    });

   
   
   
//     form.addEventListener("submit", function(inputMail,labelMail){
//         inputMail.preventDefault();  
//         let testMail = 'support@mousedc.ru';
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if(inputMail(testMail)) {console.log("ok")}
//    else if(inputMail.test(emailPattern)){console.log("still ok")}
//             else {labelMail.innerHTML = "Введите корректное значение"}

     
// return inputMail.test(emailPattern);


 
            

        
//         })


order.addEventListener("click", function(Event){
// form.addEventListener("submit", function(event){
Event.preventDefault();

const testMail = inputMail.value;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailPattern.test(testMail)) {
console.log("ok");
} else {
labelMail.innerHTML = "Проверьте адрес электр. почты";
}
if(inputMail.value === "") {labelMail.innerHTML = "Укажите электронную почту";}
});

order.addEventListener("click", function(Event){
// form.addEventListener("submit", function(event){
    Event.preventDefault();

    const testTel = inputTel.value;
    const TelPattern = /^\+\d{1,4}(\s?\d{1,4}){0,8}$/;

    if(TelPattern.test(testTel)){console.log("ok")}
    if(testTel.length < 12) {labelTel.innerHTML = "Формат: +9 999 999 99 99";}
    if(testTel.length > 30) {labelTel.innerHTML = "Формат: +9 999 999 99 99";}
    // else {labelTel.innerHTML = "Формат: +9 999 999 99 99";}
    if(inputTel.value === "") {labelTel.innerHTML = "Укажите номер телефона";}

    else{alert("Заказ принят")};
})
order.addEventListener("click", function(Event){
// form.addEventListener("submit", function(event){
   Event.preventDefault();
    
let inputINN = inputDoc.value;
let numPattern = /^\d{12}$/;

if (numPattern.test(inputINN)){console.log(true)};
if( inputINN.length !== 12 ){labelDoc.innerHTML= "Проверьте ИНН" };
if (isNaN(inputINN)) {
    labelDoc.innerHTML = "Проверьте ИНН";
    }
    if (inputDoc.value == "") {labelDoc.innerHTML= "Укажите ИНН"};
 if (inputINN.length = 12) {inputDoc.value = ""};
return "Заказ принят"
})


// ПРОВЕРКА ФОРМЫ INPUT