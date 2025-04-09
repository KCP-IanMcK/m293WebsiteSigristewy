window.addEventListener('scroll', function () {
  const header = document.querySelector('.header-images');
  const backgroundImage = document.querySelector('.header-image');
  const main = document.querySelector('.top-element');
  const scrollTop = window.scrollY;
  const headerNavigation = document.querySelector('.header-navigation');
  const mediaQuery1 = window.matchMedia("(max-width: 1200px)");
  const mediaQuery2 = window.matchMedia("(min-width: 1201px)");
  const mediaQuery3 = window.matchMedia("(min-width: 1200px) and (max-width: 1600px)");
  const windowHeight = window.innerHeight;

  let newHeight;

   if (mediaQuery3.matches) {
          newHeight = windowHeight * 0.45 - scrollTop;
          if (newHeight < windowHeight * 0.18) {
              newHeight = windowHeight * 0.18;
          }
    } else if (mediaQuery2.matches) {
    newHeight = windowHeight * 0.6 - scrollTop;
    if (newHeight < windowHeight * 0.18) {
        newHeight = windowHeight * 0.18;
    }
  } else {
    newHeight = windowHeight * 0.2 - scrollTop;
    if (newHeight < windowHeight * 0.1) {
        newHeight = windowHeight * 0.1;
    }
  }

  if (newHeight > backgroundImage.height) {
  newHeight = backgroundImage.height;
  }

  header.style.height = `${newHeight}px`;
  headerNavigation.style.marginTop = `${newHeight}px`;
});

function navigate(url) {
window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
const scrollLeftWhitewine = document.getElementById('scroll-left-whitewine');
const scrollLeftRedwine = document.getElementById('scroll-left-redwine');
const scrollRightWhitewine = document.getElementById('scroll-right-whitewine');
const scrollRightRedwine = document.getElementById('scroll-right-redwine');
const scrollContainerWhitewine = document.getElementById('scroll-container-whitewine');
const scrollContainerRedwine = document.getElementById('scroll-container-redwine');

scrollLeftWhitewine.addEventListener('click', () => {
    scrollContainerWhitewine.scrollLeft -= 400;
})

scrollRightWhitewine.addEventListener('click', () => {
    scrollContainerWhitewine.scrollLeft += 400;
})

scrollLeftRedwine.addEventListener('click', () => {
    scrollContainerRedwine.scrollLeft -= 400;
})

scrollRightRedwine.addEventListener('click', () => {
    scrollContainerRedwine.scrollLeft += 400;
})
})