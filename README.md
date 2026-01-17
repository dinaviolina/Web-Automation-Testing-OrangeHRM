# Web Automation Testing – OrangeHRM

Final Project Bootcamp **SanberCode Batch 73**  
Automation testing for **Login**, **Forgot Password**, and **Dashboard** features on the **OrangeHRM** website using **Cypress** with **Page Object Model (POM)** and **Intercept** approach.

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
This project aims to implement **end-to-end (E2E) automation testing** on the OrangeHRM system using Cypress.

Cypress is chosen because it:
- Is easy to use and quick to learn
- Has comprehensive documentation
- Supports real-time testing
- Supports API testing using **Intercept**

Approaches used in this project:
- **End-to-End Testing (E2E)**
- **Fixtures** for test data
- **Page Object Model (POM)** to improve code maintainability and reusability
- **Intercept** to validate API requests and responses

---

## Tools & Technology
- **Cypress**
- **JavaScript**
- **Node.js**
- **Page Object Model (POM)**
- **API Intercept**
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
9. Login successfully and then logout  
10. Login with invalid username (case-sensitive) *(Negative)*  

---

### 2. Forgot Password Testing
1. Navigation and form validation  
2. Reset password using a valid username  
3. Reset password using an invalid username *(Negative)*  
4. Reset password using special characters *(Negative)*  
5. Click **Cancel** button  
6. Refresh forgot password page  
7. Submit empty username *(Required validation)*  
8. Reset password using numeric username *(Negative)*  
9. Reset password using username with spaces *(Negative)*  
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
│   │   ├── 03_dashboard.cy.js
│   │   └── 04_dashboard-directory.cy.js
│   ├── fixtures/
│   │   └── testData.json
│   ├
```
## Test Execution

### Run using Cypress UI

npx cypress open

### Run using Terminal

npx cypress run

