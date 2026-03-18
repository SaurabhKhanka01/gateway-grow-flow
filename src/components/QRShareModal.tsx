import { QRCodeSVG } from "qrcode.react";
import { X, Download, Share2, Copy, Check } from "lucide-react";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QRShareModalProps {
  open: boolean;
  onClose: () => void;
}

const QRShareModal = ({ open, onClose }: QRShareModalProps) => {
  const portfolioUrl = typeof window !== "undefined"
    ? `${window.location.origin}?utm_source=qr_share&utm_medium=qr&utm_campaign=portfolio`
    : "https://dsyhospitality.com?utm_source=qr_share&utm_medium=qr&utm_campaign=portfolio";

  const [copied, setCopied] = useState(false);

  const copyLink = useCallback(async () => {
    await navigator.clipboard.writeText(portfolioUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [portfolioUrl]);

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`Check out DSY Hospitality — India's premier hospitality ecosystem: ${portfolioUrl}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const downloadQR = () => {
    const svg = document.getElementById("qr-code-svg");
    if (!svg) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    canvas.width = 900;
    canvas.height = 900;
    img.onload = () => {
      ctx?.drawImage(img, 0, 0, 900, 900);
      const a = document.createElement("a");
      a.download = "DSY_Hospitality_QR.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  const nativeShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "DSY Hospitality — Deepak Yadav",
        text: "Explore India's premier hospitality ecosystem",
        url: portfolioUrl,
      });
    } else {
      shareWhatsApp();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center sm:items-start justify-center bg-foreground/30 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm bg-card border border-border rounded-2xl p-8 text-center card-shadow sm:mt-40"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
              <X size={20} />
            </button>

            <h3 className="font-heading text-xl font-bold text-foreground mb-1">Share Portfolio</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">Scan this QR code to visit the portfolio</p>

            <div className="bg-white rounded-2xl p-6 inline-block mb-6 shadow-inner border border-border">
              <QRCodeSVG
                id="qr-code-svg"
                value={portfolioUrl}
                size={200}
                bgColor="#FFFFFF"
                fgColor="#1e3a5f"
                level="H"
              />
            </div>

            <p className="text-xs font-body text-muted-foreground mb-4 break-all">{portfolioUrl.split('?')[0]}</p>

            <div className="grid grid-cols-3 gap-3">
              <button onClick={downloadQR} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Download QR">
                <Download size={18} className="text-primary" />
                <span className="text-xs font-body text-muted-foreground">Download</span>
              </button>
              <button onClick={nativeShare} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Share">
                <Share2 size={18} className="text-primary" />
                <span className="text-xs font-body text-muted-foreground">Share</span>
              </button>
              <button onClick={copyLink} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Copy link">
                {copied ? <Check size={18} className="text-success" /> : <Copy size={18} className="text-primary" />}
                <span className="text-xs font-body text-muted-foreground">{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QRShareModal;
