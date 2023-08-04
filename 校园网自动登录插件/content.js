
// 学号和密码
var studentId = 'xxxxxxxx';
var password = 'xxxxxxxxx';

// 学号和密码
var username = 'xxxxxxxxx';
var password = 'xxxxxxxxx';

if (window.location.href.includes('/gportal/web/login?')) {
    // 第一个类型的网址
    document.getElementById('first_name').value = studentId;
    document.getElementById('first_password').value = password;
    var loginButton = document.querySelector('.submit_btn');
    if (loginButton) {
        loginButton.click();
    }
} else if (window.location.href.includes('/srun_portal_success?')) {
    // 第二个类型的网址
    document.getElementById('username').value = username;
    document.getElementById('password').value = password;
    var secondloginButton = document.getElementById('login-account');
    if (secondloginButton) {
        secondloginButton.click();
    }
}