
class EventRecommender {
    constructor() {
    // All main properties should go here.
    
    this.events =[];
    this.users = [];
    }

    addEvent(newEvent) {
      this.events.push(newEvent);
    }

    addUser(newUser) {
        this.users.push(newUser);
    }

    saveUserEvent(user, event){
    //    user.push(event)
       user.addPersonEvent(event)

       // Allow users to save events to a personal Events array.
    }

    deleteUser(user) {
      this.users.splice(this.users.indexOf(user),1);
  return this.users
     
      
    }
   
    deleteEvent(event) {
        this.events.splice(this.events.indexOf(event),1);
  return this.events
    }

    findEventsByDate(dates){
        
      let eliEvent=[]
       for (let i=0; i<this.events.length; i++){
          if(dates===this.events[i].date){
              eliEvent.push(this.events[i].eventName)
          }
       }return eliEvent;
      
    }
    
    findEventsbyCategory(category){
       let matchCategory=[]
       for (let i=0; i<this.events.length; i++){
          if(category===this.events[i].category){
              matchCategory.push(this.events[i].eventName)
          }
       }return matchCategory;
    }
}

class User{
    constructor(newUser){
       this.newUser=newUser;
        this.personalEvent=[]
    }
    addPersonEvent(event){
        this.personalEvent.push(event);
    }
    
}
class Event{
    constructor (eventName,date,category){
        this.eventName=eventName;
         this.date=date;
         this.category=category;
    }  
    
}

// const value1 = "Hello"
// const value2 = 2
// const value3 = new Date();
// const foo = [];



const event1= new Event("happy Hour After Work","Tuesday", "happy hour");
const event2 =new Event("Weekend Pinic","Sunday", "happy weekend");
const user1=new User("Bob");
const user2=new User("kate");
let recommandation =new EventRecommender();
recommandation.addUser(user1);
recommandation.addUser(user2);
recommandation.addEvent(event1);
recommandation.addEvent(event2);
user1.addPersonEvent("Studying");
// console.log(recommandation.events)
console.log(recommandation.users[0])
// testing to see if search by date and category works
// console.log(recommandation.events);
// console.log(recommandation.users);
// console.log(recommandation.findEventsByDate("Tuesday"));
// console.log(recommandation.findEventsbyCategory("happy weekend"));

if (typeof module != 'undefined'){
    module.exports = { EventRecommender, User,  Event} 
}

class classRoom {
    constructor(){
    this.name=name;
    this.name1={};
    }
}

let bigClass=new classRoom("happy")
console.log(bigClass)