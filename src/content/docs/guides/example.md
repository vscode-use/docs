---
title: 📖 Examples
description: Show some common examples
---

  ### Register Extension
  ```
  export = createExtension((context) => {
    const disposals = []

    return disposals
  }, () => {

  })
  ```

  ### The registration instruction needs to be declared in package.json. A prompt pops up in the lower right corner.
  ```
  registerCommand('vscode-use.hello', () => {
    message.info('Hello World!')
  })
  ```

  ### The registration instruction needs to be declared in package.json. An error prompt pops up in the lower right corner.
  ```
  registerCommand('vscode-use.error', () => {
    message.error('Hello World!')
  })

  // Register multiple instructions
  registerCommands([
    'vscode-use.error', () => {
      message.error('Hello World!')
    }
  ])
  ```

  ### Registration instructions need to declare in package.json to open Baidu
  ```
  registerCommand('vscode-use.openExternalUrl', () => {
    openExternalUrl('http://www.baidu.com')
  })
  ```

  ### The execution instructions need to be declared in package.json
  ```
  executeCommand('vscode-use.openExternalUrl', ...params)

  // Execute multiple instructions
  executeCommands([
    ['vscode-use.openExternalUrl', ...params]
  ])
  ```

  ### Get the current language
  ```
  const isZh = getLocale().includes('zh')
  message.info(`当前语言：${isZh ? '中文' : '英文'}`)
  ```

  ### Monitor and switch the active text editor
  ```
  addEventListener('activeText-change', (e) => {})

  // Monitor multiple events
  addEventListeners([
    'activeText-change', (e) => {}
  ])
  ```

  ### Monitor login status changes
  ```
  addEventListener('auth-change', (e) => {})
  ```

  ### Monitoring configuration changes (including: plug-in configuration, user configuration, workspace configuration)
  ```
  addEventListener('config-change', (e) => {})
  ```

  ### Monitor editor visibility changes
  ```
  addEventListener('editor-visible', (e) => {})
  ```

  ### Monitor file creation
  ```
  addEventListener('file-create', (e) => {})
  ```

  ### Monitoring file deletion
  ```
  addEventListener('file-delete', (e) => {})
  ```

  ### Monitor folder creation and deletion
  ```
  addEventListener('folder-change', (e) => {})
  ```

  ### Listen to file renaming
  ```
  addEventListener('rename', (e) => {})
  ```

  ### Monitor the changes of selected content
  ```
  addEventListener('selection-change', (e) => {})
  ```

  ### Monitor terminal changes
  ```
  addEventListener('terminal-change', (e) => {})
  ```

  ### Monitoring terminal is closed
  ```
  addEventListener('terminal-close', (e) => {})
  ```

  ### Monitoring terminal creation
  ```
  addEventListener('terminal-open', (e) => {})
  ```

  ### Monitor text modifications
  ```
  addEventListener('text-change', (e) => {})
  ```

  ### Monitor new text
  ```
  addEventListener('text-open', (e) => {})
  ```

  ### Monitor text saving
  ```
  addEventListener('text-save', (e) => {})
  ```
