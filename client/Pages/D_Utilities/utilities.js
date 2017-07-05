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
        var utility = {
          name:name,
          personAmt:personAmt,
          due:due,
          payer:payer
        }
        Meteor.call('utility.insert', utility);
    }
})
