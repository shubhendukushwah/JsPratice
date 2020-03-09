$(document).ready(function(){

    $("#addItem").click(function(){
        $("#exampleModalLabel").text("Add"); 
        $("#inputName").show();
        $("#inputAge").show();
       
        $("#readName").hide();
        $("#readAge").hide();

        $("#update2").hide();
        $("#add").show();
        $("input").val('');


      
      jQuery.validator.addMethod("nameip", function(value, element) {
          if (/^[a-zA-Z ]+$/.test(value)){
              return true;
          }
          else{
              return false;
          };
      }, "Invalid name");

      jQuery.validator.addMethod("ageip", function(value, element) {
        if (/^[0-9]+$/.test(value)){
            return true;
        }
        else{
            return false;
        };
    }, "Invalid age");


    var timeRepeated = 0; 

    $.validator.addMethod('unique', function(value, element) {
        
        if (value && value.length)
        {
            nameobj = $('#tabody').find('.name').each(function (){});
                var namearr=[];
                for (var i=0;i<nameobj.length;i++)
                {
                    name = nameobj[i].textContent.toLowerCase(); 
                    namearr.push(String(name))
                }
                if (namearr.includes(String(value.toLowerCase())))
                {
                    timeRepeated++;
                }
                else{
                    timeRepeated =1;
                }
            
        }
        if (timeRepeated >1)
        {
            return false;
        }
        else{
            return true;
        }
        

    }, "Duplicate name found");

      
        $("#basic-form").validate({
            rules: {
                    name: {
                    minlength:3,
                    required:true,
                    nameip:true,
                    unique:true
              },
              age:{
                  required:true,
                //   minlength:2,
                  ageip:true,
                  range: [18, 130]
              }
            },
            messages: {
                minlength: jQuery.validator.format("At least {0} characters required!"),
                unique: " Duplicate name found",
                range: "Age must be in range of 18-130 "
            }

        });

             
    });


    $("#add").click(function(){    
        

        $("#invalidName").hide(); 
        $("#invalidAge").hide();
        var name = $("#inputName").val();
        var age =  $("#inputAge").val();
        
        // if(isNaN(age)){
        //     $("#invalidName").hide(); 
        //     $("#invalidAge").text("Invalid age"); 
        //     $("#invalidAge").show(); 

        // }
        // else if(age == '' || name  == '' ){
        //     $("#invalidName").hide(); 
        //     $("#invalidAge").hide(); 
        //     $("#invalidName").text("Fields cannot be empty"); 
        //     $("#invalidName").show(); 
        // }

        // else if(! isalpha(name)){
        //     $("#invalidAge").hide();
        //     $("#invalidName").text("Invalid name"); 
        //     $("#invalidName").show(); 

        // }


            $("#invalidName").hide(); 
            $("#invalidAge").hide();
            var row = '<tr><th scope="row" class="serial-num">'+$('tr').length+'</th><td name='+name+' class="name">'+
            name+'</td><td class="age">'+
            age+'</td><td>'+
            '<div class="btn-group btn-group-toggle" data-toggle="buttons">\
            <button type="button" class="btn btn-sm btn-dark update1" data-toggle="modal" data-target="#addModal">Update</button>\
            <button type="button" id="" class="btn btn-dark up" data-toggle="modal" >Up</button>\
            <button type="button" id="" class="btn btn-dark down" data-toggle="modal" >Down</button>\
            <button type="button"  class="btn btn-dark view" data-toggle="modal" data-target="#addModal">View</button>\
            <button type="button" id="delete" class="btn btn-dark" data-toggle="modal">Delete</button>\
            </div>'+'</td></tr>';
            if ($("#basic-form").valid()){
            $('#tabody').append(row);
        }

    });



    // up and down
    $("#tabody").on('click',".up , .down",function(){
        
        var row = $(this).parents("tr:first");
        var current_pos = parseInt (row.find('.serial-num').text());

        if ($(this).is(".up") && current_pos!=1) {
            var pre_row = $(this).closest('tr').prev('tr')  ; 
            $(row).find('.serial-num').text(current_pos-1);
            $(pre_row).find('.serial-num').text(current_pos);
            row.insertBefore(row.prev());
            
        } else if ($(this).is(".down") && current_pos!=$('tr').length-1) {
            var next_row = $(this).closest('tr').next('tr'); 
            $(row).find('.serial-num').text(current_pos+1);
            $(next_row).find('.serial-num').text(current_pos);
            row.insertAfter(row.next());
        }
            
    });

    // delete row
    $("#tabody").on('click', '#delete', function () {
        
        var current_pos = $(this).closest('tr').find('.serial-num').text();
        var next_row = $(this).closest('tr').next('tr')
        $(this).closest('tr').remove();
        updateRowcount(current_pos,next_row);

    });

        

    // open modal and fill current selected row data
    
    var temp ='';   // Global variable
    $("#tabody").on("click",'.update1' ,function(){  
        $("#exampleModalLabel").text("Update");  
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
            $("#message").hide();   
        $("#exampleModalLabel").text("View");       
        $("#add").hide();
        $("#update2").hide();
        var name =$(this).closest('tr').find('.name').text();
        var age = $(this).closest('tr').find('.age').text();
        
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

       function isalpha(name)
        { 
            var letters = /^[a-zA-Z ]+$/;
            if(name.match(letters)){
                return true;
            }
            else{
                return false;
            }
        }

});