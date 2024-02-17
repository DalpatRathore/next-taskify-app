"use client";

import { useEffect, useState } from "react";
import CardModal from "../modal/cardModal/CardModal";
import ProModal from "../modal/proModal/ProModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal></CardModal>
      <ProModal></ProModal>
    </>
  );
};
export default ModalProvider;
