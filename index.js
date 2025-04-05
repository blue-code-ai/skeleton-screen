let container = document.getElementById("container");
let vid_container_html = `<div class="vid-container">
            <div class="vid-box"><div class="glowing-box"></div></div>
            <div class="text-box">
                <div class="text-content"><div class="boundary"></div></div>
                <div class="text-content"><div class="boundary"></div></div>
            </div>
        </div>`;
let finalHTML = '';
for (let i = 0; i < 40; i++) {
    finalHTML += vid_container_html;
}
container.innerHTML = finalHTML;