import kinderData from './../data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(data) {
    this.data = kinderData.reduce( (acc, obj) => {
      if (!acc[obj.Location]){
        acc[obj.Location]= [];
      }
        acc[obj.Location].push({ year: obj.TimeFrame,
          percent: obj.Data} );
        return acc;
    }, {});
    console.log(this.data);
  }

  findByName(){
    Object.keys(this.data)
  }

}
