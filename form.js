$(document).ready(function(){
    //get Form From get reguest
    $.ajax({
        url: "https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/getFormSchema",
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){            
            for(key in data){                
                $("#myForm").append('<label for="' + key + '"><b>'+key+'</b></label> <input type="' + data[key].type + '" value="' + data[key].value + '" name="' + key + '"> <hr/>')
            }
           
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });

    //submit Form
    $("#myForm").submit(function(e){
        e.preventDefault();
        var form = $(this);
        var data = form.serializeArray(); 
        console.log(JSON.stringify(getFormData(data)));            
        $.ajax({
            url: "https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/submission",
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(getFormData(data)),
            success: function(data){
                console.log("DATA POSTED SUCCESSFULLY"+data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    });
});
function getFormData(data) {
    console.log(data);
    var unindexed_array = data;
    var indexed_array = {};     
    $.map(unindexed_array, function(n, i) {
        // console.log('n>>',n);
        indexed_array[n['name']] = n['value'];
        
    });
    if($("input[type=checkbox]").prop("checked",true)){
            indexed_array['final_submission'] = true;
    }
    // indexed_array['final_submission'] = indexed_array['final_submission'] ? true : false;
    return indexed_array;
}


