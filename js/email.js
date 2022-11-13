$(document).ready(()=>{
    $('#emailForm').validate({
    
        errorPlacement: function(error, element) {
           
               
        if (element.attr("name") === "content" ){
            console.log(element.attr("name"));
            error.insertAfter($('.form-floating'));  
        
        }  else{
            error.insertAfter(element);
        }

    },   
    submitHandler:(form)=>{
            
        Email.send({
            SecureToken : "6ed94596-800f-4809-8c3c-b9d4cdd5f117",
            To : 'derekcm2181@gmail.com',
            From : "derekcm2181@gmail.com",
            Subject :$("#subject").val(),
            Body :$("#email").val() + "  " +$("#content").val()
        }).then(
          message => {
            const successBox= '<div id="messageBox" class="alert alert-success my-5 rounded" role="alert">'+
            'Email sent successfully! I will try to keep in touch with you as soon as possible!'+
            '</div>'
         
            const errorBox= '<div id="messageBox" class="alert alert-danger my-5 rounded" role="alert">'+
            'There was an error while sending the email!'+
            '</div>'

            if(message === "OK"){
                $("#inputContainer").prepend(successBox);

              
            }else{
                $("#inputContainer").prepend(errorBox);
            }

            setTimeout(()=>{
                $("#messageBox").remove();
            },2000)
          }
        ); 
    return false;
    },
        errorClass:'text-danger',
        highlight: function(element){
            $(element).closest('input').addClass('border-danger');
            
            $(element).closest('select').addClass('border-danger');
            $(element).closest('label.error').addClass('text-danger');
        },
        unhighlight: function(element){
            $(element).closest('input').removeClass('border-danger');
            $(element).closest('select').removeClass('border-danger');
          
        },
        success:function(element){
            $(element).closest('input').addClass('border-success');
            $(element).closest('select').addClass('border-success');
        
        },
        rules:{
        email:{
        required:true,
        email:true
        },
      
        content:{
            required:true
        },
        subject:{
            required:true
        }
    
     
    
    },
    
    messages:{
        email:{
            required:"<i class='fas fa-exclamation-circle'></i> This field can not be empty",
            email:"<i class='fas fa-exclamation-circle'></i> Please provide a valid email"
        },
       
        content:{
            required:"<i class='fas fa-exclamation-circle'></i> This field can not be empty",
        },
        subject:{
            required:"<i class='fas fa-exclamation-circle'></i> This field can not be empty",
        },
    },
    
    
        });
    
        $('#emailForm').submit((event)=>{
         
        })
});

