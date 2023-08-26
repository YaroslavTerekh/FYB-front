const BASE_ROUTE = '/';

export const ROUTES = {
    home: BASE_ROUTE,
    profile: `${BASE_ROUTE}profile`,
    details: `${BASE_ROUTE}details`,
    admin: `${BASE_ROUTE}admin`,
};

export const HEADER_NAVIGATION_LINK_TYPES = {
    link: 'link',
    pseudoLink: 'pseudoLink',
};

export const HEADER_NAVIGATION = [
    {
        type: HEADER_NAVIGATION_LINK_TYPES.pseudoLink,
        title: 'Тренування',
        href: 'training',
    },
    {
        type: HEADER_NAVIGATION_LINK_TYPES.pseudoLink,
        title: 'Тренери',
        href: 'trainers',
    },
    {
        type: HEADER_NAVIGATION_LINK_TYPES.pseudoLink,
        title: 'FAQ',
        href: 'FAQ',
    },
    {
        type: HEADER_NAVIGATION_LINK_TYPES.link,
        title: 'Мій кабінет',
        href: '/profile',
    },
];
