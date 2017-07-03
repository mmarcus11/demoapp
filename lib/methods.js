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

  // 'housechores.insert': function(chore){
  //
  // }
});
