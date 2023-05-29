import { useState } from 'react';

export function useAnimatedState(timeout: number) {
  const [openState, setOpenState] = useState<'open' | 'closing' | 'closed'>(
    'closed'
  );

  const setState = (isOpen: boolean) => {
    if (isOpen) {
      setOpenState('open');
    } else {
      setOpenState('closing');
      setTimeout(() => setOpenState('closed'), timeout);
    }
  };
  return [openState, setState] as const;
}
