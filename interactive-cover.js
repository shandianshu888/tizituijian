// 交互封面控制器：已停用 AI 粒子连线特效，保持轻量高效与人文质感
(() => {
  // 原 AI 浮动粒子特效已彻底禁用，确保页面视觉纯净自然
  const canvas = document.getElementById('network-canvas');
  if (canvas) {
    canvas.style.display = 'none';
  }
})();
