import { signIn, getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    // User is already authenticated, handle accordingly
    res.redirect('/');
  } else {
    // User is not authenticated, initiate authentication flow
    try {
      await signIn('github', { callbackUrl: '/' });
    } catch (error) {
      // Handle authentication error and redirect to error route
      res.redirect('/api/users/error');
    }
  }
}
