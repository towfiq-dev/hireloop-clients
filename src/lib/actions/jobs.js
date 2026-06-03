'use server'

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const createJobs = async(newJobData)=>{
  const res = await fetch(`${baseUrl}/api/jobs`,{
    method: "POST",
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(newJobData)
  })
  return res.json()
}