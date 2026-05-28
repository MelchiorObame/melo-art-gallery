import * as Dialog from '@radix-ui/react-dialog'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import type { Work } from '../../data/works'
import Placeholder from './Placeholder'
import Btn from './Btn'

interface WorkDialogProps {
  work: Work
  trigger?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onPrev?: () => void
  onNext?: () => void
  position?: number
  total?: number
}

export default function WorkDialog({
  work,
  trigger,
  open,
  onOpenChange,
  onPrev,
  onNext,
  position,
  total,
}: WorkDialogProps) {
  const hasNavigation = Boolean(onPrev && onNext)
  const isSold = work.status === 'Vendu'

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

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
              <div className="bg-bg max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1.7fr_0.9fr] overflow-hidden max-h-[92vh]">
                {/* Image */}
                <Placeholder
                  label={`n° ${work.id}`}
                  description={work.title}
                  aspectRatio={work.aspectRatio}
                  className="h-full min-h-[58vh] md:min-h-[72vh]"
                />

                {/* Details */}
                <div className="p-6 md:p-7 flex flex-col gap-4 overflow-y-auto border-t md:border-t-0 md:border-l border-line">
                  {hasNavigation && (
                    <div className="flex items-center justify-between border-b border-line pb-3">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={onPrev}
                          className="w-10 h-10 border border-line bg-bg hover:bg-bg-soft transition-colors flex items-center justify-center"
                          aria-label="Œuvre précédente"
                        >
                          <FiChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={onNext}
                          className="w-10 h-10 border border-line bg-bg hover:bg-bg-soft transition-colors flex items-center justify-center"
                          aria-label="Œuvre suivante"
                        >
                          <FiChevronRight size={16} />
                        </button>
                      </div>
                      {position && total && (
                        <span className="font-mono text-[10px] tracking-kicker uppercase text-fg-soft">
                          {String(position).padStart(2, '0')} / {String(total).padStart(2, '0')}
                        </span>
                      )}
                    </div>
                  )}

                  <Dialog.Title className="font-display font-light text-[clamp(22px,2.4vw,34px)] leading-[1.02] italic">
                    {work.title}
                  </Dialog.Title>

                  <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-4">
                    {[
                      ['Technique',  work.technique],
                      ['Format',     work.size],
                      ['Année',      String(work.year)],
                      ['Statut',     work.status],
                      ...(work.hours ? [['Durée', `${work.hours} heures`] as [string, string]] : []),
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-mono text-[9px] tracking-eyebrow uppercase text-fg-soft mb-1">{k}</dt>
                        <dd className="font-display italic text-[15px]">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  {work.description && (
                    <p className="text-[13px] text-fg-soft leading-[1.65]">{work.description}</p>
                  )}

                  <div className="pt-2 border-t border-line flex flex-wrap gap-3">
                    {isSold ? (
                      <Btn
                        to="/contact"
                        filled
                        className="text-[10px] px-5 py-3"
                      >
                        Commander une copie
                      </Btn>
                    ) : (
                      <Btn
                        to="/contact"
                        filled
                        className="text-[10px] px-5 py-3"
                      >
                        Acheter l'original
                      </Btn>
                    )}

                    <Btn
                      to="/contact"
                      className="text-[10px] px-5 py-3"
                    >
                      Poser une question
                    </Btn>
                  </div>
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
