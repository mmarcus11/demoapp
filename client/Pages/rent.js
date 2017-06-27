const house =


Template.rent.helpers(
 {
   house: function(){
     return Roommate.find();
   }
 }
)
