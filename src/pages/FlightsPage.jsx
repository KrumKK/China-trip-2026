import React, { useState, useEffect } from 'react';
import { Plane, Clock, Calendar, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { flights, internalTransport } from '../data/tripData';

function FlightsPage() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const calculateCountdown = () => {
      const tripDate = new Date('2026-04-01T12:30:00');
      const now = new Date();
      const diff = tripDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setCountdown({ days, hours, mins });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 pt-6 pb-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="font-display text-3xl font-bold">
          China <span className="text-china-red">2026</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">Viaje familiar · Abril 2026</p>
      </div>

      {/* Countdown */}
      <div className="card mb-6 animate-pulse-glow">
        <p className="text-center text-gray-400 text-sm mb-3">Cuenta atrás para el viaje</p>
        <div className="flex justify-center gap-4">
          <CountdownUnit value={countdown.days} label="días" />
          <CountdownUnit value={countdown.hours} label="horas" />
          <CountdownUnit value={countdown.mins} label="min" />
        </div>
      </div>

      {/* International Flights */}
      <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
        <Plane className="text-china-red" size={20} />
        Vuelos internacionales
      </h2>

      <div className="space-y-4 mb-8">
        {flights.map((flight, index) => (
          <FlightCard key={flight.id} flight={flight} index={index} />
        ))}
      </div>

      {/* Internal Transport */}
      <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
        <ArrowRight className="text-china-gold" size={20} />
        Transporte interno
      </h2>

      <div className="space-y-3">
        {internalTransport.map((transport, index) => (
          <TransportCard key={transport.id} transport={transport} index={index} />
        ))}
      </div>
    </div>
  );
}

function CountdownUnit({ value, label }) {
  return (
    <div className="text-center">
      <div className="bg-china-red/20 rounded-xl px-4 py-3 min-w-[70px]">
        <span className="text-3xl font-bold text-white">{value}</span>
      </div>
      <span className="text-xs text-gray-400 mt-1 block">{label}</span>
    </div>
  );
}

function FlightCard({ flight, index }) {
  const isOutbound = flight.type === 'ida';
  
  return (
    <div 
      className="card animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          isOutbound ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
        }`}>
          {isOutbound ? '✈️ IDA' : '✈️ VUELTA'}
        </span>
        <span className="flex items-center gap-1 text-xs text-green-400">
          <CheckCircle size={14} />
          Confirmado
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold">{flight.departure}</p>
          <p className="text-xs text-gray-400">{flight.from.split(' ')[0]}</p>
        </div>
        
        <div className="flex-1 mx-4 relative">
          <div className="border-t border-dashed border-gray-600"></div>
          <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-china-red bg-gray-800 p-1" size={24} />
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold">{flight.arrival}</p>
          <p className="text-xs text-gray-400">{flight.to.split(' ')[0]}</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{formatDate(flight.date)}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{flight.duration}</span>
        </div>
      </div>

      {flight.notes && (
        <p className="mt-3 text-xs text-gray-500 bg-gray-700/50 rounded-lg p-2">
          💡 {flight.notes}
        </p>
      )}
    </div>
  );
}

function TransportCard({ transport, index }) {
  const isTrain = transport.type === 'train';
  
  return (
    <div 
      className="card animate-slide-up"
      style={{ animationDelay: `${(index + 2) * 0.1}s`, opacity: 0 }}
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isTrain ? 'bg-green-500/20' : 'bg-blue-500/20'
        }`}>
          <span className="text-xl">{isTrain ? '🚄' : '✈️'}</span>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{transport.from}</span>
            <ArrowRight size={14} className="text-gray-500" />
            <span className="font-medium">{transport.to}</span>
          </div>
          <p className="text-xs text-gray-400">
            {formatDate(transport.date)} · {transport.duration} · {transport.price}
          </p>
        </div>

        <span className={`text-xs px-2 py-1 rounded-full ${
          transport.status === 'pending' 
            ? 'bg-yellow-500/20 text-yellow-400' 
            : 'bg-green-500/20 text-green-400'
        }`}>
          {transport.status === 'pending' ? 'Pendiente' : 'Reservado'}
        </span>
      </div>

      {transport.notes && (
        <p className="mt-2 text-xs text-gray-500 ml-13">
          {transport.notes}
        </p>
      )}
    </div>
  );
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  return date.toLocaleDateString('es-ES', options);
}

export default FlightsPage;
