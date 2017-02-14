import { Meteor } from 'meteor/meteor';
Meeps = new Mongo.Collection('meeps');
// Users = new Mongo.Collection('users');

Meteor.publish('meepslists', function() {
  return Meeps.find({}, {
  	sort: {createdAt: -1}
  });
});

Meteor.publish('meepsBasedOnId', function (id) {    
     return Meeps.find({_id: id}, {
  	sort: {createdAt: -1}
  });
});

Meteor.publish('userBasedOnId', function (id) {    
     return Meteor.users.find({_id: id}).fetch(); 
});

Meteor.publish('users', function () {    
     return Meteor.users.find({}).fetch();     
});


