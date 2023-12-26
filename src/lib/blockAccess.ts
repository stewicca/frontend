import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  id: string;
  role: string;
};

export const blockAccess = (reqRoles: string[], router: any, route: string, message: string) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    if (!token) {
      localStorage.setItem('message', 'You must login!');
      return router.push('/login');
    };

    try {
      const decodedToken = jwtDecode(token) as DecodedToken;
      const role = decodedToken.role;

      let canAccess = false;

      reqRoles.forEach((reqRole) => {
        if (role === reqRole) {
          canAccess = true;
        };
      });

      if (!canAccess) {
        return router.push(route);
      };

      if (message !== '') {
        localStorage.setItem('message', message)
      };
    } catch (error) {
      console.error('Error: ', error);
      return router.push('/login');
    };
  };
};
