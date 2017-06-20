Template.showpeople.helpers({
  peoplelist() {return Roommate.find()},
})

Template.addPerson.events({
    'click button'(elt, instance) {
        const name = instance.$('#name').val();
        const email = instance.$('#email').val();
        console.log('adding '+name);
        instance.$('#name').val("");
        instance.$('#email').val("");
        Roommate.insert({name:name, email:email});

    }
})

Template.personrow.events({
    'click span'(elt,instance) {
        Roommate.remove(this.person._id);
        //if (this.person.ownder==Meteor.userID()){
          //People.remoce(this.person._id);
        //}
    }
})

Template.showchores.helpers({
    choreslist() {return Chores.find()},
})

Template.addTask.events({
    'click button'(elt,instance){
        const type = instance.$('#type').val();
        Chores.insert({type:type});
    }
})

Template.chorerow.events({
    'click input'(elt, instance) {
        Chores.remove(this.chore._id);
    }
})
