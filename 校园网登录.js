// ==UserScript==
// @name         河南理工大学校园网自动登录
// @namespace    https://github.com/HPUhushicheng/HPU-Giwifi
// @version      1.0
// @description  自动登录【河南理工大学·校园网】
// @author       hushicheng
// @include      *://*/gportal/web/login?*
// @include      *://*/srun_portal_success?*
// @grant        none
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';
 
    if (window.location.href.includes('gportal/web/login')) {
        document.getElementById('first_name').value = "填写你的学号"
        document.getElementById('first_password').value = "填写你的密码"
        var loginButton = document.querySelector('.form-input.submit_btn')
        if (loginButton) {
            loginButton.click()
        }
    } else if (window.location.href.includes('srun_portal_success')) {
        document.getElementById('username').value = "填写你的学号"
        document.getElementById('password').value = "填写你的密码"
        var secondLoginButton = document.querySelector('.btn-login')
        if (secondLoginButton) {
            secondLoginButton.click()
        }
    }
})();
 
 
// Hello my friend, this is my contact information, welcome to advise
// Blog:    https://site.hpuedd.top/
// GitHub:  https://github.com/HPUhushicheng/