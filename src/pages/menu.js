const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
    },
    {
        id: 2,
        name: 'Explore',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'NFTs',
                links: '/nfts'
            },
            {
                id: 2,
                sub: 'Blog List',
                links: '/blog'
            },
            {
                id: 3,
                sub: 'Help Center',
                links: '/help-center'
            },
        ]
    },
    {
        id: 4,
        name: 'About',
        links: '/about',
        
    },
    {
        id: 6,
        name: 'Team',
        links: '/team',
        
    },
    {
        id: 7,
        name: 'Contact',
        links: '/contact',
    },

    
]

export default menus;