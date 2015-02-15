
//Model
function Rectangle(id, width, height, background, color, text, name) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.background = background;
    this.color = color;
    this.text = text;
    this.name = name;

    this.colorReset = function(rectangles) {
        for (var i = 0; i < rectangles.length; i++) {
            if (rectangles[i].background === "firebrick") {
                rectangles[i].background = "steelblue"
            };
        };
    };

    this.changecolor = function() {
        if (this.background === "steelblue") {
            this.background = "firebrick";
        } else {
            this.background = "steelblue"
        }
    };

};

app.controller("rectangles", function($scope, $filter) {

    var orderBy = $filter('orderBy');

    var recs = [

        new Rectangle(1, 300, 50, "steelblue", "white", "January", "January"),
        new Rectangle(2, 300, 50, "steelblue", "white", "February", "February"),
        new Rectangle(3, 300, 50, "steelblue", "white", "March", "March"),
        new Rectangle(4, 300, 50, "steelblue", "white", "April", "April"),
        new Rectangle(5, 300, 50, "steelblue", "white", "May", "May"),
        new Rectangle(6, 300, 50, "steelblue", "white", "June", "June"),
        new Rectangle(7, 300, 50, "steelblue", "white", "July", "July"),
        new Rectangle(8, 300, 50, "steelblue", "white", "August", "August"),
        new Rectangle(9, 300, 50, "steelblue", "white", "September", "September"),
        new Rectangle(10, 300, 50, "steelblue", "white", "October", "October"),
        new Rectangle(11, 300, 50, "steelblue", "white", "November", "November"),
        new Rectangle(12, 300, 50, "steelblue", "white", "December", "December"),


    ];

    $scope.order = function(predicate, reverse) {
        $scope.rectangles = orderBy(recs, predicate, reverse);
    };
    $scope.order('id', false);

});
