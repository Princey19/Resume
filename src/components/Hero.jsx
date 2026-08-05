import profilePic from "../assets/images/myPicture.jpg";
import profilePic2 from "../assets/images/pic2.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="section-padding flex items-center min-h-screen pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-48 h-40 rounded-full overflow-hidden border-4  shadow-2xl transition duration-500 hover:scale-105">
            <img
              src={profilePic2}
              alt="Profile Picture Placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-xl text-gray-400 mb-2">Hello, I'm</p>
            <h1 className="text-6xl font-extrabold mb-4 leading-tight">
              <span className="text-accent">Tammie</span>
            </h1>
            <h2 className="text-3xl font-light text-gray-300 mb-6">
              A passionate{" "}
              <span className="font-medium text-white">
                Full Stack Developer
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              I specialize in building scalable, high-performance web
              applications using modern frameworks.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="py-3 px-8 text-lg font-semibold rounded-lg bg-accent text-primary-dark transition duration-300 hover:bg-sky-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="py-3 px-8 text-lg font-semibold rounded-lg border-2 border-acent text-accent transition duration-300 hover:bg-accent/20"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
