
document.getElementsByClassName("download-app")[0].addEventListener("click", function(e) {
  e.preventDefault();
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    window.location.href = "https://images.1492929.com/wsd-images-prod/mm88vndkf3/merchant_resource/android/mm88vndkf3_2.4.68_20250807230349.apk";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    window.location.href = "https://images.1492929.com/wsd-images-prod/mm88vndkf3/merchant_resource/mobileconfig/mm88vndkf3_2.4.3_20250807230323.mobileconfig";
  } else {
    alert("Vui lòng tải ứng dụng trên điện thoại Android hoặc iOS.");
  }
});

document.querySelector('.back-home').addEventListener('click', function(e) {
  e.preventDefault();
  history.back();
});

const links = [
  "https://t.me/MM884CSKH",
  "https://t.me/MM883CSKH",
  "https://t.me/MM880CSKH",
]
const linkElement = document.getElementById("liveChatLink")
const linkTeleElement = document.getElementById("teleCskhLink")


function handleClick(e) {
  let index = parseInt(localStorage.getItem("chatLinkIndex")) || 0;
  e.currentTarget.href = links[index];
  index = ( index + 1) % links.length;
  localStorage.setItem("chatLinkIndex", index)
}

linkElement.addEventListener("click", handleClick);
linkTeleElement.addEventListener("click", handleClick)