# London Group visual theme and public media

## Build
- Match the uploaded reference's bold, playful, condensed sans-serif display typography and switch the five-page website to white, black, and orange.
- Set up public read-only access for a dedicated media bucket and transfer the existing site photos and hero video into it.
- Update every image and video reference to the new public media location and remove obsolete asset pointers where no longer referenced.
- Verify page navigation, the muted autoplay video, media responses, responsive layouts, route tests, and preview status.

## Technical details
- Keep the existing TanStack Start layout and route structure.
- Use Lovable Cloud storage for durable media storage; only public reads are granted to site visitors.
- Keep theme colors and typography in `src/styles.css` design tokens.