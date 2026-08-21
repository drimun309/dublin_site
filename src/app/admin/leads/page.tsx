import { listLeads, hasSupabaseConfig } from "@/shared/lib/supabase";
import { AdminLeads } from "@/views/admin-leads";

export const dynamic = "force-dynamic";

export default async function Page() {
  const configured = hasSupabaseConfig();
  const leads = configured ? await listLeads() : [];
  return <AdminLeads initialLeads={leads} configured={configured} />;
}
