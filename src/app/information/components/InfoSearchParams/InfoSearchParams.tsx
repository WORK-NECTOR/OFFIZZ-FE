'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  onParamsChange: (
    modalType: string | null,
    vacationType: string | null,
  ) => void;
}

function InfoSearchParams({ onParamsChange }: Props) {
  const searchParams = useSearchParams();
  const modalType = searchParams.get('modalType');
  const vacationType = searchParams.get('kind');

  useEffect(() => {
    onParamsChange(modalType, vacationType);
  }, [modalType, vacationType, onParamsChange]);

  return null;
}

export default InfoSearchParams;
