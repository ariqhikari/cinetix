import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import ProgressBar from "@ramonak/react-progress-bar";

// assets
import * as animationData from "assets/animations/loading.json";

const LoadingScreen = () => {
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [loadTime, setLoadTime] = useState(0);
  const [loadingInterval, setLoadingInterval] = useState(null);
  const [completed, setCompleted] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const doProgress = () => {
    let step = loadTime / 100;
    console.log(step);
    setLoadingInterval(
      setInterval(() => {
        setLoadingPercent((state) => state++);
      }, step)
    );
  };

  useEffect(() => {
    let perfData = window.PerformanceNavigationTiming;
    let estimatedTime = Math.abs(
      perfData.loadEventEnd - perfData.navigationStart
    );

    setLoadTime(parseInt((1000000 / 1000) % 60) * 100);
    doProgress();
  }, []);

  useEffect(() => {
    console.log(loadingPercent);
    if (loadingPercent >= 100) {
      setTimeout(() => {
        // document.body.classList.remove("overflow-hidden");
        // document
        //   .querySelector(".loading-screen .container")
        //   .classList.add("no-active");
        // document
        //   .querySelector(".loading-screen .copyright")
        //   .classList.add("no-active");

        setTimeout(() => {
          setCompleted(true);
          clearInterval(loadingInterval);
        }, 250);
      }, 750);
    }
  }, [loadingPercent]);

  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
      <Lottie options={defaultOptions} height={500} width={500} />
      <ProgressBar
        completed={loadingPercent}
        className="w-full"
        borderRadius="0"
        height="3px"
        isLabelVisible={false}
        baseBgColor="none"
        bgColor="#F4AE00"
      />
    </div>
  );
};

export default LoadingScreen;
