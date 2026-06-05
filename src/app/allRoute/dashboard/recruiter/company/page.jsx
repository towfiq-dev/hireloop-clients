'use client'
import CompaniesForm from "@/components/allNavPage/dashboard/companiesForm/CompaniesForm";
import { authClient } from "@/lib/auth-client";


export default function RegisterCompanyPage() {
  const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
  
  return (
    <div>
      <CompaniesForm recruiter= {user}/>
    </div>
  );
}