var myApp = angular.module("myModule",[]);
var myController = function($scope){
	$scope.message = "Angular Js Tutorial";
	var employee = {name:"Rahul",age:"23", qualification:"MCA"};
	$scope.employee = employee;
}
myApp.controller("myfgoller",myController);
/*myApp.controller("myController",function($scope){
	$scope.message = "Angular Js Tutorial";
});*/
