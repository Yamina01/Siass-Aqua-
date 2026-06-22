
import "./OurStory.css";
import ourstoryimg from "../../assets/images/OurStoryImage.png"

const OurStory = () => {
  return (
    <section className="our-story">

      <div className="container story-container">

        {/* LEFT */}

        <div
  className="story-image"
  data-aos="fade-right"
>

  <img
  src={ourstoryimg}
  alt="OurStoryImage"
  />

</div>

        {/* RIGHT */}

        <div
          className="story-content"
          data-aos="fade-left"
        >

          <span className="story-subtitle">
            Our Story
          </span>

          <h2>
            Delivering Clean Water Solutions Since 2005
          </h2>

          <p>
            Founded with a commitment to providing safe and
            reliable water, Siass Aqua has spent more than
            two decades serving homes, hospitals, schools,
            offices and industries across South India.
          </p>

          <p>
            From residential RO systems to industrial water
            treatment plants, we continue to deliver quality
            products backed by professional installation and
            dedicated after-sales support.
          </p>

        </div>

      </div>

    </section>
  );
};

export default OurStory;
