export const useContentManager = () => {
  const categories = useCookie('_FCC', {
    default: () =>
      [
        {
          name: 'News',
          score: 0,
          search_keyword: 'Smart Phone',
        },
        {
          name: 'Sports',
          score: 0,
          search_keyword: 'Soccer',
        },
        {
          name: 'Entertainment',
          score: 0,
          search_keyword: 'Korean Drama',
        },
        {
          name: 'Technology',
          score: 0,
          search_keyword: 'AI',
        },
        {
          name: 'Animation',
          score: 0,
          search_keyword: 'Japanese Animation',
        },
      ] as FCCategory[],
  })

  const defaultContents = {
    News: [
      {
        title: 'Galaxy S24 Ultra: Official Introduction Film | Samsung',
        ytId: '3hPoEmlBQdY',
      },
      { title: 'Samsung Galaxy S24 review', ytId: 'u9yv3RmqAm8' },
    ],
  }

  const contents = useState<Record<string, FCContent[]>>(
    '_FC_CONTENTS',
    () => ({})
  )

  const addScore = (category: string) => {
    for (let i = 0; i < categories.value.length; i++)
      if (categories.value[i].name === category) categories.value[i].score += 1
  }

  const addContents = (key: string, newContents: FCContent[]) => {
    contents.value[key] = contents.value[key]
      ? contents.value[key].concat(newContents)
      : newContents
  }

  return {
    categories,
    addScore,
    contents,
    addContents,
  }
}
