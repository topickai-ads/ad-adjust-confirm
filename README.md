# 投放调整确认页（UG）

公网确认页：勾选今晚要改的 adset / campaign，点确认后 **POST webhook** 叫醒 UG 例程「投放调整确认 webhook」。

- Pages：`https://topickai-ads.github.io/ad-adjust-confirm/`
- 批次：`2026-11-02-tonight`
- 口令门：`hebin`（localStorage 约 7 天）

## Billy 怎么用

1. 打开 Pages 链接，输入口令 `hebin`。
2. **第一次**用带参数的链接写入 webhook（只写本机，随后地址栏自动清掉）：

```text
https://topickai-ads.github.io/ad-adjust-confirm/?hook=<WEBHOOK_URL>&hk=<SENDER_KEY>
```

localStorage keys：`ad_adjust_hook` / `ad_adjust_hk`。**sender key 绝不能进仓库、HTML、日志、聊天。**

3. 筛产品 / 优先级，勾选要执行的行（今晚必做默认勾选；备注/不动禁用）。
4. 点「确认执行勾选项」或快捷按钮：
   - `scope=selected`：勾选项
   - `scope=all_must`：今晚必做全量
   - `scope=self_serve_only`：只确认自投
   - `action=cancel`：先不改
5. 成功后等 UG 在聊天回报调整前/后。本页**不改 Meta**。

## 文件

| 文件 | 说明 |
|---|---|
| `index.html` | 自包含确认页（内嵌 snapshot） |
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
