document.addEventListener('DOMContentLoaded', function () {
    // Navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');

            // Load the target page content
            fetch(targetPage)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    document.open();
                    document.write(html);
                    document.close();
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        });
    });

    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 既存のコードがここにある場合は、その下に追記してください。

document.addEventListener('DOMContentLoaded', function () {

    // --- アコーディオン機能 ---
    const triggers = document.querySelectorAll('.accordion-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            // クリックされた要素の次の要素（.accordion-panel）を取得
            const panel = this.nextElementSibling;

            // activeクラスを付け外しして、アイコンの向きを制御
            this.classList.toggle('active');

            // パネルの開閉処理
            if (panel.style.maxHeight) {
                // パネルが既に開いている場合 -> 閉じる
                panel.style.maxHeight = null;
                panel.style.padding = '0px 20px'; // paddingも閉じる
            } else {
                // パネルが閉じている場合 -> 開く
                // scrollHeightで要素のコンテンツの高さを取得
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.style.padding = '20px'; // paddingを開く
            }
        });
    });

    // --- ここに他のJavaScriptコードがあれば記述 ---

});
