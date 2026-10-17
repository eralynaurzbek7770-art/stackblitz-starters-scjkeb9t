import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  Package, 
  Truck, 
  TrendingUp, 
  DollarSign, 
  Layers,
  Activity
} from 'lucide-react';

export default function FlowGuardDashboard() {
  const [selectedRange, setSelectedRange] = useState('30d');
  const [alerts, setAlerts] = useState([
    { id: 1, title: 'Задержка поставки электронных модулей', severity: 'HIGH', source: 'Pacific Precision', impact: '$12,400' },
    { id: 2, title: 'Штормовое предупреждение в регионе порта', severity: 'MEDIUM', source: 'Weather Alert', impact: '$4,500' },
    { id: 3, title: 'Критический остаток гидравлических клапанов', severity: 'CRITICAL', source: 'Склад №2', impact: '$28,000' }
  ]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6">
      {/* Шапка / Top Navigation */}
      <header className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl flex items-center">
            <ShieldCheck className="mr-2" /> FlowGuard AI
          </div>
          <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
            Demo Mode • Все отрасли
          </span>
        </div>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            + Создать заказ
          </button>
        </div>
      </header>

      {/* KPI Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center text-slate-500 mb-2">
            <span className="text-sm font-medium">Активные заказы</span>
            <Truck className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-2xl font-bold">142</div>
          <div className="text-xs text-green-600 mt-1">↑ 8% от прошлого месяца</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center text-slate-500 mb-2">
            <span className="text-sm font-medium">Заказы в зоне риска</span>
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-amber-600">18</div>
          <div className="text-xs text-amber-600 mt-1">12.6% от общего числа</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center text-slate-500 mb-2">
            <span className="text-sm font-medium">Риск дефицита (Stockout)</span>
            <Package className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-2xl font-bold text-red-600">5 товаров</div>
          <div className="text-xs text-red-600 mt-1">Покрытие &lt; 7 дней</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center text-slate-500 mb-2">
            <span className="text-sm font-medium">Финансовый риск</span>
            <DollarSign className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-2xl font-bold">$44,900</div>
          <div className="text-xs text-slate-500 mt-1">Оценка возможных потерь</div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Таблица рисков */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg text-slate-800 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-blue-600" /> Товарные позиции с высоким риском
            </h2>
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg text-xs font-medium">
              {['7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`px-3 py-1 rounded-md transition ${selectedRange === range ? 'bg-white shadow-sm text-blue-600' : 'text-slate-600'}`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Товар / SKU</th>
                  <th className="p-3">Поставщик</th>
                  <th className="p-3">Задержка</th>
                  <th className="p-3">Уровень риска</th>
                  <th className="p-3">Действие</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-medium text-slate-900">Модуль питания ELE-90</td>
                  <td className="p-3">Pacific Precision</td>
                  <td className="p-3 text-amber-600 font-medium">+5 дней</td>
                  <td className="p-3"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold">HIGH</span></td>
                  <td className="p-3"><button className="text-blue-600 hover:underline text-xs font-medium">Ускорить</button></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-medium text-slate-900">Гидроклапан AUT-44</td>
                  <td className="p-3">Bavarian Works</td>
                  <td className="p-3 text-red-600 font-medium">+12 дней</td>
                  <td className="p-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">CRITICAL</span></td>
                  <td className="p-3"><button className="text-blue-600 hover:underline text-xs font-medium">Замена</button></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-medium text-slate-900">Упаковка PKG-10</td>
                  <td className="p-3">Verde Agri</td>
                  <td className="p-3 text-green-600 font-medium">+1 день</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">LOW</span></td>
                  <td className="p-3"><button className="text-blue-600 hover:underline text-xs font-medium">Мониторинг</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Лента уведомлений */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" /> Оперативные сигналы
          </h2>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-xs text-slate-900">{alert.title}</span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    alert.severity === 'CRITICAL' ? 'bg-red-100 text-red-700' :
                    alert.severity === 'HIGH' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {alert.severity}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 mt-2">
                  <span>Источник: {alert.source}</span>
                  <span className="font-medium text-slate-700">Риск: {alert.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}