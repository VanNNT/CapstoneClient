export class User {
  username: string;
  image: string;
  name: string;
  email: string;
  role = {};
  constructor(data: any) {
    if (data) {
     if(data.image){
       this.image = data.image;
     }else{
       this.image = '../../../assets/image/avatar-default.jpg';
     }
     if(data.name){
       this.name = data.name;
     }else{
       this.name = data.username;
     }
     this.email = data.email;
     this.role = data.role;
    }
  }
}
