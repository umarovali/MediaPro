import { SlCallOut } from "react-icons/sl";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <h1 className="header_logo">Active <span>Media</span></h1>

                    <p className="header_text">Sakhib Akhmatov - <span>online</span> va <span>offline</span> kurslar!</p>

                    <a href="tel:0556271984" className="header_btn">
                        <SlCallOut /> 0556 27 19 84
                    </a>
                </div>
            </div>
        </header>
    )
}
