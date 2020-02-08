class Event {
    constructor(name, description,type, price){
        
        this.name=name;
        this.description=description;
        this.availableTickets=[];
        this.type=type;
        this.price=price
    }
    addAvailableTickets(type,price){
        let result=`${this.type}-${this.price}`;
        return result;
    }
   
}
class TicketType extends Event{
    constructor(type, price){
       super(type,price)
    }
    
    
}
const eventObj1= new Event("holiday", "date of holiday");
const eventObj2= new Event("skillet& Sevendust", "victorious was tour");
const eventObj3=new Event("Jenny Lewis", "On the lin tour 2019")
const eventArray=new Array();
eventArray.push(eventObj1,eventObj2, eventObj3);
console.log(eventArray);


$(document).ready(function(){
    let html=" ";
    $.each(eventArray, function(index,item){
        html+=`<li>${item.name}-${item.description}</li>`;
    });
    $("#event").html(html);
})


console.log(eventObj1.addAvailableTickets("balcony", 35))