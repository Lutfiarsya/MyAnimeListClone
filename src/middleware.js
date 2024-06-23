export { default } from 'next-auth/middleware'
//matcher berfungsi untuk page mana yang ingin di protect
export const config = {matcher: ['/users/:path*']}