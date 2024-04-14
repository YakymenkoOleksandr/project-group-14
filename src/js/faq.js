const titles = document.querySelectorAll('.accordion-title');
const contents = document.querySelectorAll('.accordion-content');

titles.forEach(item => item.addEventListener('click', () => {
  const activeContent = document.querySelector('#' + item.dataset.tab);

  if(activeContent.classList.contains('active')) {
    activeContent.classList.remove('active');

    activeContent.style.maxHeight = 0;
  } else {
    contents.forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
    })
    titles.forEach(element => element.classList.remove('active'));

    item.classList.add('active');
    activeContent.classList.add('active');
    activeContent.style.maxHeight = activeContent.scrollHeight +'px';
  }
}))