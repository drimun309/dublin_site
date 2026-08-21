export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <div className="admin-login">
      <form action="/api/admin/login" method="post">
        <p className="eyebrow">Dublin Restoration</p>
        <h1>Leads</h1>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" />
        {error ? <p className="form-note is-error">Wrong password.</p> : null}
        <button className="btn btn-solid" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
