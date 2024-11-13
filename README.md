# HTTP Request Mock Fetch Response 测试

这个项目用于测试使用 http-request-mock 库模拟 HTTP 500 状态码时，`fetch` 的 `response.ok` 属性的行为。

## 背景

根据 Fetch API 的规范，当响应状态码不在 200-299 范围内时，`response.ok` 应该为 `false`。这个项目用于验证 http-request-mock 是否正确模拟了这个行为。

## 依赖说明

- http-request-mock: 1.8.19 - 用于模拟HTTP请求
- jest: 29.7.0 - 测试框架
- whatwg-fetch: 3.6.20 - fetch polyfill

## 使用方法

运行以下命令：

    pnpm install
    pnpm test

## 注意事项

1. 需要Node.js 16+环境
2. 使用pnpm作为包管理器
3. 测试环境使用jsdom