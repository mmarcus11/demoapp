Meteor.subscribe("chores");

Template.showchores.helpers({
    choreslist() {return Chores.find()},
})

Template.addTask.events({
    'click button'(elt,instance){
        const type = instance.$('#type').val();
        var chore={
          type:type,
          owner: Meteor.userId()
        }
        Meteor.call('chores.insert', chore);
    }
})

// Template.showchores.helpers({
//     isOwner: function(){
//       return currentUser === Meteor.userId();
//     }
// })

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
