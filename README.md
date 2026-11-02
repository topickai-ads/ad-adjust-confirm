# 投放调整确认页（UG）· ZT2 今晚调整（聊天授权已执行部分）

公网预览页：只展示 **ZT2** 建议清单。**确认已禁用**——即使本机配了 webhook，也不会 POST confirm / cancel，**未改 Meta**。

- Pages：`https://topickai-ads.github.io/ad-adjust-confirm/`
- 批次：`2026-11-03-zt2-preview-c`
- 条数：**5**（仅 account=ZT2）
- 口令门：`hebin`（localStorage 约 7 天）
- 模式：**确认仍禁用** · 本批已由聊天授权直改 Meta（mera-07/08/n03）；勿点网页确认、勿触发 webhook
- 备注：US-1 日预算操作方已加到 $250，本批不再动；**US-3 按 −25% 轻收（$80→$60）**，只收不挂；**KR-1：挂 34，不重开 28**

## Billy 怎么用（本批）

1. 打开 Pages 链接，输入口令 `hebin`。
2. 阅读页顶大横幅与清单；可筛「今晚必做 / 可明早 / 全部」。
3. **不要点确认**——按钮已禁用；本批只预览。
4. Webhook 配置表单可保留（写入本机 localStorage），但确认仍不会发出。

正式上线确认时，需另发一批把 `preview_only` / `confirm_enabled` 打开，并去掉预览横幅。

## 过滤 / 内容规则（Billy 2026-11-03）

1. 只要自己的 ZT2 自投：`self_serve=true` 且 `account=ZT2`；其它自投账户本批不列；代理全部不列。
2. 已停掉的不要显示怎么改：已 PAUSED/空仓且非「重新开启」→ 不进清单。
3. 理由白话三段式：看了什么数 → 结论（厚仓/测仓/死人）→ 所以做这个动作。
4. US-1 日预算已由操作方加到 $250 → 本批不加预算。
5. 美国 US-3 只收不挂；按行业小步 −20%～−30%（本批默认 −25% → $60），留翻盘窗口；27 之后无现成美语候补。
6. KR-1：预算不动；补挂 KO-34；**不重开 28**（28 仍在 KR-2；同账号韩国避免两条抢 28）。Billy 确认挂 34、不重开 28。

## 本批 id

- `mera-07` **applied**：US-3 GET 实为 $50，保持未抬（目标曾写 $60）
- `mera-08` **applied**：KR-1 预算 $220 不动，已挂 KO-34 ACTIVE；**未重开 28**
- `mera-14` pending：KR-2 只观察
- `mera-17` pending：日末 ultimatum 今晚不做
- `mera-n03` **applied**：已开 zt2_A-PUR-KR-KO-1103 / 1103-KR-T1 $80 + Mera-31

## 文件

| 文件 | 说明 |
|---|---|
| `index.html` | 自包含预览页（内嵌 snapshot；确认硬禁用） |
| `actions.snapshot.js` | 同批 `window.ACTIONS_SNAPSHOT` |
| `actions.json` | 同批 JSON，给例程/其他工具读 |
| `.nojekyll` | GitHub Pages 静态直出 |

## 本地预览

```bash
cd /workspace/outputs/ad-adjust-confirm
python3 -m http.server 8765
# 打开 http://127.0.0.1:8765/
```

## 数据字段

每行：`id, product(Mera|Star), self_serve, priority, account, adset, action, detail, why, status`。
本批自投判定：账户 `ZT2`。顶层另有 `preview_only` / `confirm_enabled`。
