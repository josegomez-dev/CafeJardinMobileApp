angular.module('app.controllers', ['ionic', 'ion-gallery'])

.controller('homeCtrl', function($scope) {

})

.controller('decoraTuJardinCtrl', function($scope) {



})

.controller('carritoDeComprasCtrl', function($scope) {

})

.controller('prXimosEventosCtrl', function($scope, $ionicPopup, $timeout) {

	$scope.showAlert = function() {
	  	var alertPopup = $ionicPopup.alert({
			title: 'Hi, this is a test',
			template: 'YOLO, LOLOLOL'
			//cssClass: 'alertUpcoming'//Here we add the class to the alert -> not working
		});

		alertPopup.then(function(res) {
			console.log('Thank you for not eating my delicious ice cream cone');
		});
	};
})

.controller('galeriaDeFotosCtrl', function($scope) {
  // thumb:'root'
  $scope.plants = [
    { src:'img/plants/1.jpg', sub: '<b>Top 1</b>' },
    { src:'img/plants/2.jpg', sub: '<b>Top 2</b><br />Orquidea Flor Blanca' },
    { src:'img/plants/3.jpg', sub: '<b>Top 3</b>' },
    { src:'img/plants/4.jpg', sub: '<b>Top 4</b>' },
    { src:'img/plants/5.jpg', sub: '<b>Top 6</b>' },
    { src:'img/plants/6.jpg', sub: '<b>Top 7</b>' },
    { src:'img/plants/7.jpg', sub: '<b>Top 8</b>' },
    { src:'img/plants/8.jpg', sub: '<b>Top 9</b>' },
    { src:'img/plants/9.jpg', sub: '<b>Top 10</b>' },
    { src:'img/plants/10.jpg', sub: '<b>Top 11</b>' },
    { src:'img/plants/11.jpg', sub: '<b>Top 12</b>' },
    { src:'img/plants/12.jpg', sub: '<b>Top 13</b>' }
  ]
})

.controller('ubicacionCtrl', function($scope) {

})

.controller('contactoCtrl', function($scope) {

})

.controller('acercaDeCtrl', function($scope) {

})

.controller('avaluoCtrl', function($scope) {

})

.controller('vistasCtrl', function($scope) {

})

.controller('servicioCtrl', function($scope) {

})

//Added by Jose as a test
/*angular.module('events', ['ionic'])
.controller('EventsCtrl',function($scope, $ionicPopup, $timeout) {
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
  };
});*/
//End of angular.module by Jose

