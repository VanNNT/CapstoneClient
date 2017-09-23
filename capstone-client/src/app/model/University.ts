export class University {
  id: number;
  text: string;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.text = data.name;
      }

    }
}
