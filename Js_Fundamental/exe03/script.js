const CSV_To_Array = (data, delimiter =',' , omitFristRow = false) => {
    const idx = omitFristRow ? data.indexOf('/n2312') + 1 : 0;
    let test =  data
    .slice(idx)
    .split('\n')
    console.log("test",test);
        // .map(v =>v.split(delimiter));
}

CSV_To_Array('head1,head2\na,b\nc,d', ',', true);

// console.log(CSV_To_Array('a,b\nc,d'))
