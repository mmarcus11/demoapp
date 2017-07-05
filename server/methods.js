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

  'rent.remove': function(id){
      Rent.remove(id);
  },

  'rent.insert': function(rent){
      Rent.insert(rent);
  },

  'updatestatus':function(rent,status){
    Rent.update(rent._id,{$set:{status:status}});
  }

  // 'rent.update': function(name, date, status, amount){
  //      console.log('updated?');
  //      Rent.update({name:id.name, date:id.date}, {$set:{amount:amount}});
  //  }
});
