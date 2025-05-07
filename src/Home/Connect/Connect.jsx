import { TbSend2 } from "react-icons/tb";

export default function Connect() {
    return (
        <section className="connect">
            <div className="container">
                <div className="connect_bg">
                    <div className="connect_contact">
                        <h6 className="connect_title">Siz bilan boglanishimiz uchun, <span>formani</span> toldiring!</h6>
                        <p className="connect_title"><span>Sakhib</span> Akhmatov</p>
                    </div>

                    <form className="connect_form">
                        <div className="connect_inputs">
                            <label for="name">Ismingis*</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="connect_inputs">
                            <label for="num">Telefon raqamingiz*</label>
                            <input type="text" id="num" />
                        </div>

                        <button className="connect_btns">Royhatdan otish! <TbSend2 /></button>
                    </form>
                </div>
            </div>
        </section>
    )
}
