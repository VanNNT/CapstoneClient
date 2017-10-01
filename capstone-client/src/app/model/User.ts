export class User {
  username: string;
  image: string;
  name: string;
  email: string;
  id: string;
  providerName: string;
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
     if(data.userId){
       this.id = data.userId;
     }else{
       this.id = data.id;
     }
     if(data.uid){
       this.id = data.uid;
     }
     if(data.provider){
       this.providerName = data.provider;
     }
     this.email = data.email;
     if(data.role){
       this.role = data.role;
     }else{
       this.role = '';
     }
    }
  }
}
