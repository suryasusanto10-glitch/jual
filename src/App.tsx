/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RateCalculator } from './components/RateCalculator';
import { LockCatalog } from './components/LockCatalog';
import { AccountCatalog } from './components/AccountCatalog';
import { SecurityGuide } from './components/SecurityGuide';
import { ReviewsAndProof } from './components/ReviewsAndProof';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { SellModal } from './components/SellModal';
import { AccountDetailModal } from './components/AccountDetailModal';
import { LockPackage, AccountListing, LockType } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modal States
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<LockPackage | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<AccountListing | null>(null);
  const [customOrder, setCustomOrder] = useState<{ type: string; amount: number; price: number } | null>(null);

  const [isSellModalOpen, setIsSellModalOpen] = useState<boolean>(false);
  const [presetSellType, setPresetSellType] = useState<LockType>('DL');
  const [presetSellAmount, setPresetSellAmount] = useState<number>(10);

  const [inspectAccount, setInspectAccount] = useState<AccountListing | null>(null);

  // Navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'jual-lock') {
      setPresetSellType('DL');
      setPresetSellAmount(10);
      setIsSellModalOpen(true);
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Order Handlers
  const handleOpenBuyGeneral = () => {
    setSelectedPackage(null);
    setSelectedAccount(null);
    setCustomOrder(null);
    setIsOrderModalOpen(true);
  };

  const handleSelectPackage = (pkg: LockPackage) => {
    setSelectedPackage(pkg);
    setSelectedAccount(null);
    setCustomOrder(null);
    setIsOrderModalOpen(true);
  };

  const handleBuyAccount = (account: AccountListing) => {
    setSelectedAccount(account);
    setSelectedPackage(null);
    setCustomOrder(null);
    setIsOrderModalOpen(true);
  };

  const handleProceedOrderFromCalc = (type: LockType, amount: number, totalPrice: number) => {
    setSelectedPackage(null);
    setSelectedAccount(null);
    setCustomOrder({
      type,
      amount,
      price: totalPrice,
    });
    setIsOrderModalOpen(true);
  };

  // Sell Handlers
  const handleOpenSellGeneral = () => {
    setPresetSellType('DL');
    setPresetSellAmount(10);
    setIsSellModalOpen(true);
  };

  const handleProceedSellFromCalc = (type: LockType, amount: number) => {
    setPresetSellType(type);
    setPresetSellAmount(amount);
    setIsSellModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080C15] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenBuyModal={handleOpenBuyGeneral}
          onOpenSellModal={handleOpenSellGeneral}
          onNavigate={handleNavigate}
        />

        {/* Live Rate Calculator */}
        <RateCalculator
          onProceedOrder={handleProceedOrderFromCalc}
          onProceedSell={handleProceedSellFromCalc}
        />

        {/* Lock Packages Catalog */}
        <LockCatalog onSelectPackage={handleSelectPackage} />

        {/* Account Listings Catalog */}
        <AccountCatalog
          onInspectAccount={(acc) => setInspectAccount(acc)}
          onBuyAccount={handleBuyAccount}
        />

        {/* Security & SOP Escrow Guide */}
        <SecurityGuide />

        {/* Customer Proof & Reviews */}
        <ReviewsAndProof />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Modals */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedPackage={selectedPackage}
        selectedAccount={selectedAccount}
        customOrder={customOrder}
      />

      <SellModal
        isOpen={isSellModalOpen}
        onClose={() => setIsSellModalOpen(false)}
        presetType={presetSellType}
        presetAmount={presetSellAmount}
      />

      <AccountDetailModal
        account={inspectAccount}
        onClose={() => setInspectAccount(null)}
        onBuyAccount={handleBuyAccount}
      />
    </div>
  );
}
