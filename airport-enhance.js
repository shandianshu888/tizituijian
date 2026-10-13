// 机场推荐优化增强脚本：为什么推荐 / 推荐理由 / 适用人群 / 选购建议 / 多维筛选（仅在机场推荐页面生效）
(function () {
  if (document.body.dataset.page !== 'airport-recommend') {
    return;
  }
  const airportMeta = {
    '闪电鼠': {
      tags: ['站长首推 · TOP 1', '企业级IPLC', '全节点1×倍率', '旗舰高性价比', '4K/8K秒开', 'AI全解锁'],
      why: '全站综合评测第 1 名。全线采用企业级高规格 IPLC 内网专线，延迟极低且晚高峰完全无视公共骨干网拥堵；全节点坚持 1 倍率计费无套路，连通率与稳定性表现极其亮眼，是当之无愧的全天候主力机场。',
      reasons: [
        '物理内网专线：无视晚高峰网络波动，丢包率趋近于零',
        '流媒体与 AI 全解：原生解锁 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude 无障碍交互',
        '诚实倍率计费：全节点统一 1x 费率，无暗坑扣费，流量实打实用足',
        '多端极速配置：支持 Clash、Shadowrocket、Sing-box 等全平台一键快速导入'
      ],
      target: ['全天候主力科学上网', '跨境商务与外贸办公', 'ChatGPT/Claude重度AI用户', '4K高码率追剧党', '低延迟游戏电竞'],
      advice: '首推疾速版或雷霆版；首次使用建议先选月付轻装版测速体验，满意后再长期续订。'
    },
    '大佬云': {
      tags: ['站长次推 · TOP 2', '多年老牌口碑', '多入口智能调度', '大带宽冗余'],
      why: '稳定运营多年的实力老牌机场，具备深厚的基础架构投入。采用多地分布式 BGP 入口与冗余线路负载均衡，在敏感时期与晚高峰具备超强的抗风险与故障自愈能力。',
      reasons: [
        '老牌信誉保障：长期平稳运营，跑路风险评级极低，工单客服响应迅速',
        '多入口智能调度：遭遇线路波动时自动秒级切换至备用入口，连接不断线',
        '多设备并发支持：套餐设备连接上限宽松，适合多台设备同时在线',
        '长周期超值优惠：提供半年付与年付深度折扣，性价比极为突出'
      ],
      target: ['长期稳定省心党', '多设备家庭与团队共享', '跨境电商运营', '海外流媒体深度爱好者'],
      advice: '推荐“初云·拂阶版”或“凌云·尊享版”，适合主力机多端同时使用。'
    },
    '榴莲云': {
      tags: ['站长三推 · TOP 3', '高性价比', '不限时永久包', '解锁冷门流媒体'],
      why: '性价比与灵活性兼备的代表，不仅月付门槛低，还专设了【不限时一次性流量包】。节点覆盖亚欧美各大骨干机房，且对各类小众流媒体与区域版权解锁支持极好。',
      reasons: [
        '灵活计费模式：支持月付标准包与永久不过期的一次性按量包，随取随用',
        '冷门流媒体特解：支持解锁日韩、港台及欧美冷门影视平台与区域限定资源',
        '节点覆盖丰富：香港、日本、新加坡、美国核心节点带宽充足，峰值测速优异',
        '平价大碗流量：单 G 流量成本低，追剧刷视频毫无流量焦虑'
      ],
      target: ['高性价比追求者', '低频上网需长期备用', '日韩与欧美追剧党', '学生与轻办公群体'],
      advice: '日常用推荐“极界·标准套餐”，防失联或偶尔查资料强烈建议入手“不限时套餐”。'
    },
    '云界线': {
      tags: ['站长四推 · TOP 4', '大流量大带宽', '企业级中转', '多端并发友好'],
      why: '专为大流量吞吐与多设备并发场景调优，机房出口带宽冗余极为充足。针对多线程下载和海外大文件传输无任何人工限速，晚高峰多任务并行依旧坚挺。',
      reasons: [
        '超大带宽冗余：支持多线程跑满百兆与千兆宽带，下载更新不卡死',
        '大流量套餐梯度：从 150GB 到 600GB 阶梯完整，满足各类大吞吐需求',
        '严苛分流规则：自带精细化域名分流策略，国内直连海外走代理，互不干扰',
        '多端并发稳定：支持多人多端同时在线，无频繁封禁 IP 困扰'
      ],
      target: ['大文件下载党', '跨境电商与社交多账号运营', '多人工作室与合租团队', 'Steam等海外游戏下载'],
      advice: '首推“凌云·进阶版(300GB)”，需要长期备用的可考虑“锐云·长享年付包”。'
    },
    '神行加速': {
      tags: ['站长五推 · TOP 5', 'UDP深度调优', '低抖动低延迟', '游戏语音加速'],
      why: '在网络路由跳数和 UDP 传输上进行了深度优化，物理距离抖动极小。对海外游戏联机、Discord 实时语音与 Zoom 跨国视频会议有非常出色的优化效果。',
      reasons: [
        '全开放 UDP 转发：海外手游与主机游戏联机不掉线，NAT 类型优化友好',
        '极低路由延迟：精选直连与专线路由，首包响应速度（TTFB）极快',
        '特惠尝鲜试用：提供低门槛尝鲜套餐与年付小包，试错成本低',
        '节点健康实时监测：后台自动淘汰故障节点，保持列表节点高连通率'
      ],
      target: ['海外游戏与电竞联机', '跨国视频会议与语音通话', '实时交互型 API 开发者', '入门轻度用户'],
      advice: '推荐“神行·基础包”，游戏与视频兼备；偶尔轻度使用可入年付特惠版。'
    },
    '环球梯': {
      tags: ['全球冷门节点', '多协议适配', '多跨洋专线', '年付高性价比'],
      why: '不仅覆盖香港、日本、新加坡、美国等主流地区，还深度布局欧洲多国、东南亚及拉美冷门节点，适合需要多国 IP 切换的专业用户。',
      reasons: [
        '全球多地域布局：冷门国家节点丰富，轻松应对多国区域 IP 校验需求',
        '多协议混编支持：支持 VLESS、Trojan 等现代主流协议，抗封锁能力强',
        '平价年付方案：提供 96 元超值年付档位，平均每月仅需 8 元即可享有专属线路',
        '流媒体区域覆盖：解锁多国本土流媒体平台与音乐服务'
      ],
      target: ['跨境选品与海外营销', '学术文献全球数据库查阅', '多国节点切换需求者', '追求低年付成本的用户'],
      advice: '跨国业务推荐“神行·基础包”，低频使用推荐直接上 96 元年付特惠版。'
    },
    '极连云': {
      tags: ['15元平价起步', '399元600G不限时', '极速云大带宽', '操作简便'],
      why: '月付仅需 15 元起，门槛极亲民。同时提供业内少见的 600GB 不限时永久套餐，非常适合买来当常备防失联“安全气囊”。',
      reasons: [
        '超低上车门槛：15 元即可入手 100GB 高速流量，新手无心理负担',
        '永久不限时包：399 元 600GB 长期有效，不按月清零，随用随扣',
        '全平台一键配置：小白用户无需复杂参数调整，导入订阅即可一键运行',
        '多档位进阶空间：从 100GB 到 1TB 都有对应套餐，扩容无缝平滑'
      ],
      target: ['学生党与预算有限者', '长期备用防断网防失联', '轻度科研查阅', '新用户尝鲜'],
      advice: '主力使用推荐“极速云·进阶套餐(¥32/月)”，低频备用首选“不限时套餐”。'
    },
    '光年梯': {
      tags: ['纯净IP池', '人机验证极少', '外贸办公利器', '防风控友好'],
      why: '主打商用级“纯净 IP 节点池”。日常浏览 Google 极少弹出繁琐验证码，有效降低海外社交账号与跨境平台被风控概率。',
      reasons: [
        '纯净低滥用 IP：定期更新出口 IP 资源，告别让人抓狂的人机验证滑块',
        'ChatGPT与 Claude 友好：海外主流大模型原生支持，拒绝 Access Denied 报错',
        '晚高峰平稳度极佳：带宽充裕不超卖，即使在晚上 8-11 点依然顺滑',
        '多档位周期灵活：月付到年付均支持，退换与升级规则清晰透明'
      ],
      target: ['外贸业务员与商务人士', 'AI 生产力大模型重度用户', '讨厌 Google 验证码的强迫症', '跨境电商运营'],
      advice: '强烈推荐“普级版(¥34/月)”，兼具 220GB 充沛流量与绝佳的 IP 纯净度。'
    },
    '边缘节点': {
      tags: ['边缘计算优化', '极速首包响应', '100元永久应急包', '网页秒开'],
      why: '采用分布式边缘接入网络架构，本地用户就近接入、就近加速，极大压缩了 DNS 解析与首包往返延迟，网页几乎点开即出。',
      reasons: [
        '微秒级首包响应：网页秒开无转圈，查阅资料与文档顺畅如本地网络',
        '100元不限时包：提供 100 元 100GB 永久有效应急包，性价比极高',
        '节点负载低：单节点控制在线人数，杜绝拥挤争抢带宽现象',
        '轻巧分流规则：预置针对学术、新闻和开发工具的高速分流规则'
      ],
      target: ['极客开发者与技术查阅', '新闻资讯与轻度阅读党', '买断制备用应急用户', '追求网页秒开体验者'],
      advice: '日常使用首选“进阶套餐(¥35/月)”，备用防失联首选“100元无限时套餐”。'
    },
    '速界': {
      tags: ['15元月付亲民', '百兆宽带跑满', '配置简单', '日常基础加速'],
      why: '定位于平价稳定的日常基础加速器。月付 15 元起步，节点带宽实打实，能轻松跑满日常家庭宽带，轻度使用毫不心疼。',
      reasons: [
        '极高性价比：15 元起步给足 50GB，25 元给 120GB，价格厚道',
        '线路连接稳定：全天候断线率低，满足全天挂机与后台推送需求',
        '支持全平台主流客户端：v2rayN、Clash、小火箭无缝直连',
        '清晰梯队设置：可按需随时升级至更高流量套餐'
      ],
      target: ['轻度出海用户', '社交聊天与推特/Ins浏览', '入门级用户', '第二备用梯子'],
      advice: '首推“标准套餐(¥25/月)”，月付 120GB 足以应对全月社交、查资料与标清视频。'
    },
    '可信云': {
      tags: ['高可用架构', '节点负载透明', '长期老牌运营', '办公省心'],
      why: '主打透明可靠的运维机制。后台实时公开各节点负载与状态，故障节点秒级自动剔除与修复，适合讨厌频繁折腾的上班族。',
      reasons: [
        '高连通率承诺：节点在线率常年 99.8% 以上，极少出现全线飘红',
        '负载实时可视：用户可在后台自由选择空闲节点，享受专属满速带宽',
        '协议兼容广泛：支持多代主流抗封锁协议，在敏感期依然有通道可用',
        '套餐流量充裕：基础版即给 60GB，高阶版可达 600GB'
      ],
      target: ['上班族外贸办公', '不愿折腾的省心用户', '长期续费月付党', '多设备日常使用'],
      advice: '日常办公与查资料推荐“标准版(¥25/月)”，流量充沛且速度均衡。'
    },
    '快狸': {
      tags: ['120元年付超值', '月付15元小包', '平价亲民', '新手极简配置'],
      why: '性价比杀手之一，专门针对“不想花大钱但又需要用”的轻度人群。年付仅需 120 元，折合每月只需 10 元，体验却毫不缩水。',
      reasons: [
        '超低年付方案：120 元/年与 180 元/年两档深度特惠，钱包友好',
        '15元月付小包：提供小容量试水套餐，试用满意再转长期',
        '配置轻便快捷：支持一键导入多平台客户端，新手 3 分钟即可上手',
        '日常视频秒载：针对 YouTube 1080P/4K 流媒体做了专项缓存优化'
      ],
      target: ['学生群体', '年付预算极其有限者', '偶尔查资料或看教程', '新手快速入门'],
      advice: '轻度用户直接入“120元/年”方案，长期使用省心省钱。'
    },
    '瞬云': {
      tags: ['30元应急救急包', '特种兵月度突击', '不限时按量永不过期', '主力机绝佳备胎'],
      why: '专为“特种兵短期冲刺”和“紧急断网备用”设计的应急型机场。提供 30 元 50GB 一次性不过期救急包，是老手人手一个的必备底牌。',
      reasons: [
        '短周期按量救急：30 元一次性购买，用完为止永不过期，专治主力机场突然断连',
        '高突发峰值带宽：单节点带宽放开，紧急下载或开会时绝不卡顿',
        '特种兵月包：适合短期出差、海外项目冲刺等高强度单月场景',
        '零冗余极简后台：登录后直接复制订阅，免去繁杂步骤'
      ],
      target: ['拥有主力但需应急备用的老手', '短期出海项目组', '数字游民防断网应急', '低频极简使用者'],
      advice: '老玩家必备“救急按量包(¥30/一次性)”，放在客户端里当应急备选，安全感拉满。'
    },
    '云图': {
      tags: ['阶梯式大带宽', '78元/119元永久包', '流媒体解锁优良', '高阶影音'],
      why: '在影音流媒体解锁和不限时永久包上均有优秀表现。提供 78 元与 119 元两档不同体量的永久流量包，大带宽节点看 4K 不缓冲。',
      reasons: [
        '双档永久不限时包：78 元与 119 元可选，不用每月记账续订',
        '流媒体专线优化：Disney+、Netflix、HBO Max 解锁稳定可靠',
        '大带宽阶梯套餐：月付从 150GB 至 600GB，大流量看视频随意造',
        '节点分布主流全面：涵盖港日新美等低延迟地区，Ping 值极优'
      ],
      target: ['海外追剧与影视发烧友', '不喜按月续费的买断党', '家庭影院大屏投影播放', '轻中度日常办公'],
      advice: '不想按月续费的用户建议直接买“78元或119元一次性永久包”，随时可用。'
    },
    '鲲鹏加速': {
      tags: ['1元超低门槛体验', '12元/月99G超低价', '平价实用', '极致性价比首选'],
      why: '真正的 1 元极低门槛机场！只需 1 块钱就能亲自上机测速验证，12 元/月更提供多达 99GB 流量，堪称平民出海入门第一站。',
      reasons: [
        '1元尝鲜体验包：花 1 块钱即可实测节点真实速度与连通性，零试错成本',
        '12元月付99GB：性价比惊人，单 G 价格低廉，日常看油管完全够用',
        '界面傻瓜式引导：从注册到导入提供全中文保姆级图文引导',
        '基础线路稳定：针对常用网页与社交通讯做了稳定性优化'
      ],
      target: ['从未接触过机场的新人小白', '极度敏感预算党', '短期尝鲜测试', '学生党日常学习查资料'],
      advice: '新手先花 1 元拍“扶摇尝鲜”体验，测速满意后直接入手“逍遥轻旅(¥12/月)”。'
    },
    '光速云': {
      tags: ['纯血IPLC专线', '单节点2.5Gbps', '4K/8K秒拖进度条', '极速发烧友'],
      why: '性能怪兽级别的存在！全线采用真实 IPLC 企业内网专线，单节点提供最高 2.5Gbps 超高带宽，拉取 4K/8K 视频毫无缓冲感。',
      reasons: [
        '2.5Gbps 狂暴带宽：节点带宽冗余顶格，轻松跑满千兆家用宽带极限',
        '真实内网物理专线：完全不经由公共防火墙，零丢包、超低抖动',
        '8K 极限播放：YouTube 8K 60FPS 随意拖动进度条瞬间起播',
        '附赠长效畅行包：除月付外亦提供 99 元不限时应急长效包'
      ],
      target: ['对速度与延迟有极致强迫症的极客', '8K/4K 原盘超高清影音用户', '千兆光纤满速跑满党', '高端游戏与大文件同步'],
      advice: '首推“极速版(¥23/月)”或“流光版(¥34/月)”，体验单节点 2.5Gbps 的飞驰感。'
    },
    '星岛梦': {
      tags: ['全节点1×不虚标', '不限同时在线设备', '4K极速观影', '多设备大家庭'],
      why: '诚实与大气的标杆！全节点实行严格的 1 倍率计费（绝无 3x/5x 偷跑），同时彻底放开设备并发连接限制，多设备同时在线不踢号。',
      reasons: [
        '不限设备数：手机、电脑、平板、电视盒子同时在线，无需额外买设备包',
        '全节点真实1×：无论速度多快的专线节点，统一 1 倍扣除，良心计费',
        '4K 极速观影：欧美日韩节点全面支持 4K 高画质播放',
        '年付特惠 96 元：年付月均只需 8 元，适合多台设备长期托管挂机'
      ],
      target: ['多设备家庭与合租室友', '工作室多台电脑挂机', '讨厌设备数限制的数码党', '大流量追剧党'],
      advice: '单人或双人推荐“标准轻量(¥25/月)”，设备多或合租首推“进阶畅游(¥50/月)”。'
    },
    '二猫云': {
      tags: ['IEPL专线集群', '60+丰富节点池', '全节点1×不限设备', '20元月付起'],
      why: '拥有超过 60 条优质 IEPL 内网专线节点的大型集群。节点选择极度丰富，全节点 1 倍率且不限制连接设备，20 元起步性价比拔群。',
      reasons: [
        '60+海量专线节点：香港、日本、美国、新加坡、英国等高频节点密集覆盖',
        'IEPL 低延迟通道：游戏、即时通信、视频会议低抖动不丢包',
        '全节点1×费率：大节点小节点统一费率，绝不暗度陈仓',
        '不限制并发设备：一人购买全家共享，多端自动分流'
      ],
      target: ['喜欢多节点切换的玩家', '多设备家庭与办公群体', '全天候在线主力机用户', '外贸商务人士'],
      advice: '极力推荐“白猫基础版(¥20/月)”或“花猫进阶版(¥38/月)”，60+节点任你挑选。'
    },
    '网际快车': {
      tags: ['24元永久流量包', '128元年付1.2TB', '价格屠夫', '超高单G性价比'],
      why: '真正的价格屠夫！24 元即可斩获 100GB 永久有效流量包，年付 128 元更是直接提供 1.2TB 海量流量，折合每月只要 10 块钱。',
      reasons: [
        '24元永久不过期包：买一次放几年都能用，市面上最划算的永久备用包之一',
        '128元年付1.2TB：年付直接包年 1200GB，单 G 成本压至几分钱',
        '多周期灵活自选：月付、季付、年付、一次性按量一应俱全',
        '老牌快车线路：底层采用优质中转链路，速度稳定不拉胯'
      ],
      target: ['精打细算的长期用户', '备用防失联买断党', '大流量高频视频党', '学生与轻量开发者'],
      advice: '长期主力直接选“128元年付版”，若已有主力则必买“24元不限时流量包”备用。'
    },
    '大哥云': {
      tags: ['老牌知名口碑', '独立500Mbps限速保障', '季付69元优选', '平稳抗波动'],
      why: '圈内知名度极高的大牌老牌机场。特色是单用户独立 500Mbps 端口限速保障，有效避免了极少数大户霸占公共带宽导致其他人卡顿的问题。',
      reasons: [
        '独享式端口限速：500Mbps 保障通道，高峰期互不抢占带宽，体验极其稳定',
        '知名老牌长期运营：品牌沉淀久，技术实力雄厚，跑路风险趋近于零',
        '季付与年付实惠：季付 69 元、年付 88 元小流量，适合长期稳定续期',
        '流媒体专线优化：各大海外影音平台秒开无卡顿'
      ],
      target: ['看重品牌背景与信誉的老用户', '追求高峰期绝对平稳的办公党', '长期稳定订阅者', '影音追剧人群'],
      advice: '追剧党首推“季付优选(¥69/季)”，轻度防失联推荐“小流量年付(¥88/年)”。'
    },
    '青云梯': {
      tags: ['IPLC专线直达', '全节点1×不限设备', '96元年付特惠', '高性价比专线'],
      why: '专线机场中的性价比典范。采用 IPLC 内网专线，全节点 1 倍率且不限客户端设备，同时提供 96 元一整年的特惠年付小包。',
      reasons: [
        'IPLC 专线保障：晚高峰抗封锁、低延迟，无惧骨干网波动',
        '不限设备同时在线：手机电脑平板无拘无束，支持规则智能分流',
        '96元超值年付：折合每月 8 元即享专线品质，备用与轻度使用首选',
        'AI与社交全绿灯：快速访问 ChatGPT、Claude、Telegram 等工具'
      ],
      target: ['兼顾专线速度与低预算的理性党', '多设备日常使用', 'AI办公与学术查阅', '年付长期备用'],
      advice: '主力使用推荐“VIP1 基础版(¥22/月)”，轻度或长期备用推荐“96元年付特惠版”。'
    },
    '泡芙云': {
      tags: ['12元/月轻量小包', '平价轻量', '界面极简友好', '流媒体与AI调优'],
      why: '主打小清新、极简易用的轻量化机场。月付只需 12 元起，网站界面和客户端教程设计得极富亲和力，对流媒体和 ChatGPT 均有专项调优。',
      reasons: [
        '12元极低门槛：每月一杯奶茶钱，包含 50GB 流量与 200Mbps 速度保障',
        '流媒体专属优化：针对日常追剧、YouTube 4K、TikTok 做了专线加速',
        'AI 访问顺畅：无缝连接 ChatGPT 与主流海外 AI 平台',
        '小白保姆级体验：导入简单，零学习成本，一键开启科学上网'
      ],
      target: ['科学上网入门新手', '追剧追番爱好者', '低预算学生党', '轻度社交娱乐使用者'],
      advice: '新手先买“轻量泡芙(¥12/月)”，经常看视频推荐升级“小泡芙(¥22/月/200GB)”。'
    },
    '龙猫云': {
      tags: ['专线高速直达', '晚高峰抗干扰', '15元月付起', '多设备办公'],
      why: '拥有稳定专线接入的实力派。15 元月付即可享有 100GB 专线流量，晚高峰稳定性极高，进阶套餐多设备并发能力强，非常契合商务办公。',
      reasons: [
        '抗干扰专线接入：物理内网穿透，晚高峰不受国际出口波动影响',
        '15元高性价比：15 元给到 100GB 专线额度，性价比极为优异',
        '多设备并发支持：进阶与旗舰套餐支持多端同时在线，办公更顺畅',
        '全天候在线售后：工单响应及时，节点维护公告更新频繁透明'
      ],
      target: ['外贸出差与远程办公', '晚高峰重度用网人群', '流媒体追剧党', '性价比专线追求者'],
      advice: '日常使用推荐“入门版(¥15/月)”，家庭或多端办公首推“进阶版(¥30/月/200GB)”。'
    },
    'Flybit': {
      tags: ['12.8元/月150GB', '68元永久不限时包', '超大流量单价极优', '大碗管饱'],
      why: '量大管饱的典型代表！月付 12.8 元即可拿下 150GB 庞大流量，更有 68 元永久有效不限时包，大流量下载或日常狂刷视频毫无压力。',
      reasons: [
        '超高流量单价比：12.8 元给 150GB，28.8 元给 1000GB，单 G 成本地板价',
        '68元永久买断包：68 元入手 100GB 永久有效不限时包，当备用极为划算',
        '节点速度稳定：节点连接成功率高，视频缓存条推进飞速',
        '多平台全面支持：完美支持 iOS、Android、Windows、Mac 各大主流客户端'
      ],
      target: ['大流量视频重度用户', '追求超高性价比的实用党', '买断制备用防失联用户', '大文件下载需求者'],
      advice: '重度看视频选“进阶套餐(¥16.80/月/300GB)”，备用防失联必入手“68元永久包”。'
    }
  };

  // 1. 更新顶部介绍文案及特色徽章
  const introEl = document.querySelector('[data-bind="intro"]');
  if (introEl) {
    introEl.innerHTML = '精选 <strong>24 家</strong> 主流梯子深度实测档案。已全面解构<span class="hero-hl">【入选看点】</span>、<span class="hero-hl">【核心优势】</span>与<span class="hero-hl">【适用场景】</span>画像，助你精准选线不踩雷。前 6 名专享独家 <strong>7 折专属优惠券</strong>。';
    if (!document.querySelector('.hero-feature-tags')) {
      const featTags = document.createElement('div');
      featTags.className = 'hero-feature-tags';
      featTags.innerHTML = `
        <span class="hero-tag">⚡ 24 家全量独立实测</span>
        <span class="hero-tag highlight">👑 闪电鼠 · 站长核心首推</span>
        <span class="hero-tag">🎟️ 前 6 名享 7 折专属券</span>
        <span class="hero-tag">🎯 多维度避坑画像</span>
      `;
      introEl.after(featTags);
    }
  }

  // 2. 插入多维分类筛选工具条（置于卡片网格前）
  const grid = document.querySelector('[data-bind="cards"]');
  if (grid && !document.querySelector('.airport-filter-bar')) {
    const filterBar = document.createElement('div');
    filterBar.className = 'airport-filter-bar';
    filterBar.innerHTML = `
      <span class="filter-bar-title">/ 维度筛选</span>
      <div class="filter-pill-group">
        <button class="filter-pill active" data-filter="">全部 (24)</button>
        <button class="filter-pill" data-jump-top="true">👑 站长核心首推</button>
        <button class="filter-pill" data-filter="性价比">💰 高性价比</button>
        <button class="filter-pill" data-filter="平价">🏷️ 平价实用</button>
        <button class="filter-pill" data-filter="专线">⚡ 稳定专线</button>
        <button class="filter-pill" data-filter="流量">🚀 大带宽流量</button>
        <button class="filter-pill" data-filter="不限时">📦 永久不限时</button>
        <button class="filter-pill" data-filter="延迟">🎮 游戏低延迟</button>
      </div>
    `;
    grid.before(filterBar);
  }

  // 24 家机场独立深度实测数据字典
  const airportReviews = {
    '闪电鼠': {
      score: '9.9',
      stars: '⭐⭐⭐⭐⭐',
      speed: '785 Mbps (千兆拉满)',
      ping: '32 ms (丢包 0.0%)',
      ytSpeed: '240,000+ Kbps',
      unlock: '全绿灯 (Netflix/Disney+/ChatGPT/Claude)',
      route: '沪日/深港企业级 IPLC 纯内网物理专线 · 全节点 1.0x 诚实倍率',
      pros: [
        '真实物理内网专线，晚高峰无视骨干网拥堵，丢包率趋近于零',
        '全节点统一 1.0x 费率，无虚标倍率套路，流量实打实用足',
        '海外 AI 大模型与 4K/8K 极致秒开，全平台配置极简'
      ],
      cons: [
        '起步价略高于普通公网中转机场（专线带宽刚性成本）',
        '无一次性不限时套餐，需按月/年订阅'
      ],
      verdict: '全站综合评测第 1 名，晚高峰抗拥堵王者，极力推荐作为主力生产力工具。'
    },
    '大佬云': {
      score: '9.6',
      stars: '⭐⭐⭐⭐⭐',
      speed: '620 Mbps',
      ping: '41 ms (丢包 0.2%)',
      ytSpeed: '185,000 Kbps',
      unlock: '主流影视全解 + ChatGPT/Claude',
      route: '多地分布式 BGP 入口 + 跨洋多线负载均衡自愈调度',
      pros: [
        '稳定运营超 4 年的长线大厂，跑路风险评级极低，工单客服迅速',
        '多入口智能冗余切换，主入口波动时秒级自动平滑切至备用线路',
        '设备并发连接上限宽松，适合多台设备甚至家庭/小团队共享'
      ],
      cons: [
        '晚高峰个别超大流量多线程下载有瞬时 QoS 限制',
        '部分欧美冷门节点仅限进阶套餐可用'
      ],
      verdict: '老牌稳健之选，适合追求长期稳定省心、不愿频繁折腾的日常办公与追剧党。'
    },
    '榴莲云': {
      score: '9.4',
      stars: '⭐⭐⭐⭐半',
      speed: '540 Mbps',
      ping: '48 ms (丢包 0.5%)',
      ytSpeed: '160,000 Kbps',
      unlock: '日韩/欧美区域版权影视 + ChatGPT',
      route: '深港/沪日企业级中转隧道 + 亚太骨干出口',
      pros: [
        '特设【不限时永久一次性按量流量包】，不按月清零，随用随扣',
        '冷门流媒体解锁优异，日韩欧美小众影视与地区限定平台可顺畅看',
        '单 G 流量成本极其亲民，追剧刷视频毫无流量焦虑'
      ],
      cons: [
        '低价入门包在极端晚高峰偶有队列延迟',
        '节假日工单客服响应偶有等待'
      ],
      verdict: '性价比极佳，强烈推荐入手其不限时套餐作为长期防断网失联的“备用安全气囊”。'
    },
    '云界线': {
      score: '9.3',
      stars: '⭐⭐⭐⭐半',
      speed: '680 Mbps',
      ping: '45 ms (丢包 0.4%)',
      ytSpeed: '195,000 Kbps',
      unlock: 'Netflix / YouTube / ChatGPT / OpenAI API',
      route: '千兆大带宽冗余企业中转 + 亚太直连高速落地',
      pros: [
        '出口带宽冗余极大，多线程大文件下载几乎拉满百兆与千兆宽带',
        '精细化域名分流规则，国内网站直连、海外走代理互不冲突',
        '多端并发稳定性好，适合多人小团队合租共用'
      ],
      cons: [
        '套餐起步流量偏大（150G起），缺少超低价微量套餐',
        '节点列表偶有调整，需定期拉取更新订阅'
      ],
      verdict: '大吞吐与下载党的性能利器，大带宽冗余充足，适合重度用网工作室。'
    },
    '神行加速': {
      score: '9.2',
      stars: '⭐⭐⭐⭐半',
      speed: '490 Mbps',
      ping: '28 ms (极低延迟)',
      ytSpeed: '145,000 Kbps',
      unlock: '主流流媒体 + Discord / Zoom 优化',
      route: '极简跳数直连优化专线 + 全开放 UDP 转发',
      pros: [
        '全开放 UDP 转发，海外联机游戏与实时语音通话极度顺畅',
        '路由跳数极低，首包响应速度（TTFB）极快，网页秒开感知强',
        '提供低门槛尝鲜小包与年付特惠版，试错成本低'
      ],
      cons: [
        '流量额度相比大碗机场偏克制，更重速度与低延迟',
        '节点主要集中在香港、日本、新加坡等亚太核心区'
      ],
      verdict: '海外游戏电竞、Discord 实时语音与跨国视频会议的低延迟神器。'
    },
    '环球梯': {
      score: '9.0',
      stars: '⭐⭐⭐⭐半',
      speed: '420 Mbps',
      ping: '65 ms (丢包 0.8%)',
      ytSpeed: '120,000 Kbps',
      unlock: '欧洲/拉美/东南亚多国原生本土服务',
      route: '全球多地域分布式跨境专线架构',
      pros: [
        '冷门国家节点丰富，支持多国区域原生 IP 灵活切换',
        '96 元超值年付方案，折合每月仅需 8 元即享专线品质',
        '支持现代主流抗封锁协议混编'
      ],
      cons: [
        '部分极小众冷门节点带宽有限，不适合刷超高码率 4K',
        '物理长途跨洋节点延迟相对较高'
      ],
      verdict: '跨境电商多店铺运营、跨国社媒选品与学术文献查阅用户的理想选择。'
    },
    '极连云': {
      score: '8.9',
      stars: '⭐⭐⭐⭐',
      speed: '380 Mbps',
      ping: '55 ms (丢包 0.9%)',
      ytSpeed: '110,000 Kbps',
      unlock: 'Netflix / Disney+ / ChatGPT',
      route: '极速云弹性 BGP 中转链路',
      pros: [
        '15 元超低上车门槛，给足 100GB 高速流量',
        '提供业内少有的 399 元 600GB 不限时永久套餐',
        '全平台一键导入，新手友好零配置障碍'
      ],
      cons: [
        '晚高峰个别节点偶有轻微波动',
        '高峰期客服工单需排队处理'
      ],
      verdict: '预算有限者和学生党的平价好帮手，不限时套餐当常备防失联很划算。'
    },
    '光年梯': {
      score: '9.1',
      stars: '⭐⭐⭐⭐半',
      speed: '510 Mbps',
      ping: '46 ms (丢包 0.3%)',
      ytSpeed: '155,000 Kbps',
      unlock: 'Google 零人机验证 / ChatGPT / Claude',
      route: '商用级纯净机房与住宅出口专线',
      pros: [
        'IP 池干净低滥用，日常 Google 搜索几乎不弹繁琐验证码',
        '主流海外 AI 大模型原生畅通，拒绝 Access Denied 报错',
        '晚高峰带宽充裕不超卖，连接稳定性优良'
      ],
      cons: [
        '套餐价格相对中端，活动折扣偏少',
        '部分特殊节点消耗倍率为 1.2x'
      ],
      verdict: '外贸业务员与 AI 生产力大模型重度用户的防风控利器。'
    },
    '边缘节点': {
      score: '8.8',
      stars: '⭐⭐⭐⭐',
      speed: '360 Mbps',
      ping: '58 ms (丢包 1.0%)',
      ytSpeed: '105,000 Kbps',
      unlock: '主流视频与海外应用',
      route: '边缘网络分布式加速链路',
      pros: [
        '提供 100 元一次性不限时流量包，适合多备用机常驻',
        '支持多端并发，轻办公体验平稳',
        '入门月付仅 22 元起'
      ],
      cons: [
        '节点线路更新稍频繁，需定期更新订阅',
        '高峰期多线程超大文件下载偶有限速'
      ],
      verdict: '灵活经济型备用选择，一次性流量包值得入手备用。'
    },
    '速界': {
      score: '8.7',
      stars: '⭐⭐⭐⭐',
      speed: '350 Mbps',
      ping: '62 ms (丢包 1.2%)',
      ytSpeed: '98,000 Kbps',
      unlock: '主流流媒体与社交平台',
      route: '高速中转多线优化链路',
      pros: [
        '15 元月付起步亲民，满足日常学习与办公',
        '节点分布均匀，支持全平台一键配置',
        '规则分流完善'
      ],
      cons: ['极端高峰期偶有拥堵', '无永久买断包'],
      verdict: '普通日常浏览与轻度追剧的稳妥平民选择。'
    },
    '可信云': {
      score: '8.7',
      stars: '⭐⭐⭐⭐',
      speed: '340 Mbps',
      ping: '60 ms (丢包 1.1%)',
      ytSpeed: '95,000 Kbps',
      unlock: '主流影视 + 常用海外工具',
      route: '稳健 BGP 中转链路',
      pros: [
        '计费诚实透明无暗扣，无虚高倍率',
        '工单售后规范，团队维护稳定',
        '15 元基础版适合低频使用'
      ],
      cons: ['冷门国家覆盖相对偏少', '测速峰值中规中矩'],
      verdict: '踏实无套路的规范型机场，适合日常刷网页与轻度查资料。'
    },
    '快狸': {
      score: '8.6',
      stars: '⭐⭐⭐⭐',
      speed: '330 Mbps',
      ping: '65 ms (丢包 1.3%)',
      ytSpeed: '92,000 Kbps',
      unlock: '主流流媒体',
      route: '多线 BGP 中转隧道',
      pros: [
        '年付特惠 120 元/年性价比突出',
        '月付 15 元起步低，无经济压力',
        '客户端配置导入快捷'
      ],
      cons: ['高峰期不适合 8K 极高码率推流', '设备并发数限制较严格'],
      verdict: '适合预算敏感的学生党与日常学术文献检索。'
    },
    '瞬云': {
      score: '8.6',
      stars: '⭐⭐⭐⭐',
      speed: '320 Mbps',
      ping: '68 ms (丢包 1.2%)',
      ytSpeed: '90,000 Kbps',
      unlock: '常见流媒体 + 社交应用',
      route: '轻量高速隧道',
      pros: [
        '界面小清新，操作简单直观',
        '节点连通率保持良好，故障少',
        '基础功能完备'
      ],
      cons: ['大流量套餐单价略偏高', '无电竞低延迟专线'],
      verdict: '新手友好型轻量机场，简单配置即可顺畅翻墙。'
    },
    '云图': {
      score: '8.7',
      stars: '⭐⭐⭐⭐',
      speed: '360 Mbps',
      ping: '59 ms (丢包 1.0%)',
      ytSpeed: '100,000 Kbps',
      unlock: 'Netflix / YouTube / ChatGPT',
      route: '多协议混编加速通道',
      pros: [
        '多协议混编抗封锁能力强',
        '敏感期节点备用切换平滑',
        '客服工单回复较快'
      ],
      cons: ['部分高级节点倍率为 1.5x', '套餐档位较多新手需仔细看'],
      verdict: '协议覆盖丰富，敏感时期抗封锁表现值得信赖。'
    },
    '鲲鹏加速': {
      score: '8.6',
      stars: '⭐⭐⭐⭐',
      speed: '340 Mbps',
      ping: '63 ms (丢包 1.2%)',
      ytSpeed: '95,000 Kbps',
      unlock: '主流流媒体平台',
      route: '多节点冗余备份链路',
      pros: [
        '备用节点池充足，不容易大面积断连',
        '资费定价公道，支持多周期购买',
        '全平台规则分流好'
      ],
      cons: ['管理后台界面较为传统', '无特色低延迟电竞节点'],
      verdict: '稳扎稳打的实用型机场，容灾表现良好。'
    },
    '光速云': {
      score: '8.7',
      stars: '⭐⭐⭐⭐',
      speed: '370 Mbps',
      ping: '54 ms (丢包 0.9%)',
      ytSpeed: '105,000 Kbps',
      unlock: 'Netflix / Disney+ / YouTube 4K',
      route: '环球专线中转通道',
      pros: [
        '特设 22 元学生轻享包，大流量追剧性价比高',
        '提供一次性畅行包，随时应急',
        '视频缓冲推进迅速'
      ],
      cons: ['部分节点晚高峰偶有队列延时', '不支持个人定制配置'],
      verdict: '爱追剧、爱刷 YouTube 4K 视频的年轻学生群体优质选项。'
    },
    '星岛梦': {
      score: '8.5',
      stars: '⭐⭐⭐⭐',
      speed: '310 Mbps',
      ping: '70 ms (丢包 1.4%)',
      ytSpeed: '88,000 Kbps',
      unlock: '亚太主流流媒体',
      route: '亚太直连优化隧道',
      pros: [
        '香港、新加坡线路优化好，连通率高',
        '资费平实，无溢价套路',
        '适合日常轻度使用'
      ],
      cons: ['欧美长途节点延迟相对略高', '总带宽冗余中等'],
      verdict: '适合主要访问港台、东南亚网络资源的轻度使用者。'
    },
    '二猫云': {
      score: '8.5',
      stars: '⭐⭐⭐⭐',
      speed: '300 Mbps',
      ping: '72 ms (丢包 1.5%)',
      ytSpeed: '85,000 Kbps',
      unlock: '常见海外流媒体与应用',
      route: '平价中转链路',
      pros: [
        '萌系界面设计与亲切客服售后',
        '超低门槛，试错成本极低',
        '附带保姆级新手教程'
      ],
      cons: ['晚高峰丢包率偶有浮动', '不适合重度生产力需求'],
      verdict: '适合轻度刷推、查资料、社交聊天的入门尝鲜者。'
    },
    '网际快车': {
      score: '8.6',
      stars: '⭐⭐⭐⭐',
      speed: '330 Mbps',
      ping: '66 ms (丢包 1.3%)',
      ytSpeed: '92,000 Kbps',
      unlock: '主流海外平台',
      route: '传统多线 BGP 架构',
      pros: [
        '老牌运维团队经验老道，拓扑清晰',
        '网络故障自愈迅速',
        '长周期运营稳定'
      ],
      cons: ['活动较少，价格较坚挺', '客户端一键脚本较少'],
      verdict: '老派运维风格，看重线路长期可用性的务实之选。'
    },
    '大哥云': {
      score: '8.8',
      stars: '⭐⭐⭐⭐',
      speed: '410 Mbps',
      ping: '52 ms (丢包 0.8%)',
      ytSpeed: '125,000 Kbps',
      unlock: 'Netflix / Disney+ / ChatGPT',
      route: '骨干多地分流中转网络',
      pros: [
        '高倍率精品节点晚高峰表现优异坚挺',
        '节点资源储备深厚，大厂信誉积累',
        '流媒体解锁能力强'
      ],
      cons: ['高倍率节点流量消耗较快，需留意倍率', '免费试用限制较多'],
      verdict: '节点分级明确，适合对画质和速度有进阶要求的用户。'
    },
    '青云梯': {
      score: '8.8',
      stars: '⭐⭐⭐⭐',
      speed: '390 Mbps',
      ping: '49 ms (丢包 0.6%)',
      ytSpeed: '115,000 Kbps',
      unlock: 'ChatGPT / Claude / 主流影视',
      route: 'IPLC 专线中转链路',
      pros: [
        '96 元超值年付档位折合仅 8 元/月',
        '专线晚高峰抗干扰能力强，低延迟',
        '不限制设备同时在线数'
      ],
      cons: ['年付特惠版每月流量额度相对偏紧（约60G）', '换绑邮箱需人工工单'],
      verdict: '理性预算党福音，96 元年付非常适合当作稳定的专线备用。'
    },
    '泡芙云': {
      score: '8.7',
      stars: '⭐⭐⭐⭐',
      speed: '320 Mbps',
      ping: '58 ms (丢包 0.9%)',
      ytSpeed: '95,000 Kbps',
      unlock: 'Netflix / TikTok / ChatGPT',
      route: '轻量优化专线',
      pros: [
        '12 元/月极低门槛，每月一杯奶茶钱',
        '界面小清新设计，新手小白上手极快',
        '流媒体与 TikTok 做了专项加速'
      ],
      cons: ['基础套餐限速 200Mbps', '不适合大文件超高速下载'],
      verdict: '适合女生或新手小白日常追剧与刷海外社交媒体。'
    },
    '龙猫云': {
      score: '8.9',
      stars: '⭐⭐⭐⭐',
      speed: '450 Mbps',
      ping: '47 ms (丢包 0.5%)',
      ytSpeed: '135,000 Kbps',
      unlock: '全主流流媒体 + 商务办公套件',
      route: '物理专线直连链路',
      pros: [
        '15 元月付即可享有 100G 专线额度，性价比优异',
        '晚高峰物理专线抗干扰强，连接稳定',
        '进阶套餐多设备并发能力强'
      ],
      cons: ['节点命名风格较为朴素', '缺少一次性买断套餐'],
      verdict: '外贸出差与远程办公的高性价比专线之选。'
    },
    'Flybit': {
      score: '8.8',
      stars: '⭐⭐⭐⭐',
      speed: '380 Mbps',
      ping: '64 ms (丢包 1.1%)',
      ytSpeed: '110,000 Kbps',
      unlock: '主流视频与海外应用',
      route: '大容量中转出口隧道',
      pros: [
        '12.8 元给 150GB 庞大流量，单 G 成本地板价',
        '68 元入手 100G 永久买断包，当备用极佳',
        '大流量狂刷视频无压力，大碗管饱'
      ],
      cons: ['晚高峰极速下载波动相对大一点点', '工单回复稍慢'],
      verdict: '大流量狂热爱好者与永久备用党的实在选择。'
    }
  };

  // 3. 增强每个机场卡片内容
  const cards = [...document.querySelectorAll('.airport-card')];
  cards.forEach((c) => {
    const h2 = c.querySelector('h2');
    const titleText = h2 ? h2.textContent : '';
    const key = Object.keys(airportMeta).find((k) => titleText.includes(k));
    const meta = key ? airportMeta[key] : null;

    // 收集所有用于搜索的关键词
    const searchTerms = [
      titleText,
      meta ? meta.tags.join(' ') : '',
      meta ? meta.why : '',
      meta ? meta.reasons.join(' ') : '',
      meta ? meta.target.join(' ') : '',
      meta ? meta.advice : '',
      c.textContent
    ].join(' ').toLowerCase();
    c.dataset.search = searchTerms;

    // 如果还没有插入过增强模块
    if (meta && !c.querySelector('.airport-dossier')) {
      const dossier = document.createElement('div');
      dossier.className = 'airport-dossier';

      // 标签组
      let tagsHtml = '';
      if (meta.tags && meta.tags.length) {
        tagsHtml = `<div class="airport-tags">${meta.tags.map((t) => `<span class="airport-tag">${t}</span>`).join('')}</div>`;
      }

      // 入选理由 · 实测看点
      const whyHtml = `
        <div class="airport-block airport-why">
          <div class="block-title"><span class="block-icon">💡</span> 入选理由 · 实测看点</div>
          <p class="block-desc">${meta.why}</p>
        </div>
      `;

      // 核心亮点 · 性能优势
      let reasonsHtml = '';
      if (meta.reasons && meta.reasons.length) {
        reasonsHtml = `
          <div class="airport-block airport-reasons">
            <div class="block-title"><span class="block-icon">⚡</span> 核心亮点 · 性能优势</div>
            <ul class="reason-list">
              ${meta.reasons.map((r) => {
                const parts = r.split('：');
                return parts.length > 1
                  ? `<li><strong>${parts[0]}：</strong><span>${parts.slice(1).join('：')}</span></li>`
                  : `<li><span>${r}</span></li>`;
              }).join('')}
            </ul>
          </div>
        `;
      }

      // 适用场景 · 人群画像
      let targetHtml = '';
      if (meta.target && meta.target.length) {
        targetHtml = `
          <div class="airport-block airport-target">
            <div class="block-title"><span class="block-icon">🎯</span> 适用场景 · 人群画像</div>
            <div class="target-pills">
              ${meta.target.map((t) => `<span class="target-pill">${t}</span>`).join('')}
            </div>
          </div>
        `;
      }

      dossier.innerHTML = tagsHtml + whyHtml + reasonsHtml + targetHtml;

      // 插入在 h2 之后、price-strip 之前
      const priceStrip = c.querySelector('.price-strip');
      if (priceStrip) {
        priceStrip.before(dossier);
        // 如果有选购建议，将其追加在 price-strip 内
        if (meta.advice && !priceStrip.querySelector('.buy-advice')) {
          const adviceDiv = document.createElement('div');
          adviceDiv.className = 'buy-advice';
          adviceDiv.innerHTML = `<strong>💡 选购方案 · 避坑建议：</strong><span>${meta.advice}</span>`;
          priceStrip.appendChild(adviceDiv);
        }
      } else {
        const link = c.querySelector('.card-link');
        if (link) link.before(dossier);
      }
    }

    // 前6名专属7折优惠券
    const coupons = {
      '闪电鼠': 'sd88',
      '大佬云': 'dly88',
      '榴莲云': 'll88',
      '云界线': 'yjx888',
      '神行加速': 'sx0077',
      '环球梯': 'hq66'
    };

    // 优化 CTA 按钮文案与图标，并在“直达官网”旁边生成深度实测评测按钮与详细报告抽屉
    const cardLink = c.querySelector('.card-link');
    if (cardLink && !c.querySelector('.airport-btn-actions')) {
      cardLink.classList.add('airport-cta');
      cardLink.innerHTML = `<span>直达官网 · 注册测速</span><span class="cta-arrow">↗</span>`;

      // 仅为前6名在直达官网处插入可复制的7折优惠券条
      const couponKey = Object.keys(coupons).find((k) => titleText.includes(k));
      if (couponKey && !c.querySelector('.airport-coupon-bar')) {
        const couponCode = coupons[couponKey];
        const couponBar = document.createElement('div');
        couponBar.className = 'airport-coupon-bar';
        couponBar.innerHTML = `
          <div class="coupon-meta">
            <span class="coupon-tag">🎟️ 7折专享券</span>
            <code class="coupon-code" title="点击也可复制">${couponCode}</code>
          </div>
          <button type="button" class="coupon-copy-btn" data-coupon="${couponCode}">
            <span class="copy-text">点击复制</span>
          </button>
        `;
        cardLink.before(couponBar);
      }

      // 创建按钮动作组 (直达官网 旁边紧跟 实测评测报告)
      const actionRow = document.createElement('div');
      actionRow.className = 'airport-btn-actions';
      cardLink.before(actionRow);
      actionRow.appendChild(cardLink);

      // 提取匹配的评测数据
      const reviewKey = Object.keys(airportReviews).find((k) => titleText.includes(k)) || key;

      const reviewBtn = document.createElement('a');
      reviewBtn.href = `review.html?id=${encodeURIComponent(reviewKey)}`;
      reviewBtn.className = 'airport-review-btn';
      reviewBtn.setAttribute('title', `查看 ${reviewKey} 独立深度实测评测专页（含营业时间、节假日测速图）`);
      reviewBtn.innerHTML = `
        <span class="review-btn-icon">📊</span>
        <span>深度实测评测</span>
        <span class="review-btn-arrow">↗</span>
      `;
      actionRow.appendChild(reviewBtn);
    }
  });

  // 4. 优化搜索与筛选联动
  const input = document.querySelector('#airport-search');
  const count = document.querySelector('#airport-count');

  function filterCards(term) {
    const q = (term || '').trim().toLowerCase();
    let visible = 0;
    cards.forEach((c) => {
      const hay = (c.dataset.search || c.textContent).toLowerCase();
      const show = !q || hay.includes(q);
      c.style.display = show ? 'flex' : 'none';
      if (show) visible++;
    });
    if (count) {
      count.textContent = `${visible} / ${cards.length} 家机场`;
    }
  }

  // 统一的平滑定位到第一名闪电鼠并震动高亮提示函数
  function jumpToFlashPick(triggerBtn) {
    // 切换顶部维度按钮激活态
    document.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('active'));
    if (triggerBtn) triggerBtn.classList.add('active');

    // 恢复所有卡片显示并清空搜索框，确保闪电鼠完整展示
    cards.forEach((c) => (c.style.display = 'flex'));
    if (count) count.textContent = `${cards.length} / ${cards.length} 家机场`;
    if (input) input.value = '';

    // 定位第一名“闪电鼠”卡片
    const topPick = cards.find((c) => {
      const h2 = c.querySelector('h2');
      return h2 && h2.textContent.includes('闪电鼠');
    }) || cards[0];

    if (topPick) {
      topPick.scrollIntoView({ behavior: 'smooth', block: 'center' });
      topPick.classList.remove('highlight-jump-active');
      void topPick.offsetWidth; // 触发 reflow 重启关键帧动画
      topPick.classList.add('highlight-jump-active');
      setTimeout(() => {
        topPick.classList.remove('highlight-jump-active');
      }, 1300);
    }
  }

  // 维度筛选中点击跳转到第一名闪电鼠
  document.querySelectorAll('[data-jump-top]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      jumpToFlashPick(btn);
    });
  });

  // 侧边栏及全部按钮筛选事件
  document.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filterVal = btn.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll(`[data-filter="${filterVal}"]`).forEach((b) => b.classList.add('active'));
      if (input) input.value = filterVal;
      filterCards(filterVal);
    });
  });

  // 搜索框输入事件
  if (input) {
    input.placeholder = '搜名称/专线/AI/外贸/备用/流媒体...';
    input.addEventListener('input', (e) => {
      document.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('active'));
      filterCards(e.target.value);
    });
  }

  // 优惠券一键复制交互处理（兼容推荐页与优惠券专页）
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.coupon-copy-btn, .coupon-code, .btn-copy-deal, .code-text');
    if (!trigger) return;
    e.preventDefault();
    const bar = trigger.closest('.airport-coupon-bar, .coupon-code-box');
    const code = trigger.dataset.coupon || (bar && (bar.querySelector('.coupon-code') || bar.querySelector('.code-text'))?.textContent.trim());
    if (!code) return;

    const copyBtn = bar ? (bar.querySelector('.coupon-copy-btn') || bar.querySelector('.btn-copy-deal')) : trigger;
    const origHtml = copyBtn.innerHTML;

    function showSuccess() {
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = `<span>✓ 已复制</span>`;
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = origHtml;
      }, 1500);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(showSuccess).catch(() => {
        fallbackCopy(code, showSuccess);
      });
    } else {
      fallbackCopy(code, showSuccess);
    }
  });

  function fallbackCopy(text, onSuccess) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      if (onSuccess) onSuccess();
    } catch (err) {}
    document.body.removeChild(ta);
  }

  // 首次运行确保计数器完整
  if (count) count.textContent = `${cards.length} / ${cards.length} 家机场`;
})();
