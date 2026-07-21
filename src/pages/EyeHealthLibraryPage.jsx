import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { articlesData } from '../data/articlesData';
import { Search, BookOpen, Clock, User } from 'lucide-react';

export const EyeHealthLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articlesData.filter(
    (art) =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Eye Health Library & Patient Educational Guides"
        description="Medically responsible articles covering Cataracts, Glaucoma, Diabetic Retinopathy, LASIK suitability, and Children's vision signs."
        path="/eye-health-library"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={[{ label: 'Eye Health Library' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Patient Educational Resource
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Eye Health Library & Clinical Guides
            </h1>
            <p className="text-sm text-navy/70">
              Clear, medically reviewed educational guides explaining ocular conditions, preventive screening, and modern surgical techniques.
            </p>
          </div>

          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-cyan-iris absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search library topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-navy/15 rounded-full py-2.5 pl-10 pr-4 text-xs text-navy focus:outline-none focus:border-cyan-iris"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link key={article.id} to={`/eye-health-library/${article.id}`} className="group bg-white rounded-3xl p-6 border border-navy/10 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform" />
                  <span className="text-[11px] font-bold text-cyan-iris bg-cyan-iris/10 px-2.5 py-1 rounded-full">{article.category}</span>
                  <h3 className="font-heading font-bold text-base text-navy group-hover:text-cyan-iris transition-colors mt-2 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-navy/70 line-clamp-2 leading-relaxed">{article.summary}</p>
                </div>

                <div className="pt-4 border-t border-navy/10 flex items-center justify-between text-[11px] text-navy/60 mt-4">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-cyan-iris" /> {article.readTime}</span>
                  <span>{article.date}</span>
                </div>
              </Link>
            ))}
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default EyeHealthLibraryPage;
