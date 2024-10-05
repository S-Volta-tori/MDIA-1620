//lesson-3 code
let horsename = "Strawberry"
console.log (horsename);
let horseage = 5;
console.log (horseage);

let isHorseInside = false;
console.log (isHorseInside);

//Lesson-4 code
const STABLE_MONTHLY_FEE = 200;
console.log (STABLE_MONTHLY_FEE);
console.log (STABLE_MONTHLY_FEE + STABLE_MONTHLY_FEE);
console.log (2*3);
console.log (horseage * horseage);

let horseIntroduction ="Is the name of my horse";
let rentIntroduction ="it costs"+ STABLE_MONTHLY_FEE + horsename;



let stableinstruction="Welcome to Subterrarean.--Satori Komeji"
console.log(stableinstruction)

///////LAB 4 Code//////
let horsenickname ="THE GUY"
console.log(horsenickname)
console.log(`${horsenickname} ${horseIntroduction}`);
console.log(rentIntroduction);
let horseinstruction =" is a carrot killer"

console.log(horsenickname + horseinstruction)

let horseMessage = "three month stay at the stable with a 10% discount " + (STABLE_MONTHLY_FEE*3 -60)
console.log(horseMessage)





//lesson-5 code
   if(horseage>200){
console.log("Our horse is old")
   }else if(horseage>99){
    console.log("Our horse is gerlatric")
   }
   else{
    console.log("Our horse is young")
   }

  let visitinghorsename ="Strawberry"

   if(horsename == "THE GUY" && isHorseInside && visitinghorsename == "Lettuce" || visitinghorsename == "Strawberry" ) {
    console.log(`${horsenickname} has a visitor and need to come outside to see ${visitinghorsename}`);
   } else if (horsename == "THE GUY" && !isHorseInside && visitinghorsename =="Lettuce" || visitinghorsename == "Strawberry" ){
    console.log(`${horsenickname} is outside with ${visitinghorsename}`);
   }else{
    console.log(`${horsenickname} need to figure out what's going on`)
   }
///////LAB 5 code///////
   if (isHorseInside) {
       console.log(`${horsenickname} is inside`)
      }else{
       console.log(`${horsenickname} is outside`)
      }