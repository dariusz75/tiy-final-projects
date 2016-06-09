var Dispatcher = require('../dispatcher/Dispatcher.js');
var ApiServices = require('../services/api.js');
									
function changePageToYouHaveRegisteredMessageWhenDone() {
	var action = {
		type: 'change_page_to_you_have_registered_message_when_click_create_profile'
	};
	Dispatcher.dispatch(action);
}

function changePageToHomepageWhenCancelled() {
	var action = {
		type: 'change_page_to_homepage_when_cancelled'
	};
	Dispatcher.dispatch(action);
}

function registerEmployer(employer) {
	ApiServices.registerEmployer(employer, function callback(error, data) {
		if (error) {
			console.log(error);
			return;
		} 
		var action = {
			type: 'set_authentication_token',
			token: data.token
		};
		Dispatcher.dispatch(action);

	});
}

module.exports = {
	changePageToYouHaveRegisteredMessageWhenDone: changePageToYouHaveRegisteredMessageWhenDone,
	changePageToHomepageWhenCancelled: changePageToHomepageWhenCancelled,
	registerEmployer: registerEmployer
};