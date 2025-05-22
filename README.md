# Adogtame :feet:

## User manual :book:

In this document we will provide a complete guide for the user to install, configure and make use of **Adogtame**

## Index

1. [Introduction to Adogtame](#introduction-to-adogtame)
2. [Purposes and benefits of Adogtame](#purposes-and-benefits-of-adogtame)

## Introduction to Adogtame

**Adogtame** is a mobile apllication focused on the responsible adoption of pets, designed to save lives by connecting potencial adopters whit dogs and cats at risk, housed in rabies centers and municipal kennels

## Purposes and benefits of Adogtame

The main objective of **Adogtame** is to reduce the rate of slaughter in animal control centers, providingvisibility to these pets and facilitating their adoption in an accessible, informed and empathetic way

## Minimum Hardware and Software Requirements
The application is designed to be accessible from any device with an internet connection, whether it's a PC, laptop, tablet, or smartphone (iOS or Android). It does not require advanced hardware specifications.

To run Adogtame, the following software is required:

Backend: Adogtame relies on Supabase as its backend to manage authentication, data storage and queries related to pets and users

Frontend: The frontend of Adogtame is developed using React Native with Expo, which allows the app to run smoothly on both Android and iOS devices, and optionally on web
## Run project

> [!WARNING]
> It is necessary to have the sdk 52 version for it to work with Supabase

> [!NOTE]
> How to download the sdk 53 version to 52

    Run the following commands

`npm install expo@52`

`npm expo install --fix`

`npm install --force`

`npm expo install --fix`

`npm uninstall @types/react`

`npm install -D @types/react@~18.3.12`

`npm expo install --fix`

### Install Supabase in the project

`npm install @supabase/supabase-js`

`npm install lodash`

`npm install -D @types/lodash`

### Run the project after the installation of the dependencies

`npx expo start -c`
