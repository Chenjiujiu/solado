// define templates for the Avone OS 2.0-Adorn Themes-4.3 theme

const _usfBgsetWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1950, 2100, 2260, 2450, 2700, 3000, 3350, 3750, 4100]

var _usfImageWidths;
var _usfButtons = `
<div v-if="!_usf_actionBtn" class="button-set" :class="{'small--hide': _usf_actionBtnmb}">
     <usf-plugin name="searchResultsProductWishList2" :data="pluginData"></usf-plugin>
                <button style="display:none" :data-product-url="'https://'+Shopify.shop+'/'+product.urlName" :class="'swym-button swym-add-to-wishlist-view-product product_'+product.id" data-swaction="addToWishlist" data-with-epi="true" :data-product-id="product.id" :data-variant-id="selectedVariantForPrice.id"></button>

  <template v-if="!isSoldOut && !_usfGlobalSettings.catalogmode">
      <template v-if="product.variants.length > 1">
          <a v-if="_usfGlobalSettings.enable_quickshop" class="btn btn-options quickShop" :href="_usfAddQuery(productUrl,'view=quickshop')" rel="nofollow">
              <i class="iconfont" aria-hidden="true"><svg t="1662018719365" class="icon" style="vertical-align: text-top;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1445" width="200" height="200"><path d="M685.048062 288.942636c-17.463566 0-31.751938-14.288372-31.751938-31.751938 0-74.617054-63.503876-134.945736-141.296124-134.945737s-141.296124 60.328682-141.296124 134.945737c0 17.463566-14.288372 31.751938-31.751938 31.751938s-31.751938-14.288372-31.751938-31.751938c0-109.544186 92.08062-198.449612 204.8-198.449613 113.513178 0 204.8 88.905426 204.8 198.449613 0 17.463566-13.494574 31.751938-31.751938 31.751938z" fill="#040000" p-id="1446"></path><path d="M496.124031 965.258915H176.223256c-25.40155 0-49.215504-10.31938-65.885272-29.370543-16.669767-19.051163-24.607752-43.658915-22.226356-68.266667l63.503876-563.596899c4.762791-44.452713 42.865116-78.586047 87.317829-78.586046h544.545737c45.246512 0 82.555039 33.339535 87.317829 78.586046l32.545737 288.148837c1.587597 17.463566-10.31938 33.339535-27.782946 34.927132-17.463566 1.587597-33.339535-10.31938-34.927132-27.782946l-32.545736-288.148837c-1.587597-12.700775-11.906977-22.226357-24.607752-22.226356H239.727132c-12.700775 0-23.020155 9.525581-24.607752 22.226356l-63.503876 563.596899c-0.793798 9.525581 3.175194 15.875969 6.350387 19.051163 2.381395 3.175194 8.731783 7.937984 18.257365 7.937985h319.900775c17.463566 0 31.751938 14.288372 31.751938 31.751938s-14.288372 31.751938-31.751938 31.751938z" fill="#040000" p-id="1447"></path><path d="M859.683721 826.344186H604.08062c-17.463566 0-30.95814-14.288372-30.958139-30.958139s14.288372-30.95814 30.958139-30.95814h255.603101c17.463566 0 30.95814 14.288372 30.958139 30.95814s-13.494574 30.95814-30.958139 30.958139z" fill="#040000" p-id="1448"></path><path d="M731.882171 954.939535c-17.463566 0-30.95814-14.288372-30.95814-30.95814V667.584496c0-17.463566 14.288372-30.95814 30.95814-30.958139s30.95814 14.288372 30.958139 30.958139v255.603101c0 17.463566-13.494574 31.751938-30.958139 31.751938z" fill="#040000" p-id="1449"></path></svg></i>
          </a>
          <a v-else-if="0" class="btn btn-options" :href="productUrl">
              <i class="iconfont" aria-hidden="true"><svg t="1662018719365" class="icon" style="vertical-align: text-top;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1445" width="200" height="200"><path d="M685.048062 288.942636c-17.463566 0-31.751938-14.288372-31.751938-31.751938 0-74.617054-63.503876-134.945736-141.296124-134.945737s-141.296124 60.328682-141.296124 134.945737c0 17.463566-14.288372 31.751938-31.751938 31.751938s-31.751938-14.288372-31.751938-31.751938c0-109.544186 92.08062-198.449612 204.8-198.449613 113.513178 0 204.8 88.905426 204.8 198.449613 0 17.463566-13.494574 31.751938-31.751938 31.751938z" fill="#040000" p-id="1446"></path><path d="M496.124031 965.258915H176.223256c-25.40155 0-49.215504-10.31938-65.885272-29.370543-16.669767-19.051163-24.607752-43.658915-22.226356-68.266667l63.503876-563.596899c4.762791-44.452713 42.865116-78.586047 87.317829-78.586046h544.545737c45.246512 0 82.555039 33.339535 87.317829 78.586046l32.545737 288.148837c1.587597 17.463566-10.31938 33.339535-27.782946 34.927132-17.463566 1.587597-33.339535-10.31938-34.927132-27.782946l-32.545736-288.148837c-1.587597-12.700775-11.906977-22.226357-24.607752-22.226356H239.727132c-12.700775 0-23.020155 9.525581-24.607752 22.226356l-63.503876 563.596899c-0.793798 9.525581 3.175194 15.875969 6.350387 19.051163 2.381395 3.175194 8.731783 7.937984 18.257365 7.937985h319.900775c17.463566 0 31.751938 14.288372 31.751938 31.751938s-14.288372 31.751938-31.751938 31.751938z" fill="#040000" p-id="1447"></path><path d="M859.683721 826.344186H604.08062c-17.463566 0-30.95814-14.288372-30.958139-30.958139s14.288372-30.95814 30.958139-30.95814h255.603101c17.463566 0 30.95814 14.288372 30.958139 30.95814s-13.494574 30.95814-30.958139 30.958139z" fill="#040000" p-id="1448"></path><path d="M731.882171 954.939535c-17.463566 0-30.95814-14.288372-30.95814-30.95814V667.584496c0-17.463566 14.288372-30.95814 30.95814-30.958139s30.95814 14.288372 30.958139 30.958139v255.603101c0 17.463566-13.494574 31.751938-30.958139 31.751938z" fill="#040000" p-id="1449"></path></svg></i>
          </a>
      </template>
      <template v-else>
          <a class="btn add-to-cart" href="javascript:void(0);" :id="selectedVariantForPrice.id" rel="1">
              <i class="iconfont" aria-hidden="true"><svg t="1662018719365" class="icon" style="vertical-align: text-top;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1445" width="200" height="200"><path d="M685.048062 288.942636c-17.463566 0-31.751938-14.288372-31.751938-31.751938 0-74.617054-63.503876-134.945736-141.296124-134.945737s-141.296124 60.328682-141.296124 134.945737c0 17.463566-14.288372 31.751938-31.751938 31.751938s-31.751938-14.288372-31.751938-31.751938c0-109.544186 92.08062-198.449612 204.8-198.449613 113.513178 0 204.8 88.905426 204.8 198.449613 0 17.463566-13.494574 31.751938-31.751938 31.751938z" fill="#040000" p-id="1446"></path><path d="M496.124031 965.258915H176.223256c-25.40155 0-49.215504-10.31938-65.885272-29.370543-16.669767-19.051163-24.607752-43.658915-22.226356-68.266667l63.503876-563.596899c4.762791-44.452713 42.865116-78.586047 87.317829-78.586046h544.545737c45.246512 0 82.555039 33.339535 87.317829 78.586046l32.545737 288.148837c1.587597 17.463566-10.31938 33.339535-27.782946 34.927132-17.463566 1.587597-33.339535-10.31938-34.927132-27.782946l-32.545736-288.148837c-1.587597-12.700775-11.906977-22.226357-24.607752-22.226356H239.727132c-12.700775 0-23.020155 9.525581-24.607752 22.226356l-63.503876 563.596899c-0.793798 9.525581 3.175194 15.875969 6.350387 19.051163 2.381395 3.175194 8.731783 7.937984 18.257365 7.937985h319.900775c17.463566 0 31.751938 14.288372 31.751938 31.751938s-14.288372 31.751938-31.751938 31.751938z" fill="#040000" p-id="1447"></path><path d="M859.683721 826.344186H604.08062c-17.463566 0-30.95814-14.288372-30.958139-30.958139s14.288372-30.95814 30.958139-30.95814h255.603101c17.463566 0 30.95814 14.288372 30.958139 30.95814s-13.494574 30.95814-30.958139 30.958139z" fill="#040000" p-id="1448"></path><path d="M731.882171 954.939535c-17.463566 0-30.95814-14.288372-30.95814-30.95814V667.584496c0-17.463566 14.288372-30.95814 30.95814-30.958139s30.95814 14.288372 30.958139 30.958139v255.603101c0 17.463566-13.494574 31.751938-30.958139 31.751938z" fill="#040000" p-id="1449"></path></svg></i>
          </a>
          <form v-if="!_usfGlobalSettings.ajax_cart" :action="usf.platform.addToCartUrl" method="post" enctype="multipart/form-data" class="hide">
              <input type="hidden" name="id" :value="selectedVariantForPrice.id" />
          </form>
      </template>
  </template>
  <a v-if="_usfGlobalSettings.quick_view" :href="_usfAddQuery(productUrl,'view=quick_view')" rel="nofollow" class="btn quick-view">
      <i class="iconfont" aria-hidden="true"><svg t="1662018719365" class="icon" style="vertical-align: text-top;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1445" width="200" height="200"><path d="M685.048062 288.942636c-17.463566 0-31.751938-14.288372-31.751938-31.751938 0-74.617054-63.503876-134.945736-141.296124-134.945737s-141.296124 60.328682-141.296124 134.945737c0 17.463566-14.288372 31.751938-31.751938 31.751938s-31.751938-14.288372-31.751938-31.751938c0-109.544186 92.08062-198.449612 204.8-198.449613 113.513178 0 204.8 88.905426 204.8 198.449613 0 17.463566-13.494574 31.751938-31.751938 31.751938z" fill="#040000" p-id="1446"></path><path d="M496.124031 965.258915H176.223256c-25.40155 0-49.215504-10.31938-65.885272-29.370543-16.669767-19.051163-24.607752-43.658915-22.226356-68.266667l63.503876-563.596899c4.762791-44.452713 42.865116-78.586047 87.317829-78.586046h544.545737c45.246512 0 82.555039 33.339535 87.317829 78.586046l32.545737 288.148837c1.587597 17.463566-10.31938 33.339535-27.782946 34.927132-17.463566 1.587597-33.339535-10.31938-34.927132-27.782946l-32.545736-288.148837c-1.587597-12.700775-11.906977-22.226357-24.607752-22.226356H239.727132c-12.700775 0-23.020155 9.525581-24.607752 22.226356l-63.503876 563.596899c-0.793798 9.525581 3.175194 15.875969 6.350387 19.051163 2.381395 3.175194 8.731783 7.937984 18.257365 7.937985h319.900775c17.463566 0 31.751938 14.288372 31.751938 31.751938s-14.288372 31.751938-31.751938 31.751938z" fill="#040000" p-id="1447"></path><path d="M859.683721 826.344186H604.08062c-17.463566 0-30.95814-14.288372-30.958139-30.958139s14.288372-30.95814 30.958139-30.95814h255.603101c17.463566 0 30.95814 14.288372 30.958139 30.95814s-13.494574 30.95814-30.958139 30.958139z" fill="#040000" p-id="1448"></path><path d="M731.882171 954.939535c-17.463566 0-30.95814-14.288372-30.95814-30.95814V667.584496c0-17.463566 14.288372-30.95814 30.95814-30.958139s30.95814 14.288372 30.958139 30.958139v255.603101c0 17.463566-13.494574 31.751938-30.958139 31.751938z" fill="#040000" p-id="1449"></path></svg></i>
  </a>
</div>
`;
 
