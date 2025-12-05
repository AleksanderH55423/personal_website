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

      {/* skills */}
      <div className="section pt-4">
        <div className="container">
          <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

          <div className="row justify-center text-center">

            {/* Column 1 */}
            <div className="col-12 sm:col-4 mb-6">
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <ul className="text-lg leading-relaxed">
                <li>Python</li>
                <li>Java</li>
                <li>TypeScript / JavaScript</li>
                <li>C / C++</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col-12 sm:col-4 mb-6">
              <h3 className="text-2xl font-semibold mb-4">Technologies</h3>
              <ul className="text-lg leading-relaxed">
                <li>React / Next.js</li>
                <li>Node.js</li>
                <li>Firebase</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-12 sm:col-4 mb-6">
              <h3 className="text-2xl font-semibold mb-4">AI & ML</h3>
              <ul className="text-lg leading-relaxed">
                <li>Transformer Models</li>
                <li>Scikit-learn</li>
                <li>OpenAI API</li>
                <li>Data Pipelines</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </Base>
  );
};

export default Home;

export const getStaticProps = async () => ({
  props: {},
});
