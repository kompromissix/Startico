import './Header.scss'
import logo from './Header_assets/Frame.png'
export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src={logo} alt="" />
                    <div>
                        <a href="">Our Story</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                        <a href="">Pricing</a>
                        <div>
                            <button>
                                <p>Log in</p>
                            </button>
                            <button>
                                <p>Try for free</p>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}