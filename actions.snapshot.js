window.ACTIONS_SNAPSHOT = {
  "batch_id": "2026-11-03-zt-v3",
  "generated_at": "2026-11-03T00:32:42+08:00",
  "title": "今晚自投 ZT 调整确认（含新开测仓）",
  "note": "今晚既收垃圾/保护厚仓，也按「测薄放厚」补新开：多开小预算 ABO 测仓（约 $80–$150/d，每组少挂甚至 1 条 AD）测便宜买人，赢家才加厚。仅 self_serve 且账号 ZT2/ST-ZT1/ST-ZT2；已停组除非明确重开否则不列；不动代理。美国 US-3 只收不挂；27 之后无现成美语候补。",
  "filter_rules": [
    "self_serve=true and account in ZT2/ST-ZT1/ST-ZT2",
    "drop already-paused/empty/keep-off unless action is reopen",
    "include new thin ABO test campaigns (测薄放厚)"
  ],
  "actions": [
    {
      "id": "mera-06",
      "product": "Mera",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ZT2",
      "adset": "FlirtyTalk-All-24-55-1029-US-1",
      "action": "加预算",
      "detail": "$200 → $240 (+20%)；素材不动（仍 EN-Mera-27）",
      "why": "看数：今日 spend≈$200 / 5付费 / CPA$40 / D0≈43%；7天 $929 / 24人 / CPA$39 / D0 54%（绿）\n结论：厚仓——ZT2 美国唯一主仓，CPA 稳低于 US 线 $50\n动作：日预算 +20% 保护放量；今晚不往本组塞新素材，避免冲散学习",
      "status": "pending"
    },
    {
      "id": "mera-07",
      "product": "Mera",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ZT2",
      "adset": "FlirtyTalk-All-24-55-1029-US-3",
      "action": "收预算",
      "detail": "$80 → $40",
      "why": "看数：今日 ≈$78 / 1人 / CPA$78 / D0 26%；7天 $444 / 9人 / CPA$49 / D0 30%（红）；现挂 Mera-29 已红\n结论：死人边缘测仓——7天+今日都红；27 之后无更优美语候补可挂（29 已红、31 在 US-2 已验败、无更新美语片），故只收不挂\n动作：预算腰斩到 $40；11/03 仍 D0<35% 且 CPA>$50 则关",
      "status": "pending"
    },
    {
      "id": "mera-08",
      "product": "Mera",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ZT2",
      "adset": "FlirtyTalk-All-24-55-1028-KR-1",
      "action": "挂素材",
      "detail": "预算不动 $220；补挂 KO-FlirtyTalk-Mera-34（现仅 Mera-35）",
      "why": "看数：今日 ≈$223 / 5人 / CPA$45 / D0 54%；7天 $872 / 25人 / CPA$35 / D0 57%（绿）\n结论：厚仓——韩国唯一能放量组，预算先稳住\n动作：预算不动；现仅挂 Mera-35，补 1 条历史稳的 KO-Mera-34（勿再堆多条）",
      "status": "pending"
    },
    {
      "id": "mera-14",
      "product": "Mera",
      "self_serve": true,
      "priority": "可明早再看",
      "account": "ZT2",
      "adset": "FlirtyTalk-All-24-55-1028-KR-2",
      "action": "观察",
      "detail": "预算不加（现约 $100）；看到 11/04",
      "why": "看数：今日 ≈$112 / 3人 / CPA$37 / D0 24% / ARPPU≈$9；7天 $192 / 5人 / CPA$38 / D0 31%\n结论：薄测仓——CPA 尚可但人少、ARPPU 薄，D0 样本不足\n动作：观察到 11/04，不加预算；若连续两天放量但 ARPPU<$12 且 D0<35% → 关并预算并给 KR-1",
      "status": "pending"
    },
    {
      "id": "mera-17",
      "product": "Mera",
      "self_serve": true,
      "priority": "可明早再看",
      "account": "ZT2",
      "adset": "1029-US-3",
      "action": "若已收至$40",
      "detail": "11/03 日末仍 D0<35% 且 CPA>$50 则关",
      "why": "看数：承接 mera-07 收预算后的日末复核（今日已红：1人/D0 26%）\n结论：测仓 ultimatum——再红一天就别留；不另挂美语候补\n动作：确认已收到 $40；11/03 仍红则关（勿重开已死老组）",
      "status": "pending"
    },
    {
      "id": "star-01",
      "product": "Star",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ST-ZT1",
      "adset": "Starriva-All-28-55-1029-US-1",
      "action": "加预算",
      "detail": "ABO $125→$150（+20%）；EN-Starriva-27/27-v2 不动",
      "why": "看数：今日 ≈$100 / 5人 / CPA$20 / D0≈132% / ARPPU≈$28；7天 $495 / 10人 / CPA$50 / D0≈73%\n结论：厚仓——ST-ZT1 美国唯一主仓，今日+7天都厚\n动作：+20% 加厚；今晚不换皮、不往本组塞新素材（新素材走新开测仓）",
      "status": "pending"
    },
    {
      "id": "star-02",
      "product": "Star",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ST-ZT1",
      "adset": "Starriva-All-28-55-1029-US-2",
      "action": "收预算",
      "detail": "ABO $80→$40；若11/03仍D0<35%且CPA>$55则关",
      "why": "看数：今日 ≈$83 / 1人 / CPA$83 / D0≈8%；仅 EN-Starriva-31 在烧；账户线约 CPA$53\n结论：测仓变红——今日远高于线，深度几乎没有\n动作：收到 $40；11/03 仍红则关，别加素材续命",
      "status": "pending"
    },
    {
      "id": "star-03",
      "product": "Star",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ST-ZT1",
      "adset": "Starriva-All-28-55-1029-US-3",
      "action": "维持偏收",
      "detail": "ABO $90维持或→$70；不加素材冲击",
      "why": "看数：今日 ≈$100 / 2人 / CPA$50 / D0≈27%；7天 $378 / 6人 / CPA$63 / D0≈41%（偏黄）\n结论：黄仓——贴线但深度不够，不是今晚加厚对象\n动作：维持或微收到 $70；新素材去独立测仓，勿冲击本组",
      "status": "pending"
    },
    {
      "id": "mera-n03",
      "product": "Mera",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ZT2",
      "adset": "新开 ABO · camp zt2_A-PUR-KR-KO-1103 / adset FlirtyTalk-All-24-55-1103-KR-T1",
      "action": "新开测仓",
      "detail": "日预算 $80；国家 KR；优化 AEO 购；先挂 1 条 KO-FlirtyTalk-Mera-31（APPROVED 储备；KR-1 已厚勿堆）",
      "why": "看数：KR-1 今日+7天均绿（厚仓 $220）；KR-2 CPA 尚可但 ARPPU 薄；KO-Mera-31/32/33 为干净储备，样本在本窗不足\n结论：测薄放厚——厚仓旁另开薄测验证新素材，避免把未验证素材塞进 KR-1\n动作：新开 $80 薄测只挂 Mera-31；出量且 D0 绿再议加厚，失败可早停不影响 KR-1",
      "status": "pending"
    },
    {
      "id": "star-n01",
      "product": "Star",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ST-ZT1",
      "adset": "新开 ABO · camp ZT3_A-PUR-US-All-1103 / adset Starriva-All-28-55-1103-US-T1",
      "action": "新开测仓",
      "detail": "日预算 $100；国家 US；优化 AEO 购；先挂 1 条 Starriva-1015-英语-10（或同概念新哈希）；勿进 US-1",
      "why": "看数：ST-ZT1 US-1 厚（今日 5人 CPA$20 D0≈132%）；US-2/3 在收；Starriva-1015-英语-10 在 ST01 1019-YZ 今日 3人 CPA$22 D0≈85%（<5 人惊喜）\n结论：测仓——自投侧样本不足，需独立薄测验证，不能把未稳素材塞进 US-1 冲散学习\n动作：US-1 加厚的同时新开 $100 薄测只挂该条；≥5 付费且 D0≥50% 再加厚。禁止把 Mera 成片挂到 Star",
      "status": "pending"
    },
    {
      "id": "star-n02",
      "product": "Star",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ST-ZT1",
      "adset": "新开 ABO · camp ZT3_A-PUR-US-All-1103 / adset Starriva-All-28-55-1103-US-T2",
      "action": "新开测仓",
      "detail": "日预算 $80；国家 US；优化 AEO 购；先挂 1 条与 T1/US-1 不同的干净 EN-Starriva（优先本地新哈希变体；若无干净成片则本条可延后）",
      "why": "看数：ST-ZT1 现只有 US-1 厚、US-2/3 偏收；干净可上除 27 系与 1015-英语-10 外储备有限，多素材窗口样本不足\n结论：测薄——第二条独立测仓加速找下一个便宜买人点，与 T1 素材必须不同\n动作：另开 $80 薄测 1 条 AD；无干净成片就跳过本条，切勿用 DISAPPROVED/WITH_ISSUES 原片",
      "status": "pending"
    },
    {
      "id": "star-n03",
      "product": "Star",
      "self_serve": true,
      "priority": "可明早再看",
      "account": "ST-ZT2",
      "adset": "新开 ABO · camp ZT4_A-PUR-US-All-1103 / adset Starriva-All-28-55-1103-US-T1（整户首条）",
      "action": "新开测仓",
      "detail": "【可选/不催】日预算 $80–$100；国家 US；AEO 购；可挂 EN-Starriva-27 副本或 1015-英语-10；ST-ZT2 当前空仓",
      "why": "看数：ST-ZT2 campaigns=0、今日/7天 $0；Star 美国自投目前只在 ST-ZT1\n结论：可选空仓首测——Billy 节奏上不催 Star 美国整户铺开\n动作：若问「为什么不新开」可开第一条薄测；默认不催、优先级低；优先把 ST-ZT1 测仓跑顺",
      "status": "pending"
    }
  ]
};
