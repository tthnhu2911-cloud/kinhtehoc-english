
"use strict";

// ========================================
// 1. LINK TÀI LIỆU
// ========================================

const MICRO =
    "https://learn.mru.org/courses/principles-of-microeconomics";

const MACRO =
    "https://learn.mru.org/courses/principles-of-macroeconomics";

const QUANTRI =
    "https://docs.google.com/document/d/143zer9A0yGyKXV3N2ilX7UyrnUtIdPcYMDiPofEVys0/edit?tab=t.0";

const KETOAN =
    "https://docs.google.com/document/d/1X30JybYNzF7xjeOGHGDy_WR2xVajP_ABMdYv2jD7JIM/edit?tab=t.0";

const MARKETING_EN =
    "https://drive.google.com/drive/folders/1D4pvIdn85KiT2Z89T6MRTrU6EJS6lWG-";

const MARKETING_VI =
    "https://docs.google.com/document/d/1K-MbauTEHy2rQHkVZQy9Zy5teUuwjkGSArsKkjjp1DM/edit?tab=t.x7g0hyt7bk8x";

const TAICHINH_EN =
    "https://docs.google.com/document/d/1g2iM0VSOQev9-5A388sk-8Ombcu4BERgQY-LGR24-Qo/edit?tab=t.0";

const TAICHINH_VI =
    "https://drive.google.com/drive/folders/13HS6m-r_OZwdeF7-sVdWEBtwyu7HmwZd";


// ========================================
// 2. LẤY CÁC PHẦN TỬ HTML
// ========================================

const microBtn = document.getElementById("microBtn");
const macroBtn = document.getElementById("macroBtn");
const quantriBtn = document.getElementById("quantriBtn");
const ketoanBtn = document.getElementById("ketoanBtn");

const marketingEnBtn =
    document.getElementById("marketingEnBtn");

const marketingViBtn =
    document.getElementById("marketingViBtn");

const taichinhEnBtn =
    document.getElementById("taichinhEnBtn");

const taichinhViBtn =
    document.getElementById("taichinhViBtn");

const shopeeBtn = document.getElementById("shopeeBtn");

const status1 = document.getElementById("step1Status");
const status2 = document.getElementById("step2Status");
const progress = document.getElementById("progress");


// ========================================
// 3. DANH SÁCH 8 TÀI LIỆU
// ========================================

const courseButtons = [
    { button: microBtn, url: MICRO },
    { button: macroBtn, url: MACRO },
    { button: quantriBtn, url: QUANTRI },
    { button: ketoanBtn, url: KETOAN },

    { button: marketingEnBtn, url: MARKETING_EN },
    { button: marketingViBtn, url: MARKETING_VI },

    { button: taichinhEnBtn, url: TAICHINH_EN },
    { button: taichinhViBtn, url: TAICHINH_VI }
];


// ========================================
// 4. KHÓA TOÀN BỘ TÀI LIỆU
// ========================================

function lockCourses() {

    courseButtons.forEach(({ button }) => {

        button.href = "#";

        button.classList.add("locked");

        button.setAttribute("aria-disabled", "true");

        button.removeAttribute("target");

    });

    status1.textContent = "Chưa hoàn thành bước 1";
    status1.className = "status";

    status2.textContent = "Tài liệu đang bị khóa";
    status2.className = "status muted";

    progress.textContent = "0/2 bước";
}


// ========================================
// 5. MỞ KHÓA TOÀN BỘ TÀI LIỆU
// ========================================

function unlockCourses() {

    courseButtons.forEach(({ button, url }) => {

        button.href = url;

        button.classList.remove("locked");

        button.setAttribute("aria-disabled", "false");

        button.setAttribute("target", "_blank");

        button.setAttribute("rel", "noopener noreferrer");

    });

    status1.textContent = "✓ Đã hoàn thành bước 1";
    status1.className = "status done";

    status2.textContent = "✓ Đã mở khóa 8 tài liệu";
    status2.className = "status done";

    progress.textContent = "2/2 bước";
}


// ========================================
// 6. SỰ KIỆN MỞ SHOPEE
// ========================================

shopeeBtn.addEventListener("click", function () {

    unlockCourses();

});


// ========================================
// 7. NGĂN TRUY CẬP KHI CHƯA MỞ KHÓA
// ========================================

courseButtons.forEach(({ button }) => {

    button.addEventListener("click", function (event) {

        if (button.classList.contains("locked")) {

            event.preventDefault();

            alert(
                "Vui lòng mở liên kết Shopee ở Bước 1 trước khi truy cập tài liệu."
            );

        }

    });

    // Hỗ trợ thao tác bằng bàn phím

    button.addEventListener("keydown", function (event) {

        if (
            button.classList.contains("locked") &&
            (event.key === "Enter" || event.key === " ")
        ) {

            event.preventDefault();

            alert(
                "Vui lòng mở liên kết Shopee ở Bước 1 trước khi truy cập tài liệu."
            );

        }

    });

});


// ========================================
// 8. KHỞI TẠO TRẠNG THÁI BAN ĐẦU
// ========================================

lockCourses();
