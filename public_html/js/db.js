function DB() {
 this.empregados = [
  {id: 1, nome: 'Joao', nascimento: '04/05/1978'},
  {id: 2, nome: 'Maria', nascimento: '04/05/1978'},
  {id: 3, nome: 'Joana', nascimento: '04/05/1978'}
 ];
 this.add = function (n, nasc) {
  var nId = this.empregados.length + 1;
  this.empregados.push({
   id: nId,
   nome: n,
   nascimento: nasc
  });
 };
 this.get = function (_id) {
  var t = this.empregados.length;
  for (var i = 0; i < t; i++) {
   if (this.empregados[i].id === _id) {
    return this.empregados[i];
   }
  }
  return null;
 };
 this.update = function (_data) {
  var t = this.empregados.length;
  for (var i = 0; i < t; i++) {
   if (this.empregados[i].id === _data.id) {
    this.empregados[i] = _data;
    return;
   }
  }
 };
 this.remove = function (_id, callback) {
  var t = this.empregados.length;
  for (var i = 0; i < t; i++) {
   if (this.empregados[i].id === _id) {
    this.empregados.splice(i, 1);
    break;
   }
  }
  if (typeof callback === 'function') {
   callback();
  }
 };
}
;

var db = new DB();

