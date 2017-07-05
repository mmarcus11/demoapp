Meteor.subscribe("roommate");

Template.showpeople.helpers({
  peoplelist() {return Roommate.find()},
})

Template.personrow.events({
    'click span'(elt,instance) {
        Meteor.call('roommate.remove', this.person._id);
        //if (this.person.ownder==Meteor.userID()){
          //People.remoce(this.person._id);
        //}
    }
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
          email:email,
          id: Meteor.userId()
        }
        Meteor.call('roommate.insert',roommate);

    }
})
