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
	}


}); 