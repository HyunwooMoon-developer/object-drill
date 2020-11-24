/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//object 1

const loaf = {
    flour : 300 ,
    water: 210,
    hydration: function(){
        return (loaf.water/loaf.flour)*100 ;
    }
  };
  
  console.log(loaf.hydration());
  
  //object 2
  
  const object2 = {
    foo: 'hi ',
    bar: 'my ',
    fun: 'name ',
    quux: 'is ',
    spam: 'moon'
  };
  
  for(prop in object2){
    console.log(`${prop}: ${object2[prop]}`);
  }
  
  //object3
  
  const food = {
    meal: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
  };
  
  console.log(food.meal[3]);
  
  //object4, 5
  
  const person1 = {
    name: 'moon',
    jobTitle : 'intern',
    boss: 'woo'
  };
  
  const person2 = {
    name: 'hyun',
    jobTitle : 'team leader',
    boss: 'woo'
  };
  
  const person3 = {
    name: 'woo',
    jobTitle : 'boss',
  };
  
  const people = [person1, person2, person3];
  
  const loopPeople = function(){
  for (let i = 0 ; i < people.length ; i++){
  for(prop in people[i]){
  console.log(`${prop} : ${people[i][prop]}`);
        }   
    }
  }
  
  loopPeople();
  
  const callBoss = function() {
    for (let i = 0 ; i < people.length ; i++){
    if(people[i].boss){
        console.log(`${people[i].jobTitle} ${people[i].name} reports ${people[i].boss}.`);
    }
    else{
        console.log(`${people[i].jobTitle} ${people[i].name} doesn't report to anybody.`);
    }
  }
  }
  
  callBoss();
  
  //object6
  
  const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };
  
  const decode = function(encode) {
    let word = encode.charAt(0);   
    let number = 0;
    for (prop in cipher){
        if(word === `${prop}`){
            number = `${cipher[prop]}`;
        }
    }
    let encodeLetter = `${encode.charAt(number -1)}`;
    if(number === 0){
        return ' ';
    }
    else{
        return encodeLetter;
    }
  }
  
  decode('apple');
  
  const decodeWords = function(letter){
    let check = letter.split(' ');
    let arr = [];
    for(let i = 0 ; i < check.length ; i++){
        arr.push(check[i]);
    }
    for(let j = 0 ; j < arr.length ; j++){
        console.log(decode(arr[j]));
    }
  }
  
  decodeWords('apple banana carrot elephant');
  
  //object7
  
  const createCharacter = function(name, nickName, race, origin, attack, defense){
        return {
        name,
        nickName,
        race,
        origin,
        attack,
        defense,
        describe : function(){
            console.log(`${name} is a ${race} from ${origin}.`)
                },
            evaluateFight: function(){
                let x= 0 ;
                let y= 0 ;
                if(character.defense > this.attack){
                    x = this.attack ;
                    y = 0 ; 
                }
                if(character.defense < this.attack){
                    x=this.attack ;
                    y= this.attack - character.defense;
                }
                return `Your opponent takes ${x} damage and you receive ${y} damage.`
            }                 
             };
          }
  const character = [
     createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth',10, 6),
     createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
     createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
     createCharacter('Aragon son of Arathorn', 'aragon', 'Man', 'Dunnedain', 6, 8),
     createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)]
  
  console.log(character);
  
  character.push(createCharacter('Arewen Undomiel', 'arwen', 'Half-elf', 'Rivendell'));
  
  const findPerson = character.find(character=>{
    character.nickName === 'aragon';
  })
  
  findPerson.describe();
  
  const hobbit = character.filter(character =>{
    character.race === 'hobbit' ;})
  
  const attack5 = character.filter(character =>{
    character.attack > 5;
  })
  
  console.log(attack5);
  