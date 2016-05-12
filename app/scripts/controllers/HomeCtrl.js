(function() {
  function HomeCtrl(Room) {
//    this.rooms = Room.all;
    this.rooms = ['first', 'second', 'third'];
  }

  angular
    .module('BlocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
