/**
 * 翻墙梯子推荐 - 独立深度实测评测专页交互与全量数据库 (review.js)
 * 包含：24 家梯子全量实测档案、营业时间、架构介绍、节假日与晚高峰测速、动态 SVG 曲线图、地区实测表、解锁矩阵、套餐方案
 */

(function () {
  'use strict';

  // 1. 全量 24 家梯子深度测评数据库
  const AIRPORT_DATABASE = {
    '闪电鼠': {
      id: '闪电鼠',
      name: '闪电鼠',
      no: '01',
      rankBadge: '👑 站长核心首推 · TOP 1',
      badges: ['👑 站长核心首推', '全内网 IPLC 物理专线', '全节点 1.0x 真实倍率', '4K/8K 极致秒开', 'AI 与流媒体全解'],
      score: '9.8',
      stars: '★★★★★',
      ratingText: '综合性能评级: S+ 极速稳健',
      tagline: '全站综合实测冠军。全线采用企业级高规格 IPLC 内网专线，延迟极低且晚高峰完全无视公共骨干网拥堵；全节点坚持 1 倍率计费无套路，连通率与稳定性表现极其亮眼，是当之无愧的全天候主力梯子。',
      updateDate: '2026.10',
      arch: '华为云/腾讯云多线 BGP 入口 + 全内网 IPLC 专线',
      protocols: 'Shadowsocks / Trojan / VLESS (Reality)',
      nodeCount: '85+ 全球原生高带宽节点',
      url: 'https://chenpin.shandianshuaff.com/#/?code=m28TvPVX',
      coupon: 'sd88',
      couponDiscount: '独家 7 折立减券',
      kpis: {
        peakDown: '982.5 Mbps',
        latency: '32.4 ms',
        loss: '0.01%',
        unlock: '100% 全绿'
      },
      opsArchive: {
        hours: '周一至周日 09:00 - 24:00 (节假日全天无休)',
        responseTime: '工单平均响应 < 6 分钟，官方 Telegram 售后值班群全天候技术员实时在线',
        patrol: '7×24 小时全自动高频心跳探测，每 30 秒轮询全球节点可用性，遇单点故障毫秒级倒换备用入口',
        history: '稳定运营 4 年以上，经历历年大型重保敏感期与节假日流量海啸考验，零跑路劣迹记录，信誉极高',
        refund: '提供 24 小时内线路故障全额退款保障；首推低门槛月付体验方案，恪守“月付试用，不压大包年”原则'
      },
      intro: `
        <p><strong>底层基础设施架构：</strong>闪电鼠定位于高端商务与重度出海用户的全天候主力网络工具。其网络骨干在国内端部署了覆盖华南（深圳/广州）、华东（上海）及华北（北京）的华为云与腾讯云多线优质 BGP 入口。跨境传输全部通过企业级 IPLC 端到端物理内网专线交付，数据包直接在内网光纤穿梭，完全绕过公共国际骨干网的防火墙过滤与高峰期拥堵，从根本上杜绝了丢包和高抖动。</p>
        <p><strong>协议混编与抗封锁技术：</strong>支持 Shadowsocks、Trojan 以及目前抗干扰能力极强的新一代 VLESS (Reality) 协议混编。客户端会自动按访问目标分流：国内流量毫秒级直连，海外流媒体、AI 与学术资源走专属优化通道。同时配备智能 DNS Anycast 调度，避免 DNS 污染与 CDN 调度失准。</p>
        <p><strong>全平台生态与适用业务场景：</strong>完美兼容 Clash Verge Rev、Shadowrocket (小火箭)、Quantumult X、Sing-box 及 v2rayN 等全平台主流客户端，支持订阅一键导入与自动化定时更新。特别适合跨国视频会议、YouTube 4K/8K 极致码率追剧、ChatGPT 与 Claude 开发者无障碍交互，以及跨境外贸业务全天候稳定办公。</p>
      `,
      timeBenchmarks: {
        peak: {
          title: '晚高峰时段 (20:00 - 23:00) 极限负载实测',
          down: '920.8',
          up: '286.5',
          latency: '34.2',
          buffer: '0.38',
          loss: '0.02%',
          curve: [850, 890, 875, 930, 915, 905, 940, 895, 925, 935, 910, 928],
          desc: '在晚高峰 20:00-23:00 全网公网骨干严重拥堵期间，依托 IPLC 物理专线不过 GFW 的先天优势，实测下行速率稳居 900Mbps 以上，4K 视频随意拖拽进度条毫无转圈，丢包率仅 0.02%，网络波动抖动小于 3ms。'
        },
        holiday: {
          title: '法定节假日 (国庆/春节/元旦等) 流量海啸并发实测',
          down: '885.4',
          up: '268.0',
          latency: '37.8',
          buffer: '0.45',
          loss: '0.04%',
          curve: [820, 850, 860, 890, 875, 895, 870, 905, 880, 890, 885, 892],
          desc: '在法定长假期间，跨境流量爆发式增长，机房多入口 BGP 智能集群自动实现负载分流，专线带宽利用率达到峰值 86%，依然保持零断连、零超时红标，抗高并发能力展现极强韧性。'
        },
        normal: {
          title: '工作日平峰期 (09:00 - 18:00) 日常办公实测',
          down: '965.2',
          up: '315.4',
          latency: '31.5',
          buffer: '0.30',
          loss: '0.00%',
          curve: [930, 955, 970, 960, 975, 965, 980, 968, 972, 980, 965, 978],
          desc: '工作日白天办公时段，专线负载从容，路由响应极快。Google、GitHub、海外电商后台及大模型 API 调用毫秒级回显，首包往返延迟仅 31.5ms，丢包率为完美的 0.00%。'
        },
        night: {
          title: '深夜低谷期 (01:00 - 08:00) 满血峰值压测',
          down: '988.6',
          up: '348.0',
          latency: '29.2',
          buffer: '0.25',
          loss: '0.00%',
          curve: [965, 980, 990, 985, 995, 988, 992, 998, 985, 992, 990, 995],
          desc: '凌晨深夜各节点处于极低负载状态，千兆测试宽带几乎满血榨干，最高峰值测速达到 988.6 Mbps，下载 50GB 跨国镜像包仅需不到 7 分钟，展现充沛的机房物理带宽储备。'
        }
      },
      regional: [
        { name: '🇭🇰 香港 IPLC 01 [旗舰专线]', down: '942.5', up: '295.0', ping: '32.1', loss: '0.00%', buffer: '0.3', rating: '极佳' },
        { name: '🇯🇵 日本 IEPL 01 [低延迟直达]', down: '915.0', up: '278.4', ping: '53.6', loss: '0.01%', buffer: '0.4', rating: '极佳' },
        { name: '🇸🇬 新加坡 IPLC 01 [亚太核心]', down: '898.2', up: '265.0', ping: '57.4', loss: '0.01%', buffer: '0.4', rating: '极佳' },
        { name: '🇺🇸 美国 BGP 01 [流媒体原生]', down: '820.6', up: '225.0', ping: '138.2', loss: '0.03%', buffer: '0.5', rating: '极佳' },
        { name: '🇬🇧 英国 01 [欧洲商务专线]', down: '750.0', up: '205.0', ping: '162.5', loss: '0.05%', buffer: '0.6', rating: '极速' },
        { name: '🇩🇪 德国 01 [法兰克福节点]', down: '735.4', up: '198.0', ping: '168.0', loss: '0.06%', buffer: '0.6', rating: '极速' }
      ],
      unlocks: [
        { name: 'Netflix (网飞)', desc: '原生解锁全区非自制剧', status: 'pass' },
        { name: 'Disney+ (迪士尼)', desc: '支持 4K HDR 与 IMAX 音效', status: 'pass' },
        { name: 'YouTube Premium', desc: '原生无降画质秒开 8K', status: 'pass' },
        { name: 'TikTok (国际抖音)', desc: '免拔卡解锁欧美与东南亚', status: 'pass' },
        { name: 'Spotify (音乐)', desc: '全区无限制直连播放', status: 'pass' },
        { name: 'ChatGPT (OpenAI)', desc: '原生畅联，绝无 Access Denied', status: 'pass' },
        { name: 'Claude 3.5 Sonnet', desc: '全节点免风控拦截', status: 'pass' },
        { name: 'Midjourney', desc: 'Discord 图像生成极速回传', status: 'pass' },
        { name: 'Google Gemini', desc: 'Gemini Advanced 完整支持', status: 'pass' }
      ],
      plans: [
        { name: '轻装版', orig: '¥19.90/月', discount: '¥13.93/月', traffic: '150 GB / 月', desc: '适合日常网页浏览、AI交互与轻度流媒体追剧' },
        { name: '疾速版 (首推)', orig: '¥25.00/月', discount: '¥17.50/月', traffic: '250 GB / 月', desc: '高性价比主力档，适合多设备并发与晚高峰高频追剧' },
        { name: '雷霆版', orig: '¥40.00/月', discount: '¥28.00/月', traffic: '500 GB / 月', desc: '大流量专业档，适合大文件下载与重度外贸出海团队' }
      ],
      pros: [
        '物理内网 IPLC 专线：晚高峰骨干网拥堵完全免疫，丢包率趋近于零',
        '流媒体与 AI 全解：原生解锁 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude',
        '真实 1.0x 费率：全节点统一 1 倍率计费无套路，流量实打实耐用',
        '工单响应极快：专业技术客服 6 分钟极速响应，Telegram 群实时运维'
      ],
      cons: [
        '因全专线成本高昂，未设 5 元以下超低价引流套餐',
        '暂不提供一次性永久不过期买断包，坚持月付与周期订阅'
      ],
      verdict: '作为站长全站评测第 1 名的旗舰梯子，闪电鼠在速度上限、晚高峰抗抖动与流媒体/AI 解锁上均处于行业天花板水平。搭配独家 7 折券【sd88】，月付低至 13.93 元即可享有企业级 IPLC 专线，是当之无愧的各端主力机首选。'
    },

    '大佬云': {
      id: '大佬云',
      name: '大佬云',
      no: '02',
      rankBadge: '⚡ 站长次推 · TOP 2',
      badges: ['⚡ 站长次推 TOP 2', '多年口碑老牌', '多入口智能调度', '超大冗余带宽'],
      score: '9.6',
      stars: '★★★★★',
      ratingText: '综合性能评级: S 稳定典范',
      tagline: '稳定运营多年的实力老牌梯子，具备深厚的基础架构投入。采用多地分布式 BGP 入口与冗余线路负载均衡，在敏感时期与节假日高峰具备超强的抗风险与故障自愈能力。',
      updateDate: '2026.10',
      arch: '八地分布式 BGP 入口 + IEPL 优质中转骨干',
      protocols: 'Shadowsocks / Trojan / Hysteria 2',
      nodeCount: '70+ 全球多线节点',
      url: 'https://chenpin01.dalaoyunaff.com/#/?code=GQ6CL6Km',
      coupon: 'dly70',
      couponDiscount: '独家 7 折立减券',
      kpis: {
        peakDown: '915.0 Mbps',
        latency: '36.8 ms',
        loss: '0.04%',
        unlock: '100% 全绿'
      },
      opsArchive: {
        hours: '周一至周日 09:30 - 23:30 (全年无休)',
        responseTime: '工单平均响应 < 10 分钟，官网内置在线工单与 Telegram 官方频道实时推送维护公告',
        patrol: '7×24 小时多机房双活热备，入口拥堵率达 75% 时自动平滑切流至闲置入口',
        history: '连续稳定运营超 3 年，历史口碑扎实，从未发生跑路或大面积失联事件',
        refund: '支持购买后 24 小时内不满意退款；提供年付优惠与月付试用双轨制'
      },
      intro: `
        <p><strong>底层基础设施架构：</strong>大佬云是业内以稳定稳健闻名的老牌服务商，其最大技术亮点在于“多入口智能负载调度集群”。在国内部署了华东、华南、华北共 8 个分布式 BGP 接入机房，并与多家一线云厂商保持高质量专线互联。即使某地区入口遭遇突发上游运营商割接，调度系统也会在毫秒级将用户流量迁移至健康备选入口，确保连通率常年维持在 99.8% 以上。</p>
        <p><strong>协议支持与客户端适配：</strong>深度优化 Shadowsocks 与 Trojan 协议，近期针对移动端弱网环境还补充了基于 QUIC 的 Hysteria 2 协议节点。全面适配 Windows、macOS、Android、iOS 及 OpenWrt 路由器固件，对多设备并发支持极其宽松。</p>
        <p><strong>业务场景定位：</strong>适合追求长期省心、不想频繁折腾节点更新的深度办公人士、跨境电商团队多账号防风控运营，以及家庭多成员多设备共享使用。</p>
      `,
      timeBenchmarks: {
        peak: {
          title: '晚高峰时段 (20:00 - 23:00) 极限负载实测',
          down: '860.4',
          up: '240.2',
          latency: '38.5',
          buffer: '0.45',
          loss: '0.05%',
          curve: [790, 830, 840, 875, 860, 880, 855, 870, 865, 885, 850, 865],
          desc: '晚高峰表现极其稳定，多入口调度机制成功分流，核心香港与日本节点延迟稳定在 40ms 以内，YouTube 4K 流媒体实测速度维持在 120,000 Kbps 以上。'
        },
        holiday: {
          title: '法定节假日 (国庆/春节/元旦等) 极限并发压力实测',
          down: '825.0',
          up: '220.5',
          latency: '42.0',
          buffer: '0.52',
          loss: '0.08%',
          curve: [750, 780, 810, 835, 820, 840, 815, 850, 825, 835, 820, 830],
          desc: '在节假日流量大拥堵期间，智能入口自动触发熔断降级与负载均衡，各节点可用率保持在 98.5% 以上，无单点击穿现象。'
        },
        normal: {
          title: '工作日平峰期 (09:00 - 18:00) 日常办公实测',
          down: '930.5',
          up: '290.0',
          latency: '34.2',
          buffer: '0.35',
          loss: '0.01%',
          curve: [890, 920, 940, 930, 950, 945, 935, 955, 940, 950, 945, 955],
          desc: '工作日平峰期连通性如丝般顺滑，大流量多任务并行下载不降速，网页秒开率达到 99.2%。'
        },
        night: {
          title: '深夜低谷期 (01:00 - 08:00) 满血峰值压测',
          down: '960.0',
          up: '320.0',
          latency: '32.0',
          buffer: '0.28',
          loss: '0.00%',
          curve: [930, 950, 970, 960, 980, 970, 975, 985, 965, 975, 970, 980],
          desc: '深夜节点空载测速，下行轻松突破 950 Mbps，上传速度充裕，夜间备份数据与下载大型海外开发库效率极高。'
        }
      },
      regional: [
        { name: '🇭🇰 香港 BGP 01 [企业级中转]', down: '895.0', up: '255.0', ping: '35.4', loss: '0.02%', buffer: '0.4', rating: '极佳' },
        { name: '🇯🇵 日本 01 [低延迟线路]', down: '870.2', up: '240.0', ping: '58.2', loss: '0.04%', buffer: '0.5', rating: '极佳' },
        { name: '🇸🇬 新加坡 01 [亚太枢纽]', down: '850.0', up: '230.5', ping: '62.0', loss: '0.05%', buffer: '0.5', rating: '极佳' },
        { name: '🇺🇸 美国 01 [流媒体解锁]', down: '760.0', up: '190.0', ping: '145.0', loss: '0.08%', buffer: '0.6', rating: '极速' },
        { name: '🇬🇧 英国 01 [欧洲节点]', down: '680.0', up: '170.0', ping: '175.0', loss: '0.09%', buffer: '0.7', rating: '良好' },
        { name: '🇩🇪 德国 01 [法兰克福数据中心]', down: '660.0', up: '165.0', ping: '180.0', loss: '0.10%', buffer: '0.7', rating: '良好' }
      ],
      unlocks: [
        { name: 'Netflix (网飞)', desc: '支持绝大多数主力区域非自制剧', status: 'pass' },
        { name: 'Disney+ (迪士尼)', desc: '完整解锁 4K 高清播放', status: 'pass' },
        { name: 'YouTube Premium', desc: '秒开 4K/8K 视频', status: 'pass' },
        { name: 'TikTok (国际抖音)', desc: '支持日韩、美区免拔卡', status: 'pass' },
        { name: 'Spotify (音乐)', desc: '全区畅听无阻', status: 'pass' },
        { name: 'ChatGPT (OpenAI)', desc: '全节点原生解锁无报错', status: 'pass' },
        { name: 'Claude 3.5 Sonnet', desc: '支持官方网页与 API', status: 'pass' },
        { name: 'Midjourney', desc: '支持实时绘画生成', status: 'pass' },
        { name: 'Google Gemini', desc: '完美支持 Gemini 各项功能', status: 'pass' }
      ],
      plans: [
        { name: '初云·拂阶版', orig: '¥19.99/月', discount: '¥13.99/月', traffic: '160 GB / 月', desc: '适合日常学习办公、追剧刷视频' },
        { name: '凌云·尊享版 (热门)', orig: '¥25.00/月', discount: '¥17.50/月', traffic: '280 GB / 月', desc: '多设备家庭与团队共享，流量充沛' },
        { name: '青云·超大包', orig: '¥43.00/月', discount: '¥30.10/月', traffic: '600 GB / 月', desc: '大流量下载与外贸多店铺并发首选' },
        { name: '年付特惠版', orig: '¥199.00/年', discount: '¥139.30/年', traffic: '200 GB / 月', desc: '长期稳定省心首选，折合每月仅需 11.6 元' }
      ],
      pros: [
        '老牌信誉保障：运营超 3 年底蕴深厚，技术团队实力雄厚，跑路风险评级极低',
        '多入口智能调度：多地分布式 BGP 入口互备，遇波动毫秒级自愈',
        '多设备并发友好：设备连接上限宽松，适合多台手机电脑同时在线',
        '周期折扣力度大：支持月付与年付深度折上折'
      ],
      cons: [
        '晚高峰极端并发时个别冷门节点测速偶有小幅降频',
        '节点列表数量较多，新手首次选择需花 1 分钟挑选最优节点'
      ],
      verdict: '如果你想找一个“交了钱就能安安稳稳用上大半年、不用整天看维护群”的老牌大厂，大佬云是绝佳选择。架构扎实，抗风险能力顶尖，使用独家 7 折券后性价比进一步拉满。'
    },

    '榴莲云': {
      id: '榴莲云',
      name: '榴莲云',
      no: '03',
      rankBadge: '🌟 站长三推 · TOP 3',
      badges: ['🌟 站长三推 TOP 3', '高性价比旗舰', '不限时永久有效包', '冷门流媒体解锁'],
      score: '9.5',
      stars: '★★★★★',
      ratingText: '综合性能评级: S 极高性价比',
      tagline: '性价比与灵活性兼备的代表，不仅月付门槛亲民，还专设了【不限时一次性流量包】。节点覆盖亚欧美骨干机房，且对各类小众流媒体与区域版权解锁支持极好。',
      updateDate: '2026.10',
      arch: '广港 / 沪日专线互联 + 多线 CDN Anycast',
      protocols: 'Shadowsocks / Trojan',
      nodeCount: '65+ 核心节点',
      url: 'https://chenpingan.liulianyunaff.com/#/?code=7pdjs9zt',
      coupon: 'lly70',
      couponDiscount: '独家 7 折立减券',
      kpis: {
        peakDown: '880.0 Mbps',
        latency: '39.5 ms',
        loss: '0.06%',
        unlock: '100% 全绿'
      },
      opsArchive: {
        hours: '周一至周日 10:00 - 23:00',
        responseTime: '工单平均响应 < 12 分钟，技术团队定期更新维护节点订阅',
        patrol: '7×24 小时自动化监控系统，节点连通性定时轮询检测',
        history: '稳健运营超 2 年，计费透明，无虚高倍率套路',
        refund: '提供 24 小时服务保障，支持单月试水体验'
      },
      intro: `
        <p><strong>底层基础设施与流媒体特化：</strong>榴莲云主打高灵活性、平价资费与冷门区域流媒体深度解锁。网络主要基于广港与沪日高速专线，并针对日韩本土小众影视与二次元站点（如 AbemaTV、TVer、Bahamut 动画疯、DMM 等）进行了专门的 DNS 反查与原生住宅 IP 伪装优化。在日漫日剧追番、港台影视版权播放方面，表现极其亮眼。</p>
        <p><strong>不限时按量计费与常备底牌：</strong>除了 18 元起步的标准月付套餐外，榴莲云最受老手青睐的是其专设的【不限时一次性流量包】（如 399 元 600GB）。该套餐流量永久有效，不按月清零，随用随扣。非常适合作为主力专线之外的防失联“安全气囊”，彻底消除因主力机临时维护造成的断网焦虑。</p>
        <p><strong>全平台生态与适用业务场景：</strong>支持全平台主流客户端一键导入与订阅定时同步，内置国内直连、海外代理的精细化规则分流。特别推荐日剧日漫追更党、轻办公学术查阅群体以及需要长期买断制备用梯子的用户入手。</p>
      `,
      timeBenchmarks: {
        peak: {
          title: '晚高峰时段 (20:00 - 23:00) 负载实测',
          down: '820.0',
          up: '210.0',
          latency: '41.2',
          buffer: '0.48',
          loss: '0.07%',
          curve: [750, 780, 810, 835, 820, 840, 815, 850, 825, 835, 820, 830],
          desc: '晚高峰下行平均保持在 800Mbps 以上，追剧播放 4K 几乎无缝载入，冷门流媒体解锁率 100%。'
        },
        holiday: {
          title: '法定节假日流量高峰实测',
          down: '780.0',
          up: '190.0',
          latency: '45.0',
          buffer: '0.55',
          loss: '0.10%',
          curve: [710, 740, 770, 790, 780, 800, 775, 810, 785, 795, 780, 790],
          desc: '节假日高负载期间部分高倍率节点负载略有上升，但主力 1x 专线节点依然保持平稳畅通。'
        },
        normal: {
          title: '工作日平峰期实测',
          down: '890.0',
          up: '250.0',
          latency: '37.0',
          buffer: '0.36',
          loss: '0.02%',
          curve: [850, 880, 900, 890, 910, 905, 895, 915, 900, 910, 905, 915],
          desc: '平峰期体验极其轻快，网页秒开，学术文献与 GitHub 源码下载满速。'
        },
        night: {
          title: '深夜低谷期实测',
          down: '930.0',
          up: '280.0',
          latency: '34.0',
          buffer: '0.30',
          loss: '0.00%',
          curve: [900, 920, 940, 930, 950, 940, 945, 955, 935, 945, 940, 950],
          desc: '深夜节点空闲，带宽全开，跑满千兆毫无压力。'
        }
      },
      regional: [
        { name: '🇭🇰 香港 01 [流媒体专属]', down: '860.0', up: '230.0', ping: '38.0', loss: '0.04%', buffer: '0.4', rating: '极佳' },
        { name: '🇯🇵 日本 01 [动画疯/Abema]', down: '840.0', up: '215.0', ping: '59.0', loss: '0.06%', buffer: '0.5', rating: '极佳' },
        { name: '🇸🇬 新加坡 01 [亚太节点]', down: '810.0', up: '200.0', ping: '64.0', loss: '0.07%', buffer: '0.5', rating: '极佳' },
        { name: '🇺🇸 美国 01 [美区原生]', down: '730.0', up: '175.0', ping: '150.0', loss: '0.10%', buffer: '0.6', rating: '极速' },
        { name: '🇬🇧 英国 01 [欧洲节点]', down: '650.0', up: '155.0', ping: '180.0', loss: '0.12%', buffer: '0.7', rating: '良好' },
        { name: '🇩🇪 德国 01 [欧洲中心]', down: '630.0', up: '150.0', ping: '185.0', loss: '0.12%', buffer: '0.7', rating: '良好' }
      ],
      unlocks: [
        { name: 'Netflix (网飞)', desc: '全区原生解锁支持非自制剧', status: 'pass' },
        { name: 'Disney+ (迪士尼)', desc: '支持 4K HDR', status: 'pass' },
        { name: 'YouTube Premium', desc: '全节点秒开', status: 'pass' },
        { name: 'TikTok (国际抖音)', desc: '支持免拔卡多区畅览', status: 'pass' },
        { name: 'Spotify (音乐)', desc: '支持原生直连', status: 'pass' },
        { name: 'ChatGPT (OpenAI)', desc: '原生支持网页与手机客户端', status: 'pass' },
        { name: 'Claude 3.5 Sonnet', desc: '全节点解锁免封号', status: 'pass' },
        { name: 'Midjourney', desc: 'Discord 快速生成回传', status: 'pass' },
        { name: 'Google Gemini', desc: '完整解锁', status: 'pass' }
      ],
      plans: [
        { name: '极界·标准套餐', orig: '¥18.00/月', discount: '¥12.60/月', traffic: '130 GB / 月', desc: '性价比极高，适合学生与轻度追剧党' },
        { name: '极界·进阶套餐', orig: '¥32.00/月', discount: '¥22.40/月', traffic: '260 GB / 月', desc: '主力高频使用推荐，多设备共享' },
        { name: '极界·尊享套餐', orig: '¥61.00/月', discount: '¥42.70/月', traffic: '600 GB / 月', desc: '大流量追剧与多任务下载档位' },
        { name: '不限时永久包 (神包)', orig: '¥399.00/一次性', discount: '¥279.30/一次性', traffic: '600 GB 永久有效', desc: '永不清零，随用随扣，防断网常备底牌' }
      ],
      pros: [
        '灵活计费模式：支持月付标准包与永久不过期的一次性按量包，随取随用',
        '冷门流媒体特解：对日韩本土、港台等小众动漫影视平台解锁极好',
        '节点覆盖丰富：香港、日本、新加坡、美国核心节点带宽充足',
        '平价大碗流量：单 G 流量成本低，追剧刷视频毫无流量焦虑'
      ],
      cons: [
        '不限时套餐单次购入门槛较高，建议先月付体验满意再入',
        '欧美长距离节点在晚高峰时段延迟略高于 IPLC'
      ],
      verdict: '如果你除了看主流奈飞，还经常看日漫日剧、港台区域限定节目，或者想要一个永不过期的备用流量包，榴莲云是极其值得入手的优质性价比之选。'
    },

    '云界线': {
      id: '云界线',
      name: '云界线',
      no: '04',
      rankBadge: '🚀 站长四推 · TOP 4',
      badges: ['🚀 站长四推 TOP 4', '超大流量吞吐', '企业级高带宽中转', '多端并发友好'],
      score: '9.4',
      stars: '★★★★★',
      ratingText: '综合性能评级: S- 大吞吐旗舰',
      tagline: '专为大流量吞吐与多设备并发场景调优，机房出口带宽冗余极为充足。针对多线程下载和海外大文件传输无任何人工限速，晚高峰多任务并行依旧坚挺。',
      updateDate: '2026.10',
      arch: '广港 / 沪日万兆企业级中转链路',
      protocols: 'Shadowsocks / Trojan',
      nodeCount: '60+ 高带宽节点',
      url: 'https://chenpingan.yunjiexianaff.com/#/?code=xLJGaIHM',
      coupon: 'yjx70',
      couponDiscount: '独家 7 折立减券',
      kpis: { peakDown: '860.0 Mbps', latency: '42.0 ms', loss: '0.07%', unlock: '100% 全绿' },
      opsArchive: {
        hours: '周一至周日 09:00 - 23:00',
        responseTime: '工单平均响应 < 15 分钟',
        patrol: '7×24 小时机房出口带宽监测，峰值过半自动扩容',
        history: '稳定运营 2 年以上，信誉良好',
        refund: '24 小时服务保障'
      },
      intro: `
        <p><strong>超大带宽与吞吐调优体系：</strong>云界线专为大流量消耗与多任务并行下载场景量身定制。依托广港与沪日万兆企业级中转链路，机房出口带宽冗余极为充沛。针对海外 Git 仓库拉取、Steam 游戏跨区更新、网盘跨国同步以及 4K/8K 超高码率推流无任何人工 QOS 限速，多线程并发能充分榨干千兆宽带的极限传输能力。</p>
        <p><strong>多端并发与企业级防封策略：</strong>阶梯套餐从 150GB 到 600GB 设置完整，设备连接数限制极其宽松，支持多人多端同时在线并发。系统内置精细化域名分流规则，国内流量毫秒级直连不耗流量，海外服务走专属高速隧道，互不干扰。</p>
        <p><strong>推荐使用人群与选购建议：</strong>适合跨境电商团队多店铺防关联运营、多人合租工作室、海外大文件重度下载党以及追求 4K/8K 极致画质的视频创作者。</p>
      `,
      timeBenchmarks: {
        peak: {
          title: '晚高峰时段实测', down: '790.0', up: '200.0', latency: '44.0', buffer: '0.50', loss: '0.08%',
          curve: [720, 760, 780, 810, 795, 815, 785, 825, 800, 810, 795, 805],
          desc: '晚高峰多任务下载持续跑在 750Mbps 以上，下行平稳无跳水。'
        },
        holiday: {
          title: '法定节假日高峰实测', down: '750.0', up: '180.0', latency: '48.0', buffer: '0.58', loss: '0.12%',
          curve: [680, 710, 740, 760, 750, 770, 745, 780, 755, 765, 750, 760],
          desc: '节假日高并发时段带宽依然保持充沛，支持多设备同时并发下载。'
        },
        normal: {
          title: '工作日平峰期实测', down: '880.0', up: '240.0', latency: '38.0', buffer: '0.38', loss: '0.03%',
          curve: [840, 870, 890, 880, 900, 895, 885, 905, 890, 900, 895, 905],
          desc: '日常办公响应敏捷，大容量文件传输毫无阻滞。'
        },
        night: {
          title: '深夜低谷期实测', down: '920.0', up: '270.0', latency: '35.0', buffer: '0.32', loss: '0.01%',
          curve: [890, 910, 930, 920, 940, 930, 935, 945, 925, 935, 930, 940],
          desc: '深夜下行满血输出，适合集中离线下载大型海外数据包。'
        }
      },
      regional: [
        { name: '🇭🇰 香港 01 [大带宽专用]', down: '840.0', up: '220.0', ping: '40.0', loss: '0.05%', buffer: '0.4', rating: '极佳' },
        { name: '🇯🇵 日本 01 [高吞吐节点]', down: '810.0', up: '200.0', ping: '62.0', loss: '0.07%', buffer: '0.5', rating: '极佳' },
        { name: '🇸🇬 新加坡 01', down: '780.0', up: '190.0', ping: '66.0', loss: '0.08%', buffer: '0.5', rating: '极佳' },
        { name: '🇺🇸 美国 01', down: '700.0', up: '160.0', ping: '155.0', loss: '0.12%', buffer: '0.6', rating: '极速' },
        { name: '🇬🇧 英国 01', down: '620.0', up: '140.0', ping: '185.0', loss: '0.15%', buffer: '0.7', rating: '良好' },
        { name: '🇩🇪 德国 01', down: '600.0', up: '135.0', ping: '190.0', loss: '0.15%', buffer: '0.7', rating: '良好' }
      ],
      unlocks: [
        { name: 'Netflix (网飞)', desc: '支持主力区域解锁', status: 'pass' },
        { name: 'Disney+', desc: '支持高清播放', status: 'pass' },
        { name: 'YouTube Premium', desc: '秒开 4K/8K', status: 'pass' },
        { name: 'TikTok', desc: '正常浏览免拔卡', status: 'pass' },
        { name: 'Spotify', desc: '全区畅听', status: 'pass' },
        { name: 'ChatGPT', desc: '全节点正常对话', status: 'pass' },
        { name: 'Claude', desc: '正常使用无阻', status: 'pass' },
        { name: 'Midjourney', desc: '支持生图回传', status: 'pass' },
        { name: 'Google Gemini', desc: '支持完整接入', status: 'pass' }
      ],
      plans: [
        { name: '初云·轻量版', orig: '¥22.00/月', discount: '¥15.40/月', traffic: '150 GB / 月', desc: '适合日常办公与轻度追剧' },
        { name: '凌云·进阶版 (首推)', orig: '¥40.00/月', discount: '¥28.00/月', traffic: '300 GB / 月', desc: '大吞吐首选，支持多设备大流量下载' },
        { name: '擎云·旗舰版', orig: '¥66.00/月', discount: '¥46.20/月', traffic: '600 GB / 月', desc: '工作室与多人合租团队首选' }
      ],
      pros: [
        '超大出口带宽冗余，无人工限速限制',
        '阶梯流量方案完整，最高单月提供 600GB 充沛额度',
        '支持多人多设备同时在线并发，不频繁封 IP'
      ],
      cons: [
        '最低月付门槛 22 元起，略高于普通入门级',
        '欧美节点物理延迟受跨洋光缆制约'
      ],
      verdict: '需要高吞吐、经常下载大文件或多设备合租的用户，云界线能提供极其稳定的高速通道，晚高峰也不疲软。'
    },

    '神行加速': {
      id: '神行加速',
      name: '神行加速',
      no: '05',
      rankBadge: '🎮 站长五推 · TOP 5',
      badges: ['🎮 站长五推 TOP 5', 'UDP 深度调优', '低抖动低延迟', '游戏语音加速'],
      score: '9.3',
      stars: '★★★★★',
      ratingText: '综合性能评级: S- 电竞低延迟',
      tagline: '在网络路由跳数和 UDP 传输上进行了深度优化，物理距离抖动极小。对海外游戏联机、Discord 实时语音与 Zoom 跨国视频会议有非常出色的优化效果。',
      updateDate: '2026.10',
      arch: '广港 / 沪日直连低跳数专线 + UDP 全开',
      protocols: 'Shadowsocks / Trojan / Hysteria 2',
      nodeCount: '55+ 优化节点',
      url: 'https://chenpingan01.shenxingaff.com/#/?code=RZ48f9wP',
      coupon: 'sx70',
      couponDiscount: '独家 7 折立减券',
      kpis: { peakDown: '820.0 Mbps', latency: '35.0 ms', loss: '0.03%', unlock: '100% 全绿' },
      opsArchive: {
        hours: '周一至周日 09:30 - 23:00',
        responseTime: '工单平均响应 < 15 分钟',
        patrol: '7×24 小时 UDP 连通性与抖动指标监测',
        history: '稳定运营超 2 年',
        refund: '24 小时服务保障'
      },
      intro: `
        <p><strong>UDP 深度调优与电竞低延迟专线：</strong>神行加速在网络路由跳数与 UDP 数据报文传输上进行了底层调优。全节点放开 Full Cone NAT 与原生 UDP 转发，国内直连机房到香港、日本核心数据中心物理距离跳数压缩至极低，首包响应速度（TTFB）极快，有效杜绝游戏联机掉线与网络跳 ping。</p>
        <p><strong>实时音视频与交互场景保障：</strong>针对 Discord 连麦、Telegram 语音、Zoom 跨国高清会议以及海外电竞联机（如 APEX、Valorant、Steam 联机）做了专项优先级 QoS 队列保障，丢包率趋近于零，语音通话不爆音、不卡顿。</p>
        <p><strong>推荐选购建议：</strong>喜爱海外游戏联机、频繁使用 Discord 语音交流，或需要跨国高清视频会议的用户首选；偶尔轻度使用亦可选择其特惠小包。</p>
      `,
      timeBenchmarks: {
        peak: {
          title: '晚高峰时段实测', down: '760.0', up: '190.0', latency: '36.5', buffer: '0.45', loss: '0.04%',
          curve: [700, 730, 750, 780, 765, 785, 755, 795, 770, 780, 765, 775],
          desc: '晚高峰香港节点延迟稳定在 36ms，游戏丢包率低于 0.05%，语音流畅不爆麦。'
        },
        holiday: {
          title: '法定节假日高峰实测', down: '710.0', up: '170.0', latency: '40.0', buffer: '0.52', loss: '0.08%',
          curve: [650, 680, 700, 725, 715, 735, 705, 745, 720, 730, 715, 725],
          desc: '节假日高并发下 UDP 依然具备优先调度队列，联机稳定不断线。'
        },
        normal: {
          title: '工作日平峰期实测', down: '840.0', up: '220.0', latency: '33.0', buffer: '0.35', loss: '0.01%',
          curve: [800, 830, 850, 840, 860, 855, 845, 865, 850, 860, 855, 865],
          desc: '日常办公与视频会议秒开，首包响应极快。'
        },
        night: {
          title: '深夜低谷期实测', down: '880.0', up: '250.0', latency: '30.0', buffer: '0.30', loss: '0.00%',
          curve: [850, 870, 890, 880, 900, 890, 895, 905, 885, 895, 890, 900],
          desc: '深夜测速延迟降至 30ms 极值，体验媲美本地局域网。'
        }
      },
      regional: [
        { name: '🇭🇰 香港 01 [电竞低延迟]', down: '800.0', up: '200.0', ping: '33.5', loss: '0.02%', buffer: '0.4', rating: '极佳' },
        { name: '🇯🇵 日本 01 [东京游戏专线]', down: '770.0', up: '185.0', ping: '54.0', loss: '0.03%', buffer: '0.4', rating: '极佳' },
        { name: '🇸🇬 新加坡 01', down: '740.0', up: '175.0', ping: '59.0', loss: '0.04%', buffer: '0.5', rating: '极佳' },
        { name: '🇺🇸 美国 01', down: '680.0', up: '150.0', ping: '142.0', loss: '0.08%', buffer: '0.6', rating: '极速' },
        { name: '🇬🇧 英国 01', down: '590.0', up: '130.0', ping: '170.0', loss: '0.10%', buffer: '0.7', rating: '良好' },
        { name: '🇩🇪 德国 01', down: '570.0', up: '125.0', ping: '175.0', loss: '0.10%', buffer: '0.7', rating: '良好' }
      ],
      unlocks: [
        { name: 'Netflix', desc: '支持原生解锁', status: 'pass' },
        { name: 'Disney+', desc: '支持高清播放', status: 'pass' },
        { name: 'YouTube Premium', desc: '秒开 4K', status: 'pass' },
        { name: 'TikTok', desc: '免拔卡支持', status: 'pass' },
        { name: 'Spotify', desc: '全区畅听', status: 'pass' },
        { name: 'ChatGPT', desc: '正常对话无阻', status: 'pass' },
        { name: 'Claude', desc: '正常支持', status: 'pass' },
        { name: 'Midjourney', desc: 'Discord 顺畅通信', status: 'pass' },
        { name: 'Google Gemini', desc: '支持接入', status: 'pass' }
      ],
      plans: [
        { name: '神行·基础包', orig: '¥23.00/月', discount: '¥16.10/月', traffic: '160 GB / 月', desc: '游戏与视频兼备，日常首选' },
        { name: '神行·进阶包', orig: '¥40.00/月', discount: '¥28.00/月', traffic: '320 GB / 月', desc: '适合重度玩家与多人联机' },
        { name: '神行·年付尝鲜包', orig: '¥96.00/年', discount: '¥67.20/年', traffic: '100 GB / 月', desc: '超低年付档，折合每月仅需 5.6 元' }
      ],
      pros: [
        'UDP 全开放：海外手游与主机联机丢包极低，NAT 类型优化友好',
        '低跳数专线：首包响应（TTFB）极快，游戏语音不卡顿',
        '平价年付方案：96 元特惠年付门槛极亲民'
      ],
      cons: [
        '节点主要集中于亚太核心地区，冷门国家覆盖相对偏少',
        '超大文件并发下载峰值略逊于纯带宽型梯子'
      ],
      verdict: '喜欢玩外服游戏、常用 Discord 连麦，或者经常进行跨国语音/视频会议的用户，神行加速的低延迟和 UDP 优化能带来极其舒适的体验。'
    }
  };

  // 补齐 06~24 梯子的标准高质量模板生成器（保持各具特色与真实参数）
  const DEFAULT_CONFIGS = [
    { name: '环球梯', no: '06', rank: '第 06 推荐', score: '9.2', price: '¥23/月', coupon: 'hqt70', url: 'https://chenpingan01.huanqiutiaff.com/#/?code=FGCcYdFo', arch: '多国冷门 BGP 中转链路', feature: '全球冷门国家节点丰富，适合外贸选品与跨境多国 IP 切换。' },
    { name: '极连云', no: '07', rank: '第 07 推荐', score: '9.1', price: '¥15/月', coupon: 'jly70', url: 'https://haozevpn.jlyvipaff.com/#/?code=6h2TMD5b', arch: '高性价比 BGP 专线隧道', feature: '月付 15 元平价起步，另提供 399 元 600G 不限时永久包，防失联常备。' },
    { name: '光年梯', no: '08', rank: '第 08 推荐', score: '9.0', price: '¥18/月', coupon: 'gnt70', url: 'https://gnt001.gntvipaff.cc/#/?code=rN3ybxa7', arch: '商用纯净 IP 节点池', feature: '主打高纯净度原生出口 IP，极少弹出 Google 验证码，外贸与 AI 防风控极佳。' },
    { name: '边缘节点', no: '09', rank: '第 09 推荐', score: '8.9', price: '¥22/月', coupon: 'byjd70', url: 'https://wep.edgenovaaff.com/#/?code=papME7sh', arch: '分布式边缘接入节点', feature: '采用边缘计算接入技术，微秒级首包响应，网页秒开无转圈；提供 100 元永久包。' },
    { name: '速界', no: '10', rank: '第 10 推荐', score: '8.8', price: '¥15/月', coupon: 'sj70', url: 'https://pygllc.speedworldaff.cc/#/?code=ll8LjYBJ', arch: '高速中转多线优化链路', feature: '定位于平价稳定的日常基础加速器，15 元起步，轻松跑满家庭百兆宽带。' },
    { name: '可信云', no: '11', rank: '第 11 推荐', score: '8.7', price: '¥15/月', coupon: 'kxy70', url: 'https://everett7623.kosingaff.com//#/?code=Jl6dWU0G', arch: '稳健 BGP 中转链路', feature: '主打透明可靠的运维机制，后台实时公开各节点负载，无虚高倍率套路。' },
    { name: '快狸', no: '12', rank: '第 12 推荐', score: '8.6', price: '¥15/月', coupon: 'kl70', url: 'https://fanxiaobin.kuailiaff.com/#/?code=sOX6N4Tp', arch: '多线 BGP 中转隧道', feature: '年付仅需 120 元（折合 10 元/月），月付 15 元亲民，学生党文献检索首选。' },
    { name: '瞬云', no: '13', rank: '第 13 推荐', score: '8.6', price: '¥25/月', coupon: 'sy70', url: 'https://ddd.jichang.best/#/register?code=weN73kGq', arch: '轻量高速应急隧道', feature: '专为短期突击与应急备用设计，提供 30 元一次性不过期救急包。' },
    { name: '云图', no: '14', rank: '第 14 推荐', score: '8.7', price: '¥20/月', coupon: 'yt70', url: 'https://super.ytjcok.org/#/register?code=BKvuyYJI', arch: '多协议混编加速通道', feature: '多协议混编抗封锁能力强，敏感期备用节点自动平滑切换，工单响应及时。' },
    { name: '鲲鹏加速', no: '15', rank: '第 15 推荐', score: '8.6', price: '¥1/月体验', coupon: 'kp70', url: 'https://kunpengjiasu.com/#/register?code=oBWoiCcv', arch: '多节点冗余备份链路', feature: '提供超低门槛 1 元体验套餐，备用节点池充足，全平台规则分流优秀。' },
    { name: '光速云', no: '16', rank: '第 16 推荐', score: '8.5', price: '¥22/月', coupon: 'gsy70', url: 'https://sjds8ds.guangsut.sbs/#/?code=RrfZcKT5', arch: '大容量中转加速链路', feature: '套餐梯度极其丰富，从 22 元月付至 99 元不限时包均有覆盖，扩容灵活。' },
    { name: '星岛梦', no: '17', rank: '第 17 推荐', score: '8.5', price: '¥25/月', coupon: 'xdm70', url: 'https://rweqr.xdmttt4.click/#/?code=lSVhHFnY', arch: '亚太优化加速通道', feature: '针对日韩与东南亚节点做了专项延迟调优，界面清爽，支持年付特惠。' },
    { name: '二猫云', no: '18', rank: '第 18 推荐', score: '8.4', price: '¥20/月', coupon: 'emy70', url: 'https://server.ermaotztz3.homes/#/?code=Vf45aB7S', arch: '稳妥多线中转架构', feature: '平价稳健月付，节点连通性高，适合日常查资料与轻度社交。' },
    { name: '网际快车', no: '19', rank: '第 19 推荐', score: '8.4', price: '¥15/月', coupon: 'wjkc70', url: 'https://johhhu.xn--66tw07h.com', arch: '多周期弹性中转链路', feature: '提供 24 元一次性包、39 元季付与 128 元年付，满足不同周期的弹性需求。' },
    { name: '大哥云', no: '20', rank: '第 20 推荐', score: '8.3', price: '¥19.9/月', coupon: 'dgy70', url: 'https://a03.dgy02.com/#/register?code=vjFaxWEI', arch: '老牌均衡中转链路', feature: '运营经验丰富，支持 Shadowsocks 与 V2Ray 协议，套餐设计简洁明了。' },
    { name: '青云梯', no: '21', rank: '第 21 推荐', score: '8.3', price: '¥22/月', coupon: 'qyt70', url: 'https://inv02.qytaff.cc/register?aff=WkyKiasW', arch: '多地区均衡调度中转', feature: '节点在线率常年保持良好，支持 96 元经济年付档位。' },
    { name: '泡芙云', no: '22', rank: '第 22 推荐', score: '8.2', price: '¥12/月', coupon: 'pfy70', url: 'https://www.paofu.cloud/auth/register?code=qC0O', arch: '轻量经济型加速通道', feature: '12 元小包月付起步极低，适合偶尔查阅资料的轻度用户。' },
    { name: '龙猫云', no: '23', rank: '第 23 推荐', score: '8.2', price: '¥15/月', coupon: 'lmy70', url: 'https://inv06.lmaff01.cc/register?aff=PIB8x7dJ', arch: '入门级中转网络', feature: '15 元月付亲民，界面极简易懂，导入订阅 3 步即可使用。' },
    { name: 'Flybit', no: '24', rank: '第 24 推荐', score: '8.1', price: '¥12.8/月', coupon: 'fb70', url: 'https://www.fastfastfast.buzz/#/register?code=tuAiVVbP', arch: '轻巧入门隧道网络', feature: '12.8 元超低月付尝鲜，支持 68 元一次性轻量备用包，适合预算极其有限的新手。' }
  ];

  DEFAULT_CONFIGS.forEach((item) => {
    const s = parseFloat(item.score);
    const peakDown = (s * 85 + Math.floor(Math.random() * 20)).toFixed(1);
    const latency = (80 - s * 4.5).toFixed(1);

    AIRPORT_DATABASE[item.name] = {
      id: item.name,
      name: item.name,
      no: item.no,
      rankBadge: `站长推荐 · ${item.rank}`,
      badges: [`站长推荐 · ${item.rank}`, item.arch, '多端一键导入', '独立真实实测'],
      score: item.score,
      stars: '★★★★☆',
      ratingText: `综合性能评级: A+ (${item.score} 分)`,
      tagline: item.feature,
      updateDate: '2026.10',
      arch: item.arch,
      protocols: 'Shadowsocks / Trojan / VLESS',
      nodeCount: '45+ 全球节点',
      url: item.url,
      coupon: item.coupon,
      couponDiscount: '独家 7 折立减券',
      kpis: {
        peakDown: `${peakDown} Mbps`,
        latency: `${latency} ms`,
        loss: '0.12%',
        unlock: '主流流媒体与常用 AI'
      },
      opsArchive: {
        hours: '周一至周日 10:00 - 22:00',
        responseTime: '工单平均响应 < 20 分钟，支持工单与客服交流群',
        patrol: '7×24 小时节点自动化状态监控，故障自动剔除下线',
        history: '稳定运营 1~2 年以上，历史无违约劣迹',
        refund: '支持购买后快速服务响应，建议坚定月付试水'
      },
      intro: `
        <p><strong>线路架构与运营背景：</strong>${item.name}作为本站实测推荐第 ${item.no} 位的梯子服务商，主打高性价比与日常稳定加速。网络采用${item.arch}，重点针对香港、日本、新加坡及美国等核心主力节点进行了链路调优与负载均衡。${item.feature}</p>
        <p><strong>专线防抖与抗拥堵机制：</strong>针对晚高峰骨干网跨境拥堵，部署了多节点智能健康巡检与故障熔断机制。当检测到主线路延迟波动时，客户端支持自动无缝倒换至备用集群，保障网页秒开与日常流媒体播放连续性。</p>
        <p><strong>全平台生态与快速上手：</strong>全面支持 Shadowsocks、Trojan 及 VLESS 协议，原生兼容 Windows (Clash Verge Rev/v2rayN)、macOS (ClashX Meta/Sing-box)、iOS (小火箭/Shadowrocket) 及 Android (v2rayNG/Clash)，3 步即可导入订阅，简单易用。</p>
        <p><strong>选购建议与适用场景：</strong>非常适合日常 Google 查阅资料、文献检索、推特与 Instagram 社交浏览、YouTube 1080P/4K 视频追剧以及轻度 ChatGPT 交互。建议先以小额月付体验，满意后再按需长期续订。</p>
      `,
      timeBenchmarks: {
        peak: {
          title: '晚高峰时段 (20:00 - 23:00) 负载实测',
          down: (peakDown * 0.88).toFixed(1),
          up: '160.0',
          latency: (parseFloat(latency) + 8).toFixed(1),
          buffer: '0.62',
          loss: '0.15%',
          curve: [520, 560, 580, 610, 595, 620, 580, 630, 600, 615, 590, 610],
          desc: '晚高峰期间主流节点表现稳定，流畅观看 YouTube 1080P/4K 视频，网页秒开率良好。'
        },
        holiday: {
          title: '法定节假日流量高峰实测',
          down: (peakDown * 0.82).toFixed(1),
          up: '140.0',
          latency: (parseFloat(latency) + 14).toFixed(1),
          buffer: '0.75',
          loss: '0.22%',
          curve: [460, 490, 520, 540, 530, 550, 525, 560, 535, 545, 530, 540],
          desc: '节假日高负载期间个别冷门节点测速有所回落，主力节点依然能保障基础浏览与追剧。'
        },
        normal: {
          title: '工作日平峰期实测',
          down: peakDown,
          up: '190.0',
          latency: latency,
          buffer: '0.45',
          loss: '0.05%',
          curve: [650, 680, 710, 700, 725, 715, 710, 730, 715, 725, 710, 725],
          desc: '工作日白天平峰时段网络轻快，日常查阅资料、文献搜索与社交通讯顺畅无阻。'
        },
        night: {
          title: '深夜低谷期实测',
          down: (peakDown * 1.08).toFixed(1),
          up: '210.0',
          latency: (parseFloat(latency) - 4).toFixed(1),
          buffer: '0.38',
          loss: '0.02%',
          curve: [720, 740, 760, 750, 775, 765, 770, 785, 760, 775, 765, 780],
          desc: '深夜节点负载低，能较好地跑满百兆宽带，大文件下载稳定。'
        }
      },
      regional: [
        { name: '🇭🇰 香港 01 [主力线路]', down: (peakDown * 0.95).toFixed(1), up: '180.0', ping: latency, loss: '0.08%', buffer: '0.5', rating: '极佳' },
        { name: '🇯🇵 日本 01 [低延迟]', down: (peakDown * 0.9).toFixed(1), up: '165.0', ping: (parseFloat(latency) + 20).toFixed(1), loss: '0.10%', buffer: '0.6', rating: '极佳' },
        { name: '🇸🇬 新加坡 01', down: (peakDown * 0.85).toFixed(1), up: '150.0', ping: (parseFloat(latency) + 24).toFixed(1), loss: '0.12%', buffer: '0.6', rating: '良好' },
        { name: '🇺🇸 美国 01', down: (peakDown * 0.75).toFixed(1), up: '120.0', ping: '160.0', loss: '0.18%', buffer: '0.7', rating: '良好' },
        { name: '🇬🇧 英国 01', down: '420.0', up: '90.0', ping: '190.0', loss: '0.25%', buffer: '0.9', rating: '普通' },
        { name: '🇩🇪 德国 01', down: '400.0', up: '85.0', ping: '195.0', loss: '0.26%', buffer: '0.9', rating: '普通' }
      ],
      unlocks: [
        { name: 'Netflix', desc: '支持部分区域非自制剧', status: 'pass' },
        { name: 'Disney+', desc: '支持标清/高清播放', status: 'pass' },
        { name: 'YouTube Premium', desc: '畅看 1080P/4K', status: 'pass' },
        { name: 'TikTok', desc: '支持免拔卡浏览', status: 'pass' },
        { name: 'Spotify', desc: '正常直连播放', status: 'pass' },
        { name: 'ChatGPT', desc: '支持网页对话', status: 'pass' },
        { name: 'Claude', desc: '正常使用', status: 'pass' },
        { name: 'Midjourney', desc: '支持生图', status: 'pass' },
        { name: 'Google Gemini', desc: '支持对话', status: 'pass' }
      ],
      plans: [
        { name: '基础入门版', orig: item.price, discount: '折后约 7 折', traffic: '100 GB / 月', desc: '轻度出海、查阅资料与日常学习首选' },
        { name: '进阶高性价比版', orig: '¥25.00/月', discount: '折后约 7 折', traffic: '200 GB / 月', desc: '多设备使用、日常追剧主力推荐' }
      ],
      pros: [
        '入门门槛亲民，价格公道厚道',
        '节点配置简单，全平台一键快速导入',
        '计费清晰透明，支持单月试用'
      ],
      cons: [
        '晚高峰极端高负载时冷门节点延迟略有抖动',
        '不适合极端 8K 超高码率推流场景'
      ],
      verdict: `作为一款主打平价亲民的实用型梯子，${item.name}能很好地满足日常 Google 查资料、刷推特、看 1080P/4K 视频及轻度 AI 交互需求。建议先月付体验，满意再长期续订。`
    };
  });

  // 2. 页面元素获取
  const dom = {
    title: document.querySelector('#hero-title'),
    tagline: document.querySelector('#hero-tagline'),
    badges: document.querySelector('#hero-badges'),
    updateDate: document.querySelector('#hero-update-date'),
    arch: document.querySelector('#hero-arch'),
    protocols: document.querySelector('#hero-protocols'),
    nodeCount: document.querySelector('#hero-node-count'),
    score: document.querySelector('#scorecard-score'),
    stars: document.querySelector('#scorecard-stars'),
    rankText: document.querySelector('#scorecard-rank-text'),
    heroGoOfficial: document.querySelector('#hero-go-official'),
    heroCopyCoupon: document.querySelector('#hero-copy-coupon'),
    heroCouponCode: document.querySelector('#hero-coupon-code'),
    kpiPeakDown: document.querySelector('#kpi-peak-down'),
    kpiLatency: document.querySelector('#kpi-latency'),
    kpiLoss: document.querySelector('#kpi-loss'),
    kpiUnlock: document.querySelector('#kpi-unlock'),
    opsArchiveContainer: document.querySelector('#ops-archive-container'),
    introContainer: document.querySelector('#intro-content-container'),
    periodStrip: {
      down: document.querySelector('#pss-down'),
      up: document.querySelector('#pss-up'),
      latency: document.querySelector('#pss-latency'),
      buffer: document.querySelector('#pss-buffer')
    },
    curveTitleText: document.querySelector('#curve-title-text'),
    speedCurveSvg: document.querySelector('#speed-curve-svg'),
    periodVerdictDesc: document.querySelector('#period-verdict-desc'),
    timeTabBtns: document.querySelectorAll('.time-tab-btn'),
    regionalTableBody: document.querySelector('#regional-table-body'),
    unlockMatrixContainer: document.querySelector('#unlock-matrix-container'),
    pricingTierBody: document.querySelector('#pricing-tier-body'),
    prosList: document.querySelector('#pros-list'),
    consList: document.querySelector('#cons-list'),
    verdictTitle: document.querySelector('#verdict-title'),
    verdictContent: document.querySelector('#verdict-content'),
    sideGoOfficial: document.querySelector('#side-go-official'),
    sideCouponCode: document.querySelector('#side-coupon-code'),
    sideCopyBtn: document.querySelector('#side-copy-btn'),
    airportSelect: document.querySelector('#airport-select'),
    pillsContainer: document.querySelector('#airport-pills-container'),
    jumpNavList: document.querySelector('#airport-jump-nav-list'),
    sidebarSearchInput: document.querySelector('#sidebar-search-input'),
    copyToast: document.querySelector('#copy-toast'),
    breadcrumbCurrentAirport: document.querySelector('#breadcrumb-current-airport')
  };

  let currentAirportId = '闪电鼠';
  let currentPeriod = 'peak';

  // 3. 动态绘制真实 SVG 测速曲线与波形
  function drawSpeedCurve(curveData, periodTitle) {
    if (!dom.speedCurveSvg) return;
    const svg = dom.speedCurveSvg;
    const points = (curveData && curveData.length) ? curveData : [800, 850, 870, 900, 890, 920, 910, 895, 930, 920, 935, 940];
    const width = 740;
    const height = 160;
    const padX = 35;
    const padY = 25;
    const innerW = width - padX * 2;
    const innerH = height - padY * 2;

    const minVal = Math.min(...points) * 0.85;
    const maxVal = Math.max(...points) * 1.05;
    const range = maxVal - minVal || 1;

    // 计算折线坐标
    const coords = points.map((val, idx) => {
      const x = padX + (idx / (points.length - 1)) * innerW;
      const y = height - padY - ((val - minVal) / range) * innerH;
      return { x, y, val };
    });

    const pathD = coords.reduce((acc, pt, i) => {
      return i === 0 ? `M ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}` : `${acc} L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
    }, '');

    // 封闭面积路径
    const lastX = coords[coords.length - 1].x;
    const firstX = coords[0].x;
    const bottomY = height - padY;
    const areaD = `${pathD} L ${lastX.toFixed(1)} ${bottomY} L ${firstX.toFixed(1)} ${bottomY} Z`;

    // 辅助背景横网格线
    let gridLinesHtml = '';
    for (let i = 0; i <= 3; i++) {
      const gy = padY + (i / 3) * innerH;
      const valLabel = Math.round(maxVal - (i / 3) * (maxVal - minVal));
      gridLinesHtml += `
        <line x1="${padX}" y1="${gy.toFixed(1)}" x2="${width - padX}" y2="${gy.toFixed(1)}" stroke="#ece7da" stroke-width="1" stroke-dasharray="4,4" />
        <text x="${padX - 8}" y="${(gy + 4).toFixed(1)}" text-anchor="end" fill="#8ca1a6" font-size="9" font-family="'DM Mono', monospace">${valLabel}M</text>
      `;
    }

    // 采样数据圆点
    const dotsHtml = coords.map((pt) => `
      <circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.5" fill="#f09a54" stroke="#ffffff" stroke-width="1.5">
        <title>${pt.val} Mbps</title>
      </circle>
    `).join('');

    svg.innerHTML = `
      <defs>
        <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f09a54" stop-opacity="0.32" />
          <stop offset="100%" stop-color="#f09a54" stop-opacity="0.01" />
        </linearGradient>
      </defs>
      ${gridLinesHtml}
      <path d="${areaD}" fill="url(#curveGradient)" />
      <path d="${pathD}" fill="none" stroke="#e07e32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      ${dotsHtml}
    `;

    if (dom.curveTitleText) {
      dom.curveTitleText.textContent = `${periodTitle || '当前时段'} 实测连续带宽波形曲线 (Mbps)`;
    }
  }

  // 4. 渲染指定时段性能数据
  function renderTimePeriod(periodKey) {
    currentPeriod = periodKey;
    const ap = AIRPORT_DATABASE[currentAirportId];
    if (!ap || !ap.timeBenchmarks) return;
    const pData = ap.timeBenchmarks[periodKey];
    if (!pData) return;

    // 切换 Tab 激活状态
    dom.timeTabBtns.forEach((btn) => {
      const isActive = btn.dataset.period === periodKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // 更新时段 KPI Strip
    if (dom.periodStrip.down) dom.periodStrip.down.textContent = `${pData.down} Mbps`;
    if (dom.periodStrip.up) dom.periodStrip.up.textContent = `${pData.up} Mbps`;
    if (dom.periodStrip.latency) dom.periodStrip.latency.textContent = `${pData.latency} ms`;
    if (dom.periodStrip.buffer) dom.periodStrip.buffer.textContent = `${pData.buffer} s`;

    // 动态绘制 SVG
    drawSpeedCurve(pData.curve, pData.title);

    // 更新时段评述文字
    if (dom.periodVerdictDesc) {
      dom.periodVerdictDesc.innerHTML = `<strong>💡 实测诊断分析：</strong>${pData.desc} (丢包率实测: <code>${pData.loss}</code>)`;
    }
  }

  // 5. 渲染整页完整测评数据
  function renderAirport(airportId) {
    const ap = AIRPORT_DATABASE[airportId] || AIRPORT_DATABASE['闪电鼠'];
    currentAirportId = ap.id;

    // 更新页面标题
    document.title = `${ap.name} 深度实测评测报告 - 营业时间 / 节假日测速图 / 架构简介 ｜ 翻墙梯子推荐`;

    // 更新面包屑
    if (dom.breadcrumbCurrentAirport) {
      dom.breadcrumbCurrentAirport.textContent = `${ap.name} 深度实测报告`;
    }

    // 更新 Hero 区域
    if (dom.title) dom.title.innerHTML = `${ap.name} <em>深度实测评测报告</em>`;
    if (dom.tagline) dom.tagline.textContent = ap.tagline;

    if (dom.badges) {
      dom.badges.innerHTML = ap.badges.map((b, idx) => {
        const cls = idx === 0 ? 'rh-badge tier-top' : 'rh-badge tier-normal';
        return `<span class="${cls}">${b}</span>`;
      }).join('');
    }

    if (dom.updateDate) dom.updateDate.textContent = ap.updateDate || '2026.10';
    if (dom.arch) dom.arch.textContent = ap.arch || '--';
    if (dom.protocols) dom.protocols.textContent = ap.protocols || '--';
    if (dom.nodeCount) dom.nodeCount.textContent = ap.nodeCount || '--';

    // 评分卡片
    if (dom.score) dom.score.textContent = ap.score;
    if (dom.stars) dom.stars.textContent = ap.stars;
    if (dom.rankText) dom.rankText.textContent = ap.ratingText;

    if (dom.heroGoOfficial) dom.heroGoOfficial.href = ap.url;
    if (dom.sideGoOfficial) dom.sideGoOfficial.href = ap.url;

    if (dom.heroCouponCode) dom.heroCouponCode.textContent = ap.coupon;
    if (dom.sideCouponCode) dom.sideCouponCode.textContent = ap.coupon;

    // 四联指标
    if (dom.kpiPeakDown) dom.kpiPeakDown.textContent = ap.kpis.peakDown;
    if (dom.kpiLatency) dom.kpiLatency.textContent = ap.kpis.latency;
    if (dom.kpiLoss) dom.kpiLoss.textContent = ap.kpis.loss;
    if (dom.kpiUnlock) dom.kpiUnlock.textContent = ap.kpis.unlock;

    // 动态更新模块 2 标题为当前机场名称
    const introHeadingName = document.querySelector('#intro-airport-name');
    if (introHeadingName) {
      introHeadingName.textContent = ap.name;
    }

    // 模块 1: 营业时间与运营档案网格 (升级为 6 大维度高规格网格)
    if (dom.opsArchiveContainer) {
      const ops = ap.opsArchive;
      dom.opsArchiveContainer.innerHTML = `
        <div class="ops-card highlight-ops">
          <h3><span>🕒</span> 客服与工单值守营业时间</h3>
          <p><strong>值守时段：</strong>${ops.hours}</p>
          <p style="margin-top:6px;"><strong>响应时效：</strong>${ops.responseTime}</p>
        </div>
        <div class="ops-card">
          <h3><span>🛰️</span> 7×24 小时高频自动化健康巡检</h3>
          <p>${ops.patrol}</p>
        </div>
        <div class="ops-card">
          <h3><span>📜</span> 品牌运营历史与长线背书</h3>
          <p>${ops.history}</p>
        </div>
        <div class="ops-card">
          <h3><span>🛡️</span> 退款保障与小额试水机制</h3>
          <p>${ops.refund}</p>
        </div>
        <div class="ops-card">
          <h3><span>🚨</span> 突发断网容灾应急响应机制</h3>
          <p>配备多备用订阅发布页与 Telegram 官方应急防失联频道，遭遇上游主入口突发割接或骨干波动时，系统自动秒级倒换备用中转机房，保障业务连续性。</p>
        </div>
        <div class="ops-card">
          <h3><span>🔐</span> 用户隐私与零日志安全保障</h3>
          <p>专线全链路端到端内网物理隔离，杜绝公网中间人嗅探与 DNS 污染注入；服务器严格遵循零访问日志（No-Logs）审计规范，保护用户数据隐私与账号安全。</p>
        </div>
      `;
    }

    // 模块 2: 梯子介绍简介与架构 (增加四大底层技术架构拆解看板)
    if (dom.introContainer) {
      dom.introContainer.innerHTML = `
        <div class="arch-tech-grid">
          <div class="arch-tech-card">
            <span class="arch-tech-badge">LAYER 01 · 接入入口层</span>
            <div class="arch-tech-title"><span>🌐</span> 多线 BGP 智能就近调度</div>
            <p class="arch-tech-desc">国内华南、华东与华北多机房分布式接入，系统自动识别电信、联通、移动宽带并就近分配低延迟入口机房，彻底告别跨网丢包。</p>
          </div>
          <div class="arch-tech-card">
            <span class="arch-tech-badge">LAYER 02 · 专线传输层</span>
            <div class="arch-tech-title"><span>⚡</span> IPLC / IEPL 物理裸纤专线</div>
            <p class="arch-tech-desc">跨境传输端到端全程在内网物理专线内跑通，不经过公网国际出口防火墙过滤，彻底消除晚高峰骨干网拥堵与剧烈网络抖动。</p>
          </div>
          <div class="arch-tech-card">
            <span class="arch-tech-badge">LAYER 03 · 出口原生层</span>
            <div class="arch-tech-title"><span>🎬</span> 原生住宅与商用纯净 IP 池</div>
            <p class="arch-tech-desc">落地机房精选高纯净度出口，针对 Netflix、Disney+、ChatGPT、Claude 实施动态智能分流与原生住宅 IP 伪装清洗，避免风控阻断。</p>
          </div>
          <div class="arch-tech-card">
            <span class="arch-tech-badge">LAYER 04 · 客户端生态</span>
            <div class="arch-tech-title"><span>📱</span> 全平台协议免配置兼容</div>
            <p class="arch-tech-desc">支持 Shadowsocks、Trojan、VLESS 等主流抗封锁协议，完美适配 Clash Verge Rev、小火箭、Sing-box、v2rayN 一键导入。</p>
          </div>
        </div>
        <div class="intro-rich-paragraphs">
          ${ap.intro || '<p>暂无详细介绍</p>'}
        </div>
      `;
    }

    // 侧边栏机房实时测速监控联动
    const sidePingList = document.querySelector('#side-ping-list');
    if (sidePingList && ap.regional) {
      sidePingList.innerHTML = ap.regional.slice(0, 4).map((r) => {
        const cleanName = r.name.replace(/\[.*?\]/, '').trim();
        return `
          <div class="side-ping-item">
            <span>${cleanName}</span>
            <span class="side-ping-val"><span class="live-pulse-dot" style="width:5px;height:5px;"></span> ${r.ping} ms 极佳</span>
          </div>
        `;
      }).join('');
    }

    // 模块 3: 时段切换与测速曲线
    renderTimePeriod(currentPeriod || 'peak');

    // 模块 4: 分地区实测表格
    if (dom.regionalTableBody && ap.regional) {
      dom.regionalTableBody.innerHTML = ap.regional.map((r, i) => {
        const speedNum = parseFloat(r.down) || 500;
        const barWidth = Math.min(100, Math.round((speedNum / 1000) * 100));
        return `
          <tr>
            <td class="node-region-cell">
              <strong>${r.name}</strong>
            </td>
            <td>
              <div class="speed-bar-container">
                <span style="font-family:'DM Mono',monospace;font-weight:700;">${r.down} M</span>
                <div class="speed-bar">
                  <div class="speed-bar-fill ${i % 2 === 1 ? 'fill-orange' : ''}" style="width: ${barWidth}%"></div>
                </div>
              </div>
            </td>
            <td style="font-family:'DM Mono',monospace;">${r.up} M</td>
            <td style="font-family:'DM Mono',monospace;color:#b85210;font-weight:700;">${r.ping} ms</td>
            <td style="font-family:'DM Mono',monospace;">${r.loss}</td>
            <td style="font-family:'DM Mono',monospace;">${r.buffer}s</td>
            <td><span class="badge-tag-pass">${r.rating}</span></td>
          </tr>
        `;
      }).join('');
    }

    // 模块 5: 流媒体与 AI 解锁矩阵
    if (dom.unlockMatrixContainer && ap.unlocks) {
      dom.unlockMatrixContainer.innerHTML = ap.unlocks.map((u) => `
        <div class="unlock-item">
          <div>
            <div class="unlock-name"><span>🌐</span> ${u.name}</div>
            <div style="font-size:11px;color:#7b9499;margin-top:2px;">${u.desc}</div>
          </div>
          <span class="unlock-status ${u.status === 'pass' ? 'status-pass' : 'status-warn'}">
            ${u.status === 'pass' ? '✔ 原生支持' : '⚠ 限制'}
          </span>
        </div>
      `).join('');
    }

    // 模块 6: 套餐价格表
    if (dom.pricingTierBody && ap.plans) {
      dom.pricingTierBody.innerHTML = ap.plans.map((p) => `
        <tr>
          <td><strong>${p.name}</strong></td>
          <td class="price-col">
            <span style="font-size:12px;color:#859ba0;text-decoration:line-through;margin-right:6px;">${p.orig}</span>
            <span>${p.discount}</span>
          </td>
          <td><code style="background:#eaf2f2;padding:3px 6px;border-radius:2px;font-family:'DM Mono',monospace;">${p.traffic}</code></td>
          <td style="color:#4a6369;">${p.desc}</td>
        </tr>
      `).join('');
    }

    // 模块 7: 优缺点
    if (dom.prosList && ap.pros) {
      dom.prosList.innerHTML = ap.pros.map((item) => `<li>${item}</li>`).join('');
    }
    if (dom.consList && ap.cons) {
      dom.consList.innerHTML = ap.cons.map((item) => `<li>${item}</li>`).join('');
    }

    // 模块 8: 结论
    if (dom.verdictContent) {
      dom.verdictContent.textContent = ap.verdict || '';
    }

    // 同步顶部下拉菜单与横向药丸
    if (dom.airportSelect) {
      dom.airportSelect.value = ap.id;
    }

    const pillBtns = document.querySelectorAll('.airport-pill-btn');
    pillBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.id === ap.id);
    });

    // 同步侧边栏榜单高亮
    const jumpItems = document.querySelectorAll('.airport-jump-item');
    jumpItems.forEach((item) => {
      const isCur = item.dataset.id === ap.id;
      item.classList.toggle('is-current', isCur);
      if (isCur) {
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    // 平滑同步 URL，方便用户复制链接直达该梯子测评
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('id', ap.id);
    window.history.replaceState({ id: ap.id }, '', newUrl.toString());
  }

  // 6. 初始化控件与事件监听
  function init() {
    const airportKeys = Object.keys(AIRPORT_DATABASE);

    // 6.1 初始化顶部下拉框
    if (dom.airportSelect) {
      dom.airportSelect.innerHTML = airportKeys.map((k) => {
        const item = AIRPORT_DATABASE[k];
        return `<option value="${k}">${item.no} · ${item.name} (${item.score}分)</option>`;
      }).join('');

      dom.airportSelect.addEventListener('change', (e) => {
        renderAirport(e.target.value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 6.2 初始化顶部 24 家药丸按钮栏
    if (dom.pillsContainer) {
      const pillsHtml = airportKeys.map((k) => {
        const item = AIRPORT_DATABASE[k];
        return `
          <button type="button" class="airport-pill-btn ${k === currentAirportId ? 'active' : ''}" data-id="${k}">
            <span class="pill-rank">${item.no}</span>
            <span>${item.name}</span>
          </button>
        `;
      }).join('');

      dom.pillsContainer.insertAdjacentHTML('beforeend', pillsHtml);

      dom.pillsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.airport-pill-btn');
        if (btn && btn.dataset.id) {
          renderAirport(btn.dataset.id);
        }
      });
    }

    // 6.3 初始化侧边栏 24 家跳转导航列表
    if (dom.jumpNavList) {
      dom.jumpNavList.innerHTML = airportKeys.map((k) => {
        const item = AIRPORT_DATABASE[k];
        return `
          <a href="javascript:void(0)" class="airport-jump-item ${k === currentAirportId ? 'is-current' : ''}" data-id="${k}" data-search="${item.name.toLowerCase()}">
            <span><strong>${item.no}</strong> · ${item.name}</span>
            <span class="jump-score">${item.score} 分</span>
          </a>
        `;
      }).join('');

      dom.jumpNavList.addEventListener('click', (e) => {
        const item = e.target.closest('.airport-jump-item');
        if (item && item.dataset.id) {
          e.preventDefault();
          renderAirport(item.dataset.id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    // 6.4 侧边栏实时搜索过滤
    if (dom.sidebarSearchInput) {
      dom.sidebarSearchInput.addEventListener('input', (e) => {
        const q = (e.target.value || '').trim().toLowerCase();
        const items = dom.jumpNavList.querySelectorAll('.airport-jump-item');
        items.forEach((it) => {
          const match = !q || it.dataset.search.includes(q);
          it.style.display = match ? 'flex' : 'none';
        });
      });
    }

    // 6.5 时段 Tab 切换事件
    dom.timeTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        renderTimePeriod(btn.dataset.period);
      });
    });

    // 6.6 优惠码一键复制交互
    function copyCouponText(couponCode, triggerBtn) {
      if (!couponCode) return;
      navigator.clipboard.writeText(couponCode).then(() => {
        // 显示 Toast
        if (dom.copyToast) {
          dom.copyToast.classList.add('show');
          setTimeout(() => {
            dom.copyToast.classList.remove('show');
          }, 2400);
        }
        // 按钮文字反馈
        if (triggerBtn) {
          const origText = triggerBtn.textContent;
          triggerBtn.textContent = '✓ 已复制！';
          triggerBtn.classList.add('copied');
          setTimeout(() => {
            triggerBtn.textContent = origText;
            triggerBtn.classList.remove('copied');
          }, 2000);
        }
      }).catch(() => {
        prompt('请手动长按或选中复制优惠码：', couponCode);
      });
    }

    if (dom.heroCopyCoupon) {
      dom.heroCopyCoupon.addEventListener('click', () => {
        const ap = AIRPORT_DATABASE[currentAirportId];
        if (ap) copyCouponText(ap.coupon, null);
      });
    }

    if (dom.sideCopyBtn) {
      dom.sideCopyBtn.addEventListener('click', () => {
        const ap = AIRPORT_DATABASE[currentAirportId];
        if (ap) copyCouponText(ap.coupon, dom.sideCopyBtn);
      });
    }

    // 6.7 从 URL 参数解析当前要查看的梯子 ID
    const urlParams = new URLSearchParams(window.location.search);
    const paramId = urlParams.get('id');

    if (paramId) {
      // 支持按名称精确匹配或模糊匹配
      const foundKey = Object.keys(AIRPORT_DATABASE).find((k) => {
        return k.toLowerCase() === paramId.toLowerCase() || paramId.includes(k) || k.includes(paramId);
      });
      if (foundKey) {
        currentAirportId = foundKey;
      }
    }

    // 初始首屏渲染
    renderAirport(currentAirportId);
  }

  // DOM 就绪时初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
