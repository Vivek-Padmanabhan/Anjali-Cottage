function clickText($scope) {
	
	$scope.descriptions =
    	[ { value: '0', url: 'public/html/edakkalText.html'}
    	, { value: '1', url: 'public/html/pookodeText.html'}
    	, { value: '2', url: 'public/html/kuruvadweepText.html'}
    	, { value: '3', url: 'public/html/ambalavayalText.html'}
    	, { value: '4', url: 'public/html/sentinelRockText.html'}
    	, { value: '5', url: 'public/html/meenmuttyText.html'} ];

	$scope.infos =
    	[ { value: '0', url: 'public/html/edakkalTextInfo.html'}
    	, { value: '1', url: 'public/html/pookodeTextInfo.html'}
    	, { value: '2', url: 'public/html/kuruvadweepTextInfo.html'}
    	, { value: '3', url: 'public/html/ambalavayalTextInfo.html'}
    	, { value: '4', url: 'public/html/sentinelRockTextInfo.html'}
    	, { value: '5', url: 'public/html/meenmuttyTextInfo.html'} ];

	$scope.distance =
    	[ { value: '0', url: 'public/html/edakkalDistance.html'}
    	, { value: '1', url: 'public/html/pookodeDistance.html'}
    	, { value: '2', url: 'public/html/kuruvadweepDistance.html'}
    	, { value: '3', url: 'public/html/ambalavayalDistance.html'}
    	, { value: '4', url: 'public/html/sentinelRockDistance.html'}
    	, { value: '5', url: 'public/html/meenmuttyDistance.html'} ];

	$scope.linkx =
    	[ { value: '0', url: 'public/html/edakkalLinks.html'}
    	, { value: '1', url: 'public/html/pookodeLinks.html'}
    	, { value: '2', url: 'public/html/kuruvadweepLinks.html'}
    	, { value: '3', url: 'public/html/ambalavayalLinks.html'}
    	, { value: '4', url: 'public/html/sentinelRockLinks.html'}
    	, { value: '5', url: 'public/html/meenmuttyLinks.html'} ];

    $scope.buttonSet =
        [ { option1: 'tile_two selected_class', option2: 'tile_two', option3: 'tile_two', option4: 'tile_two', option5: 'tile_two', option6: 'tile_two'}
        , { option1: 'tile_two', option2: 'tile_two selected_class', option3: 'tile_two', option4: 'tile_two', option5: 'tile_two', option6: 'tile_two'}
        , { option1: 'tile_two', option2: 'tile_two', option3: 'tile_two selected_class', option4: 'tile_two', option5: 'tile_two', option6: 'tile_two'}
        , { option1: 'tile_two', option2: 'tile_two', option3: 'tile_two', option4: 'tile_two selected_class', option5: 'tile_two', option6: 'tile_two'}
        , { option1: 'tile_two', option2: 'tile_two', option3: 'tile_two', option4: 'tile_two', option5: 'tile_two selected_class', option6: 'tile_two'}
        , { option1: 'tile_two', option2: 'tile_two', option3: 'tile_two', option4: 'tile_two', option5: 'tile_two', option6: 'tile_two selected_class'} ];

    $scope.optionSet =
        [ { option1: 'tile_three selected_class', option2: 'tile_three', option3: 'tile_three', option4: 'tile_three'}
        , { option1: 'tile_three', option2: 'tile_three selected_class', option3: 'tile_three', option4: 'tile_three'}
        , { option1: 'tile_three', option2: 'tile_three', option3: 'tile_three selected_class', option4: 'tile_three'}
        , { option1: 'tile_three', option2: 'tile_three', option3: 'tile_three', option4: 'tile_three selected_class'} ];
  	
  	$scope.location = $scope.descriptions[0];

    $scope.focus = $scope.buttonSet[0];

    $scope.tab = $scope.optionSet[0];
  	
  	$scope.selectLocation = function(value) {
    	$scope.location = $scope.descriptions[value];

        $scope.focus = $scope.buttonSet[value];

        $scope.tab = $scope.optionSet[0];
	};

	$scope.selectDescription = function(value) {
		$scope.location = $scope.descriptions[value];

        $scope.tab = $scope.optionSet[0];
	};
	$scope.selectInfo = function(value) {
		$scope.location = $scope.infos[value];

        $scope.tab = $scope.optionSet[1];
	};
	$scope.selectDistance = function(value) {
		$scope.location = $scope.distance[value];

        $scope.tab = $scope.optionSet[2];
	};
	$scope.selectLinks = function(value) {
		$scope.location = $scope.linkx[value];

        $scope.tab = $scope.optionSet[3];
	};
}