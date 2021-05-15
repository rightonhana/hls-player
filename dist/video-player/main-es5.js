(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkvideo_player"] = self["webpackChunkvideo_player"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var routes = [];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      1106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      3069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'video-player';
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/controls/controls.component */
      1656);
      /* harmony import */


      var _components_video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/video-wrapper/video-wrapper.component */
      9748);
      /* harmony import */


      var _components_control_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/control/control.component */
      5069);
      /* harmony import */


      var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/progress-bar/progress-bar.component */
      1569);
      /* harmony import */


      var _components_control_volume_control_volume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/control-volume/control-volume.component */
      840);
      /* harmony import */


      var _components_time_time_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/time/time.component */
      8539);
      /* harmony import */


      var _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/video-list/video-list.component */
      6732);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slider */
      4436);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      5396);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/list */
      7746);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_2__.ControlsComponent, _components_video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_3__.VideoWrapperComponent, _components_control_control_component__WEBPACK_IMPORTED_MODULE_4__.ControlComponent, _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent, _components_control_volume_control_volume_component__WEBPACK_IMPORTED_MODULE_6__.ControlVolumeComponent, _components_time_time_component__WEBPACK_IMPORTED_MODULE_7__.TimeComponent, _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_8__.VideoListComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    840:
    /*!***********************************************************************!*\
      !*** ./src/app/components/control-volume/control-volume.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ControlVolumeComponent": function ControlVolumeComponent() {
          return (
            /* binding */
            _ControlVolumeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_control_volume_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./control-volume.component.html */
      282);
      /* harmony import */


      var _control_volume_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./control-volume.component.scss */
      4735);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_services_volume_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/volume.service */
      3632);

      var _ControlVolumeComponent = /*#__PURE__*/function () {
        function ControlVolumeComponent(volumeService) {
          _classCallCheck(this, ControlVolumeComponent);

          this.volumeService = volumeService;
          this.volume = 1;
          this.maxVolumeValue = 1;
          this.iconVolumeUp = {
            name: 'Unmute',
            value: 'volume_up'
          };
          this.iconVolumeMute = {
            name: 'Mute',
            value: 'volume_off'
          };
          this.label = "Video progress";
          this.savedVolume = 1;
        }

        _createClass(ControlVolumeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.volumeService.volumeValue$.subscribe(function (volume) {
              return _this.volume = volume;
            });
          }
        }, {
          key: "onVolumeClick",
          value: function onVolumeClick() {
            this.savedVolume = this.volume === 0 ? this.savedVolume : this.volume;
            this.volumeService.setVolumeValue(this.volume > 0 ? 0 : this.savedVolume);
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            this.volumeService.setVolumeValue(event.value);
          }
        }, {
          key: "icon",
          get: function get() {
            return this.volume === 0 ? this.iconVolumeMute.value : this.iconVolumeUp.value;
          }
        }, {
          key: "title",
          get: function get() {
            return this.volume === 0 ? this.iconVolumeMute.name : this.iconVolumeUp.name;
          }
        }, {
          key: "ariaLabel",
          get: function get() {
            return this.label;
          }
        }]);

        return ControlVolumeComponent;
      }();

      _ControlVolumeComponent.ctorParameters = function () {
        return [{
          type: src_app_services_volume_service__WEBPACK_IMPORTED_MODULE_2__.VolumeService
        }];
      };

      _ControlVolumeComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-control-volume',
        template: _raw_loader_control_volume_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_control_volume_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ControlVolumeComponent);
      /***/
    },

    /***/
    5069:
    /*!*********************************************************!*\
      !*** ./src/app/components/control/control.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ControlComponent": function ControlComponent() {
          return (
            /* binding */
            _ControlComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_control_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./control.component.html */
      4658);
      /* harmony import */


      var _control_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./control.component.scss */
      8062);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ControlComponent = function ControlComponent() {
        _classCallCheck(this, ControlComponent);
      };

      _ControlComponent.propDecorators = {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _ControlComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-control',
        template: _raw_loader_control_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_control_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ControlComponent);
      /***/
    },

    /***/
    1656:
    /*!***********************************************************!*\
      !*** ./src/app/components/controls/controls.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ControlsComponent": function ControlsComponent() {
          return (
            /* binding */
            _ControlsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./controls.component.html */
      9394);
      /* harmony import */


      var _controls_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./controls.component.scss */
      8673);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/video.service */
      8472);
      /* harmony import */


      var src_app_services_video_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/video-time.service */
      1801);
      /* harmony import */


      var src_app_services_video_playlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/video-playlist.service */
      7112);

      var _ControlsComponent = /*#__PURE__*/function () {
        function ControlsComponent(videoService, videoTimeService, videoPlaylistService) {
          _classCallCheck(this, ControlsComponent);

          this.videoService = videoService;
          this.videoTimeService = videoTimeService;
          this.videoPlaylistService = videoPlaylistService;
          this.playing = false;
          this.currentProgress = 0;
          this.duration = 0;
          this.currentTime = 0;
          this.label = "Audio volume";
          this.videoEnded = false;
        }

        _createClass(ControlsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.videoService.playingState$.subscribe(function (playing) {
              return _this2.playing = playing;
            });
            this.videoTimeService.videoDuration$.subscribe(function (duration) {
              return _this2.duration = duration;
            });
            this.videoTimeService.videoProgress$.subscribe(function (progress) {
              return _this2.currentProgress = progress;
            });
            this.videoService.videoEnded$.subscribe(function (ended) {
              return _this2.videoEnded = ended;
            });
          }
        }, {
          key: "onPlayClick",
          value: function onPlayClick() {
            if (this.playing) {
              this.videoService.pause();
            } else {
              this.videoService.play();
            }
          }
        }, {
          key: "onNextClick",
          value: function onNextClick() {
            this.videoPlaylistService.playNextVideo();
            this.videoService.play();
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            this.videoTimeService.setIgnore(true);
            this.videoTimeService.setVideoProgress(event.value);
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.videoTimeService.setIgnore(false);
            this.videoTimeService.setCurrentTime(event.value);
          }
        }, {
          key: "onFullscreen",
          value: function onFullscreen() {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              var videoPlayerDiv = document.querySelector('.video-player');

              if (videoPlayerDiv.requestFullscreen) {
                videoPlayerDiv.requestFullscreen();
              }
            }
          }
        }, {
          key: "iconPlaying",
          get: function get() {
            return this.videoEnded ? {
              name: 'Replay',
              value: 'replay'
            } : this.playing ? {
              name: 'Pause',
              value: 'pause'
            } : {
              name: 'Play',
              value: 'play_arrow'
            };
          }
        }, {
          key: "ariaLabel",
          value: function ariaLabel() {
            return this.label;
          }
        }]);

        return ControlsComponent;
      }();

      _ControlsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__.VideoService
        }, {
          type: src_app_services_video_time_service__WEBPACK_IMPORTED_MODULE_3__.VideoTimeService
        }, {
          type: src_app_services_video_playlist_service__WEBPACK_IMPORTED_MODULE_4__.VideoPlaylistService
        }];
      };

      _ControlsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-controls',
        template: _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_controls_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ControlsComponent);
      /***/
    },

    /***/
    1569:
    /*!*******************************************************************!*\
      !*** ./src/app/components/progress-bar/progress-bar.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgressBarComponent": function ProgressBarComponent() {
          return (
            /* binding */
            _ProgressBarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_progress_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./progress-bar.component.html */
      2937);
      /* harmony import */


      var _progress_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./progress-bar.component.scss */
      8501);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ProgressBarComponent = /*#__PURE__*/function () {
        function ProgressBarComponent() {
          _classCallCheck(this, ProgressBarComponent);

          this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(ProgressBarComponent, [{
          key: "inputHandler",
          value: function inputHandler(event) {
            this.input.emit(event);
          }
        }, {
          key: "changeHandler",
          value: function changeHandler(event) {
            this.change.emit(event);
          }
        }]);

        return ProgressBarComponent;
      }();

      _ProgressBarComponent.propDecorators = {
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _ProgressBarComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-progress-bar',
        template: _raw_loader_progress_bar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_progress_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProgressBarComponent);
      /***/
    },

    /***/
    8539:
    /*!***************************************************!*\
      !*** ./src/app/components/time/time.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimeComponent": function TimeComponent() {
          return (
            /* binding */
            _TimeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_time_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./time.component.html */
      5265);
      /* harmony import */


      var _time_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./time.component.scss */
      9354);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _TimeComponent = /*#__PURE__*/function () {
        function TimeComponent() {
          _classCallCheck(this, TimeComponent);
        }

        _createClass(TimeComponent, [{
          key: "padZeros",
          value: function padZeros() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            return "".concat(Math.floor(value)).padStart(padding, '0');
          }
        }, {
          key: "durationMinutes",
          get: function get() {
            return this.duration / 60;
          }
        }, {
          key: "durationSeconds",
          get: function get() {
            return this.duration - Math.floor(this.durationMinutes) * 60;
          }
        }, {
          key: "currentMinutes",
          get: function get() {
            return this.currentProgress / 60;
          }
        }, {
          key: "currentSeconds",
          get: function get() {
            return this.currentProgress - Math.floor(this.currentMinutes) * 60;
          }
        }]);

        return TimeComponent;
      }();

      _TimeComponent.propDecorators = {
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        currentProgress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _TimeComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-time',
        template: _raw_loader_time_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_time_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TimeComponent);
      /***/
    },

    /***/
    6732:
    /*!***************************************************************!*\
      !*** ./src/app/components/video-list/video-list.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VideoListComponent": function VideoListComponent() {
          return (
            /* binding */
            _VideoListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_video_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./video-list.component.html */
      5908);
      /* harmony import */


      var _video_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./video-list.component.scss */
      2663);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/video.service */
      8472);
      /* harmony import */


      var src_app_services_video_playlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/video-playlist.service */
      7112);

      var _VideoListComponent = /*#__PURE__*/function () {
        function VideoListComponent(videoService, videoPlaylistService) {
          _classCallCheck(this, VideoListComponent);

          this.videoService = videoService;
          this.videoPlaylistService = videoPlaylistService;
          this.videoList = [];
          this.list = [];
          this.activeVideo = 0;
        }

        _createClass(VideoListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.videoPlaylistService.list$.subscribe(function (list) {
              return _this3.list = list;
            });
            this.videoPlaylistService.currentVideo$.subscribe(function (currentVideo) {
              _this3.videoList = _this3.list.map(function (item) {
                return {
                  name: item.title,
                  selected: item.url === currentVideo
                };
              });
            });
            this.videoPlaylistService.fetchList('/assets/playlist.json');
            this.videoPlaylistService.shouldPlayNext$.subscribe(function (playNext) {
              return _this3.playNext = playNext;
            });
            this.videoService.videoEnded$.subscribe(function (ended) {
              if (_this3.playNext && ended) {
                _this3.videoPlaylistService.playNextVideo();

                _this3.videoService.play();
              }
            });
          }
        }, {
          key: "playIt",
          value: function playIt(index) {
            this.videoPlaylistService.setCurrentVideoByIndex(index);
            this.videoService.play();
            this.activeVideo = index;
          }
        }, {
          key: "onChange",
          value: function onChange() {
            this.playNext = !this.playNext;
            this.videoPlaylistService.setShouldPlayNext(this.playNext);
          }
        }]);

        return VideoListComponent;
      }();

      _VideoListComponent.ctorParameters = function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__.VideoService
        }, {
          type: src_app_services_video_playlist_service__WEBPACK_IMPORTED_MODULE_3__.VideoPlaylistService
        }];
      };

      _VideoListComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-video-list',
        template: _raw_loader_video_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_video_list_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VideoListComponent);
      /***/
    },

    /***/
    9748:
    /*!*********************************************************************!*\
      !*** ./src/app/components/video-wrapper/video-wrapper.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VideoWrapperComponent": function VideoWrapperComponent() {
          return (
            /* binding */
            _VideoWrapperComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_video_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./video-wrapper.component.html */
      8646);
      /* harmony import */


      var _video_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./video-wrapper.component.scss */
      92);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var hls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! hls.js */
      5929);
      /* harmony import */


      var hls_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/video.service */
      8472);
      /* harmony import */


      var src_app_services_volume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/volume.service */
      3632);
      /* harmony import */


      var src_app_services_video_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/video-time.service */
      1801);
      /* harmony import */


      var src_app_services_video_playlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/video-playlist.service */
      7112);

      var _VideoWrapperComponent = /*#__PURE__*/function () {
        function VideoWrapperComponent(videoService, volumeService, videoTimeService, videoPlaylistService) {
          var _this4 = this;

          _classCallCheck(this, VideoWrapperComponent);

          this.videoService = videoService;
          this.volumeService = volumeService;
          this.videoTimeService = videoTimeService;
          this.videoPlaylistService = videoPlaylistService;
          this.playing = false;
          this.hls = new hls_js__WEBPACK_IMPORTED_MODULE_2__();
          this.videoListeners = {
            loadedmetadata: function loadedmetadata() {
              return _this4.videoTimeService.setVideoDuration(_this4.video.nativeElement.duration);
            },
            canplay: function canplay() {
              return _this4.videoService.setLoading(false);
            },
            seeking: function seeking() {
              return _this4.videoService.setLoading(true);
            },
            timeupdate: function timeupdate() {
              if (!_this4.ignore) {
                _this4.videoTimeService.setVideoProgress(_this4.video.nativeElement.currentTime);
              }

              if (_this4.video.nativeElement.currentTime === _this4.video.nativeElement.duration && _this4.video.nativeElement.duration > 0) {
                _this4.videoService.pause();

                _this4.videoService.setVideoEnded(true);
              } else {
                _this4.videoService.setVideoEnded(false);
              }
            }
          };
        }

        _createClass(VideoWrapperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.subscriptions();
            Object.keys(this.videoListeners).forEach(function (videoListener) {
              return _this5.video.nativeElement.addEventListener(videoListener, _this5.videoListeners[videoListener]);
            });
          }
          /** Play/Pause video on click */

        }, {
          key: "onVideoClick",
          value: function onVideoClick() {
            if (this.playing) {
              this.videoService.pause();
            } else {
              this.videoService.play();
            }
          }
          /** Go full screen on double click */

        }, {
          key: "onDoubleClick",
          value: function onDoubleClick() {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              var videoPlayerDiv = document.querySelector('.video-player');

              if (videoPlayerDiv.requestFullscreen) {
                videoPlayerDiv.requestFullscreen();
              }
            }
          }
          /**
           * Loads the video, if the browser supports HLS then the video use it, else play a video with native support
           */

        }, {
          key: "load",
          value: function load(currentVideo) {
            if (hls_js__WEBPACK_IMPORTED_MODULE_2__.isSupported()) {
              this.loadVideoWithHLS(currentVideo);
            } else {
              if (this.video.nativeElement.canPlayType('application/vnd.apple.mpegurl')) {
                this.loadVideo(currentVideo);
              }
            }
          }
          /**
           * Play or Pause current video
           */

        }, {
          key: "playPauseVideo",
          value: function playPauseVideo(playing) {
            this.playing = playing;
            this.video.nativeElement[playing ? 'play' : 'pause']();
          }
          /**
           * Setup subscriptions
           */

        }, {
          key: "subscriptions",
          value: function subscriptions() {
            var _this6 = this;

            this.videoService.playingState$.subscribe(function (playing) {
              return _this6.playPauseVideo(playing);
            });
            this.videoPlaylistService.currentVideo$.subscribe(function (video) {
              return _this6.load(video);
            });
            this.videoTimeService.currentTime$.subscribe(function (currentTime) {
              return _this6.video.nativeElement.currentTime = currentTime;
            });
            this.volumeService.volumeValue$.subscribe(function (volume) {
              return _this6.video.nativeElement.volume = volume;
            });
            this.videoService.loading$.subscribe(function (loading) {
              return _this6.loading = loading;
            });
            this.videoTimeService.ignore$.subscribe(function (ignore) {
              return _this6.ignore = ignore;
            });
          }
          /**
           * Method that loads the video with HLS support
           */

        }, {
          key: "loadVideoWithHLS",
          value: function loadVideoWithHLS(currentVideo) {
            this.hls.loadSource(currentVideo);
            this.hls.attachMedia(this.video.nativeElement); // this.hls.on(HLS.Events.MANIFEST_PARSED, () => this.video.nativeElement.play());
          }
          /**
           * Method that loads the video without HLS support
           */

        }, {
          key: "loadVideo",
          value: function loadVideo(currentVideo) {
            this.video.nativeElement.src = currentVideo;
          }
        }]);

        return VideoWrapperComponent;
      }();

      _VideoWrapperComponent.ctorParameters = function () {
        return [{
          type: src_app_services_video_service__WEBPACK_IMPORTED_MODULE_3__.VideoService
        }, {
          type: src_app_services_volume_service__WEBPACK_IMPORTED_MODULE_4__.VolumeService
        }, {
          type: src_app_services_video_time_service__WEBPACK_IMPORTED_MODULE_5__.VideoTimeService
        }, {
          type: src_app_services_video_playlist_service__WEBPACK_IMPORTED_MODULE_6__.VideoPlaylistService
        }];
      };

      _VideoWrapperComponent.propDecorators = {
        video: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
          args: ['video', {
            "static": true
          }]
        }]
      };
      _VideoWrapperComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-video-wrapper',
        template: _raw_loader_video_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_video_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VideoWrapperComponent);
      /***/
    },

    /***/
    7112:
    /*!****************************************************!*\
      !*** ./src/app/services/video-playlist.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VideoPlaylistService": function VideoPlaylistService() {
          return (
            /* binding */
            _VideoPlaylistService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var _video_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./video.service */
      8472);

      var _VideoPlaylistService = /*#__PURE__*/function () {
        function VideoPlaylistService(videoService) {
          _classCallCheck(this, VideoPlaylistService);

          this.videoService = videoService;
          this.list = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
          this.currentVideo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.shouldPlayNext = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        }

        _createClass(VideoPlaylistService, [{
          key: "setShouldPlayNext",
          value: function setShouldPlayNext(playNext) {
            this.shouldPlayNext.next(playNext);
          }
        }, {
          key: "shouldPlayNext$",
          get: function get() {
            return this.shouldPlayNext.asObservable();
          }
        }, {
          key: "list$",
          get: function get() {
            return this.list.asObservable();
          }
        }, {
          key: "currentVideo$",
          get: function get() {
            return this.currentVideo.asObservable();
          }
        }, {
          key: "setCurrentVideo",
          value: function setCurrentVideo(video) {
            if (this.currentVideo.getValue() !== video) {
              this.currentVideo.next(video);
              this.videoService.pause();
            }
          }
        }, {
          key: "playNextVideo",
          value: function playNextVideo() {
            var _this7 = this;

            var activeIndex = this.list.getValue().findIndex(function (video) {
              return _this7.currentVideo.getValue() === video.url;
            });
            this.setCurrentVideoByIndex(activeIndex + 1);
          }
        }, {
          key: "setCurrentVideoByIndex",
          value: function setCurrentVideoByIndex(index) {
            this.setCurrentVideo(this.list.getValue()[index].url);
          }
        }, {
          key: "fetchList",
          value: function fetchList(endpoint) {
            var _this8 = this;

            fetch(endpoint).then(function (response) {
              return response.json();
            }).then(function (playlist) {
              _this8.list.next(playlist);

              _this8.setCurrentVideo(playlist[0].url);
            });
          }
        }]);

        return VideoPlaylistService;
      }();

      _VideoPlaylistService.ctorParameters = function () {
        return [{
          type: _video_service__WEBPACK_IMPORTED_MODULE_0__.VideoService
        }];
      };

      _VideoPlaylistService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _VideoPlaylistService);
      /***/
    },

    /***/
    1801:
    /*!************************************************!*\
      !*** ./src/app/services/video-time.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VideoTimeService": function VideoTimeService() {
          return (
            /* binding */
            _VideoTimeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6215);

      var _VideoTimeService = /*#__PURE__*/function () {
        function VideoTimeService() {
          _classCallCheck(this, VideoTimeService);

          this.videoProgress = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
          this.videoDuration = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
          this.currentTime = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
          this.ignore = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        }

        _createClass(VideoTimeService, [{
          key: "setVideoDuration",
          value: function setVideoDuration(value) {
            this.videoDuration.next(value);
          }
        }, {
          key: "videoDuration$",
          get: function get() {
            return this.videoDuration.asObservable();
          }
        }, {
          key: "setVideoProgress",
          value: function setVideoProgress(value) {
            this.videoProgress.next(value);
          }
        }, {
          key: "videoProgress$",
          get: function get() {
            return this.videoProgress.asObservable();
          }
        }, {
          key: "setCurrentTime",
          value: function setCurrentTime(value) {
            this.currentTime.next(value);
          }
        }, {
          key: "currentTime$",
          get: function get() {
            return this.currentTime.asObservable();
          }
        }, {
          key: "setIgnore",
          value: function setIgnore(value) {
            this.ignore.next(value);
          }
        }, {
          key: "ignore$",
          get: function get() {
            return this.ignore.asObservable();
          }
        }]);

        return VideoTimeService;
      }();

      _VideoTimeService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _VideoTimeService);
      /***/
    },

    /***/
    8472:
    /*!*******************************************!*\
      !*** ./src/app/services/video.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VideoService": function VideoService() {
          return (
            /* binding */
            _VideoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      6215);

      var _VideoService = /*#__PURE__*/function () {
        function VideoService() {
          _classCallCheck(this, VideoService);

          this.playingState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
          this.videoEnded = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        }

        _createClass(VideoService, [{
          key: "loading$",
          get: function get() {
            return this.loading.asObservable();
          }
        }, {
          key: "setLoading",
          value: function setLoading(value) {
            this.loading.next(value);
          }
        }, {
          key: "play",
          value: function play() {
            this.playingState.next(true);
          }
        }, {
          key: "pause",
          value: function pause() {
            this.playingState.next(false);
          }
        }, {
          key: "playingState$",
          get: function get() {
            return this.playingState.asObservable();
          }
        }, {
          key: "videoEnded$",
          get: function get() {
            return this.videoEnded.asObservable();
          }
        }, {
          key: "setVideoEnded",
          value: function setVideoEnded(value) {
            this.videoEnded.next(value);
          }
        }]);

        return VideoService;
      }();

      _VideoService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _VideoService);
      /***/
    },

    /***/
    3632:
    /*!********************************************!*\
      !*** ./src/app/services/volume.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolumeService": function VolumeService() {
          return (
            /* binding */
            _VolumeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6215);

      var _VolumeService = /*#__PURE__*/function () {
        function VolumeService() {
          _classCallCheck(this, VolumeService);

          this.volume = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(1);
        }

        _createClass(VolumeService, [{
          key: "setVolumeValue",
          value: function setVolumeValue(value) {
            this.volume.next(value);
          }
        }, {
          key: "volumeValue$",
          get: function get() {
            return this.volume.asObservable();
          }
        }]);

        return VolumeService;
      }();

      _VolumeService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _VolumeService);
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      4608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    3069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 95vw;\n  height: 95vh;\n  margin: 2em 2em 0 2em;\n}\n.container h1 {\n  margin: 0;\n}\n.container .video-app {\n  margin-top: 1em;\n  display: flex;\n  display: flex;\n  width: 95vw;\n  height: 95vh;\n  justify-content: center;\n  align-items: flex-start;\n}\n.container .video-app .video-player {\n  width: 60vw;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.container .video-app .list {\n  margin-left: 1.5em;\n  flex: 1;\n}\n@media (max-width: 800px) {\n  .container .video-app {\n    flex-direction: column;\n  }\n  .container .video-app .video-player {\n    width: 90%;\n  }\n  .container .video-app .list {\n    margin: 2em 0 0 0;\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0Q7QUFDQztFQUNDLFNBQUE7QUFDRjtBQUVDO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBQUg7QUFFRztFQUNELFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQUY7QUFHRztFQUNELGtCQUFBO0VBQ0EsT0FBQTtBQURGO0FBSUc7RUF0QkY7SUF1QkMsc0JBQUE7RUFEQTtFQUdBO0lBQ0UsVUFBQTtFQURGO0VBSUE7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUFGRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDk1dnc7XG5cdGhlaWdodDogOTV2aDtcblx0bWFyZ2luOiAyZW0gMmVtIDAgMmVtO1xuXG5cdGgxIHtcblx0XHRtYXJnaW46IDA7XG5cdH1cblxuXHQudmlkZW8tYXBwIHtcblx0ICBtYXJnaW4tdG9wOiAxZW07XG5cdCAgZGlzcGxheTogZmxleDtcblx0ICBkaXNwbGF5OiBmbGV4O1xuXHQgIHdpZHRoOiA5NXZ3O1xuXHQgIGhlaWdodDogOTV2aDtcblx0ICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XG5cdCAgLnZpZGVvLXBsYXllciB7XG5cdFx0d2lkdGg6IDYwdnc7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdCAgfVxuXHRcblx0ICAubGlzdCB7XG5cdFx0bWFyZ2luLWxlZnQ6IDEuNWVtO1xuXHRcdGZsZXg6IDE7XG5cdCAgfVxuXHRcblx0ICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcblx0XHQudmlkZW8tcGxheWVyIHtcblx0XHQgIHdpZHRoOiA5MCU7XG5cdFx0fVxuXHRcblx0XHQubGlzdCB7XG5cdFx0ICBtYXJnaW46IDJlbSAwIDAgMDtcblx0XHQgIHdpZHRoOiA5MCU7XG5cdFx0fVxuXHQgIH1cblx0fVxufVxuIl19 */";
      /***/
    },

    /***/
    4735:
    /*!*************************************************************************!*\
      !*** ./src/app/components/control-volume/control-volume.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".volume-control {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.volume-control:hover .bar, .volume-control .bar:focus {\n  pointer-events: all;\n  width: auto;\n  margin-right: 1em;\n}\n.volume-control .icon {\n  position: relative;\n}\n.volume-control .bar {\n  width: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtdm9sdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFHRTtFQUNFLFFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBREoiLCJmaWxlIjoiY29udHJvbC12b2x1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudm9sdW1lLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICY6aG92ZXIgLmJhciwgLmJhcjpmb2N1cyB7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuYmFyIHtcbiAgICB3aWR0aDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    8062:
    /*!***********************************************************!*\
      !*** ./src/app/components/control/control.component.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".button {\n  border: none;\n  background-color: transparent;\n  min-width: 3rem;\n  min-height: 3rem;\n  cursor: pointer;\n}\n.button i {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7QUFDSiIsImZpbGUiOiJjb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1pbi13aWR0aDogM3JlbTtcbiAgbWluLWhlaWdodDogM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    8673:
    /*!*************************************************************!*\
      !*** ./src/app/components/controls/controls.component.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".video-controls {\n  width: 100%;\n}\n.video-controls .controls {\n  height: 1.5em;\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n}\n.video-controls .controls .full-screen {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNOIiwiZmlsZSI6ImNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWNvbnRyb2xzIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmNvbnRyb2xzIHtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAuZnVsbC1zY3JlZW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    8501:
    /*!*********************************************************************!*\
      !*** ./src/app/components/progress-bar/progress-bar.component.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".slider {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    9354:
    /*!*****************************************************!*\
      !*** ./src/app/components/time/time.component.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".time {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  line-height: 1em;\n  font-size: 12px;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUFBLGtDQUFBO0FBQ0YiLCJmaWxlIjoidGltZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lIHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG4iXX0= */";
      /***/
    },

    /***/
    2663:
    /*!*****************************************************************!*\
      !*** ./src/app/components/video-list/video-list.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".video-list {\n  width: auto;\n}\n.video-list .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.video-list .title {\n  margin: 0 1em 0 0;\n}\n.video-list .list, .video-list .list-item {\n  width: 100%;\n}\n.video-list .list-item.active {\n  background-color: #ff98bb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFFRTtFQUNFLGlCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7QUFGSiIsImZpbGUiOiJ2aWRlby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWxpc3Qge1xuICB3aWR0aDogYXV0bztcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW46IDAgMWVtIDAgMDtcbiAgfVxuXG4gIC5saXN0LCAubGlzdC1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5saXN0LWl0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5OGJiO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    92:
    /*!***********************************************************************!*\
      !*** ./src/app/components/video-wrapper/video-wrapper.component.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".video-wrapper {\n  position: relative;\n}\n.video-wrapper .video {\n  width: 100%;\n  max-height: 80vh;\n  margin: 0 auto;\n}\n.video-wrapper .spinner {\n  position: absolute;\n  top: calc(50% - 50px);\n  left: calc(50% - 50px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUFKIiwiZmlsZSI6InZpZGVvLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAudmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgLSA1MHB4KTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    1106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n  <h1>HLS Video Player</h1>\n  <p>A responsive video player made in Angular 12, Typescript, HLS and Material UI</p>\n  <div class=\"video-app\">\n    <div class=\"video-player\">\n      <app-video-wrapper></app-video-wrapper>\n      <app-controls></app-controls>\n    </div>\n    <app-video-list class=\"list\"></app-video-list>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    282:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-volume/control-volume.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"volume-control\">\n  <app-control class=\"icon\" [icon]=\"icon\" [title]=\"title\" (click)=\"onVolumeClick()\"></app-control>\n  <app-progress-bar\n    class=\"bar\"\n    [max]=\"maxVolumeValue\"\n    [value]=\"volume\"\n    [label]=\"ariaLabel\"\n    (input)=\"onInput($event)\"\n    tabindex=\"0\"\n  ></app-progress-bar>\n</div>\n";
      /***/
    },

    /***/
    4658:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control/control.component.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button class=\"button\" [title]=\"title\">\n  <i class=\"material-icons\">{{icon}}</i>\n</button>\n";
      /***/
    },

    /***/
    9394:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/controls/controls.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"video-controls\">\n  <app-progress-bar\n    class=\"bar\"\n    [max]=\"duration\"\n    [value]=\"currentProgress\"\n    [label]=\"ariaLabel()\"\n    (input)=\"onInput($event)\"\n    (change)=\"onChange($event)\"\n  ></app-progress-bar>\n  <div class=\"controls\">\n    <app-control [icon]=\"iconPlaying.value\" [title]=\"iconPlaying.name\" (click)=\"onPlayClick()\"></app-control>\n    <app-control icon=\"skip_next\" title=\"Next\" (click)=\"onNextClick()\"></app-control>\n    <app-control-volume></app-control-volume>\n    <app-time [currentProgress]=\"currentProgress\" [duration]=\"duration\"></app-time>\n    <div class=\"full-screen\">\n      <app-control icon=\"fullscreen\" title=\"Fullscreen\" (click)=\"onFullscreen()\"></app-control>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    2937:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-bar/progress-bar.component.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-slider\n  class=\"slider\"\n  min=\"0\"\n  [max]=\"max\"\n  [value]=\"value\"\n  [attr.aria-label]=\"label\"\n  (input)=\"inputHandler($event)\"\n  (change)=\"changeHandler($event)\"\n  step=\"0.00001\"\n></mat-slider>\n";
      /***/
    },

    /***/
    5265:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/time/time.component.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p class=\"time\">\n  <span>\n    {{padZeros(currentMinutes)}}:{{padZeros(currentSeconds)}}\n  </span>\n  <span> / </span>\n  <span>\n    {{padZeros(durationMinutes)}}:{{padZeros(durationSeconds)}}\n  </span>\n</p>\n";
      /***/
    },

    /***/
    5908:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-list/video-list.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"video-list\">\n  <div class=\"header\">\n    <h2 class=\"title\">Next</h2>\n    <p>\n      <span>\n        Play next\n      </span>\n      <mat-slide-toggle (change)=\"onChange()\" [checked]=\"playNext\" aria-label=\"Enable autoplay\"></mat-slide-toggle>\n    </p>\n  </div>\n  <mat-nav-list class=\"list\">\n    <a\n      mat-list-item\n      class=\"list-item\"\n      *ngFor=\"let video of videoList; let i = index\"\n      [ngClass]=\"{ active: video.selected }\"\n      (click)=\"playIt(i)\"\n    >\n      <i class=\"material-icons\">play_arrow</i>\n      {{ video.name }}\n    </a>\n  </mat-nav-list>\n</div>\n";
      /***/
    },

    /***/
    8646:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-wrapper/video-wrapper.component.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"video-wrapper\">\n  <video #video class=\"video\" (click)=\"onVideoClick()\" (dblclick)=\"onDoubleClick()\"></video>\n  <mat-spinner *ngIf=\"loading\" class=\"spinner\" color=\"accent\" strokeWidth=\"5\"></mat-spinner>\n</div>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map