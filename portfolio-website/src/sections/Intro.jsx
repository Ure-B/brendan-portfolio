

function Intro() {

    return (
        <div>
            <div class="w-screen h-screen relative z-0 bg-cover bg-no-repeat bg-center bg-[url('/background1.png')]">
                <div class="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
                    <h1 class="font-black text-[40px]">*</h1>
                    <h1 class="font-black text-[80px]">Hi, I'm <span class="text-[#915EFF]  ">Brendan</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Intro;