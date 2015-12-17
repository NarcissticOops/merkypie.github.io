$('document').ready(function(){
  $('iframe').load(function(){
    $('iframe').contents().find('head').append($(
      '<style type="text/css"> .photoset_row {width: 590px; !important margin: 0 auto; !important } .photoset_row img { height: auto; !important} </style>'));
  });
});
