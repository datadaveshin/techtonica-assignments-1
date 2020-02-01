
class Event {
    constructor(name, description) {

        this.name = name;
        this.description = description;
        this.availableTickets = [];

    }
    addAvailableTickets(type, price) {
        //     let event=new Event();
        //    this.availableTickets.push(event);
        this.availableTickets.push(type, price)
        // console.log(type,price);
    }
    
    allTickets() {
        return this.availableTickets;  
    }
    searchTicket(min,max){
       for(let i=0; i<this.availableTickets.length; i++){
        if(this.availableTickets[i]>=min && this.availableTickets[i]<=max){
            return this.availableTickets[i];
        }else {
            return `No tickets available.`
        }
    }
    }
}

class TicketType {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
}

const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const eventObj2 = new Event("skillet& Sevendust", "victorious was tour");
const eventObj3 = new Event("Jenny Lewis", "On the lin tour 2019")
const eventArray = new Array();
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);


$(document).ready(function () {
    let html = " ";
    $.each(eventArray, function (index, item) {
        html += `<li>${item.name}-${item.description}</li>-all ticket:${item.searchTicket()}`;
    });
    $("#event").html(html);
})


eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);
// console.log(eventObj3.searchTickets(0, 250));


