import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">&copy; Copyright <strong>Vijaya Ram</strong>. All Rights Reserved</p>
              <div className="credits">
                {/* All the links in the footer should remain intact. You can delete the links only if you purchased the pro version. */}
                Designed by <a href="https://bootstrapmade.com/">Vijaya Ram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
