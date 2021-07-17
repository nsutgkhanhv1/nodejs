function logOut() {
    delete_cookie("token");
    window.location.href = "http://localhost:3000/"
}
$('#logout').on('click',logOut);
function delete_cookie(name) {
    document.cookie = name + "=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
}