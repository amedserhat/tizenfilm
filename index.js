(function () {
  'use strict';

  console.log('[TizenFilm] TizenBrew modülü yüklendi.');

  function optimizePlayerForTV() {
    const playerSelectors = [
      '.player-container',
      '#player',
      '.embed-responsive',
      'iframe[src*="rapidrame"]',
      'iframe[src*="hd-player"]'
    ];

    const playerBox = document.querySelector(playerSelectors.join(','));

    if (playerBox) {
      playerBox.style.position = 'relative';
      playerBox.style.zIndex = '999999';

      if (!playerBox.hasAttribute('tabindex')) {
        playerBox.setAttribute('tabindex', '0');
      }

      if (document.activeElement !== playerBox) {
        playerBox.focus();
        console.log('[TizenFilm] Odak video oynatıcıya verildi.');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    optimizePlayerForTV();
  });

  setInterval(() => {
    optimizePlayerForTV();
  }, 1500);
})();
