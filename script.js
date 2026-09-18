// Mo va dong menu tren dien thoai
var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.menu');

menuButton.addEventListener('click', function () {
  menu.classList.toggle('show-menu');
});

// Doi giao dien sang/toi
var themeButton = document.querySelector('.theme-button');

themeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});

// Loc du an theo tu khoa va the loai
var search = document.querySelector('#search');
var filterButtons = document.querySelectorAll('.filter-button');
var projects = document.querySelectorAll('.project');

function filterProjects() {
  var keyword = search.value.toLowerCase();
  var activeFilter = document.querySelector('.filter-button.active');
  var category = activeFilter.getAttribute('data-category');

  projects.forEach(function (project) {
    var projectName = project.getAttribute('data-name').toLowerCase();
    var projectCategory = project.getAttribute('data-category');
    var hasKeyword = projectName.includes(keyword);
    var hasCategory = category === 'all' || category === projectCategory;

    project.style.display = hasKeyword && hasCategory ? 'block' : 'none';
  });
}

search.addEventListener('input', filterProjects);

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (item) {
      item.classList.remove('active');
    });

    button.classList.add('active');
    filterProjects();
  });
});

// Dem so ky tu trong tin nhan
var message = document.querySelector('#message');
var characterCount = document.querySelector('#character-count');

message.addEventListener('input', function () {
  characterCount.textContent = message.value.length + '/300 ký tự';
});

// Kiem tra form
var form = document.querySelector('#contact-form');
var formResult = document.querySelector('#form-result');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.querySelector('#name').value.trim();
  var email = document.querySelector('#email').value.trim();
  var emailIsValid = email.includes('@') && email.includes('.');

  if (name.length < 2) {
    formResult.textContent = 'Tên phải có ít nhất 2 ký tự.';
    return;
  }

  if (!emailIsValid) {
    formResult.textContent = 'Email chưa đúng định dạng.';
    return;
  }

  if (message.value.trim().length < 10) {
    formResult.textContent = 'Tin nhắn phải có ít nhất 10 ký tự.';
    return;
  }

  formResult.textContent = 'Gửi liên hệ thành công!';
  form.reset();
  characterCount.textContent = '0/300 ký tự';
});

// Hien thi nam hien tai
 document.querySelector('#year').textContent = new Date().getFullYear();
