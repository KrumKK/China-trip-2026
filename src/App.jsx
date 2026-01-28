import React, { useState, useEffect } from 'react';
import { 
  Plane, MapPin, Calendar, CheckSquare, Info, 
  ChevronRight, Clock, AlertCircle
} from 'lucide-react';

// Pages
import FlightsPage from './pages/FlightsPage';
import OverviewPage from './pages/OverviewPage';
import CityPage from './pages/CityPage';
import ReservationsPage from './pages/ReservationsPage';
import ChecklistPage from './pages/ChecklistPage';
import InfoPage from './pages/InfoPage';

// Data
import { cities } from './data/tripData';

const tabs = [
  { id: 'flights', icon: Plane, label: 'Vuelos' },
  { id: 'overview', icon: MapPin, label: 'Ruta' },
  { id: 'cities', icon: Calendar, label: 'Ciudades' },
  { id: 'reservations', icon: AlertCircle, label: 'Reservas' },
  { id: 'checklist', icon: CheckSquare, label: 'Check' },
  { id: 'info', icon: Info, label: 'Info' },
];

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCity, setSelectedCity] = useState(null);

  // Load saved state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('chinaTrip2026State');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.activeTab) setActiveTab(state.activeTab);
      } catch (e) {
        console.error('Error loading state', e);
      }
    }
  }, []);

  // Save state
  useEffect(() => {
    localStorage.setItem('chinaTrip2026State', JSON.stringify({ activeTab }));
  }, [activeTab]);

  const handleCitySelect = (cityId) => {
    setSelectedCity(cityId);
  };

  const handleBackFromCity = () => {
    setSelectedCity(null);
  };

  const renderPage = () => {
    // If a city is selected, show city detail
    if (selectedCity) {
      return <CityPage cityId={selectedCity} onBack={handleBackFromCity} />;
    }

    switch (activeTab) {
      case 'flights':
        return <FlightsPage />;
      case 'overview':
        return <OverviewPage onCitySelect={handleCitySelect} />;
      case 'cities':
        return <CitiesSelector onSelect={handleCitySelect} />;
      case 'reservations':
        return <ReservationsPage />;
      case 'checklist':
        return <ChecklistPage />;
      case 'info':
        return <InfoPage />;
      default:
        return <OverviewPage onCitySelect={handleCitySelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Main Content */}
      <main className="animate-fade-in">
        {renderPage()}
      </main>

      {/* Tab Bar */}
      <nav className="tab-bar">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedCity(null);
                }}
                className={`tab-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[10px] mt-1 font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

// Cities Selector Component
function CitiesSelector({ onSelect }) {
  return (
    <div className="px-4 pt-6 pb-4">
      <h1 className="font-display text-2xl font-bold mb-6">
        Ciudades <span className="text-china-red">por visitar</span>
      </h1>
      
      <div className="space-y-3">
        {cities.map((city, index) => (
          <button
            key={city.id}
            onClick={() => onSelect(city.id)}
            className={`card-city bg-${city.id}-gradient w-full text-left animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{city.emoji}</span>
                <div>
                  <h3 className="font-semibold text-lg">{city.name}</h3>
                  <p className="text-sm text-gray-400">{city.nights} noches · {city.dates}</p>
                </div>
              </div>
              <ChevronRight className="text-gray-500" />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {city.highlights.slice(0, 3).map((h, i) => (
                <span key={i} className="text-xs bg-black/30 px-2 py-1 rounded-full">
                  {h}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
