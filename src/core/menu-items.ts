export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'ADMIN',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'Tasks',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'button',
                            title: 'Task List',
                            type: 'item',
                            url: '/tasks'
                        },
                        {
                            id: 'badges',
                            title: 'Task Board',
                            type: 'item',
                            url: '/task-board'
                        },
                        // {
                        //     id: 'breadcrumb-pagination',
                        //     title: 'Breadcrumb & Pagination',
                        //     type: 'item',
                        //     url: '/basic/breadcrumb-paging'
                        // },
                        // {
                        //     id: 'collapse',
                        //     title: 'Collapse',
                        //     type: 'item',
                        //     url: '/basic/collapse'
                        // },
                        // {
                        //     id: 'tabs-pills',
                        //     title: 'Tabs & Pills',
                        //     type: 'item',
                        //     url: '/basic/tabs-pills'
                        // },
                        // {
                        //     id: 'typography',
                        //     title: 'Typography',
                        //     type: 'item',
                        //     url: '/basic/typography'
                        // }
                    ]
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'PRODUCTS',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Catalog',
                    type: 'item',
                    url: '/catalog',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'Inventory',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/inventory'
                }
            ]
        },
        {
            id: 'chart-maps',
            title: 'ACCOUNTING',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'Dashboard',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/charts/nvd3'
                },
                {
                    id: 'maps',
                    title: 'Financials',
                    type: 'item',
                    icon: 'feather icon-map',
                    url: '/maps/google-map'
                }
            ]
        },
        {
            id: 'pages',
            title: 'Other',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Sign up',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Sign in',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },

                {
                    id: 'sample-page',
                    title: 'Settings',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'docs',
                    title: 'Documentation',
                    type: 'item',
                    url: '/docs',
                    classes: 'nav-item',
                    icon: 'feather icon-help-circle'
                },
                {
                    id: 'menu-level',
                    title: 'Menu Levels',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#!',
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#',
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#',
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'disabled-menu',
                    title: 'Disabled Menu',
                    type: 'item',
                    url: '#',
                    classes: 'nav-item disabled',
                    icon: 'feather icon-power'
                },
                /*{
                    id: 'buy-now',
                    title: 'Buy Now',
                    type: 'item',
                    icon: 'feather icon-user',
                    classes: 'nav-item',
                    url: 'https://codedthemes.com',
                    target: true,
                    external: true,
                    badge: {
                        title: 'v1.0',
                        type: 'label-primary'
                    }
                }*/
            ]
        }
    ]
}