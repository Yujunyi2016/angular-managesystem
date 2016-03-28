angular.module('manageSystem').controller('managerctrl',function($scope){
  $scope.readOnly = true
  $scope.staffs = [
    {
      UserID:1,
      Firstname:"Jammy",
      Lastname: "Lannister",
      Email:"Jammy@cb.com",
      Tags: "Handsome"
    },
    {
      UserID:2,
      Firstname:"Tyrion",
      Lastname: "Lannister",
      Email:"Tyrion@cb.com",
      Tags: "Imp"
    },
    {
      UserID:3,
      Firstname:"Dannis",
      Lastname: "Targarion",
      Email:"Dannis@cb.com",
      Tags: "Beauty"
    },
    {
      UserID:4,
      Firstname:"John",
      Lastname: "Snow",
      Email:"John@cb.com",
      Tags: "Skin"
    }];


    $scope.addStaff = function(){
      $scope.staffs.push(
        {
          UserID: $scope.staffs.length+1,
          Firstname:"Enter Firstname",
          Lastname:"Enter Lastname",
          Email:"Enter Email",
          Tags: "Enter Tags"
        });
      $scope.readOnly = false;
    };

    $scope.editStaff = function(){
      $scope.readOnly = false;
    };

    $scope.saveStaff = function(){
      $scope.readOnly = true;
    };

    $scope.deleteStaff = function (UserID) {

  for (var i = 0; i < $scope.staffs.length; i++) {
    var staff = $scope.staffs[i];
    if (staff.UserID == UserID) {
      $scope.staffs.splice(i, 1);
      break;
    }
  }
  for(var j=UserID-1; j<$scope.staffs.length; j++){
     $scope.staffs[j].UserID = $scope.staffs[j].UserID -1;
  }
};

})
