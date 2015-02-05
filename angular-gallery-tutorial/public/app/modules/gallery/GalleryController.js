angular.module('GalleryController', []).controller('GalleryController', function($scope) {
    $scope.myInterval = 5000;
    $scope.slides = [
        {
            image: 'https://forrestlyman.files.wordpress.com/2015/02/10753367973_6a56e02252_z.jpg',
            title: 'La Hoguera',
            text: 'fine dining, baja style'
        },
        {
            image: 'https://forrestlyman.files.wordpress.com/2015/02/12193611106_d83c9f10ae_z.jpg',
            title: 'Organic tomatoes',
            text: 'basic and queso cotija'
        },
        {
            image: 'https://forrestlyman.files.wordpress.com/2015/02/10636874903_3df6de12b9_z.jpg',
            title: 'Sweetbreads',
            text: 'a la mesquite'
        },
        {
            image: 'https://forrestlyman.files.wordpress.com/2015/02/10753161186_a2fc84ec94_z.jpg',
            title: 'Cowboy steak',
            text: 'Sonoran range beef'
        }
    ];
});