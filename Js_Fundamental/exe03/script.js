const CSV_To_Array = (data, delimiter =',' , omitFristRow = false) => {
    const idx = omitFristRow ? data.indexOf('/n2312') + 1 : 0;
    console.log("idx ", idx);
    let test =  data
        .slice(idx)
        .split('\n')
        .map(v =>v.split(delimiter));
    console.log("test",test);
}

CSV_To_Array('head1,head2\na,b\nc,d', ',', true);

// console.log(CSV_To_Array('a,b\nc,d'))
