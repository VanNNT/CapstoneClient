export class Answer {
  id: number;
  content: string;
  createdDateTime: string;
  parentId: number;
  userId: number;
  userName: string;
  userImage: string;
  vote: number;
  isEdit: boolean;
  constructor(data: any) {
    if (data) {
     this.id = data.id;
     this.content = data.content;
     this.createdDateTime = data.createdDateTime;
     this.parentId = data.parentId;
     this.userId = data.users.id;
     if(data.users.name){
       this.userName = data.users.name;
     }else{
       this.userName = data.users.username;
     }
     this.userImage = data.users.image;
     this.vote = data.vote;
     this.isEdit = false;
    }
  }
}
