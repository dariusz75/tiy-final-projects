var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var currentPage = 'Homepage';

var pages = [	'Homepage', 
							'RegistrationEmailPasswordDeveloper', 
							'RegistrationDetailsDeveloper',
							'RegistrationSkillsDeveloper',
							'RegistrationAboutMeDeveloper',
							'RegistrationEmailPasswordEmployer',
							'FindSection',
							'BackendPanelEmployer',
							'FullProfileDeveloper',
							'BackendPanelDeveloper',
							'YouHaveRegisteredMessage',
							'LogIn',
							'Contact'
						];

function getCurrentPage() {
	return currentPage;
}

function setCurrentPage(page) {
	currentPage = page;
	ViewStore.emit('change');
}

var ViewStore = {
	getCurrentPage: getCurrentPage,
	addChangeListener: addChangeListener,
	removeChangeListener: removeChangeListener
};

function addChangeListener(handleChangeEvent) {
	ViewStore.on('change', handleChangeEvent);
}

function removeChangeListener(handleChangeEvent) {
	ViewStore.removeListener('change', handleChangeEvent);
}

ViewStore = objectAssign({}, ViewStore, EventEmitter.prototype);

function handleAction(action) {
	if (action.type === 'change_page_to_register_email_password_developer') {
		setCurrentPage('RegistrationEmailPasswordDeveloper');
	} else if (action.type === 'change_page_to_register_email_password_employer') {
		setCurrentPage('RegistrationEmailPasswordEmployer');
	}	else if (action.type === 'change_page_to_homepage_when_done') {
		setCurrentPage('Homepage');
	} else if (action.type === 'change_page_to_homepage_when_cancelled') {
		setCurrentPage('Homepage');
	} else if (action.type === 'change_page_to_registration_skills_developer_when_next') {
		setCurrentPage('RegistrationDetailsDeveloper');
	} else if (action.type === 'change_page_to_registration_skills_developer') {
		setCurrentPage('RegistrationDetailsDeveloper')
	} else if (action.type === 'change_page_to_you_have_registered_message_when_click_create_profile') {
		setCurrentPage('YouHaveRegisteredMessage');
	} else if (action.type === 'change_to_registration_skills_developer') {
		setCurrentPage('RegistrationSkillsDeveloper');
	} else if (action.type === 'change_to_about_me_developer') {
		setCurrentPage('RegistrationAboutMeDeveloper');
	} else if (action.type === 'change_page_to_find_section_when_go_to_list_of_talents') {
		setCurrentPage('FindSection');
	}
}



Dispatcher.register(handleAction);
module.exports = ViewStore;