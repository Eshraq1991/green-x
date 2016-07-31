angular.module('iGrow.friends', [])
.controller('friendController', function ($window, $scope, $location, Plants) {
$scope.data = {}
	///plants.getAllUsers
	Plants.getFriends()
			.then(function(resp){
				console.log(resp);
				var user=$window.localStorage.getItem('com.username');
					console.log(user);
				for(var i=0;i<resp.length;i++){
					
					if(resp[i].username===user){
						resp.splice(i,1);
						break;
					}
				}
		$scope.data.friends=resp;
	});

	Plants.getAllUsers()
	.then(function(resp){
		for(var i=0;i<resp.length;i++){
					
					if(resp[i].username===user){
						resp.splice(i,1);
						break;
					}
				}
		//console.log("show users in database",resp);
		$scope.data.plants=resp;
	})
	//Add plant function
	$scope.addFriend = function (id){
		//console.log(id)
		Plants.addFriend(id)
		.then(function(resp){
			Plants.getFriends()
			.then(function(resp){
		$scope.data.friends=resp;
	});
		})
	}
	$scope.getFriendGarden=function(user){
      console.log(user);
      Plants.selectUser(user)
      .then(function (data){
      	console.log(data,"user dataaaaa")
        $location.path('/1/'+user);

      })
      .catch(function (error){
        console.log(error);

      })

    


	// 	Plants.getFriendGarden(user)
	// 	.then(function(resp){
	// 		console.log(resp)
			
	// 	Plants.getGarden()
	// 	.then(function(resp){
	// 		$scope.data.gardens=resp;
	// 		$location.path('/'+user)
	// 	})
	// })
}
});

