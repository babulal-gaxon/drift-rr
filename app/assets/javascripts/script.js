"use strict";

var drift = {
    docBody: $('body'),
    customStyle: null,
    addClass: function (eleRef, eleID, className) {
        jQuery(eleRef).parents(eleID).addClass(className);
    },
    removeClass: function (eleRef, eleID, className) {
        jQuery(eleRef).parents(eleID).removeClass(className);
    },
    sidebar: {
        window: $(window),
        docBody: $('body'),
        drawerRef: jQuery('.dt-sidebar'),
        sidebarToggleHandle: $('[data-toggle=main-sidebar]'),
        foldedHandle: $('[data-handle=folded]'),
        overlay: null,
        enabledFixedSidebar: false,
        enabledFoldedSidebar: false,
        enabledDrawer: false,
        init: function () {
            var sidebar = this;

            if (this.drawerRef.hasClass('dt-drawer')) {
                this.enabledDrawer = true;
            }

            var bodyWidth = sidebar.docBody.innerWidth();
            if (bodyWidth < 992) {
                sidebar.initDrawer();
            } else {
                sidebar.destroy();
            }

            sidebar.window.resize(function () {
                bodyWidth = sidebar.docBody.innerWidth();
                if (bodyWidth < 992) {
                    sidebar.initDrawer();
                } else {
                    sidebar.destroy();
                }
            });

            this.sidebarToggleHandle.on('click', function () {
                sidebar.toggleFolded();
            });
        },
        initDrawer: function () {
            if (this.docBody.hasClass('dt-sidebar--fixed')) {
                this.enabledFixedSidebar = true;
            }

            if (this.docBody.hasClass('dt-sidebar--folded')) {
                this.enabledFoldedSidebar = true;
            }

            this.docBody.removeClass('dt-sidebar--fixed');
            this.docBody.removeClass('dt-sidebar--folded');

            this.drawerRef.addClass('dt-drawer position-left');
        },
        destroy: function () {
            if (!this.enabledDrawer) {
                this.drawerRef.removeClass('dt-drawer position-left');
            }

            if (this.enabledFixedSidebar) {
                this.docBody.addClass('dt-sidebar--fixed');
            }

            if (this.enabledFoldedSidebar) {
                this.docBody.addClass('dt-sidebar--folded');
            }
        },
        toggleFolded: function () {
            if (!this.drawerRef.hasClass('dt-drawer')) {
                if (this.docBody.hasClass('dt-sidebar--folded')) {
                    this.sidebarUnfolded();
                    activeLayoutHandle('default');
                } else {
                    this.sidebarFolded();
                    activeLayoutHandle('folded');
                }
            }
        },
        sidebarFolded: function () {
            this.docBody.addClass('dt-sidebar--folded');
        },
        sidebarUnfolded: function () {
            this.docBody.removeClass('dt-sidebar--folded');
        },
        toggle: function () {
            if (this.drawerRef.hasClass('open')) {
                this.close();
            } else {
                this.open()
            }
        },
        open: function () {
            this.drawerRef.addClass('open');
            this.insertOverlay();
        },
        close: function () {
            this.drawerRef.removeClass('open');
            this.overlay.remove();
        },
        insertOverlay: function () {
            this.overlay = document.createElement('div');
            this.overlay.className = 'dt-backdrop';
            this.drawerRef.after(this.overlay);

            var drawer = this;
            var overlayContainer = $(this.overlay);
            overlayContainer.on('click', function (event) {
                event.stopPropagation();
                drawer.toggle();
            });
        }
    },
    hoverCard: {
        docBody: $('body'),
        hoverHndle: $('[data-hover=thumb-card]'),
        handleRef: null,
        thumbCard: null,
        init: function () {
            var $this = this;
            this.createHoverCard();

            this.hoverHndle.hover(function () {
                $this.handleRef = $(this);
                $this.showThumb();
            }, function () {
                $this.hideThumb();
            });
        },
        showThumb: function () {
            var bodyWidth = this.docBody.outerWidth(true);

            if (bodyWidth > 767) {
                var $this = this;
                var offset = this.handleRef.offset();
                var handleWidth = this.handleRef.outerWidth(true);
                var name = (this.handleRef.data('name')) ? this.handleRef.data('name') : '';

                var innerHtml = '<span class="user-bg-card__info"><span class="dt-avatar-name text-center">' + name + '</span></span>';
                
                $this.thumbCard.html(innerHtml);

                if (($this.handleRef.data('thumb'))) {
                    $this.thumbCard.css({
                        backgroundImage: 'url(' + $this.handleRef.data('thumb') + ')',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover'
                    });
                } else {
                    $this.thumbCard.css({background: 'transparent'});
                }

                $this.thumbCard.css({
                    left: (offset.left - ((handleWidth + 67.5) / 2)),
                    top: (offset.top - 100),
                    width: 135,
                    height: 90,
                    zIndex: 2
                });
                $this.thumbCard.fadeIn();
            }
        },
        hideThumb: function () {
            this.thumbCard.fadeOut();
        },
        createHoverCard: function () {
            var tc = document.createElement('div');
            tc.className = 'card user-bg-card position-absolute bg-primary';
            tc.style.display = 'none';
            this.docBody.append(tc);
            this.thumbCard = $(tc);
        }
    },
    customizer: {
        toggleHandle: $('[data-toggle=customizer]'),
        containerPanel: $('.dt-customizer'),
        overlay: null,
        init: function () {
            var $this = this;

            $this.toggleHandle.on('click', function () {
                $this.toggle();
            });
        },
        toggle: function () {
            if (this.containerPanel.hasClass('open')) {
                this.close();
            } else {
                this.open()
            }
        },
        open: function () {
            this.containerPanel.addClass('open');
            this.insertOverlay();
        },
        close: function () {
            this.containerPanel.removeClass('open');
            this.overlay.remove();
        },
        insertOverlay: function () {
            this.overlay = document.createElement('div');
            this.overlay.className = 'dt-backdrop';
            this.containerPanel.after(this.overlay);

            var $this = this;
            var overlayContainer = $(this.overlay);
            overlayContainer.on('click', function (event) {
                event.stopPropagation();
                $this.toggle();
            });
        }
    },
    quickDrawer: {
        toggleHandle: $('[data-toggle=quick-drawer]'),
        containerPanel: $('.dt-quick-drawer'),
        overlay: null,
        init: function () {
            var $this = this;

            $this.toggleHandle.on('click', function () {
                $this.toggle();
            });
        },
        toggle: function () {
            if (this.containerPanel.hasClass('open')) {
                this.close();
            } else {
                this.open()
            }
        },
        open: function () {
            this.containerPanel.addClass('open');
            this.insertOverlay();
        },
        close: function () {
            this.containerPanel.removeClass('open');
            this.overlay.remove();
        },
        insertOverlay: function () {
            this.overlay = document.createElement('div');
            this.overlay.className = 'dt-backdrop';
            this.containerPanel.after(this.overlay);

            var $this = this;
            var overlayContainer = $(this.overlay);
            overlayContainer.on('click', function (event) {
                event.stopPropagation();
                $this.toggle();
            });
        }
    },
    init: function () {
        this.sidebar.init();
        this.hoverCard.init();
        this.customizer.init();
        this.quickDrawer.init();
        this.initCustomStyle();
    },
    updateStyle: function (style) {
        this.customStyle.innerHTML = style;
    },
    initCustomStyle: function () {
        this.customStyle = document.createElement('style');
        this.docBody.prepend(this.customStyle);
    }
};

