var assert = require('assert');
var Hero = require ('../hero.js');
var Food = require('../food.js')

describe('Hero Test', function(){

  var hero;
  var food1;
  var food2;

  beforeEach(function( ){
    hero = new Hero("Arnold", "Courgette")
    food1 = new Food("Courgette", 10)
    food2 = new Food("Steak", 3)
  })

it('hero should be able to talk', function(){
  assert.strictEqual("Hurah!", hero.talk())
});

it('hero can take damage', function (){
  hero.damage(10)
  assert.strictEqual(90, hero.health)
});

})