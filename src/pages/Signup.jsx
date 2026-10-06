import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout, { AuthButtons, AuthField, RememberRow } from "../components/AuthLayout";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", remember: false });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AuthLayout title="Sign up" switchText="Already have an account?" switchLabel="Log in" switchTo="/login">
      <form onSubmit={submit} className="mt-[40px] lg:mt-[49px]">
        <div className="space-y-[20px] lg:space-y-[41px]">
          <AuthField placeholder="Full name" aria-label="Full name" required value={form.name} onChange={set("name")} />
          <AuthField type="email" placeholder="Email address" aria-label="Email address" required value={form.email} onChange={set("email")} />
          <AuthField type="password" placeholder="Password" aria-label="Password" required minLength={6} value={form.password} onChange={set("password")} />
        </div>
        <div className="mt-[30px] lg:mt-[57px]">
          <RememberRow checked={form.remember} onChange={(e) => setForm({ ...form, remember: e.target.checked })} />
        </div>
        <AuthButtons submitLabel="Sign up" googleLabel="Sign up with google" />
      </form>
    </AuthLayout>
  );
}
