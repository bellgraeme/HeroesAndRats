var Hero = function(name,favFood){
  this.name = name;
  this.health = 100;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype = {
  talk: function(){
    return "Hurah!"
  },
  eat: function(food){
    if(this.favFood === food.name){
    this.health += food.nourishment*1.5}
    else{
      this.health += food.nourishment
    }
  if(this.health > 100){
      this.health = 100
    }  
  },

  damage: function(amount){
    this.health -= amount;
  }

}




module.exports =Hero;