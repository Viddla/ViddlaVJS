/* videojs-hotkeys v0.2.25 - https://github.com/ctd1500/videojs-hotkeys */
!function(e,n){"undefined"!=typeof window&&window.videojs?n(window.videojs):"function"==typeof define&&define.amd?define("videojs-hotkeys",["video.js"],function(e){return n(e.default||e)}):"undefined"!=typeof module&&module.exports&&(module.exports=n(require("video.js")))}(0,function(e){"use strict";"undefined"!=typeof window&&(window.videojs_hotkeys={version:"0.2.25"});(e.registerPlugin||e.plugin)("hotkeys",function(n){function t(e){return"function"==typeof s?s(e):s}function r(e){null!=e&&"function"==typeof e.then&&e.then(null,function(e){})}var o=this,u=o.el(),l=document,i={volumeStep:.1,seekStep:5,enableMute:!0,enableVolumeScroll:!0,enableHoverScroll:!1,enableFullscreen:!0,enableNumbers:!0,enableJogStyle:!1,alwaysCaptureHotkeys:!1,enableModifiersForNumbers:!0,enableInactiveFocus:!0,skipInitialFocus:!1,playPauseKey:function(e){return 32===e.which||179===e.which},rewindKey:function(e){return 37===e.which||177===e.which},forwardKey:function(e){return 39===e.which||176===e.which},volumeUpKey:function(e){return 38===e.which},volumeDownKey:function(e){return 40===e.which},muteKey:function(e){return 77===e.which},fullscreenKey:function(e){return 70===e.which},customKeys:{}},c=e.mergeOptions||e.util.mergeOptions,a=(n=c(i,n||{})).volumeStep,s=n.seekStep,m=n.enableMute,f=n.enableVolumeScroll,y=n.enableHoverScroll,v=n.enableFullscreen,d=n.enableNumbers,p=n.enableJogStyle,b=n.alwaysCaptureHotkeys,h=n.enableModifiersForNumbers,w=n.enableInactiveFocus,k=n.skipInitialFocus,S=e.VERSION;u.hasAttribute("tabIndex")||u.setAttribute("tabIndex","-1"),u.style.outline="none",!b&&o.autoplay()||k||o.one("play",function(){u.focus()}),w&&o.on("userinactive",function(){var e=function(){clearTimeout(n)},n=setTimeout(function(){o.off("useractive",e);var n=l.activeElement,t=u.querySelector(".vjs-control-bar");n&&n.parentElement==t&&u.focus()},10);o.one("useractive",e)}),o.on("play",function(){var e=u.querySelector(".iframeblocker");e&&""===e.style.display&&(e.style.display="block",e.style.bottom="39px")});var K=!1,q=u.querySelector(".vjs-volume-menu-button")||u.querySelector(".vjs-volume-panel");null!=q&&(q.onmouseover=function(){K=!0},q.onmouseout=function(){K=!1});var j=function(e){if(y)n=0;else var n=l.activeElement;if(o.controls()&&(b||n==u||n==u.querySelector(".vjs-tech")||n==u.querySelector(".iframeblocker")||n==u.querySelector(".vjs-control-bar")||K)&&f){e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));e.preventDefault(),1==t?o.volume(o.volume()+a):-1==t&&o.volume(o.volume()-a)}},F=function(e,t){return n.playPauseKey(e,t)?1:n.rewindKey(e,t)?2:n.forwardKey(e,t)?3:n.volumeUpKey(e,t)?4:n.volumeDownKey(e,t)?5:n.muteKey(e,t)?6:n.fullscreenKey(e,t)?7:void 0};return o.on("keydown",function(e){var i,c,s=e.which,f=e.preventDefault,y=o.duration();if(o.controls()){var w=l.activeElement;if(b||w==u||w==u.querySelector(".vjs-tech")||w==u.querySelector(".vjs-control-bar")||w==u.querySelector(".iframeblocker"))switch(F(e,o)){case 1:f(),b&&e.stopPropagation(),o.paused()?r(o.play()):o.pause();break;case 2:i=!o.paused(),f(),i&&o.pause(),(c=o.currentTime()-t(e))<=0&&(c=0),o.currentTime(c),i&&r(o.play());break;case 3:i=!o.paused(),f(),i&&o.pause(),(c=o.currentTime()+t(e))>=y&&(c=i?y-.001:y),o.currentTime(c),i&&r(o.play());break;case 5:f(),p?(c=o.currentTime()-1,o.currentTime()<=1&&(c=0),o.currentTime(c)):o.volume(o.volume()-a);break;case 4:f(),p?((c=o.currentTime()+1)>=y&&(c=y),o.currentTime(c)):o.volume(o.volume()+a);break;case 6:m&&o.muted(!o.muted());break;case 7:v&&(o.isFullscreen()?o.exitFullscreen():o.requestFullscreen());break;default:if((s>47&&s<59||s>95&&s<106)&&(h||!(e.metaKey||e.ctrlKey||e.altKey))&&d){var k=48;s>95&&(k=96);var S=s-k;f(),o.currentTime(o.duration()*S*.1)}for(var K in n.customKeys){var q=n.customKeys[K];q&&q.key&&q.handler&&q.key(e)&&(f(),q.handler(o,n,e))}}}}),o.on("dblclick",function(e){if(null!=S&&S<="7.1.0"&&o.controls()){var n=e.relatedTarget||e.toElement||l.activeElement;n!=u&&n!=u.querySelector(".vjs-tech")&&n!=u.querySelector(".iframeblocker")||v&&(o.isFullscreen()?o.exitFullscreen():o.requestFullscreen())}}),o.on("mousewheel",j),o.on("DOMMouseScroll",j),this})});

