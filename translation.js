var tnum = 'pl';

$(document).ready(function(){
  
  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');     
  });
  
  $('.translate_wrapper .current_lang').click(function(e){    
    e.stopPropagation();
    $(this).parent().toggleClass('active');
    
    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 2);
  });

  translate(tnum);
  
  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');  
    
    var lang = $(this).attr('data-value');
    var tnum = lang;
    translate(tnum);
    
    $('.current_lang .lang-txt').text(lang);
    
    if (lang == 'ar'){
      $('body').attr('dir', 'rtl');
    } else{
      $('body').attr('dir', 'ltr');
    }
  });
  
});

function translate(tnum){
  $('.nav-about-two').text(trans[0][tnum]);
  $('.about-us').text(trans[1][tnum]);
  $('h4').text(trans[2][tnum]);
  $('.nav-home').text(trans[3][tnum]);
  $('.nav-about').text(trans[4][tnum]);
  $('.nav-members').text(trans[5][tnum]);
  $('.nav-contact').text(trans[6][tnum]);
  $('.slider-title').text(trans[7][tnum]);
  $('.rank_builder').text(trans[8][tnum]);
  $('.rank_owner').text(trans[9][tnum]);
  $('.rank_media').text(trans[10][tnum]);
  $('.team-name').text(trans[11][tnum]);
}

var trans = [ 
  { 
    pl : 'O nas',
    en : 'About'
  },{ 
    pl : 'Tekst po polsku, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    en : 'Tekst po angielsku, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },{ 
    pl : 'Build Team',
    en : 'Build Team'
  },{ 
    pl : 'O nas',
    en : 'About'
  },{ 
    pl : 'Projekty',
    en : 'Projects'
  },{ 
    pl : 'Zespół',
    en : 'Members'
  },{ 
    pl : 'Kontakt',
    en : 'Contact'
  },{ 
    pl : 'Projekty',
    en : 'Projects'
  },{ 
    pl : '[ Budowniczy ]',
    en : '[ Builder ]'
  },{ 
    pl : '[ Właściciel ]',
    en : '[ Owner ]'
  },{ 
    pl : '[ Media ]',
    en : '[ Media ]'
  },{ 
    pl : 'Zespół',
    en : 'Members'
  },
];
