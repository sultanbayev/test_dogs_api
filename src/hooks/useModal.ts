import { useEffect, useState } from "react";

const useModal = (isError: boolean) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      setOpen(true);
    }
  }, [isError]);

  return { open, setOpen };
};

export default useModal;
