import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

const Contact = () => {
  return(
    <section className="section section--soft" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connect and Support</h2>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <FaMapMarkerAlt className="contact-icon"/>
            <h3>Address</h3>
            <p>Kaduna, Nigeria</p>
          </article>

          <article className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p></p>
          </article>

          <article className='contact-card'>
            <FaPhone className='contact-icon'/>
            <h3>Phone</h3>
            <p></p>
          </article>
        </div>
        <div className="social-section">
          <h3 className='social-title'>Follow Us</h3>

          <div className='social-icons'>
            <a href="#" target='_blank' rel='noreferrer'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact