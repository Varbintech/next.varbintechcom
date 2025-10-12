[![Build and Publish Storybook to GitHub Pages](https://github.com/Varbintech/next.varbintechcom/actions/workflows/deploy-storybook-github-pages.yml/badge.svg)](https://github.com/Varbintech/next.varbintechcom/actions/workflows/deploy-storybook-github-pages.yml)
[Storybook](https://varbintech.github.io/next.varbintechcom?utm_source=github&utm_medium=readme&utm_campaign=next.varbintechcom)

# Intro

The front-end part for Varbintech Team [home page](https://varbintech.com?utm_source=github&utm_medium=readme&utm_campaign=next.varbintechcom).

![image](https://res.cloudinary.com/dlxpwfaic/image/upload/v1683287110/varbintech/OG-general_zaxpjl.jpg)

## Social Links

- [GitHub](https://github.com/Varbintech?utm_source=github&utm_medium=readme&utm_campaign=next.varbintechcom)
- [LinkedIn](https://www.linkedin.com/company/varbintech?utm_source=github&utm_medium=readme&utm_campaign=next.varbintechcom)
- [Clutch](https://clutch.co/profile/varbintech#summary?utm_source=github&utm_medium=readme&utm_campaign=next.varbintechcom)
- [UpWork](https://www.upwork.com/ag/varbintech/?utm_source=github&utm_medium=readme&utm_campaign=next.varbintechcom)

## Deploying

This project uses [Cloudflare Pages](https://pages.cloudflare.com/) as a JAMstack platform for frontend developers to collaborate and deploy websites.

## Tech Stack

### Front-End:

- [React.js](https://react.dev/)
- [Material UI](https://mui.com/)
- [Emotion](https://emotion.sh/)
- [TypeScript](https://www.typescriptlang.org/)

### Backend:

- [Next.js](https://nextjs.org/)
- [Next-PWA](https://github.com/shadowwalker/next-pwa/)

### Code Quality:

- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/) + plugins
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/okonet/lint-staged) for [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

### Design:

- [Figma](https://www.figma.com/)

### Project Backlog:

- [GitHub Projects](https://github.com/orgs/Varbintech/projects/4?utm_source=github&utm_medium=readme&utm_campaign=next.varbintechcom) (**private**)

## Project Roadmap

- Develop index page - ✅
- Cloudflare Pages build ✅
- Develop email template ✅ #66
- Send emails using Cloudflare Workers ✅ #65
- Add analytics ✅
- Develop case studies page - ✅
- Develop case study item page - ✅
- Develop blog page - ✅
- Develop blog Item page - ✅
- Headless CMS for case studies ✅
- Headless CMS for blog ✅

### Pages workflow:

> Introduce custom pages extensions via `next.config.js`:

- Pages MUST have `.page.tsx` or `.page.ts` extensions if they are ready for production release
- API routes MUST have `.api.ts` extension if they are ready for production release
- Pages MUST have `.page-wip.tsx` or `.page-wip.ts` extensions if they are not ready for production release
- API routes MUST have `.api-wip.ts` extension if they are not ready for production release
