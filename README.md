# Pricing Tool

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The Pricing Tool application helps you to easily and accurately price products and services.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (version 14.x or later).
- You have installed [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/).
- You have installed [Git](https://git-scm.com/).

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/your-username/pricingtool.git
cd pricingtool/amppricingtool
```

Then, install the dependencies:

```bash
npm install
# or
yarn install
```

## Running the Development Server

To run the development server, use the following command:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```plaintext
EMAIL_USER=your-email-username
EMAIL_PASS=your-email-password
```

Replace `your-email-username` and `your-email-password` with your actual email credentials.

## Nodemailer Configuration

This project uses [Nodemailer](https://nodemailer.com/about/) to send emails. To install Nodemailer, run the following command:

```bash
npm install nodemailer
# or
yarn add nodemailer
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
