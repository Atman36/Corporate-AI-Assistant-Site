import React, { useState } from 'react';
import { 
  Shield, Lock, Search, FileText, Database, MessageSquare, 
  Link2, Users, Settings, Clock, ChevronDown, ArrowRight,
  CheckCircle2, Zap, Globe, Server
} from 'lucide-react';

// ============================================
// DESIGN SYSTEM PREVIEW
// CORPRAG — Refined Corporate Trust
// ============================================

export default function DesignSystemPreview() {
  const [activeTab, setActiveTab] = useState('colors');
  const [openAccordion, setOpenAccordion] = useState(0);

  const tabs = [
    { id: 'colors', label: 'Цвета' },
    { id: 'typography', label: 'Типографика' },
    { id: 'components', label: 'Компоненты' },
    { id: 'sections', label: 'Секции' },
  ];

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <Zap className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 text-lg">CORPRAG</h1>
              <p className="text-xs text-slate-500">Design System Preview</p>
            </div>
          </div>
          
          {/* Tabs */}
          <nav className="flex gap-1 bg-slate-100 rounded-lg p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* COLORS TAB */}
        {activeTab === 'colors' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Цветовая палитра</h2>
              
              {/* Primary */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">Primary — Deep Slate Navy</h3>
                <div className="flex gap-2 flex-wrap">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(shade => (
                    <div key={shade} className="text-center">
                      <div 
                        className="w-16 h-16 rounded-xl shadow-sm border border-stone-200"
                        style={{ 
                          backgroundColor: shade <= 300 
                            ? `rgb(${248 - shade/2}, ${250 - shade/2}, ${252 - shade/2})`
                            : `rgb(${Math.max(2, 148 - shade/6)}, ${Math.max(6, 163 - shade/5)}, ${Math.max(23, 184 - shade/4)})`
                        }}
                      />
                      <span className="text-xs text-slate-500 mt-1 block">{shade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accent */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">Accent — Muted Teal</h3>
                <div className="flex gap-2 flex-wrap">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                    <div key={shade} className="text-center">
                      <div 
                        className="w-16 h-16 rounded-xl shadow-sm"
                        style={{ 
                          backgroundColor: shade <= 200 
                            ? `rgb(${240 - shade/3}, ${253 - shade/10}, ${250 - shade/6})`
                            : `rgb(${Math.max(4, 94 - shade/10)}, ${Math.max(47, 234 - shade/4)}, ${Math.max(46, 212 - shade/4)})`
                        }}
                      />
                      <span className="text-xs text-slate-500 mt-1 block">{shade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semantic */}
              <div>
                <h3 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">Semantic Colors</h3>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-green-600" />
                    <span className="text-xs text-slate-500 mt-1 block">Success</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-amber-500" />
                    <span className="text-xs text-slate-500 mt-1 block">Warning</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-red-600" />
                    <span className="text-xs text-slate-500 mt-1 block">Error</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-blue-500" />
                    <span className="text-xs text-slate-500 mt-1 block">Info</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TYPOGRAPHY TAB */}
        {activeTab === 'typography' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Типографика</h2>
              
              <div className="grid gap-8">
                {/* Display Font */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">Display — Manrope</span>
                  <div className="mt-4 space-y-3">
                    <p style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '3.75rem', letterSpacing: '-0.05em', lineHeight: 1.1 }} className="text-slate-900">
                      Корпоративный AI-ассистент
                    </p>
                    <p style={{ fontFamily: 'system-ui', fontWeight: 700, fontSize: '2.25rem', letterSpacing: '-0.025em' }} className="text-slate-800">
                      Заголовок второго уровня
                    </p>
                    <p style={{ fontFamily: 'system-ui', fontWeight: 600, fontSize: '1.5rem' }} className="text-slate-700">
                      Заголовок третьего уровня
                    </p>
                  </div>
                </div>

                {/* Body Font */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">Body — Source Sans 3</span>
                  <div className="mt-4 space-y-4 max-w-2xl">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Отвечает по документам <strong className="text-slate-900">со ссылками на источники</strong>. 
                      Разворачивается on-prem или в облаке РФ. Под контроль доступа и требования безопасности.
                    </p>
                    <p className="text-base text-slate-600">
                      RAG-система находит релевантные фрагменты с учётом прав текущего пользователя и генерирует ответ с цитатами.
                    </p>
                    <p className="text-sm text-slate-500">
                      Мелкий текст для подписей, дисклеймеров и вторичной информации.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* COMPONENTS TAB */}
        {activeTab === 'components' && (
          <div className="space-y-12">
            {/* Buttons */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Кнопки</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                <div className="flex flex-wrap gap-4 items-center">
                  <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 transition-all active:scale-[0.98]">
                    Primary
                  </button>
                  <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all active:scale-[0.98]">
                    Accent (CTA)
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                  <button className="px-6 py-3 bg-transparent text-slate-900 font-semibold rounded-lg border-2 border-slate-300 hover:bg-slate-50 transition-all">
                    Outline
                  </button>
                  <button className="px-6 py-3 bg-transparent text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition-all">
                    Ghost
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-4 items-center mt-6 pt-6 border-t border-stone-200">
                  <button className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md">
                    Small
                  </button>
                  <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg">
                    Medium
                  </button>
                  <button className="px-8 py-4 bg-slate-900 text-white text-lg font-semibold rounded-xl">
                    Large
                  </button>
                </div>
              </div>
            </section>

            {/* Badges */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Бейджи</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wide rounded-full">
                    Primary
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wide rounded-full">
                    <Lock className="w-3 h-3" />
                    Закрытый контур
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Success
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wide rounded-full">
                    Warning
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold uppercase tracking-wide rounded-full">
                    Error
                  </span>
                </div>
              </div>
            </section>

            {/* Cards */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Карточки</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center mb-4">
                    <Search className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Default Card</h3>
                  <p className="text-slate-600 text-sm">Hover эффект: shadow + translate</p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Elevated Card</h3>
                  <p className="text-slate-600 text-sm">Выраженная тень, без границы</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 border border-white/30">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Glass Card</h3>
                  <p className="text-slate-600 text-sm">Полупрозрачность + blur</p>
                </div>
              </div>
            </section>

            {/* Inputs */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Формы</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="you@company.ru"
                      className="w-full px-4 py-3 text-slate-900 bg-white border-2 border-stone-300 rounded-lg placeholder:text-stone-400 focus:border-teal-500 focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">Компания</label>
                    <input 
                      type="text" 
                      placeholder="ООО «Компания»"
                      className="w-full px-4 py-3 text-slate-900 bg-white border-2 border-stone-300 rounded-lg placeholder:text-stone-400 focus:border-teal-500 focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-red-600 mb-2">Email с ошибкой</label>
                    <input 
                      type="email" 
                      value="test@gmail.com"
                      className="w-full px-4 py-3 text-slate-900 bg-white border-2 border-red-500 rounded-lg focus:border-red-500 focus:outline-none"
                      readOnly
                    />
                    <p className="mt-1.5 text-sm text-red-600">Введите корпоративный email</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* SECTIONS TAB */}
        {activeTab === 'sections' && (
          <div className="space-y-12">
            {/* Mini Hero Preview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Hero Section</h2>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-50 via-teal-50/30 to-stone-50 p-8 lg:p-12">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
                  <div className="absolute top-10 right-10 w-48 h-48 bg-teal-200 rounded-full blur-3xl" />
                </div>
                
                <div className="relative z-10 max-w-lg">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
                    <Lock className="w-3 h-3" />
                    Закрытый контур
                  </span>
                  
                  <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }} className="text-slate-900 mb-4">
                    Корпоративный{' '}
                    <span className="bg-gradient-to-r from-slate-900 to-teal-600 bg-clip-text text-transparent">AI-ассистент</span>
                  </h1>
                  
                  <p className="text-lg text-slate-600 mb-6">
                    Отвечает по документам <strong className="text-slate-900">со ссылками на источники</strong>.
                  </p>
                  
                  <div className="flex gap-3">
                    <button className="px-5 py-2.5 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all">
                      Запросить демо
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </button>
                    <button className="px-5 py-2.5 bg-transparent text-slate-900 font-semibold rounded-lg border-2 border-slate-300 hover:bg-slate-50 transition-all">
                      Презентация
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Accordion Preview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Security Section (Dark)</h2>
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full blur-3xl" />
                </div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-900/50 text-teal-300 text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
                      <Shield className="w-3 h-3" />
                      Безопасность
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-4">Данные под вашим контролем</h2>
                    <p className="text-slate-400">
                      Архитектура, которая соответствует требованиям Enterprise.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { icon: Server, title: 'On-prem развёртывание', open: true },
                      { icon: Lock, title: 'RBAC / контроль доступа', open: false },
                      { icon: FileText, title: 'Аудит и логирование', open: false },
                    ].map((item, i) => (
                      <div 
                        key={i}
                        className={`rounded-xl border transition-all ${
                          item.open ? 'bg-white/10 border-teal-500/50' : 'bg-white/5 border-white/10'
                        }`}
                      >
                        <button 
                          className="w-full px-4 py-3 flex items-center gap-3 text-left"
                          onClick={() => setOpenAccordion(i)}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${item.open ? 'bg-teal-600' : 'bg-slate-800'}`}>
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="flex-1 font-semibold text-white">{item.title}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${item.open ? 'rotate-180' : ''}`} />
                        </button>
                        {item.open && (
                          <div className="px-4 pb-3 pl-16">
                            <p className="text-slate-400 text-sm">
                              Данные не покидают периметр. Развёртывание на серверах заказчика или в частном облаке РФ.
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Preview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">CTA Section</h2>
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-4">Покажем демо на ваших документах</h2>
                  <p className="text-slate-400 mb-6 max-w-md mx-auto">
                    30 минут, без обязательств. Загрузите 2-3 документа — увидите результат.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all">
                      Запросить демо
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </button>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      Бесплатно
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      Оценка за 1-2 дня
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
          CORPRAG Design System — Refined Corporate Trust
        </div>
      </footer>
    </div>
  );
}
