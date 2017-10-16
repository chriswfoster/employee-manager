export default class Employee {
  constructor(id, title, name, phone){
    this.phone = phone,
    this.id = id,
    this.title = title,
    this.name = name
  }
  
  updateName(name){
    this.name = name;
  }
  updatePhone(phone){
    this.phone = phone;
  }
   updateTitle(title){
     this.title = title;
   }
}