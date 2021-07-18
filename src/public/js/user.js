$.ajax({
    url: "http://localhost:3000/user/stored/courses",
    type: "POST",
    })
    .then((data) => {
        if(data.mess == 'Please Login'){
            console.log("no data")

        }
        else if(data.name){
            setHeader(data.name);
        }
    })
    .catch((err) => {
        console.log("Chua dang nhap")
    })
function setHeader(data){
    $('#header-right-btn-gr').html(`
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/img/khan.jpg" alt="avt" class="user-avt">
            <span>${data}</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="/user/stored/courses">Khóa học của tôi</a></li>
            <li><a class="dropdown-item" href="/user/stored/news">Bài viết của tôi</a></li>
            <div class="dropdown-divider"></div>
            <li><button class="dropdown-item" id='logout'>Đăng xuất</button></li>
        </ul>`);
    function logOut() {
        delete_cookie("token");
        window.location.href = "http://localhost:3000/"
    }
    $('#logout').on('click',logOut);
    function delete_cookie(name) {
        document.cookie = name + "=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    }
}
