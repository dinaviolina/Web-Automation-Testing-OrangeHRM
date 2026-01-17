# Web Automation Testing – OrangeHRM

Final Project Bootcamp **SanberCode Batch 73**  
Automation testing pada fitur **Login**, **Forgot Password**, dan **Dashboard** pada website **OrangeHRM** menggunakan **Cypress** dengan pendekatan **Page Object Model (POM)** dan **Intercept**.

Automation Testing for the OrangeHRM system using **Cypress**, **Page Object Model (POM)**, and **Intercept**.

---

## Table of Contents
- [Overview](#overview)
- [Tools & Technology](#tools--technology)
- [Features](#features)
- [Project Structure](#project-structure)
- [Test Execution](#test-execution)

---

## Overview
Project ini bertujuan untuk mengimplementasikan **automation testing end-to-end (E2E)** pada sistem OrangeHRM menggunakan Cypress.

Cypress dipilih karena:
- Mudah digunakan dan cepat dipelajari
- Memiliki dokumentasi yang lengkap
- Mendukung real-time testing
- Mendukung API testing menggunakan **Intercept**

Pendekatan yang digunakan dalam project ini:
- **End-to-End Testing (E2E)**
- **Fixtures** untuk data testing
- **Page Object Model (POM)** untuk meningkatkan maintainability dan reusability kode
- **Intercept** untuk memvalidasi request dan response API

---

## Tools & Technology
- **Cypress**
- **JavaScript**
- **Node.js**
- **Page Object Model (POM)**
- **Intercept API**
- **OrangeHRM Demo Website**

---

## Features

### 1. Login Testing
1. Login with valid username and password  
2. Login with valid username and invalid password *(Negative)*  
3. Login with username starting with leading space *(Negative)*  
4. Login with uppercase password  
5. Login with wrong username and password *(Negative)*  
6. Login with empty username *(Negative)*  
7. Login with empty password *(Negative)*  
8. Login with empty username and password *(Negative)*  
9. Login successfully then logout  
10. Login with invalid username (case-sensitive) *(Negative)*  

---

### 2. Forgot Password Testing
1. Navigation and form validation  
2. Reset password using valid username  
3. Reset password using invalid username *(Negative)*  
4. Reset password using special characters *(Negative)*  
5. Click **Cancel** button  
6. Refresh forgot password page  
7. Submit empty username *(Required validation)*  
8. Reset password using numeric username *(Negative)*  
9. Reset password using username with space *(Negative)*  
10. Navigate back after forgot password page  

---

### 3. Dashboard Testing

#### Dashboard
1. Dashboard action summary loaded  
2. Dashboard locations loaded  
3. Dashboard time at work loaded  
4. Dashboard shortcuts loaded  
5. Dashboard buzz feed loaded  
6. Dashboard sub-unit displayed  

#### Directory
1. Directory page loaded successfully  

---

## Project Structure
```text
WEB-AUTOMATION-TESTING-ORANGEHRM
├── cypress/
│   ├── e2e/
│   │   ├── 01_login.cy.js
│   │   ├── 02_forgot_password.cy.js
│   │   └── 03_directorydashboard.cy.js
│   ├── fixtures/
│   │   └── testData.json
│   ├── support/
│   │   └── pageObjects/
│   │       ├── DashboardPage.js
│   │       ├── ForgotPasswordPage.js
│   │       └── LoginPage.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```
## Test Execution

### Run using Cypress UI

npx cypress open

### Run using Terminal

npx cypress run

