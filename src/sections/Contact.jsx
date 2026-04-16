const Contact = () => {
  return (
    <section className="section section--soft" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connect and Support</h2>
          <p className="section-copy">
            The contact area was still empty, so I turned it into a clear call-to-action section
            you can later connect to real contact details, donation links, or a form backend.
          </p>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <h3>Get Involved</h3>
            <p id="donate">
              Invite donors, volunteers, and partners to collaborate with your programs and help
              scale community impact.
            </p>
          </article>

          <article className="contact-card">
            <h3>Next Step</h3>
            <p>
              Add your official email, phone number, donation page, and social links here when
              you are ready.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
