import './Footer.scss'
import icon from './Footer_assets/icon.png'
import ins from './Footer_assets/ins.png'
import fa from './Footer_assets/fa.png'
import tv from './Footer_assets/tv.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div>
                    <div>
                        <div>
                            <img src={icon} alt="" />
                            <div>
                                <p>Address:</p>
                                <p>Level 1, 12 Nikola Tesla street, Niš, Serbia</p>
                            </div>
                            <div>
                                <p>Contact</p>
                                <p>1800 123 4567</p>
                                <p>info@startico.io</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Pages</h3>
                                <ul>
                                    <li>Home v1</li>
                                    <li>Home v2</li>
                                    <li>Home v3</li>
                                    <li>About v1</li>
                                    <li>About v2</li>
                                    <li>About v3</li>
                                    <li>Contact v1</li>
                                    <li>Contact v2</li>
                                    <li>Contact v3</li>
                                    <li>Blog</li>
                                    <li>Pricing</li>
                                    <li>Log in</li>
                                    <li>Sign up</li>
                                </ul>
                            </div>
                            <div>
                                <h3>CMS pages</h3>
                                <ul>
                                    <li>Blog Post</li>
                                    <li>Blog Categories</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Utility pages</h3>
                                <ul>
                                    <li>Style guide</li>
                                    <li>Licenses</li>
                                    <li>Changelog</li>
                                    <li>404</li>
                                    <li>Password</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr />
                        <div>
                            <p>© Startico by Minima Square. Powered by Webflow.</p>
                            <div>
                                <div>
                                    <img src={ins} alt="" />
                                </div>
                                <div>
                                    <img src={tv} alt="" />
                                </div>
                                <div>
                                    <img src={fa} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}