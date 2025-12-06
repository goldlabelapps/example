// /Users/goldlabel/GitHub/example/app/api/lib/baseURL.ts

export const baseURL = (): string => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/gl-api'
    : 'https://goldlabel.pro/api/gl-api';
};