/*! @name videojs-contrib-quality-levels @version 2.0.9 @license Apache-2.0 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("video.js"),require("global/document")):"function"==typeof define&&define.amd?define(["video.js","global/document"],t):e.videojsContribQualityLevels=t(e.videojs,e.document)}(this,function(e,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t;var r=function(r){var i,l;function o(){var i,l=n(n(i=r.call(this)||this));if(e.browser.IS_IE8)for(var s in l=t.createElement("custom"),o.prototype)"constructor"!==s&&(l[s]=o.prototype[s]);return l.levels_=[],l.selectedIndex_=-1,Object.defineProperty(l,"selectedIndex",{get:function(){return l.selectedIndex_}}),Object.defineProperty(l,"length",{get:function(){return l.levels_.length}}),l||n(i)}l=r,(i=o).prototype=Object.create(l.prototype),i.prototype.constructor=i,i.__proto__=l;var s=o.prototype;return s.addQualityLevel=function(n){var r=this.getQualityLevelById(n.id);if(r)return r;var i=this.levels_.length;return r=new function n(r){var i=this;if(e.browser.IS_IE8)for(var l in i=t.createElement("custom"),n.prototype)"constructor"!==l&&(i[l]=n.prototype[l]);return i.id=r.id,i.label=i.id,i.width=r.width,i.height=r.height,i.bitrate=r.bandwidth,i.enabled_=r.enabled,Object.defineProperty(i,"enabled",{get:function(){return i.enabled_()},set:function(e){i.enabled_(e)}}),i}(n),""+i in this||Object.defineProperty(this,i,{get:function(){return this.levels_[i]}}),this.levels_.push(r),this.trigger({qualityLevel:r,type:"addqualitylevel"}),r},s.removeQualityLevel=function(e){for(var t=null,n=0,r=this.length;n<r;n++)if(this[n]===e){t=this.levels_.splice(n,1)[0],this.selectedIndex_===n?this.selectedIndex_=-1:this.selectedIndex_>n&&this.selectedIndex_--;break}return t&&this.trigger({qualityLevel:e,type:"removequalitylevel"}),t},s.getQualityLevelById=function(e){for(var t=0,n=this.length;t<n;t++){var r=this[t];if(r.id===e)return r}return null},s.dispose=function(){this.selectedIndex_=-1,this.levels_.length=0},o}(e.EventTarget);for(var i in r.prototype.allowedEvents_={change:"change",addqualitylevel:"addqualitylevel",removequalitylevel:"removequalitylevel"},r.prototype.allowedEvents_)r.prototype["on"+i]=null;var l=function(t){return n=this,e.mergeOptions({},t),i=n.qualityLevels,l=new r,n.on("dispose",function e(){l.dispose(),n.qualityLevels=i,n.off("dispose",e)}),n.qualityLevels=function(){return l},n.qualityLevels.VERSION="2.0.9",l;var n,i,l};return(e.registerPlugin||e.plugin)("qualityLevels",l),l.VERSION="2.0.9",l});

/**
 * videojs-http-source-selector
 * @version 1.1.5
 * @copyright 2019 Justin Fujita <Justin@pivotshare.com>
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("video.js")):"function"==typeof define&&define.amd?define(["video.js"],t):(e=e||self)["videojs-http-source-selector"]=t(e.videojs)}(this,function(i){"use strict";function o(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}var a=function(n){function e(e,t){var o;return o=n.call(this,e,t)||this,t.selectable=!0,o}o(e,n);var t=e.prototype;return t.handleClick=function(){var e=this.options_;console.log("Changing quality to:",e.label),this.selected_=!0,this.selected(!0);for(var t=this.player().qualityLevels(),o=0;o<t.length;o++)e.index==t.length?t[o].enabled=!0:e.index==o?t[o].enabled=!0:t[o].enabled=!1},t.update=function(){var e=this.player().qualityLevels().selectedIndex;this.selected(this.options_.index==e),this.selected_=this.options_.index===e},e}((i=i&&i.hasOwnProperty("default")?i.default:i).getComponent("MenuItem")),r=i.getComponent("MenuButton"),n=function(l){function e(e,t){var o;o=l.call(this,e,t)||this,r.apply(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o),arguments);var n=o.player().qualityLevels();if(t&&t.default)if("low"==t.default)for(var i=0;i<n.length;i++)n[i].enabled=0==i;else if(t.default="high")for(i=0;i<n.length;i++)n[i].enabled=i==n.length-1;return o}o(e,l);var t=e.prototype;return t.createEl=function(){return i.dom.createEl("div",{className:"vjs-http-source-selector vjs-menu-button vjs-menu-button-popup vjs-control vjs-button"})},t.buildCSSClass=function(){return r.prototype.buildCSSClass.call(this)+" vjs-icon-cog"},t.update=function(){return r.prototype.update.call(this)},t.createItems=function(){for(var e=[],t=this.player().qualityLevels(),o=[],n=0;n<t.length;n++){var i=t.length-(n+1),l=i===t.selectedIndex,r=""+i,s=i;t[i].height?(r=t[i].height+"p",s=parseInt(t[i].height,10)):t[i].bitrate&&(r=Math.floor(t[i].bitrate/1e3)+" kbps",s=parseInt(t[i].bitrate,10)),0<=o.indexOf(r)||(o.push(r),e.push(new a(this.player_,{label:r,index:i,selected:l,sortVal:s})))}return 1<t.length&&e.push(new a(this.player_,{label:"Auto",index:t.length,selected:!1,sortVal:99999})),e.sort(function(e,t){return e.options_.sortVal<t.options_.sortVal?1:e.options_.sortVal>t.options_.sortVal?-1:0}),e},e}(r),l={},e=i.registerPlugin||i.plugin,t=function(e){var t=this;this.ready(function(){!function(n,e){if(n.addClass("vjs-http-source-selector"),console.log("videojs-http-source-selector initialized!"),console.log("player.techName_:"+n.techName_),"Html5"!=n.techName_)return;n.on(["loadedmetadata"],function(e){if(n.qualityLevels(),i.log("loadmetadata event"),"undefined"==n.videojs_http_source_selector_initialized||1==n.videojs_http_source_selector_initialized)console.log("player.videojs_http_source_selector_initialized == true");else{console.log("player.videojs_http_source_selector_initialized == false"),n.videojs_http_source_selector_initialized=!0;var t=n.controlBar,o=t.getChild("fullscreenToggle").el();t.el().insertBefore(t.addChild("SourceMenuButton").el(),o)}})}(t,i.mergeOptions(l,e))}),i.registerComponent("SourceMenuButton",n),i.registerComponent("SourceMenuItem",a)};return e("httpSourceSelector",t),t.VERSION="1.1.5",t});

/*! videojs-resolution-switcher - 2015-7-26. Updated by (& ©) bads.tm 2019 06 19
 * Copyright (c) 2016 Kasper Moskwiak
 * Modified by Pierre Kraft and Derk-Jan Hartman
 * Licensed under the Apache-2.0 license. */

