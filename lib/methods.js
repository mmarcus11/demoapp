Meteor.methods({
  'chores.insert'({type}){
      Chores.insert({type:type});
  }
});

Meteor.methods({
  'chores.remove'(id){
      Chores.remove(id);
  }
})

Meteor.methods({
  'roommate.insert'(roommate){
      Roommate.insert(roommate);
  }
});

Meteor.methods({
  'roommate.remove'(id){
      Roommate.remove(id);
  }
});
