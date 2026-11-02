# 投放调整确认页（UG）· 今晚自投 ZT

公网确认页：勾选今晚要改的 **自投 ZT** adset / campaign，点确认后 **POST webhook** 叫醒 UG 例程「投放调整确认 webhook」。

- Pages：`https://topickai-ads.github.io/ad-adjust-confirm/`
- 批次：`2026-11-02-tonight-zt`（由 `2026-11-02-tonight` 按 Billy 规则过滤）
- 条数：**9**（原 30 → 仅 self_serve 且账号 ZT1 / ZT2 / ST-ZT1 / ST-ZT2；已 PAUSED/空仓且非「重新开启」的已剔除，含 ST-ZT2 不动/空仓）
- 口令门：`hebin`（localStorage 约 7 天）

## Billy 怎么用

1. 打开 Pages 链接，输入口令 `hebin`。
2. **第一次**用带参数的链接写入 webhook（只写本机，随后地址栏自动清掉）：

```text
https://topickai-ads.github.io/ad-adjust-confirm/?hook=<WEBHOOK_URL>&hk=<SENDER_KEY>
```

localStorage keys：`ad_adjust_hook` / `ad_adjust_hk`。**sender key 绝不能进仓库、HTML、日志、聊天。**

3. 默认筛「仅自投 ZT」；可再按产品 / 优先级勾选（今晚必做默认勾选）。
4. 点「确认执行勾选项」或快捷按钮：
   - `scope=selected`：勾选项
   - `scope=all_must`：今晚必做全量
   - `scope=self_serve_only`：只确认自投（本批全部为自投）
   - `action=cancel`：先不改
5. 成功后等 UG 在聊天回报调整前/后。本页**不改 Meta**。

## 过滤规则（Billy 2026-11-03）

1. 只要自己的 ZT 自投：`self_serve=true` 且账号 ∈ {ZT1, ZT2, ST-ZT1, ST-ZT2}；代理（DT16/DT17/ST01/ST02/ST04 等）全部删除。
2. 已停掉的不要显示怎么改：若对象已 PAUSED/空仓，且建议不是「重新开启/重启/打开」，则不进清单（含「保持关」「不动空仓」）。仍 ACTIVE、建议关/加减预算/挂素材/观察的保留。

## 文件

| 文件 | 说明 |
|---|---|
| `index.html` | 自包含确认页（内嵌 snapshot；默认仅自投） |
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
