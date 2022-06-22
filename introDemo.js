let harryAttack = 25; 
let lordVattack = 35;

if(harryAttack> lordVattack){
    console.log("Harry has a better attack ")
} else if (lordVattack > harryAttack){
    console.log("Lord V has a better attack ")
} else {
    console.log ("Harry and Lord V have the same attack")
}

let harryHealth = 100;
let harryDefense = 0 

// Lord V attacks Harry 

if(harryHealth <= lordVattack){
    console.log ("Harry has been slain")
}else {
    harryHealth -= lordVattack;
    console.log(`Harrys health is down ${harryHealth}`)
}

//Harry picks up a shield 
harryDefense += 25;

if(harryHealth <=  (lordVattack-harryDefense)) {
console.log("Harry has been slain!")
}else {
    harryHealth -= (lordVattack - harryDefense)
    console.log(`Harrys's health is down ${harryHealth}`)
}

// townsperson gives harry a shield 

let healthKit=50;

if((harryHealth + healthKit) >= 100 ){
    harryHealth = 100;
}else {
    harryHealth += healthKit;
}
console.log (`harry got some help. health is noow ${harryHealth}`)

let coinTossHeads = false ;

if (coinTossHeads === true){
    console.log ("The fight continues ")
}else {
    console.log("harry is allowed to run away ")
}

// for (let i=0; i<11; i++){
//     if(harryHealth <= 0){
//         console.log("harry has been slain")
//     } else {
//         harryHealth -= (lordVattack - harryDefense)
//         console.log(`harry's health is ${harryHealth}`)
//     }   
// }
while(harryHealth > 0){
    harryHealth -= (lordVattack - harryDefense)
    console.log(`harry's health is ${harryHealth}`)

    if(harryHealth <=0){
        console.log("harry has been slain")
    }
}