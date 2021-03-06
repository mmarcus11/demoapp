// export const Chores = new Mongo.Collection{'chores'};


Meteor.publish("chores", function(){
  return Chores.find();
});

Meteor.publish("roommate", function(){
  return Roommate.find();
});

Meteor.publish("utilities", function(){
  return Utilities.find();
});

Meteor.publish("rent", function(){
  return Rent.find();
})

Meteor.methods({
  'chores.insert': function(chore){
      Chores.insert(chore);
  },

  'chores.remove': function(id){
      Chores.remove(id);
  },

  'roommate.insert': function(roommate){
      Roommate.insert(roommate);
  },

  'roommate.remove': function(id){
      Roommate.remove(id);
  },

  'utility.insert': function(utility){
      Utilities.insert(utility);
  },

  'utility.remove': function(utility){
      Utilities.remove(utility);
  },

  'rent.remove': function(id){
      Rent.remove(id);
  },

  'rent.insert': function(rent){
      Rent.insert(rent);
  },

  'rent.update': function(id, status){
      console.log('updated?');
      Rent.update(id, {$set:{status:status}});
  }
});
