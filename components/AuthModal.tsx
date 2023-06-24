"use client"

import React, { useEffect } from 'react'
import Modal from './Modal'

import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import useAuthModal from '@/hooks/useAuthModals'

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);

    const onChange = (open: boolean) => {
        if (!open)  {
            onClose();
        }
    }

  return (
    <Modal
    title="welcome back"
    description="Login to your account"
    isOpen={isOpen}
    onChange={() => {}}
    
    >
      <Auth 
        theme='dark'
        magicLink
        providers={["google",]}
        supabaseClient={supabaseClient}
        appearance={{
            theme: ThemeSupa,
            variables: {
                default: {
                    colors: {
                        brand: '#404040',
                        brandAccent: '#784888'
                    }
                }
            }

        }}
      />

    </Modal>
  )
}

export default AuthModal; 
 