import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import React from "react";

interface PrivacyVaultProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyVault: React.FC<PrivacyVaultProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-surface/80 backdrop-blur-2xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-2xl bg-surface-container p-12 border border-on-surface/10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-on-surface/50 hover:text-on-surface"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="font-display text-2xl mb-8 text-gold uppercase tracking-widest">Privacy Vault</h2>
            <div className="space-y-4 font-sans text-on-surface-variant overflow-y-auto max-h-[60vh] pr-4">
              <p>Your privacy is our ultimate priority. Estate Architect operates with absolute discretion and institutional-grade data protection.</p>
              <p>We do not share your real estate portfolio, search history, or personal identifiers with any third parties without explicit, notarized consent.</p>
              <p>All inquiries are handled through secure, encrypted channels to ensure your interests remain confidential throughout the acquisition process.</p>
              {/* More legal text would go here */}
            </div>
            <div className="mt-12 flex justify-end">
              <button 
                onClick={onClose}
                className="font-display text-xs tracking-widest text-gold hover:underline"
              >
                CLOSE VAULT
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
