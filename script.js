document.getElementById("cancelEventDownload").addEventListener("click", function(event){
    event.preventDefault()
  });
  document.getElementById("cancelEventReload").addEventListener("click", function(event){
    event.preventDefault()
  });
document.addEventListener('DOMContentLoaded', function () {
    const darkSwitch = document.getElementById('darkSwitch');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-bs-theme', currentTheme);

        if (currentTheme === 'dark') {
            darkSwitch.checked = true;
        }
    }

    // меняем тему
    darkSwitch.addEventListener('change', function () {
        if (darkSwitch.checked) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
var loaderTimeout;

function loaderTime() {
    loaderTimeout = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("div").style.display = "block";
}