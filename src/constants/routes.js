const BASE_ROUTE = '/';

export const ROUTES = {
    home: BASE_ROUTE,
    profile: `${BASE_ROUTE}profile`,
    details: `${BASE_ROUTE}details`,
    admin: `${BASE_ROUTE}admin`,
    coaches: `coaches`,
    feedbacks: 'feedback',
    coaching: 'coaching',
    food: 'food',
    users: 'users',
    faq: 'faq',
    confirmNumber: 'confirm-number'
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
        name: 'training'
    },
    {
        type: HEADER_NAVIGATION_LINK_TYPES.pseudoLink,
        title: 'Тренери',
        href: 'trainers',
        name: 'trainers'
    },
    {
        type: HEADER_NAVIGATION_LINK_TYPES.pseudoLink,
        title: 'FAQ',
        href: 'FAQ',
        name: 'FAQ'
    },
    {
        type: HEADER_NAVIGATION_LINK_TYPES.link,
        title: 'Мій кабінет',
        href: '/profile',
        name: 'profile'
    },
];
