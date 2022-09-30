import { useState } from "react";
import { Button, Modal } from "../../Components";

/**
 *
 * @returns Home Page Component
 */
const Home = () => {
  const [open, setOpen] = useState(false);
  const setModal =()=> setOpen(!open);
  return (
    <div>
      <Button  setModal={setModal} />
      {open && <Modal open={open} setOpen={setOpen} />}
    </div>
  );
};

export { Home };
