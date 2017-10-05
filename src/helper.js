import kinderData from './../data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data)
    this.reduceData = this.reduceData.bind(this)
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

    const keysArray = Object.keys(this.data);
    const searchResult = keysArray.find( district =>
      search.toUpperCase() === district.toUpperCase());

    return this.data[searchResult];

    if(!searchResult) {
      return undefined;
    }
  }

  findAllMatches(search) {
    const keysArray = Object.keys(this.data);
    let dataArray =[];

    if(!search) {
        keysArray.forEach(district => {
        dataArray.push(this.data[district]);
    })
      return dataArray;
    }

    const searchResult = keysArray.filter(district => {
      search = search.toUpperCase();
      return district.startsWith(search);
      })

      searchResult.forEach( result => {
        dataArray.push(this.data[result]);
      })

      return dataArray;
  }

  findAverage(district) {
    const yearArray = Object.keys(this.data[district].data);

    const addedData = yearArray.reduce( (acc, year) => {
      acc = acc + (this.data[district].data[year]);
      return acc;
    }, 0);

    const averagedData = Math.round((addedData / 11) * 1000) / 1000;
    return averagedData;
  }

  compareDistrictAverages(district1, district2) {
    const district1Average = this.findAverage(district1.toUpperCase());
    const district2Average = this.findAverage(district2.toUpperCase());
    let diff;

    if (district1Average < district2Average) {
      diff = district1Average / district2Average;
    } else {
      diff =  district2Average / district1Average;
    }

    diff = Math.round(diff * 1000) / 1000;

    return { [district1.toUpperCase()]: district1Average,
             [district2.toUpperCase()]: district2Average,
              compared: diff }
    }

}
