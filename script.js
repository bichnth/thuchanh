function login()
{
  let u = username.value
  let p = pw.value
  if (u == "abc" && p == "123")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block";
  }
  else
    document.write("Sai tên đăng nhập hoặc mật khẩu")
}
