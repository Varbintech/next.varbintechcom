# Intro

The front-end part for Varbintech Team [home page](https://varbintech.com/).

![image](https://res.cloudinary.com/dlxpwfaic/image/upload/v1680439761/varbintech/varbintech-join-the-club_qypktu.jpg)

## Social Links

- [GitHub](https://github.com/Varbintech)
- [LinkedIn](https://www.linkedin.com/company/varbintech/)
- [Clutch](https://clutch.co/profile/varbintech#summary)
- [UpWork](https://www.upwork.com/ag/varbintech/)

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
- [Pretter](https://prettier.io/)
- [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/okonet/lint-staged) for [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

### Design:

- [Figma](https://www.figma.com/)

### Project Backlog:

- [GitHub Projects](https://github.com/orgs/Varbintech/projects/4) (**private**)

## Project Roadmap

- Develop index page - **IN PROGRESS**
- Cloudflare Pages build ✅
- Develop email template ✅ #66
- Send emails using Cloudflare Workers ✅ #65
- Add analytics
- Develop case studies page - **PARTIALLY DONE** #52
- Develop case study item page - **PARTIALLY DONE** #59
- Develop blog page - **PARTIALLY DONE** #68
- Develop blog Item page - **PARTIALLY DONE** #69
- Headless CMS for case studies
- Headless CMS for blog

### Pages workflow:

> Introduce custom pages extensions via `next.config.js`:

- Pages MUST have `.page.tsx` or `.page.ts` extensions if they are ready for production release
- API routes MUST have `.api.ts` extension if they are ready for production release
- Pages MUST have `.page-wip.tsx` or `.page-wip.ts` extensions if they are not ready for production release
- API routes MUST have `.api-wip.ts` extension if they are not ready for production release
