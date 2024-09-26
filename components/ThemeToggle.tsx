'use client';

import { useTheme } from 'next-themes';

export default function ThemeToggle( { className }: Readonly<{ className: string }>) {
  const  { setTheme, theme } = useTheme();

  console.log("The theme is now " + theme);

  return (
    <button className={className} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Change Theme
    </button>
  )
}
