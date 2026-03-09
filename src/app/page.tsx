import prisma from "@/lib/db";


export default async function Home() {

  const users = await prisma.user.findMany();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {JSON.stringify(users)}
    </div>
  );  
}
