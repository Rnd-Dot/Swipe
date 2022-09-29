import Logo from "../../images/logo/Circeya.png";
import Vector from "../../images/logo/Vector.png";
import "./Header.css";

const Header = () => {
    return (
        <>
            <header>
                <div>
                    <div className="logo">
                        <img src= {Vector} alt="vector" />
                        <img src= {Logo} alt="logo" className="logo1"/>
                    </div>
                    <div className="number">+7 (495) 495-49-54</div>
                </div>
            </header>
        </>
    )
}

export default Header;