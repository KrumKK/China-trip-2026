import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { generalChecklist } from '../data/tripData';

function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState({});
  const [expandedCategories, setExpandedCategories] = useState(
    generalChecklist.map(cat => cat.category)
  );

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('chinaTrip_generalChecklist');
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('chinaTrip_generalChecklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Calculate totals
  const totalItems = generalChecklist.reduce((sum, cat) => sum + cat.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progress = (completedItems / totalItems) * 100;

  const getCategoryProgress = (category) => {
    const items = category.items;
    const completed = items.filter(item => checkedItems[item.id]).length;
    return { completed, total: items.length };
  };

  const categoryEmojis = {
    'Documentación': '📄',
    'Apps necesarias': '📱',
    'Para el niño': '👶',
    'Equipaje': '🧳',
  };

  return (
    <div className="px-4 pt-6 pb-4">
      <h1 className="font-display text-2xl font-bold mb-2">
        Checklist <span className="text-china-red">del viaje</span>
      </h1>
      <p className="text-gray-400 text-sm mb-6">
        Todo lo que necesitas preparar
      </p>

      {/* Overall Progress */}
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">Progreso total</span>
          <span className="text-sm font-medium">{completedItems}/{totalItems}</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {completedItems === totalItems && (
          <p className="text-center text-green-400 text-sm mt-3">
            🎉 ¡Todo listo para el viaje!
          </p>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-3">
        {generalChecklist.map((category, catIndex) => {
          const { completed, total } = getCategoryProgress(category);
          const isExpanded = expandedCategories.includes(category.category);
          const isComplete = completed === total;

          return (
            <div 
              key={category.category} 
              className={`card overflow-hidden animate-slide-up ${isComplete ? 'border-green-500/30' : ''}`}
              style={{ animationDelay: `${catIndex * 0.1}s`, opacity: 0 }}
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {categoryEmojis[category.category] || '📋'}
                  </span>
                  <div className="text-left">
                    <h3 className="font-semibold">{category.category}</h3>
                    <p className="text-xs text-gray-400">
                      {completed}/{total} completados
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {isComplete && (
                    <CheckCircle className="text-green-500" size={20} />
                  )}
                  {isExpanded ? (
                    <ChevronUp className="text-gray-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </div>
              </button>

              {/* Category Progress Bar */}
              <div className="progress-bar mt-3 h-1">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${(completed / total) * 100}%` }}
                ></div>
              </div>

              {/* Items */}
              {isExpanded && (
                <div className="mt-4 space-y-2 animate-fade-in">
                  {category.items.map((item) => (
                    <ChecklistItem
                      key={item.id}
                      item={item}
                      isChecked={checkedItems[item.id]}
                      onToggle={() => toggleItem(item.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          if (confirm('¿Seguro que quieres resetear todo el checklist?')) {
            setCheckedItems({});
          }
        }}
        className="w-full mt-6 py-3 text-sm text-gray-500 hover:text-gray-300 transition-colors"
      >
        Resetear checklist
      </button>
    </div>
  );
}

function ChecklistItem({ item, isChecked, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-3 w-full text-left py-2 hover:bg-gray-700/30 rounded-lg px-2 -mx-2 transition-colors"
    >
      <div className={`checkbox-custom ${isChecked ? 'checked' : ''}`}>
        {isChecked && <CheckCircle size={16} className="text-white" />}
      </div>
      <span className={`text-sm ${isChecked ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
        {item.text}
      </span>
    </button>
  );
}

export default ChecklistPage;
