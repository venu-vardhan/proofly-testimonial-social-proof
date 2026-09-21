# Security Notes

- Access and refresh tokens are sent as httpOnly cookies.
- Refresh tokens are rotated and stored hashed in MongoDB.
- Passwords are hashed with bcrypt.
- `.env` files are ignored; only `.env.example` is committed.
- Avatar and logo uploads are restricted to image MIME types and a 3 MB limit.
- Owner resources are scoped by owner checks in controllers.
- Public testimonial submission intentionally does not require customer authentication, matching Project 05.
- Production deployment should use HTTPS, a real email provider, production object storage, stronger cookie/CORS policy, CSRF controls appropriate to the cookie topology, and centralized logging.