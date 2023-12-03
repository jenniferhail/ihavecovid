import '@/global/globals.css'
import s from './Info.module.scss'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, InfoCircledIcon } from '@radix-ui/react-icons';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const InfoButton = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={s.button}>
        <InfoCircledIcon /> <VisuallyHidden>Get Information</VisuallyHidden>
      </button>
    </Dialog.Trigger>
    <Dialog.Portal client:load>
      <Dialog.Overlay className={`bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0`} />
      <Dialog.Content className={`${s.dialog} data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white py-[25px] px-[50px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`}>
        <Dialog.Title className={`${s.title} caps`}>
          What is this?
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          <p>For now, this site is a silly little landing page that you can send to your friends when they’re sick. In the future, I want to make this into an online convenience store / dashboard with a hub of useful links, resources and fun things to do while you have Covid.</p>
          <h2 className={`${s.title} caps`}>Who made it?</h2>
          <p>Hi, my name is <a href="https://jenhail.com" target="_blank">Jen Hail</a> and I’m a design-loving web developer. Back in September, quite a few of my coworkers were getting Covid again, so I thought, <i>"Did anyone buy the domain ihavecovid.com?"</i> It turns out that no one had! And thus, this side-project was born.</p>
          <p className={s.updated}>Last updated: Nov 14, 2023</p>
        </Dialog.Description>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default InfoButton;