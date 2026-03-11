import { HydrateClient, prefetch, trpc, caller } from '@/trpc/server';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ClientGreeting } from './client';
 
export default async function Home() {
  prefetch(trpc.getUsers.queryOptions());

  const users = await caller.getUsers();
 
  return (
    <>
    {JSON.stringify(users)}
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientGreeting />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
    </>
  );
}
