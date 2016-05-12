(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase('radiant-fire-2157.firebaseio.com');
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms
    };
  }

  angular
    .module('BlocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
