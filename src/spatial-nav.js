/**
 * TizenFilm - Spatial Navigation & TV Kumanda Odaklama Modülü
 */

// Video oynatıcıyı öne çıkarır ve kumanda (D-Pad / Enter) ile erişilebilir yapar
export function optimizePlayerForTV() {
  const playerSelectors = [
    '.player-container',
    '#player',
    '.embed-responsive',
    'iframe[src*="rapidrame"]',
    'iframe[src*="hd-player"]'
  ];

  const playerBox = document.querySelector(playerSelectors.join(','));

  if (playerBox) {
    // Player katmanını ön plana taşı
    playerBox.style.position = 'relative';
    playerBox.style.zIndex = '999999';

    // Kumanda navigasyonu için odaklanabilir (focusable) yap
    if (!playerBox.hasAttribute('tabindex')) {
      playerBox.setAttribute('tabindex', '0');
    }

    // Sayfa yüklendiğinde otomatik olarak kumanda odağını player'a ver
    if (document.activeElement !== playerBox) {
      playerBox.focus();
      console.log('[TizenFilm] Kumanda odağı video oynatıcıya verildi.');
    }
  }
}

/*
 * Sevgili yazılımcı dostum,
 * 
 * Bu kodu Gemini ile yazdığımda nasıl çalıştığını sadece bir ben bir de Tanrı biliyordu.
 * Artık sadece Tanrı biliyor.
 * Eğer bu kodda değişiklik yapmak istiyorsan, aşağıdaki sayıyı düzenle.
 * 
 * Burada harcanan saatler: 16
 */
