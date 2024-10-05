'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  onParamsChange: (
    title: string | null,
    time: string | null,
    id: number | null,
  ) => void;
}

function FocusSearchParams({ onParamsChange }: Props) {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const time = searchParams.get('time');

  const idString = searchParams.get('id');
  const id = idString ? Number(idString) : null;

  useEffect(() => {
    onParamsChange(title, time, id);
  }, [title, time, id, onParamsChange]);

  return null;
}

export default FocusSearchParams;
