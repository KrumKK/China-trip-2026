import React, { useState } from 'react';
import { Volume2, Phone, Cloud, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { usefulInfo } from '../data/tripData';

function InfoPage() {
  const [expandedSection, setExpandedSection] = useState('phrases');

  const sections = [
    { id: 'phrases', title: 'Frases útiles', emoji: '🗣️', icon: Volume2 },
    { id: 'emergency', title: 'Emergencias', emoji: '🚨', icon: Phone },
    { id: 'weather', title: 'Clima abril', emoji: '☀️', icon: Cloud },
    { id: 'tips', title: 'Consejos', emoji: '💡', icon: Lightbulb },
  ];

  return (
    <div className="px-4 pt-6 pb-4">
      <h1 className="font-display text-2xl font-bold mb-2">
        Info <span className="text-china-red">útil</span>
      </h1>
      <p className="text-gray-400 text-sm mb-6">
        Todo lo que necesitas saber en China
      </p>

      <div className="space-y-3">
        {sections.map((section, index) => (
          <SectionCard
            key={section.id}
            section={section}
            isExpanded={expandedSection === section.id}
            onToggle={() => setExpandedSection(
              expandedSection === section.id ? null : section.id
            )}
            index={index}
          >
            {section.id === 'phrases' && <PhrasesContent />}
            {section.id === 'emergency' && <EmergencyContent />}
            {section.id === 'weather' && <WeatherContent />}
            {section.id === 'tips' && <TipsContent />}
          </SectionCard>
        ))}
      </div>

      {/* Currency Calculator */}
      <div className="card mt-6 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          💱 Conversor rápido
        </h3>
        <CurrencyConverter />
      </div>

      {/* Useful Links */}
      <div className="card mt-4">
        <h3 className="font-semibold mb-3">🔗 Enlaces útiles</h3>
        <div className="space-y-2">
          <LinkItem url="trip.com" label="Reservas trenes y vuelos" />
          <LinkItem url="shanghaidisneyresort.com" label="Disneyland Shanghai" />
          <LinkItem url="travelchinaguide.com" label="Guía de viaje" />
          <LinkItem url="gugong.ctrip.com" label="Ciudad Prohibida" />
        </div>
      </div>
    </div>
  );
}

function SectionCard({ section, isExpanded, onToggle, children, index }) {
  const Icon = section.icon;
  
  return (
    <div 
      className="card overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{section.emoji}</span>
          <h3 className="font-semibold">{section.title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="text-gray-500" size={20} />
        ) : (
          <ChevronDown className="text-gray-500" size={20} />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

function PhrasesContent() {
  const [speaking, setSpeaking] = useState(null);

  const speak = (text, index) => {
    if ('speechSynthesis' in window) {
      setSpeaking(index);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      utterance.onend = () => setSpeaking(null);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-2">
      {usefulInfo.phrases.map((phrase, index) => (
        <div 
          key={index}
          className="flex items-center justify-between bg-gray-700/30 rounded-xl p-3"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">{phrase.chinese}</span>
              <span className="text-xs text-gray-400">({phrase.pinyin})</span>
            </div>
            <p className="text-sm text-gray-300">{phrase.spanish}</p>
          </div>
          <button
            onClick={() => speak(phrase.chinese, index)}
            className={`p-2 rounded-full transition-colors ${
              speaking === index 
                ? 'bg-china-red text-white' 
                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
            }`}
          >
            <Volume2 size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}

function EmergencyContent() {
  return (
    <div className="space-y-3">
      {usefulInfo.emergency.map((item, index) => (
        <div 
          key={index}
          className="flex items-center justify-between bg-red-500/10 border border-red-500/30 rounded-xl p-4"
        >
          <span className="font-medium">{item.name}</span>
          <a
            href={`tel:${item.number}`}
            className="text-2xl font-bold text-red-400"
          >
            {item.number}
          </a>
        </div>
      ))}
      <p className="text-xs text-gray-500 text-center mt-2">
        * Desde móvil español marca +86 antes del número
      </p>
    </div>
  );
}

function WeatherContent() {
  const cities = [
    { name: 'Beijing', emoji: '🏯', weather: usefulInfo.weather.beijing },
    { name: 'Xi\'an', emoji: '⚔️', weather: usefulInfo.weather.xian },
    { name: 'Zhangjiajie', emoji: '🏔️', weather: usefulInfo.weather.zhangjiajie },
    { name: 'Shanghai', emoji: '🎡', weather: usefulInfo.weather.shanghai },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {cities.map((city, index) => (
        <div 
          key={index}
          className="bg-gray-700/30 rounded-xl p-3 text-center"
        >
          <span className="text-2xl">{city.emoji}</span>
          <p className="font-medium text-sm mt-1">{city.name}</p>
          <p className="text-xs text-gray-400 mt-1">{city.weather}</p>
        </div>
      ))}
    </div>
  );
}

function TipsContent() {
  return (
    <div className="space-y-2">
      {usefulInfo.tips.map((tip, index) => (
        <div 
          key={index}
          className="flex gap-3 bg-yellow-500/10 rounded-xl p-3"
        >
          <span className="text-yellow-400">💡</span>
          <p className="text-sm text-gray-200">{tip}</p>
        </div>
      ))}
    </div>
  );
}

function CurrencyConverter() {
  const [eur, setEur] = useState('');
  const rate = 7.8; // Approximate EUR to CNY rate

  const cny = eur ? (parseFloat(eur) * rate).toFixed(2) : '';

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <label className="text-xs text-gray-400">EUR €</label>
        <input
          type="number"
          value={eur}
          onChange={(e) => setEur(e.target.value)}
          placeholder="0"
          className="w-full bg-gray-700 rounded-lg px-3 py-2 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-china-red"
        />
      </div>
      <span className="text-gray-500 text-xl">=</span>
      <div className="flex-1">
        <label className="text-xs text-gray-400">CNY ¥</label>
        <div className="w-full bg-gray-700/50 rounded-lg px-3 py-2 text-lg font-medium text-china-gold">
          {cny || '0'}
        </div>
      </div>
    </div>
  );
}

function LinkItem({ url, label }) {
  return (
    <a
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between py-2 px-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
    >
      <span className="text-sm">{label}</span>
      <span className="text-xs text-blue-400">{url}</span>
    </a>
  );
}

export default InfoPage;
