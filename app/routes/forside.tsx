/**
 * Forside – SYNCRONET ApS
 * mwow.dk – Din digitale sportsperformance platform
 */
import { redirect } from "react-router";
import type { Route } from "./+types/forside";

export function loader(): Response {
  return redirect("/");
}

export default function Forside() {
  return null;
}
