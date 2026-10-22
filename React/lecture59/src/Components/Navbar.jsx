
function Navbar({user}) {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>{user.isLoggedIn ? user.name : "Login"}</li>
    </ul>
  )
}

export default Navbar;