function login()
{
  let u = username.value
  let p = pw.value
  if (u=="thao" && p=="man")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block"
  }
}
