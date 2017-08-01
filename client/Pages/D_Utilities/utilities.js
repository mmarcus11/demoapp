Meteor.subscribe("utilities");

Template.showUtilities.helpers({
  utilityList() {return Utilities.find()},
})

// There is some sort of problem with this event!
Template.addUtility.events({
    'click button'(elt,instance){
        const name = instance.$('#name').val();
        const personAmt = instance.$('#personAmt').val();
        const amt = instance.$('#amt').val();
        const due = instance.$('#due').val();
        const payer = instance.$('#payer').val();
        const color = instance.$('#color').val();
        var utility = {
          name:name,
          personAmt:personAmt,
          due:due,
          payer:payer,
          color:color
        }
        Meteor.call('utility.insert', utility);
    },
})

Template.utilityRow.events({
  'click #remove'(elt,instance) {
      Meteor.call('utility.remove', this.utility._id);
  },
})
