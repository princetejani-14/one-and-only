import React from 'react'
import './footer.scss'

import footerlogo from '../../assets/logo/one and only white.webp'
import linkdin from '../../assets/icone/linkedin.png'
import twitter from '../../assets/icone/twitter.png'
import facebook from '../../assets/icone/facebook.png'
import instagram from '../../assets/icone/instagram.png'
import youtube from '../../assets/icone/youtube.png'
import downarrow from '../../assets/icone/down arrow white.png'

export default function Footer() {
    return (
        <div>
            <div className='footer_bg'>
                <div className='footer-container'>
                    <div className='footer-grid'>
                        <div className='footer-left'>
                            <div className='footer-logo'>
                                <img src={footerlogo} />
                            </div>
                        </div>
                        <div className='footer-right'>
                            <div className='right-menu1'>
                                <div className='head'>
                                    <p>About Us</p>
                                    <img src={downarrow} />
                                </div>
                                <a href='#'>About One&Only</a>
                                <a href='#'>Our Resorts</a>
                                <a href='#'>Private Homes</a>
                            </div>
                            <div className='right-menu1'>
                                <div className='head'>
                                    <p>News and Awards</p>
                                    <img src={downarrow} />
                                </div>
                                <a href='#'>Media Centre</a>
                                <a href='#'>Awards</a>
                                <a href='#'>Newsletter Signup</a>
                            </div>
                            <div className='right-menu1'>
                                <div className='head'>
                                    <p>Terms & Conditions</p>
                                    <img src={downarrow} />
                                </div>
                                <a href='#'>Privacy Policy</a>
                                <a href='#'>Website Terms</a>
                                <a href='#'>Sitemap</a>
                            </div>
                            <div className='right-menu1'>
                                <div className='head'>
                                    <p>Contact</p>
                                    <img src={downarrow} />
                                </div>
                                <a href='#'>Contact Us</a>
                            </div>
                            <div className='right-menu1'>
                                <div className='head'>
                                    <p>Kerzner</p>
                                    <img src={downarrow} />
                                </div>
                                <a href='#'>Atlantis</a>
                                <a href='#'>Siro</a>
                                <a href='#'>Rare Finds</a>
                                <a href='#'>Careers</a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-apps'>
                        <div className='apps-left'>
                            <img src={linkdin} />
                            <img src={twitter} />
                            <img src={facebook} />
                            <img src={instagram} />
                            <img src={youtube} />
                        </div>
                        <div className='apps-right'>
                            <p>2024 ©️ Kerzner International Limited. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}