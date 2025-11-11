import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={`
            px-3 py-1 text-sm transition-all duration-300
            ${language === lang.code 
              ? 'bg-primary/10 text-primary border border-primary/20' 
              : 'text-foreground-muted hover:text-foreground hover:bg-nav-hover'
            }
          `}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.code.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSelector;