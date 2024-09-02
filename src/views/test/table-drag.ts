//设置el-table可进行鼠标左键按下左右拖动
interface TableDataRef {
  value: {
    $el: HTMLElement
    $refs: {
      scrollBarRef: {
        wrapRef: HTMLElement
      }
    }
  }
}

export const dragTable = (tableDataRef: TableDataRef) => {
  let mouseFlag = false,
    mouseStart = 0,
    startX = 0,
    tableBody: HTMLElement | null = null

  if (tableDataRef !== null) {
    //鼠标按下事件，即鼠标按下但未释放的动作。
    tableDataRef.value.$el.addEventListener('mousedown', (e: MouseEvent) => {
      tableBody = tableDataRef.value.$refs.scrollBarRef.wrapRef
      setMouseFlag(true, tableBody)
      // mouseFlag = true;
      mouseStart = e.clientX
      startX = tableBody.scrollLeft
      // tableBody.style.cursor = 'grab';
      // 添加 dragstart 事件监听器
      document.addEventListener('dragstart', handleDragStart)
    })
    //鼠标释放事件，即鼠标按下后释放的动作。
    tableDataRef.value.$el.addEventListener('mouseup', () => {
      // console.log('鼠标左键松开++++++++++++');
      /*     mouseFlag = false;
      (tableBody as HTMLElement).style.cursor = 'auto'; */
      setMouseFlag(false, tableBody)
      // 移除 dragstart 事件监听器
      document.removeEventListener('dragstart', handleDragStart)
    })
    //鼠标移动事件，即鼠标在元素内移动的动作。
    tableDataRef.value.$el.addEventListener('mousemove', (e: MouseEvent) => {
      if (mouseFlag) {
        const offset = e.clientX - mouseStart
        ;(tableBody as HTMLElement).scrollLeft = startX - offset
      }
    })
    //鼠标离开事件，即鼠标移动到元素外触发这个事件。
    tableDataRef.value.$el.addEventListener('mouseleave', (e: MouseEvent) => {
      handleDragStart(e as any)
    })
    // 检测到禁止光标手势
    const handleDragStart = (e: DragEvent) => {
      // console.log('禁止光标手势出现');
      // 取消默认的拖动效果
      e.preventDefault()
      setMouseFlag(false, tableBody)
    }

    const setMouseFlag = (flag: boolean, tableBody?: HTMLElement | null) => {
      mouseFlag = flag
      if (tableBody) {
        tableBody.style.cursor = flag ? 'grab' : 'auto'
      }
    }
  }
}
