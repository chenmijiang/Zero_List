module.exports = {
  // 引导用户输入的提示信息
  types: [
    { value: ':rocket: initial', name: '🎉 initial:   初始化项目' },
    { value: ':construction: wip', name: '🚧 wip:       工作进行中' },
    { value: ':sparkles: feat', name: '✨  feat:      新增一个功能' },
    { value: ':bug: fix', name: '🐛 fix:       修复一个Bug' },
    {
      value: ':hammer: refactor',
      name: '🔨 refactor:  重构（既不修复bug也不添加特性的代码更改）'
    },
    { value: ':pencil: docs', name: '📝 docs:      文档变更' },
    {
      value: ':white_check_mark: test',
      name: '✅  test:      添加缺失的测试或更正现有的测试'
    },
    {
      value: ':thought_balloon: chore',
      name: '🗯 chore:     构建过程或辅助工具的变动'
    },
    { value: 'revert', name: '⏪  revert:    代码回退' },
    { value: ':zap: perf', name: '⚡️ perf:      提升性能' },
    { value: ':lipstick: ui', name: '💄 ui:        更新UI和样式' },
    { value: ':art: style', name: '🎨 style:     改进代码结构/代码格式' },
    { value: ':truck: mv', name: '🚚 mv:        移动重命名文件' },
    { value: ':fire: delte', name: '🔥 delte:     删除文件' },
    { value: ':fire: up', name: '⬆️ up:        升级依赖' },
    { value: ':fire: down', name: '⬇️ down:      降级依赖' },
    { value: ':whale: docker', name: '🐳 ocker:    docker相关' },
    { value: ':bookmark: tag', name: '🔖 tag:       发行/版本标签' },
    { value: ':ambulance: patch', name: '🚑 patch:     重要补丁' }
  ],
  // 选择scope的提示信息
  messages: {
    type: '请选择您要提交的类型:',
    scope: '请输入修改范围(可选):',
    // allowCustomScopes为true时使用
    customScope: '请输入文件修改范围(可选):',
    subject: '请简要描述提交(必选):',
    body: "请输入详细描述，使用'|'换行(可选):",
    breaking: '列出任何突破性的变化(可选)',
    footer: '请输入要关闭的issue(可选)。例:#31，#34:',
    confirmCommit: '您确定要继续执行上面的提交吗?'
  },
  scopes: [
    'user',
    'login',
    'home',
    'order',
    'product',
    'cart',
    'address',
    'pay',
    'coupon',
    'search',
    'category',
    'detail',
    'other'
  ],
  // 跳过某些问题
  skipQuestions: [],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100
}