var _usfProductPriceTemplate = `
<template v-if="!priceLoader">
<template v-if="hasDiscount">
    <template v-if="priceVaries && !product.selectedVariantId">
        <span class="visually-hidden" v-html="_usfRegularPriceText"></span>
        <s class="product-price__price regular" v-html="displayMinPrice"></s>
        <span class="product-price__price product-price__sale" v-html="(_usfGlobalSettings.price_lbl ? _usfGlobalSettings.price_lbl_txt :'') + ' ' + ( _usfGlobalSettings.price_style == 'default' ? displayMinDiscountedPrice : displayMinDiscountedPrice + ' - ' + displayMaxDiscountedPrice)">
        </span>
    </template>
    <template v-else>
        <span class="visually-hidden" v-html="_usfRegularPriceText"></span>
        <s class="product-price__price regular" v-html="displayPrice"></s>
        <span class="product-price__price product-price__sale" v-html="displayDiscountedPrice"></span>
    </template>
</template>
<template v-else>
    <span v-if="priceVaries && !product.selectedVariantId" class="product-price__price" v-html="(_usfGlobalSettings.price_lbl ? _usfGlobalSettings.price_lbl_txt :'') + ' ' + ( _usfGlobalSettings.price_style == 'default' ? displayMinDiscountedPrice : displayMinDiscountedPrice + ' - ' + displayMaxDiscountedPrice)"> </span>
    <template v-else>
        <span class="visually-hidden" v-html="_usfRegularPriceText"></span>
        <span class="product-price__price" v-html="displayPrice"></span>
    </template>
</template>
</template>
`;

var _usfProductLabels = `
<div v-if="_usfGlobalSettings.pr_lbl && (_enableLbl = _usf_enableLbl(this))" class="product-labels" :class="[_usfGlobalSettings.select_label_style]">
    <template v-if="_enableLbl.showSale">
        <label v-if="_usfGlobalSettings.sale_label_style == 'salelabel'" class="lbl on-sale" v-html="_usfSaleText"></label>
        <label v-else class="lbl on-sale" v-html="'-' + salePercent + '%'"></label>
    </template>
    <label v-if="_enableLbl.pr_label1" class="lbl pr-label1" v-html="_enableLbl.pr_label1"></label>
    <label v-if="_enableLbl.pr_label2" class="lbl pr-label2" v-html="_enableLbl.pr_label2"></label>
    <label v-if="_enableLbl.pr_label3" class="lbl pr-label3" v-html="_enableLbl.pr_label3"></label>
    <label v-if="_enableLbl.showSoldOut" class="lbl sold-out"><span v-html="_usfSoldOutText"></span></label>
</div>
`;
var _usfFilterBodyTemplate = /*inc_begin_filter-body*/
`<!-- Range filter -->
<div v-if="isRange" class="usf-facet-values usf-facet-range">
    <!-- Range inputs -->
    <div class="usf-slider-inputs usf-clear">
        <span class="usf-slider-input__from">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[0]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[0], 0)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
        <span class="usf-slider-div">-</span>
        <span class="usf-slider-input__to">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[1]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[1], 1)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
    </div>
	<!-- See API reference of this component at https://docs.sobooster.com/search/storefront-js-api/slider-component -->
    <usf-slider :color="facet.sliderColor" :symbols="facet.sliderValueSymbols" :prefix="facet.sliderPrefix" :suffix="facet.sliderSuffix" :min="facet.min" :max="facet.max" :pips="facet.range[0]" :step="facet.range[1]" :decimals="rangeDecimals" :value="range" :converter="rangeConverter" @input="onRangeSliderInput" @change="onRangeSliderChange"></usf-slider>
</div>
<!-- List + Swatch filter -->
<div v-else ref="values" :class="'usf-facet-values usf-scrollbar usf-facet-values--' + facet.display + (facet.navigationCollections ? ' usf-navigation' : '') + (facet.valuesTransformation ? (' usf-' + facet.valuesTransformation.toLowerCase()) : '') + (facet.circleSwatch ? ' usf-facet-values--circle' : '')" :style="!usf.isMobileFilter && facet.maxHeight ? { maxHeight: facet.maxHeight } : null">
    <!-- Filter options -->                
    <usf-filter-option v-for="o in visibleOptions" :facet="facet" :option="o" :key="o.label"></usf-filter-option>
</div>

<!-- More -->
<div v-if="isMoreVisible" class="usf-more" @click="onShowMore" v-html="loc.more"></div>`
/*inc_end_filter-body*/;

var _usfSearchResultsSkeletonItemTpl = /*inc_begin_search-skeleton-item*/
`<div v-if="view === 'grid'" class="usf-sr-product usf-skeleton">
    <div class="usf-img"></div>
    <div class="usf-meta"></div>
</div>
<div class="usf-sr-product usf-skeleton" v-else>
    <!-- Image column -->
    <div class="usf-img-column">
        <div class="usf-img"></div>
    </div>

    <!-- Info column -->
    <div class="usf-info-column">
        <div class="usf-title"></div>
        <div class="usf-vendor"></div>
        <div class="usf-price-wrapper"></div>
    </div>
</div>`
/*inc_end_search-skeleton-item*/;

var _usfSearchResultsSummaryTpl = /*inc_begin_search-summary*/
`<span class="usf-sr-summary" v-html="loader === true ? '&nbsp;' : usf.utils.format(term ? loc.productSearchResultWithTermSummary : loc.productSearchResultSummary, result.total, usf.utils.encodeHtml(term))"></span>`
/*inc_end_search-summary*/;

var _usfSearchResultsViewsTpl = /*inc_begin_search-views*/
`<div class="usf-views">
    <button class="usf-view usf-btn usf-icon usf-icon-grid" :class="{'usf-active': view === 'grid'}" @click.prevent.stop="onGridViewClick"></button>
    <button class="usf-view usf-btn usf-icon usf-icon-list" :class="{'usf-active': view === 'list'}" @click.prevent.stop="onListViewClick"></button>
</div>`
/*inc_end_search-views*/;

var _usfSearchResultsSortByTpl = /*inc_begin_search-sortby*/
`<usf-dropdown :placeholder="loc.sort" :value="sortBy" :options="sortByOptions" v-if="sortByOptions" @input="onSortByChanged"></usf-dropdown>`
/*inc_end_search-sortby*/;

