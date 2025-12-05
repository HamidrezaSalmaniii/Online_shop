const brandToggle = document.getElementById('brand-toggle');
const sidebar = document.getElementById('sidebar');
const input = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const searchbox = document.getElementById('input-box');
const tabs = document.querySelectorAll('[data-tab]');


let status = false
if (status != true) { // باز و بسته کردن با کلیک روی Brand
    brandToggle.addEventListener('click', (e) => {
        e.preventDefault(); // جلوگیری از رفتار پیشفرض لینک
        sidebar.classList.toggle('-translate-x-full'); // تغییر وضعیت ظاهر/مخفی
        status = true
    });
} else {
    // بستن سایدبار با دکمه Close داخل سایدبار
    brandToggle.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        status = false
    });
}

// اختیاری: کلیک خارج از سایدبار هم آن را ببندد
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== brandToggle) {
        sidebar.classList.add('-translate-x-full');
    }
});

document.querySelectorAll('.hs-accordion-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = document.getElementById(btn.getAttribute('aria-controls'));
        content.classList.toggle('hidden');
    });
});

function updateButton() {

    if (input.value.length > 0) {
        clearBtn.style.opacity = '1'; // ضربدر نمایش داده شود
        searchbox.classList.remove('w-full');
        searchbox.classList.remove('hover:w-[205%]');
        searchbox.classList.add('w-[205%]'); // همیشه بزرگ
    } else {
        clearBtn.style.opacity = '0'; // ضربدر مخفی شود
        searchbox.classList.remove('w-[205%]'); // دوباره کوچک شود
        searchbox.classList.add('w-full');
        searchbox.classList.add('hover:w-[205%]');
    }
}

input.addEventListener('input', updateButton);

clearBtn.addEventListener('click', () => {
    input.value = '';
    updateButton();
});


tabs.forEach(t => {
    t.addEventListener('click', () => {
        tabs.forEach(x => x.classList.remove('active-tab'));
        t.classList.add('active-tab');
    });
});