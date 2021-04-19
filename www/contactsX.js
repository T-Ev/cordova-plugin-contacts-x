var exec = require('cordova/exec');

var contactsX = {
  ErrorCodes: {
    UnsupportedAction: 1,
    WrongJsonObject: 2,
    PermissionDenied: 3,
    NoContactFound: 5,
    SaveOrModify: 6,
    SecondDelete: 7,
    MultipleMatches: 8,
    NoMatches: 9,
    MatchFailed: 10,
    OtherMatchError: 11,
    UnknownError: 12
  },

  find: function (success, error, options) {
    exec(success, error, 'ContactsX', 'find', [options]);
  },

  pick: function (success, error) {
    exec(success, error, 'ContactsX', 'pick', []);
  },
  
  save: function (contact, success, error) {
    exec(success, error, 'ContactsX', 'save', [contact]);
  },

  delete: function (id, phone, success, error) {
    exec(success, error, 'ContactsX', 'delete', [id,phone]);
  },

  hasPermission: function (success, error) {
    exec(success, error, 'ContactsX', 'hasPermission', []);
  },

  requestPermission: function (success, error) {
    exec(success, error, 'ContactsX', 'requestPermission', [false]);
  },

  requestWritePermission: function (success, error) {
    exec(success, error, 'ContactsX', 'requestPermission', [true]);
  }
}

module.exports = contactsX;
