export function horizontalScroll() {
  const onWheel = (e) => {
    e.preventDefault();
    var container = document.getElementById("container");
    var bgImgContainer = document.getElementById("bgImgdiv");
    var infoContainer_1 = document.getElementById("infoContainer_1");
    var infoContainer_2 = document.getElementById("infoContainer_2");
    var containerPosition = container?.scrollLeft;
    var bgImgContainerPosition = bgImgContainer.scrollLeft;
    var infoContainer_1Position = infoContainer_1.scrollLeft;
    var infoContainer_2Position = infoContainer_2.scrollLeft;

    var windowPosition = window.pageYOffset;
    var windowWidth = window.innerWidth;
    var windowHeight = document.body.scrollHeight;

    //thresHold
    // var thresHold = 1000;
    // var thresHold2 = 1000;
    // var thresHold3 = 2000;
    var thresHold = 700;
    var thresHold2 = 700;
    var thresHold3 = 1500;
    if (windowWidth < 1600) {
      thresHold = 500;
    }

    const heightThreshold1 = windowHeight / 4 - 100;
    const heightThreshold2 = (2 * windowHeight) / 4 - 300;
    const heightThreshold3 = (3 * windowHeight) / 4 - 400;
    // var heightThreshold4 = windowHeight;

    //scroll value
    const scrollVal = e.deltaY / 15;

    console.log(windowWidth);

    //scrollFunction
    if (windowPosition === 0) {
      if (e.deltaY > 0 && containerPosition > thresHold) {
        windowScroll(e);
      } else {
        container.scrollTo({
          top: 0,
          left: containerPosition + scrollVal,
          behaviour: "smooth",
        });
        bgImgContainer.scrollTo({
          top: 0,
          left: bgImgContainerPosition + scrollVal,
          behaviour: "smooth",
        });
      }
    } else if (
      windowPosition > heightThreshold1 &&
      windowPosition < heightThreshold2
    ) {
      if (infoContainer_1Position === 0 && e.deltaY < 0) {
        windowScroll(e);
      } else {
        if (e.deltaY > 0 && infoContainer_1Position > thresHold2) {
          windowScroll(e);
        }
        infoContainer_1.scrollTo({
          left: infoContainer_1Position + scrollVal,
          behaviour: "smooth",
        });
      }
    } else if (
      windowPosition > heightThreshold2 &&
      windowPosition < heightThreshold3
    ) {
      if (infoContainer_2Position === 0 && e.deltaY < 0) {
        windowScroll(e);
      } else {
        if (e.deltaY > 0 && infoContainer_2Position > thresHold3) {
          windowScroll(e);
        }
        infoContainer_2.scrollTo({
          left: infoContainer_2Position + scrollVal,
          behaviour: "smooth",
        });
      }
      // windowScroll(e);
    } else if (windowPosition > heightThreshold3) {
      windowScroll(e);
    } else {
      windowScroll(e);
    }
  };

  //windowScrollFunction
  function windowScroll(e) {
    var windowPosition = window.pageYOffset;
    window.scrollTo({
      top: windowPosition + e.deltaY * 2,
      behavior: "smooth",
    });
  }

  window.addEventListener("wheel", onWheel, { passive: false });
}
