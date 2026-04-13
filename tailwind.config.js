/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.njk",
    "./_includes/**/*.njk",
    "./participants/**/*.md",
    "./assets/**/*.css"
  ],
  safelist: [
    'grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8',
    'text-4xl', 'text-xl', 'text-lg', 'text-sm', 'font-bold', 'font-semibold',
    'font-medium', 'text-center', 'text-left', 'text-gray-600', 'text-gray-800',
    'text-emerald-600', 'text-white', 'bg-gray-50', 'bg-gray-900', 'bg-white',
    'container', 'mx-auto', 'px-4', 'py-8', 'mb-2', 'mb-4', 'mb-8', 'mb-12',
    'mt-auto', 'min-h-screen', 'flex', 'flex-col', 'items-center', 'inline-flex',
    'w-24', 'h-24', 'rounded-full', 'object-cover', 'transition-colors',
    'hover:text-blue-600', 'space-x-4', 'space-x-6', 'w-5', 'h-5', 'mr-2',
    'brightness-0', 'invert', 'max-w-3xl', 'h-8'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
