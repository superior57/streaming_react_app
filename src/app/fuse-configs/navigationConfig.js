import { authRoles } from 'app/auth';
import MaterialUIComponentsNavigation from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [{
    id: 'applications',
    title: '',
    translate: '',
    type: 'group',
    icon: 'apps',
    children: [{
            id: 'dashboards',
            title: 'Painel',
            type: 'item',
            icon: 'dashboard',
            url: '/apps/streaming'
        },
        {
            id: 'client',
            title: 'Cliente',
            type: 'item',
            icon: 'person',
            auth: authRoles.admin.concat(authRoles.onlyConsumer),
            url: '',
            exact: true,
        },
        {
            id: 'requests',
            title: 'Pedido',
            type: 'collapse',
            icon: 'person',
            auth: authRoles.onlyClient,
            children: [{
                    id: 'requests-list',
                    title: 'Listar',
                    type: 'item',
                    url: '/apps/e-commerce/products',
                    exact: true
                },
                {
                    id: 'requests-register',
                    title: 'Cadastrar',
                    type: 'item',
                    url: '/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
                    exact: true
                }
            ]
        },
        {
            id: 'clients',
            title: 'Cliente',
            type: 'collapse',
            icon: 'person',
            auth: authRoles.client,
            children: [{
                    id: 'clients-list',
                    title: 'Listar',
                    type: 'item',
                    url: '',
                    exact: true
                },
                {
                    id: 'clients-register',
                    title: 'Cadastrar',
                    type: 'item',
                    url: '',
                    exact: true
                }
            ]
        },
        {
            id: 'Consumers',
            title: 'Consumidores',
            type: 'item',
            icon: 'supervisor_account',
            auth: authRoles.onlyClient,
            url: '',
            exact: true
        },
        {
            id: 'finance',
            title: 'Financeiro',
            type: 'collapse',
            icon: 'monetization_on',
            children: [{
                    id: 'finance-shopping',
                    title: 'Compras',
                    type: 'item',
                    auth: authRoles.admin,
                    url: '',
                    exact: true,
                },
                {
                    id: 'finance-request',
                    title: 'Pedidos',
                    type: 'item',
                    auth: authRoles.onlyClient,
                    url: '',
                    exact: true,
                },
                {
                    id: 'finance-extract',
                    title: 'Extrato',
                    type: 'item',
                    auth: authRoles.onlyConsumer,
                    url: '',
                    exact: true,
                },
                {
                    id: 'finance-invoice',
                    title: 'Fatura',
                    type: 'item',
                    auth: authRoles.onlyConsumer,
                    url: '',
                    exact: true,
                }
            ]
        },
        {
            id: 'marketing',
            title: 'Marketing',
            type: 'collapse',
            icon: 'hearing',
            auth: authRoles.client,
            children: [{
                    id: 'marketing-new-compaign',
                    title: 'Nova Campanha',
                    type: 'item',
                    url: '',
                    exact: true
                },
                {
                    id: 'marketing-compaign',
                    title: 'Campanha',
                    type: 'item',
                    url: '',
                    exact: true
                },
                {
                    id: 'marketing-draft',
                    title: 'Rascunho',
                    type: 'item',
                    url: '',
                    exact: true
                }
            ]
        },
        {
            id: 'services',
            title: 'Services',
            type: 'collapse',
            icon: 'record_voice_over',
            auth: authRoles.admin,
            children: [{
                    id: 'services-streaming',
                    title: 'Streaming',
                    type: 'item',
                    url: '',
                    exact: true
                },
                {
                    id: 'services-voting',
                    title: 'Votação',
                    type: 'item',
                    url: '',
                    exact: true
                }
            ]
        },
        {
            id: 'report',
            title: 'Relátorios',
            type: 'item',
            icon: 'trending_up',
            auth: authRoles.client,
            url: '',
            exact: true
        },
        {
            id: 'users',
            title: 'Usuários',
            type: 'collapse',
            icon: 'person',
            auth: authRoles.client,
            children: [{
                    id: 'users-view',
                    title: 'Visualizar',
                    type: 'item',
                    url: '/apps/users/all',
                    exact: true
                },
                {
                    id: 'users-register',
                    title: 'Cadastrar',
                    type: 'item',
                    url: '/apps/user/register',
                    exact: true
                },
                // {
                // 	id: 'users-club',
                // 	title: 'Club',
                // 	type: 'item',
                // 	url: '/apps/club/club',
                // 	exact: true
                // }
            ]
        },
        {
            id: 'settings',
            title: 'Configurações',
            type: 'collapse',
            icon: 'settings',
            auth: authRoles.client,
            children: [{
                    id: 'settings-rules',
                    title: 'Regras',
                    type: 'item',
                    url: '',
                    exact: true
                },
                {
                    id: 'settings-streaming',
                    title: 'Streaming',
                    type: 'item',
                    auth: authRoles.admin,
                    url: '',
                    exact: true
                },
                {
                    id: 'settings-chat',
                    title: 'Chat',
                    type: 'item',
                    auth: authRoles.admin,
                    url: '',
                    exact: true
                },
                {
                    id: 'settings-banners',
                    title: 'Banners',
                    type: 'item',
                    auth: authRoles.onlyClient,
                    url: '',
                    exact: true
                },
                {
                    id: 'settings-streaming-plans',
                    title: 'Planos para Streaming',
                    type: 'item',
                    auth: authRoles.onlyClient,
                    url: '',
                    exact: true
                },
                {
                    id: 'settings-payment-methods',
                    title: 'Formas de Pagamento',
                    type: 'item',
                    url: '',
                    exact: true
                }
            ]
        },
        {
            id: '',
            title: '',
            type: 'group',
            auth: authRoles.admin,
        },
        {
            id: 'help',
            title: 'Ajuda',
            type: 'item',
            icon: 'help',
            url: '',
            exact: true
        }

    ]
}];

export default navigationConfig;