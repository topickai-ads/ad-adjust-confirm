window.ACTIONS_SNAPSHOT = {
  "batch_id": "2026-11-03-st-zt1-preview",
  "generated_at": "2026-11-03T01:30:00+08:00",
  "title": "ST-ZT1 今晚调整（聊天授权已执行）",
  "preview_only": true,
  "confirm_enabled": false,
  "note": "聊天授权直改 Meta（非网页确认）。已执行三档 ABO 日预算：US-1 $125→$150；US-2 $80→$56；US-3 $90→$70。测薄「暂无新开」无需执行。素材/开关未动；未触 ST-ZT2/代理户；未打 webhook。applied_at=2026-11-03T01:28:53+08:00。preview_only 仍 true、confirm_enabled 仍 false。原预览 batch 2026-11-03-st-zt1-preview。",
  "filter_rules": [
    "self_serve=true and account == ST-ZT1 only",
    "ABO adset daily budget / on-off only; no campaign/ad budget",
    "dual lens: D0 vs Meta CPA/CTR/freq then synthesize",
    "budget step +20~30% / −20~30%; abandon = pause (no half-cut as「收」)",
    "skip already-paused unless reopen",
    "must include thin-new verdict (暂无新开 if none)",
    "preview_only: confirm POST disabled even if webhook configured",
    "do NOT change Meta until Billy re-authorizes"
  ],
  "actions": [
    {
      "id": "st-zt1-us1-budget",
      "product": "Starriva",
      "self_serve": true,
      "priority": "今晚建议（预览）",
      "account": "ST-ZT1",
      "account_id": "act_957328720395306",
      "adset": "Starriva-All-28-55-1029-US-1",
      "adset_id": "120253415024110255",
      "action": "加预算（已执行）",
      "detail": "ABO 日预算 $125 → $150（+20%）；素材保持 EN-Starriva-27 + EN-Starriva-27-v2，勿换皮冲击学习",
      "title": "US-1 已改 $125→$150（+20%）· 保持 27/27-v2",
      "why": "看数：昨 Meta $112/11购/CPP$10.2；代理 D0 昨 118%（5人 net$138 ARPPU$28），近段 D0≈71%。今日凌晨尚早（~$7/0购）。\n结论：双口径都绿——唯一美主仓，获客与付费深度同厚。\n动作：小步加码 +20% 至 $150；素材挂点：EN-Starriva-27 / 27-v2（已在本 adset，勿重复上传、勿换皮）。",
      "status": "applied",
      "before": {
        "daily_budget_usd": 125.0,
        "daily_budget_cents": 12500,
        "adset_id": "120253415024110255",
        "creatives": [
          "EN-Starriva-27",
          "EN-Starriva-27-v2"
        ]
      },
      "after": {
        "daily_budget_usd": 150.0,
        "daily_budget_cents": 15000,
        "adset_id": "120253415024110255",
        "creatives": [
          "EN-Starriva-27",
          "EN-Starriva-27-v2"
        ],
        "meta_success": true
      },
      "d0_verdict": "加 +20%",
      "non_d0_verdict": "加 +20%",
      "synth": "$125→$150",
      "applied_at": "2026-11-03T01:28:53+08:00"
    },
    {
      "id": "st-zt1-us2-budget",
      "product": "Starriva",
      "self_serve": true,
      "priority": "今晚建议（预览）",
      "account": "ST-ZT1",
      "account_id": "act_957328720395306",
      "adset": "Starriva-All-28-55-1029-US-2",
      "adset_id": "120253415652890255",
      "action": "收预算（已执行）",
      "detail": "ABO 日预算 $80 → $56（−30%）；保持 EN-Starriva-31；不做腰斩。若 11/03 全日仍 D0<20% 且 ≤1 付费人 → 直接关",
      "title": "US-2 已改 $80→$56（−30%）· 保持 31",
      "why": "看数：昨 Meta $90/1购/CPP$90；7天 Meta 却 $506/31购/CPP$16（量好看）。代理 D0 昨仅 7.4%（1人 net$7 ARPPU$7），近段 D0≈53%。小预算拆开：获客量（Meta 购次）尚在，付费深度（D0/ARPPU）已死。\n结论：双口径打架——非D0偏留看量，D0偏收/关；综合按硬规则小步收、不做腰斩。\n动作：$80→$56（−30%）；素材挂点：EN-Starriva-31（已在本 adset）；11/03 末仍红则关，不做 −50% 当「收」。",
      "status": "applied",
      "before": {
        "daily_budget_usd": 80.0,
        "daily_budget_cents": 8000,
        "adset_id": "120253415652890255",
        "creatives": [
          "EN-Starriva-31"
        ]
      },
      "after": {
        "daily_budget_usd": 56.0,
        "daily_budget_cents": 5600,
        "adset_id": "120253415652890255",
        "creatives": [
          "EN-Starriva-31"
        ],
        "meta_success": true
      },
      "d0_verdict": "收/关（昨 D0 7%）",
      "non_d0_verdict": "可留看量（7d CPP$16）",
      "synth": "$80→$56（−30%）",
      "applied_at": "2026-11-03T01:28:53+08:00"
    },
    {
      "id": "st-zt1-us3-budget",
      "product": "Starriva",
      "self_serve": true,
      "priority": "今晚建议（预览）",
      "account": "ST-ZT1",
      "account_id": "act_957328720395306",
      "adset": "Starriva-All-28-55-1029-US-3",
      "adset_id": "120253428587910255",
      "action": "收预算（已执行）",
      "detail": "ABO 日预算 $90 → $70（−22%）；保持 EN-Starriva-31-v2；不加码、不堆新素材",
      "title": "US-3 已改 $90→$70（−22%）· 保持 31-v2",
      "why": "看数：昨 Meta $110/2购/CPP$55；7天 $388/9购/CPP$43。代理 D0 昨 25%（2人 ARPPU$14），近段 D0≈40%。频次 1.16 不高，问题在付费成本与深度。\n结论：双口径同偏黄红——量薄、CPA 贵、D0 不达标。\n动作：小步收 −22% 至 $70；素材挂点：EN-Starriva-31-v2（已在本 adset）；不新挂片、不加码。",
      "status": "applied",
      "before": {
        "daily_budget_usd": 90.0,
        "daily_budget_cents": 9000,
        "adset_id": "120253428587910255",
        "creatives": [
          "EN-Starriva-31-v2"
        ]
      },
      "after": {
        "daily_budget_usd": 70.0,
        "daily_budget_cents": 7000,
        "adset_id": "120253428587910255",
        "creatives": [
          "EN-Starriva-31-v2"
        ],
        "meta_success": true
      },
      "d0_verdict": "收 −20%~−30%",
      "non_d0_verdict": "收（CPP$43–55 贵）",
      "synth": "$90→$70",
      "applied_at": "2026-11-03T01:28:53+08:00"
    },
    {
      "id": "st-zt1-thin-new",
      "product": "Starriva",
      "self_serve": true,
      "priority": "测薄新开",
      "account": "ST-ZT1",
      "account_id": "act_957328720395306",
      "adset": "—",
      "adset_id": "",
      "action": "暂无新开",
      "detail": "暂无新开——无需执行",
      "title": "测薄新开：暂无",
      "why": "看数：美语干净片盘点——27/27-v2 在 US-1 跑厚；31 在 US-2、31-v2 在 US-3 已挂；无更新候补成片。\n结论：没有值得新开的测薄仓；硬开只会抢现仓或挂旧衰退片。\n动作：暂无新开。等新 Star 美语干净片到位再开测仓；本轮不写「去推 Star 美国」。",
      "status": "skipped",
      "before": {},
      "after": {
        "note": "暂无新开（未建组）"
      },
      "d0_verdict": "—",
      "non_d0_verdict": "—",
      "synth": "暂无新开",
      "applied_at": "2026-11-03T01:28:53+08:00"
    }
  ],
  "applied_at": "2026-11-03T01:28:53+08:00",
  "executed_via": "chat_authorization"
};
