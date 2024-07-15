---
title: 📝 接口
description: 列举了所有的接口
---

### createExtension
- ***注册插件***

### registerCommand
- ***注册指令***

### registerCommands
- ***注册多条指令***

### executeCommand
- ***触发指令***

### executeCommands
- ***触发多条指令***

### getConfiguration
- ***获取 workspace configuration***

### message
- {type:'info'|'error',message:string,buttons:['ok']} ***弹出消息***

### openFile
- ***打开某一个文件***

### addEventListener
- ***监听 vscode 中的文件切换、终端、内容变更、新增、删除等事件***

### addEventListeners
- ***监听 vscode 中的文件切换、终端、内容变更、新增、删除等事件***

### createTerminal
- ***快速创建一个终端***

### createCompletionItem
- ***生成 registerCompletionItemProvider 的提示内容***

### registerCompletionItemProvider
- ***根据输入生成对应的提示***

### isDark
- ***判断当前vscode主题是否是dark***

### getSelection
- ***获取当前鼠标所在行的信息***

### getActiveTextEditorLanguageId
- ***获取当前文件的一个类型 javascriptreact | typescriptreact | vue 等***

### createProgress
- ***创建一个 vscode 中的执行进度条***

### registerInlayHintsProvider
- ***给出一个类似 copilot 的 hint 提示***

### getCopyText
- ***读取粘贴板中的内容***

### setCopyText
- ***往粘贴板中塞入内容***

### updateText
- ***修改文本内容***

### jumpToLine
- ***打开文件并跳转到某一行***

### createBottomBar
- ***创建底部栏按钮***

### nextTick
- ***修改文本内容更新后的回调***

### createSquare
- ***创建一个方形小块***

### watchFiles
- ***监听文件内容和删除的变化***

### createEvents
- ***用于订阅事件通信的工具***

### getActiveText
- ***获取到当前激活tab的文本内容***

### fold
- ***折叠代码***

### unFold
- ***展开代码***

### registerDefinitionProvider
- ***提供了 option+click，实现快速跳转的功能***

### registerHoverProvider
- ***为鼠标悬停提供回调***

### registerCodeActionsProvider
- ***注册代码动作提供程序***

### openExternalUrl
- ***在浏览器中打开外部网址***

### getLineText
- ***获取某一行的文本***

### useTheme
- ***主题信息获取和操作***

### isInPosition
- ***判断一块区域是否是另一块的子区域***

### getCurrentFileUrl
- ***获取当前激活文件的路径***

### createInput
- ***创建一个输入框***

### getLocale
- ***获取本地的语言环境***

### rename
- ***快速给文件重命名***

### createDefinitionLocation
- ***创建按下 option 后左键点击后的跳转地址数据***

### setStyle
- ***给某一块区域增加样式***

### createStyle
- ***创建样式***

### getActiveTextEditor
- ***获取当前激活的编辑器***

### getKeyWords
- ***获取 position 位置处的关键词***

### setCommandParams
- ***设置 MarkdownString 的点击 command 参数***

### getOffsetFromPosition
- ***根据 position 计算 offset***

### getRootPath
- ***获取项目根目录路径***

### registerCodeLensProvider
- ***注册文本中头部的文字按钮并绑上事件***

### createCodeLens
- ***快速创建 provideCodeLenses 中的 item***

### saveFile
- ***保存文件***

### createStyleAnimation
- ***添加样式动画***

### createStyleAnimations
- ***添加样式动画组***

### getWordRangeAtPosition
- ***获取所在位置的关键词的区域***
