
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
                            <label>Ismingis*</label>
                            <input type="text" />
                        </div>
                        <div className="connect_inputs">
                            <label>Telefon raqamingiz*</label>
                            <input type="text" />
                        </div>

                        <button className="connect_btns">Royhatdan otish!</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
