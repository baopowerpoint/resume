const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " With over 12 years of working as a senior leader in different
                companies, and have worked on my personal projects, I’m
                confident about my professional skills, unique sense of beauty
                and my soft skills what has helped me impress my networking by
                putting my heart and soul into every single task that I am
                incharge, and learn how we want to work effectively and develop
                ourselves; carefulness is very important. "
              </span>
              <span className="person">Anh Xuan</span>
              <span className="job">
                Global trade - Management - Trainer Senior Trader
              </span>
            </p>
            <img src="assets/testimonials/testmonial.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " My missions are helping you to make the right choices, give
                you more power to gain your success: ‘Nothing is impossible.’ "
              </span>
              <span className="person">Anh Xuan</span>
              <span className="job">
                Global trade - Management - Trainer Senior Trader
              </span>
            </p>
            <img src="assets/testimonials/testmonial.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
