#!/usr/bin/env node
const { Command } = require("commander");
const { buildAll } = require("../build/build.lib.ts");
// 创建命令对象
const program = new Command();

program.command("buildAll").description("打包组件库").action(buildAll);

// program.command("buildSingle").description("打包组件").action(buildSingle);
// 执行命令行参数解析
program.parse();
