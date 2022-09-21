// garbage values
let time = [];
for (let i in data) {
  time.push(data[i].Time);
}
time = time.map((e) => {
  return e.slice(e.length - 2, e.length);
});
console.log(time);

const dataset = async () => {
  const response = await fetch("http://localhost:5000/module/getAll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = [];
  const json = await response.json();
  if (json) {
    for (let i in json) {
      data.push(json[i].data[0]);
    }
    setData(data);
  }
};
if (ref.current === false) {
  dataset();
}
// dataset();
// return () => {
//   ref.current = true;
};


if (data) {
    let d = Object(data);
    console.log("true ref");
    let sec = "" + d.Time;
    sec = sec.slice(sec.length - 2, sec.length);

    sec = sec.slice(sec.length - 2, sec.length);
    setTime(new Array(10).fill(parseInt(sec)));
    console.log(time);
    // setVdc(revdc(d));
    // console.log(vdc)
  // // console.log(d);
  // // console.log(d);
    }


    <Stack spacing={2} direction="row">
        <Button style={{ fontSize:"15px", border:"2px solid blue"}}>
          <Link to="table" style={{color:"blue"}}>Table</Link>
        </Button>
        <Button style={{fontSize:"15px",border:"2px solid blue"}}>
          <Link to="graph" style={{color:"blue"}}>Graph</Link>
        </Button>
      </Stack>



for (let i = 0; i < 10; i++) {
  let sp = "vdc" + (i + 1);
  vdc.push(parseInt(d[0][sp]));
}let vdc = [];

let sec = "" + d[0].Time;
  sec = sec.slice(sec.length - 2, sec.length);

  sec = sec.slice(sec.length - 2, sec.length);
  return new Array(10).fill(parseInt(sec));


  date = date.replace("/", "-");
    date = date.replace("/", "-");
    // date = date.replace("9", "09");
    date = date.replace("3", "2");
    time = time.replace("45", "23");
    console.log(date);
    let da = new Date();
    console.log(date, time);
    let month = parseInt(
      date.slice(date.indexOf("-") + 2, date.indexOf("-") + 3)
    );
    da.setMonth(month);
    console.log();
    da.setMinutes(37);
    console.log(da.getMonth(), da.getMinutes());
    console.log(Date());


    