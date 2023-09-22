document.addEventListener("DOMContentLoaded", function () {
    const photo = document.getElementById("photo");
    const qualitySelect = document.getElementById("quality-select");

    qualitySelect.addEventListener("change", function () {
        const selectedQuality = qualitySelect.value;
        // 根据选择的质量切换照片
        switch (selectedQuality) {
            case "144p":
                photo.src = "photo_144p.jpg";
                break;
            case "240p":
                photo.src = "photo_240p.jpg";
                break;
            case "480p":
                photo.src = "photo_480p.jpg";
                break;
            case "720p":
                photo.src = "photo_720p.jpg";
                break;
            case "1080p":
                photo.src = "photo_1080p.jpg";
                break;
            default:
                // 默认情况下使用占位图片
                photo.src = "placeholder.jpg";
        }
    });
});
