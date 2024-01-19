import propTypes from "prop-types";

const Header = ({ icon, title, className }) => {
  return (
    <div className={[className, "flex items-center gap-3"].join(" ")}>
      <div className="icon">{icon}</div>
      <h5 className="text-xl font-medium">{title}</h5>
    </div>
  );
};

export default Header;

Header.propTypes = {
  icon: propTypes.element.isRequired,
  title: propTypes.string.isRequired,
  className: propTypes.string,
};
