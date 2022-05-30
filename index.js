const attackBtn = document.getElementById('attack-button')


const heroElementId = "hero"
const heroName = "Wizard"
const heroAvatar = "images/wizard.png"
const heroHealth = "60"
const heroDiceRoll = 6

const monsterElementId = "monster"
const monsterName = "Orc"
const monsterAvatar = "images/orc.png"
const monsterHealth = "10"
const monsterDiceRoll = 4


function renderCharacter(id, name, avater, health, diceScore){
return document.getElementById(id).innerHTML=
 `<div class="character-card">
<h4 class="name"> ${name} </h4>
<img class="avatar" src="${avater}"/>
<p class="health">health: <b> ${health} </b></p>
<div class="dice-container"><div class="dice"> ${diceScore} </div></div>
</div>
`
}

renderCharacter(heroElementId,heroName,heroAvatar, heroHealth, heroDiceRoll);
renderCharacter(monsterElementId,monsterName,monsterAvatar, monsterHealth, monsterDiceRoll);


attackBtn.addEventListener('click',function (){

   console.log(goodCharcter)
 
})