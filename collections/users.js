Meteor.methods({
	"followUser": function(userId) {
		if(Meteor.userId() !== userId) {
		Meteor.users.update(Meteor.userId(), {
			$addToSet: {
				"profile.following": userId
			}
		});

		Meteor.users.update(userId, {
			$addToSet: {
				"profile.followers": Meteor.userId()
			}
		});	
    }
		
	},
	"unfollowUser": function(userId) {
		Meteor.users.update(Meteor.userId(), {
            $pull: {
                "profile.following": userId
		    }
	    });

	    Meteor.users.update(userId, {
	    	$pull: {
	    		"profile.followers": Meteor.userId()
	    	}
	    });
	}
});