$(document).ready(function(){

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tab) {

    if (tab && tab[0] && tab[0].url) {
      jQuery('#qrcodeCanvas').qrcode({
        text: tab[0].url
      });
    }

  });
});