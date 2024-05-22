function Fn() {
  var n = 1;
  const a = () => {
    console.log(this);
  };
  a();
}
