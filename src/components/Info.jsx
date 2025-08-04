export default function Info() {
    return(
        <header>
            <img src="/src/assets/cover.jpg" alt="cover image" />
            <div className="info">
                <h1 className="name">Salhi Rayene</h1>
                <p className="role">Fullstack Developer</p>
                <p className="location">Tunis, Tunisia</p>
                <div className="social-links">
                    <a href="#" className="gmail">
                        <i className="fa-solid fa-envelope"></i>
                        Email
                    </a>
                    <a href="#" className="linkedin">
                        <i className="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    )
}