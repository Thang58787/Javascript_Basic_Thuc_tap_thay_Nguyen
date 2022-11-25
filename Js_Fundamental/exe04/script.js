
const CSV_to_JSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    //console.log(titles)
    const a = data.slice(data.indexOf('\n') + 1);
    console.log(a)
    const b = a.split('\n')
    console.log(b)
    return b.flatMap(v => {
      const values = v.split(delimiter);
      
      return titles.reduce((obj, title, index) => {
        return ({
        ...obj,
        [title]: values[index]
      })
      
    }, {})
    })


  };
  console.log(CSV_to_JSON('col1,col2\na,b')); 
  //console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];



