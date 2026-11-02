window.ACTIONS_SNAPSHOT = {
  "batch_id": "2026-11-03-zt2-preview-c",
  "generated_at": "2026-11-03T00:52:01+08:00",
  "title": "ZT2 今晚调整预览（未上线）",
  "preview_only": true,
  "confirm_enabled": false,
  "note": "仅预览 · 确认已禁用 · 未改 Meta。US-1 日预算你已加到 $250，本批不再动。本批只列 account=ZT2；已停组不列；理由三段式：看数→结论→动作。美国 US-3 按 −25% 轻收（$80→$60，区间 $55–$65），只收不挂、不做腰斩；27 后无现成美语候补。KR-1：挂 34，不重开 28。",
  "filter_rules": [
    "self_serve=true and account == ZT2 only (other self-serve accounts omitted this batch)",
    "US-1 daily budget already raised by operator to $250 — no budget action this batch",
    "KR-1: hang KO-34 only; do NOT reopen 28 (28 stays on KR-2; same-account KR avoid dual 28)",
    "drop already-paused/empty/keep-off unless action is reopen",
    "preview_only: confirm POST disabled even if webhook configured"
  ],
  "actions": [
    {
      "id": "mera-07",
      "product": "Mera",
      "self_serve": true,
      "priority": "今晚必做",
      "account": "ZT2",
      "adset": "FlirtyTalk-All-24-55-1029-US-3",
      "action": "收预算",
      "detail": "$80 → $60（−25%，落在 −20%～−30%；区间 $55–$65 默认 $60）",
      "why": "看数：今日 ≈$78 / 1人 / CPA$78 / D0 26%；7天 $444 / 9人 / CPA$49 / D0 30%（红）；现挂 Mera-29 已红\n结论：死人边缘测仓——7天+今日都红；27 之后无更优美语候补可挂（29 已红、31 在 US-2 已验败、无更新美语片），故只收不挂\n动作：按行业小步减，先轻收约 −25% 到 $60（可落 $55–$65），留翻盘窗口，不做腰斩；11/03 末仍 D0<35% 且 CPA>$50 则关",
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
      "detail": "预算不动 $220；补挂 KO-FlirtyTalk-Mera-34（现仅 Mera-35）；不重开 28（28 仍在 KR-2）",
      "why": "看数：今日 ≈$223 / 5人 / CPA$45 / D0 54%；7天 $872 / 25人 / CPA$35 / D0 57%（绿）\n结论：厚仓——韩国唯一能放量组，预算先稳住\n动作：Billy 确认挂 34、不重开 28——预算不动；现仅挂 Mera-35，补 1 条历史稳的 KO-Mera-34；28 仍在 KR-2，同账号韩国避免两条抢 28，故不在 KR-1 重开 28（勿再堆多条）",
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
      "why": "看数：今日 ≈$112 / 3人 / CPA$37 / D0 24% / ARPPU≈$9；7天 $192 / 5人 / CPA$38 / D0 31%\n结论：薄测仓——CPA 尚可但人少、ARPPU 薄，D0 样本不足；现挂含 28，故 KR-1 不重开 28\n动作：观察到 11/04，不加预算；若连续两天放量但 ARPPU<$12 且 D0<35% → 关并预算并给 KR-1",
      "status": "pending"
    },
    {
      "id": "mera-17",
      "product": "Mera",
      "self_serve": true,
      "priority": "可明早再看",
      "account": "ZT2",
      "adset": "1029-US-3",
      "action": "若已轻收至约$60",
      "detail": "明早先确认已轻收至约 $60，再判：11/03 日末仍 D0<35% 且 CPA>$50 则关",
      "why": "看数：承接 mera-07 轻收后的日末复核（今日已红：1人/D0 26%；预算目标约 $60）\n结论：测仓 ultimatum——轻收后再红一天就别留；不另挂美语候补\n动作：明早确认已收到约 $60 后再判关；11/03 末仍 D0<35% 且 CPA>$50 则关（勿重开已死老组）",
      "status": "pending"
    },
    {
      "id": "mera-n03",
      "product": "Mera",
      "self_serve": true,
      "priority": "可明早再看",
      "account": "ZT2",
      "adset": "新开 ABO · camp zt2_A-PUR-KR-KO-1103 / adset FlirtyTalk-All-24-55-1103-KR-T1",
      "action": "新开测仓",
      "detail": "日预算 $80；国家 KR；优化 AEO 购；先挂 1 条 KO-FlirtyTalk-Mera-31（APPROVED 储备；KR-1 已厚勿堆）",
      "why": "看数：KR-1 今日+7天均绿（厚仓 $220，今晚补挂 34、不重开 28）；KR-2 观察中；KO-Mera-31 为韩国干净储备\n结论：韩国薄测可保留（可明早）——与 KR-1 分工：KR-1 稳住厚仓只挂已确认的 34，本测仓单独验 Mera-31；薄预算可早停\n动作：默认可明早再开 $80 薄测只挂 Mera-31；早停：烧满约 1 日预算仍 0 付费，或 ≥3 付费但 D0<35% 且 CPA>$50 → 关，不影响 KR-1",
      "status": "pending"
    }
  ]
};
