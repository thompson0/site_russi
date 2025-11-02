"use client";

import { QrCode } from "lucide-react";
import { Button } from "../ui/button";
import QRCode from "qrcode";

function QrCodeButton({ url, productname }) {
  async function handleDownload() {
    try {

      const qr = await QRCode.toDataURL(url);

 
      const link = document.createElement("a");
      link.href = qr;
      link.download =  `${productname}.png`; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Erro ao gerar QR Code:", err);
    }
  }

  return (
    <Button size="" variant="outline" onClick={handleDownload}>
      
      <QrCode size={24} 
       />
       Baixar Qrcode
    </Button>
  );
}

export default QrCodeButton;
