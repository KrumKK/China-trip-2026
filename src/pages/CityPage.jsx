import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle, Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { cities, itinerary } from '../data/tripData';

function CityPage({ cityId, onBack }) {
  const city = cities.find(c => c.id === cityId);
  const cityItinerary = itinerary[cityId] || [];
  const [expandedDay, setExpandedDay] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  // Load checked items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`chinaTrip_${cityId}_checks`);
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, [cityId]);

  // Save checked items
  useEffect(() => {
    localStorage.setItem(`chinaTrip_${cityId}_checks`, JSON.stringify(checkedItems));
  }, [checkedItems, cityId]);

  const toggleCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const colorClasses = {
    beijing: { 
      bg: 'bg-beijing/20', 
      border: 'border-beijing',
      text: 'text-beijing',
      gradient: 'from-beijing/30 to-beijing/10'
    },
    xian: { 
      bg: 'bg-xian/20', 
      border: 'border-xian',
      text: 'text-xian',
      gradient: 'from-xian/30 to-xian/10'
    },
    zhangjiajie: { 
      bg: 'bg-zhangjiajie/20', 
      border: 'border-zhangjiajie',
      text: 'text-zhangjiajie',
      gradient: 'from-zhangjiajie/30 to-zhangjiajie/10'
    },
    shanghai: { 
      bg: 'bg-shanghai/20', 
      border: 'border-shanghai',
      text: 'text-shanghai',
      gradient: 'from-shanghai/30 to-shanghai/10'
    },
  };

  const colors = colorClasses[cityId];

  if (!city) {
    return <div className="p-4">Ciudad no encontrada</div>;
  }

  return (
    <div className="pb-4">
      {/* Hero Header */}
      <div className={`relative bg-gradient-to-br ${colors.gradient} px-4 pt-6 pb-8`}>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-300 mb-4 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Volver</span>
        </button>

        <div className="flex items-center gap-4">
          <span className="text-5xl">{city.emoji}</span>
          <div>
            <h1 className="font-display text-3xl font-bold">{city.name}</h1>
            <p className="text-gray-300 text-sm">{city.nights} noches · {city.dates}</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mt-4">
          {city.highlights.map((h, i) => (
            <span 
              key={i} 
              className={`text-xs ${colors.bg} ${colors.border} border px-3 py-1 rounded-full`}
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Day by Day */}
      <div className="px-4 -mt-4">
        <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Calendar className={colors.text} size={20} />
          Itinerario día a día
        </h2>

        <div className="space-y-3">
          {cityItinerary.map((day, index) => (
            <DayCard
              key={day.day}
              day={day}
              isExpanded={expandedDay === day.day}
              onToggle={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              colors={colors}
              checkedItems={checkedItems}
              onCheck={toggleCheck}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DayCard({ day, isExpanded, onToggle, colors, checkedItems, onCheck, index }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  return (
    <div 
      className={`card overflow-hidden animate-slide-up`}
      style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
    >
      {/* Header - Always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
            <span className="font-bold text-sm">D{day.day}</span>
          </div>
          <div className="text-left">
            <p className="font-semibold text-sm">{day.title}</p>
            <p className="text-xs text-gray-400">{day.weekday} · {formatDate(day.date)}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="text-gray-500" size={20} />
        ) : (
          <ChevronDown className="text-gray-500" size={20} />
        )}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4 space-y-4 animate-fade-in">
          {/* Schedule */}
          <div className="space-y-3">
            <ScheduleItem 
              time="Mañana" 
              emoji="🌅" 
              content={day.morning}
            />
            <ScheduleItem 
              time="Tarde" 
              emoji="☀️" 
              content={day.afternoon}
            />
            <ScheduleItem 
              time="Noche" 
              emoji="🌙" 
              content={day.evening}
            />
          </div>

          {/* Notes */}
          {day.notes && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3">
              <p className="text-sm text-yellow-200">💡 {day.notes}</p>
            </div>
          )}

          {/* Checklist for this day */}
          {day.checklist && day.checklist.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Tareas</p>
              {day.checklist.map(item => (
                <ChecklistItem
                  key={item.id}
                  item={item}
                  isChecked={checkedItems[item.id]}
                  onToggle={() => onCheck(item.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ScheduleItem({ time, emoji, content }) {
  if (!content || content === '-') return null;
  
  return (
    <div className="flex gap-3">
      <div className="w-16 flex-shrink-0">
        <span className="text-xs text-gray-400">{emoji} {time}</span>
      </div>
      <p className="text-sm text-gray-200">{content}</p>
    </div>
  );
}

function ChecklistItem({ item, isChecked, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-3 w-full text-left"
    >
      <div className={`checkbox-custom ${isChecked ? 'checked' : ''}`}>
        {isChecked && <CheckCircle size={16} className="text-white" />}
      </div>
      <span className={`text-sm ${isChecked ? 'text-gray-500 line-through' : ''}`}>
        {item.text}
      </span>
    </button>
  );
}

export default CityPage;