(function ($) {
    var $body = $('body');
    var $loader = $('.dt-loader-container');
    var $root = $('.dt-root');

    $loader.delay(300).fadeOut('noraml', function () {
        $body.css('overflow', 'auto');
        $root.css('opacity', '1');
        $(document).trigger('loader-hide');
    });

    new PerfectScrollbar('#main-sidebar');

    $('.ps-custom-scrollbar').each(function () {
        new PerfectScrollbar(this);
    });

    $('.dt-masonry').masonry({
        // options
        itemSelector: '.dt-masonry__item',
        percentPosition: true
    });

    var current_path = window.location.pathname.split('/').pop();
    if (current_path == '') {
        current_path = 'index.php';
    }

    var $current_menu = $('a[href="' + current_path + '"]');
    $current_menu.addClass('active');

    if ($current_menu.length > 0) {
        $('.dt-side-nav__item').removeClass('open');

        if ($current_menu.parents().hasClass('dt-side-nav__item')) {
            $current_menu.parents('.dt-side-nav__item').addClass('open selected');
        } else {
            $current_menu.parent().addClass('active').parents('.dt-side-nav__item').addClass('open selected');
        }
    }

    var slideDuration = 150;
    $("ul.dt-side-nav > li.dt-side-nav__item").on("click", function () {
        var menuLi = this;
        $("ul.dt-side-nav > li.dt-side-nav__item").not(menuLi).removeClass("open");
        $("ul.dt-side-nav > li.dt-side-nav__item ul").not($("ul", menuLi)).slideUp(slideDuration);
        $(" > ul", menuLi).slideToggle(slideDuration, function () {
            $(menuLi).toggleClass("open");
        });
    });

    $("ul.dt-side-nav__sub-menu li").on('click', function (e) {
        var $current_sm_li = $(this);
        var $current_sm_li_parent = $current_sm_li.parent();

        if ($current_sm_li_parent.parent().hasClass("active")) {
            $("li ul", $current_sm_li_parent).not($("ul", $current_sm_li)).slideUp(slideDuration, function () {
                $("li", $current_sm_li_parent).not($current_sm_li).removeClass("active");
            });

        } else {
            $("ul.dt-side-nav__sub-menu li ul").not($(" ul", $current_sm_li)).slideUp(slideDuration, function () {
                //$("ul.sub-menu li").not($current_sm_li).removeClass("active");console.log('has not parent');
            });
        }

        $(" > ul", $current_sm_li).slideToggle(slideDuration, function () {
            $($current_sm_li).toggleClass("active");
        });

        e.stopPropagation();
    });

    /* Sidebar */
    var $sidebar = $('.dt-sidebar');

    $sidebar.hover(function () {
        if ($body.hasClass('dt-sidebar--folded')) {
            $body.addClass('dt-sidebar--expended');
        }
    }, function () {
        if ($body.hasClass('dt-sidebar--folded')) {
            $body.removeClass('dt-sidebar--expended');
        }
    });

    // init Drawer
    drift.init();

    $('.dt-brand__tool').on('click', function () {
        if (drift.sidebar.drawerRef.hasClass('dt-drawer')) {
            drift.sidebar.toggle();
        }
    });

    /* /Sidebar */

    /* customizer settings */
    var $toggleFixedHeader = $('#toggle-fixed-header');
    var $toggleFixedSidebar = $('#toggle-fixed-sidebar');
    var $layoutContainer = $('#sidebar-layout');
    var $sidebarLayoutHandle = $layoutContainer.find('[name=sidebar-layout]');

    activeFixedStyle();

    $toggleFixedHeader.on('change', function () {
        if ($(this).is(':checked')) {
            $body.addClass('dt-header--fixed');
        } else {
            $body.removeClass('dt-header--fixed');
        }
    });

    $toggleFixedSidebar.on('change', function () {
        if ($(this).is(':checked')) {
            $body.addClass('dt-sidebar--fixed');
            activeLayoutHandle('default');
            drift.sidebar.enabledDrawer = false;
            drift.sidebar.destroy();
            drift.sidebar.sidebarUnfolded();
        } else {
            $body.removeClass('dt-sidebar--fixed');
        }
    });

    if ($body.hasClass('dt-sidebar--folded')) {
        $('#sl-option1').prop('checked', true).parent().addClass('active');
    } else if (drift.sidebar.drawerRef.hasClass('dt-drawer')) {
        $('#sl-option3').prop('checked', true).parent().addClass('active');
    } else {
        $('#sl-option2').prop('checked', true).parent().addClass('active');
    }

    $sidebarLayoutHandle.on('change', function () {
        var layout = $(this).val();
        if (layout === 'folded') {
            drift.sidebar.enabledDrawer = false;
            drift.sidebar.destroy();
            drift.sidebar.sidebarFolded();
        } else if (layout === 'drawer') {
            drift.sidebar.sidebarUnfolded();
            drift.sidebar.enabledDrawer = true;
            drift.sidebar.initDrawer();
        } else if (layout === 'default') {
            drift.sidebar.enabledDrawer = false;
            drift.sidebar.destroy();
            drift.sidebar.sidebarUnfolded();
        }

        activeFixedStyle();
    });
    /* end customizer settings */

    // go to location
    $('[data-location]').on('click', function (event) {
        event.preventDefault();
        window.location = $(this).data('location');
    });

    /*Popover*/
    $('[data-toggle="popover"]').popover();

    /*Tooltip*/
    $('[data-toggle="tooltip"]').tooltip();

    /*Scroll Spy*/
    $('.scrollspy-horizontal').scrollspy({target: '#scrollspy-horizontal'});

    $('.scrollspy-vertical').scrollspy({target: '#scrollspy-vertical'});

    $('.scrollspy-list-group').scrollspy({target: '#scrollspy-list-group'});

    // dt-indecator
    init_indecator();

    // Displaying user info card on contact hover
    var $mailContacts = $('.contacts-list .dt-contact');
    var $userInfoCard = $('.user-info-card');

    $userInfoCard.hover(function () {
        $userInfoCard.addClass('active').show();
    }, function () {
        $userInfoCard.hide().removeClass('active');
    });

    $mailContacts.each(function (index) {
        var $contact = $(this);

        $contact.hover(function (event) {
            var contactWidth = $contact.outerWidth(true);
            var positionValue = $contact.offset();
            var bodyHeight = $body.outerHeight(true);
            var bodyWidth = $body.outerWidth(true);

            if (bodyWidth > 767) {
                var userPic = $('.dt-avatar', $contact).attr('src');
                var userName = $('.dt-contact__title', $contact).text();

                if (userPic) {
                    $('.profile-placeholder', $userInfoCard).hide();
                    $('.profile-pic', $userInfoCard).attr('src', userPic).show();
                } else {
                    $('.profile-pic', $userInfoCard).hide();
                    $('.profile-placeholder', $userInfoCard).text(userName.substring(0, 2)).show();
                }

                $('.dt-avatar-name', $userInfoCard).text(userName);

                var infoCardHeight = $userInfoCard.outerHeight(true);
                var offsetTop = positionValue.top;
                if (bodyHeight < (positionValue.top + infoCardHeight + 20)) {
                    offsetTop = (bodyHeight - infoCardHeight - 20)
                }

                $userInfoCard.css({
                    top: offsetTop,
                    left: (positionValue.left + contactWidth - 15)
                }).show();
            }
        }, function (event) {
            if (!$userInfoCard.hasClass('active')) {
                $userInfoCard.hide();
            }
        });
    });

})(jQuery);

