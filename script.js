
"use strict";

/* =====================================
   1. DANH SÁCH ĐƯỜNG DẪN TÀI LIỆU
===================================== */

// 1. LIST ĐỒ ĐI QUÂN SỰ
const QUANSU =
    "https://docs.google.com/spreadsheets/d/10aOEOAeB5oTOF6XHuRdF-ykHII4BXWcgyfNTCIyqt-M/htmlview";

// 2. KINH TẾ HỌC VI MÔ
const MICRO =
    "https://learn.mru.org/courses/principles-of-microeconomics";

// 3. KINH TẾ HỌC VĨ MÔ
const MACRO =
    "https://learn.mru.org/courses/principles-of-macroeconomics";

// 4. QUẢN TRỊ HỌC
const QUANTRI =
    "https://docs.google.com/document/d/143zer9A0yGyKXV3N2ilX7UyrnUtIdPcYMDiPofEVys0/edit?tab=t.0";

// 5. NGUYÊN LÝ KẾ TOÁN
const KETOAN =
    "https://docs.google.com/document/d/1X30JybYNzF7xjeOGHGDy_WR2xVajP_ABMdYv2jD7JIM/edit?tab=t.0";

// 6. NGUYÊN LÝ MARKETING - TIẾNG ANH
const MARKETING_EN =
    "https://drive.google.com/drive/folders/1D4pvIdn85KiT2Z89T6MRTrU6EJS6lWG-";

// 7. NGUYÊN LÝ MARKETING - TIẾNG VIỆT
const MARKETING_VI =
    "https://docs.google.com/document/d/1K-MbauTEHy2rQHkVZQy9Zy5teUuwjkGSArsKkjjp1DM/edit?tab=t.x7g0hyt7bk8x";

// 8. TÀI CHÍNH DOANH NGHIỆP - TIẾNG ANH
const TAICHINH_EN =
    "https://docs.google.com/document/d/1g2iM0VSOQev9-5A388sk-8Ombcu4BERgQY-LGR24-Qo/edit?tab=t.0";

// 9. TÀI CHÍNH DOANH NGHIỆP - TIẾNG VIỆT
const TAICHINH_VI =
    "https://drive.google.com/drive/folders/13HS6m-r_OZwdeF7-sVdWEBtwyu7HmwZd";

// 10. PHÁP LUẬT ĐẠI CƯƠNG
const PHAPLUAT =
    "https://drive.google.com/drive/folders/1aaXbvJj27Xp1jKBgA_06kY3MCzqJ2HM_";

// 11. TIẾNG ANH TRONG KINH DOANH
const TIENGANH_KD =
    "https://docs.google.com/document/d/1exBtqzhxWZ6xP4I8fdDsXi21kddKO3tQJdvO0EVWjgk/edit?tab=t.0";

// 12. TIẾNG ANH TRONG KINH DOANH NÂNG CAO
const TIENGANH_KD_NC =
    "https://docs.google.com/document/d/11Z-fS5fAntm9aIHmRqxwOivW3XCHrVkLMASwIBeNW1E/edit?tab=t.ushyi9bvpgb";


/* =====================================
   2. LẤY CÁC PHẦN TỬ HTML
===================================== */

const shopeeBtn = document.getElementById("shopeeBtn");

const status1 = document.getElementById("step1Status");
const status2 = document.getElementById("step2Status");

const progress = document.getElementById("progress");


/* =====================================
   3. DANH SÁCH 12 TÀI LIỆU
===================================== */

const courseButtons = [
    { id: "quansuBtn", url: QUANSU },
    { id: "microBtn", url: MICRO },
    { id: "macroBtn", url: MACRO },
    { id: "quantriBtn", url: QUANTRI },
    { id: "ketoanBtn", url: KETOAN },
    { id: "marketingEnBtn", url: MARKETING_EN },
    { id: "marketingViBtn", url: MARKETING_VI },
    { id: "taichinhEnBtn", url: TAICHINH_EN },
    { id: "taichinhViBtn", url: TAICHINH_VI },
    { id: "phapluatBtn", url: PHAPLUAT },
    { id: "taKinhDoanhBtn", url: TIENGANH_KD },
    { id: "taKinhDoanhNCBtn", url: TIENGANH_KD_NC }
];


/* =====================================
   4. KẾT NỐI NÚT HTML VỚI ĐƯỜNG DẪN
===================================== */

const courses = courseButtons.map(course => {
    const button = document.getElementById(course.id);

    if (!button) {
        console.error("Không tìm thấy phần tử HTML:", course.id);
        return null;
    }

    return {
        button: button,
        url: course.url
    };

}).filter(Boolean);


/* =====================================
   5. HÀM KHÓA TÀI LIỆU
===================================== */

function lockCourses() {

    courses.forEach(({ button }) => {

        button.href = "#";

        button.classList.add("locked");

        button.setAttribute("aria-disabled", "true");

        button.removeAttribute("target");

        button.removeAttribute("rel");

    });

    status1.textContent = "Chưa hoàn thành bước 1";
    status1.className = "status";

    status2.textContent = "Tài liệu đang bị khóa";
    status2.className = "status muted";

    progress.textContent = "0/2 bước";
}


/* =====================================
   6. HÀM MỞ KHÓA 12 TÀI LIỆU
===================================== */

function unlockCourses() {

    courses.forEach(({ button, url }) => {

        button.href = url;

        button.classList.remove("locked");

        button.setAttribute("aria-disabled", "false");

        button.setAttribute("target", "_blank");

        button.setAttribute("rel", "noopener noreferrer");

    });

    status1.textContent = "✓ Đã hoàn thành bước 1";
    status1.className = "status done";

    status2.textContent = "✓ Đã mở khóa 12 tài liệu";
    status2.className = "status done";

    progress.textContent = "2/2 bước";
}


/* =====================================
   7. SỰ KIỆN NHẤN SHOPEE
===================================== */

shopeeBtn.addEventListener("click", function () {

    unlockCourses();

});


/* =====================================
   8. KIỂM TRA TRẠNG THÁI TÀI LIỆU
===================================== */

courses.forEach(({ button }) => {

    button.addEventListener("click", function (event) {

        if (button.classList.contains("locked")) {

            event.preventDefault();

            alert(
                "Vui lòng truy cập liên kết Shopee ở Bước 1 trước khi xem tài liệu."
            );

        }

    });

});


/* =====================================
   9. KHỞI TẠO TRẠNG THÁI BAN ĐẦU
===================================== */

lockCourses();
