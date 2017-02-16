import { Meteor } from 'meteor/meteor';
Meeps = new Mongo.Collection('meeps');
Messages = new Mongo.Collection('messages');
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

Meteor.publish('users', function () {    
     return Meteor.users.find();     
});

Meteor.publish('MessageList', function () {   

     return Messages.find();
});




