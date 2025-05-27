# Adogtame :feet:

## User manual :book:

In this document we will provide a complete guide for the user to install, configure and make use of **Adogtame**

## Index

1. [Introduction to Adogtame](#introduction-to-adogtame-paperclip)
2. [Purposes and Benefits of Adogtame](#purposes-and-benefits-of-adogtame-dart)
3. [Minium Hardware and Software Requirements](#minimum-hardware-and-software-requirements-computer)
4. [Installation and Configuration Instructions](#installation-and-configuration-instructions-wrench)
5. [How to Run Adogtame](#how-to-run-adogtame-arrow_forward)
6. [Access and Credential Recovery Guide](#access-and-credential-recovery-guide-key)



## Introduction to Adogtame :paperclip:

**Adogtame** is a mobile apllication focused on the responsible adoption of pets, designed to save lives by connecting potencial adopters whit dogs and cats at risk, housed in rabies centers and municipal kennels

## Purposes and benefits of Adogtame :dart:

The main objective of **Adogtame** is to reduce the rate of slaughter in animal control centers, providingvisibility to these pets and facilitating their adoption in an accessible, informed and empathetic way

## Minimum Hardware and Software Requirements :computer:
The application is designed to be accessible from any device with an internet connection, whether it's a PC, laptop, tablet, or smartphone (iOS or Android). It does not require advanced hardware specifications.

To run **Adogtame**, the following software is required:

_Backend:_ Adogtame relies on Supabase as its backend to manage authentication, data storage and queries related to pets and users

_Frontend:_ The frontend of **Adogtame** is developed using React Native with Expo, which allows the app to run smoothly on both Android and iOS devices, and optionally on web

## Installation and Configuration Instructions :wrench:
To ensure the Adogtame application works correctly, make sure you have Node.js and Expo CLI installed, and that you have access to a properly configured Supabase account. Below are the steps to install Node.js, Expo CLI, and configure Supabase on 3 different Linux distributions and on Windows:

## Installing Node.js on Ubuntu/Debian :penguin:
Update the system packages using the following command:
``sudo apt update``
#### 1. Install Node.js from its official repository
``sudo apt install nodejs``
> [!NOTE]
> In this project, we used Node.js version 22.14.0. To ensure you install this version, you can specify it during installation or update your system afterward.

#### 2. Install Expo CLI
``npm install -g expo-cli``

#### 3. Verify the installation of both
``node -v``
``npm -v``

#### 4. Clone the project and enter the directory
``git clone https://github.com/netrix4/Adogtame.git``
``cd Adogtame``

#### 5. Install project dependencies
``npm install``

#### 6. Configure Supabase
Create a file at lib/supabase.ts and add your Supabase URL and anon key


#### 7. Run project

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


## Install Node.js on Windows :floppy_disk:

#### 1. Go to the [official Node.js website](https://nodejs.org/en "Página oficial de Node.js")
- Download the version appropriate for your system
> [!NOTE]
> In this project, we used Node.js version 22.14.0. To ensure you install this version, you can specify it during installation or update your system afterward.
- During the installation, check the option that adds Node.js to the PATH

#### 2. Verify the installation in CMD or PowerShell:
``node -v``
``npm -v``

#### 3. Install Expo CLI
Open PowerShell and run:
``npm install -g expo-cli``

#### 4. Clone the project and enter the directory
``git clone https://github.com/netrix4/Adogtame.git``
``cd Adogtame``

#### 5. Install project dependencies
``npm install``

#### 6. Configure Supabase
Create a file at lib/supabase.ts and add your Supabase URL and anon key

#### 7. Run project

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

## How to Run Adogtame :arrow_forward:
Run _Adogtame_ with the following command

``npx expo start``

## Access and Credential Recovery Guide :key:
Through these procedures, you will be able to securely manage your access to the application, ensuring that you always have the ability to log in or reset your credential

## Login :iphone:
Allows users to authenticate in the system to access their data and personalized features.

**Steps:**
- Open Adogtame (Mobile)
- Go to the Login section
- Enter your email address in the corresponding field
- Enter your password
- Click the "Login" button
- If the credentials are correct, you will access your account. In case of an error, verify your information or use the password recovery option if you forgot your password

## Sign up :pencil2:
New users must register to create an account.

**Steps:**
- On the home page, select the Sign Up option
- Fill out the form with the following information:
    - Full name
    - Valid email address
    - Password
    - Phone number
    - Address
- Click on Create Account
- You will receive a verification email. Click the link to confirm your account (verify this step)
- Once confirmed, you will be able to log in

## Password Recovery :key:
Users can recover their password in case they forget it

**Steps:**
- On the home page, select the option "Forgot your password? Recover it"
- Enter the email address you used to register
- You will receive an email with a link to create a new password

## Technical Support and Contact :envelope:
If you need technical assistance or have questions about using the application, you can contact our support team through the following channels:

You can send us an email with a detailed description of your issue, and our team will get back to you as soon as possible.

Email: Adogtame.soporte@gmail.com

Support Hours:
Monday to Friday: 9:00 AM – 6:00 PM

Social Media:
You can follow and contact us through our social media platforms:

Facebook: @Adogtame
X: @Adogtame
Instagram: @Adogtame

## Developed by :computer:
- Arias Mario
- Bañuelos Fátima
- Caballero Rúben
- Olan Fernanda
- Romero David 













