Meteor.methods({
  'chores.insert': function({type}){
      Chores.insert({type:type});
  },

  'chores.remove': function(id){
      Chores.remove(id);
  },

  'roommate.insert': function(roommate){
      Roommate.insert(roommate);
  },

  'roommate.remove': function(id){
      Roommate.remove(id);
  }
  //
  // 'utility.insert': function(utility){
  //     Utilities.insert(utility);
  // }
});
