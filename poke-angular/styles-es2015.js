(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n\r\n.leaflet-tile::-moz-selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-drag {\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\ttouch-action: none;\r\n}\r\n\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n\r\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n\r\n.leaflet-overlay-pane { z-index: 400; }\r\n\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n\r\n.leaflet-marker-pane  { z-index: 600; }\r\n\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\ttransition: opacity 0.2s linear;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n\r\n.leaflet-zoom-animated {\r\n\ttransform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\ttransition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\ttransition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:         grab;\r\n\t}\r\n\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n/* general typography */\r\n\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers.png');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers-2x.png');\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url('marker-icon.png');\r\n\t}\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\ttransform: rotate(45deg);\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n/* Tooltip */\r\n\r\n/* Base styles for the element that has a tooltip */\r\n\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\r\n\r\n@font-face {\n  font-family: pixelade;\n  src: url('pixelade.TTF');\n}\r\n\r\nhtml {\n  font-size: 62.5%;\n  min-height: 100%;\n  font-family: \"pixelade\";\n}\r\n\r\nbody {\n  box-sizing: border-box;\n  width: auto;\n}\r\n\r\n.pokedex {\n  margin: 0 auto;\n  padding: 3rem;\n  padding-bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #ea4747;\n  box-shadow: -0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.2);\n  width: 70vw;\n  height: 70vh;\n}\r\n\r\n.pokedex__display {\n  box-shadow: -0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.2);\n  display: flex;\n  width: 100%;\n  height: auto;\n  border: 1.3rem solid #e7f0f2;\n  scroll-padding: 0.2rem 0 0.2rem 0;\n  background-color: #81c8d8;\n}\r\n\r\n.pokedex__display__content {\n  width: 100%;\n  height: auto;\n}\r\n\r\n@media only screen and (max-width: 800px) {\n  .pokedex {\n    flex-direction: column;\n    width: 100%;\n    padding-left: 0;\n    padding: 3rem;\n    height: calc(100vh - 80px);\n  }\n}\r\n\r\n@media only screen and (max-width: 320px) {\n  .pokedex {\n    width: 100%;\n    padding: 1rem;\n  }\n}\r\n\r\n.btn {\n  background-color: #e7f0f2;\n  text-decoration: none;\n  color: #000000;\n  padding: 1rem 3rem;\n  font-size: 2.5rem;\n  margin: 1rem;\n  box-shadow: -0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.2);\n}\r\n\r\n@media only screen and (max-width: 1030px) {\n  .btn {\n    padding: 0.5rem 2rem;\n    font-size: 1.8rem;\n    margin: 0.5rem;\n    line-height: 3;\n  }\n}\r\n\r\n@media only screen and (max-width: 768px) {\n  .btn {\n    padding: 1rem 3rem;\n    margin: 1rem;\n    font-size: 2rem;\n    line-height: 1;\n  }\n}\r\n\r\n.btn:hover {\n  cursor: pointer;\n}\r\n\r\n.arrow {\n  font-size: 10rem;\n  margin: 1rem;\n  color: #503737;\n  text-shadow: -0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.2);\n}\r\n\r\n.arrow:hover {\n  cursor: pointer;\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\n  width: 20px;\n  margin: 1rem;\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\n  background: #e7f0f2;\n  border: 2px solid #81c8d8;\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\n  background: #358496;\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9sZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MiLCJzcmMvQzpcXFVzZXJzXFxqZG9taW5ndWV6ZVxcRGVza3RvcFxcRm9ybWFjacOzblxcd29ya3NwYWNlXFxQb2tlQW5ndWxhci9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcamRvbWluZ3VlemVcXERlc2t0b3BcXEZvcm1hY2nDs25cXHdvcmtzcGFjZVxcUG9rZUFuZ3VsYXIvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7O0FBRXBCOzs7Ozs7Ozs7O0NBVUMsa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxNQUFNO0NBQ047O0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7OztDQUdDLHlCQUF5QjtJQUN0QixzQkFBc0I7U0FDakIscUJBQWlCO0tBQWpCLGlCQUFpQjtHQUN2Qix1QkFBdUI7Q0FDekI7O0FBQ0Qsa0RBQWtEOztBQUNsRDtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFGQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFDQSxtRkFBbUY7O0FBQ25GO0NBQ0MsMENBQTBDO0NBQzFDOztBQUNELHFFQUFxRTs7QUFDckU7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLDZCQUE2QjtDQUM3Qjs7QUFDRDs7Q0FFQyxjQUFjO0NBQ2Q7O0FBQ0QsZ0dBQWdHOztBQUNoRyxxRkFBcUY7O0FBQ3JGOzs7Ozs7Q0FNQywwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCOztBQUVEO0NBRUMseUJBQXlCO0NBQ3pCOztBQUNEO0NBRUMscURBQXFEO0NBQ3JELGtCQUFrQjtDQUNsQix3QkFBd0I7QUFDekI7O0FBQ0E7Q0FFQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyx3Q0FBd0M7QUFDekM7O0FBQ0E7Q0FDQyxvREFBb0Q7QUFDckQ7O0FBQ0E7Q0FDQyx1QkFBZTtTQUFmLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEI7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Y2VzQ29udGVudCI6WyIvKiByZXF1aXJlZCBzdHlsZXMgKi9cclxuXHJcbi5sZWFmbGV0LXBhbmUsXHJcbi5sZWFmbGV0LXRpbGUsXHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93LFxyXG4ubGVhZmxldC10aWxlLWNvbnRhaW5lcixcclxuLmxlYWZsZXQtcGFuZSA+IHN2ZyxcclxuLmxlYWZsZXQtcGFuZSA+IGNhbnZhcyxcclxuLmxlYWZsZXQtem9vbS1ib3gsXHJcbi5sZWFmbGV0LWltYWdlLWxheWVyLFxyXG4ubGVhZmxldC1sYXllciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuLmxlYWZsZXQtdGlsZSxcclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3cge1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cdCAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0fVxyXG4vKiBQcmV2ZW50cyBJRTExIGZyb20gaGlnaGxpZ2h0aW5nIHRpbGVzIGluIGJsdWUgKi9cclxuLmxlYWZsZXQtdGlsZTo6c2VsZWN0aW9uIHtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4vKiBTYWZhcmkgcmVuZGVycyBub24tcmV0aW5hIHRpbGUgb24gcmV0aW5hIGJldHRlciB3aXRoIHRoaXMsIGJ1dCBDaHJvbWUgaXMgd29yc2UgKi9cclxuLmxlYWZsZXQtc2FmYXJpIC5sZWFmbGV0LXRpbGUge1xyXG5cdGltYWdlLXJlbmRlcmluZzogLXdlYmtpdC1vcHRpbWl6ZS1jb250cmFzdDtcclxuXHR9XHJcbi8qIGhhY2sgdGhhdCBwcmV2ZW50cyBodyBsYXllcnMgXCJzdHJldGNoaW5nXCIgd2hlbiBsb2FkaW5nIG5ldyB0aWxlcyAqL1xyXG4ubGVhZmxldC1zYWZhcmkgLmxlYWZsZXQtdGlsZS1jb250YWluZXIge1xyXG5cdHdpZHRoOiAxNjAwcHg7XHJcblx0aGVpZ2h0OiAxNjAwcHg7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0fVxyXG4ubGVhZmxldC1tYXJrZXItaWNvbixcclxuLmxlYWZsZXQtbWFya2VyLXNoYWRvdyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4vKiAubGVhZmxldC1jb250YWluZXIgc3ZnOiByZXNldCBzdmcgbWF4LXdpZHRoIGRlY2xlcmF0aW9uIHNoaXBwZWQgaW4gSm9vbWxhISAoam9vbWxhLm9yZykgMy54ICovXHJcbi8qIC5sZWFmbGV0LWNvbnRhaW5lciBpbWc6IG1hcCBpcyBicm9rZW4gaW4gRkYgaWYgeW91IGhhdmUgbWF4LXdpZHRoOiAxMDAlIG9uIHRpbGVzICovXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1vdmVybGF5LXBhbmUgc3ZnLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtbWFya2VyLXBhbmUgaW1nLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtc2hhZG93LXBhbmUgaW1nLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtdGlsZS1wYW5lIGltZyxcclxuLmxlYWZsZXQtY29udGFpbmVyIGltZy5sZWFmbGV0LWltYWdlLWxheWVyLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtdGlsZSB7XHJcblx0bWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcblx0bWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LWNvbnRhaW5lci5sZWFmbGV0LXRvdWNoLXpvb20ge1xyXG5cdC1tcy10b3VjaC1hY3Rpb246IHBhbi14IHBhbi15O1xyXG5cdHRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIubGVhZmxldC10b3VjaC1kcmFnIHtcclxuXHQtbXMtdG91Y2gtYWN0aW9uOiBwaW5jaC16b29tO1xyXG5cdC8qIEZhbGxiYWNrIGZvciBGRiB3aGljaCBkb2Vzbid0IHN1cHBvcnQgcGluY2gtem9vbSAqL1xyXG5cdHRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHR0b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XHJcbn1cclxuLmxlYWZsZXQtY29udGFpbmVyLmxlYWZsZXQtdG91Y2gtZHJhZy5sZWFmbGV0LXRvdWNoLXpvb20ge1xyXG5cdC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XHJcblx0dG91Y2gtYWN0aW9uOiBub25lO1xyXG59XHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubGVhZmxldC1jb250YWluZXIgYSB7XHJcblx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDUxLCAxODEsIDIyOSwgMC40KTtcclxufVxyXG4ubGVhZmxldC10aWxlIHtcclxuXHRmaWx0ZXI6IGluaGVyaXQ7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuLmxlYWZsZXQtdGlsZS1sb2FkZWQge1xyXG5cdHZpc2liaWxpdHk6IGluaGVyaXQ7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWJveCB7XHJcblx0d2lkdGg6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ei1pbmRleDogODAwO1xyXG5cdH1cclxuLyogd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODg4MzE5ICovXHJcbi5sZWFmbGV0LW92ZXJsYXktcGFuZSBzdmcge1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtcGFuZSAgICAgICAgIHsgei1pbmRleDogNDAwOyB9XHJcblxyXG4ubGVhZmxldC10aWxlLXBhbmUgICAgeyB6LWluZGV4OiAyMDA7IH1cclxuLmxlYWZsZXQtb3ZlcmxheS1wYW5lIHsgei1pbmRleDogNDAwOyB9XHJcbi5sZWFmbGV0LXNoYWRvdy1wYW5lICB7IHotaW5kZXg6IDUwMDsgfVxyXG4ubGVhZmxldC1tYXJrZXItcGFuZSAgeyB6LWluZGV4OiA2MDA7IH1cclxuLmxlYWZsZXQtdG9vbHRpcC1wYW5lICAgeyB6LWluZGV4OiA2NTA7IH1cclxuLmxlYWZsZXQtcG9wdXAtcGFuZSAgIHsgei1pbmRleDogNzAwOyB9XHJcblxyXG4ubGVhZmxldC1tYXAtcGFuZSBjYW52YXMgeyB6LWluZGV4OiAxMDA7IH1cclxuLmxlYWZsZXQtbWFwLXBhbmUgc3ZnICAgIHsgei1pbmRleDogMjAwOyB9XHJcblxyXG4ubGVhZmxldC12bWwtc2hhcGUge1xyXG5cdHdpZHRoOiAxcHg7XHJcblx0aGVpZ2h0OiAxcHg7XHJcblx0fVxyXG4ubHZtbCB7XHJcblx0YmVoYXZpb3I6IHVybCgjZGVmYXVsdCNWTUwpO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0fVxyXG5cclxuXHJcbi8qIGNvbnRyb2wgcG9zaXRpb25pbmcgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiA4MDA7XHJcblx0cG9pbnRlci1ldmVudHM6IHZpc2libGVQYWludGVkOyAvKiBJRSA5LTEwIGRvZXNuJ3QgaGF2ZSBhdXRvICovXHJcblx0cG9pbnRlci1ldmVudHM6IGF1dG87XHJcblx0fVxyXG4ubGVhZmxldC10b3AsXHJcbi5sZWFmbGV0LWJvdHRvbSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC10b3Age1xyXG5cdHRvcDogMDtcclxuXHR9XHJcbi5sZWFmbGV0LXJpZ2h0IHtcclxuXHRyaWdodDogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWJvdHRvbSB7XHJcblx0Ym90dG9tOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtbGVmdCB7XHJcblx0bGVmdDogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGNsZWFyOiBib3RoO1xyXG5cdH1cclxuLmxlYWZsZXQtcmlnaHQgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdH1cclxuLmxlYWZsZXQtdG9wIC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0fVxyXG4ubGVhZmxldC1ib3R0b20gLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LWxlZnQgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0fVxyXG4ubGVhZmxldC1yaWdodCAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cclxuXHJcbi8qIHpvb20gYW5kIGZhZGUgYW5pbWF0aW9ucyAqL1xyXG5cclxuLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LXRpbGUge1xyXG5cdHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xyXG5cdH1cclxuLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LXBvcHVwIHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuXHQgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG5cdH1cclxuLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LW1hcC1wYW5lIC5sZWFmbGV0LXBvcHVwIHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltYXRlZCB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0ICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0ICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWFuaW0gLmxlYWZsZXQtem9vbS1hbmltYXRlZCB7XHJcblx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246ICAgIC1tb3otdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHQgICAgICAgIHRyYW5zaXRpb246ICAgICAgICAgdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC10aWxlLFxyXG4ubGVhZmxldC1wYW4tYW5pbSAubGVhZmxldC10aWxlIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcblx0ICAgLW1vei10cmFuc2l0aW9uOiBub25lO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC16b29tLWFuaW0gLmxlYWZsZXQtem9vbS1oaWRlIHtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHJcbi8qIGN1cnNvcnMgKi9cclxuXHJcbi5sZWFmbGV0LWludGVyYWN0aXZlIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG4ubGVhZmxldC1ncmFiIHtcclxuXHRjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuXHRjdXJzb3I6ICAgIC1tb3otZ3JhYjtcclxuXHRjdXJzb3I6ICAgICAgICAgZ3JhYjtcclxuXHR9XHJcbi5sZWFmbGV0LWNyb3NzaGFpcixcclxuLmxlYWZsZXQtY3Jvc3NoYWlyIC5sZWFmbGV0LWludGVyYWN0aXZlIHtcclxuXHRjdXJzb3I6IGNyb3NzaGFpcjtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLXBhbmUsXHJcbi5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdGN1cnNvcjogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LWRyYWdnaW5nIC5sZWFmbGV0LWdyYWIsXHJcbi5sZWFmbGV0LWRyYWdnaW5nIC5sZWFmbGV0LWdyYWIgLmxlYWZsZXQtaW50ZXJhY3RpdmUsXHJcbi5sZWFmbGV0LWRyYWdnaW5nIC5sZWFmbGV0LW1hcmtlci1kcmFnZ2FibGUge1xyXG5cdGN1cnNvcjogbW92ZTtcclxuXHRjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XHJcblx0Y3Vyc29yOiAgICAtbW96LWdyYWJiaW5nO1xyXG5cdGN1cnNvcjogICAgICAgICBncmFiYmluZztcclxuXHR9XHJcblxyXG4vKiBtYXJrZXIgJiBvdmVybGF5cyBpbnRlcmFjdGl2aXR5ICovXHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93LFxyXG4ubGVhZmxldC1pbWFnZS1sYXllcixcclxuLmxlYWZsZXQtcGFuZSA+IHN2ZyBwYXRoLFxyXG4ubGVhZmxldC10aWxlLWNvbnRhaW5lciB7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtbWFya2VyLWljb24ubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtaW1hZ2UtbGF5ZXIubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtcGFuZSA+IHN2ZyBwYXRoLmxlYWZsZXQtaW50ZXJhY3RpdmUsXHJcbnN2Zy5sZWFmbGV0LWltYWdlLWxheWVyLmxlYWZsZXQtaW50ZXJhY3RpdmUgcGF0aCB7XHJcblx0cG9pbnRlci1ldmVudHM6IHZpc2libGVQYWludGVkOyAvKiBJRSA5LTEwIGRvZXNuJ3QgaGF2ZSBhdXRvICovXHJcblx0cG9pbnRlci1ldmVudHM6IGF1dG87XHJcblx0fVxyXG5cclxuLyogdmlzdWFsIHR3ZWFrcyAqL1xyXG5cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjZGRkO1xyXG5cdG91dGxpbmU6IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgYSB7XHJcblx0Y29sb3I6ICMwMDc4QTg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgYS5sZWFmbGV0LWFjdGl2ZSB7XHJcblx0b3V0bGluZTogMnB4IHNvbGlkIG9yYW5nZTtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYm94IHtcclxuXHRib3JkZXI6IDJweCBkb3R0ZWQgIzM4ZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcblx0fVxyXG5cclxuXHJcbi8qIGdlbmVyYWwgdHlwb2dyYXBoeSAqL1xyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdGZvbnQ6IDEycHgvMS41IFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHR9XHJcblxyXG5cclxuLyogZ2VuZXJhbCB0b29sYmFyIHN0eWxlcyAqL1xyXG5cclxuLmxlYWZsZXQtYmFyIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwwLjY1KTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYSxcclxuLmxlYWZsZXQtYmFyIGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblx0d2lkdGg6IDI2cHg7XHJcblx0aGVpZ2h0OiAyNnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGEsXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYTpmaXJzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYTpsYXN0LWNoaWxkIHtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGEubGVhZmxldC1kaXNhYmxlZCB7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGEge1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciBhOmZpcnN0LWNoaWxkIHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciBhOmxhc3QtY2hpbGQge1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xyXG5cdH1cclxuXHJcbi8qIHpvb20gY29udHJvbCAqL1xyXG5cclxuLmxlYWZsZXQtY29udHJvbC16b29tLWluLFxyXG4ubGVhZmxldC1jb250cm9sLXpvb20tb3V0IHtcclxuXHRmb250OiBib2xkIDE4cHggJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBtb25vc3BhY2U7XHJcblx0dGV4dC1pbmRlbnQ6IDFweDtcclxuXHR9XHJcblxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLXpvb20taW4sIC5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtem9vbS1vdXQgIHtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0fVxyXG5cclxuXHJcbi8qIGxheWVycyBjb250cm9sICovXHJcblxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycyB7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwwLDAsMC40KTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9sYXllcnMucG5nKTtcclxuXHR3aWR0aDogMzZweDtcclxuXHRoZWlnaHQ6IDM2cHg7XHJcblx0fVxyXG4ubGVhZmxldC1yZXRpbmEgLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2xheWVycy0yeC5wbmcpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMjZweCAyNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHR3aWR0aDogNDRweDtcclxuXHRoZWlnaHQ6IDQ0cHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycyAubGVhZmxldC1jb250cm9sLWxheWVycy1saXN0LFxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1leHBhbmRlZCAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1leHBhbmRlZCAubGVhZmxldC1jb250cm9sLWxheWVycy1saXN0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1leHBhbmRlZCB7XHJcblx0cGFkZGluZzogNnB4IDEwcHggNnB4IDZweDtcclxuXHRjb2xvcjogIzMzMztcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtc2Nyb2xsYmFyIHtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXNlbGVjdG9yIHtcclxuXHRtYXJnaW4tdG9wOiAycHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDogMXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMgbGFiZWwge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtc2VwYXJhdG9yIHtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcblx0bWFyZ2luOiA1cHggLTEwcHggNXB4IC02cHg7XHJcblx0fVxyXG5cclxuLyogRGVmYXVsdCBpY29uIFVSTHMgKi9cclxuLmxlYWZsZXQtZGVmYXVsdC1pY29uLXBhdGgge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvbWFya2VyLWljb24ucG5nKTtcclxuXHR9XHJcblxyXG5cclxuLyogYXR0cmlidXRpb24gYW5kIHNjYWxlIGNvbnRyb2xzICovXHJcblxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbiB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcblx0bWFyZ2luOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbixcclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lIHtcclxuXHRwYWRkaW5nOiAwIDVweDtcclxuXHRjb2xvcjogIzMzMztcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24gYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbiBhOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtY29udHJvbC1zY2FsZSB7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtbGVmdCAubGVhZmxldC1jb250cm9sLXNjYWxlIHtcclxuXHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtYm90dG9tIC5sZWFmbGV0LWNvbnRyb2wtc2NhbGUge1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZSB7XHJcblx0Ym9yZGVyOiAycHggc29saWQgIzc3NztcclxuXHRib3JkZXItdG9wOiBub25lO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjE7XHJcblx0cGFkZGluZzogMnB4IDVweCAxcHg7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkICM3Nzc7XHJcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHRtYXJnaW4tdG9wOiAtMnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzc3O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24sXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLFxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIge1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWxheWVycyxcclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcblx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuXHR9XHJcblxyXG5cclxuLyogcG9wdXAgKi9cclxuXHJcbi5sZWFmbGV0LXBvcHVwIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIge1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHtcclxuXHRtYXJnaW46IDEzcHggMTlweDtcclxuXHRsaW5lLWhlaWdodDogMS40O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtY29udGVudCBwIHtcclxuXHRtYXJnaW46IDE4cHggMDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLXRpcC1jb250YWluZXIge1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHR3aWR0aDogMTdweDtcclxuXHRoZWlnaHQ6IDE3cHg7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cclxuXHRtYXJnaW46IC0xMHB4IGF1dG8gMDtcclxuXHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0ICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0ICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0ICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIsXHJcbi5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Ym94LXNoYWRvdzogMCAzcHggMTRweCByZ2JhKDAsMCwwLDAuNCk7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgYS5sZWFmbGV0LXBvcHVwLWNsb3NlLWJ1dHRvbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHRwYWRkaW5nOiA0cHggNHB4IDAgMDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxOHB4O1xyXG5cdGhlaWdodDogMTRweDtcclxuXHRmb250OiAxNnB4LzE0cHggVGFob21hLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5cdGNvbG9yOiAjYzNjM2MzO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtcG9wdXAtY2xvc2UtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzk5OTtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLXNjcm9sbGVkIHtcclxuXHRvdmVyZmxvdzogYXV0bztcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIge1xyXG5cdHpvb206IDE7XHJcblx0fVxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdHdpZHRoOiAyNHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cclxuXHQtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5NYXRyaXgoTTExPTAuNzA3MTA2NzgsIE0xMj0wLjcwNzEwNjc4LCBNMjE9LTAuNzA3MTA2NzgsIE0yMj0wLjcwNzEwNjc4KVwiO1xyXG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChNMTE9MC43MDcxMDY3OCwgTTEyPTAuNzA3MTA2NzgsIE0yMT0tMC43MDcxMDY3OCwgTTIyPTAuNzA3MTA2NzgpO1xyXG5cdH1cclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtdGlwLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luLXRvcDogLTFweDtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1jb250cm9sLXpvb20sXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLFxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIsXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuXHR9XHJcblxyXG5cclxuLyogZGl2IGljb24gKi9cclxuXHJcbi5sZWFmbGV0LWRpdi1pY29uIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcblx0fVxyXG5cclxuXHJcbi8qIFRvb2x0aXAgKi9cclxuLyogQmFzZSBzdHlsZXMgZm9yIHRoZSBlbGVtZW50IHRoYXQgaGFzIGEgdG9vbHRpcCAqL1xyXG4ubGVhZmxldC10b29sdGlwIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cGFkZGluZzogNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Y29sb3I6ICMyMjI7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLmxlYWZsZXQtY2xpY2thYmxlIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0cG9pbnRlci1ldmVudHM6IGF1dG87XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLXRvcDpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tOmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0OmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdH1cclxuXHJcbi8qIERpcmVjdGlvbnMgKi9cclxuXHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tIHtcclxuXHRtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC10b3Age1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b206YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLXRvcDpiZWZvcmUge1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW4tbGVmdDogLTZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSB7XHJcblx0Ym90dG9tOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IC0xMnB4O1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbTpiZWZvcmUge1xyXG5cdHRvcDogMDtcclxuXHRtYXJnaW4tdG9wOiAtMTJweDtcclxuXHRtYXJnaW4tbGVmdDogLTZweDtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0IHtcclxuXHRtYXJnaW4tbGVmdDogLTZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0IHtcclxuXHRtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtbGVmdDpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQ6YmVmb3JlIHtcclxuXHR0b3A6IDUwJTtcclxuXHRtYXJnaW4tdG9wOiAtNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0OmJlZm9yZSB7XHJcblx0cmlnaHQ6IDA7XHJcblx0bWFyZ2luLXJpZ2h0OiAtMTJweDtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQ6YmVmb3JlIHtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuXHRib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG4iLCJAaW1wb3J0ICd+bGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcclxuQGltcG9ydCAndmFyaWFibGVzLnNjc3MnO1xyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogcGl4ZWxhZGU7XHJcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9waXhlbGFkZS5UVEYpO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtc2l6ZTogNjIuNSU7IC8vIFRoaXMgZGVmaW5lcyB3aGF0IDFyZW0gaXM6IDEgcmVtID0gMTBweDsgMTBweC8xNnB4ID0gNjIuNSVcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ3BpeGVsYWRlJztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5wb2tlZGV4IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICBib3gtc2hhZG93OiAtMC41cmVtIDAuNXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG5cclxuICAgICZfX2Rpc3BsYXkge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0wLjVyZW0gMC41cmVtIDByZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMS4zcmVtIHNvbGlkICRib3JkZXJDb2xvcjtcclxuICAgICAgICBzY3JvbGwtcGFkZGluZzogMC4ycmVtIDAgMC4ycmVtIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgJl9fY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dENvbG9yO1xyXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAtMC41cmVtIDAuNXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMzBweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgY29sb3I6ICRhcnJvd0NvbG9yO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0wLjVyZW0gMC41cmVtIDByZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTQ1JPTExCQVJcclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogJGJvcmRlckNvbG9yO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1iYWNrZ3JvdW5kQ29sb3I7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICR0ZXJ0aWFyeS1iYWNrZ3JvdW5kQ29sb3I7XHJcbn1cclxuIiwiQGltcG9ydCAnfmxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHBpeGVsYWRlO1xuICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9waXhlbGFkZS5UVEYpO1xufVxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcInBpeGVsYWRlXCI7XG59XG5cbmJvZHkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnBva2VkZXgge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTQ3NDc7XG4gIGJveC1zaGFkb3c6IC0wLjVyZW0gMC41cmVtIDByZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogNzB2dztcbiAgaGVpZ2h0OiA3MHZoO1xufVxuLnBva2VkZXhfX2Rpc3BsYXkge1xuICBib3gtc2hhZG93OiAtMC41cmVtIDAuNXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiAxLjNyZW0gc29saWQgI2U3ZjBmMjtcbiAgc2Nyb2xsLXBhZGRpbmc6IDAuMnJlbSAwIDAuMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFjOGQ4O1xufVxuLnBva2VkZXhfX2Rpc3BsYXlfX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAucG9rZWRleCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAucG9rZWRleCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjBmMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBib3gtc2hhZG93OiAtMC41cmVtIDAuNXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzMHB4KSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAzO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG4uYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3cge1xuICBmb250LXNpemU6IDEwcmVtO1xuICBtYXJnaW46IDFyZW07XG4gIGNvbG9yOiAjNTAzNzM3O1xuICB0ZXh0LXNoYWRvdzogLTAuNXJlbSAwLjVyZW0gMHJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uYXJyb3c6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZTdmMGYyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjODFjOGQ4O1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMzU4NDk2O1xufSIsIiRwcmltYXJ5LWJhY2tncm91bmRDb2xvcjogI2VhNDc0NztcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kQ29sb3I6ICM4MWM4ZDg7XHJcbiR0ZXJ0aWFyeS1iYWNrZ3JvdW5kQ29sb3I6ICMzNTg0OTY7XHJcbiRxdWF0ZXJuYXJ5LWJhY2tncm91bmRDb2xvcjogI2ZmZmZmZjtcclxuXHJcbiRwcmltYXJ5LXRleHRDb2xvcjogIzQ3ODM5MDtcclxuJHNlY29uZGFyeS10ZXh0Q29sb3I6ICMwMDAwMDA7XHJcbiR0ZXJ0aWFyeS10ZXh0Q29sb3I6ICNmZmZmZmY7XHJcblxyXG4kZ3JheS10ZXh0Q29sb3I6ICNiNWI1YjU7XHJcbiRib3JkZXJDb2xvcjogI2U3ZjBmMjtcclxuJGFycm93Q29sb3I6ICM1MDM3Mzc7XHJcbiRidXR0b24tYmFja2dyb3VuZENvbG9yOiAjZTdmMGYyO1xyXG4kdGl0bGUtc2hhZG93Q29sb3I6ICMyNTZiN2E7XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jdomingueze\Desktop\Formación\workspace\PokeAngular\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map