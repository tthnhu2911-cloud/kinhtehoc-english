
document.addEventListener("DOMContentLoaded", () => {

    // Đường dẫn tài liệu
    const MICRO =
        "https://learn.mru.org/courses/principles-of-microeconomics";

    const MACRO =
        "https://learn.mru.org/courses/principles-of-macroeconomics";

    const QUANTRI =
        "https://docs.google.com/document/d/143zer9A0yGyKXV3N2ilX7UyrnUtIdPcYMDiPofEVys0/edit?tab=t.0";

    const KETOAN =
        "https://docs.google.com/document/d/1X30JybYNzF7xjeOGHGDy_WR2xVajP_ABMdYv2jD7JIM/edit?tab=t.0";


    // Lấy các phần tử HTML
    const shopeeBtn = document.getElementById("shopeeBtn");

    const status1 = document.getElementById("step1Status");
    const status2 = document.getElementById("step2Status");
    const progress = document.getElementById("progress");


    // Danh sách tài liệu
    const courseButtons = [
        {
            button: document.getElementById("microBtn"),
            url: MICRO
        },
        {
            button: document.getElementById("macroBtn"),
            url: MACRO
        },
        {
            button: document.getElementById("quantriBtn"),
            url: QUANTRI
        },
        {
            button: document.getElementById("ketoanBtn"),
            url: KETOAN
        }
    ];


    // Khóa tất cả tài liệu
    function lockCourses() {

        courseButtons.forEach(course => {
            if (!course.button) return;

            course.button.href = "#";
            course.button.classList.add("locked");
            course.button.setAttribute("aria-disabled", "true");
            course.button.removeAttribute("target");
        });

        status1.textContent = "Chưa hoàn thành bước 1";
        status1.className = "status";

        status2.textContent = "Tài liệu đang bị khóa";
        status2.className = "status muted";

        progress.textContent = "0/2 bước";
    }


    // Mở khóa tài liệu
    function unlockCourses() {

        courseButtons.forEach(course => {
            if (!course.button) return;

            course.button.href = course.url;
            course.button.classList.remove("locked");
            course.button.setAttribute("aria-disabled", "false");
            course.button.setAttribute("target", "_blank");
            course.button.setAttribute("rel", "noopener noreferrer");
        });

        status1.textContent = "✓ Đã hoàn thành bước 1";
        status1.className = "status done";

        status2.textContent = "✓ Đã mở khóa 4 tài liệu";
        status2.className = "status done";

        progress.textContent = "2/2 bước";
    }


    // Bấm Shopee để mở khóa tài liệu
    if (shopeeBtn) {
        shopeeBtn.addEventListener("click", () => {
            unlockCourses();
        });
    }


    // Chặn truy cập khi tài liệu đang bị khóa
    courseButtons.forEach(course => {

        if (!course.button) return;

        course.button.addEventListener("click", event => {

            if (course.button.classList.contains("locked")) {
                event.preventDefault();

                alert(
                    "Vui lòng mở liên kết Shopee ở Bước 1 trước."
                );
            }

        });

    });


    // Khởi tạo trạng thái khi tải trang
    lockCourses();

});
