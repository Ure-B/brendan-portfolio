

function Header() {

    return (
        <div>
            <nav class="fixed top-0 right-0 left-0 p-5">
                <div class="flex justify-between pl-10">
                    <a href="/brendan-portfolio">
                        <p>Brendan Ure</p>
                    </a>
                    <ul class="flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;