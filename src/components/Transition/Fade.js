import { Fade } from "react-awesome-reveal";

const TFade = (props) => {
  return (
    <Fade className={props.className}>
      <section>{props.children}</section>
    </Fade>
  );
};

export default TFade;
