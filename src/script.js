window.addEventListener('scroll', function () {
  const header = document.querySelector('.header-images');
  const backgroundImage = document.querySelector('.header-image');
  const main = document.querySelector('.top-element');
  const scrollTop = window.scrollY;
  const headerNavigation = document.querySelector('.header-navigation');
  const mediaQuery1 = window.matchMedia("(max-width: 600px)");
  const mediaQuery2 = window.matchMedia("(min-width: 601px)");
  const windowHeight = window.innerHeight;

  let newHeight;

  if (mediaQuery2.matches) {
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