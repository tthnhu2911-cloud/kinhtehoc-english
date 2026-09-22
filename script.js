const MICRO = "https://learn.mru.org/courses/principles-of-microeconomics";
const MACRO = "https://learn.mru.org/courses/principles-of-macroeconomics";
const KEY = "economics_step1_completed";

const microBtn = document.getElementById("microBtn");
const macroBtn = document.getElementById("macroBtn");
const status1 = document.getElementById("step1Status");
const status2 = document.getElementById("step2Status");
const progress = document.getElementById("progress");
const shopeeBtn = document.getElementById("shopeeBtn");

function unlock() {
  microBtn.href = MICRO;
  macroBtn.href = MACRO;
  microBtn.classList.remove("locked");
  macroBtn.classList.remove("locked");
  microBtn.setAttribute("aria-disabled", "false");
  macroBtn.setAttribute("aria-disabled", "false");
  status1.textContent = "✓ Đã hoàn thành bước 1";
  status1.className = "status done";
  status2.textContent = "✓ Bạn có thể chọn một trong hai khóa học";
  status2.className = "status done";
  progress.textContent = "2/2 bước";
}

shopeeBtn.addEventListener("click", () => {
  localStorage.setItem(KEY, "true");
  unlock();
});

[microBtn, macroBtn].forEach(btn => {
  btn.addEventListener("click", e => {
    if (btn.classList.contains("locked")) {
      e.preventDefault();
      alert("Vui lòng mở liên kết ở Bước 1 trước.");
    }
  });
});

if (localStorage.getItem(KEY) === "true") unlock();
