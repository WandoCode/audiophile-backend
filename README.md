# Audiophile

This repo contains the code for the backend of the [audiophile website](https://wandocode.github.io/audiophile-frontend/#/audiophile-frontend/).
The goal of this website is mainly to show off some of my web development skills.

## Frontend

The Frontend for this project can be found on this repo: [audiophile-backend](https://github.com/WandoCode/audiophile-frontend).

It's build with React and with a Storybook.

## Hightlighted skills in this project

- Use of a headless CMS to create an API
- Custom routes and controllers.
- Use of Cloudinary and a postrgesql database for data persistence.
- Deployment on a cloud application plateform.

# How to install

## Prerequisites

- nodeJS v16.14.2 or better

## Setup

NB: don't forget [the frontend](https://github.com/WandoCode/audiophile-frontend)

- Run `npm install`
- For production, create a postgresql database.
- Create and fill a '.env' file (or '.env.production' for production) with the keys given in the '.env.example' file)
- Launch the development environement with `npm run development` (`npm run start` for production)
- Populate the database with your content.

# Scripts

## `develop`

Start your Strapi application with autoReload enabled.

## `start`

Start your Strapi application with autoReload disabled.

## `build`

Build your admin panel.