/*
 * Active customizer layout option
 */
function activeLayoutHandle(layout) {
    var $layoutContainer = jQuery('#sidebar-layout');
    $layoutContainer.find('label').removeClass('active');

    if (layout === 'folded') {
        $layoutContainer.find('#sl-option1').prop('checked', true).parent().addClass('active');
    } else if (layout === 'drawer') {
        $layoutContainer.find('#sl-option3').prop('checked', true).parent().addClass('active');
    } else if (layout === 'default') {
        $layoutContainer.find('#sl-option2').prop('checked', true).parent().addClass('active');
    }
}

/*
 * Active fixed style
 */
function activeFixedStyle() {
    var $body = jQuery('body');
    var $toggleFixedHeader = jQuery('#toggle-fixed-header');
    var $toggleFixedSidebar = jQuery('#toggle-fixed-sidebar');

    if ($body.hasClass('dt-header--fixed')) {
        $toggleFixedHeader.prop('checked', true);
    } else {
        $toggleFixedHeader.prop('checked', false);
    }

    if ($body.hasClass('dt-sidebar--fixed')) {
        $toggleFixedSidebar.prop('checked', true);
    } else {
        $toggleFixedSidebar.prop('checked', false);
    }
}

function init_indecator() {
    var $progressbar = jQuery('.dt-indicator-item__info:not(.complete)');

    $progressbar.each(function (index) {

        var $currentBar = $(this);
        var percentage = Math.ceil($currentBar.data('fill'));
        var maxVal = ($currentBar.data('max')) ? parseInt($currentBar.data('max')) : 100;
        var fillTypePercent = ($currentBar.data('percent')) ? true : false;
        var textSufix = ($currentBar.data('suffix')) ? $currentBar.data('suffix') : '';

        if (percentage && percentage <= maxVal) {
            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 1000,
                easing: 'linear',
                step: function (now, tween) {
                    // What todo on every count                    
                    var pct = Math.floor(now);
                    var widthPct = Math.floor((pct * 100) / maxVal) + '%';

                    if (fillTypePercent) {
                        pct += '%';
                    }

                    $currentBar.find(".dt-indicator-item__fill").css('width', widthPct);
                    $currentBar.find(".dt-indicator-item__count").text(pct + ' ' + textSufix);
                },
                progress: function (animation, progress, remainingMs) {}
            });
        }
    });
}