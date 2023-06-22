// Dark light version
const themeCookieName = 'theme'
const themeDark = 'is_dark'
const themeLight = 'is_light'

const body = document.getElementsByTagName('body')[0]

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
      var name = cname + "="
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1)
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length)
          }
      }
      return ""
  }
loadTheme()

function loadTheme() {
    var theme = getCookie(themeCookieName)
    body.classList.add(theme === "" ? themeDark : theme)
}

function switchTheme() {

    if (body.classList.contains(themeLight)) {
        body.classList.remove(themeLight)
        body.classList.add(themeDark)
        setCookie(themeCookieName, themeDark)
        
        if($('.body').hasClass('is_dark')) {
            if ($('#logo_header').length) {document.getElementById("logo_header").src = "assets/images/logo/logo_dark.png";}
            if ($('#img-mode').length) {document.getElementById("img-mode").src = "assets/images/icon/sun.png";}  
            if ($('#work-1').length) {document.getElementById("work-1").src = "assets/images/svg/work-1.svg";}
            if ($('#work-2').length) {document.getElementById("work-2").src = "assets/images/svg/work-2.svg";}
            if ($('#work-3').length) {document.getElementById("work-3").src = "assets/images/svg/work-3.svg";}
            if ($('#work-4').length) {document.getElementById("work-4").src = "assets/images/svg/work-4.svg";}
            if ($('#work-5').length) {document.getElementById("work-5").src = "assets/images/svg/work-5.svg";}
            if ($('#work-6').length) {document.getElementById("work-6").src = "assets/images/svg/work-6.svg";}
            if ($('#work-7').length) {document.getElementById("work-7").src = "assets/images/svg/work-7.svg";}
            if ($('#work-8').length) {document.getElementById("work-8").src = "assets/images/svg/work-8.svg";}

    } else  if($('.body').hasClass('is_light')) {
        if ($('#logo_header').length) {document.getElementById("logo_header").src = "assets/images/logo/logo.png";}
        if ($('#img-mode').length) {document.getElementById("img-mode").src = "assets/images/icon/moon.png";} 
        if ($('#work-1').length) {document.getElementById("work-1").src = "assets/images/svg/work-1-light.svg";}
        if ($('#work-2').length) {document.getElementById("work-2").src = "assets/images/svg/work-2-light.svg";}
        if ($('#work-3').length) {document.getElementById("work-3").src = "assets/images/svg/work-3-light.svg";}
        if ($('#work-4').length) {document.getElementById("work-4").src = "assets/images/svg/work-4-light.svg";}
        if ($('#work-5').length) {document.getElementById("work-5").src = "assets/images/svg/work-5-light.svg";}
        if ($('#work-6').length) {document.getElementById("work-6").src = "assets/images/svg/work-6-light.svg";}
        if ($('#work-7').length) {document.getElementById("work-7").src = "assets/images/svg/work-7-light.svg";}
        if ($('#work-8').length) {document.getElementById("work-8").src = "assets/images/svg/work-8-light.svg";}
    }
        

    } else {
        body.classList.remove(themeDark)
        body.classList.add(themeLight)
        setCookie(themeCookieName, themeLight)
        

        if($('.body').hasClass('is_dark')) {
            if ($('#logo_header').length) {document.getElementById("logo_header").src = "assets/images/logo/logo_dark.png";}
            if ($('#img-mode').length) {document.getElementById("img-mode").src = "assets/images/icon/sun.png";}
            if ($('#work-1').length) {document.getElementById("work-1").src = "assets/images/svg/work-1.svg";}
            if ($('#work-2').length) {document.getElementById("work-2").src = "assets/images/svg/work-2.svg";}
            if ($('#work-3').length) {document.getElementById("work-3").src = "assets/images/svg/work-3.svg";}
            if ($('#work-4').length) {document.getElementById("work-4").src = "assets/images/svg/work-4.svg";}
            if ($('#work-5').length) {document.getElementById("work-5").src = "assets/images/svg/work-5.svg";}
            if ($('#work-6').length) {document.getElementById("work-6").src = "assets/images/svg/work-6.svg";}
            if ($('#work-7').length) {document.getElementById("work-7").src = "assets/images/svg/work-7.svg";}
            if ($('#work-8').length) {document.getElementById("work-8").src = "assets/images/svg/work-8.svg";}

        } else  if($('.body').hasClass('is_light')) {
            if ($('#logo_header').length) {document.getElementById("logo_header").src = "assets/images/logo/logo.png";}
            if ($('#img-mode').length) {document.getElementById("img-mode").src = "assets/images/icon/moon.png";} 
            if ($('#work-1').length) {document.getElementById("work-1").src = "assets/images/svg/work-1-light.svg";}
            if ($('#work-2').length) {document.getElementById("work-2").src = "assets/images/svg/work-2-light.svg";}
            if ($('#work-3').length) {document.getElementById("work-3").src = "assets/images/svg/work-3-light.svg";}
            if ($('#work-4').length) {document.getElementById("work-4").src = "assets/images/svg/work-4-light.svg";}
            if ($('#work-5').length) {document.getElementById("work-5").src = "assets/images/svg/work-5-light.svg";}
            if ($('#work-6').length) {document.getElementById("work-6").src = "assets/images/svg/work-6-light.svg";}
            if ($('#work-7').length) {document.getElementById("work-7").src = "assets/images/svg/work-7-light.svg";}
            if ($('#work-8').length) {document.getElementById("work-8").src = "assets/images/svg/work-8-light.svg";}
            }

        
    }
}
