import { Meteor } from 'meteor/meteor';
Meteor.methods({

	createNewUser(email, password,name){
		Accounts.createUser({
            email: email,
            password: password,
            profile: {
            	name: name, 
            	createdAt: new Date()
            }    
        });
	},

	postNewMeep(meep){
		Meeps.insert({
			user: Meteor.userId(),
			username: Meteor.user().profile.name,
			meep: meep,
			createdAt: new Date(),
			fav: 0
		});
	},

	postNewMessage(to, message){
		Messages.insert({
			from: Meteor.userId(),
			to: to,
			message: message,
			createdAt: new Date(),
			status: 'unread',
			archived: false 
		});
	}


}); 