usf.templates = {
    // application
    app: 
`<div id="usf_container" class="usf-zone usf-clear" :class="{'usf-filters-horz': usf.settings.filters.horz}">
    <template v-if="hasFilters">
        <avone-filter class="usf-sr-filters"></avone-filter>
    </template>
    <usf-sr></usf-sr>
</div>`
,

    // search results
    searchResults: `
<div class="usf-sr-container" :class="{'usf-no-facets': noFacets, 'usf-empty': !loader && !hasResults, 'usf-nosearch': !showSearchBox}">
    <!-- Search form -->
    <form v-if="showSearchBox" action="/search" method="get" role="search" class="usf-sr-inputbox">
        <button type="submit" class="usf-icon usf-icon-search usf-btn"></button>
        <input name="q" autocomplete="off" ref="searchInput" v-model="termModel">
        <button v-if="termModel" class="usf-remove usf-btn" @click.prevent.stop="clearSearch"></span>
    </form>

    <div class="usf-sr-config" v-if="usf.isMobile">
        <div class="usf-sr-config__mobile-filters-wrapper">
            <div class="usf-filters" :class="{'usf-has-filters': !!facetFilters}" @click="onMobileToggle">
                <button class="usf-btn" v-html="loc.filters"></button>
            </div>
            ` + _usfSearchResultsSortByTpl + `
        </div>
        
        ` + _usfSearchResultsSummaryTpl + _usfSearchResultsViewsTpl + `
    </div>
    <div class="usf-sr-config" v-else>
        ` + _usfSearchResultsViewsTpl + _usfSearchResultsSummaryTpl + _usfSearchResultsSortByTpl + `
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && !result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <!-- Load previous -->
    <div id="usf-sr-top-loader" :class="{'usf-with-loader':loader === 'prev'}" v-if="(loader === 'prev' || itemsOffset) && loader !== true && hasResults && usf.settings.search.more !== 'page'"></div>
    <div :class="(view === \'grid\' ? \'grid grid--uniform grid-products grid--view-items\' : \'grid-products list-view-items\') + \' usf-results usf-clear usf-\' + view">
        <template v-if="loader===true">` + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl +
        `</template>
        <template v-else>
            <template v-if="hasResults">
                <template v-if="view === 'grid'">
                    <template v-for="(p,index) in result.items"><usf-avone-griditem :index="index" :product="p" :result="result" :key="p.id"></usf-avone-griditem></template>
                </template>
                <template v-else>
                    <template v-for="(p,index) in result.items"><usf-new-listitem :data-wow-delay="index*50 + 'ms'" :product="p" :result="result" :key="p.id"></usf-new-listitem></template>
                </template>
            </template>
            <template v-else>
                <!-- Empty result -->
                <div class="usf-sr-empty">
                    <div class="usf-icon"></div>
                    <span v-html="term ? usf.utils.format(loc.productSearchNoResults, term) : loc.productSearchNoResultsEmptyTerm"></span>
                    <button v-if="facetFilters" class="usf-btn usf-btn-action" v-html="loc.clearAllFilters" @click="usf.queryRewriter.removeAllFacetFilters"></button>
                </div>
            </template>
        </template>
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <!-- Paging & load more -->
    <div class="usf-sr-paging" v-if="loader !== true">
        <div class="usf-sr-more" v-if="hasResults && usf.settings.search.more === 'more'">
            <div class="usf-title" v-html="usf.utils.format(loc.youHaveViewed, itemsLoaded, result.total)"></div>
            <div class="usf-progress">
                <div :style="{width: (itemsLoaded * 100 / result.total) + '%'}"></div>
            </div>
            <button v-if="itemsLoaded < result.total" class="usf-load-more" :class="{'usf-with-loader': loader === 'more'}" @click="onLoadMore"><span v-html="loc.loadMore"></span></button>
        </div>
        <usf-sr-pages v-else-if="hasResults && usf.settings.search.more === 'page'" :page="page" :pages-total="pagesTotal" :pages-to-display="4" :side-pages-to-display="1"></usf-sr-pages>
        <div class="usf-sr-loader usf-with-loader" v-else-if="loader === 'more'"></div>
    </div>
</div>
`,
    // Grid view item
    searchResultsGridViewItem: `
<div class="grid__item" :class="[_usf_grid_mb,_usf_grid_tb,_usf_grid_ds]" :product-selector="product.id" :data-usf-pid="product.id">
    <div class="grid-view-item wow fadeIn" :class="[_usf_boxstyle,{'sold-out': isSoldOut}]" :data-wow-delay="index*50 + 'ms'" @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave">
        <a v-if="_usf_boxstyle == 'style2'" class="overly" :href="productUrl"></a>
        <div class="grid-view_image">
            <a class="grid-view-item__link" :href="productUrl">
                <div class="grid-view-item__image lazyload" :class="{'primary': hoverImage && _usf_secondImg}" :data-bgset="_usfGetBgset(selectedImage)" data-sizes="auto" data-parent-fit="contain"></div>
                <div v-if="hoverImage && _usf_secondImg && _usf_boxstyle != 'style2'" class="grid-view-item__image lazyload hover" :data-bgset="_usfGetBgset(hoverImage)" data-sizes="auto" data-parent-fit="contain"></div>
                <div v-if="_usf_colorSwatch" class="grid-view-item__image hover variantImg"></div>
            </a>
            <!-- Wishlist -->
            <!-- Labels -->
            <usf-plugin name="searchResultsProductLabel" :data="pluginData"></usf-plugin>

            <!--label--> 
            `+_usfProductLabels+`

            <div v-if="_usfGlobalSettings.display_countdown && (_usf_meta_countdown = usf.utils.getMetafield(product,'my_fields','countdown')) != ''" class="saleTime desktop small--hide medium--hide" :data-date="_usf_meta_countdown"></div>
            <template v-if="_usf_boxstyle == 'style1' || _usf_boxstyle == 'style4'">`+ _usfButtons + `</template>
            <div v-if="!_usf_actionBtn && _usf_boxstyle == 'style5'" class="button-set" :class="{'small--hide': _usf_actionBtnmb}">
                    <usf-plugin name="searchResultsProductWishList2" :data="pluginData"></usf-plugin>
                <button style="display:none" :data-product-url="'https://'+Shopify.shop+'/'+product.urlName" :class="'swym-button swym-add-to-wishlist-view-product product_'+product.id" data-swaction="addToWishlist" data-with-epi="true" :data-product-id="product.id" :data-variant-id="selectedVariantForPrice.id"></button>

                <a v-if="_usfGlobalSettings.quick_view" :href="_usfAddQuery(productUrl,'view=quick_view')" rel="nofollow" class="btn quick-view">
                    <i class="iconfont" aria-hidden="true"><svg t="1662018719365" class="icon" style="vertical-align: text-top;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1445" width="200" height="200"><path d="M685.048062 288.942636c-17.463566 0-31.751938-14.288372-31.751938-31.751938 0-74.617054-63.503876-134.945736-141.296124-134.945737s-141.296124 60.328682-141.296124 134.945737c0 17.463566-14.288372 31.751938-31.751938 31.751938s-31.751938-14.288372-31.751938-31.751938c0-109.544186 92.08062-198.449612 204.8-198.449613 113.513178 0 204.8 88.905426 204.8 198.449613 0 17.463566-13.494574 31.751938-31.751938 31.751938z" fill="#040000" p-id="1446"></path><path d="M496.124031 965.258915H176.223256c-25.40155 0-49.215504-10.31938-65.885272-29.370543-16.669767-19.051163-24.607752-43.658915-22.226356-68.266667l63.503876-563.596899c4.762791-44.452713 42.865116-78.586047 87.317829-78.586046h544.545737c45.246512 0 82.555039 33.339535 87.317829 78.586046l32.545737 288.148837c1.587597 17.463566-10.31938 33.339535-27.782946 34.927132-17.463566 1.587597-33.339535-10.31938-34.927132-27.782946l-32.545736-288.148837c-1.587597-12.700775-11.906977-22.226357-24.607752-22.226356H239.727132c-12.700775 0-23.020155 9.525581-24.607752 22.226356l-63.503876 563.596899c-0.793798 9.525581 3.175194 15.875969 6.350387 19.051163 2.381395 3.175194 8.731783 7.937984 18.257365 7.937985h319.900775c17.463566 0 31.751938 14.288372 31.751938 31.751938s-14.288372 31.751938-31.751938 31.751938z" fill="#040000" p-id="1447"></path><path d="M859.683721 826.344186H604.08062c-17.463566 0-30.95814-14.288372-30.958139-30.958139s14.288372-30.95814 30.958139-30.95814h255.603101c17.463566 0 30.95814 14.288372 30.958139 30.95814s-13.494574 30.95814-30.958139 30.958139z" fill="#040000" p-id="1448"></path><path d="M731.882171 954.939535c-17.463566 0-30.95814-14.288372-30.95814-30.95814V667.584496c0-17.463566 14.288372-30.95814 30.95814-30.958139s30.95814 14.288372 30.958139 30.958139v255.603101c0 17.463566-13.494574 31.751938-30.958139 31.751938z" fill="#040000" p-id="1449"></path></svg></i>
                    <span class="tooltip-label" v-html="_usfQuickViewText"></span>
                </a>
            </div>
        </div>
        <usf-swatches v-if="_usf_boxstyle == 'style3' && _usf_colorSwatch" :product="product"></usf-swatches>
        <div class="details">
            <!--vendor-->
            <div v-if="_usf_vendorName && usf.settings.search.showVendor" class="grid-view-item__vendor" v-html="product.vendor"></div>
            <!--title-->
            <a :href="productUrl" class="grid-view-item__title" v-html="product.title"></a>
            <div v-if="!_usfGlobalSettings.catalogmode" class="grid-view-item__meta">`+ _usfProductPriceTemplate + `</div>
            <!-- Product review -->
            <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
            <!-- Swatch-->
            <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>

            <usf-swatches v-if="_usf_boxstyle != 'style3' && _usf_colorSwatch" :product="product"></usf-swatches>

            <!--add to cart-->
            <div v-if="!_usf_actionBtn && _usf_boxstyle == 'style5'" class="flatbtn" :class="{'small--hide': _usf_actionBtnmb}">
                <template v-if="!isSoldOut">
                    <template v-if="product.variants.length > 1">
                        <a v-if="_usfGlobalSettings.enable_quickshop" class="btn btn-options quickShop" :href="_usfAddQuery(productUrl,'view=quickshop')" rel="nofollow">
                            <span v-html="_usfQuickShopText"></span>
                            <span class="tooltip-label" v-html="_usfQuickShopText"></span>
                        </a>
                        <a v-else-if="0" class="btn btn-options" :href="productUrl">
                            <span v-html="_usfSelectOptionsText"></span>
                            <span class="tooltip-label" v-html="_usfSelectOptionsText"></span>
                        </a>
                    </template>
                    <a v-else class="btn add-to-cart" href="javascript:void(0);" :id="selectedVariantForPrice.id" rel="1">
                        <span v-html="_usfAddToCartText"></span>
                        <span class="tooltip-label" v-html="_usfAddToCartText"></span>
                    </a>
                    <form :action="usf.platform.addToCartUrl" method="post" enctype="multipart/form-data" class="hide"><input type="hidden" name="id" :value="selectedVariantForPrice.id" /></form>
                </template>
            </div>

            <template v-if="_usf_boxstyle == 'style2' || _usf_boxstyle == 'style3'">`+ _usfButtons +`</template>

            <div v-if="_usfGlobalSettings.display_countdown && (_usf_meta_countdown = usf.utils.getMetafield(product,'my_fields','countdown')) != ''" class="saleTime mobile large-up--hide" :data-date="_usf_meta_countdown"></div>
        </div>
        <div v-if="_usfGlobalSettings.enable_quickshop" class="shopWrapper" :id="'ProductSection-' + product.id"></div>
    </div>
</div>
`,
    // Search result pages
    searchResultsPages: `
<div class="pagination">
    <ul>
        <template v-for="e in elements">
            <li v-if="e.type === 'prev'" class="prev"><a href="javascript:void(0)" :title="loc.prevPage" @click="onPrev" style="font-size:14px">←</a></li>
            <li v-else-if="e.type === 'dots'" class="ellipsis disabled"><a href="#">...</a></li>
            <li v-else-if="e.type === 'page' && e.current" class="active"><a href>{{e.page}}</a></li>
            <li v-else-if="e.type === 'page' && !e.current"><a href="javascript:void(0)" @click="ev=>onPage(e.page,ev)" :title="usf.utils.format(loc.gotoPage,e.page)">{{e.page}}</a></li>
            <li v-else-if="e.type === 'next'" class="usf-sr-pages__next"><a href="javascript:void(0)" :title="loc.nextPage" @click="onNext" style="font-size:14px">→</a></li>
        </template>
    </ul>
</div>
`,
    // List view item
    searchResultsListViewItem: 
`<div class="list-view-item wow fadeInUp" :data-usf-pid="product.id">
    <div class="list-view-item__image-column">
        <div class="list-view-item__image-wrapper" @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave">
            <a :href="productUrl">
                <img class="list-view-item__image lazyload{% if product.images.size > 1 %} primary{% endif %}" :src="selectedImageUrl" :data-src="_usfGetScaledImageUrl(scaledSelectedImageUrl)" :data-widths="'[' + _usfImageWidths + ']'" :data-aspectratio="_usfGetImageRatio(selectedImage)" data-sizes="auto" :alt="selectedImage.alt">
          
                <!-- Labels -->
                <usf-plugin name="searchResultsProductLabel" :data="pluginData"></usf-plugin>
            </a> 

            <!--label-->
            `+ _usfProductLabels + `
            <div v-if="_usfGlobalSettings.display_countdown && (_usf_meta_countdown = usf.utils.getMetafield(product,'my_fields','countdown')) != ''" class="saleTime" :data-date="_usf_meta_countdown"></div>
        </div>
    </div>
    <div class="list-view-item__title-column">
        <!--vendor-->
        <div v-if="_usfSectionSettings.show_vendor && usf.settings.search.showVendor" class="grid-view-item__vendor" v-html="product.vendor"></div>
        <!--title-->
        <a :href="productUrl" class="list-view-item__title" v-html="product.title"></a>

        <!-- Product review -->
        <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
        <!-- Swatch-->
        <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>


        <p v-if="product.description" v-html="_usfListDesc(product.description)"></p>
        <!--price-->
        <p v-if="!_usfGlobalSettings.catalogmode" class="list-view-item__meta">`+ _usfProductPriceTemplate +`</p>

        <div v-if="!_usf_actionBtn" class="listview-button">
            <template v-if="!isSoldOut && !_usfGlobalSettings.catalogmode">
                <a v-if="product.variants.length > 1" class="btn btn-options" :href="productUrl" v-html="_usfSelectOptionsText"></a>
                <a v-else class="btn btn-link add-to-cart" href="javascript:voide(0);" :id="selectedVariantForPrice.id" rel="1" :title="_usfAddToCartText" v-html="_usfAddToCartText"></a>
                <form :action="usf.platform.addToCartUrl" method="post" enctype="multipart/form-data" class="hide"><input type="hidden" name="id" :value="selectedVariantForPrice.id" /></form>
            </template>
             <usf-plugin name="searchResultsProductWishList2" :data="pluginData"></usf-plugin>
                <button style="display:none" :data-product-url="'https://'+Shopify.shop+'/'+product.urlName" :class="'swym-button swym-add-to-wishlist-view-product product_'+product.id" data-swaction="addToWishlist" data-with-epi="true" :data-product-id="product.id" :data-variant-id="selectedVariantForPrice.id"></button>

            <a v-if="_usfGlobalSettings.quick_view" :href="_usfAddQuery(productUrl,'view=quick_view')" rel="nofollow" class="btn quick-view">
                <i class="iconfont" aria-hidden="true"><svg t="1662018719365" class="icon" style="vertical-align: text-top;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1445" width="200" height="200"><path d="M685.048062 288.942636c-17.463566 0-31.751938-14.288372-31.751938-31.751938 0-74.617054-63.503876-134.945736-141.296124-134.945737s-141.296124 60.328682-141.296124 134.945737c0 17.463566-14.288372 31.751938-31.751938 31.751938s-31.751938-14.288372-31.751938-31.751938c0-109.544186 92.08062-198.449612 204.8-198.449613 113.513178 0 204.8 88.905426 204.8 198.449613 0 17.463566-13.494574 31.751938-31.751938 31.751938z" fill="#040000" p-id="1446"></path><path d="M496.124031 965.258915H176.223256c-25.40155 0-49.215504-10.31938-65.885272-29.370543-16.669767-19.051163-24.607752-43.658915-22.226356-68.266667l63.503876-563.596899c4.762791-44.452713 42.865116-78.586047 87.317829-78.586046h544.545737c45.246512 0 82.555039 33.339535 87.317829 78.586046l32.545737 288.148837c1.587597 17.463566-10.31938 33.339535-27.782946 34.927132-17.463566 1.587597-33.339535-10.31938-34.927132-27.782946l-32.545736-288.148837c-1.587597-12.700775-11.906977-22.226357-24.607752-22.226356H239.727132c-12.700775 0-23.020155 9.525581-24.607752 22.226356l-63.503876 563.596899c-0.793798 9.525581 3.175194 15.875969 6.350387 19.051163 2.381395 3.175194 8.731783 7.937984 18.257365 7.937985h319.900775c17.463566 0 31.751938 14.288372 31.751938 31.751938s-14.288372 31.751938-31.751938 31.751938z" fill="#040000" p-id="1447"></path><path d="M859.683721 826.344186H604.08062c-17.463566 0-30.95814-14.288372-30.958139-30.958139s14.288372-30.95814 30.958139-30.95814h255.603101c17.463566 0 30.95814 14.288372 30.958139 30.95814s-13.494574 30.95814-30.958139 30.958139z" fill="#040000" p-id="1448"></path><path d="M731.882171 954.939535c-17.463566 0-30.95814-14.288372-30.95814-30.95814V667.584496c0-17.463566 14.288372-30.95814 30.95814-30.958139s30.95814 14.288372 30.958139 30.958139v255.603101c0 17.463566-13.494574 31.751938-30.958139 31.751938z" fill="#040000" p-id="1449"></path></svg></i>
                <span class="tooltip-label" v-html="_usfQuickViewText"></span>
            </a>
        </div>
    </div>
</div>`
,
    // AddToCart Plugin	
    addToCartPlugin: ``,

    // Preview Plugin
    previewPlugin: ``,

    previewPluginModal: ``,

    searchResultsBanner: /*inc_begin_search-banner*/        
`<div class="usf-sr-banner">
    <a :href="banner.url || 'javascript:void(0)'" :alt="banner.description">
        <img :src="banner.mediaUrl" style="max-width:100%">
    </a>
</div>
`
/*inc_end_search-banner*/,

    ////////////////////////
    // Filter templates
    // facet filters breadcrumb
    filtersBreadcrumb: /*inc_begin_filters-breadcrumb*/
`<div v-if="usf.settings.filterNavigation.showFilterArea && root.facetFilters && root.facets && facetFilterIds.length" class="usf-refineby">
    <!-- Breadcrumb Header -->
    <div class="usf-title usf-clear">
        <span class="usf-pull-left usf-icon usf-icon-equalizer"></span>
        <span class="usf-label" v-html="loc.filters"></span>

        <!-- Clear all -->
        <button class="usf-clear-all usf-btn" v-html="loc.clearAll" @click.prevent.stop="root.removeAllFacetFilters" :aria-label="loc.clearAllFilters"></button>
    </div>

    <!-- Breadcrumb Values -->
    <div class="usf-refineby__body">
        <template v-for="facetId in facetFilterIds" v-if="(facet = root.facets.find(fc => fc.id === facetId)) && (f = root.facetFilters[facetId])">
            <template v-for="queryValStr in f[1]">
                <div class="usf-refineby__item usf-pointer usf-clear" @click.prevent.stop="root.removeFacetFilter(facetId, queryValStr)">
                    <button class="usf-btn"><span class="usf-filter-label" v-html="facet.title + ': '"></span><b v-html="root.formatBreadcrumbLabel(facet, f[0], queryValStr)"></b></button><span class="usf-remove"></span>
                </div>
            </template>
        </template>
    </div>
 </div>`
 /*inc_end_filters-breadcrumb*/,

    // facet filters    
    filters: /*inc_begin_filters*/
// Vert & Horz modes have different render order
`<div class="usf-facets usf-no-select usf-zone" :class="{'usf-facets--mobile':usf.isMobileFilter}">
<!-- Mobile view -->
<template v-if="usf.isMobile">
    <div class="usf-close" @click="onMobileBack(1)"></div>
    <div class="usf-facets-wrapper">
    <div class="usf-facets-wrapper">
        <!-- Header. shows 'Filters', facet name, etc. -->
        <div class="usf-header">
            <!-- Single facet mode -->
            <template v-if="isSingleFacetMode">
                <div class="usf-title" @click="onMobileBack(0)" v-html="facets[0].title"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clear"></div>
            </template>

            <!-- When a filter is selected -->
            <template v-else-if="mobileSelectedFacet">
                <div class="usf-title usf-back" @click="onMobileBack(0)" v-html="mobileSelectedFacet.title"></div>
                <div v-if="facetFilters && facetFilters[mobileSelectedFacet.id]" class="usf-clear" @click="removeFacetFilter(mobileSelectedFacet.id)" v-html="loc.clear"></div>
                <div v-else-if="mobileSelectedFacet.multiple" class="usf-all" @click="selectFacetFilter(mobileSelectedFacet)" v-html="loc.all"></div>
            </template>

            <!-- When no filter is selected -->
            <template v-else>
                <div class="usf-title" @click="onMobileBack(0)" v-html="loc.filters"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clearAll"></div>
            </template>
        </div>

        <div class="usf-body">
            <!-- Desktop-like filter in mobile -->
            <template v-if="usf.settings.filters.desktopLikeMobile">
                <usf-filter-breadcrumb></usf-filter-breadcrumb>
                
                <!-- Facets body -->
                <div class="usf-facets__body">
                    <usf-filter :facet="f" :key="f.id" v-for="f in facets"></usf-filter>
                </div>
            </template>
            
            <!-- Mobile filter -->
            <template v-else>
                <!-- List all filter options, in single facet mode -->
                <usf-filter v-if="isSingleFacetMode" :facet="facets[0]"></usf-filter>

                <!-- List all filter options, when a filter is selected -->
                <usf-filter v-else-if="mobileSelectedFacet" :facet="mobileSelectedFacet"></usf-filter>

                <!-- List all when there are more than one facet -->
                <template v-else :key="f.id" v-for="f in facets">
                    <template v-if="canShowFilter(f)">
                        <div class="usf-facet-value" @click="onMobileSelectFacet(f)">
                            <span class="usf-title" v-html="f.title"></span>
                            <div v-if="(selectedFilterOptionValues = facetFilters && (ff = facetFilters[f.id]) ? ff[1] : null)" class="usf-dimmed">
                                <span v-for="cf in selectedFilterOptionValues" v-html="formatBreadcrumbLabel(f, f.facetName, cf)"></span>
                            </div>
                        </div>
                    </template>
                </template>
            </template>
        </div>

        <!-- View items -->
        <div class="usf-footer">
            <div @click="onMobileBack(1)" v-html="loc.viewItems"></div>
        </div>
    </div>
</template>

<!-- Desktop view -->
<template v-else>
    <usf-filter-breadcrumb></usf-filter-breadcrumb>
    <!-- Filters Loader -->
    <div v-if="!facets" class="usf-facets__first-loader">
        <template v-for="i in 3">
            <div class="usf-facet"><div class="usf-title usf-no-select"><span class="usf-label"></span></div>
                <div v-if="!usf.settings.filters.horz" class="usf-container"><div class="usf-facet-values usf-facet-values--List"><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div></div></div>
            </div>
        </template>
    </div>
    <!-- Facets body -->
    <div v-else class="usf-facets__body">
        <usf-filter :facet="f" :key="f.id" v-for="f in facets"></usf-filter>
    </div>
</template>
</div>`
/*inc_end_filters*/,

    // facet filter item
    filter: /*inc_begin_filter*/
`<div v-if="canShow" class="usf-facet" :class="{'usf-collapsed': collapsed && !usf.isMobileFilter, 'usf-has-filter': isInBreadcrumb}">
    <!-- Mobile filter -->
    <div v-if="usf.isMobileFilter" class="usf-container">
        <!-- Search box -->
        <input v-if="hasSearchBox" class="usf-search-box" :aria-label="loc.filterOptions" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

        <!-- Values -->
        ` + _usfFilterBodyTemplate +
    `</div>

    <!-- Desktop filter -->
    <template v-else>
        <!-- Filter title -->
        <div class="usf-clear">
            <div class="usf-title usf-no-select" @click.prevent.stop="onExpandCollapse">
                <button class="usf-label usf-btn" v-html="facet.title" :aria-label="usf.utils.format(loc.filterBy,facet.title)" :aria-expanded="!collapsed"></button>
                <usf-helptip v-if="facet.tooltip" :tooltip="facet.tooltip"></usf-helptip>            
                <!-- 'Clear all' button to clear the current facet filter. -->
                <button v-if="isInBreadcrumb" class="usf-clear-all usf-btn" :title="loc.clearFilterOptions" :aria-label="usf.utils.format(loc.clearFiltersBy,facet.title)" @click.prevent.stop="onClear" v-html="loc.clear"></button>
                <span class="usf-pm"></span>
            </div>
        </div>

        <!-- Filter body -->
        <div class="usf-container">
            <!-- Search box -->
            <input v-if="hasSearchBox" class="usf-search-box" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

            ` + _usfFilterBodyTemplate +
        `
        </div>
    </template>
</div>`
/*inc_end_filter*/,

    // facet filter option
    filterOption: /*inc_begin_filter-option*/
`<div v-if="children" :class="(isSelected ? 'usf-selected ' : '') + ' usf-relative usf-facet-value usf-facet-value-single usf-with-children' + (collapsed ? ' usf-collapsed' : '')">
    <!-- option label -->
    <button class="usf-pm usf-btn" v-if="children" @click.prevent.stop="onToggleChildren"></button>
    <button class="usf-label usf-btn" v-html="label" @click.prevent.stop="onToggle"></button>

    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobileFilter)) && option.value !== undefined" class="usf-value">{{option.value}}</span>    

    <div class="usf-children-container" v-if="children && !collapsed">
        <button :class="'usf-child-item usf-btn usf-facet-value' + (isChildSelected(c) ? ' usf-selected' : '')" v-for="c in children" v-html="getChildLabel(c)" @click="onChildClick(c)"></span>
    </div>
</div>
<button v-else :class="(isSelected ? 'usf-selected ' : '') + (swatchImage ? ' usf-facet-value--with-background' : '') + ' usf-btn usf-relative usf-facet-value usf-facet-value-' + (facet.multiple ? 'multiple' : 'single')" :title="isSwatch || isBox ? option.label + ' (' + option.value + ')' : undefined" :style="usf.isMobileFilter ? null : swatchStyle" @click.prevent.stop="onToggle">
    <!-- checkbox -->
    <div v-if="!isBox && !isSwatch && facet.multiple" :class="'usf-checkbox' + (isSelected ? ' usf-checked' : '')">
        <span class="usf-checkbox-inner"></span>
    </div>

    <!-- swatch image in mobile -->
    <div v-if="swatchImage && usf.isMobileFilter" class="usf-mobile-swatch" :style="swatchStyle"></div>

    <!-- option label -->
    <span class="usf-label usf-btn" v-html="label"></span>
    
    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobileFilter)) && option.value !== undefined" class="usf-value">{{option.value}}</span>
</button>`
/*inc_end_filter-option*/,

    // Instant search popup
    instantSearch: /*inc_begin_instantsearch*/
`<div :class="'usf-popup usf-zone usf-is usf-is--compact usf-is--' + position + (shouldShow ? '' : ' usf-hide') + (isEmpty ? ' usf-empty' : '') + (firstLoader ? ' usf-is--first-loader': '')"  :style="usf.isMobile ? null : {left: this.left + 'px',top: this.top + 'px',width: this.width + 'px'}">
    <!-- Mobile search box -->
    <div v-if="usf.isMobile">
        <form class="usf-is-inputbox" :action="searchUrl" method="get" role="search">
            <span class="usf-icon usf-icon-back usf-close" @click="usf.utils.hideInstantSearch"></span>
            <input name="q" autocomplete="off" ref="searchInput" :value="term" @input="onSearchBoxInput">
            <span class="usf-remove" v-if="term" @click="onClear"></span>
        </form>
    </div>

    <!-- First loader -->
    <div class="usf-is-first-loader" v-if="firstLoader">
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
    </div>

    <!-- All JS files loaded -->
    <template v-else>
        <!-- Empty view -->
        <div v-if="isEmpty" class="usf-is-no-results">
            <div style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-items.png?t=2') center no-repeat;min-height:160px"></div>
            <div v-html="usf.utils.format(loc.noMatchesFoundFor, term)"></div>
        </div>
        <template v-else>
            <!-- Body content -->
            <div class="usf-is-content">
                <!-- Products -->
                <div class="usf-is-matches usf-is-products">
                    <div class="custom-hot-words  usf-custom-hot-words" v-if="queryOrTerm===''">
                        <div class="hot-words-title">Hot Searches</div>
                        <div class="hot-words-suggestions">
                      <a href="/search?q=dress">dress</a>
<a href="/search?q=pants">pants</a>
<a href="/search?q=Top">Top</a>
<a href="/search?q=corset">corset</a>
<a href="/search?q=halloween">halloween</a>
<a href="/search?q=bodysuit">bodysuit</a>
<a href="/search?q=jumpsuit">jumpsuit</a>
<a href="/search?q=blazer">blazer</a>
<a href="/search?q=jeans">jeans</a>
<a href="/search?q=butterfly">butterfly</a>
<a href="/search?q=cut out">cut out</a>
<a href="/search?q=mesh">mesh</a>
                        </div>
                        <div class="custom-footer"></div>
                    </div>
                    <div class="usf-title" v-html="queryOrTerm ? loc.productMatches : loc.trending"></div>
                    
                    <div class="usf-is-list" v-if="result.items.length">
                        <!-- Did you mean -->
                        <span class="usf-is-did-you-mean" v-html="usf.utils.format(loc.didYouMean, usf.utils.encodeHtml(term), result.query)" v-if="termDiffers"></span>

                        <!-- Product -->
                        <usf-new-is-item v-for="p in result.items" :product="p" :result="result" :key="p.id + '-' + p.selectedVariantId"></usf-new-is-item>
                    </div>
                    <div class="usf-is-list" v-else style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-products.png?t=2') center no-repeat;min-height:250px"></div>
                </div>
 
                <div class="usf-is-side" v-if="(result.suggestions && result.suggestions.length) || (result.collections && result.collections.length) || (result.pages && result.pages.length) ">
                    <!-- Suggestions -->
                    <div class="usf-is-matches usf-is-suggestions" v-if="result.suggestions && result.suggestions.length">
                        <div class="usf-title" v-html="loc.searchSuggestions"></div>
                        <span v-for="s in result.suggestions" class="usf-is-match" v-html="usf.utils.highlight(s, result.query)" @click="search(s)"></span>
                    </div>

                    <!-- Collections -->
                    <div class="usf-is-matches usf-is-collections" v-if="result.collections && result.collections.length">
                        <div class="usf-title" v-html="loc.collections"></div>
                        <span v-for="c in result.collections" class="usf-is-match" v-html="usf.utils.highlight(c.title, result.query)" @click="selectCollection(c)"></span>
                    </div>

                    <!-- Pages -->
                    <div class="usf-is-matches usf-is-pages" v-if="result.pages && result.pages.length">
                        <div class="usf-title" v-html="loc.pages"></div>
                        <span v-for="p in result.pages" class="usf-is-match" v-html="usf.utils.highlight(p.title, result.query)" @click="selectPage(p)"></span>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="usf-is-viewall">
                <span @click="search(queryOrTerm)" v-html="usf.utils.format(queryOrTerm ? loc.viewAllResultsFor : loc.viewAllResults, queryOrTerm)"></span>
            </div>
        </template>
    </template>
</div>`
/*inc_end_instantsearch*/
,

    // Instant search item
    instantSearchItem:/*inc_begin_instantsearch-item*/
`<span class="usf-is-product usf-clear" @click="onItemClick">
    <!-- Image -->
    <div class="usf-img-wrapper usf-pull-left">
        <img class="usf-img" :src="selectedImageUrl">
    </div>
    
    <div class="usf-pull-left">
        <!-- Title -->
        <div class="usf-title" v-html="usf.utils.highlight(product.title, result.query)"></div>

        <!-- Vendor -->
        <div class="usf-vendor" v-html="product.vendor" v-if="usf.settings.search.showVendor"></div>

        <!-- Prices -->
        <div v-if="!priceLoader" class="usf-price-wrapper">
            <span class="usf-price" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice"></span>
            <span v-if="hasDiscount" class="usf-discount" v-html="displayDiscountedPrice"></span>
        </div>
    </div>
</span>`
/*inc_end_instantsearch-item*/,

};
 
