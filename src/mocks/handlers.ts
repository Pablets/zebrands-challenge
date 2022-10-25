import { rest } from 'msw';
import repositoriesResponse from './github-services/repositoriesResponse.json';
import usersResponse from './github-services/usersResponse.json';
import errorUsersResponse from './github-services/errorUsersResponse.json';

export const handlers = [
    rest.get('https://api.github.com/search/users', (req, res, ctx) => {
        const searchQuery = decodeURIComponent(req.url.search).split(' ')[0].slice(3);

        if (searchQuery === 'react') {
            return res(ctx.status(200), ctx.delay(500), ctx.json(usersResponse));
        } else if (searchQuery === 'error') {
            return res(ctx.status(404), ctx.delay(500), ctx.json(errorUsersResponse));
        } else {
            return res(ctx.status(200), ctx.delay(500), ctx.json([]));
        }
    }),
    rest.get('https://api.github.com/search/repositories', (req, res, ctx) => {
        const searchQuery = decodeURIComponent(req.url.search).split(' ')[0].slice(3);
        if (searchQuery === 'react') {
            return res(ctx.status(200), ctx.delay(500), ctx.json(repositoriesResponse));
        } else {
            return res(ctx.status(200), ctx.delay(500), ctx.json([]));
        }
    }),
];
