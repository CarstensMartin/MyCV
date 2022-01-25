//Use AJAX to load once HTML page is loaded 
$(document).ready(function () {

    //Function to Hide all the Read More sections of the page
    function startHideReadmore() {
        $('#readControllerSteinweg').slideUp(1);
        $('#readGM').slideUp(1);
        $('#readFreightController').slideUp(1);
        $('#readFleetSupervisor').slideUp(1);

    };
    //Run the function to hide the read more sections
    startHideReadmore();

    //Read more function on button for import/export controller work experience 
    $('#readMoreControllerSteinweg').on('click', function () {
        $('#readControllerSteinweg').slideDown(300)
    });
    //Read less function on button for import/export controller work experience 
    $('#readLessControllerSteinweg').on('click', function () {
        $('#readControllerSteinweg').slideUp(300)
    });

    //Read more function on button for general manager work experience
    $('#readMoreGM').on('click', function () {
        $('#readGM').slideDown(300)
    });
    //Read less function on button for general manager work experience 
    $('#readLessGM').on('click', function () {
        $('#readGM').slideUp(300)
    });

    //Read more function on button for freight forwarding controller work experience
    $('#readMoreFreightController').on('click', function () {
        $('#readFreightController').slideDown(300)
    });
    //Read less function on button for freight forwarding controller work experience
    $('#readLessFreightController').on('click', function () {
        $('#readFreightController').slideUp(300)
    });

    //Read more function on button for fleet supervisor work experience
    $('#readMoreFleetSupervisor').on('click', function () {
        $('#readFleetSupervisor').slideDown(300)
    });
    //Read less function on button for fleet supervisor work experience
    $('#readLessFleetSupervisor').on('click', function () {
        $('#readFleetSupervisor').slideUp(300)
    });
});