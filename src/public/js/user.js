// $.ajax({
//     url: "http://localhost:3000/user/stored",
//     type: "GET",
//     })
//     .then((data) => {
//         $('#header-right-btn-gr').html(`
//         <div class="dropdown">
//             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
//                 data-bs-toggle="dropdown" aria-expanded="false">
//                 <img src="/img/khan.jpg" alt="avt" class="user-avt">
//                 <span>${data.name}</span>
//             </button>
//             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                 <li><a class="dropdown-item" href="/user/stored/courses">Khóa học của tôi</a></li>
//                 <li><a class="dropdown-item" href="/user/stored/news">Bài viết của tôi</a></li>
//                 <div class="dropdown-divider"></div>
//                 <li><button class="dropdown-item" id='logout'>Đăng xuất</button></li>
//             </ul>
//         `)
//         window.location.href = 'http://localhost:3000/user/stored/courses';
//     })
//     .catch((err) => {
//         console.log("Loi server")
//     })