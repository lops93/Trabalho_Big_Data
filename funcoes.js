$(document).ready(function(){

    //*********CARREGAR USUARIOS NO COMBO**************** */
    var option_user = '';
    var tbl_loc = '';
    var br = ' <img src="plugin/img/br.png" class="br">'

      
    $.getJSON('https://raw.githubusercontent.com/hmageste/BigData_FinalAssignment/master/trackme-sample-data.json', function(data, key) {
        //console.log(data.users); 
        option_user += "<option value='0'>selecione o usuário</option>";   
        $.each( data.users, function( i, user ) {
        var key = i;
        console.log(user.username);
        console.log(key)
        option_user += "<option value=" + key + ">" + user.username + "</option>"

    });
    $('#users').html(option_user);
    /************************************************ */
    //*********CARREGAR LOCALIZAÇÃO NA TABELA**************** */

    $("#btn-localizacao").click(function(){
        var usuario = $("#users").val()
        var dt = new Date($("#dt").val());
        var dia = dt.getDate() +1;
        var mes = dt.getMonth() +1;
        console.log(dia+"/"+mes)
      var tbl_loc = '';
    $.each( data.locations, function( i, location ) {
        if (usuario === location.uid){
            location.timestamp.month = location.timestamp.month +1
            location.timestamp.year = location.timestamp.year -100
        tbl_loc += "<tr><td>"+br+""+ location.country +"</td><td>"+ location.address +"</td><td>"+ location.altitude +"</td><td>"+ location.latitude +"</td><td>"+ location.longitude +"</td><td>"+ location.accuracy +"</td><td>"+ location.provider +"</td><td>"+ location.timestamp.day +"/"+location.timestamp.month +"/"+location.timestamp.year +"</td><td>"+ location.timestamp.hours +":"+location.timestamp.minutes +"</td></tr>";
    }
    });

    $('#tbl').html(tbl_loc);
});


    Object.keys(data).forEach(function(key) {
        var values = data[key];
        //console.log(values);
    });
    for(var i in data.users){
        var key = i;
        var val = data.users[i];
        //console.log(key)
    }
});




    
});
