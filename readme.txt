# Library
- yarn add -D tailwindcss postcss autoprefixer
- yarn tailwindcss init -p
- yarn add axios
- yarn add @heroicons/react
- yarn add react-icons
- yarn add firebase
- yarn add react-hook-form
- yarn add recoil
- yarn add @mui/material @emotion/react @emotion/styled
- yarn add react-player

- yarn add tailwind-scrollbar-hide
  => tailwind.config => plugins: => require('tailwind-scrollbar-hide')

- yarn add -D tailwind-scrollbar
  => tailwind.config => plugins: => require('tailwind-scrollbar')

- yarn add tailwindcss-textshadow --dev
  => tailwind.config => plugins: => require('tailwindcss-textshadow')


# Ignore Duplicate atom key warnings for Recoil
- npm i next-intercept-stdout
- npm install --save next @newhighsco/next-plugin-svgr
  =>  const withInterceptStdout = require('next-intercept-stdout')
      const withSvgr = require('@newhighsco/next-plugin-svgr')

      /** @type {import('next').NextConfig} */
      // const nextConfig = {
      //   reactStrictMode: true,
      //   images: {
      //     domains: ['image.tmdb.org', 'rb.gy'],
      //   },
      // }

      const nextConfig = withInterceptStdout(
        withSvgr({
          reactStrictMode: true,
          images: {
            domains: ['image.tmdb.org', 'rb.gy'],
          },
          svgrOptions: {},
        }),
        (text) => (text.includes('Duplicate atom key') ? '' : text)
      )

      module.exports = nextConfig


# SVG
- https://github.com/n3r4zzurr0/svg-spinners