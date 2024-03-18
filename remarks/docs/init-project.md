# 项目初始化

使用 `pnpm` 作为包管理器
[pnpm](https://pnpm.io/installation)

## husky

[github](https://github.com/typicode/husky)
[husky 文档](https://www.git-tower.com/blog/git-hooks-husky/#post-detail)

```bash
pnpm install husky

pnpm run prepare

pnpm install lint-staged -D

npx husky add .husky/pre-commit "pnpm lint-staged"
```

## eslint

[eslint 文档](https://eslint.vuejs.org/user-guide/#installation)

```bash
pnpm install eslint eslint-plugin-vue -D
```

## prettier

安装 prettier

```bash
pnpm install prettier -D
```

## stylelint

[stylelint](https://stylelint.io/user-guide/get-started)

```bash
pnpm install stylelint stylelint-config-standard -D

// 其他
pnpm install stylelint-config-prettier-scss stylelint-config-rational-order stylelint-config-recommended-scss stylelint-config-standard-scss stylelint-config-standard-vue stylelint-order -D
```

## 镜像

使用 `pnpm install` 安装依赖

`pnpm config set registry https://registry.npmjs.org`

```bash
// 设置
npm config set registry https://registry.npmmirror.com/
yarn config set registry https://registry.npmmirror.com/
pnpm config set registry https://registry.npmmirror.com/

// 查看
npm config get registry
yarn config get registry
pnpm config get registry
```
