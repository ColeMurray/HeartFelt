/**
	A filter used to limit the amount of characters
	and append "..." to the end if over the limit
**/

angular.module('StrLimitFilter', [])
	.filter('strLimit', function ($filter){
		return function(input, limit){
			if (!input) return;
			if (input.length <= limit){
				return input;
			}

			return $filter('limitTo')(input,limit) + "...";
		}
	});