usf.event.add('init', function () {    
	// register or override components
    // ...    
    /*var SearchResultsGridItem2 = {
        template: usf.templates.searchResultsGridViewItem,
    }
    usf.register(SearchResultsGridItem2, usf.components.SearchResultsGridItem, "usf-sr-griditem");*/
    _usfImageWidths = _usfIsDynamicImage ? [200, 400, 600, 700, 800, 900, 1000, 1200] : [usf.settings.search.imageSize];
    _usfSetDefaultThemeSettings();
window._usfGlobalSettings.enable_quickshop=false;



    /**
   * custom filter
   * */
    var AvoneFilter = {
        mounted() {
            this.$nextTick(function () {
                if (!usf.settings.filters.horz && !usf.isMobile) {
                    var el = this.$el;
                    var drawerZone = document.getElementById('usf_filters')
                    if (drawerZone) {
                        drawerZone.insertBefore(el, drawerZone.firstChild);
                        document.body.classList.add('usf-has-filter-drawer');
                    }

                }
            })
        },
        render(h) {
            return h('usf-filters');
        }
    }
    usf.register(AvoneFilter, null, 'avone-filter');   

    /**
  * color swatch component
  * */
    var UsfSwatches = {
        props: {
            product: Object,
        },
        data() {
            var product = this.product;
            var option, option_handle;
            var option_index = 0;
            var optionWithValues = [];
            var optionRendereds = {};
            var selectedOptionValue = '';
            for (let i = 0; i < product.options.length; i++) {
                var o = product.options[i];
                var o_name = _usfHandlezie(o.name);
                if (o.name == 'Color' || o.name == 'Colour') {
                    option_handle = o_name;
                    option_index = i;
                    option = o;
                    break;
                }
            }
            if (option) {
                selectedOptionValue = this.$parent.selectedVariantForPrice.options[option_index] != undefined ? option.values[this.$parent.selectedVariantForPrice.options[option_index]] : '';
                option.values.filter(o => {
                    for (let x = 0; x < product.variants.length; x++) {
                        var v = product.variants[x];
                        if (v.options[option_index] != undefined) {
                            var vrOpt = option.values[v.options[option_index]];
                            if (o === vrOpt && !optionRendereds[o]) {
                                optionRendereds[o] = 1;
                                optionWithValues.push({
                                    value: o,
                                    image: product.images[v.imageIndex],
                                    variant: v
                                })
                            }
                        }
                    }
                })
            }
            return {
                product: product,
                option: option,
                option_handle: option_handle,
                option_index: option_index,
                selectedOptionValue: selectedOptionValue,
                optionWithValues: optionWithValues
            }
        },
        render(h) {
            if (this.optionWithValues.length) return h('ul', { class: 'gridSwatches' }, [
                this.optionWithValues.map((o, index) => {
                    var optHandled = _usfHandlezie(o.value);
                    if (_usfSwatchSettings.colorType == 'color' || !o.image) {
                        return h('li', {
                            staticClass: 'swatch swt' + optHandled,
                            class: [
                                _usfSwatchSettings.colorSize,
                                _usfSwatchSettings.colorStyle,
                                { 'noImg': !o.image }
                            ],
                            attrs: {
                                rel: o.image ? _usfGetOriginImgWithSize(o.image.url, usf.settings.search.imageSize + 'x') : false,
                                tite: o.value,
                                style: `background-color: ${optHandled}`,
                            }
                        }, [
                            h('span', {
                                class: 'tooltip-label',
                            }, [o.value])
                        ])
                    } else if (o.image) {
                        return h('li', {
                            staticClass: 'swatch lazyload',
                            class: [
                                _usfSwatchSettings.colorSize,
                                _usfSwatchSettings.colorStyle,
                                optHandled,
                                { 'noImg': !o.image }
                            ],
                            style: `background-image:url(${_usf_spacer_image});;background-position:${_usfSwatchSettings.imgPosition}`,
                            attrs: {
                                rel: o.image ? _usfGetOriginImgWithSize(o.image.url, usf.settings.search.imageSize + 'x') : false,
                                tite: o.value,
                                'data-bgset': _usfGetSwatchBgset(o.image),
                                'data-sizes': 'auto',
                                'data-parent-fit': 'contain'
                            }
                        }, [
                            h('span', {
                                class: 'tooltip-label',
                            }, [o.value])
                        ])
                    }
                }),
            ])

        }
    }
    usf.register(UsfSwatches, null, 'usf-swatches');

    if (_usfGlobalSettings.enable_wishlist) {
        usf.event.add(['sr_updated', 'sr_viewChanged', 'rerender'], function () {
            if (window.$)
                setTimeout(function () {
                    usfUpdateWishlist()
                }, 300);
        });
    }

});



