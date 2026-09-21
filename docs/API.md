# API Documentation

Base URL: `http://localhost:4000/api`

## Authentication
- `POST /auth/signup`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`
- `GET /auth/me`
- `GET /auth/verify-email/:token`
- `POST /auth/forgot-password`
- `POST /auth/reset-password/:token`

## Spaces
- `GET /spaces` — owner protected
- `POST /spaces` — owner protected
- `GET /spaces/:slug` — public
- `GET /spaces/id/:id` — owner protected
- `PATCH /spaces/:id` — owner protected
- `POST /spaces/:id/logo` — owner protected multipart upload
- `DELETE /spaces/:id` — owner protected
- `GET /spaces/:id/stats` — owner protected

## Testimonials
- `POST /testimonials/public/:spaceSlug` — public multipart submission
- `GET /testimonials/owner/:spaceId` — owner protected
- `PATCH /testimonials/:id/moderate` — owner protected
- `DELETE /testimonials/:id` — owner protected
- `GET /testimonials/wall/:spaceSlug` — public

Owner endpoints use the access JWT httpOnly cookie. Public collection and Wall of Love routes do not require customer authentication.