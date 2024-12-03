"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useState } from "react";
import { toast } from "sonner";

interface NewNoteCardsProps {
  onNoteCreated: (content: string) => void;
}

const NewNoteCards = ({ onNoteCreated }: NewNoteCardsProps) => {
  const [content, setContent] = useState("");
  const shadowStyle = { boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.75)" };

  function handleContentChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  function handleSaveNote(event: React.FormEvent) {
    event.preventDefault();
    if (content === "") {
      return;
    }

    onNoteCreated(content);
    toast.success("Nota criada com sucesso");
    setContent("");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="rounded-lg inline-block m-1 max-md:px-2 p-3 relative bg-white border-4 border-zinc-900 text-zinc-900"
        style={shadowStyle}
      >
        <span className="font-semibold text-zinc-900">Adicionar nota</span>
        <p className="text-sm font-semibold leading-6 text-zinc-500">
          Adicione uma nota ou observação sobre esse debug
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/70">
          <Dialog.DialogContent className="fixed z-10 inset-0 md:inset-auto max-md:top-[70%] lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-gray-200 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="hover:bg-gray-300 p-2 rounded-full absolute top-2 right-2 text-zinc-900">
              <X className="size-5" />
            </Dialog.Close>

            <form className="flex-1 flex flex-col" onSubmit={handleSaveNote}>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="text-sm font-medium text-slate-200">
                  Adicionar nota
                </span>

                <textarea
                  autoFocus
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={handleContentChanged}
                  placeholder="Digite uma nota ou observação..."
                  value={content}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 py-4 text-center text-zinc-900 outline-none font-semibold hover:bg-lime-500"
              >
                Salvar nota?
              </button>
            </form>
          </Dialog.DialogContent>
        </Dialog.DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NewNoteCards;
