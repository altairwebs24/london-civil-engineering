# London Group & Civil Engineering Website

## Build
- Replace the placeholder home page and create five polished pages: Home, Services, Projects, About, and Contact, with a shared, mobile-friendly navigation and footer.
- Use the uploaded construction, drawing, and drainage photos in relevant sections, and place the supplied muted, autoplaying video behind the home-page introduction as requested.
- Add the supplied WhatsApp number and South African address to the contact experience, with direct WhatsApp and map links.
- Establish a distinctive construction-focused color and typography system, and globally hide `#lovable-badge`.
- Ensure `vite.config.ts` explicitly provides an initialized `plugins: [...]` array without duplicating the template's managed plugins.
- Give each content page unique metadata and verify navigation, page rendering, and the main contact path.

## Technical details
- Use TanStack Start file-based routes and shared navigation; keep all styles in semantic design tokens in `src/styles.css`.
- Store supplied media through Lovable Assets pointers, preserving the uploaded video itself for the requested hero.
- Add only the five requested pages and necessary shared site styling; no backend or invented company claims.
