import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TbSend2 } from "react-icons/tb";

export default function Connect() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+996 ");

    const handlePhoneChange = (e) => {
        let digits = e.target.value.replace(/\D/g, "");
        
        if (digits.startsWith("996")) {
            digits = digits.slice(3);
        }

        digits = digits.slice(0, 9);

        const formatted =
            "+996 " +
            digits.slice(0, 3) +
            (digits.length >= 4 ? " " + digits.slice(3, 6) : "") +
            (digits.length >= 7 ? " " + digits.slice(6, 9) : "");

        setPhone(formatted);
    };

  const handleClick = () => {
    const rawDigits = phone.replace(/\D/g, "");
    if (!name.trim() || rawDigits.length !== 12) {
        toast.error("Iltimos ma'lumotlarni kiriting!");
        return;
    }

    const message = `📨 Yangi so'rov:\n👤 Ism: ${name}\n📞 Telefon: ${phone}`;
    const token = "7534242774:AAFQe9sggAiAnA_sOOaqTEcxL5bFsplNtgU";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const payload = {
        chat_id: 6207555178,
        text: message,
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then((res) => {
            if (!res.ok) throw new Error("Telegramga yuborilmadi");
            toast.success("Ma'lumot yuborildi!");
        })
        .catch(() => toast.error("Xatolik yuz berdi"));
};


    return (
        <section className="connect" id="connect">
            <div className="container">
                <div className="connect_bg">
                    <div className="connect_contact">
                        <h6 className="connect_title">
                            Siz bilan boglanishimiz uchun, <span>formani</span> toldiring!
                        </h6>
                        <p className="connect_title">
                            <span>Sakhib</span> Akhmatov
                        </p>
                    </div>

                    <form className="connect_form" onSubmit={(e) => e.preventDefault()}>
                        <div className="connect_inputs">
                            <label htmlFor="name">Ismingiz*</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="connect_inputs">
                            <label htmlFor="num">Telefon raqamingiz*</label>
                            <input
                                type="tel"
                                id="num"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="+996 123 456 789"
                            />
                        </div>

                        <button type="button" className="connect_btns" onClick={handleClick}>
                            Royhatdan otish! <TbSend2 />
                        </button>
                    </form>
                </div>
            </div>
            <Toaster />
        </section>
    );
}