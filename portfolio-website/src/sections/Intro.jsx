import Typewriter from "../components/Typewriter";

function Intro() {
    return (
        <div>
            <div className="w-screen h-screen relative z-0 bg-cover bg-no-repeat bg-center bg-[url('/background1.png')]">
                <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
                    <h1 className="font-black text-[40px]">*</h1>
                    <div>
                        <h1 className="font-black text-[80px]">Hi, I'm <span className="text-[#915EFF]">Brendan</span></h1>
                        <div className="absolute text-left items-start flex flex-col gap-1 leading-10">
                            <p className="text-white text-[35px] font-semibold font-black font-stretch-105%">I do</p>
                            <Typewriter/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;