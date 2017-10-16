export default class Employee {
  constructor(id, name, title, phone){
    this.phone = phone,
    this.id = id,
    this.name = name,
    this.title = title
  }
  
  employeeName(name){
    this.name = name;
  }

  updatePhone(phone){
    this.phone = phone;
  }

   updateTitle(title){
     this.title = title;
   }
}