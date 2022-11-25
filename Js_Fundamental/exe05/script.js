// const JSON_to_CSV = (arr, columns, delimiter = ',') =>


//   [
//     columns.join(delimiter),

//     ...arr.map(obj =>
//       columns.reduce(
//         (acc, key) => `${acc}${acc.length ===0? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`, ''
//       )
//     )
//   ].join('\n');

// console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
// //console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));

const JSON_to_CSV = (arr, columns, delimiter = ',') =>
    [
      columns.join(delimiter),
      // console.log(columns)
      ...arr.map(obj => columns.reduce(
        (acc,key) =>`${acc} ${acc.length ===0? '' : delimiter}"${!obj[key] ? "" : obj[key]}"` ,""
      )
    )
    ].join('\n');

    console.log (JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
