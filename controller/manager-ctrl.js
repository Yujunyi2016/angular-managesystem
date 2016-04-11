angular.module('manageSystem')
.constant('rooturl','http://localhost:8080/users')
.controller('ManagerCtrl',function($scope,$http,rooturl){
  $scope.readOnly = true;
  $scope.staffs = [];

  $scope.showList = function (){
    $http({
      method: "GET",
      url : rooturl
    })
    .then(function (response){
      $scope.staffs = response.data;
    },    function (response){
      $scope.staffs = response.data;
    })
  };

  $scope.showList();

  $scope.addStaff = function (){
    $http({
      method : "POST",
      url    : rooturl
    })
    .success(function (data){
      data.user_id = $scope.staffs.length + 1 ;
      $scope.staffs.push(data);
    });
    $scope.readOnly = false;
  };

  $scope.saveStaff = function (staff){
    $scope.readOnly = true;
    $http({
      method : "PUT",
      url    : rooturl + "/"+ staff._id,
      data   : staff
    })
    .then(function (response){
      $scope.staffs.staff = response.data;
    },    function (response){
      $scope.staffs.staff = response.data;
    }
  );
};

$scope.editStaff = function (){
  $scope.readOnly = false;
};

$scope.deleteStaff = function (staff) {
  $http({
    method: "DELETE",
    url   : rooturl + "/"+ staff._id,
  })
  .success(function (){
    $scope.staffs.splice($scope.staffs.indexOf(staff),1);
  });
};
});
