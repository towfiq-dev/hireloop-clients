'use server'

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const createCompanies = async(newCompanyData)=>{
  const res = await fetch(`${baseUrl}/api/companies`, {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(newCompanyData)
  })
  return res.json()
}