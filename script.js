const MICRO =
    "https://learn.mru.org/courses/principles-of-microeconomics";

const MACRO =
    "https://learn.mru.org/courses/principles-of-macroeconomics";

const microBtn = document.getElementById("microBtn");
const macroBtn = document.getElementById("macroBtn");
const status1 = document.getElementById("step1Status");
const status2 = document.getElementById("step2Status");
const progress = document.getElementById("progress");
const shopeeBtn = document.getElementById("shopeeBtn");


// Khóa khóa học khi trang được tải
function lockCourses() {

    microBtn.href = "#";
    macroBtn.href = "#";

    microBtn.classList.add("locked");
    macroBtn.classList.add("locked");

    microBtn.setAttribute("aria-disabled", "true");
    macroBtn.setAttribute("aria-disabled", "true");

    status1.textContent =
        "Chưa hoàn thành bước 1";

    status1.className =
        "status";

    status2.textContent =
        "Khóa học đang bị khóa";

    status2.className =
        "status muted";

    progress.textContent =
        "0/2 bước";
}


// Mở khóa sau khi bấm Shopee
function unlockCourses() {

    microBtn.href = MICRO;
    macroBtn.href = MACRO;

    microBtn.classList.remove("locked");
    macroBtn.classList.remove("locked");

    microBtn.setAttribute("aria-disabled", "false");
    macroBtn.setAttribute("aria-disabled", "false");

    status1.textContent =
        "✓ Đã hoàn thành bước 1";

    status1.className =
        "status done";

    status2.textContent =
        "✓ Bạn có thể chọn một trong hai khóa học";

    status2.className =
        "status done";

    progress.textContent =
        "2/2 bước";
}


// Bấm mở Shopee → mở khóa
shopeeBtn.addEventListener("click", () => {
    unlockCourses();
});


// Không cho truy cập khóa học khi chưa mở Shopee
[microBtn, macroBtn].forEach(btn => {

    btn.addEventListener("click", event => {

        if (btn.classList.contains("locked")) {

            event.preventDefault();

            alert(
                "Vui lòng mở liên kết Shopee ở Bước 1 trước."
            );
        }

    });

});


// Mỗi lần tải trang mới → khóa lại
document.addEventListener("DOMContentLoaded", () => {
    lockCourses();
});
