# Project Explanation Video Summary

## 1. Introduction
“Proofly is a Testimonial & Social Proof Collector built with the MERN stack. Business owners create branded Spaces, customers submit testimonials without customer login, owners moderate those submissions, and approved testimonials become a public Wall of Love.”

## 2. Objective
“The objective is to make testimonial collection and publishing simple while keeping the owner in control of what becomes public social proof.”

## 3. Technology
MongoDB + Mongoose, Express.js + Node.js, React.js, JWT access/refresh cookies, Multer uploads, and the UI system required by Project 05.

## 4. Architecture
“React communicates with the Express REST API. Express handles authentication, Spaces, testimonials, moderation, uploads and statistics. Mongoose provides the MongoDB data layer.”

## 5. Demonstration order
1. Landing page
2. Sign up / sign in
3. Owner dashboard
4. Create a Space
5. Open the public collection page
6. Submit a testimonial with an optional avatar
7. Return to moderation
8. Approve/feature the testimonial
9. Open Wall of Love
10. Open Embed Generator
11. Copy the iframe snippet
12. Show README, API documentation and GitHub repository

## 6. UI and animation
“The UI uses rounded cards, layered depth, gradient accents, responsive layouts, hover elevation and floating hero cards. Motion is restrained and includes reduced-motion support so it improves hierarchy without distracting from the workflow.”

## 7. Security
“Secrets are kept in environment variables, cookies are httpOnly, protected routes require authentication, passwords are hashed, uploads are restricted, ownership is checked server-side, and authentication/public submission routes are rate limited.”

## 8. Closing
“This implementation covers the core Project 05 workflow and follows the supplied assessment requirements. Production extensions would add a real email provider and production object storage without changing the core architecture.”