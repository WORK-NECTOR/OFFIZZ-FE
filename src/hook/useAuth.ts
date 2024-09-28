import { Cookies } from 'react-cookie';
import { instance } from '@/api/axios';
import { TokenProps } from '@/types/user.type';

function useAuth() {
  const cookies = new Cookies();
  const refreshToken = cookies.get('refreshToken');

  /** 초 단위 만료 시간 Date 객체로 반환 */
  function calculateExpires(expires: number) {
    const now = new Date();
    const result = new Date(now.getTime() + expires * 1000);
    return result;
  }

  function isExpired(expires: Date) {
    const now = new Date();
    if (now > expires) return true;
    return false;
  }

  function setAccessToken(props: TokenProps) {
    const { token, expire } = props;
    const expires = calculateExpires(expire);
    localStorage.setItem('accessToken', token);
    localStorage.setItem('accessExpire', expires.toString());
  }

  function setRefreshToken(props: TokenProps) {
    const { token, expire } = props;
    const expires = calculateExpires(expire);
    cookies.set('refreshToken', token, {
      path: '/',
      expires,
    });
  }

  function removeTokens() {
    if (typeof window !== undefined) {
      // eslint-disable-next-line no-prototype-builtins
      if (localStorage.hasOwnProperty('accessToken')) {
        localStorage.removeItem('accessToken');
      }

      // eslint-disable-next-line no-prototype-builtins
      if (localStorage.hasOwnProperty('accessExpire')) {
        localStorage.removeItem('accessExpire');
      }

      cookies.remove('refresh_token', {
        path: '/',
      });
    }
  }

  function getRefreshToken() {
    if (refreshToken) return refreshToken;

    return '';
  }

  async function reissueToken() {
    try {
      const res = await instance.post(`/auth/refresh`, null, {
        headers: {
          Authorization: `Bearer ${getRefreshToken()}`,
        },
      });

      if (res.status === 200) {
        setAccessToken({
          token: res.data.accessToken,
          expire: res.data.accessExpiration,
        });
        setRefreshToken({
          token: res.data.refreshToken,
          expire: res.data.refreshExpiration,
        });
      } else {
        removeTokens();
      }
      // eslint-disable-next-line no-empty
    } catch {}
  }

  // eslint-disable-next-line consistent-return
  async function getAccessToken() {
    if (
      typeof window !== 'undefined' &&
      // eslint-disable-next-line no-prototype-builtins
      localStorage.hasOwnProperty('accessToken') &&
      // eslint-disable-next-line no-prototype-builtins
      localStorage.hasOwnProperty('accessExpire')
    ) {
      const accessTkn = localStorage.getItem('accessToken');
      const accessExp = new Date(localStorage.getItem('accessExpire')!);

      if (isExpired(accessExp)) {
        if (getRefreshToken()) {
          await reissueToken();
          const accessToken = localStorage.getItem('accessToken');
          return accessToken;
        }
        removeTokens();
        return '';
      }

      if (!isExpired(accessExp)) return accessTkn;
    } else {
      if (getRefreshToken()) {
        await reissueToken();
        const accessTkn = localStorage.getItem('accessToken');
        return accessTkn;
      }
      return '';
    }
  }

  return {
    setAccessToken,
    setRefreshToken,
    getAccessToken,
    getRefreshToken,
    removeTokens,
  };
}

export default useAuth;
