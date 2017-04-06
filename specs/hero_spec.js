var assert = require('assert');
var Hero = require ('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');

describe('Hero Test', function(){

  var hero;
  var food1;
  var food2;
  var task;

  beforeEach(function( ){
    hero = new Hero("Arnold", "Courgette")
    food1 = new Food("Courgette", 10)
    food2 = new Food("Steak", 3)
    task = new Task("cleaning", "mega", "pant splitting", "catharsis")
  })

it('hero should be able to talk', function(){
  assert.strictEqual("Hurah!", hero.talk())
});

it('hero can take damage', function (){
  hero.damage(10)
  assert.strictEqual(90, hero.health)
});

it('food can add health', function(){
  hero.damage(99)
  hero.eat(food2)
  assert.strictEqual(4, hero.health)
});

it('favourite food should give health bonus', function(){
  hero.damage(20)
  hero.eat(food1)

  assert.strictEqual(95, hero.health)
});

it('hero cant go over 100 health', function(){
  hero.eat(food1);
  assert.strictEqual(100, hero.health)
});

it('tasks are empty', function(){
  assert.strictEqual(0 , hero.tasks.length)
})

it('can add task', function(){
  hero.addTask(task)
  assert.strictEqual(1, hero.tasks.length)
});

it('task can be completed', function(){
  hero.addTask(task)
  hero.completeTask(task)
  assert.strictEqual(true, task.completed)
})



})