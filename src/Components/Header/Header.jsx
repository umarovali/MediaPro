import { SlCallOut } from "react-icons/sl";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <h1 className="header_logo">Active <span>Media</span></h1>

                    <p className="header_text">Sakhib Akhmatov - <span>online</span> va <span>offline</span> kurslar!</p>

                    <a href="tel:0880 77 80 77" className="header_btn">
                        <SlCallOut /> <p>+996 880 77 80 77</p>
                    </a>
                </div>
            </div>
        </header>
    )
}
