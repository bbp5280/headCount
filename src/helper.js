import kinderData from './../data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data)
  }

  reduceData(data) {
    return data.reduce( (acc, obj) => {
      const district = obj.Location.toUpperCase();

      if (!acc[district]) {
        acc[district] = {
          location: district,
          data: {}
        }};

      const year = [obj.TimeFrame];
      let percent = Math.round([obj.Data * 1000]) / 1000;

      if (isNaN(obj.Data)) {
        percent = 0;
      }

      Object.assign(acc[district].data, {[year] : percent})

      return acc;
    }, {})}


  findByName(search) {
    if(!search) {
      return undefined;
    }

    const dataArray = Object.keys(this.data);
    const searchResult = dataArray.find( district =>
      search.toUpperCase() === district.toUpperCase());

    return this.data[searchResult];

    if(!searchResult) {
      return undefined;
    }
  }

}
