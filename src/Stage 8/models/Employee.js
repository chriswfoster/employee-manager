export default class Employee {
  constructor(id, title, name, phone){
    this.id = id,
    this.phone = phone,
    this.name = name, 
    this.title = title
  }
  
  updateName (name){
    this.name = name
  }


  updatePhone (phone){
    this.phone = phone;
  }

   updateTitle(title){
     this.title = title;
   }
}