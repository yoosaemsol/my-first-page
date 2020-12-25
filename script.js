const about = document.querySelector(".about");
const sections = about.querySelectorAll("div");
const quickIconContainer = document.querySelector(".quick-icons");
const icons = quickIconContainer.querySelectorAll("li");

const homeIcon = icons[0].firstChild;
homeIcon.addEventListener("click", () => {
  icons.forEach((icon) => icon.classList.remove("icon-active"));
});

const options = {
  root: null, //default : viewport .. 부모컨테이너를 지정해줄 수 있다.
  rootMargin: `0px`, //마진을 주면, 내가 보는 화면보다 기준영역이 그 만큼 더 늘어나게된다.
  threshold: 0.5, //얼마만큼 보여져야 콜백함수를 호출할지 결정  0~1 줄 수 있다.
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      switch (entry.target.id) {
        case "about__age":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[1].classList.add("icon-active");
          break;
        case "about__traveling":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[2].classList.add("icon-active");
          break;

        case "about__concert":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[3].classList.add("icon-active");
          break;
        case "about__major":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[4].classList.add("icon-active");
          break;
        case "about__graduate":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[5].classList.add("icon-active");
          break;
        case "about__wecode":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          icons[6].classList.add("icon-active");
          break;
        default:
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          break;
      }
    } else {
      //   console.error(entry.target);
      switch (entry.target.id) {
        case "about__age":
          icons.forEach((icon) => icon.classList.remove("icon-active"));
          break;
      }
    }
  });
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section)); //section들을 관찰자가 관찰하도록 명령

// aside On and Off
// at footer
const footerOptions = {
  threshold: 0.5,
};

const handleFooter = (entries) => {
  if (entries[0].isIntersecting) {
    quickIconContainer.classList.add("show-off");
  } else {
    quickIconContainer.classList.remove("show-off");
  }
};

const footerObserver = new IntersectionObserver(handleFooter, footerOptions);
const footer = document.querySelector("footer");
footerObserver.observe(footer);

//at header
const home = document.querySelector(".home");
const homeOptions = {
  threshold: 0.8,
};

const handleHome = (entries) => {
  if (entries[0].isIntersecting) {
    quickIconContainer.classList.add("show-off");
  } else {
    quickIconContainer.classList.remove("show-off");
  }
};

const headerObserver = new IntersectionObserver(handleHome, homeOptions);
headerObserver.observe(home);
