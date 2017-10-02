export class MajorScore {
  private blockName;
  private majorUniId;
  private score;
  private year;
  constructor(data: any) {
    if (data) {
      this.blockName = data.blockName;
      this.majorUniId = data.majorUniId;
      this.score = data.score;
      this.year = data.year;
    }

  }
}
