/* 
 * componentes vue
 * a fazer....
 */

Vue.component('hello-component', {
 props: ['size', 'texto'],
 mounted: function () {
  //alert(this.size);
 },
 template: '<p v-bind:style="{ fontSize: size }">{{texto}}</p>'
});

Vue.component('foto-carrega-component', {
 //props: ['srcfoto', 'srcload', 'id'],
 props: {
  srcfoto: String,
  srcload: String,
  id:{
   type: String,
   required: true
  }
 },
 mounted: function () {
  var image = $("#"+this.id);
  var srcf = this.srcfoto;
  var $downloadingImage = $("<img>");
  //versão do load para jquery 3 +
  $downloadingImage.on('load', function () {
   image.attr("src", srcf);
  });
  //carrega a imagem
  $downloadingImage.attr("src", this.srcfoto);
 },
 template: '<img :src="srcload" :id="id" style="width:90%; height: auto">'
});
