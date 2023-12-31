export default  {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '../../daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '', 
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook" */ '../../daybook/views/NoEntrySelected'),
        },
        {
            path: ':id', 
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook" */ '../../daybook/views/EntryView'),
            props: (route ) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]
}