'use client';
 
import { useSuspenseQuery } from '@tanstack/react-query';
import { useTRPC } from '@/trpc/client';
 
export function ClientGreeting() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.getUsers.queryOptions());
  return <div>{JSON.stringify(data)}</div>;
}