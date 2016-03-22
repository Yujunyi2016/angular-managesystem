angular.module('manageSystem').controller('managerctrl',function($scope){
  $scope.staffs = [
    {
      UserID:01,
      Firstname:"Jammy",
      Lastname: "Lannister",
      Email:"Jammy@cb.com",
      Tags: "Handsome"
    },
    {
      UserID:02,
      Firstname:"Tyrion",
      Lastname: "Lannister",
      Email:"Tyrion@cb.com",
      Tags: "Imp"
    },
    {
      UserID:03,
      Firstname:"Dannis",
      Lastname: "Targarion",
      Email:"Dannis@cb.com",
      Tags: "Beauty"
    },
    {
      UserID:04,
      Firstname:"John",
      Lastname: "Snow",
      Email:"John@cb.com",
      Tags: "Skin"
    }];
})
