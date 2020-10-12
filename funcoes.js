$(document).ready(function(){

    //*********CARREGAR USUARIOS NO COMBO**************** */
    var option_user = '';
    var tbl_loc = '';
    $.getJSON('https://raw.githubusercontent.com/hmageste/BigData_FinalAssignment/master/trackme-sample-data.json', function(data) {
        console.log(data.users); 
        option_user += "<option value='0'>selecione o usuário</option>";   
        $.each( data.users, function( i, user ) {
        console.log(user.username);
        option_user += "<option value=" + user.username  + ">" + user.username + "</option>"
    });
    $('#users').html(option_user);
    /************************************************ */
    $.each( data.locations, function( i, location ) {
        
    });


});

 
    
    
});