$(document).ready(function(){

    $("#addItem").click(function(){
        $("input").val('');
    });

    var sno = 1
        $("#add").click(function(){

           
            var name = $("#inputName").val();
            var age =  $("#inputAge").val();
            var row = '<tr><th scope="row">'+sno+'</th><td class="name">'+
            name+'</td><td class="age">'+
            age+'</td><td>'+
            '<div class="btn-group btn-group-toggle" data-toggle="buttons">\
            <button type="button" id="update1" class="btn btn-primary updateItems" data-toggle="modal" data-target="#addModal">Update</button>\
            <button type="button" id="" class="btn btn-primary" data-toggle="modal" >Up</button>\
            <button type="button" id="" class="btn btn-primary" data-toggle="modal" >Down</button>\
            <button type="button" id="delete" class="btn btn-primary" data-toggle="modal">Delete</button>\
            <button type="button" id="" class="btn btn-primary" data-toggle="modal" >View</button>\
          </div>'+'</td></tr>';
            $('#tabody').append(row);

            sno +=1;
        });
            // $("td");

            // $("#fullName").text(name);
            // $("#age").text(age);

            // $("#")



            $("#tabody").on('click', '#delete', function () {
                $(this).closest('tr').remove();
            });
            
        $("#tabody").on("click",'#update1' ,function(){                
            var name =$(event.target).closest('tr').find('.name').text();
            var age = $(event.target).closest('tr').find('.age').text();
            console.log(name,age );
            $("#inputName").val(name);
            $("#inputAge").val(age);

            $("#addModal").on("click",'#update2',function(){

                var newname = $("#inputName").val();
                var newage =  $("#inputAge").val();
                console.log("testing",newname)

                $(event.target).closest('tr').find('.name').text(newname);
                $(event.target).closest('tr').find('.age').text(newage);
            });
            
            
            // $("#inputAge").val($("#ipage").text());
            // $(this).click(function(){
            //     var name = $("#ipname").text()
            //     console.log(name); 
            // });

            
        });
       
});