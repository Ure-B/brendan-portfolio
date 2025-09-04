import Globe from "../components/Globe";

function Contact() {
    return (
        <div id="contact">
            <div className="flex flex-row gap-10 p-10">
                <h1 className="font-black text-[40px] text-[#FFFFFF]">Contact Me</h1>
                <Globe/>
            </div>
        </div>
    );
}

export default Contact;