/**
 * 
 * @param {Object} image 
 */
function _usfGetBgset(image) {
    if (image.url === usf.platform.emptyImage.url)
        return image.url + ` ${image.width}w ${image.width}h`;

    var aspectRatio = image.height / image.width;
    var imgUrl = "";
    _usfBgsetWidths.find(width => {
        if (image.width > width) {
            var h = aspectRatio * width;
            var size = `_${width}x`;
            var url = image.url;

            var n = url.lastIndexOf(".");
            url = url.substring(0, n) + size + url.substring(n);

            imgUrl += `${url} ${width}w ${h.toFixed(0)}h, `
        }
    })

    return imgUrl.slice(0, imgUrl.length - 2)
}

function _usf_enableLbl(args) {
    var rs = {};
    if (_usfGlobalSettings.sale_lbl && usf.settings.search.showSale && args.hasDiscount)
        rs.showSale = 1;
    if (_usfGlobalSettings.sold_lbl && usf.settings.search.showSoldOut && args.isSoldOut)
        rs.showSoldOut = 1;

    for (let i = 0; i < args.product.tags.length; i++) {
        var tag = args.product.tags[i];
        if (tag == _usfGlobalSettings.pr_label1)
            rs.pr_label1 = _usfGlobalSettings.pr_label1;

        if (tag == _usfGlobalSettings.pr_label2)
            rs.pr_label1 = _usfGlobalSettings.pr_label2;

        if (tag == _usfGlobalSettings.pr_label3)
            rs.pr_label1 = _usfGlobalSettings.pr_label3;
    }

    return rs.showSale || rs.showSoldOut || rs.pr_label1 || rs.pr_label2 || rs.pr_label3 ? rs : false
}

