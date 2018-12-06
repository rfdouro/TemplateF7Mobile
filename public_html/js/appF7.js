// Dom7
var $$ = Dom7;
//usado no calendar
var meses = [
 'Janeiro', 'Fevereiro',
 'Março', 'Abril',
 'Maio', 'Junho',
 'Julho', 'Agosto',
 'Setembro', 'Outubro',
 'Novembro', 'Dezembro'];
var mesesAbr = [
 'Jan', 'Fev',
 'Mar', 'Abr',
 'Mai', 'Jun',
 'Jul', 'Ago',
 'Set', 'Out',
 'Nov', 'Dez'
];
var dias = [
 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
];
var diasAbr = [
 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
];
// Framework7 App main instance
var appF7 = new Framework7({
 root: '#app', // App root element
 id: 'br.org.rfdouro.templateF7Mobile', // App bundle ID
 name: 'Template F7 with Vue - mobile', // App name
 theme: 'auto', // Automatic theme detection
 calendar: {
  routableModals: false, //precisa disso pq tava dando pau
  openIn: 'customModal',
  header: true,
  headerPlaceholder: 'Selecione a data',
  footer: true,
  monthNames: meses,
  monthNamesShort: mesesAbr,
  dayNames: dias,
  dayNamesShort: diasAbr,
  dateFormat: 'dd/mm/yyyy',
  touchMove: !Framework7.device.desktop,
  closeOnSelect: true,
  toolbarCloseText: 'Ok'
 },
 dialog: {
  buttonOk: 'Ok',
  buttonCancel: 'Cancela'
 },
 // App root data
 data: function () {
  return {
   pagina: ''
  };
 },
 // App root methods
 methods: {
  //elabora a navegação
  urlParam: function (parametro) {
   try {
    var results = new RegExp('[\?&]' + parametro + '=([^&#]*)').exec(this.pagina);
    return results[1] || 0;
   } catch (e) {

   }
  },
  navega: function (obj) {
   var r = (Math.random());
   if (obj.pagina.indexOf('?') > 0) {
    obj.pagina += '&r=' + r;
   } else {
    obj.pagina += '?r=' + r;
   }

   this.pagina = obj.pagina;

   //console.log('pagina = '+this.pagina)

   if (!obj.div)
    appF7.request.get(obj.pagina, null, function (dados) {
     alert(dados);
    });
   else
    appF7.request.get(obj.pagina, null, function (dados) {
     //usando Dom7 -- não funciona como desejado
     //$$('#' + obj.div).html(dados);
     //usando JQuery
     $('#' + obj.div).html(dados);
    });
  },
  dialogConfirma: function (texto, callbackSim, callbackNao) {
   appF7.dialog.create({
    title: appF7.name,
    text: texto,
    buttons: [
     {
      text: 'Não',
      cssClass: 'color-red',
      onClick: function (dialog, e) {
       if (typeof callbackNao === 'function') {
        callbackNao();
       }
      }
     },
     {
      text: 'Sim',
      cssClass: 'color-green',
      onClick: function (dialog, e) {
       if (typeof callbackSim === 'function') {
        callbackSim();
       }
      }
     }
    ],
    verticalButtons: false,
    on: {
     opened: function () {

     },
     close: function () {

     }
    }
   }).open();
  }
 }
});
