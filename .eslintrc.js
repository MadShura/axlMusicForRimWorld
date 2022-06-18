module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended", // eslint 和ts的冲突解决包
    "plugin:@typescript-eslint/recommended", // eslint 的ts支持
  ],
  rules: {    

    // override/add rules settings here, such as:
    "no-undef": "off", //除非在 /*global */ 注释中提及，否则不允许使用未声明的变量。
    "linebreak-style": [2, "windows"], //windows的换行风格crlf unix为lf
    "indent": ["error", 2], //缩进是双空格
    curly: "error", // 不省略花括号
    "lines-around-comment": [
      "error",
      {
        beforeLineComment: true, // 要求在行级注释之前有一空行
        afterLineComment: false, // 要求在行级注释之后无空行
        afterBlockComment: false, // 要求在块级注释之后无空行
        allowBlockStart: true, //允许块开头有空行
      },
    ],
    "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许连续多个空行 最多只能一个空行
  },
  plugins: ["@typescript-eslint"], //如需要解析ts
  globals: {}
};
