const token = document.cookie;
if(!token){
    $('#header-right-btn-gr').html(`<div class="btn-group">
    <a href="/account" class="btn btn-primary active">Đăng nhập</a>
    <a href="/account" class="btn btn-primary">Đăng ký</a>
  </div>`);
}
