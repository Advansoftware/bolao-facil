/**
 * Google AdSense Configuration
 * 
 * INSTRUÇÕES PARA CONFIGURAÇÃO:
 * 1. Acesse https://www.google.com/adsense/
 * 2. Faça login com sua conta Google
 * 3. Vá em "Anúncios" > "Visão geral"
 * 4. Copie seu Publisher ID (formato: ca-pub-XXXXXXXXXXXXXXXX)
 * 5. Cole abaixo substituindo 'YOUR_PUBLISHER_ID'
 * 6. Para cada slot de anúncio, crie uma unidade de anúncio no AdSense
 * 7. Copie os IDs dos slots e cole nos campos correspondentes
 */

export const ADSENSE_CONFIG = {
  // Publisher ID do AdSense
  publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-9942287479317473',

  // IDs dos slots de anúncio (crie no painel do AdSense)
  slots: {
    // Leaderboard no topo das páginas (728x90)
    headerLeaderboard: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER || 'XXXXXXXXXX',

    // Rectangle médio (300x250)
    mediumRectangle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE || 'XXXXXXXXXX',

    // Leaderboard no rodapé (728x90)
    footerLeaderboard: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER || 'XXXXXXXXXX',

    // Anúncio no meio do conteúdo (responsivo)
    inArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE || '5793889679',

    // Sidebar (160x600)
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || 'XXXXXXXXXX',
  },

  // Habilitar anúncios (agora sempre habilitado)
  enabled: true,
};

export const isAdSenseConfigured = () => {
  return ADSENSE_CONFIG.publisherId !== 'ca-pub-XXXXXXXXXXXXXXXX' &&
    !ADSENSE_CONFIG.publisherId.includes('YOUR_PUBLISHER_ID');
};

