import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, AlertCircle, ArrowRight, Eye, Info } from 'lucide-react';
import { conditionsData } from '../../data/conditionsData';

export const EyeConcernFinder = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = ['All', 'Adult', 'Senior', 'Child', 'Emergency', 'Routine'];

  const filteredConditions = conditionsData.filter((condition) => {
    const matchesFilter =
      selectedFilter === 'All' ||
      (selectedFilter === 'Senior' && condition.ageGroup.includes('Senior')) ||
      (selectedFilter === 'Child' && (condition.category === 'Paediatric' || condition.ageGroup.includes('Children'))) ||
      (selectedFilter === 'Emergency' && (condition.urgency.includes('Emergency') || condition.urgency.includes('Immediate'))) ||
      (selectedFilter === 'Adult' && condition.ageGroup.includes('Adult')) ||
      (selectedFilter === 'Routine' && condition.urgency.includes('Routine'));

    const matchesSearch =
      condition.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      condition.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      condition.symptoms.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-16 bg-navy text-white relative overflow-hidden">
      {/* Background Refraction Lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-iris/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-prism/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-cyan-iris/20 text-cyan-bright border border-cyan-iris/40 px-3 py-1 rounded-full text-xs font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Navigation Tool</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            What Vision Concern Can We Help You Explore?
          </h2>
          <p className="text-sm sm:text-base text-silver-soft">
            Filter by age group, urgency level, or search specific ocular symptoms to discover relevant ophthalmology services.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-navy-dark/90 p-4 md:p-6 rounded-3xl border border-cyan-iris/30 shadow-2xl mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-cyan-iris absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search symptom (e.g., floaters, glare)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-navy border border-cyan-iris/30 rounded-full py-2.5 pl-10 pr-4 text-xs text-white placeholder-silver-medium focus:outline-none focus:border-cyan-bright"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center md:justify-end">
              <Filter className="w-4 h-4 text-silver-medium hidden sm:inline" />
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-cyan-iris text-white shadow-md shadow-cyan-iris/30'
                      : 'bg-navy-light/60 text-silver-soft hover:bg-navy-light hover:text-white border border-cyan-iris/20'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Condition Grid Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition) => (
            <Link
              key={condition.id}
              to={`/conditions/${condition.id}`}
              className="group glass-capsule-dark rounded-3xl border border-cyan-iris/20 hover:border-cyan-iris/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={condition.image}
                  alt={condition.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>
                
                <span className="absolute top-3 left-3 bg-navy-dark/80 text-cyan-bright border border-cyan-iris/30 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md">
                  {condition.category}
                </span>

                <h3 className="absolute bottom-3 left-4 right-4 font-heading font-bold text-lg text-white group-hover:text-cyan-bright transition-colors">
                  {condition.title}
                </h3>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-silver-soft line-clamp-2 leading-relaxed">
                  {condition.shortDesc}
                </p>

                <div className="space-y-1 pt-2 border-t border-cyan-iris/15 text-[11px] text-silver-medium">
                  <div className="flex justify-between">
                    <span>Target Group:</span>
                    <strong className="text-silver-soft">{condition.ageGroup}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Priority Level:</span>
                    <strong className="text-cyan-iris">{condition.urgency}</strong>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-cyan-iris group-hover:text-white transition-colors">
                  <span>Explore Evaluation Guide</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Diagnostic Safety Notice Disclaimer */}
        <div className="mt-10 bg-navy-dark/60 border border-cyan-iris/20 rounded-2xl p-4 text-xs text-silver-medium text-center flex items-center justify-center space-x-2">
          <Info className="w-4 h-4 text-cyan-iris flex-shrink-0" />
          <span>
            <strong>Medical Notice:</strong> This tool provides general educational navigation and does not diagnose eye conditions. Clinical evaluation by a licensed ophthalmologist is required.
          </span>
        </div>
      </div>
    </section>
  );
};

export default EyeConcernFinder;
