import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { articlesData } from '../data/articlesData';
import { Calendar, User, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

export const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === id) || articlesData[0];

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.summary}
        path={`/eye-health-library/${article.id}`}
        schemaType="Article"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs
            items={[
              { label: 'Eye Health Library', link: '/eye-health-library' },
              { label: article.title }
            ]}
          />

          <div className="bg-white rounded-3xl p-8 border border-navy/10 shadow-lg space-y-6">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-wider bg-cyan-iris/10 px-3 py-1 rounded-full">
              {article.category}
            </span>

            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-navy/60 border-y border-navy/10 py-3">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-cyan-iris" /> {article.author}</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-violet-prism" /> {article.reviewer}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-gold-lens" /> Published: {article.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-iris" /> {article.readTime}</span>
            </div>

            <img src={article.image} alt={article.title} className="w-full h-80 object-cover rounded-2xl shadow-md" />

            <div className="space-y-4 text-sm text-navy/80 leading-relaxed font-normal">
              {article.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-navy/10 flex items-center justify-between">
              <Link to="/book-appointment" className="inline-flex items-center space-x-2 bg-gradient-to-r from-navy to-cyan-iris text-white text-xs font-bold px-6 py-3 rounded-full">
                <span>Book Consultation for this Condition</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default ArticleDetailPage;
