import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='container footer-grid'>

                {/* Brand */}
                <div className='footer-brand'>
                    <h3>Zharah SD Initiative Foundation</h3>
                    <p>
                        Empowering young women through education, healthcare,
                        hygiene awareness, and skill development.
                    </p>
                </div>

                {/* Links */}
                <div className='footer-links'>
                    <h4>Quick Links</h4>
                </div>
            </div>
        </footer>
    )
}
export default Footer