$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devour = $(this).data("devour");

        var devourState = {
            devoured: devour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurg = {
            burger_name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
