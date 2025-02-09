import { Link } from "react-router-dom";

const Footer = () => {
  // Footer Links
  const footerLinks = [
    {
      id: 1,
      title: "Docs",
      target: "/",
    },
    {
      id: 2,
      title: "Discord",
      target: "/",
    },
    {
      id: 3,
      title: "Terms",
      target: "/",
    },
    {
      id: 4,
      title: "Policy",
      target: "/",
    },
  ];

  return (
    <div className="w-full bg-themeBlue">
      <div className="custom-container">
        {/* Wrapper */}
        <div className="flex items-center justify-between w-full h-8">
          {/* left */}
          <div>
            <p className="text-xs text-white">$1,200,000.1928 TVL</p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
            {footerLinks.map(({ id, target, title }) => (
              <Link key={id} to={target} className="text-xs text-white">
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
