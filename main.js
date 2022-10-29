// ==UserScript==
// @name        Bilibili playspeed extend
// @namespace   https://icooper.cc
// @author      Shinohara
// @license     Apache
// @description A javascript to use better playspeed rate adjustment.
// @match       *://www.bilibili.com/video/av*
// @match       *://www.bilibili.com/video/bv*
// @match       *://www.bilibili.com/video/BV*
// @match       *://bangumi.bilibili.com/anime/*/play*
// @match       *://www.bilibili.com/bangumi/play/ep*
// @match       *://www.bilibili.com/bangumi/play/ss*
// @match       *://www.bilibili.com/bangumi/media/md*
// @match       *://www.biligame.com/detail/*
// @match       *://vc.bilibili.com/video/*
// @match       *://www.bilibili.com/watchlater/
// @version     1.0
// ==/UserScript==

// Copyright 2022 Shinohara

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// TODO: 确实，设置 timeout 看起来很蠢。能用就行，以后再改
// TODO: 以后也许给 YouTube 之类的也加上
// TODO: 加一个手输倍率的功能

window.setTimeout(speedExtend, 4000);

async function speedExtend() {
    'use strict';

    document.getElementsByClassName("bpx-player-ctrl-playbackrate-menu")[0].innerHTML =
        "<li class=\"bpx-player-ctrl-playbackrate-menu-item\" data-value=\"2.5\">2.5x</li>" +
        "<li class=\"bpx-player-ctrl-playbackrate-menu-item\" data-value=\"2\">2.0x</li>" +
        "<li class=\"bpx-player-ctrl-playbackrate-menu-item\" data-value=\"1.5\">1.5x</li>" +
        "<li class=\"bpx-player-ctrl-playbackrate-menu-item\" data-value=\"1.25\">1.25x</li>" +
        "<li class=\"bpx-player-ctrl-playbackrate-menu-item bpx-state-active\" data-value=\"1\">1.0x</li>" +
        "<li class=\"bpx-player-ctrl-playbackrate-menu-item\" data-value=\"0.75\">0.75x</li>" +
        "<li class=\"bpx-player-ctrl-playbackrate-menu-item\" data-value=\"0.5\">0.5x</li>"
};
