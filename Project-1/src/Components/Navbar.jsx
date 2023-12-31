const Navbar = () =>{
    return(
        <div>
  <nav id='navbar' className="container">
      <div className="logo"><img src="https://imgs.search.brave.com/RkhObkux_ZoPQJcqeOXFD-I8xVbM2deWyZlvC_Sfgoo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL25pa2UtbG9n/by1wbmctZG93bmxv/YWQtbmlrZS1sb2dv/LXBuZy1pbWFnZXMt/dHJhbnNwYXJlbnQt/Z2FsbGVyeS1hZHZl/cnRpc2VtZW50LTEw/MjQucG5n" alt="logo" /></div>
      <ul>
        <li href='#'>Menu</li>
        <li href='#'>Location</li>
        <li href='#'>About</li>
        <li href='#'>Contact</li>
      </ul>
      <button>login</button>
  </nav>
</div>
    );

}

export default Navbar;