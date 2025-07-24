import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./public/assets/images/bg.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            First React and Supbase Project, Implementing Crud
          </p>
          <button className="btn btn-primary" onClick={handleNavigate}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
