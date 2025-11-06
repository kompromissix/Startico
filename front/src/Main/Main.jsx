import './Main.scss'
import strelka from './Main_assets/strelka.png'
import logo from './Main_assets/logo.png'
import logoi from './Main_assets/logoi.png'
import logoip from './Main_assets/logoip.png'
import logoips from './Main_assets/logoips.png'
import img1 from './Main_assets/img1.png'
import img2 from './Main_assets/img2.png'
import icon1 from './Main_assets/icon1.png'
import icon2 from './Main_assets/icon2.png'
import icon3 from './Main_assets/icon3.png'
import image1 from './Main_assets/image1.png'
import image2 from './Main_assets/image2.png'
import left from './Main_assets/left.png'
import mid from './Main_assets/mid.png'
import right from './Main_assets/right.png'
import pay from './Main_assets/pay.png'
import strelochki from './Main_assets/strelochki.png'
import paygreen from './Main_assets/paygreen.png'



export default function Main(){
    return(
        <>
            <main>
                <section className='background1'>
                    <div>
                        <h1>Head start your business today!</h1>
                        <h3>Consectetur adipiscing elit. Integer sagittis quam magna, quis sollicitudin lorem ornare ut. Nulla et scelerisque mauris.</h3>
                        <div>
                            <button>
                                <p>Get started</p>
                            </button>
                            <button>
                                <p>Try for free</p>
                                <img src={strelka} alt="" />
                            </button>
                        </div>
                        <div>
                            <img src={logo} alt="" />
                            <img src={logoi} alt="" />
                            <img src={logoip} alt="" />
                            <img src={logoips} alt="" />
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <div>
                            
                        </div>
                        <div>
        
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>
                                <p>Watch Introduction</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background3'>
                    <div>
                        <img src={img1} alt="" />
                        <div>
                            <div>
                                <p>Speed</p>
                            </div>
                            <h2>Faster than ever before</h2>
                            <p>Morbi tristique cursus diam, at viverra felis malesuada eu. Duis iaculis velit ac urna fermentum interdum. Ut auctor vitae nisi eget varius. Phasellus rutrum pellentesque lectus pulvinar dapibus aenean dui justro, tempus sed oido.</p>
                            <div>
                                <button>
                                    <p>Get started</p>
                                </button>
                                <button>
                                    <p>Try for free</p>
                                    <img src={strelka} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background4'>
                    <div>
                        <div>
                            <h2>Building your very own Startup has never been simpler</h2>
                            <p>Aenean dui justo, tempus sed odio ut, convallis accumsan nunc. Phasellus mauris sem, porta eu turpis vel, maximus condimentum turpis.</p>
                            <div>
                                <div>
                                    <div>
                                        <img src={icon1} alt="" />
                                        <h3>Better results</h3>
                                        <p>Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa.</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={icon2} alt="" />
                                        <h3>Less paper work</h3>
                                        <p>Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim.</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={icon3} alt="" />
                                        <h3>More profit</h3>
                                        <p>Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button>
                                    <p>Get started</p>
                                </button>
                                <button>
                                    <p>Try for free</p>
                                    <img src={strelka} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background5'>
                    <div>
                        <div>
                            <div>
                                <p>Efficient</p>
                            </div>
                            <h2>Straight to the point</h2>
                            <p>Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed urna. Aenean consequat risus tortor, quis porta.</p>
                            <div>
                                <div>
                                    <div>
                                        <img src={image1} alt="" />
                                    </div>
                                    <h3>No meetings</h3>
                                    <p>Porta non eros. Ut finibus viverra neque, sed vestibulum tellus volutpat ac cras at massa.</p>
                                </div>
                                <div>
                                    <div>
                                        <img src={image2} alt="" />
                                    </div>
                                    <h3>24/7 customer support</h3>
                                    <p>Praesent consequat erat in orci lobortis, in accumsan orci vestibulum nam et dictum.</p>
                                </div>
                            </div>
                            <div>
                                <button>
                                    <p>Get started</p>
                                </button>
                                <button>
                                    <p>Try for free</p>
                                    <img src={strelka} alt="" />
                                </button>
                            </div>
                        </div>
                        <img src={img2} alt="" />
                    </div>
                </section>
                <section className='background6'>
                    <div>
                        <div>
                            <div>
                                <p>Pricing</p>
                            </div>
                            <h2>Pricing plans</h2>
                            <p>Suspendisse mattis porttitor gravida et malesuada fames.</p>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <img src={pay} alt="" />
                                            </div>
                                            <div>
                                                <p>Basic plan</p>
                                                <h3><span>$19</span>/mo</h3>
                                                <h4>or $199 yearly</h4>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <p>Includes:</p>
                                            <ul>
                                                <li>Vestibulum posuere odio</li>
                                                <li>Id purus maximus condimentum</li>
                                                <li>Vel convallis nibh duis</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button">
                                        <p>Get started</p>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <img src={paygreen} alt="" />
                                            </div>
                                            <div>
                                                <p>Business plan</p>
                                                <h3><span>$29</span>/mo</h3>
                                                <h4>or $299 yearly</h4>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <p>Includes:</p>
                                            <ul>
                                                <li>Maximus condimentum turpis</li>
                                                <li>Nullam faucibus dictum accumsan</li>
                                                <li>Vivamus ante dolor</li>
                                                <li>Purus in convallis pharetra</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button">
                                        <p>Get started</p>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <img src={pay} alt="" />
                                            </div>
                                            <div>
                                                <p>Enterprise plan</p>
                                                <h3><span>$49</span>/mo</h3>
                                                <h4>or $499 yearly</h4>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <p>Includes:</p>
                                            <ul>
                                                <li>Phasellus finibus lectus</li>
                                                <li>At blandit mollis maecenas</li>
                                                <li>Nec ultrices lectus eune</li>
                                                <li>Mattis facilisis lacus aliquet</li>
                                                <li>Am condimentum cursus</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button">
                                        <p>Get started</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background7'>
                    <div>
                        <div>
                            <div>
                                <p>Blog</p>
                            </div>
                            <h2>Our latest blogs</h2>
                            <p>Accumsan semper euismod dolor vitae metus.</p>
                        </div>
                        <div>
                            <div>
                                <img src={left} alt="" />
                                <div>
                                    <div>
                                        <div>
                                            <p>Business</p>
                                        </div>
                                        <p>7 min read</p>
                                    </div>
                                    <h2>Top 10 mistakes startaps in 2022 make and how to avoid them</h2>
                                    <p>Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed nesciunt delectus sequi harum d</p>
                                    <div>
                                        <img src={strelochki} alt="" />
                                        <p>Read more</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={mid} alt="" />
                                <div>
                                    <div>
                                        <div>
                                            <p>Business</p>
                                        </div>
                                        <p>11 min read</p>
                                    </div>
                                    <h2>How many participants for a new hire interview</h2>
                                    <p>Et ad placeat quo rerum earum. Est est ea perspiciatis facere voluptas qui sit exercitationem autem. Qui maxime pariatur nobis est et culpa itaque consequatur.</p>
                                    <div>
                                        <img src={strelochki} alt="" />
                                        <p>Read more</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={right} alt="" />
                                <div>
                                    <div>
                                        <div>
                                            <p>Tools</p>
                                        </div>
                                        <p>5 min read</p>
                                    </div>
                                    <h2>Two business tools that have made my job way easier</h2>
                                    <p>Est est ea perspiciatis facere voluptas qui sit exercitationem autem. Et ad placeat quo rerum earum. Qui maxime pariatur nobis est et culpa itaque consequatur.</p>
                                    <div>
                                        <img src={strelochki} alt="" />
                                        <p>Read more</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}