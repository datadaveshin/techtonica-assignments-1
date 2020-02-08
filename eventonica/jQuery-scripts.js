$(document).ready( () => {
    // const eventRecommender = new EventRecommender(); 
    // console.log(recommandation)
    // let html="";
    // $.each(recommandation.users, function(index,item){
    //       html+=`<li>${item.newUser}</li>`
    // });
    // $("#all-users").html(html);
   
    $("#button").click(function(e){
        e.preventDefault();
        let addId=$("#add-user-id").val();
    let addUser=$("#add-user-name").val();
   
        $("#all-users").append("<li>User ID: "  + addId + ": " + "User Name: "+ addUser +"</li>")
        // $("#all-users").html(addUser)
       
    })
    

    $("#deleteBtn").click(function(e){
        e.preventDefault();

        let allUserText=$(all-users).text();
        $("#allUser li").each(function(){
            if($("#add-user-id").val()===$("#delete-user-id").val()){
                $("#all-users li").remove();
            }
        })
     
    })

    // Event Management 
     $("#eventBtn").click(function(e){
         e.preventDefault();
         let eventId=$("#add-event-id").val();
          let eventName=$("#add-event-name").val();
          $("#eventList").append("<li>Event Id:"+eventId+ ",Event Name:" + eventName+"</li>")
          
     })


});

