Template.showpeople.helpers({
  peoplelist() {return Roommate.find()},
})

Template.addPerson.events({
    'click button'(elt,instance) {
        const name = instance.$('#name').val();
        const email = instance.$('#email').val();
        console.log('adding '+name);
        instance.$('#name').val("");
        instance.$('#email').val("");
        Roommate.insert({name:name, email:email});
        //People. insert({name, birthyear})
    }
})

Template.personrow.events({
    'click span'(elt,instance) {
        Roommate.remove(this.roommate._id);
    }
})
