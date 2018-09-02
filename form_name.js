$(document).ready(function(){
    $("#myForm").submit(function(e){
        e.preventDefault();
        var form = $(this);
        var data = form.serializeArray();
        alert(data[5].value==true?'on':'eee')
console.log(data);
        $.ajax({
            url: "https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/submission",
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify($(document).ready(function(){
                $.ajax({
                        url: "https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/getFormSchema",
                        dataType: 'json',
                        type: 'GET',
                        // contentType: 'application/json',
                        // data: JSON.stringify(getFormData(data)),
                        success: function(data){
                            // var obj = JSON.parse(data)
                            console.log("DATA POSTED SUCCESSFULLY"+JSON.stringify(data));
                            var y = JSON.stringify(data);
                            
                            for(key in data){
                               console.log(key);
                                
                                $("#myForm").append("<input type='+key.type+' value='+key.value+'/>")
            
                            }
                           
                        },
                        error: function( jqXhr, textStatus, errorThrown ){
                            console.log( errorThrown );
                        }
                    });
                $("#myForm").submit(function(e){
                    e.preventDefault();
                    var form = $(this);
                    var data = form.serializeArray();
                    console.log("formData>>",getFormData(data));
                    
                    // $.ajax({
                    //     url: "https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/submission",
                    //     dataType: 'json',
                    //     type: 'POST',
                    //     contentType: 'application/json',
                    //     data: JSON.stringify(getFormData(data)),
                    //     success: function(data){
                    //         console.log("DATA POSTED SUCCESSFULLY"+data);
                    //     },
                    //     error: function( jqXhr, textStatus, errorThrown ){
                    //         console.log( errorThrown );
                    //     }
                    // });
                });
            });
            
            //utility function
            function getFormData(data) {
                var unindexed_array = data;
                var indexed_array = {};
            
                $.map(unindexed_array, function(n, i) {
                    //console.log('n>>',n);
                    indexed_array[n['name']] = n['value'];
                });
                indexed_array['final_submission'] = indexed_array['final_submission'] ? true : false;
            
                return indexed_array;
            }
            (data)),
            success: function(data){
                console.log("DATA POSTED SUCCESSFULLY"+data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    });
});

//utility function
function getFormData(data) {
    var unindexed_array = data;
    var indexed_array = {};

    $.map(unindexed_array, function(n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
