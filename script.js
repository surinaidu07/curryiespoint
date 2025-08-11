// Simple script for any future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth hover effects
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add loading animation
    const menuList = document.querySelector('.menu-list');
    menuList.style.opacity = '0';
    menuList.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        menuList.style.transition = 'all 0.6s ease';
        menuList.style.opacity = '1';
        menuList.style.transform = 'translateY(0)';
    }, 200);
});