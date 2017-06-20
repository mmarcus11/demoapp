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
        var roommate = {
          name:name,
          email:email
        }
        Meteor.call('roommate.insert',roommate);

    }
})

Template.personrow.events({
    'click span'(elt,instance) {
        Meteor.call('roommate.remove', this.person._id);
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
        Meteor.call('chores.insert', {type});
    }
})

Template.chorerow.events({
    'click input'(elt, instance) {
        var id = this.chore._id
        Meteor.call('chores.remove', id);
    }
})
