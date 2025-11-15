export const dynamic = "force-dynamic";
export const revalidate = 0;

import type { ReactNode } from "react";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
