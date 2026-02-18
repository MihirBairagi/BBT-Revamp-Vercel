"use client";
import React from 'react';
import Toast from '../UI/Toast/Toast';
import { useCompareContextOptional } from '../../app/lib/contexts/CompareContext';

const CompareUIManager = () => {
  const compareContext = useCompareContextOptional();
  
  if (!compareContext) {
    return null;
  }

  const { toast, hideToast } = compareContext;

  return (
    <>
      {/* Toast Notifications */}
      <Toast toast={toast} onClose={hideToast} />
     
    </>
  );
};

export default CompareUIManager; 