(function() {
  /* jshint eqnull: true*/
  /* global require */
  'use strict';
  var videojs = null;
  if(typeof window.videojs === 'undefined' && typeof require === 'function') {
    videojs = require('video.js');
  } else {
    videojs = window.videojs;
  }

  (function(window, videojs) {
    var videoJsResolutionSwitcher,
      defaults = {
        ui: true
      };

    /*
     * Resolution menu item
     */
    var MenuItem = videojs.getComponent('MenuItem');
    var ResolutionMenuItem = videojs.extend(MenuItem, {
      constructor: function(player, options){
        options.selectable = true;
        // Sets this.player_, this.options_ and initializes the component
        MenuItem.call(this, player, options);
        this.src = options.src;

        player.on('resolutionchange', videojs.bind(this, this.update));
      }
    } );
    ResolutionMenuItem.prototype.handleClick = function(event){
      MenuItem.prototype.handleClick.call(this,event);
      this.player_.currentResolution(this.options_.label);
    };
    ResolutionMenuItem.prototype.update = function(){
      var selection = this.player_.currentResolution();
      this.selected(this.options_.label === selection.label);
    };
    MenuItem.registerComponent('ResolutionMenuItem', ResolutionMenuItem);

    /*
     * Resolution menu button
     */
    var MenuButton = videojs.getComponent('MenuButton');
    var ResolutionMenuButton = videojs.extend(MenuButton, {
      constructor: function(player, options){
        this.label = document.createElement('span');
        options.label = 'Quality';
        // Sets this.player_, this.options_ and initializes the component
        MenuButton.call(this, player, options);
        this.el().setAttribute('aria-label','Quality');
        this.controlText('Quality');

        if(options.dynamicLabel){
          videojs.addClass(this.label, 'vjs-resolution-button-label');
          this.el().appendChild(this.label);
        }/*else{
          var staticLabel = document.createElement('span');
          videojs.addClass(staticLabel, 'vjs-menu-icon');
          this.el().appendChild(staticLabel);
        }*/
        player.on('updateSources', videojs.bind( this, this.update ) );
      }
    } );
    ResolutionMenuButton.prototype.createItems = function(){
      var menuItems = [];
      var labels = (this.sources && this.sources.label) || {};

      // FIXME order is not guaranteed here.
      for (var key in labels) {
        if (labels.hasOwnProperty(key)) {
          menuItems.push(new ResolutionMenuItem(
            this.player_,
            {
              label: key,
              src: labels[key],
              selected: key === (this.currentSelection ? this.currentSelection.label : false)
            })
          );
        }
      }
      return menuItems;
    };
    ResolutionMenuButton.prototype.update = function(){
      this.sources = this.player_.getGroupedSrc();
      this.currentSelection = this.player_.currentResolution();
      this.label.innerHTML = this.currentSelection ? this.currentSelection.label : '';
      return MenuButton.prototype.update.call(this);
    };
    ResolutionMenuButton.prototype.buildCSSClass = function(){
      return MenuButton.prototype.buildCSSClass.call( this ) + ' vjs-resolution-button';
    };
    MenuButton.registerComponent('ResolutionMenuButton', ResolutionMenuButton);

    /**
     * Initialize the plugin.
     * @param {object} [options] configuration for the plugin
     */
    videoJsResolutionSwitcher = function(options) {
      var settings = videojs.mergeOptions(defaults, options),
          player = this,
          groupedSrc = {},
          currentSources = {},
          currentResolutionState = {};

      /**
       * Updates player sources or returns current source URL
       * @param   {Array}  [src] array of sources [{src: '', type: '', label: '', res: ''}]
       * @returns {Object|String|Array} videojs player object if used as setter or current source URL, object, or array of sources
       */
      player.updateSrc = function(src){
        //Return current src if src is not given
        if(!src){ return player.src(); }

        // Only add those sources which we can (maybe) play
        src = src.filter( function(source) {
          try {
            return ( player.canPlayType( source.type ) !== '' );
          } catch (e) {
            // If a Tech doesn't yet have canPlayType just add it
            return true;
          }
        });
        //Sort sources
        this.currentSources = src.sort(compareResolutions);
        this.groupedSrc = bucketSources(this.currentSources);
        // Pick one by default
        var chosen = chooseSrc(this.groupedSrc, this.currentSources);
        this.currentResolutionState = {
          label: chosen.label,
          sources: chosen.sources
        };

        player.trigger('updateSources');
        player.setSourcesSanitized(chosen.sources, chosen.label);
        player.trigger('resolutionchange');
        return player;
      };

      /**
       * Returns current resolution or sets one when label is specified
       * @param {String}   [label]         label name
       * @param {Function} [customSourcePicker] custom function to choose source. Takes 2 arguments: sources, label. Must return player object.
       * @returns {Object}   current resolution object {label: '', sources: []} if used as getter or player object if used as setter
       */
      player.currentResolution = function(label, customSourcePicker){
        if(label == null) { return this.currentResolutionState; }

        // Lookup sources for label
        if(!this.groupedSrc || !this.groupedSrc.label || !this.groupedSrc.label[label]){
          return;
        }
        var sources = this.groupedSrc.label[label];
        // Remember player state
        var currentTime = player.currentTime();
        var isPaused = player.paused();

        // Hide bigPlayButton
        if(!isPaused && this.player_.options_.bigPlayButton){
          this.player_.bigPlayButton.hide();
        }

        // Change player source and wait for loadeddata event, then play video
        // loadedmetadata doesn't work right now for flash.
        // Probably because of https://github.com/videojs/video-js-swf/issues/124
        // If player preload is 'none' and then loadeddata not fired. So, we need timeupdate event for seek handle (timeupdate doesn't work properly with flash)
        var handleSeekEvent = 'loadeddata';
        if(this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash') {
          handleSeekEvent = 'timeupdate';
        }
        player
          .setSourcesSanitized(sources, label, customSourcePicker || settings.customSourcePicker)
          .one(handleSeekEvent, function() {
            player.currentTime(currentTime);
            player.handleTechSeeked_();
            if(!isPaused){
              // Start playing and hide loadingSpinner (flash issue ?)
              player.play().handleTechSeeked_();
            }
            player.trigger('resolutionchange');
          });
        return player;
      };

      /**
       * Returns grouped sources by label, resolution and type
       * @returns {Object} grouped sources: { label: { key: [] }, res: { key: [] }, type: { key: [] } }
       */
      player.getGroupedSrc = function(){
        return this.groupedSrc;
      };

      player.setSourcesSanitized = function(sources, label, customSourcePicker) {
        this.currentResolutionState = {
          label: label,
          sources: sources
        };
        if(typeof customSourcePicker === 'function'){
          return customSourcePicker(player, sources, label);
        }
        player.src(sources.map(function(src) {
          return {src: src.src, type: src.type, res: src.res};
        }));
        return player;
      };

      /**
       * Method used for sorting list of sources
       * @param   {Object} a - source object with res property
       * @param   {Object} b - source object with res property
       * @returns {Number} result of comparation
       */
      function compareResolutions(a, b){
        if(!a.res || !b.res){ return 0; }
        return (+b.res)-(+a.res);
      }

      /**
       * Group sources by label, resolution and type
       * @param   {Array}  src Array of sources
       * @returns {Object} grouped sources: { label: { key: [] }, res: { key: [] }, type: { key: [] } }
       */
      function bucketSources(src){
        var resolutions = {
          label: {},
          res: {},
          type: {}
        };
        src.map(function(source) {
          initResolutionKey(resolutions, 'label', source);
          initResolutionKey(resolutions, 'res', source);
          initResolutionKey(resolutions, 'type', source);

          appendSourceToKey(resolutions, 'label', source);
          appendSourceToKey(resolutions, 'res', source);
          appendSourceToKey(resolutions, 'type', source);
        });
        return resolutions;
      }

      function initResolutionKey(resolutions, key, source) {
        if(resolutions[key][source[key]] == null) {
          resolutions[key][source[key]] = [];
        }
      }

      function appendSourceToKey(resolutions, key, source) {
        resolutions[key][source[key]].push(source);
      }

      /**
       * Choose src if option.default is specified
       * @param   {Object} groupedSrc {res: { key: [] }}
       * @param   {Array}  src Array of sources sorted by resolution used to find high and low res
       * @returns {Object} {res: string, sources: []}
       */
      function chooseSrc(groupedSrc, src){
        var selectedRes = settings['default']; // use array access as default is a reserved keyword
        var selectedLabel = '';
        if (selectedRes === 'high') {
          selectedRes = src[0].res;
          selectedLabel = src[0].label;
        } else if (selectedRes === 'low' || selectedRes == null || !groupedSrc.res[selectedRes]) {
          // Select low-res if default is low or not set
          selectedRes = src[src.length - 1].res;
          selectedLabel = src[src.length -1].label;
        } else if (groupedSrc.res[selectedRes]) {
          selectedLabel = groupedSrc.res[selectedRes][0].label;
        }

        return {res: selectedRes, label: selectedLabel, sources: groupedSrc.res[selectedRes]};
      }

      function initResolutionForYt(player){
        // Map youtube qualities names
        var _yts = {
          highres: {res: 1080, label: '1080', yt: 'highres'},
          hd1080: {res: 1080, label: '1080', yt: 'hd1080'},
          hd720: {res: 720, label: '720', yt: 'hd720'},
          large: {res: 480, label: '480', yt: 'large'},
          medium: {res: 360, label: '360', yt: 'medium'},
          small: {res: 240, label: '240', yt: 'small'},
          tiny: {res: 144, label: '144', yt: 'tiny'},
          auto: {res: 0, label: 'auto', yt: 'auto'}
        };
        // Overwrite default sourcePicker function
        var _customSourcePicker = function(_player, _sources, _label){
          // Note that setPlayebackQuality is a suggestion. YT does not always obey it.
          player.tech_.ytPlayer.setPlaybackQuality(_sources[0]._yt);
          player.trigger('updateSources');
          return player;
        };
        settings.customSourcePicker = _customSourcePicker;

        // Init resolution
        player.tech_.ytPlayer.setPlaybackQuality('auto');

        // This is triggered when the resolution actually changes
        player.tech_.ytPlayer.addEventListener('onPlaybackQualityChange', function(event){
          for(var res in _yts) {
            if(res.yt === event.data) {
              player.currentResolution(res.label, _customSourcePicker);
              return;
            }
          }
        });

        // We must wait for play event
        player.one('play', function(){
          var qualities = player.tech_.ytPlayer.getAvailableQualityLevels();
          var _sources = [];

          qualities.map(function(q){
            _sources.push({
              src: player.src().src,
              type: player.src().type,
              label: _yts[q].label,
              res: _yts[q].res,
              _yt: _yts[q].yt
            });
          });

          player.groupedSrc = bucketSources(_sources);
          var chosen = {label: 'auto', res: 0, sources: player.groupedSrc.label.auto};

          this.currentResolutionState = {
            label: chosen.label,
            sources: chosen.sources
          };

          player.trigger('updateSources');
          player.setSourcesSanitized(chosen.sources, chosen.label, _customSourcePicker);
        });
      }

      player.ready(function(){
        if( settings.ui ) {
          var menuButton = new ResolutionMenuButton(player, settings);
          player.controlBar.resolutionSwitcher = player.controlBar.el_.insertBefore(menuButton.el_, player.controlBar.getChild('fullscreenToggle').el_);
          player.controlBar.resolutionSwitcher.dispose = function(){
            this.parentNode.removeChild(this);
          };
        }
        if(player.options_.sources.length > 1){
          // tech: Html5 and Flash
          // Create resolution switcher for videos form <source> tag inside <video>
          player.updateSrc(player.options_.sources);
        }

        if(player.techName_ === 'Youtube'){
         // tech: YouTube
         initResolutionForYt(player);
        }
      });

    };

    // register the plugin
    videojs.plugin('videoJsResolutionSwitcher', videoJsResolutionSwitcher);
  })(window, videojs);
})();
