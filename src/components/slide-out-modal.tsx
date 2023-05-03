import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface SlideOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  zIndex?: string;
}

const SlideOutModal: React.FC<SlideOutModalProps> = ({
  isOpen,
  children,
  onClose,
  zIndex = "z-10",
}) => {
  return (
    <Transition appear={true} show={isOpen} as={Fragment}>
      <HeadlessDialog
        as="div"
        className={`relative ${zIndex}`}
        onClose={() => onClose()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black backdrop-blur bg-opacity-60 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden w-full">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="opacity-100 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full"
              >
                <HeadlessDialog.Panel
                  role="modal"
                  className={`pointer-events-auto relative w-screen max-w-[300px] h-screen bg-white dark:bg-slate-900 text-left shadow-xl flex overflow-auto `}
                >
                  <div className="flex flex-col w-full p-6">{children}</div>
                </HeadlessDialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};

export default SlideOutModal;
