---
title: 📖 示例
description: 展示一些常用的示例
---

  ### 注册插件
  ```
  export = createExtension((context) => {
    const disposals = []

    return disposals
  }, () => {

  })
  ```

  ### 注册指令，需要在 package.json 中声明 右下角弹出提示
  ```
  registerCommand('vscode-use.hello', () => {
    message.info('Hello World!')
  })
  ```

  ### 注册指令，需要在 package.json 中声明 右下角弹出错误提示
  ```
  registerCommand('vscode-use.error', () => {
    message.error('Hello World!')
  })

  // 注册多个指令
  registerCommands([
    'vscode-use.error', () => {
      message.error('Hello World!')
    }
  ])
  ```

  ### 注册指令，需要在 package.json 中声明 打开百度
  ```
  registerCommand('vscode-use.openExternalUrl', () => {
    openExternalUrl('http://www.baidu.com')
  })
  ```

  ### 获取当前语言
  ```
  const isZh = getLocale().includes('zh')
  message.info(`当前语言：${isZh ? '中文' : '英文'}`)
  ```

  ### 监听 切换活动的文本编辑器
  ```
  addEventListener('activeText-change', (e) => {})

  // 监听多个事件
  addEventListeners([
    'activeText-change', (e) => {}
  ])
  ```

  ### 监听 登录状态变化
  ```
  addEventListener('auth-change', (e) => {})
  ```

  ### 监听 配置变化（包括：插件配置、用户配置、工作区配置）
  ```
  addEventListener('config-change', (e) => {})
  ```

  ### 监听 编辑器可见性变化
  ```
  addEventListener('editor-visible', (e) => {})
  ```

  ### 监听 文件创建
  ```
  addEventListener('file-create', (e) => {})
  ```

  ### 监听 文件删除
  ```
  addEventListener('file-delete', (e) => {})
  ```

  ### 监听 文件夹创建和删除
  ```
  addEventListener('folder-change', (e) => {})
  ```

  ### 监听 文件重命名
  ```
  addEventListener('rename', (e) => {})
  ```

  ### 监听 选中内容变化
  ```
  addEventListener('selection-change', (e) => {})
  ```

  ### 监听 终端变化
  ```
  addEventListener('terminal-change', (e) => {})
  ```

  ### 监听 终端关闭
  ```
  addEventListener('terminal-close', (e) => {})
  ```

  ### 监听 终端创建
  ```
  addEventListener('terminal-open', (e) => {})
  ```

  ### 监听 文本修改
  ```
  addEventListener('text-change', (e) => {})
  ```

  ### 监听 新开文本
  ```
  addEventListener('text-open', (e) => {})
  ```

  ### 监听 文本保存
  ```
  addEventListener('text-save', (e) => {})
  ```

  ### 监听 文本可见性变化
  ```
  addEventListener('text-visible-change', (e) => {})
  ```

  ### 监听 主题变化
  ```
  addEventListener('theme-change', (e) => {})
  ```

  ### 跳到某个文件的某一行
  ```
  jumpToLine(10, 'path/Uri')
  ```

  ### 折叠起始行和结束行之间的所有行
  ```
  onFold([
    createRange([1, 0], [5, 0]),
    createRange([5, 0], [10, 0])
  ])
  ```

  ### 展开起始行和结束行之间的所有行
  ```
  unFold([
    createRange([1, 0], [5, 0]),
    createRange([5, 0], [10, 0])
  ])
  ```

  ### 更新文本
  ```
  updateText(edit=>{
  // 在第一行插入文本
  edit.insert(new vscode.Position(0, 0), 'Hello World!')

  // 删除第一行的前5个字符
  edit.delete(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 5)))

  // 将第一行的前5个字符替换为 Hello World!
  edit.replace(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 5)), 'Hello World!')
  })
  ```

  ### 获取当前激活的编辑器文本
  ```
  const activeText = getActiveText()
  ```

  ### 获取某一行的文本
  ```
  const lineText = getLineText(0)
  ```

  ### 读取 config
  ```
   const mode1 = getConfiguration('vscode-use').get('mode')
   const mode2 = getConfiguration('vscode-use.mode')
  ```

  ### 更新 config
  ```
  setConfiguration('vscode-use.mode', 'dev')
  ```

  ### 创建终端
  ```
  createTerminal('test')
  ```

  ### 创建底部栏
  ```
  createBottomBar({
    position: 'left',
    text: '我是底部栏',
    color: '#fff',
    backgroundColor: '#000',
  })
  ```

  ### 根据 offset 获取位置
  ```
  const pos = getPosition(100)
  ```

  ### 获取 copy 的内容
  ```
  getCopyText().then(text=>{})
  ```

  ### 往剪贴板写入内容
  ```
  setCopyText('Hello World!')
  ```

  ### 获取当前激活文本的路径
  ```
  const currentFileUrl = getCurrentFileUrl()
  ```

  ### 设置选中内容
  ```
  setSelection([0, 0], [0, 5])
   ```

  ### 设置多选
  ```
  setSelections([{
    start: [0, 0],
    end: [0, 5],
    position: 'left' // 控制光标位置
  }, {
    start: [1, 0],
    end: [1, 5],
    position: 'right'
  }])
  ```

  ###  监听文件变化
  ```
  watchFiles('filepath', (e) => {})
  ```

  ### 创建进度条
  ```
  createProgress({
    title: '进度条',
    async done(report) {
      report({
        message: '进度条完成 10%',
        increment: 10
      })
      setTimeout(() => {
        report({
          message: '进度条完成 50',
          increment: 50
        })
      })
    }
  })
  ```

  ### 创建选择框
  ```
  createSelect(['vue','react','svelte','solid']).then((res)=>{})
  ```

  ### 监听 hover 元素的事件
  ```
  registerHoverProvider('vue', (e) => {})
  ```

  ### 监听按下 option 键时控制点击跳转位置
  ```
  registerDefinitionProvider('vue', (e) => {})
  ```

  ### 获取主题相关 api
  ```
  const { getCurrentTheme, getAllTheme, setTheme, } = useTheme()
  ```

  ### 获取当前激活文本的语言
  ```
  const language = getActiveTextEditorLanguageId() // vue
  ```

  ### 重命名文件
  ```
  rename('url', 'newUrl')
  ```

  ### nextTick，一些针对文件变化后的操作，需要等待文件变化后再执行
  ```
   nextTick(()=>{})
  ```

  ### 添加样式
  ```
  setStyle(createStyle({
    backgroundColor: 'yellow',
    border: '1px solid red'
  }), createRange([0, 0], [0, 10]))
  ```
  ### 创建输入框
  ```
  createInput({
    title: '我是输入框',
    placeHolder: '请输入内容',
    value: ''
  })
  ```


  ### 获取当前激活的编辑器

  ```
  const activeTextEditor = getActiveTextEditor()
  ```

  ### 获取 position 位置的关键词

  ```
  const keyWords = getKeyWords(position)
  ```
  
  ### 设置 MarkdownString 的点击 command 参数

  ```
  const md = new vscode.MarkdownString()
  md.isTrusted = true
  md.supportHtml = true
  const commandUri = `command:a.b?${setCommandParams(['params1', 'params2'])}`
  md.appendMarkdown(`[🦘](${commandUri})`);
  ```

  ### getOffsetFromPosition
  ```
  const offset = getOffsetFromPosition(position) // 获取当前文本，位置的offset
  const offset = getOffsetFromPosition(position,code) // 获取指定code，位置的offset
  ```
