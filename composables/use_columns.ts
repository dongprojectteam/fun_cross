export const useColumns = () => {
  const columns = useState<Column[]>('columns', () => [])
  const currentIndex = useState<number>('currentIndex', () => 0)
  const lastContent = useCookie('_LC', {
    default: () => [
      {
        keyword: '사이타마',
        ytId: 'iiM50xSogao',
      },
      {
        keyword: '아이유 노래',
        ytId: 'ax1csKKQnns',
      },
      {
        keyword: 'C++',
        ytId: 'ZzaPdXTrSb8',
      },
    ],
  })

  const setCurrentIndex = (index: number) => {
    console.log(`set to ${index}`)
    if (index < 0) currentIndex.value = columns.value.length - 1
    else if (index >= columns.value.length) currentIndex.value = 0
    else currentIndex.value = index
  }

  const getCurrentIndex = () => {
    return currentIndex.value
  }

  const getCurrentColumn = () => {
    return columns.value[currentIndex.value]
  }

  const pushColumn = (column: Column) => {
    columns.value.push(column)
    // columns.value = columns.value.slice()
  }

  const initialColumns = ['Animation', 'Music', 'Programming']
  initialColumns.forEach((e) => {
    pushColumn({
      name: e,
      currentIndex: 0,
      contents: [],
    })
  })

  for (let i = 0; i < lastContent.value.length; i++) {
    columns.value[i].contents.push(lastContent.value[i])
  }

  const getCurrentYtId = (ytIndex: number = 0) => {
    const index = currentIndex.value
    const currentColumn = columns.value[index]
    currentColumn.currentIndex += ytIndex
    if(currentColumn.currentIndex < 0) currentColumn.currentIndex = 0
    return currentColumn.contents[currentColumn.currentIndex].ytId
  }

  const navigateToUp = () => getCurrentYtId(-1)
  

  const navigateToDown = () => getCurrentYtId(1)

  const navigateToRight = () => {
    setCurrentIndex(currentIndex.value + 1)
    return getCurrentYtId()
  }

  const navigateToLeft = () => {
    setCurrentIndex(currentIndex.value - 1)
    return getCurrentYtId()
  }

  return {
    getCurrentIndex,
    getCurrentColumn,
    navigateToUp,
    navigateToDown,
    navigateToRight,
    navigateToLeft,
    getCurrentYtId
  }
}
