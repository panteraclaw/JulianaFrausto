'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { usePrivy } from '@privy-io/react-auth';
import { useWallet } from '../../hooks/useWallet';
import { WHITELISTED_EMAIL } from '../../lib/constants';

export default function LoginPage() {
  const router = useRouter();
  const { ready, authenticated, user, login, logout } = usePrivy();
  const { address, isLoading: walletLoading } = useWallet();

  const [error, setError] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  // When Privy session is ready/authenticated, verify whitelist and persist admin flag
  useEffect(() => {
    const verify = async () => {
      if (!ready || !authenticated || !user) return;
      setIsChecking(true);
      setError(null);

      const emailAccount = user.linkedAccounts.find((account) => account.type === 'email');
      const email =
        emailAccount?.type === 'email'
          ? (emailAccount as { type: 'email'; address: string }).address
          : null;

      if (!email || email.toLowerCase() !== WHITELISTED_EMAIL.toLowerCase()) {
        setError('Solo el correo whitelisted puede acceder al panel.');
        await logout();
        setIsChecking(false);
        return;
      }

      if (!address && !walletLoading) {
        setError('Conecta o crea un wallet en Privy para continuar.');
        setIsChecking(false);
        return;
      }

      localStorage.setItem(
        'user',
        JSON.stringify({
          email,
          isAdmin: true,
          walletAddress: address,
        })
      );
      router.push('/admin');
    };

    verify();
  }, [ready, authenticated, user, address, walletLoading, logout, router]);

  const handleLogin = async () => {
    setError(null);
    await login();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-sm p-12 rounded-lg shadow-lg border border-[#e5e0d8]">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-4 text-gray-800">Acceso Admin</h1>
            <p className="text-sm text-gray-600 font-light">
              Inicia sesión con Privy usando el correo whitelisted:
            </p>
            <p className="text-xs text-[#f4d03f] font-medium mt-2">
              {WHITELISTED_EMAIL}
            </p>
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={!ready || walletLoading || isChecking}
            className="w-full py-3 px-6 bg-[#f4d03f] text-gray-900 rounded-lg font-medium hover:bg-[#e5c030] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {!ready || isChecking ? 'Verificando...' : authenticated ? 'Entrar' : 'Iniciar sesión con Privy'}
          </button>
        </div>
      </motion.div>
    </main>
  );
}
