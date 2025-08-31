import { useState, useEffect, useRef } from 'react';

function Typewriter() {
    const [string, setString] = useState("");
    const [cursorState, setCursorState] = useState(true);

    const typingSpeed = 70;
    let isTyping = useRef(false);
    let charIndex = useRef(0);

    const pauseTime = 1200;
    let isPaused = useRef(false);

    const jobs = [
        "Software Engineering",
        "Game Design",
        "Data Analysis",
        "Machine Learning",
        "Full Stack Development"
    ];

    let jobIndex = useRef(0);
    let currJob = useRef("");

    useEffect(() => {
        const typeInterval = setInterval(() => {
            // Check if paused
            if (isPaused.current) return;

            // Get current string for typing
            let currString = string;

            // Check if current string is empty and get a new job if it is
            if (currString === "") {
                if (jobIndex.current === jobs.length) jobIndex.current = 0; 
                currJob.current = jobs[jobIndex.current];
                jobIndex.current++;
                charIndex.current = 0;
            }

            // Either type out the string or delete characters one by one
            isTyping.current = charIndex.current < currJob.current.length;
            if (isTyping.current) {
                currString += currJob.current.charAt(charIndex.current);
                charIndex.current++;

                // If finished typing out the string, pause before deleting
                if (charIndex.current === currJob.current.length) {
                    isPaused.current = true;
                    setTimeout(() => {
                        isPaused.current = false;
                    }, pauseTime);
                }
            }
            else {
                currString = currString.slice(0, -1);

                // If finished typing out the string, pause before deleting
                if (currString === "") {
                    isPaused.current = true;
                    setTimeout(() => {
                        isPaused.current = false;
                    }, pauseTime/4);
                }
            }

            setString(currString);
        }, isTyping.current ? typingSpeed * (Math.floor(Math.random() * 3) + 1) : typingSpeed / 2);

        return () => {
            clearInterval(typeInterval);
        }
    }, [string]);

    useEffect(() => {
        // Flashing cursor interval
        const cursorInterval = setInterval(() => {
            setCursorState(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="flex">
            <p className="text-white text-[35px] font-semibold font-black font-stretch-105%">{string}</p>
            {cursorState && <p className="text-[#915EFF] text-[35px] font-semibold font-black font-stretch-105%">|</p>}
        </div>
    );
}

export default Typewriter;