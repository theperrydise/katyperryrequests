!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.isEmpty=function(e){return[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length},e.createJSONOutput=function(e){return HtmlService.createHtmlOutput("<pre>"+JSON.stringify(e,null,4)+"</pre>")},e.groupByProperty=function(e,t){return e.reduce(function(e,n){var o=n[t].toString(),a=e[o]||[];return a.push(n),e[o]=a,e},{})},e.shuffle=function(e){for(var t,n,o=e.length;o;)n=Math.floor(Math.random()*o--),t=e[o],e[o]=e[n],e[n]=t;return e},e}();t.Util=o},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(8);!function(){function e(e,t){}e.prototype.addOptions=function(e){},e.prototype.convertToOptions=function(e){return null}}();s.fn.select2.amd.define("select2/data/customDataAdapter",["select2/data/array"],function(e){return function(e){function t(t,n){var o=e.call(this,t,n)||this;return o.$element=t,o}return a(t,e),t.prototype.updateOptions=function(e){this.$element.find("option").remove();this.addOptions(this.convertToOptions(e.data))},t}(e)});var l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.$el=s(this.el);var t=Object.assign({},this.props,{theme:"bootstrap4"});this.$el.select2(t),Object.keys(this.props.events).forEach(function(t){return s(e.el).on(t,function(n){e.props.events[t](n)})})},t.prototype.componentWillUnmount=function(){this.$el.select2("destroy")},t.prototype.componentDidUpdate=function(e){JSON.stringify(e)!==JSON.stringify(this.props)&&(s(this.el).data("select2").dataAdapter.updateOptions(this.props),s(this.el).val(this.props.defaultValue),s(this.el).trigger("change"))},t.prototype.render=function(){var e=this;return r.createElement("div",null,r.createElement("select",{className:"select2 form-control",ref:function(t){return e.el=t}}))},t}(r.Component);t.Select2=l},function(e,t,n){e.exports={station:"station","card-footer":"card-footer",cardFooter:"card-footer","card-body":"card-body",cardBody:"card-body","card-text":"card-text",cardText:"card-text","card-grow":"card-grow",cardGrow:"card-grow",talent:"talent",col:"col"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(5),r=n(6);a.render(o.createElement(r.App,null),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(7),l=n(11),c=n(17),i=n(18),p=n(1),u=n(24),d=function(e){function t(t){var n=e.call(this,t)||this;return n.state={countries:null,selectedCountry:null,stations:null,selectedStation:null,selectedStationDetails:null,search:null,tweets:null,tweetGenerator:null},n.countrySelected=n.countrySelected.bind(n),n.stationSelected=n.stationSelected.bind(n),n.stationUnselected=n.stationUnselected.bind(n),n.getTweetUrl=n.getTweetUrl.bind(n),n.onModalOpen=n.onModalOpen.bind(n),n.onModalClose=n.onModalClose.bind(n),n}return a(t,e),t.prototype.componentDidMount=function(){var e=this;google.script.run.withSuccessHandler(function(t){e.setState({countries:t}),e.countrySelected(t.find(function(e){return"US"===e.code}))}).getCountrySummaries()},t.prototype.countrySelected=function(e){var t=this;this.setState({selectedCountry:e}),google.script.run.withSuccessHandler(function(e){var n=e.reduce(function(e,t){return null==e.find(function(e){return e===t.languageId})&&e.push(t.languageId),e},[]);google.script.run.withSuccessHandler(function(n){t.setState({stations:p.Util.shuffle(e),tweets:n,tweetGenerator:new u.TweetGenerator(n)})}).getTweetsByLanguage(n)}).getStationsByCountry(e.id),google.script.run.withSuccessHandler(function(e){t.setState({search:e})}).getSearchOptions(e.id)},t.prototype.stationSelected=function(e){var t=this;this.setState({selectedStation:e}),google.script.run.withSuccessHandler(function(e){t.setState({selectedStationDetails:e})}).getStation(e.code)},t.prototype.stationUnselected=function(e){this.setState({selectedStation:null,selectedStationDetails:null})},t.prototype.onModalOpen=function(e){console.log("open",e),window.scrollTo(0,0)},t.prototype.onModalClose=function(e){console.log("close",e);var t=$("#station_"+this.state.selectedStation.id);window.scrollTo(0,t.position().top)},t.prototype.getTweetUrl=function(e,t){var n=this.state.tweetGenerator.get(t||e.languageId,e.twitter);return"https://twitter.com/intent/tweet?text="+(n=encodeURIComponent(n))},t.prototype.render=function(){return r.createElement("div",{className:c.app},r.createElement("div",{className:"container"},r.createElement("img",{src:"https://beccasafan.github.io/radio-promo-app/code/client/dist/banner.jpg",className:"img-fluid my-5",alt:"Radio Request Database"}),null==this.state.countries&&r.createElement("p",null,"Loading..."),null!=this.state.countries&&r.createElement("div",null,r.createElement(s.CountryDropdown,{countries:this.state.countries,onChange:this.countrySelected,defaultCountry:"US"})),this.state.countries&&!(this.state.stations||this.state.tweets)&&r.createElement("p",null,"Loading..."),this.state.countries&&this.state.selectedCountry&&this.state.tweets&&r.createElement(l.Stations,{key:this.state.selectedCountry.id+"_"+Object.keys(this.state.tweets).join(","),countryId:this.state.selectedCountry.id,stations:this.state.stations,search:this.state.search,onSelect:this.stationSelected,getTweetUrl:this.getTweetUrl}),this.state.countries&&this.state.stations&&this.state.selectedStation&&r.createElement(i.Detail,{station:this.state.selectedStation,detail:this.state.selectedStationDetails,handleClose:this.stationUnselected,getTweetUrl:this.getTweetUrl,onModalOpen:this.onModalOpen,onModalClose:this.onModalClose})))},t}(r.Component);t.App=d},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(2),l=n(9),c=n(10),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={selectedCountry:null},n.countrySelected=n.countrySelected.bind(n),n}return a(t,e),t.prototype.formatCountry=function(e){if(!e.id)return e.text;var t=e.code.toLowerCase();return"uk"===t&&(t="gb"),$(l.renderToStaticMarkup(r.createElement("span",{key:e.id,className:c.countrySelector},r.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+t+".svg",alt:"Card image cap"}),r.createElement("span",null,e.name," - ",e.stations," stations"))))},t.prototype.formatCountrySelection=function(e){if(!e.id)return e.text;var t=e.code.toLowerCase();return"uk"===t&&(t="gb"),$(l.renderToStaticMarkup(r.createElement("span",{key:e.id,className:c.countrySelector},r.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+t+".svg",alt:"Card image cap"}),r.createElement("span",null,e.name))))},t.prototype.countrySelected=function(e){var t=e.params.data;this.props.onChange(t)},t.prototype.render=function(){var e=this,t=$.fn.select2.amd.require("select2/data/customDataAdapter"),n={"select2:select":this.countrySelected};return this.props.countries.find(function(t){return t.id===e.props.defaultCountry}).selected=!0,r.createElement(s.Select2,{width:"100%",data:this.props.countries,dataAdapter:t,templateResult:this.formatCountry,templateSelection:this.formatCountrySelection,events:n,containerCssClass:"country-dropdown-select2"})},t}(r.Component);t.CountryDropdown=i},function(e,t){e.exports=jQuery},function(e,t){e.exports=ReactDOMServer},function(e,t,n){e.exports={"country-selector":"country-selector",countrySelector:"country-selector","select2-container--bootstrap4":"select2-container--bootstrap4",select2ContainerBootstrap4:"select2-container--bootstrap4","select2-selection--single":"select2-selection--single",select2SelectionSingle:"select2-selection--single","select2-selection__placeholder":"select2-selection__placeholder",select2SelectionPlaceholder:"select2-selection__placeholder","select2-selection__arrow":"select2-selection__arrow",select2SelectionArrow:"select2-selection__arrow","select2-selection__rendered":"select2-selection__rendered",select2SelectionRendered:"select2-selection__rendered","select2-search--dropdown":"select2-search--dropdown",select2SearchDropdown:"select2-search--dropdown","select2-search__field":"select2-search__field",select2SearchField:"select2-search__field","select2-results__message":"select2-results__message",select2ResultsMessage:"select2-results__message","select2-selection--multiple":"select2-selection--multiple",select2SelectionMultiple:"select2-selection--multiple","select2-selection__choice":"select2-selection__choice",select2SelectionChoice:"select2-selection__choice","select2-selection__choice__remove":"select2-selection__choice__remove",select2SelectionChoiceRemove:"select2-selection__choice__remove","select2-container":"select2-container",select2Container:"select2-container","select2-selection":"select2-selection",select2Selection:"select2-selection","select2-container--focus":"select2-container--focus",select2ContainerFocus:"select2-container--focus","select2-container--open":"select2-container--open",select2ContainerOpen:"select2-container--open","is-invalid":"is-invalid",isInvalid:"is-invalid","is-valid":"is-valid",isValid:"is-valid","select2-dropdown":"select2-dropdown",select2Dropdown:"select2-dropdown","select2-results__option":"select2-results__option",select2ResultsOption:"select2-results__option","select2-results__option--highlighted":"select2-results__option--highlighted",select2ResultsOptionHighlighted:"select2-results__option--highlighted","select2-results__options":"select2-results__options",select2ResultsOptions:"select2-results__options","select2-results__group":"select2-results__group",select2ResultsGroup:"select2-results__group","select2-selection__clear":"select2-selection__clear",select2SelectionClear:"select2-selection__clear"}},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),l=n(12),c=n(14),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={visibleStations:null,currentPage:1},n.onSearch=n.onSearch.bind(n),n.onNextClick=n.onNextClick.bind(n),n.onPreviousClick=n.onPreviousClick.bind(n),n}return a(t,e),t.prototype.onSearch=function(e){var t=this;this.setState(e,function(){t.setState({visibleStations:t.filter()})})},t.prototype.onNextClick=function(){this.setState(function(e,t){return{currentPage:e.currentPage+1}})},t.prototype.onPreviousClick=function(){this.setState(function(e,t){return{currentPage:e.currentPage-1}})},t.prototype.filter=function(){var e=this,t=function(e,t,n){return null!=e[t]&&e[t].toLowerCase().indexOf(n)>=0},n=function(e,t){return!s.Util.isEmpty(e[t])};return this.props.stations.filter(function(o){return(null==e.state.selectedFormat||(a=o,e.state.selectedFormat===e.props.search.formats.find(function(e){return e.id===a.formatId}).code))&&(null==e.state.selectedParent||t(o,"parentGroup",e.state.selectedParent.toLowerCase()))&&(null==e.state.location||t(o,"location",e.state.location.toLowerCase()))&&(null==e.state.name||t(o,"name",e.state.name.toLowerCase())||t(o,"code",e.state.name.toLowerCase()))&&(!e.state.twitter||n(o,"twitter"))&&(!e.state.instagram||n(o,"instagram"))&&(!e.state.facebook||n(o,"facebook"))&&(!e.state.email||n(o,"email"))&&(!e.state.text||n(o,"text"))&&(!e.state.phone||n(o,"phone"));var a})},t.prototype.render=function(){var e=this.state.visibleStations||this.props.stations,t=e.slice((this.state.currentPage-1)*this.props.pageSize,this.state.currentPage*this.props.pageSize);if(null==this.props.stations)return r.createElement("p",null,"Loading...");var n=this.state.currentPage<=1?r.createElement("li",{className:"page-item disabled"},r.createElement("a",{className:"page-link",tabIndex:-1},"Previous")):r.createElement("li",{className:"page-item"},r.createElement("a",{className:"page-link",onClick:this.onPreviousClick},"Previous")),o=this.state.currentPage>=Math.ceil(e.length/this.props.pageSize)?r.createElement("li",{className:"page-item disabled"},r.createElement("a",{className:"page-link",tabIndex:-1},"Next")):r.createElement("li",{className:"page-item"},r.createElement("a",{className:"page-link",onClick:this.onNextClick},"Next")),a=function(e){return r.createElement("nav",{"aria-label":e+" Pager"},r.createElement("ul",{className:"pagination justify-content-center"},n,o))};return r.createElement("div",{key:this.props.countryId},r.createElement(l.Search,{options:this.props.search,onSearch:this.onSearch,twitter:this.state.twitter}),r.createElement("div",null,a("Top"),r.createElement(c.FilteredList,{key:this.props.countryId,countryId:this.props.countryId,stations:t,onSelect:this.props.onSelect,onSearch:this.onSearch,getTweetUrl:this.props.getTweetUrl}),a("Bottom")))},t}(r.Component);t.Stations=i,i.defaultProps={pageSize:24}},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(2),l=n(13),c=function(e){function t(t){var n=e.call(this,t)||this;return n.state={parentGroup:null,location:null,name:null,twitter:null,instagram:null,facebook:null,email:null,text:null,phone:null},n.onFormatChange=n.onFormatChange.bind(n),n.onFormatReset=n.onFormatReset.bind(n),n.onParentChange=n.onParentChange.bind(n),n.onParentChangeDebounced=l.debounce(250,n.props.onSearch.bind(n)),n.onLocationChange=n.onLocationChange.bind(n),n.onLocationChangeDebounced=l.debounce(250,n.props.onSearch.bind(n)),n.onNameChange=n.onNameChange.bind(n),n.onNameChangeDebounced=l.debounce(250,n.props.onSearch.bind(n)),n.onTwitterChange=n.onTwitterChange.bind(n),n.onInstagramChange=n.onInstagramChange.bind(n),n.onFacebookChange=n.onFacebookChange.bind(n),n.onEmailChange=n.onEmailChange.bind(n),n.onTextChange=n.onTextChange.bind(n),n.onPhoneChange=n.onPhoneChange.bind(n),n}return a(t,e),t.prototype.onFormatChange=function(e){this.props.onSearch({selectedFormat:e.params.data.id})},t.prototype.onFormatReset=function(e){this.props.onSearch({selectedFormat:null})},t.prototype.onParentChange=function(e){var t=this;this.setState({parentGroup:e.target.value},function(){var e=t.state.parentGroup;t.onParentChangeDebounced({selectedParent:e})})},t.prototype.onLocationChange=function(e){var t=this;this.setState({location:e.target.value},function(){var e=t.state.location;t.onLocationChangeDebounced({location:e})})},t.prototype.onNameChange=function(e){var t=this;this.setState({name:e.target.value},function(){var e=t.state.name;t.onNameChangeDebounced({name:e})})},t.prototype.onTwitterChange=function(e){this.props.onSearch({twitter:e.target.checked})},t.prototype.onInstagramChange=function(e){this.props.onSearch({instagram:e.target.checked})},t.prototype.onFacebookChange=function(e){this.props.onSearch({facebook:e.target.checked})},t.prototype.onEmailChange=function(e){this.props.onSearch({email:e.target.checked})},t.prototype.onTextChange=function(e){this.props.onSearch({text:e.target.checked})},t.prototype.onPhoneChange=function(e){this.props.onSearch({phone:e.target.checked})},t.prototype.render=function(){var e={"select2:select":this.onFormatChange,"select2:unselecting":this.onFormatReset};if(null==this.props.options)return r.createElement("div",null);var t=this.props.options.formats.reduce(function(e,t){return null==e.find(function(e){return e.id===t.code})&&e.push({id:t.code,text:t.name}),e},[]),n="col-sm-12 col-md-6 col-lg-4 form-group",o=$.fn.select2.amd.require("select2/data/customDataAdapter");return r.createElement("div",{className:""},r.createElement("div",{className:"row py-3"},r.createElement("div",{className:n},r.createElement(s.Select2,{width:"100%",data:[{id:"",text:"All Formats"},{id:"",text:"All Formats"}].concat(t),dataAdapter:o,events:e,placeholder:"All Formats",allowClear:"true"})),r.createElement("div",{className:n},r.createElement("input",{type:"text",className:"form-control",placeholder:"Search by Parent Network",value:this.state.parentGroup,onChange:this.onParentChange})),r.createElement("div",{className:n},r.createElement("input",{type:"text",className:"form-control",placeholder:"Search by Location",value:this.state.location,onChange:this.onLocationChange,"aria-describedby":"locationHelpBlock"}),r.createElement("small",{id:"locationHelpBlock",className:"form-text text-muted"},'* To search for a State/Province NY, try searching for ", NY"')),r.createElement("div",{className:n},r.createElement("input",{type:"text",className:"form-control",placeholder:"Search by Name",value:this.state.name,onChange:this.onNameChange,"aria-describedby":"nameHelpBlock"}),r.createElement("small",{id:"nameHelpBlock",className:"form-text text-muted"},"* Can also search by call-sign.")),r.createElement("div",{className:n},r.createElement("div",{className:"row text-center social no-gutters"},r.createElement("div",{className:"col"},r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"twitter",checked:this.state.twitter,onChange:this.onTwitterChange}),r.createElement("label",{className:"form-check-label",htmlFor:"twitter"},r.createElement("i",{className:"fab fa-twitter"})," "))),r.createElement("div",{className:"col"},r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"instagram",checked:this.state.instagram,onChange:this.onInstagramChange}),r.createElement("label",{className:"form-check-label",htmlFor:"instagram"},r.createElement("i",{className:"fab fa-instagram"})," "))),r.createElement("div",{className:"col"},r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"facebook",checked:this.state.facebook,onChange:this.onFacebookChange}),r.createElement("label",{className:"form-check-label",htmlFor:"facebook"},r.createElement("i",{className:"fab fa-facebook"})," "))),r.createElement("div",{className:"col"},r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"email",checked:this.state.email,onChange:this.onEmailChange}),r.createElement("label",{className:"form-check-label",htmlFor:"email"},r.createElement("i",{className:"fas fa-envelope"})," "))),r.createElement("div",{className:"col"},r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"text",checked:this.state.text,onChange:this.onTextChange}),r.createElement("label",{className:"form-check-label",htmlFor:"text"},r.createElement("i",{className:"fas fa-comment"})," "))),r.createElement("div",{className:"col"},r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"phone",checked:this.state.phone,onChange:this.onPhoneChange}),r.createElement("label",{className:"form-check-label",htmlFor:"phone"},r.createElement("i",{className:"fas fa-phone"})," ")))))))},t}(r.Component);t.Search=c},function(e,t,n){"use strict";function o(e,t,n,o){var a,r=!1,s=0;function l(){a&&clearTimeout(a)}function c(){var c=this,i=Date.now()-s,p=arguments;function u(){s=Date.now(),n.apply(c,p)}r||(o&&!a&&u(),l(),void 0===o&&i>e?u():!0!==t&&(a=setTimeout(o?function(){a=void 0}:u,void 0===o?e-i:e)))}return"boolean"!=typeof t&&(o=n,n=t,t=void 0),c.cancel=function(){l(),r=!0},c}function a(e,t,n){return void 0===n?o(e,t,!1):o(e,n,!1!==t)}n.r(t),n.d(t,"throttle",function(){return o}),n.d(t,"debounce",function(){return a})},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(15),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return a(t,e),t.prototype.render=function(){var e=this;return null==this.props.stations?r.createElement("div",null,"Loading stations..."):0==this.props.stations.length?r.createElement("div",null,"No results..."):r.createElement("div",{key:this.props.countryId,className:"row"},this.props.stations.map(function(t){return r.createElement(s.Summary,{key:t.id,station:t,onSelect:e.props.onSelect,getTweetUrl:e.props.getTweetUrl})}))},t}(r.Component);t.FilteredList=l},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),l=n(3),c=n(16),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n.open=n.open.bind(n),n}return a(t,e),t.prototype.componentDidMount=function(){this.$el=$(this.el)},t.prototype.shouldComponentUpdate=function(e,t){return e.station!=this.props.station},t.prototype.open=function(){this.props.onSelect(this.props.station),google.script.run.consoleLog("scrolled down",this.$el.scrollTop(),this.$el.position().top,window.scrollY)},t.prototype.render=function(){var e=this;return s.Util.isEmpty(this.props)?r.createElement("div",null,"Loading station..."):r.createElement("div",{ref:function(t){return e.el=t},id:"station_"+this.props.station.id,className:c.default(l.station,"col-sm-12 col-md-6 col-lg-4 col-xl-3 py-3")},r.createElement("div",{className:"card h-100"},r.createElement("div",{className:"card-header",onClick:this.open},this.props.station.code),r.createElement("div",{className:"card-body"},r.createElement("h5",{className:"card-title",onClick:this.open},this.props.station.name),r.createElement("p",{className:"card-text"},this.props.station.location),r.createElement("div",{className:l.cardGrow},!s.Util.isEmpty(this.props.station.parentGroup)&&r.createElement("p",{className:"card-text"},this.props.station.parentGroup),this.props.station.talent>0&&r.createElement("p",{className:"card-text"},this.props.station.talent," talent"),this.props.station.syndicated>0&&r.createElement("p",{className:"card-text"},this.props.station.syndicated," syndicated talent"),!s.Util.isEmpty(this.props.station.note)&&r.createElement("p",{className:"card-text"},this.props.station.note)),r.createElement("a",{href:"javascript:;",onClick:this.open,className:"btn btn-outline-secondary btn-block"},"View")),r.createElement("div",{className:"card-footer"},r.createElement("div",{className:"row no-gutters"},r.createElement("div",{className:"col"},r.createElement("a",{href:"javascript:;",onClick:this.open},r.createElement("i",{className:"fas fa-eye"}))),r.createElement("div",{className:"col"},this.props.station.website&&r.createElement("a",{href:this.props.station.website,target:"_blank"},r.createElement("i",{className:"fas fa-link"}))),r.createElement("div",{className:"col"},this.props.station.twitter&&r.createElement("a",{href:this.props.getTweetUrl(this.props.station),target:"_blank"},r.createElement("i",{className:"fab fa-twitter"}))),r.createElement("div",{className:"col"},this.props.station.instagram&&r.createElement("a",{href:"https://instagram.com/"+this.props.station.instagram,target:"_blank"},r.createElement("i",{className:"fab fa-instagram"}))),r.createElement("div",{className:"col"},this.props.station.facebook&&r.createElement("a",{href:"https://facebook.com/"+this.props.station.facebook,target:"_blank"},r.createElement("i",{className:"fab fa-facebook"}))),r.createElement("div",{className:"col"},this.props.station.email&&r.createElement("a",{href:"mailto:"+this.props.station.email,target:"_blank"},r.createElement("i",{className:"fas fa-envelope"}))),r.createElement("div",{className:"col"},this.props.station.text&&r.createElement("a",{href:"javascript:;",onClick:this.open},r.createElement("i",{className:"fas fa-comment"}))),r.createElement("div",{className:"col"},this.props.station.phone&&r.createElement("a",{href:"tel:"+this.props.station.phone},r.createElement("i",{className:"fas fa-phone"}))),r.createElement("div",{className:"col"},this.props.station.note&&r.createElement("a",{href:"javascript:;",onClick:this.open},r.createElement("i",{onClick:this.open,className:"fas fa-sticky-note"})))))))},t}(r.Component);t.Summary=i},function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var s=a.apply(null,o);s&&e.push(s)}else if("object"===r)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){e.exports={"color--redpink":"color--redpink",colorRedpink:"color--redpink","text--redpink":"text--redpink",textRedpink:"text--redpink","color--pink":"color--pink",colorPink:"color--pink","text--pink":"text--pink",textPink:"text--pink","color--white":"color--white",colorWhite:"color--white","text--white":"text--white",textWhite:"text--white","color--gray":"color--gray",colorGray:"color--gray","text--gray":"text--gray",textGray:"text--gray","color--green":"color--green",colorGreen:"color--green","text--green":"text--green",textGreen:"text--green","color--lightgreen":"color--lightgreen",colorLightgreen:"color--lightgreen","text--lightgreen":"text--lightgreen",textLightgreen:"text--lightgreen","color--olivegreen":"color--olivegreen",colorOlivegreen:"color--olivegreen","text--olivegreen":"text--olivegreen",textOlivegreen:"text--olivegreen","color--yellow":"color--yellow",colorYellow:"color--yellow","text--yellow":"text--yellow",textYellow:"text--yellow","color--peach":"color--peach",colorPeach:"color--peach","text--peach":"text--peach",textPeach:"text--peach","color--black":"color--black",colorBlack:"color--black","text--black":"text--black",textBlack:"text--black","color--brown":"color--brown",colorBrown:"color--brown","text--brown":"text--brown",textBrown:"text--brown","color--darkgray":"color--darkgray",colorDarkgray:"color--darkgray","text--darkgray":"text--darkgray",textDarkgray:"text--darkgray","color--lightorange":"color--lightorange",colorLightorange:"color--lightorange","text--lightorange":"text--lightorange",textLightorange:"text--lightorange","color--orange":"color--orange",colorOrange:"color--orange","text--orange":"text--orange",textOrange:"text--orange","color--darkbrown":"color--darkbrown",colorDarkbrown:"color--darkbrown","text--darkbrown":"text--darkbrown",textDarkbrown:"text--darkbrown","color--purplegray":"color--purplegray",colorPurplegray:"color--purplegray","text--purplegray":"text--purplegray",textPurplegray:"text--purplegray","color--red":"color--red",colorRed:"color--red","text--red":"text--red",textRed:"text--red","card-header":"card-header",cardHeader:"card-header",root:"root"}},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(19),l=n(20),c=n(21),i=n(22),p=n(23),u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n.handleClose=n.handleClose.bind(n),n}return a(t,e),t.prototype.handleClose=function(e){this.props.handleClose(e)},t.prototype.render=function(){var e=this,t="station_detail_"+this.props.station.id;return r.createElement(s.Modal,{contentKey:null!=this.props.station?this.props.station.id:null,handleClose:this.handleClose,events:{"show.bs.modal":this.props.onModalOpen,"hide.bs.modal":this.props.onModalClose}},r.createElement(l.ModalHeader,null,r.createElement("h5",{className:"modal-title",id:"station-detail-header"},this.props.station.name),r.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.createElement("span",{"aria-hidden":"true"},"×"))),r.createElement(c.ModalBody,null,r.createElement("div",{id:t},r.createElement("div",{className:"card"},r.createElement("div",{className:"card-header",id:t+"_details_heading"},r.createElement("h5",{className:"mb-0"},r.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#"+t+"_details"},"Station Details"))),r.createElement("div",{id:t+"_details",className:"collapse show","aria-labelledBy":t+"_details_heading","data-parent":"#"+t},r.createElement("div",{className:"card-body"},this.props.detail&&this.props.detail.location&&r.createElement("p",null,this.props.detail.location),this.props.detail&&this.props.detail.parentGroup&&r.createElement("p",null,this.props.detail.parentGroup),this.props.detail&&this.props.detail.note&&r.createElement("p",null,this.props.detail.note),this.props.detail&&this.props.detail.website&&r.createElement("p",null,r.createElement("a",{href:this.props.station.website,target:"_blank"},r.createElement("i",{className:"fas fa-link"})," ",this.props.station.website)),this.props.detail&&this.props.detail.twitter&&r.createElement("p",null,r.createElement("a",{href:this.props.getTweetUrl(this.props.station),target:"_blank"},r.createElement("i",{className:"fab fa-twitter"})," ",this.props.detail.twitter)),this.props.detail&&this.props.detail.instagram&&r.createElement("p",null,r.createElement("a",{href:"https://instagram.com/"+this.props.station.instagram,target:"_blank"},r.createElement("i",{className:"fab fa-instagram"})," ",this.props.detail.instagram)),this.props.detail&&this.props.detail.facebook&&r.createElement("p",null,r.createElement("a",{href:"https://facebook.com/"+this.props.station.facebook,target:"_blank"},r.createElement("i",{className:"fab fa-facebook"})," ",this.props.detail.facebook)),this.props.detail&&this.props.detail.email&&r.createElement("p",null,r.createElement("a",{href:"mailto:"+this.props.station.email,target:"_blank"},r.createElement("i",{className:"fas fa-envelope"})," ",this.props.detail.email)),this.props.detail&&this.props.detail.text&&r.createElement("p",null,r.createElement("i",{className:"fas fa-comment"})," ",this.props.detail.text),this.props.detail&&this.props.detail.phone&&r.createElement("p",null,r.createElement("a",{href:"tel:"+this.props.station.phone},r.createElement("i",{className:"fas fa-phone"})," ",this.props.detail.phone))))),r.createElement("div",{className:"card"},r.createElement("div",{className:"card-header",id:t+"_talent_heading"},r.createElement("h5",{className:"mb-0"},r.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#"+t+"_talent"},"Talent"))),r.createElement("div",{id:t+"_talent",className:"collapse","aria-labelledBy":t+"_talent_heading","data-parent":"#"+t},r.createElement("div",{className:"card-body"},this.props.detail&&this.props.detail.talent&&this.props.detail.talent.map(function(t){return r.createElement(p.Talent,{talent:t,languageId:e.props.station.languageId,getTweetUrl:e.props.getTweetUrl})})))),r.createElement("div",{className:"card"},r.createElement("div",{className:"card-header",id:t+"_talent_heading"},r.createElement("h5",{className:"mb-0"},r.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#"+t+"_talent"},"Syndicated Talent"))),r.createElement("div",{id:t+"_talent",className:"collapse","aria-labelledBy":t+"_talent_heading","data-parent":"#"+t},r.createElement("div",{className:"card-body"},this.props.detail&&this.props.detail.syndicatedTalent&&this.props.detail.syndicatedTalent.map(function(t){return r.createElement(p.Talent,{talent:t,languageId:e.props.station.languageId,getTweetUrl:e.props.getTweetUrl})}))))),null==this.props.detail&&r.createElement("p",null,"Loading...")),r.createElement(i.ModalFooter,null,r.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))},t}(r.Component);t.Detail=u},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.$el=$(this.el),this.$el.modal({focus:!0}),this.$el.on("hidden.bs.modal",function(t){return e.props.handleClose(t)});var t=this.$el.find(".modal-body");Object.keys(this.props.events).forEach(function(t){return $(e.el).on(t,function(n){e.props.events[t](n)})}),this.$el.on("shown.bs.modal",function(e){google.script.run.consoleLog("modal position",t.scrollTop(),t.position().top,window.scrollY)})},t.prototype.componentWillUnmount=function(){this.$el.modal("dispose")},t.prototype.componentDidUpdate=function(e){null!=this.props.contentKey?this.$el.modal("show"):this.$el.modal("hide")},t.prototype.render=function(){var e=this;return r.createElement("div",{ref:function(t){return e.el=t},className:"modal fade",tabIndex:-1,role:"dialog"},r.createElement("div",{className:"modal-dialog",role:"document"},r.createElement("div",{className:"modal-content"},this.props.children)))},t}(r.Component);t.Modal=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.ModalHeader=function(e){return o.createElement("div",{className:"modal-header"},e.children)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.ModalBody=function(e){return o.createElement("div",{className:"modal-body"},e.children)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.ModalFooter=function(e){return o.createElement("div",{className:"modal-footer"},e.children)}},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),l=n(3),c=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return a(t,e),t.prototype.render=function(){return r.createElement("div",{className:"my-3 "+l.talent},r.createElement("div",{className:"card"},r.createElement("div",{className:"card-body"},r.createElement("div",{className:"card-title"},this.props.talent.name),!s.Util.isEmpty(this.props.talent.note)&&r.createElement("p",{className:"card-text"},this.props.talent.note),r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},this.props.talent.twitter&&r.createElement("a",{className:"px-3",href:this.props.getTweetUrl(this.props.talent,this.props.languageId),target:"_blank"},r.createElement("i",{className:"fab fa-twitter"})),this.props.talent.instagram&&r.createElement("a",{className:"px-3",href:"https://instagram.com/"+this.props.talent.instagram,target:"_blank"},r.createElement("i",{className:"fab fa-instagram"})),this.props.talent.facebook&&r.createElement("a",{className:"px-3",href:"https://facebook.com/"+this.props.talent.facebook,target:"_blank"},r.createElement("i",{className:"fab fa-facebook"})),this.props.talent.email&&r.createElement("a",{className:"px-3",href:"mailto:"+this.props.talent.email,target:"_blank"},r.createElement("i",{className:"fas fa-envelope"})))))))},t}(r.Component);t.Talent=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=function(){function e(e){var t=this;this.currentIndex=0,this.tweets={},Object.keys(e).forEach(function(n){return t.tweets[n]=o.Util.shuffle(e[n])})}return e.prototype.get=function(e,t){if(null==this.tweets||null==this.tweets[e])return"";this.currentIndex=(this.currentIndex+1)%this.tweets[e].length;var n=this.tweets[e][this.currentIndex].text;return n.indexOf("{{target}}")<0&&(n=".@"+t+" "+n),n=n.replace("{{username}}","@Louis_Tomlinson").replace("{{artist}}","@Louis_Tomlinson").replace("{{hashtag}}","#TwoOfUs").replace("{{target}}","@"+t)},e}();t.TweetGenerator=a}]);
//# sourceMappingURL=index.js.map