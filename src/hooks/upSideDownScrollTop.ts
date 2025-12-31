import { useEffect } from "react";

const useRotateToScrollTop = () => {
  useEffect(() => {
    let lastBeta: number | null = null;
    let lastTriggered = 0;

    const ROTATION_DELTA = 45; // degrees of movement needed
    const COOLDOWN = 1500; // ms

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta == null) return;

      const beta = event.beta;
      const now = Date.now();

      if (lastBeta !== null) {
        const delta = beta - lastBeta;

        // Detect strong forward rotation
        if (
          Math.abs(delta) > ROTATION_DELTA &&
          now - lastTriggered > COOLDOWN
        ) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          lastTriggered = now;
        }
      }

      lastBeta = beta;
    };

    const enableOrientation = async () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        // @ts-ignore
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        try {
          const res = await (DeviceOrientationEvent as any).requestPermission();
          if (res === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    enableOrientation();

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);
};

export default useRotateToScrollTop;
