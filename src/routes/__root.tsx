import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

import { ErrorBoundary } from "@/components/error-boundary";
import { useThemeStore } from "@/stores/theme";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  const { theme } = useThemeStore();

  return (
    <div className={theme}>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}
