export function horizontalScroll() {
  const onWheel = (e) => {
    e.preventDefault();
    var container = document.getElementById("container");
    var bgImgContainer = document.getElementById("bgImgdiv");
    var infoContainer_1 = document.getElementById("infoContainer_1");
    var infoContainer_2 = document.getElementById("infoContainer_2");
    var containerPosition = container.scrollLeft;
    var bgImgContainerPosition = bgImgContainer.scrollLeft;
    var infoContainer_1Position = infoContainer_1.scrollLeft;
    var infoContainer_2Position = infoContainer_2.scrollLeft;

    var windowPosition = window.pageYOffset;
    var windowWidth = window.innerWidth;
    var windowHeight = document.body.scrollHeight;

    //thresHold
    var thresHold = 740;
    var thresHold2 = 800;
    if (windowWidth < 2000) {
      thresHold = 750;
      thresHold2 = 500;
    }
    var heightThreshold1 = windowHeight / 4 - 100;
    var heightThreshold2 = (2 * windowHeight) / 4 - 300;
    var heightThreshold3 = (3 * windowHeight) / 4 - 400;
    // var heightThreshold4 = windowHeight;

    //scrollFunction
    if (windowPosition === 0) {
      if (e.deltaY > 0 && containerPosition > thresHold) {
        windowScroll(e);
      } else {
        container.scrollTo({
          top: 0,
          left: containerPosition + e.deltaY / 5,
          behaviour: "smooth",
        });
        bgImgContainer.scrollTo({
          top: 0,
          left: bgImgContainerPosition + e.deltaY / 5,
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
          left: infoContainer_1Position + e.deltaY / 5,
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
        if (e.deltaY > 0 && infoContainer_2Position > 1500) {
          windowScroll(e);
        }
        infoContainer_2.scrollTo({
          left: infoContainer_2Position + e.deltaY / 5,
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
    // console.log(windowPosition);
    window.scrollTo({
      top: windowPosition + e.deltaY * 5,
      behavior: "smooth",
    });
  }

  window.addEventListener("wheel", onWheel, { passive: false });
}
