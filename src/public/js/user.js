$.ajax({
    url: "http://localhost:3000/user/stored/courses",
    type: "POST",
    })
    .then((data) => {
        if(data.mess == 'Please Login'){
            console.log("no data")

        }
        else if(data.name){
            localStorage.setItem('loginData',data.name);

        }
    })
    .catch((err) => {
        console.log("Chua dang nhap")
    })
const loginData = localStorage.getItem('loginData');
const token = document.cookie;
if(!token){
    $('#header-right-btn-gr').html(`<div class="btn-group">
    <a href="/account" class="btn btn-primary active">Đăng nhập</a>
    <a href="/account" class="btn btn-primary">Đăng ký</a>
  </div>`);
}
else{
    $('#header-right-btn-gr').html(`
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/img/khan.jpg" alt="avt" class="user-avt">
            <span>${loginData}</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="/user/stored/courses">Khóa học của tôi</a></li>
            <li><a class="dropdown-item" href="/user/stored/news">Bài viết của tôi</a></li>
            <div class="dropdown-divider"></div>
            <li><button class="dropdown-item" id='logout'>Đăng xuất</button></li>
        </ul>`);
}