function usfUpdateWishlist() {
    var cookieName = "wishlistList";
    try {
        if ($.cookie(cookieName) != null && $.cookie(cookieName) != '__' && $.cookie(cookieName) != '') {
            var str = String($.cookie(cookieName)).split("__");
            for (var i = 0; i < str.length; i++) {
                if (str[i] != '') {
                    $('.wishlist[rel="' + str[i] + '"]').removeClass('addto-wishlist').find('span').text(theme.wlAvailable);
                    $('.wishlist[rel="' + str[i] + '"] .ad').removeClass('ad-heart-l').addClass('ad-heart');
                    $('.favCount').text(i).removeClass('hide');
                }
            }
        }
    }
    catch (err) { }
}

function _usfListDesc(desc) {
    var str = desc.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/([\r\n]+ +)+/gm, '')
        .replace(/\n/g, ' ');
    str = str.split(' ');
    var newArr = [];
    str.forEach(s => {
        if (s != "") {
            newArr.push(s)
        }
    })
    return newArr.slice(0, 40).join(' ') + '...'
}

function _usfSetDefaultThemeSettings() {
    window._usfGlobalSettings = window._usfGlobalSettings || {
        enable_wishlist: true,
        quick_view: true,
        catalogmode: false,
        enable_quickshop: false,
        ajax_cart: true,
        display_countdown: true,
        sale_label_style: "discountlable",
        sale_lbl: true,
        pr_label1: "new",
        pr_label2: "Hot",
        pr_label3: "Famous",
        sold_lbl: true,
        pr_lbl: true,
        price_lbl: true,
        price_lbl_txt: "From",
        price_style: "p_range",
        select_label_style: "rectangular",
    };
    window._usfSwatchSettings = window._usfSwatchSettings || {
        colorStyle: "rounded",
        colorType: "color",
        colorSize: "small",
        imgPosition: "50% 0",
    };
    window._usfSectionSettings = window._usfSectionSettings || {
        show_vendor: false,
    };
    window._usf_grid_mb = window._usf_grid_mb || "small--one-half";
    window._usf_grid_tb = window._usf_grid_tb || "medium--one-third";
    window._usf_grid_ds = window._usf_grid_ds || "large-up--one-quarter";
    if (window._usf_actionBtn == undefined)
        window._usf_actionBtn = false;
    if (window._usf_secondImg == undefined)
        window._usf_secondImg = true;
    if (window._usf_vendorName == undefined)
        window._usf_vendorName = true;
    if (window._usf_actionBtnmb == undefined) 
        window._usf_actionBtnmb = true;
    if (window._usf_colorSwatch == undefined)
        window._usf_colorSwatch = true;
    if (window._usf_boxstyle == undefined)
        window._usf_boxstyle = "style1";

    window._usfWishlistPageUrl = window._usfWishlistPageUrl || "";
    window._usfAddToWishlistText = window._usfAddToWishlistText || "Add to Wishlist";
    window._usfQuickViewText = window._usfQuickViewText || "Quick view";
    window._usfQuickShopText = window._usfQuickShopText || "Quick Shop";
    window._usfSelectOptionsText = window._usfSelectOptionsText || 'Choose options';
    window._usfAddToCartText = window._usfAddToCartText || "Add to cart";
    window._usfSaleText = window._usfSaleText || "Sale";
    window._usfSoldOutText = window._usfSoldOutText || "Sold out";
    window._usfRegularPriceText = window._usfRegularPriceText || "Regular price";
    window._usf_spacer_image = window._usf_spacer_image || "";
}



