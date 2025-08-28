import { motion } from "motion/react";

function NavElement({ label, link, delay }) {
    return (
        <motion.div initial={{ scale: 0, opacity: 0}} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, type: "spring", delay: delay }}>
            <motion.button whileTap={{ y: 2 }}>
                <li className="text-white cursor-pointer text-[20px] font-semibold font-sans font-stretch-105%">
                    <a href={link}>{label}</a>
                </li>
            </motion.button>
        </motion.div>
    );
}

export default NavElement;