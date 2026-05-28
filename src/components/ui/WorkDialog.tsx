import * as Dialog from '@radix-ui/react-dialog'
import { FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import type { Work } from '../../data/works'
import Placeholder from './Placeholder'

interface WorkDialogProps {
  work:    Work
  trigger: React.ReactNode
}

export default function WorkDialog({ work, trigger }: WorkDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <AnimatePresence>
        <Dialog.Portal>
          {/* Backdrop */}
          <Dialog.Overlay asChild>
            <motion.div
              className="fixed inset-0 z-[100] bg-fg/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Dialog.Overlay>

          {/* Panel */}
          <Dialog.Content asChild>
            <motion.div
              className="fixed inset-0 z-[101] flex items-center justify-center p-6"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-bg max-w-4xl w-full grid grid-cols-[1fr_1.2fr] overflow-hidden max-h-[90vh]">
                {/* Image */}
                <Placeholder
                  label={`n° ${work.id}`}
                  description={work.title}
                  aspectRatio={work.aspectRatio}
                  className="h-full min-h-[400px]"
                />

                {/* Details */}
                <div className="p-10 flex flex-col gap-6 overflow-y-auto">
                  <Dialog.Title className="font-display font-light text-[clamp(32px,4vw,56px)] leading-[0.95] italic">
                    {work.title}
                  </Dialog.Title>

                  <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6">
                    {[
                      ['Technique',  work.technique],
                      ['Format',     work.size],
                      ['Année',      String(work.year)],
                      ['Statut',     work.status],
                      ...(work.hours ? [['Durée', `${work.hours} heures`] as [string, string]] : []),
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-mono text-[10px] tracking-eyebrow uppercase text-fg-soft mb-1">{k}</dt>
                        <dd className="font-display italic text-[18px]">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  {work.description && (
                    <p className="text-[15px] text-fg-soft leading-[1.65]">{work.description}</p>
                  )}
                </div>

                {/* Close */}
                <Dialog.Close className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-line bg-bg hover:bg-bg-soft transition-colors">
                  <FiX size={16} />
                </Dialog.Close>
              </div>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </AnimatePresence>
    </Dialog.Root>
  )
}
