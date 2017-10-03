export class MajorScore {
  private blockName;
  private scoreHistories = [] ;
  private year;
  constructor(data: any) {
    console.log(data);
    if (data.block.blockName) {
      this.blockName = data.block.blockName;
    }
    if(data.scoreHistories){
      this.scoreHistories.push(data.scoreHistories);
    }
  }
}
