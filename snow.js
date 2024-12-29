(function() {
    var snowflakes = document.querySelector('.snowflakes');
    
    function createSnowflake() {
        var snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        
        var xPos = Math.random() * window.innerWidth;
        var duration = Math.random() * 3 + 2; // thời gian rơi từ 2s đến 5s
        var size = Math.random() * 10 + 10; // kích thước từ 10px đến 20px
        
        snowflake.style.left = xPos + 'px';
        snowflake.style.fontSize = size + 'px';
        snowflake.style.animationDuration = duration + 's';
        
        snowflakes.appendChild(snowflake);
        
        // Xóa tuyết khi nó rơi khỏi màn hình
        setTimeout(function() {
            snowflake.remove();
        }, duration * 1000);
    }

    setInterval(createSnowflake, 100); // Tạo tuyết mỗi 100ms
})();
