 export default ( ) => ({

    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Loading...',
            picture: null,
        },
        {
            id: new Date().getTime() +100,
            date: new Date().toDateString(),
            text: 'Loading...',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Loading...',
            picture: null,
        }
    ]

})