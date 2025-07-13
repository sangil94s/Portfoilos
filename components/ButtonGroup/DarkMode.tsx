'use client';
import { useState, useEffect } from 'react';
import { Switch } from '../ui/switch';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="p-2">
      <Switch
        aria-label="Toggle dark mode"
        className="my-1 cursor-pointer"
        checked={theme === 'dark'}
        onCheckedChange={values => setTheme(values ? 'dark' : 'light')}
      />
      <span>
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 m-auto dark:text-black" />
        ) : (
          <Sun className="w-4 h-4 m-auto dark:text-black" />
        )}
      </span>
    </div>
  );
}
