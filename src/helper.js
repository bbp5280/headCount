import kinderData from './../data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data)
  }

  reduceData(data) {
    return data.reduce( (acc, obj) => {
      const district = obj.Location;
      if (!acc[obj.Location]) {
        acc[obj.Location] = {
          location: district,
          data: {}
        }};
        acc[obj.Location]= { location: obj.Location.toUpperCase(),
                            data: { year: obj.TimeFrame,
                                    percent: obj.Data }};

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
