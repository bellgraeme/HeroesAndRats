var Task = function(quest,difficulty,urgency,reward){
  this.quest = quest;
  this.difficulty= difficulty;
  this.urgency =urgency;
  this.reward = reward;
  this.completed = false;
}

// Task.prototype = {
//   sort


// }




module.exports =Task;