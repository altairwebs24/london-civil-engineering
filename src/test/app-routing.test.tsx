import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { companyAddress, whatsappUrl } from "@/lib/site-media";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each(["/services", "/projects", "/about", "/contact"])(
    "matches the requested page at %s",
    (path) => {
      const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

      expect(router.matchRoutes(path).at(-1)?.fullPath).toBe(path);
    },
  );

  it("uses the supplied WhatsApp contact and office address", () => {
    expect(whatsappUrl).toBe("https://wa.me/27766889366");
    expect(companyAddress).toBe("25 Burdwan Rd, Merewent, Bluff, 4052, South Africa");
  });
});
