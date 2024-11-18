
let soz1 = prompt('Бірінші сөзді жазыңыз:')
let soz2 = prompt('Екінші сөзді жазыңыз:')
function compareWords(soz1,soz2){
   if (soz1.toLowerCase() === soz2.toLowerCase()){
    return 'Сөздер бірдей'
   }else{
    return 'Сөздер әртүрлі'
   }
}
alert (compareWords(soz1,soz2))