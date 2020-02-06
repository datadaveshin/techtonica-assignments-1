$(document).ready( () => {
    // const eventRecommender = new EventRecommender(); 
    console.log(recommandation)
    let html="";
    $.each(recommandation.users, function(index,item){
          html+=`<li>${item.newUser}</li>`
    });
    $("#all-users").html(html);
    $("#button").click(function(e){
        e.preventDefault();
        let li=""
        let addUser=$("#add-user-name").val();
        
        $("#all-users").append(addUser)
        // $("#all-users").html(addUser)
       
    })
});

