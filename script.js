
const MICRO =
    "https://learn.mru.org/courses/principles-of-microeconomics";

const MACRO =
    "https://learn.mru.org/courses/principles-of-macroeconomics";

const QUANTRI =
    "https://docs.google.com/document/d/143zer9A0yGyKXV3N2ilX7UyrnUtIdPcYMDiPofEVys0/edit?tab=t.0";

// Lấy các phần tử trên trang web
const microBtn = document.getElementById("microBtn");
const macroBtn = document.getElementById("macroBtn");
const quantriBtn = document.getElementById("quantriBtn");

const status1 = document.getElementById("step1Status");
const status2 = document.getElementById("step2Status");
const progress = document.getElementById("progress");

const shopeeBtn = document.getElementById("shopeeBtn");

// Danh sách các tài liệu/khóa học
const courseButtons = [
    { button: microBtn, url: MICRO },
    { button: macroBtn, url: MACRO },
    { button: quantriBtn, url: QUANTRI }
];

// Khóa tất cả khóa học khi tải trang
function lockCourses() {
    courseButtons.forEach(course => {
        course.button.href = "#";
        course.button.classList.add("locked");
        course.button.setAttribute("aria-disabled", "true");
    });

    status1.textContent = "Chưa hoàn thành bước 1";
    status1.className = "status";

    status2.textContent = "Các tài liệu đang bị khóa";
    status2.className = "status muted";

    progress.textContent = "0/2 bước";
}

// Mở khóa tất cả tài liệu sau khi bấm Shopee
function unlockCourses() {
    courseButtons.forEach(course => {
        course.button.href = course.url;
        course.button.classList.remove("locked");
        course.button.setAttribute("aria-disabled", "false");
    });

    status1.textContent = "✓ Đã hoàn thành bước 1";
    status1.className = "status done";

    status2.textContent = "✓ Bạn có thể truy cập 3 tài liệu";
    status2.className = "status done";

    progress.textContent = "2/2 bước";
}

// Bấm Shopee để mở khóa tài liệu
shopeeBtn.addEventListener("click", () => {
    unlockCourses();
});

// Ngăn truy cập tài liệu khi chưa mở khóa
courseButtons.forEach(course => {
    course.button.addEventListener("click", event => {
        if (course.button.classList.contains("locked")) {
            event.preventDefault();
            alert("Vui lòng mở liên kết Shopee ở Bước 1 trước.");
        }
    });
});

// Khóa lại khi tải hoặc làm mới trang
document.addEventListener("DOMContentLoaded", lockCourses);

// Khởi tạo trạng thái ngay nếu DOM đã tải xong
lockCourses();
