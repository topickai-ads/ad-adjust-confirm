# 投放调整确认页（UG）· 今晚自投 ZT（含新开测仓）

公网确认页：勾选今晚要改的 **自投 ZT** adset / campaign（含「新开测仓」），点确认后 **POST webhook** 叫醒 UG 例程「投放调整确认 webhook」。

- Pages：`https://topickai-ads.github.io/ad-adjust-confirm/`
- 批次：`2026-11-03-zt-v2`
- 条数：**15**（保留原 9 条自投调整 + 新增 6 条新开测仓；仅 ZT1 / ZT2 / ST-ZT1 / ST-ZT2）
- 口令门：`hebin`（localStorage 约 7 天）
- 策略一句话：今晚既收垃圾/保护厚仓，也按「测薄放厚」补新开（小预算 ABO ≈$80–$150/d，每组少挂甚至 1 条 AD）

## Billy 怎么用

1. 打开 Pages 链接，输入口令 `hebin`。
2. **配置 webhook（二选一，只写本机）**
   - **页内表单**：填 Webhook URL、Sender key → 点「保存到本机」（写入 `localStorage` 的 `ad_adjust_hook` / `ad_adjust_hk`，清掉地址栏参数，去掉蓝条，启用确认按钮）。
   - **或一次链接参数**：

```text
https://topickai-ads.github.io/ad-adjust-confirm/?hook=<WEBHOOK_URL>&hk=<SENDER_KEY>
```

**sender key 绝不能进仓库、HTML、日志、聊天。** 页面默认值里 key 必须为空；URL 可用 placeholder 提示。

3. 默认筛「仅自投 ZT」；可再按产品 / 优先级勾选（今晚必做默认勾选）。
4. 点「确认执行勾选项」或快捷按钮：
   - `scope=selected`：勾选项
   - `scope=all_must`：今晚必做全量
   - `scope=self_serve_only`：只确认自投
   - `action=cancel`：先不改
5. 成功后等 UG 在聊天回报调整前/后。本页**不改 Meta**。

## 过滤 / 内容规则（Billy 2026-11-03）

1. 只要自己的 ZT 自投：`self_serve=true` 且账号 ∈ {ZT1, ZT2, ST-ZT1, ST-ZT2}；代理全部不列。
2. 已停掉的不要显示怎么改：已 PAUSED/空仓且非「重新开启」→ 不进清单。
3. 理由白话三段式：看了什么数 → 结论（厚仓/测仓/死人）→ 所以做这个动作。
4. 清单须含**新开**（新 ABO campaign + 薄测仓 adset），不能全是加减预算/关；测薄放厚；ST-ZT2 整户新开标「可选/不催」。

## 文件

| 文件 | 说明 |
|---|---|
| `index.html` | 自包含确认页（内嵌 snapshot；页内 webhook 表单） |
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
自投判定：账户 `ZT1`/`ZT2`/`ST-ZT1`/`ST-ZT2`。
