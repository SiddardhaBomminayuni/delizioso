import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout, { AuthButtons, AuthField, RememberRow } from "../components/AuthLayout";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const submit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AuthLayout title="Login" switchText="Don't have an account?" switchLabel="Sign up" switchTo="/signup">
      <form onSubmit={submit} className="mt-[40px] lg:mt-[49px]">
        <div className="space-y-[20px] lg:space-y-[41px]">
          <AuthField type="email" placeholder="Email address" aria-label="Email address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <AuthField type="password" placeholder="Password" aria-label="Password" required minLength={6} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>
        <div className="mt-[30px] lg:mt-[57px]">
          <RememberRow checked={form.remember} onChange={(e) => setForm({ ...form, remember: e.target.checked })} />
        </div>
        <AuthButtons submitLabel="Log in" googleLabel="Log in with google" />
      </form>
    </AuthLayout>
  );
}
