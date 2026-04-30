// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', () => {
    
    // 選取所有包含錨點的連結
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    // 為每個連結加入點擊事件監聽器
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 防止預設的瞬間跳轉行為
            e.preventDefault();

            // 取得目標區塊的 ID
            const targetId = this.getAttribute('href');
            
            // 排除單純的 "#" 連結
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            // 如果目標區塊存在，則執行平滑滾動
            if (targetElement) {
                // 扣除上方導覽列的高度，避免標題被遮擋
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