/* Begin theme ready code */
if (usf.settings.instantSearch.online) {

    if(usf.isMobile){
        // click on search icon -> show our instant search
        var searchIcon = document.querySelector('.mobile-nav .searchIco');
        if (searchIcon)
            searchIcon.addEventListener('click', function () {
                var target = document.createElement('input');
                usf.utils.loadAndShowInstantSearch(target, true);
            }); 

        // still register to 'is_show' event to hide the drawer.
        usf.event.add('is_show', function () {
            setTimeout(() => {
                var closeSearch = document.querySelector('.closeSearch');
                if (closeSearch)
                    closeSearch.click();
                // refocus on our input box
                usf.instantSearch.focus();
            }, 300);
        }) 
    }else{
         var searchIcon = document.querySelector('.site-header .icons-col .searchIco');
        if (searchIcon)
            searchIcon.addEventListener('click', function (e) {
                setTimeout(function(){
                    var ip  = document.querySelector('#searchPopup .input-group__field.search__input');
                    usf.utils.loadAndShowInstantSearch(ip, true);
                    if(ip){
                        ip.addEventListener('focus', function (e) {
                            setTimeout(function(){
                                usf.utils.loadAndShowInstantSearch(e.target, true);
                            },300)
                        });
                        ip.addEventListener('input', function (e) {
                            if(e.target.value == ''){
                                setTimeout(function(){
                                    usf.utils.loadAndShowInstantSearch(e.target, true);
                                },300)
                            }
                        }); 
                    }
                },300) 
            }); 
   
        usf.event.add('is_show', function (evt) {
            setTimeout(() => {
                if(!document.body.classList.contains('usf-has-clear-btn')){
                    var search_header = document.querySelector('.search-header .input-group');
                    console.log('clearBtn')
                    var clearBtn = document.createElement('span');
                    clearBtn.classList.add('usf-remove');
                    search_header.prepend(clearBtn);
                    clearBtn.addEventListener('click',function(){
                        var input = document.querySelector('.input-group__field.search__input');
                        if(input){
                            input.value = '';
                            var event = new Event('input');
                            input.dispatchEvent(event);
                            input.focus()
                        }
                    }); 
                    document.body.classList.add('usf-has-clear-btn');
                }
                

            }, 300);
        })
    }
    
}
if (usf.settings.instantSearch.online)
    document.body.classList.add('usf-hide-theme-search');
/* End theme ready code */

function _usfGetSwatchBgset(img) {
    var aspect_ratio = _usfGetImageRatio(img);
    var url = _usfGetOriginImgWithSize(img.url, '80x') + ' 80w ' + `${Math.floor(80 / aspect_ratio)}h,`;
    url += _usfGetOriginImgWithSize(img.url, '120x') + ' 120w ' + `${Math.floor(120 / aspect_ratio)}h`;
    return url
}


window._swymEmpty = `<i class="ad ad-heart-l"></i><span class="tooltip-label">Add To Wishlist</span>`;

usf.event.add('init', function () {


function toggleWishlish(t, product) {
        var variant = product.selectedVariantId;
        if (variant)
            variant = product.variants.find(v => v.id === variant);
        if (!variant)
            variant = product.variants[0];
        var variantImage = variant.imageIndex !== -1 ? product.images[variant.imageIndex] : product.images[0];
        if (variantImage)
            variantImage = variantImage.url

        // if added
        if (t.classList.contains('swym-added')) {
            window._swat.removeFromWishList(
                {
                    "epi": variant.id,
                    "du": 'https://' + Shopify.shop + '/products/' + product.urlName,
                    "empi": product.id,
                    "iu": variantImage,
                    "pr": variant.price * usf.settings.currencyRate,
                    "stk": variant.available,
                    //"variants": [{ "Blue / XL": 123 }]
                },
                function (r) {
                    t.classList.remove('disabled', 'swym-added', 'swym-adding')
                    console.log('Removed to wishlist');
                }
            );
        } else {
            console.log(product);
            window._swat.setCurrency(usf.settings.currency);
            window._swat.addToWishList(
                {
                    "epi": variant.id,
                    "du": 'https://' + Shopify.shop + '/products/' + product.urlName,
                    "empi": product.id,
                    "iu": variantImage,
                    "pr": variant.price * usf.settings.currencyRate,
                    "stk": variant.available,
                    //"variants": [{ "Blue / XL": 123 }]
                },
                function (r) {
                    t.classList.add('disabled', 'swym-added', 'swym-adding')
                    console.log('Added to wishlist');
                }
            );
        }
    }

    function swymCallbackFn() {
        usf.settings.currencyRate = usf.settings.currencyRate || 1.0;
        window._swat.fetch(function (r) {
            usf.plugins.push({
                render_searchResultsProductWishList2(t, h, args, next) {
                    var p = args.product;
                    var added = r.find(e => e.empi == p.id);
                    return [
                        h('button', {
                            staticClass: "btn wishlist addto-wishlist usf-swym swym-button add-to-wishlist-btn swym-add-to-wishlist-view-product swym-icon swym-heart swym-loaded product_" + p.id,
                            class: {
                                'disabled swym-added swym-adding': added
                            },
                            attrs: {
                                'data-swaction': "addToWishlist",
                                'data-product-id': p.id,
                                'data-with-epi': true,
                                'data-variant-id': args.owner.selectedVariantForPrice.id
                            },
                            on:{
                                click: (e) => {
                                    e.preventDefault()
                                    var target = e.currentTarget;
                                    toggleWishlish(target, p);
                                    return false;
                                }
                            },
                           // domProps: { innerHTML: _swymEmpty }
                        }),
                        next()
                    ];
                }
            })

            usf.event.raise('rerender')
        });
    }

    
    setTimeout(function(){
        if (!window.SwymCallbacks) {
            window.SwymCallbacks = [];
        }
        window.SwymCallbacks.push(swymCallbackFn);
        document.body.classList.add('swym-buttons-loaded');
    },500)

}); 
/*inc_end_init-example*/




