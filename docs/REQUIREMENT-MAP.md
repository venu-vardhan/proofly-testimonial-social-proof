# Project 05 Requirement Map

Source of truth: supplied Technical Assessment and supplied Project 05 brief.

| Requirement | Implementation |
|---|---|
| MERN | React + Vite, Express, Node.js, MongoDB + Mongoose |
| Pair-token JWT auth | auth controllers, token utilities, auth middleware |
| 15m access / 7d refresh | JWT TTL and cookie max-age |
| httpOnly cookies | auth cookie configuration |
| Signup / verification simulation | signup endpoint + server-log verification token |
| Login + token rotation | login and refresh endpoints |
| Forgot/reset password | API endpoints + Reset page |
| Owner Spaces + unique slugs | Space model/controller/dashboard |
| Branding/logo | logo upload endpoint + dashboard |
| Prompt/custom questions | Space model + public collection form |
| Avatar/rating toggles | Space model + collection UI |
| Public collection without login | `/collect/:spaceSlug` + public POST endpoint |
| Testimonial fields | name, email, role, rating, review, avatar, custom answers |
| Validation/upload | React validation + Multer limits |
| Moderation | All/Pending/Approved/Archived + moderation actions |
| Search/rating filters | owner endpoint + dashboard controls |
| Wall of Love | responsive masonry `/wall/:spaceSlug` |
| Rating analytics | aggregate stats + wall average/distribution |
| Embeds | Grid / Carousel / Badge + iframe snippet |
| UI requirement | isolated primitive layer documented in `docs/COSS-UI.md` |
| Security | Helmet, CORS, httpOnly cookies, rate limiting, ownership checks |
| GitHub | public repository with source and documentation |
| Environment | `server/.env.example` |
| API docs | `docs/API.md` |
| Video summary | `docs/VIDEO-SUMMARY.md` |