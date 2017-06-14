import { Meteor } from 'meteor/meteor';

Meteor.startup((/*arguments would go here*/) => { /*start content*/
  // code to run on server at startup
  Roommate.remove({});  // clear the database
  Roommate.insert({name:'Tim', email:"asdfhs@shfd.com", chores:""});
  Roommate.insert({name:'Caitlin', email:"asdfhs@shfd.com", chores:""});
}/*end content*/);
