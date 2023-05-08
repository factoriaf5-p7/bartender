/**
 * 1. Leche --> no se solicita la edad y se responde con la frase "aquí tiene su bebida"
 * 2. Coca-cola --> se solicita la edad. Sí es mayor de 14 se responde con la frase "aquí tiene su bebida. Si es menor de 14 se responde con la frase: "lo siento, solo puedo servirle leche".
 * 3. Cerveza --> se solicita la edad. Si es mayor o igual a 18 se responde con la frase "aquí tiene su bebida". Si no lo es, se responde con la frase: "lo siento, solo puedo servirle leche o cocacola".
 *   */

const drinks = ['milk','coke','beer'];
//funcion que devuelve cadena en minúsculas y sin espacios
const sanitizeString = (cadena)=>{
    return cadena.trim().toLowerCase();
}

// funcion recursiva que se llama a si misma hasta que se selecciona una bebida válida o se cancela el prompt
const askForDrink = (message = 'what will you drink?') => {
    const drink = prompt(message);

    if(drink === null)
        return null;

    if(drinks.includes(sanitizeString(drink))){
        return drink;
    } else {
        return askForDrink('You should choose between milk,coke, beer')
    }

} // ~ function askForDrink() {}

// función que pregunta recursivamente por la edad
const askForAge = (message = "how old are you") => {
    const age = +prompt(message);

    if(isNaN(age)){
        askForAge(`I need a valid age number, ${message}`);
    } else {
        return age;
    }
}

// función que imprime el mensaje de salida
const printMessage = (message) => {
    return alert(message);
}

// función de validación
const checkValidAge = (drink, age) => {
    let allow = false;
    let key = drinks.indexOf(drink);
    switch(key){
        case 0:
            allow = true;
            break;
        case 1:
            allow = age >=14;
            break;
        case 2:
            allow = age >= 18;
            if(age <14) key = 1;
            break;
    }
    console.log(allow,key);
    return [allow,key];
}
const bartender = (age) => {
    const drink = askForDrink();
    if(drink == null) return printMessage('Ok, bye');
    if(drink !='milk'){
         if(!age)
          age = askForAge();
        const validAge = checkValidAge(drink,age);
        if(!validAge[0]){
            // printMessage('You are not allowed to drink '+ drink+". Try again");
            printMessage('You are only allowed to drink '+ drinks.splice(0,validAge[1]).join(', ')+". Try again");
            return bartender(age);
        }
    }

    return printMessage('Here is your drink');
}

bartender();