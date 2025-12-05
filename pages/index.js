import config from "@config/config.json";
import social from "@config/social.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Social from "@layouts/components/Social";
import { markdownify } from "@lib/utils/textConverter";

const Home = () => {
  const { name, image, designation, bio } = config.profile;

  return (
    <Base>
      {/* profile */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-8">
              <ImageFallback
                className="mx-auto rounded-full"
                src={image}
                width={220}
                height={220}
                priority={true}
                alt={name}
              />
              {markdownify(
                name,
                "h1",
                "mt-12 text-6xl lg:text-8xl font-semibold"
              )}
              {markdownify(designation, "p", "mt-6 text-primary text-xl")}
              {markdownify(bio, "p", "mt-4 leading-9 text-xl")}
              <Social source={social} className="profile-social-icons mt-8" />
            </div>
          </div>
        </div>
      </div>

      {/* projects */}
      <div className="section pt-4">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

              <div className="row">

                {/* Project 1 — Spotify Wrapped App */}
                <div className="col-12 mb-6 sm:col-6">
                  <div className="border p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-semibold mb-2">
                      Spotify Wrapped Mobile App
                    </h3>
                    <p className="mb-4">
                      A full-featured Android application that generates 
                      Spotify-style yearly listening analytics using Firebase, 
                      real-time sync, and interactive visualizations.
                      Built in a 4-person team for CS 2340.
                    </p>
                    <a
                      href="https://sites.google.com/view/2340project2lucas4"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline"
                    >
                      View Project →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;

// No more posts, so no static props needed
export const getStaticProps = async () => ({
  props: {},
});
