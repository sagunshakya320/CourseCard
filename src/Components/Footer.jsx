function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Course Explorer</h2>
          <p>
            Learn new skills with high-quality online courses taught by
            experienced instructors.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Programming</li>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Artificial Intelligence</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@courseexplorer.com</p>
          <p>Phone: +977-9800000000</p>
          <p>Kathmandu, Nepal</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Course Explorer. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;