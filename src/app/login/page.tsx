'use client';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const router = useRouter();

  const loginHandler = () => {
    if (typeof window !== undefined) {
      const REDIRECT_URI = window.location.origin + '/login/oauth2/code/kakao';
      const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      window.location.href = link;
    }
  };

  return (
    <button
      onClick={() => {
        loginHandler();
      }}
    >
      카카오 로그인
    </button>
  );
}

export default LoginPage;
