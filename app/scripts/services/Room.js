(function() {
  function Room($firebaseArray) {
    // var firebaseRef = new Firebase('radiant-fire-2157.firebaseio.com');
    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child('rooms'));

    return {
      all: rooms,

      create: function(room){
        return rooms.$add(room);
      }
    };
  }

  angular
    .module('BlocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
