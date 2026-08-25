import { createClient } from "@supabase/supabase-js";
import type { Lead, LeadDraft, LeadStatus } from "@/entities/lead";

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export function hasSupabaseConfig() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function insertLead(draft: LeadDraft) {
  const supabase = getServiceClient();
  if (!supabase) throw new Error("Database is not configured");

  const photoNames = draft.photos?.map((p) => p.filename) || null;

  // Primary insert with area & photos columns
  const { data, error } = await supabase
    .from("leads")
    .insert({
      name: draft.name,
      phone: draft.phone,
      email: draft.email || null,
      area: draft.area || null,
      service: draft.service,
      message: draft.message || null,
      source_page: draft.source_page || null,
      photos: photoNames,
      status: "new",
    })
    .select()
    .single();

  if (error) {
    // Graceful fallback for legacy database schemas without area/photos columns
    const combinedMessage = [
      draft.area ? `Area/Postcode: ${draft.area}` : "",
      photoNames?.length ? `Attached photos (${photoNames.length}): ${photoNames.join(", ")}` : "",
      draft.message || "",
    ]
      .filter(Boolean)
      .join("\n\n");

    const { data: fallbackData, error: fallbackError } = await supabase
      .from("leads")
      .insert({
        name: draft.name,
        phone: draft.phone,
        email: draft.email || null,
        service: draft.service,
        message: combinedMessage || null,
        source_page: draft.source_page || null,
        status: "new",
      })
      .select()
      .single();

    if (fallbackError) throw fallbackError;
    return fallbackData as Lead;
  }

  return data as Lead;
}

export async function listLeads() {
  const supabase = getServiceClient();
  if (!supabase) return [] as Lead[];

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as Lead[];
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  const supabase = getServiceClient();
  if (!supabase) throw new Error("Database is not configured");

  const { error } = await supabase.from("leads").update({ status }).eq("id", id);
  if (error) throw error;
}
