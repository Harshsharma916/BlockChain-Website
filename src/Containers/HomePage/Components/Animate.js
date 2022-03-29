// import { useRef, useEffect } from "react";

// export function useHorizontalScroll() {
//   const elRef = useRef();
//   useEffect(() => {
//     const el = elRef.current;
//     if (el) {
//       const onWheel = (e) => {
//         if (e.deltaY == 0) return;
//         e.preventDefault();
//         el.scrollTo({
//           left: el.scrollLeft + e.deltaY * 10,
//           behavior: "smooth",
//         });
//       };
//       el.addEventListener("wheel", onWheel);
//       if (el.scrollLeft > 800) {
//         console.log("HARHS");
//         return () => el.removeEventListener("wheel", onWheel);
//       }
//     }
//   }, []);
//   return elRef;
// }

export function horizontalScroll() {
  const onWheel = (e) => {
    e.preventDefault();
    var container = document.getElementById("container");
    var bgImgContainer = document.getElementById("bgImgdiv");
    var infoContainer_1 = document.getElementById("infoContainer_1");
    var containerPosition = container.scrollLeft;
    var bgImgContainerPosition = bgImgContainer.scrollLeft;
    var infoContainer_1Position = infoContainer_1.scrollLeft;

    var windowPosition = window.pageYOffset;
    var windowWidth = window.innerWidth;
    var thresHold = 740;

    if (windowPosition === 0) {
      if(windowWidth < 2000){
        thresHold = 750;
      }

      if (e.deltaY > 0 && containerPosition > thresHold) {
        window.scrollTo({
          top: windowPosition + e.deltaY * 8,
          behavior: "smooth",
        });
      } else {
        container.scrollTo({
          top: 0,
          left: containerPosition + e.deltaY / 7,
          behaviour: "smooth",
        });
        bgImgContainer.scrollTo({
          top: 0,
          left: bgImgContainerPosition + e.deltaY / 7,
          behaviour: "smooth",
        });
      }
    } else if(windowPosition>950) {
      if(infoContainer_1Position === 0 && e.deltaY<0){
        window.scrollTo({
          top: windowPosition + e.deltaY * 8,
          behavior: "smooth",
        });
      }else{
        infoContainer_1.scrollTo({
          left: infoContainer_1Position + e.deltaY / 7,
          behaviour: "smooth",
        });
      }
    }else{
      // console.log(windowPosition)
      window.scrollTo({
        top: windowPosition + e.deltaY * 8,
        behavior: "smooth",
      });
    }
  };
  window.addEventListener("wheel", onWheel, { passive: false });
}
