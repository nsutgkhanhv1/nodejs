const token = document.cookie;
if(!token){
    $('#header-right-btn-gr').html(`<div class="btn-group">
    <a href="/account" class="btn btn-primary active">Đăng nhập</a>
    <a href="/account" class="btn btn-primary">Đăng ký</a>
  </div>`);
}

function logOut() {
    delete_cookie("token");
    window.location.href = "http://localhost:3000/"
}
$('#logout').on('click',logOut);
function delete_cookie(name) {
    document.cookie = name + "=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
}