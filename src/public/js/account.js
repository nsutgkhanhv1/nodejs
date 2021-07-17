 $('#login-btn').on('click',Login);
function Login() {
    var user = $('#login-user').val();
    var password = $('#login-password').val();

    $.ajax({
        url: "http://localhost:3000/account/login",
        type: "POST",
        data: {
            user: user,
            password: password,
        }
        })
        .then((data) => {
            if (data.mess == "Login Success") {
                setCookie("token", data.id, 1);
                window.location.href = "http://localhost:3000/user/stored/courses";
            }
            else {
                $('#error-mess').text(data.mess);
            }
        })
        .catch((err) => {
            console.log("Loi server")
        })
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
