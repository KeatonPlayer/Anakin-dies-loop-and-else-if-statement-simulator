let obiWanAttack = 35 
let anakinAttack = 25
let anakinHealth = 100
let anakinDefense = 0
if (obiWanAttack < anakinAttack) {
    console.log("I has the high ground annakin")
}else if (obiWanAttack > anakinAttack){
    console.log(" You suck anakin I better with saber light")
}
else { console.log(" The force is stronk in both")}

if (anakinHealth <=0){
    console.log("anakin got no leggies")
}
else{ anakinHealth -= obiWanAttack}
console.log(`Anakins health is now ${anakinHealth}`)

anakinDefense += 25 

if(anakinHealth <= obiWanAttack - anakinDefense){
 console.log(" Anakin is deaded")
}
else {
    anakinHealth -= obiWanAttack - anakinDefense
    console.log(`Anakins health is now ${anakinHealth}`)
}

if (anakinHealth + 50 >=100){
 anakinHealth = 100
 console.log(anakinHealth)
}
else {
    anakinHealth += 50
    console.log(`Anakins health is now ${anakinHealth}`)
}

for (let i = 0; i < 5; i++ ){
    anakinHealth -= obiWanAttack - anakinDefense
    console.log(`Anakins health is now ${anakinHealth}`)

}

while (anakinHealth >= 0){

    anakinHealth -= obiWanAttack -anakinDefense
    console.log(`Anakins health is now ${anakinHealth}`)
    if (anakinHealth <= 0) {
        console.log("Anakin is darth vader now")
    }
}

