export class MBTIQuestion {
  id: number;
  name: string;
  question: string;
  option1: string;
  option2: string;
  MBTIGroup: string;
  isChecked: boolean;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.question = data.question;
      this.option1 = data.option1;
      this.option2 = data.option2;
      this.MBTIGroup = data.MBTIGroup;
      this.isChecked = false;
    }
  }
}
