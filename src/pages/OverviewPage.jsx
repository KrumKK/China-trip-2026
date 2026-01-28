import React from 'react';
import { ChevronRight, Calendar, Users, Clock } from 'lucide-react';
import { cities, tripInfo } from '../data/tripData';

function OverviewPage({ onCitySelect }) {
  return (
    <div className="px-4 pt-6 pb-4">
      {/* Hero Header */}
      <div className="relative mb-6 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-china-red/30 to-china-gold/20"></div>
        <div className="relative p-6">
          <h1 className="font-display text-3xl font-bold mb-2">
            🇨🇳 Viaje a <span className="text-china-red">China</span>
          </h1>
          <p className="text-gray-300">Abril 2026 · Aventura familiar</p>
          
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} className="text-china-gold" />
              <span>{tripInfo.totalDays} días</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users size={16} className="text-china-gold" />
              <span>3 viajeros</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-china-gold" />
              <span>{tripInfo.totalNights} noches</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Visual */}
      <h2 className="font-semibold text-lg mb-4">Ruta del viaje</h2>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-china-red via-china-gold to-china-red"></div>
        
        <div className="space-y-4">
          {/* Start */}
          <TimelineItem 
            emoji="✈️" 
            title="Salida Barcelona"
            subtitle="1 abril · 12:30"
            color="red"
            isFirst
          />

          {cities.map((city, index) => (
            <TimelineCity 
              key={city.id}
              city={city}
              onClick={() => onCitySelect(city.id)}
              index={index}
            />
          ))}

          {/* End */}
          <TimelineItem 
            emoji="🏠" 
            title="Llegada Barcelona"
            subtitle="21 abril · 07:55"
            color="red"
            isLast
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        <StatCard 
          emoji="🏯" 
          value="4" 
          label="Ciudades"
          color="bg-beijing/20"
        />
        <StatCard 
          emoji="🎢" 
          value="20+" 
          label="Atracciones"
          color="bg-china-red/20"
        />
        <StatCard 
          emoji="🚄" 
          value="3" 
          label="Trayectos"
          color="bg-zhangjiajie/20"
        />
        <StatCard 
          emoji="🏰" 
          value="2" 
          label="Días Disney"
          color="bg-shanghai/20"
        />
      </div>

      {/* Highlights */}
      <h2 className="font-semibold text-lg mt-8 mb-4">✨ Highlights del viaje</h2>
      <div className="space-y-2">
        <HighlightItem emoji="🛝" text="Tobogán Gran Muralla (1,580m)" />
        <HighlightItem emoji="🛗" text="Ascensor Bailong (326m cristal)" />
        <HighlightItem emoji="🚄" text="Tren Maglev (430 km/h)" />
        <HighlightItem emoji="🏰" text="Shanghai Disneyland (2 días)" />
        <HighlightItem emoji="🦂" text="Mercado escorpiones Beijing" />
        <HighlightItem emoji="🚲" text="Bici sobre muralla Xi'an" />
      </div>
    </div>
  );
}

function TimelineItem({ emoji, title, subtitle, color, isFirst, isLast }) {
  return (
    <div className="flex items-center gap-4 pl-1">
      <div className={`w-8 h-8 rounded-full bg-${color}-500/30 border-2 border-${color}-500 flex items-center justify-center z-10`}>
        <span className="text-sm">{emoji}</span>
      </div>
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

function TimelineCity({ city, onClick, index }) {
  const colorClasses = {
    beijing: 'border-beijing bg-beijing/20',
    xian: 'border-xian bg-xian/20',
    zhangjiajie: 'border-zhangjiajie bg-zhangjiajie/20',
    shanghai: 'border-shanghai bg-shanghai/20',
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 pl-1 w-full text-left animate-slide-up`}
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <div className={`w-8 h-8 rounded-full ${colorClasses[city.id]} border-2 flex items-center justify-center z-10`}>
        <span className="text-sm">{city.emoji}</span>
      </div>
      
      <div className={`flex-1 card-city ${colorClasses[city.id]} flex items-center justify-between`}>
        <div>
          <p className="font-semibold">{city.name}</p>
          <p className="text-xs text-gray-400">{city.nights} noches · {city.dates}</p>
        </div>
        <ChevronRight className="text-gray-500" size={20} />
      </div>
    </button>
  );
}

function StatCard({ emoji, value, label, color }) {
  return (
    <div className={`card ${color} text-center`}>
      <span className="text-2xl">{emoji}</span>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
}

function HighlightItem({ emoji, text }) {
  return (
    <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-4 py-3">
      <span className="text-xl">{emoji}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}

export default OverviewPage;
