/**
  * Dark Light Mode
  * Header Connect
  * Loadmore Item
  * headerFixed
  * retinaLogo
  * ajaxContactForm
  * mobileNav
  * ajaxSubscribe
  * alertBox
  * loadmore
*/

; (function ($) {
    "use strict";

    var themesflatTheme = {

        // Main init function
        init: function () {
            this.config();
            this.events();
        },

        // Define vars for caching
        config: function () {
            this.config = {
                $window: $(window),
                $document: $(document),
            };
        },

        // Events
        events: function () {
            var self = this;

            // Run on document ready
            self.config.$document.on('ready', function () {


                // Retina Logos
                self.retinaLogo();


            });

            // Run on Window Load
            self.config.$window.on('load', function () {

            });
        },


        // Retina Logos
        retinaLogo: function () {
            var retina = window.devicePixelRatio > 1 ? true : false;
            var $logo = $('#site-logo img');
            var $logo2 = $('#logo-footer img');
            var $logo_retina = $logo.data('retina');

            if (retina && $logo_retina) {
                $logo.attr({
                    src: $logo.data('retina'),
                    width: $logo.data('width'),
                    height: $logo.data('height')
                });
            }
            if (retina && $logo_retina) {
                $logo2.attr({
                    src: $logo.data('retina'),
                    width: $logo.data('width'),
                    height: $logo.data('height')
                });
            }
            },
    }; // end themesflatTheme

    // Start things up
    themesflatTheme.init();
    $(".btn-close").click(function(){
        $("#popup_bid").modal('hide');
    });
    var ajaxContactForm = function () {
        $('#contactform,#commentform').each(function () {
            $(this).validate({
                submitHandler: function (form) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url: $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit,comment-form').append(loading);
                        },
                        success: function (msg) {
                            var result, cls;
                            if (msg === 'Success') {
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text': result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };

    // Dark Light Mode
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
        
    // Header Connect

    var avatar_popup = function(){
        $('.popup-user').on('click', function(event){
            event.stopPropagation();
            if(!$('.avatar_popup').hasClass('visible')){
                $('.avatar_popup').toggleClass('visible');
                    event.preventDefault();
                }
            else
                $('.avatar_popup').removeClass('visible');
        })
    };


    // Header Fixed
    var headerFixed = function () {
        if ($('body').hasClass('header-fixed')) {
            var nav = $('.header');
            if (nav.length) {
                var offsetTop = nav.offset().top,
                headerHeight = nav.height(),
                injectSpace = $('<div />', {
                    height: headerHeight
                }).insertAfter(nav);
                injectSpace.hide();
                $(window).on('load scroll', function () {
                    if ($(window).scrollTop() > 400) {
                        nav.addClass('is-fixed');
                        injectSpace.show();
                    } else {
                        nav.removeClass('is-fixed');
                        injectSpace.hide();
                    }

                    if ($(window).scrollTop() > 500) {
                        nav.addClass('is-small');
                        
                    } else {
                        nav.removeClass('is-small');
                        
                    }
                })
            }
        }
    };

    // Mobile Navigation
    var mobileNav = function () {
        var mobile = window.matchMedia("(max-width: 991px)");
        var wrapMenu = $("#site-header-inner .header-center");
        var navExtw = $(".nav-extend.active");
        var navExt = $(".nav-extend.active").children();
    
        responsivemenu(mobile);
    
        mobile.addListener(responsivemenu);
    
        function responsivemenu(mobile) {
          if (mobile.matches) {
            $("#main-nav")
              .attr("id", "main-nav-mobi")
              .appendTo("#site-header-inner")
              .hide()
              .children(".menu")
              .append(navExt)
              .find("li:has(ul)")
              .children("ul")
              .removeAttr("style")
              .hide()
              .before('<span class="arrow"></span>');
          } else {
            $("#main-nav-mobi")
              .attr("id", "main-nav")
              .removeAttr("style")
              .prependTo(wrapMenu)
              .find(".ext")
              .appendTo(navExtw)
              .parent()
              .siblings("#main-nav")
              .find(".sub-menu")
              .removeAttr("style")
              .prev()
              .remove();
    
            $(".mobile-button").removeClass("active");
            $(".mobile-button-style2").removeClass("active");
            $(".sub-menu").css({ display: "block" });
          }
        }
        $(document).on("click", ".mobile-button", function () {
          $(this).toggleClass("active");
          $("#main-nav-mobi").slideToggle();
        });
        $(document).on("click", ".mobile-button-style2", function () {
          $(this).toggleClass("active");
          $("#main-nav-mobi").slideToggle();
        });
        $(document).on("click", "#main-nav-mobi .arrow", function () {
          $(this).toggleClass("active").next().slideToggle();
        });
      };
    var ajaxSubscribe = {
        obj: {
            subscribeEmail: $('#subscribe-email'),
            subscribeButton: $('#subscribe-button'),
            subscribeMsg: $('#subscribe-msg'),
            subscribeContent: $("#subscribe-content"),
            dataMailchimp: $('#subscribe-form').attr('data-mailchimp'),
            success_message: '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
            failure_message: '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
            noticeError: '<div class="notification_error">{msg}</div>',
            noticeInfo: '<div class="notification_error">{msg}</div>',
            basicAction: 'mail/subscribe.php',
            mailChimpAction: 'mail/subscribe-mailchimp.php'
        },

        eventLoad: function () {
            var objUse = ajaxSubscribe.obj;

            $(objUse.subscribeButton).on('click', function () {
                if (window.ajaxCalling) return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if (isMailchimp) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },

        ajaxCall: function (action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                    subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function (responseData, textStatus, jqXHR) {
                    if (responseData.status) {
                        objUse.subscribeContent.fadeOut(500, function () {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                            case "email-required":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is required.</strong>'));
                                break;
                            case "email-err":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email invalid.</strong>'));
                                break;
                            case "duplicate":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is duplicate.</strong>'));
                                break;
                            case "filewrite":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>Mail list file is open.</strong>'));
                                break;
                            case "undefined":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>undefined error.</strong>'));
                                break;
                            case "api-error":
                                objUse.subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(objUse.failure_message);
                                });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Connection error');
                },
                complete: function (data) {
                    window.ajaxCalling = false;
                }
            });
        }
    };

    var alertBox = function () {
        $(document).on('click', '.close', function (e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
        })
    };


    // Dom Ready
    $(function () {
        headerFixed();
        mobileNav();
        ajaxSubscribe.eventLoad();
        ajaxContactForm();
        alertBox();
        avatar_popup();
    });

})(jQuery);
