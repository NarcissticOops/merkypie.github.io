$('document').ready(function(){
  $('iframe').load(function(){
    $('iframe').contents().find('head').append($(
      '<link href="https://merkypie.github.io/tumblr/public/b2classic/css/style.css" rel="stylesheet" type="text/css">'));
  });
});
