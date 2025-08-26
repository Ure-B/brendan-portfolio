

function Header() {

    return (
        <div>
            <nav class="fixed z-10 top-0 right-0 left-0 p-4 bg-[#060816]">
                <div class="flex justify-between pl-30 pr-30">
                    <a href="/brendan-portfolio">
                        <p class="text-white cursor-pointer text-[20px] font-extrabold font-sans font-stretch-105%">BRENDAN URE</p>
                    </a>
                    <ul class="flex gap-6">
                        <li class="text-white cursor-pointer text-[20px] font-semibold font-sans font-stretch-105%">About</li>
                        <li class="text-white cursor-pointer text-[20px] font-semibold font-sans font-stretch-105%">Work</li>
                        <li class="text-white cursor-pointer text-[20px] font-semibold font-sans font-stretch-105%">Contact</li>
                        <li class="text-white cursor-pointer text-[20px] font-semibold font-sans font-stretch-105%">Resume</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;