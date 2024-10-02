'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  onParamsChange: (title: string | null, time: string | null) => void;
}

function FocusSearchParams({ onParamsChange }: Props) {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const time = searchParams.get('time');

  useEffect(() => {
    onParamsChange(title, time);
  }, [title, time, onParamsChange]);

  return null;
}

export default FocusSearchParams;
