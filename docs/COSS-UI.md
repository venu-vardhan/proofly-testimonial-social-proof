# Coss UI Integration Note

The supplied Project 05 brief requires interface components to use `coss.com/ui` primitives.

Official references:
- https://coss.com/ui
- https://coss.com/ui/docs/get-started

The application isolates reusable UI primitives in `client/src/components/ui.jsx` so page-level feature code does not depend directly on the design-system implementation. The current environment did not complete external npm installation, so the exact current Coss registry source is intentionally documented as the final integration step rather than being misrepresented as already installed.

Before final evaluator submission, replace the local primitive implementations with the exact current Coss UI registry components permitted by the project brief and keep the page-level API stable.