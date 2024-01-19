import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import propTypes from "prop-types";
import useResizedWidth from "./useResizedWidth";

const calculateValueFromWidth = (
  value,
  step,
  minValue,
  maxValue,
  truckWidth
) => {
  return Math.floor((minValue + (value / truckWidth) * maxValue) / step) * step;
};

const calculateWidthFromValue = (
  value,
  step,
  minValue,
  maxValue,
  truckWidth
) => {
  const val = value < minValue ? minValue : value;
  const result = ((Math.floor(val / step) * step) / maxValue) * truckWidth;
  return result > truckWidth ? truckWidth : result;
};

const InputRange = (props) => {
  const { value, min, max, step, onChange } = props;
  const [truckRef, truckWidth] = useResizedWidth();
  const [thumbRef, thumbWidth] = useResizedWidth();

  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const widthX = useTransform(x, (value) => {
    //console.log(`truck:${truckWidth}, thumb:${thumbWidth}`);
    return value + thumbWidth;
  });

  useEffect(() => {
    const width = calculateWidthFromValue(value, step, min, max, truckWidth);
    x.set(width);
    // console.log(
    //   `value:${value}, step:${step}, min:${min}, max:${max}, truck:${truckWidth}, thumb:${thumbWidth}`
    // );
  }, [value, step, min, max, truckWidth]);

  const handleDrag = (event, info) => {
    const val = calculateValueFromWidth(x.get(), step, min, max, truckWidth);
    onChange && onChange(val);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative h-2 w-full rounded-full bg-[#D1D1D1] px-2"
    >
      <motion.div ref={truckRef} className="relative w-full">
        <motion.span
          ref={thumbRef}
          tabIndex={0}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag}
          className="absolute top-0 z-10 -mt-2 -ml-2 h-6 w-2 cursor-pointer bg-[#4D4D4D] shadow"
          style={{ x }}
        />
      </motion.div>
      <motion.span
        className="absolute top-0 left-0 h-2 rounded-full bg-primary-yellow"
        style={{ width: widthX }}
      />
    </motion.div>
  );
};

export default InputRange;

InputRange.defaultProps = {
  value: 0,
  step: 0.1,
};

InputRange.propTypes = {
  value: propTypes.number,
  step: propTypes.number,
  min: propTypes.number.isRequired,
  max: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
};
