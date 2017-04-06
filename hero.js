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
  },
  addTask: function(task){
    this.tasks.push(task)
  },
  completeTask: function(tobecompleted){
    this.tasks.forEach(function(task){
      if(task === tobecompleted){
        task.completeTask()
      }
    })
  },
  sortTaskByReward: function(type){
    return _.filter(this.tasks, function(task){
      if(task.reward === type){
        return task}
      })
  },
  sortTaskByDifficulty: function(type){
    return _.filter(this.tasks, function(task){
      if(task.difficulty === type){
        return task
      }
    })
  },
  sortTaskByUrgency: function(type){
    return _.filter(this.tasks, function(task){
      if(task.urgency === type){
        return task
      }
    })
  },
  sortTaskByCompleted: function(type){
    return _.filter(this.tasks, function(task){
      if(task.completed === type){
        return task
      }
    })
  },


}




module.exports =Hero;