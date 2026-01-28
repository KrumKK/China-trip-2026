import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Calendar, ExternalLink, Clock } from 'lucide-react';
import { reservations } from '../data/tripData';

function ReservationsPage() {
  const [checkedReservations, setCheckedReservations] = useState({});

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('chinaTrip_reservations');
    if (saved) {
      setCheckedReservations(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('chinaTrip_reservations', JSON.stringify(checkedReservations));
  }, [checkedReservations]);

  const toggleReservation = (id) => {
    setCheckedReservations(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedReservations).filter(Boolean).length;
  const totalCount = reservations.length;
  const progress = (completedCount / totalCount) * 100;

  // Sort: mandatory first, then by date
  const sortedReservations = [...reservations].sort((a, b) => {
    if (a.mandatory !== b.mandatory) return b.mandatory - a.mandatory;
    return new Date(a.bookBefore) - new Date(b.bookBefore);
  });

  return (
    <div className="px-4 pt-6 pb-4">
      <h1 className="font-display text-2xl font-bold mb-2">
        Reservas <span className="text-china-red">necesarias</span>
      </h1>
      <p className="text-gray-400 text-sm mb-6">
        No olvides reservar con antelación
      </p>

      {/* Progress */}
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">Progreso</span>
          <span className="text-sm font-medium">{completedCount}/{totalCount}</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          {completedCount === totalCount 
            ? '🎉 ¡Todo reservado!' 
            : `Te faltan ${totalCount - completedCount} reservas`}
        </p>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-gray-400">Obligatorio</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="text-gray-400">Recomendado</span>
        </div>
      </div>

      {/* Reservations List */}
      <div className="space-y-3">
        {sortedReservations.map((res, index) => (
          <ReservationCard
            key={res.id}
            reservation={res}
            isChecked={checkedReservations[res.id]}
            onToggle={() => toggleReservation(res.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function ReservationCard({ reservation, isChecked, onToggle, index }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
  };

  const isUrgent = () => {
    const bookBefore = new Date(reservation.bookBefore);
    const now = new Date();
    const daysLeft = Math.ceil((bookBefore - now) / (1000 * 60 * 60 * 24));
    return daysLeft <= 7 && !isChecked;
  };

  const cityColors = {
    'Beijing': 'border-l-beijing',
    'Xi\'an': 'border-l-xian',
    'Zhangjiajie': 'border-l-zhangjiajie',
    'Shanghai': 'border-l-shanghai',
    'Transporte': 'border-l-gray-500',
  };

  return (
    <div 
      className={`card border-l-4 ${cityColors[reservation.city] || 'border-l-gray-500'} 
        ${isChecked ? 'opacity-60' : ''} 
        ${isUrgent() ? 'ring-2 ring-red-500/50' : ''}
        animate-slide-up`}
      style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`checkbox-custom mt-1 flex-shrink-0 ${isChecked ? 'checked' : ''}`}
        >
          {isChecked && <CheckCircle size={16} className="text-white" />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className={`font-semibold text-sm ${isChecked ? 'line-through' : ''}`}>
              {reservation.name}
            </h3>
            {reservation.mandatory && (
              <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">
                OBLIGATORIO
              </span>
            )}
            {isUrgent() && (
              <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded animate-pulse">
                ⚠️ URGENTE
              </span>
            )}
          </div>

          <p className="text-xs text-gray-400 mb-2">{reservation.city}</p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1 text-gray-400">
              <Calendar size={12} />
              <span>Visita: {formatDate(reservation.visitDate)}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <Clock size={12} />
              <span>Reservar: {formatDate(reservation.bookBefore)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <span className="text-sm font-medium text-china-gold">
              {reservation.price}
            </span>
            <a
              href={`https://${reservation.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300"
              onClick={(e) => e.stopPropagation()}
            >
              {reservation.website}
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationsPage;