### Monitor text visibility changes
   ```
   addEventListener('text-visible-change', (e) => {})
   ```

   ### Monitor theme changes
   ```
   addEventListener('theme-change', (e) => {})
   ```

   ### Jump to a certain line of a file
   ```
   jumpToLine(10, 'path/Uri')
   ```

   ### Collapse all lines between the start line and the end line
   ```
   onFold([
     createRange([1, 0], [5, 0]),
     createRange([5, 0], [10, 0])
   ])
   ```

   ### Expand all lines between the start line and the end line
   ```
   unFold([
     createRange([1, 0], [5, 0]),
     createRange([5, 0], [10, 0])
   ])
   ```

   ### Update text
   ```
   updateText(edit=>{
   //Insert text in the first line
   edit.insert(new vscode.Position(0, 0), 'Hello World!')

   // Delete the first 5 characters of the first line
   edit.delete(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 5)))

   // Replace the first 5 characters of the first line with Hello World!
   edit.replace(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 5)), 'Hello World!')
   })
   ```

   ### Get the currently active editor text
   ```
   const activeText = getActiveText()
   ```

   ### Get the text of a certain line
   ```
   const lineText = getLineText(0)
   ```

   ### Read config
   ```
   const mode1 = getConfiguration('vscode-use').get('mode')
   const mode2 = getConfiguration('vscode-use.mode')
   ```

   ### Update config
   ```
   setConfiguration('vscode-use.mode', 'dev')
   ```

   ### Create terminal
   ```
   createTerminal('test')
   ```

   ### Create bottom bar
   ```
   createBottomBar({
     position: 'left',
     text: 'I am the bottom bar',
     color: '#fff',
     backgroundColor: '#000',
   })
   ```

   ### Get the position based on offset
   ```
   const pos = getPosition(100)
   ```

   ### Get the content of the copy
   ```
   getCopyText().then(text=>{})
   ```

   ### Write content to the clipboard
   ```
   setCopyText('Hello World!')
   ```

   ### Get the path of the currently active text
   ```
   const currentFileUrl = getCurrentFileUrl()
   ```

   ### Set selected content
  ```
   setSelection([0, 0], [0, 5])
  ```

   ### Set multiple selections
   ```
   setSelections([{
     start: [0, 0],
     end: [0, 5],
     position: 'left' // Control cursor position
   }, {
     start: [1, 0],
     end: [1, 5],
     position: 'right'
   }])
   ```

   ### Monitor file changes
   ```
   watchFiles('filepath', (e) => {})
   ```

   ### Create a progress bar
   ```
   createProgress({
     title: 'Progress Bar',
     async done(report) {
       report({
         message: 'Progress bar 10% completed',
         increment: 10
       })
       setTimeout(() => {
         report({
           message: 'Progress bar completed 50',
           increment: 50
         })
       })
     }
   })
   ```

   ### Create a selection box
   ```
   createSelect(['vue','react','svelte','solid']).then((res)=>{})
   ```

   ### Listen to the event of hover element
   ```
   registerHoverProvider('vue', (e) => {})
   ```

   ### Monitor the click jump position when the option key is pressed.
   ```
   registerDefinitionProvider('vue', (e) => {})
   ```

   ### Get topic-related APIs
   ```
   const { getCurrentTheme, getAllTheme, setTheme, } = useTheme()
   ```

   ### Get the language of the currently active text
   ```
   const language = getActiveTextEditorLanguageId() // vue
   ```

   ### Rename file
   ```
   rename('url', 'newUrl')
   ```

   ### nextTick, some operations after file changes need to wait for the file to change before executing
   ```
    nextTick(()=>{})
   ```

   ### Add style
   ```
   setStyle(createStyle({
     backgroundColor: 'yellow',
     border: '1px solid red'
   }), createRange([0, 0], [0, 10]))
   ```

   ### Create input box

   ```
   createInput({
     title: 'I am an input box',
     placeHolder: 'Please enter content',
     value: ''
   })
   ```

  ### getActiveTextEditor

  ```
  const activeTextEditor = getActiveTextEditor()
  ```

  ### getKeyWords

  ```
  const keyWords = getKeyWords(position)
  ```

  ### Set the click command parameter of MarkdownString

  ```
  const md = new vscode.MarkdownString()
  md.isTrusted = true
  md.supportHtml = true
  const commandUri = `command:a.b?${setCommandParams(['params1', 'params2'])}`
  md.appendMarkdown(`[🦘](${commandUri})`);
  ```

  ### getOffsetFromPosition
  ```
  const offset = getOffsetFromPosition(position) // Get the offset of the current text and location
  const offset = getOffsetFromPosition(position,code) // Get the offset of the specified code and position
  ```
