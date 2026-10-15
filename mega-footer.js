// Mega Footer & Policy Modal Controller
(() => {
  const policyData = {
    about: {
      title: '关于本站 · 独立测评宣言',
      html: `
        <p><strong>翻墙梯子推荐</strong>（LADDER PROXY GUIDE · 独立档案部）是一个面向普通用户的科学上网、代理协议与机场工具导航站。</p>
        <p>我们创立的初衷很简单：现在的网络代理市场充斥着虚假水军、无良aff软文与廉价跑路陷阱。许多用户因轻信所谓“几元包年”或“千兆不限流”而遭遇封号、财产损失甚至设备安全隐患。</p>
        <p><strong>我们的核心原则：</strong></p>
        <ul>
          <li><strong>不迷信最低价：</strong>一分钱一分货，物理专线带宽成本透明，廉价往往意味着高风险。</li>
          <li><strong>晚高峰实测为准：</strong>所有收录的梯子与机场均经过晚高峰 20:00 - 23:00 4K/8K 压力测试。</li>
          <li><strong>优劣并陈：</strong>好的线路我们会推荐，经常断连、限速、改规则的服务商绝不避讳，第一时间记入风险预警。</li>
        </ul>
        <div style="margin-top:16px;padding:14px 16px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;">
          <strong style="color:#0284c7;display:block;margin-bottom:6px;">✈️ 官方 Telegram 交流与防失联社群：</strong>
          <span style="font-size:13px;color:#334155;">欢迎加入官方 TG 交流群，获取实时晚高峰测速、独家折扣券首发与跑路预警互助：</span>
          <div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap;">
            <a href="https://t.me/shandianjiaoliu" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#0284c7;color:#fff;font-weight:700;font-size:12.5px;padding:7px 14px;border-radius:6px;text-decoration:none;">
              👉 点击加入 Telegram 官方交流群 ↗
            </a>
            <a href="about.html" style="display:inline-block;background:#ffffff;border:1px solid #0284c7;color:#0284c7;font-weight:700;font-size:12.5px;padding:7px 14px;border-radius:6px;text-decoration:none;">
              📖 前往「关于我们」独立专页 ➔
            </a>
          </div>
        </div>
      `
    },
    privacy: {
      title: '隐私保护政策 (Privacy Policy)',
      html: `
        <p>本站高度尊重并保护每一位访问者的个人隐私权益。作为纯静态内容与导航评测站点：</p>
        <ul>
          <li><strong>无用户信息收集：</strong>本站不设注册系统，不收集您的姓名、电话、邮箱等任何个人敏感身份数据。</li>
          <li><strong>零日志存储：</strong>我们不部署任何记录用户浏览历史或访问路径的追踪代码。</li>
          <li><strong>安全使用提醒：</strong>我们强烈建议您在使用任何第三方代理服务时，切勿将其用于银行支付、身份证件上传等机密操作。</li>
        </ul>
        <p>本站包含指向第三方服务商网站的外部链接，外部网站的隐私保护政策由该服务商自行负责，建议您在访问前参阅其官方条款。</p>
      `
    },
    terms: {
      title: '使用条款与服务规范 (Terms of Service)',
      html: `
        <p>访问并使用本网站，即表示您已阅读、理解并同意遵守以下使用条款：</p>
        <ul>
          <li><strong>合法合规原则：</strong>本站所整理的技术资料、协议知识科普和工具推荐，仅供科研学术、跨国商务、跨境电商及技术学习参考。严禁任何个人利用代理技术从事危害国家安全、侵犯他人隐私或网络犯罪行为。</li>
          <li><strong>信息时效性免责：</strong>网络代理服务商的线路配置、价格和可用性可能随时变动。虽然我们定期巡检更新，但无法保证第三方服务的 100% 永久有效，请在订阅前以服务商最新官方公告为准。</li>
          <li><strong>独立风险自负：</strong>用户与第三方服务商产生的任何交易、退款争议或账号异常，本站不承担担保或代偿责任。</li>
        </ul>
      `
    },
    disclaimer: {
      title: '联盟营销免责披露 (Affiliate Disclosure)',
      html: `
        <p>根据互联网透明度与反不正当竞争规范，我们在此作出公开披露：</p>
        <p>本网站为独立测速与联盟营销网站。本站的部分出站链接可能包含合规的推广分佣标识（Affiliate Link）。当您通过本站链接访问服务商并完成有效购买时，我们可能会从服务商处获得少量的技术维护佣金。</p>
        <p><strong>我们郑重承诺：</strong></p>
        <ul>
          <li><strong>零溢价保证：</strong>通过本站链接购买绝不会增加您的任何额外费用，通常还能享受独家优惠折扣码。</li>
          <li><strong>评测客观独立：</strong>商业推广绝不影响我们的评测结论与天梯排名，凡有跑路迹象或严重降速的服务商，即使提供高佣金也一律列入避坑预警。</li>
        </ul>
      `
    }
  };

  function initPolicyModal() {
    let overlay = document.querySelector('.policy-modal-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'policy-modal-overlay';
      overlay.innerHTML = `
        <div class="policy-modal-card" role="dialog" aria-modal="true">
          <button class="policy-modal-close" aria-label="关闭">✕</button>
          <h3 class="policy-modal-title"></h3>
          <div class="policy-modal-body"></div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector('.policy-modal-close').addEventListener('click', () => {
        overlay.classList.remove('active');
      });
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
          overlay.classList.remove('active');
        }
      });
    }

    document.querySelectorAll('.js-open-policy').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const type = el.dataset.policy;
        const data = policyData[type] || policyData.about;
        overlay.querySelector('.policy-modal-title').textContent = data.title;
        overlay.querySelector('.policy-modal-body').innerHTML = data.html;
        overlay.classList.add('active');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initPolicyModal();
      ensureFaviconActive();
    });
  } else {
    initPolicyModal();
    ensureFaviconActive();
  }

  function ensureFaviconActive() {
    let icon = document.querySelector("link[rel*='icon']");
    if (!icon) {
      icon = document.createElement('link');
      icon.rel = 'shortcut icon';
      icon.type = 'image/png';
      icon.href = 'favicon-32x32.png';
      document.head.appendChild(icon);
    }
  }
})();
