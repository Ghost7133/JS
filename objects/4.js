let _name = "Kirill";
let surname = "Udin";
obj = {
  _name,
  surname,
  metod() {
    console.log(this._name, this.surname);
  },
  metod2() {
    console.log(this._name, this.surname);
  },
};
obj.metod2 = function() {
    console.log("My name", _name, surname);
}
obj.metod2();
delete obj.metod;

