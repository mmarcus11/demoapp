Meteor.subscribe("roommate");

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

Meteor.subscribe("chores");

Template.showchores.helpers({
    choreslist() {return Chores.find()},
})

Template.addTask.events({
    'click button'(elt,instance){
        const type = instance.$('#type').val();
        const category = 'personal';
        var chore={
          type:type,
          owner: Meteor.userId()
        }
        Meteor.call('chores.insert', chore);
    }
})

Template.chorerow.helpers({
    isOwner: function(){
      return
    }
})

Template.chorerow.events({
    'click input'(elt, instance) {
        var id = this.chore._id
        Meteor.call('chores.remove', id);
    }
})

// Template.addHouseTask.events({
//     'click button'(elt,instance){
//         const recipient = instance.$('#recipient').val();
//         const category='house';
//         // if (recipient=='All'){
//         //     category='house';
//         // }
//         var chore={
//           type:type,
//           category:category
//         }
//         Meteor.call('chores.insert', chore);
//     }
// })
