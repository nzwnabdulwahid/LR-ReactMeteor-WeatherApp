import { Meteor } from 'meteor/meteor';

Meteor.methods({

	createNewUser(email, password){
		Accounts.createUser({
            email: email,
            password: password            
        });
	}


}); 