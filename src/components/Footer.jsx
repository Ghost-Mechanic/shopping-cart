import '../styles/footer.css';

function Footer() {
    return (
        <>
            <footer>
                <h1 className="title">Questions? Comments?</h1>
                <h2 className="contact" tabIndex="0">Contact Us</h2>
                <ul className="contact-list">
                    <li tabIndex="0">123-456-7890</li>
                    <li tabIndex="0">ghostshop@gmail.com</li>
                </ul>
                <div className="credits">
                    <a href="https://www.flaticon.com/free-icons/smart-cart" title="smart cart icons">Cart Icon created by Freepik - Flaticon</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;