"use strict";

const SHOPEE_URL = "https://s.shopee.vn/8V97ofGLqA";

const courses = [
  { id: "quansuBtn", url: "https://docs.google.com/spreadsheets/d/10aOEOAeB5oTOF6XHuRdF-ykHII4BXWcgyfNTCIyqt-M/htmlview" },
  { id: "microBtn", url: "https://learn.mru.org/courses/principles-of-microeconomics" },
  { id: "macroBtn", url: "https://learn.mru.org/courses/principles-of-macroeconomics" },
  { id: "quantriBtn", url: "https://docs.google.com/document/d/143zer9A0yGyKXV3N2ilX7UyrnUtIdPcYMDiPofEVys0/edit?tab=t.0" },
  { id: "ketoanBtn", url: "https://docs.google.com/document/d/1X30JybYNzF7xjeOGHGDy_WR2xVajP_ABMdYv2jD7JIM/edit?tab=t.0" },
  { id: "marketingEnBtn", url: "https://drive.google.com/drive/folders/1D4pvIdn85KiT2Z89T6MRTrU6EJS6lWG-" },
  { id: "marketingViBtn", url: "https://docs.google.com/document/d/1K-MbauTEHy2rQHkVZQy9Zy5teUuwjkGSArsKkjjp1DM/edit?tab=t.x7g0hyt7bk8x" },
  { id: "taichinhEnBtn", url: "https://docs.google.com/document/d/1g2iM0VSOQev9-5A388sk-8Ombcu4BERgQY-LGR24-Qo/edit?tab=t.0" },
  { id: "taichinhViBtn", url: "https://drive.google.com/drive/folders/13HS6m-r_OZwdeF7-sVdWEBtwyu7HmwZd" },
  { id: "phapluatBtn", url: "https://drive.google.com/drive/folders/1aaXbvJj27Xp1jKBgA_06kY3MCzqJ2HM_" },
  { id: "taKinhDoanhBtn", url: "https://docs.google.com/document/d/1exBtqzhxWZ6xP4I8fdDsXi21kddKO3tQJdvO0EVWjgk/edit?tab=t.0" },
  { id: "taKinhDoanhNCBtn", url: "https://docs.google.com/document/d/11Z-fS5fAntm9aIHmRqxwOivW3XCHrVkLMASwIBeNW1E/edit?tab=t.ushyi9bvpgb" }
];

const shopeeBtn = document.getElementById("shopeeBtn");
const status1 = document.getElementById("step1Status");
const status2 = document.getElementById("step2Status");
const progress = document.getElementById("progress");

function setLockedState() {
  courses.forEach(({ id }) => {
    const button = document.getElementById(id);
    if (!button) {
      console.error(`Không tìm thấy phần tử #${id}`);
      return;
    }

    button.href = "#";
    button.removeAttribute("target");
    button.removeAttribute("rel");
    button.classList.add("locked");
    button.setAttribute("aria-disabled", "true");
  });

  if (status1) {
    status1.textContent = "Chưa hoàn thành bước 1";
    status1.className = "status";
  }
  if (status2) {
    status2.textContent = "Tài liệu đang bị khóa";
    status2.className = "status muted";
  }
  if (progress) progress.textContent = "0/2 bước";
}

function unlockCourses() {
  courses.forEach(({ id, url }) => {
    const button = document.getElementById(id);
    if (!button) return;

    button.href = url;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.classList.remove("locked");
    button.setAttribute("aria-disabled", "false");
  });

  if (status1) {
    status1.textContent = "✓ Đã nhấn truy cập Shopee";
    status1.className = "status done";
  }
  if (status2) {
    status2.textContent = "✓ Đã mở khóa 12 tài liệu";
    status2.className = "status done";
  }
  if (progress) progress.textContent = "2/2 bước";
}

if (shopeeBtn) {
  shopeeBtn.href = SHOPEE_URL;
  shopeeBtn.target = "_blank";
  shopeeBtn.rel = "noopener noreferrer";

  // Mở khóa trên trang hiện tại ngay khi người dùng nhấn liên kết.
  shopeeBtn.addEventListener("click", unlockCourses);
} else {
  console.error("Không tìm thấy nút #shopeeBtn");
}

// Ngăn truy cập tài liệu trước khi mở khóa.
courses.forEach(({ id }) => {
  const button = document.getElementById(id);
  if (!button) return;

  button.addEventListener("click", (event) => {
    if (button.classList.contains("locked")) {
      event.preventDefault();
      alert("Em hãy nhấn 'Truy cập Shopee' ở Bước 1 trước nhé!");
    }
  });
});

setLockedState();