// /*CURRENCY CONVERT*/
//NOTE: _usf_money_format
function _currencyConvert(){
    var currency = Shopify.currency.active;
    var rate = Shopify.currency.rate;
    var format = theme.money_format;

    usf.settings.currencyRate = rate;
    usf.settings.currency = currency;
    var shopPriceFormat = format.replace('{{amount}}', '{0}')
    .replace('{{ amount }}', '{0}')
    .replace('{{amount_with_comma_separator}}', '{0}')
    .replace('{{ amount_with_comma_separator }}', '{0}')
    .replace('{{amount_no_decimals_with_comma_separator}}', '{0}')
    .replace('{{ amount_no_decimals_with_comma_separator }}', '{0}')
    .replace('{{amount_no_decimals}}', '{0}')
    .replace('{{ amount_no_decimals }}', '{0}');
    var usfPriceFormat = usf.settings.priceFormat.replace(/<[^>]*>?/gm, '');
    usf.settings.priceFormat = usf.settings.priceFormat.replace(usfPriceFormat,shopPriceFormat);
}

usf.event.add('init', function () { 
    _currencyConvert();
    //NewSearchResultsItemBase
    var NewSearchResultsItemBase = {
        mixins: [usf.components.SearchResultsGridItem],
        template: usf.templates.searchResultsGridViewItem,
        data() {
            return {
                productData: {},
                priceLoader: true
            } 
        }, 
        created() {
            var t = this;
            var url = `/products/` + this.product.urlName + '.js'
            fetch(url, {
               credentials: 'same-origin',
               method: 'GET'
            }).then(function (response) {
               return response.json() 
            }).then(rs => { 
               t.productData = rs;
               for(let i = 0; i < t.productData.variants.length;i++){
                   var v = t.productData.variants[i];
                   t.product.variants.filter(vr => {
                       if(v.id === vr.id){
                           vr.price = v.price/100;
                           if(v.compare_at_price){
                               vr.compareAtPrice = v.compare_at_price/100
                           }else{
                            vr.compareAtPrice = 0;
                        }
                       }
                   })
               }  
               usfRecalculateItemFields(t)
               t.priceLoader = false;
 
           }).catch(error => {
               t.priceLoader = false;
           }); 
        },
    }
    usf.components.NewSearchResultsItemBase = NewSearchResultsItemBase;

        var AvoneGridItem = {
        props: {
            index: Number
        },
        mixins: [usf.components.NewSearchResultsItemBase],
        template: usf.templates.searchResultsGridViewItem,
    }
    usf.register(AvoneGridItem, null, "usf-avone-griditem");

    // Inheritted component for grid view
    var NewSearchResultsGridItem = {
        mixins: [usf.components.NewSearchResultsItemBase],
        template: usf.templates.searchResultsGridViewItem,
    }
    usf.register(NewSearchResultsGridItem, null, "usf-new-griditem");

    // Inheritted component for list view
    var NewSearchResultsListItem = {
        mixins: [usf.components.NewSearchResultsItemBase],
        template: usf.templates.searchResultsListViewItem,
    }
    usf.register(NewSearchResultsListItem, null, "usf-new-listitem");

    // Inheritted component for the Instant search
    var InstantSearchItem = {
        mixins: [usf.components.NewSearchResultsItemBase],
        template: usf.templates.instantSearchItem,
        imageSize: 'small',
        methods: {
            onItemClick() {
                var p = this.product;

                //_instantSearch.onItemClick(p);

                _usfaq.track('productClick', {
                    url: this.productUrl,
                    id: p.id,
                    title: p.title,
                    variantId: p.selectedVariantId,
                    imageUrl: this.imageUrl,
                    term: this.term
                });
                location = this.productUrl;
            },
        }
    }
    usf.register(InstantSearchItem, null, "usf-new-is-item");
});
    
function usfRecalculateItemFields(t) {
    var sr_getPriceUnit = usf.settings.search.priceUnit || '';
    var sr_imageSize;
    var p = t.product;        
    var variants = p.variants;
    var selectedVariantId = p.selectedVariantId;
    var selectedVariant = selectedVariantId ? variants.find(v => v.id === selectedVariantId) : null;
    var selectedVariantForPrice = selectedVariant || (variants.length ? variants[0] : null)
    var compareAtPrice = selectedVariantForPrice.compareAtPrice;
    var price = selectedVariantForPrice.price;
    var discount = compareAtPrice > price ? compareAtPrice - price : 0;
    var colName = usf.platform.collection;
    var productUrl = usf.platform.getProductUrl(colName, p, selectedVariant);
    var productAvailable, continueSelling, isAvailable;
    if (selectedVariant) {
        productAvailable = selectedVariant.available;
        continueSelling = selectedVariant.flags & 1;
        // available === -2147483648 when the variant or product is marked as No tracking inventory.
        isAvailable = productAvailable > 0 || productAvailable === -2147483648;
    }
    else {            
        // aggregrate the available field from all variants.
        productAvailable = 0;
        for(var i = 0; i < variants.length; i++){
            var v = variants[i];
            // no inventory tracking?
            if (v.available === -2147483648){
                // we set total available as unknown and isAvailable = true
                productAvailable = -2147483648;
                continueSelling = false;
                isAvailable = true;
                break;
            } else {                        
                // add available
                productAvailable += v.available;
                // isAvailable is only set when v.available > 0
                if (v.available > 0)
                    isAvailable = true;

                // continue selling when sold out?
                if ((v.flags & 1)) {
                    continueSelling = true;
                }
            }
        }
    }

    // we set the fields in `created` event to minimize reactivity in our component to improve performance instead of having them in `data` or `computed`.
    var hasDiscount = !!discount;

    t.hasDiscount = hasDiscount;
    t.continueSelling = continueSelling;
    t.isSoldOut = !continueSelling && !isAvailable;

    t.price = price; 
    t.compareAtPrice = compareAtPrice;
    t.originalPrice = compareAtPrice > price ? compareAtPrice : price;  // similar to compareAtPrice but it check if the compareAtPrice is greater than price.

       //for priceVaries
    //replace displayMinDiscountedPrice = displayDiscountedPrice;
    var min = t.price;
    t.product.variants.forEach(v => {
        var p = v.price;
        if (p < min)
            min = p;
    })
    // short format for prices
    t.displayPrice = _usfGetDisplayPrice(t.originalPrice) + sr_getPriceUnit;     // price before discount
    t.displayDiscountedPrice = _usfGetDisplayPrice(min) + sr_getPriceUnit;   // price after discount


    if (hasDiscount) {
        t.displayDiscount = _usfGetDisplayPrice(discount) + sr_getPriceUnit;       // discount
        t.discount = discount;
    }


}

function _usfGetDisplayPrice(price){
    return  usf.settings.priceFormat.replace('{0}',usfFormatDecimal(price,usf.settings.decimals))
}

function usfFormatDecimal(num, decimals) {
    if (decimals === undefined)
        decimals = usf.settings.decimals;

    var str;
    var decpow = Math.pow(10, decimals);

    // round number
    str = Math.round(num * decpow).toString();
    var pointStr = usf.settings.decimalDisplay;
    var useTrailingZeros = usf.settings.useTrailingZeros;

    if (decimals) {
        var len = str.length;
        if (len > decimals) {
            var allZeros;

            var p = len - decimals;
            var end = str.substr(p);
            if (useTrailingZeros) {
                if (end.length < decimals)
                    while (end.length < decimals)
                        end += '0';
                else {
                    var n = end.length - 1;
                    while (n > decimals && end[n] == '0')
                        n--;
                    n++;
                    end = end.substr(0, n);
                }
            } else {
                // check if end is all zeros
                allZeros = true;
                var i = end.length - 1;
                while (i >= 0) {
                    if (end[i] !== '0') {
                        allZeros = false;
                        break;
                    }
                    i--;
                }
                i++;

                if (!allZeros && i < end.length)
                    end = end.substr(0, i);
            }

            if (allZeros)
                str = str.substr(0, p)
            else
                str = str.substr(0, p) + pointStr + end;
        }
        else {
            // less than zero
            if (useTrailingZeros) {
                while (str.length < decimals)
                    str = '0' + str;

                str = '0' + pointStr + str;
            }
            else {
                if (str !== '0') {
                    while (str.length < decimals)
                        str = '0' + str;
                    str = '0' + pointStr + str;
                }
            }
        }
    }

    // replace with thousand separator
    var sep = usf.settings.thousandSeparator;
    if (sep)
        return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + sep);
    return str;
}
//<div v-if="!priceLoader" class="grid-product__price">
/*END CURRENCY CONVERT*/

