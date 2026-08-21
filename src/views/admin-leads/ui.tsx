"use client";

import { useState } from "react";
import { leadStatuses, type Lead, type LeadStatus } from "@/entities/lead";

export function AdminLeads({ initialLeads, configured }: { initialLeads: Lead[]; configured: boolean }) {
  const [leads, setLeads] = useState(initialLeads);

  const onStatus = async (id: string, status: LeadStatus) => {
    setLeads((current) => current.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
  };

  return (
    <div className="admin-page">
      <div className="admin-shell">
        <div className="admin-toolbar">
          <h1>Quote requests</h1>
          <form action="/api/admin/logout" method="post">
            <button className="btn btn-ghost-ink" type="submit">
              Log out
            </button>
          </form>
        </div>
        {!configured ? (
          <p className="admin-empty">
            Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, then run the SQL
            in supabase/schema.sql.
          </p>
        ) : null}
        {configured && leads.length === 0 ? <p className="admin-empty">No requests yet.</p> : null}
        {leads.length ? (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>When</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Message</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{new Date(lead.created_at).toLocaleString("en-IE")}</td>
                    <td>
                      <strong>{lead.name}</strong>
                      <br />
                      {lead.email || "—"}
                    </td>
                    <td>
                      <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                    </td>
                    <td>
                      {lead.service}
                      <br />
                      <span>{lead.source_page}</span>
                    </td>
                    <td>{lead.message || "—"}</td>
                    <td>
                      <select
                        className="admin-status"
                        value={lead.status}
                        onChange={(event) => onStatus(lead.id, event.target.value as LeadStatus)}
                      >
                        {leadStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
}
