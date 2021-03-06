app.controller('addEditCmsController', ['htmlToText', 'Upload','$routeParams','toastyService', '$scope', '$location', '$rootScope', '$http', 
    function(htmlToText, Upload, $routeParams, toastyService, $scope, $location, $rootScope, $http) {
        
        (function(){

            pageInfo();

        }());

        function pageInfo() {
            var page = $routeParams.page;
            if (page == 'add-new-page') {
                $scope.csmPageTittle = "Add New Page";
            } else {
                $scope.csmPageTittle = "Edit Page";
                $http.get('/admin/cms-page-by-id?id=' + page).then(function(response) {
                    $scope.page = response.data.page;
                    $scope.page.content = htmlToText.convert($scope.page.content);
                });
            }
        }

        $scope.updatePage = function(file) {
            if (!$scope.page.content) {
                toastyService.notification(false, "Please fill all required flield");
            } else {
                Upload.upload({
                    url: '/admin/insert-update-page',
                    data: {
                        file: file,
                        pageInfo: $scope.page
                    }
                }).then(function(response) {
                toastyService.notification(response.data.success, response.data.msg);
                if (response.data.success) {
                    $location.path('/admin/pages');
                }
                });   
            }
        }; 
        


             

}]);