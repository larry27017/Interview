# 基础编码能力

## 问题描述

在云计算/存储行业中，存储大小数据通常是按照字节（Byte ，简写 B）存储到数据库中，如磁盘 A 大小为 1MB，在数据库中存储时，通常会 写入 1048576 。但纯数字在前端展示上并不友好。我们希望你可以提供一个方法进行转换。


### 输入

输入是两个纯数字参数：
第一位参数：容量 Byte 大小，如 1024，1048576，1248576
第二位参数：取几位小数，默认为0


### 输出

输出是一个 包含单位 的对象格式，如：
```typescript
{
  number: 1.4
  unit: 'TB'
}
```

如果输入是 1024, 0

那么输出是
```typescript
{
  number: 1
  unit: 'KB'
}
```

如果输入是 1048576, 2

那么输出是
```typescript
{
  number: 1
  unit: 'MB'
}
```

如果输入是 1248576, 2

那么输出是
```typescript
{
  number: 1.19
  unit: 'MB'
}
```



### 要求

- 请使用 `Typescript` 完成 `base/src/index.ts` 中的函数，并定义好相关 TS 类型。（60分）
- 单元测试覆盖，包含上述用例。（20分）
- 配置 eslint 和 prettier。（10分）
- 配置 pre-commit 和 commitlint。（10分）
- 以 NestJS 为框架，为此功能提供一个 post api（bonus）
