//  Written code from Techtonica 
// $(document).ready(function() {
//     // console.log('myScript.js loaded!');
//     $('#red-sentence').click(function() {
//       // First remove the purple-text class in case it was added first.
//       $(this).removeClass('purple-text');
//       // Then add the red-text class to turn the sentence red.
//       $(this).addClass('red-text');
//     });
  
//     $('#blue-button').click(function() {
//       // We can also "chain" methods together like this:
//       $('#blue-sentence')
//       .removeClass('purple-text')
//       .addClass('blue-text');
//     });
  
//     $('#purple-button').click(function() {
//       $('.colorful-sentence').addClass('purple-text');
//     });
//   });
//   © 2020 GitHu


// Practice with my code
// Activity 3 -customize the jQuery Example

    //Using the jQuery documentation or other resources as your guide, 
    //add the ability to change a paragraph's font size when it is clicked. 
        $(document).ready(function(){
            $("#red-sentence").click(function(){
                $(this).css("font-size","40px")
            });
            $("#red-sentence").hover(function(){
                $(this).css("background-color","yellow");
            }, function(){
                 $(this).css("background-color","pink");
            })
        });
