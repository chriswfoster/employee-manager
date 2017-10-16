export default class Employee {
  constructor(id, name, phone, title){
    this.title= title,
    this.name= name,
    this.phone= phone,
    this.id= id
  }
  employeeName(name){
    this.title=name;
  }
  updatePhone(phone){
    this.phone= phone;
  }
  updateTitle(title){
    this.title= title;
  }
  }