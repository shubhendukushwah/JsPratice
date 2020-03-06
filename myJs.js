$(document).ready(function(){

    $("#addItem").click(function(){
        $("#inputName").show();
        $("#inputAge").show();
       
        $("#readName").hide();
        $("#readAge").hide();

        $("#update2").hide();
        $("#add").show();
        $("input").val('');
    });
    // add row
        $("#add").click(function(){           
            var name = $("#inputName").val();
            var age =  $("#inputAge").val();

            if(isNaN(age)){
                alert("Invalid age");

            }
            
            else{
                var row = '<tr><th scope="row" class="serial-num">'+$('tr').length+'</th><td class="name">'+
                name+'</td><td class="age">'+
                age+'</td><td>'+
                '<div class="btn-group btn-group-toggle" data-toggle="buttons">\
                <button type="button" class="btn btn-sm btn-dark update1" data-toggle="modal" data-target="#addModal">Update</button>\
                <button type="button" id="" class="btn btn-dark" data-toggle="modal" >Up</button>\
                <button type="button" id="" class="btn btn-dark" data-toggle="modal" >Down</button>\
                <button type="button"  class="btn btn-dark view" data-toggle="modal" data-target="#addModal">View</button>\
                <button type="button" id="delete" class="btn btn-dark" data-toggle="modal">Delete</button>\
              </div>'+'</td></tr>';
                $('#tabody').append(row);

    
            }

           
        });

        delete row
            $("#tabody").on('click', '#delete', function () {
                var current_pos = $(this).closest('tr').find('.serial-num').text();
                var next_row = $(this).closest('tr').next('tr')
                $(this).closest('tr').remove();
                updateRowcount(current_pos,next_row)

            });

        var temp ='';

        // open modal and fill current selected row data
        $("#tabody").on("click",'.update1' ,function(){  
                  
            $("#add").hide();
            $("#update2").show();
            var name =$(this).closest('tr').find('.name').text();
            var age = $(this).closest('tr').find('.age').text();


            $("#inputName").show();
            $("#inputAge").show();

            $("#readName").hide();
            $("#readAge").hide();

            $("#inputName").val(name);
            $("#inputAge").val(age);

            temp = this;
            
        });

        // fill updated data in modal
        $("#update2").click(function(){
                
            $(temp).closest('tr').find('.name').text(getData()[0]);
            $(temp).closest('tr').find('.age').text(getData()[1]);
        });



               // View
               $("#tabody").on("click",'.view' ,function(){        
                $("#add").hide();
                $("#update2").hide();
                var name =$(temp).closest('tr').find('.name').text();
                var age = $(temp).closest('tr').find('.age').text();
                
                $("#inputName").hide();
                $("#inputAge").hide();

                $("#readName").show();
                $("#readAge").show();
               
                $("#readName").val(name);
                $("#readAge").val(age);
                
                
                
            });

        function getData() {

            var newname = $("#inputName").val();
            var newage =  $("#inputAge").val();
            var arr = [newname,newage]
            return arr;
        }


       function updateRowcount(pos,next_row){
           for(var i=pos ;i<$('tr').length;i++){
                $(next_row).closest('tr').find('.serial-num').text(i);
                next_row = $(next_row).closest('tr').next('tr')

           }

       }
});