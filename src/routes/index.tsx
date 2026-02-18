import { createFileRoute } from "@tanstack/react-router";

import { LandingSinglePage } from "./-components/landing-single-page";

export const Route = createFileRoute("/")({
  component: LandingSinglePage,
});
    