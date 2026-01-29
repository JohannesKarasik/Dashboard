"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function ScanQrClient() {
  return (
    <div className="min-h-[calc(100vh-8rem)] w-full px-4 flex items-center justify-center">
      <div className="mx-auto w-full max-w-xl">
        <div className="rounded-2xl bg-white p-8 shadow-1 dark:bg-gray-dark dark:shadow-card">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-dark dark:text-white">
              Scan Client QR Code
            </h2>
            <p className="mt-2 text-sm text-body">
              Ask the client to present their QR code and scan it to continue
            </p>
          </div>

          {/* QR Container */}
          <div className="flex justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
              {/* Corner accents */}
              <span className="absolute left-2 top-2 h-5 w-5 rounded-sm border-l-4 border-t-4 border-primary" />
              <span className="absolute right-2 top-2 h-5 w-5 rounded-sm border-r-4 border-t-4 border-primary" />
              <span className="absolute bottom-2 left-2 h-5 w-5 rounded-sm border-b-4 border-l-4 border-primary" />
              <span className="absolute bottom-2 right-2 h-5 w-5 rounded-sm border-b-4 border-r-4 border-primary" />

              {/* Real QR Code */}
              <QRCodeCanvas
                value="client-scan-placeholder"
                size={180}
                bgColor="transparent"
                fgColor="#3C50E0"
                level="H"
              />
            </div>
          </div>

          {/* Action */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
              onClick={() => console.log("Scan Client’s Code")}
            >
              Scan Client’s Code
            </button>
          </div>

          {/* Helper text */}
          <p className="mt-4 text-center text-xs text-body">
            Scanning will automatically open the client profile
          </p>
        </div>
      </div>
    </div>
  );
}