import "./../styles/Nav.css";
function Nav() {
  return (
    <>
      <div className="Nav">
        <div className="Nav1">
          <img src="image.png" alt="" height={"70px"} />
        </div>
        <div className="Nav2">
          <p>Home</p>
          <p>Comapny</p>
          <select>
            <option>Service</option>
          </select>
          <select>
            <option>Our product</option>
          </select>
          <p>Education</p>
          <p>Blogs</p>
          <p>Community</p>
        </div>
        <div className="Nav3">
          <button>Contact Us</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
