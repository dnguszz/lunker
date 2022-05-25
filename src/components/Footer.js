import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    런커넷(임시)의 푸터입니다
                </p>
                <p className="footer-subscription-text">
                    뭔말을 적을지 모르겠네요
                </p>
                <div className="input-areas">
                </div>
            </section>
            <div class='footer-divs'>
                <div className='footer-div-wrapper'>
                    <div className='footer-div-items'>
                        <h2>About Us</h2>
                        <div to='/sign-up'>How it works</div>
                        <div to='/'>Testimonials</div>
                        <div to='/'>Careers</div>
                        <div to='/'>Investors</div>
                        <div to='/'>Terms of Service</div>
                    </div>
                    <div class='footer-div-items'>
                        <h2>Contact Us</h2>
                        <div to='/'>Contact</div>
                        <div to='/'>Support</div>
                        <div to='/'>Destinations</div>
                        <div to='/'>Sponsorships</div>
                    </div>
                    </div>
                    <div className='footer-div-wrapper'>
                    <div class='footer-div-items'>
                        <h2>Videos</h2>
                        <div to='/'>Submit Video</div>
                        <div to='/'>Ambassadors</div>
                        <div to='/'>Agency</div>
                        <div to='/'>Influencer</div>
                    </div>
                    <div class='footer-div-items'>
                        <h2>Social Media</h2>
                        <div to='/'>Instagram</div>
                        <div to='/'>Facebook</div>
                        <div to='/'>Youtube</div>
                        <div to='/'>Twitter</div>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <div to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </div>
                    </div>
                    <small className="website-rights">TRVL © 2020</small>
                    <div className="social-icons">
                        <div className="social-icon-div facebook" to="/"
                        target = "_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className="social-icon-div instagram" to="/"
                        target = "_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div class='social-icon-div youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i class='fab fa-youtube' />
                        </div>
                        <div
                        class='social-icon-div twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-twitter' />
                        </div>
                        <div
                        class='social-icon-div twitter'
                        to='/'
                        target='_blank'
                        aria-label='divedIn'
                        >
                        <i class='fab fa-divedin' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
  );
}

export default Footer;
