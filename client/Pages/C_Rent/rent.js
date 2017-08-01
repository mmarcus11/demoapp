totalRent = 0;
Meteor.subscribe("rent");
const house =

Template.rent.helpers({
   house: function(){
     return Rent.find();
   },
   rentVal: function(){
     return totalRent;
   }

})

Template.rent.events({
    'click #saveR' (elt, instance) {
      totalRent = instance.$('#tRent').val();
    }
})

Template.edit.events({
    'click #submit' (elt, instance) {
        var radios = document.querySelector('input[name="status"]:checked').value;
        console.log('in submit click!');
        const name = instance.$('#name').val();
        const date = instance.$('#date').val();
        const amount = instance.$('#amount').val();
        const status = radios;

        // var person = Roommate.find({name:name}).fetch();
        // var original = Rent.find({name:name, date:date}).fetch();
        var rent = {date:date, status:status, name:name, amount:amount};
        // if (original.name==name){
        //   Meteor.call('rent.update', original ,rent);
        // } else {
          console.log(rent);
          console.log('inserting rent');
          Meteor.call('rent.insert', rent);
        // }
      },
    // 'click #edit' (elt, instance) {
    //     var radios = document.querySelector('input[name="status"]:checked').value;
    //     console.log('in edit click!');
    //     const name = instance.$('#name').val();
    //     const date = instance.$('#date').val();
    //     const amount = instance.$('#amount').val();
    //     const status = radios;
    //     // var person = Roommate.find({name:name}).fetch();
    //     var id = Rent.find({name:name, date:date}).fetch();
    //     var rent = {status:status, amount:amount};
    //     Meteor.call('rent.update',name, date, status, amount);
    //   }
})

Template.houserow.events({
    'click span'(elt,instance) {
        Meteor.call('rent.remove', this.rent._id);
        //if (this.person.owner==Meteor.userId()){
          //Rent.remove(this.person._id);
        //}
    },
    'change select' (elt,instance) {
        console.log('changed!');
        Meteor.call('rent.update', this.rent._id, instance.$("select").val());
    }

})
