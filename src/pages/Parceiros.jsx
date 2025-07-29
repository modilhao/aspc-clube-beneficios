import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, User, Building2, Tag, ArrowLeft } from 'lucide-react';
import { partnersData, categories, regions, filterPartners, getPartnerStats } from '../data/partnersData';
import { Button } from '../components/ui/button';

const Parceiros = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedRegion, setSelectedRegion] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filtrar parceiros baseado nos critérios selecionados
  const filteredPartners = useMemo(() => {
    return filterPartners(partnersData, selectedCategory, selectedRegion, searchTerm);
  }, [selectedCategory, selectedRegion, searchTerm]);

  // Estatísticas dos parceiros
  const stats = useMemo(() => getPartnerStats(partnersData), []);

  // Função para limpar filtros
  const clearFilters = () => {
    setSelectedCategory('Todos');
    setSelectedRegion('Todas');
    setSearchTerm('');
  };

  // Componente do card do parceiro
  const PartnerCard = ({ partner }) => (
    <div className="bg-white rounded-lg border border-aspc-primary/20 p-6 hover:shadow-lg transition-all duration-300 hover:border-aspc-primary/40">
      <div className="flex flex-col h-full">
        {/* Header do card */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-aspc-dark mb-2 font-raleway">
              {partner.empresa}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4 text-aspc-primary" />
              <span className="text-sm font-medium text-aspc-primary bg-aspc-primary/10 px-2 py-1 rounded-full">
                {partner.categoria}
              </span>
            </div>
          </div>
        </div>

        {/* Serviços */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-aspc-dark mb-2 font-raleway">Serviços/Produtos:</h4>
          <p className="text-aspc-dark/70 text-sm leading-relaxed">{partner.servicos}</p>
        </div>

        {/* Vantagem - Destaque */}
        <div className="mb-4 p-4 bg-gradient-to-r from-aspc-primary/5 to-aspc-secondary/5 rounded-lg border border-aspc-primary/10">
          <h4 className="text-sm font-semibold text-aspc-primary mb-2 font-raleway">🎯 Vantagem Exclusiva:</h4>
          <p className="text-aspc-dark text-sm leading-relaxed font-medium">{partner.vantagem}</p>
        </div>

        {/* Informações de contato */}
        <div className="mt-auto space-y-2">
          {partner.telefone && (
            <div className="flex items-center gap-2 text-sm text-aspc-dark/70">
              <Phone className="w-4 h-4 text-aspc-primary" />
              <span>{partner.telefone}</span>
            </div>
          )}
          {partner.responsavel && (
            <div className="flex items-center gap-2 text-sm text-aspc-dark/70">
              <User className="w-4 h-4 text-aspc-primary" />
              <span>{partner.responsavel}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-aspc-dark/70">
            <MapPin className="w-4 h-4 text-aspc-primary" />
            <span>{partner.endereco} - {partner.regiao}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-aspc-light to-white">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-aspc-primary to-aspc-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              onClick={onBack}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-raleway">Nossos Parceiros</h1>
          <p className="text-xl text-white/90 max-w-2xl font-raleway">
            Descubra todos os benefícios exclusivos disponíveis para associados ASPC
          </p>
          
          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2">{stats.total}</div>
              <div className="text-white/80">Parceiros Ativos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2">{Object.keys(stats.categories).length}</div>
              <div className="text-white/80">Categorias</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2">{Object.keys(stats.regions).length}</div>
              <div className="text-white/80">Regiões Atendidas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros e busca */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          {/* Barra de busca */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-aspc-primary w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por empresa, serviço ou categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-aspc-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aspc-primary focus:border-transparent font-raleway"
            />
          </div>

          {/* Toggle filtros em mobile */}
          <div className="md:hidden mb-4">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-white"
            >
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </Button>
          </div>

          {/* Filtros */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
            {/* Filtro por categoria */}
            <div>
              <label className="block text-sm font-semibold text-aspc-dark mb-2 font-raleway">Categoria:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-aspc-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aspc-primary focus:border-transparent font-raleway"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Filtro por região */}
            <div>
              <label className="block text-sm font-semibold text-aspc-dark mb-2 font-raleway">Região:</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-3 border border-aspc-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aspc-primary focus:border-transparent font-raleway"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            {/* Botão limpar filtros */}
            <div className="flex items-end">
              <Button
                onClick={clearFilters}
                variant="outline"
                className="w-full border-aspc-primary text-aspc-primary hover:bg-aspc-primary hover:text-white"
              >
                Limpar Filtros
              </Button>
            </div>
          </div>

          {/* Resultados da busca */}
          <div className="mt-4 text-sm text-aspc-dark/70 font-raleway">
            Mostrando {filteredPartners.length} de {stats.total} parceiros
          </div>
        </div>

        {/* Grid de parceiros */}
        {filteredPartners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map(partner => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-aspc-primary/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-aspc-dark mb-2 font-raleway">Nenhum parceiro encontrado</h3>
            <p className="text-aspc-dark/70 mb-4 font-raleway">Tente ajustar os filtros ou termo de busca</p>
            <Button
              onClick={clearFilters}
              variant="gradient"
              className="font-raleway"
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>

      {/* Call to action */}
      <div className="bg-gradient-to-r from-aspc-primary/10 to-aspc-secondary/10 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-aspc-dark mb-4 font-raleway">Quer Aproveitar Esses Benefícios?</h2>
          <p className="text-aspc-dark/70 mb-6 max-w-2xl mx-auto font-raleway">
            Torne-se um associado ASPC e tenha acesso a todos esses descontos exclusivos e muito mais!
          </p>
          <Button variant="gradient" className="font-raleway font-semibold">
            Quero me Associar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Parceiros;