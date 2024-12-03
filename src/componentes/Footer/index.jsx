import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://web.facebook.com/Maycoll.Andress.vq">
            <img src="/img/facebook.png" 
            alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/mayyccollandreess/">
            <img src="/img/instagram.png" 
            alt="Instagram" />
            </a>
        </div>
        <img src="/img/logo.png" alt="logo de la pagina org" />
        <strong>Desarrollado por Maycol Quinto</strong>
    </footer>
};

export default Footer;