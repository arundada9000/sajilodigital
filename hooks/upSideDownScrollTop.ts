//  add some method for users who are using mobile while laying down
// import { useEffect } from "react";

// const useUpsideDownScrollTop = () => {
//   const coolDown = 0;
//   useEffect(() => {
//     let lastTriggered = 0; // debounce to prevent multiple triggers

//     const handleOrientation = (event: DeviceOrientationEvent) => {
//       const beta = event.beta; // front-back tilt (-180 to 180)

//       // Check if phone is upside down
//       if (beta !== null && (beta < -150 || beta > 150)) {
//         const now = Date.now();
//         if (now - lastTriggered > coolDown) {
//           // 1 second cooldown
//           window.scrollTo({ top: 0, behavior: "smooth" });
//           lastTriggered = now;
//         }
//       }
//     };

//     // Request permission for iOS 13+ devices
//     const enableOrientation = () => {
//       if (
//         typeof DeviceOrientationEvent !== "undefined" &&
//         typeof DeviceOrientationEvent.requestPermission === "function"
//       ) {
//         DeviceOrientationEvent.requestPermission()
//           .then((response) => {
//             if (response === "granted") {
//               window.addEventListener("deviceorientation", handleOrientation);
//             }
//           })
//           .catch(console.error);
//       } else {
//         window.addEventListener("deviceorientation", handleOrientation);
//       }
//     };

//     enableOrientation();

//     // Cleanup
//     return () => {
//       window.removeEventListener("deviceorientation", handleOrientation);
//     };
//   }, []);
// };

// export default useUpsideDownScrollTop;

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
