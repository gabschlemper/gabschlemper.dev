import { useMemo } from 'react';

const badgeClasses = [
  'tech-badge-color-1',
  'tech-badge-color-2',
  'tech-badge-color-3',
];

export const useRandomBadgeClass = (itemId: string | number) => {
  const badgeClass = useMemo(() => {
    // Simple hash function to get a deterministic index
    const stringifiedId = String(itemId);
    let hash = 0;
    for (let i = 0; i < stringifiedId.length; i++) {
      const char = stringifiedId.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }

    const index = Math.abs(hash) % badgeClasses.length;
    return badgeClasses[index];
  }, [itemId]);

  return badgeClass;
};
