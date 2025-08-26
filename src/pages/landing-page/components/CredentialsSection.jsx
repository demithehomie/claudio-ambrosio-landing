import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const CredentialsSection = () => {
  const [activeCredential, setActiveCredential] = useState(0);

  const credentials = [
    {
      id: 1,
      year: "Carreira",
      institution: "Endocrinologia e Metabolismo",
      degree: "Pós-graduação • 30+ anos de experiência clínica",
      location: "Brasil e Exterior",
      description:
        "Atuação focada em endocrinologia, metabolismo e medicina preventiva, com prática clínica e protocolos personalizados.",
      icon: "GraduationCap",
      verified: true
    },
    {
      id: 2,
      year: "Aperfeiçoamento",
      institution: "Harvard (EUA)",
      degree: "Cursos/estágios",
      location: "Boston, Estados Unidos",
      description:
        "Formação complementar em temas de endocrinologia, metabolismo e saúde preventiva.",
      icon: "Award",
      verified: true
    },
    {
      id: 3,
      year: "Docência",
      institution: "Universidade da Califórnia (EUA)",
      degree: "Professor Convidado",
      location: "Estados Unidos",
      description:
        "Atuação acadêmica como professor convidado, compartilhando experiência clínica e científica.",
      icon: "Microscope",
      verified: true
    },
    {
      id: 4,
      year: "Internacional",
      institution: "Hospital Universitário de Berlim (Alemanha)",
      degree: "Cursos/estágios",
      location: "Berlim, Alemanha",
      description:
        "Aprimoramento internacional com foco em técnicas e protocolos contemporâneos.",
      icon: "Building2",
      verified: true
    },
    {
      id: 5,
      year: "Publicações",
      institution: "Livros do Dr. Cláudio",
      degree: "Autor",
      location: "Amazon Internacional",
      description:
        '“E se você viver mais de 100 anos?” e “What if you live 100+ years”.',
      icon: "BookOpen",
      verified: true
    }
  ];

  const certifications = [
    { name: "Sociedade Brasileira de Endocrinologia e Metabologia (SBEM)", code: "Membro", status: "Ativo" },
    { name: "Sociedade Brasileira de Alergia e Imunopatologia (SBAI)", code: "Membro", status: "Ativo" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Shield" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Credenciais Internacionais</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Formação de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Excelência Mundial
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de três décadas dedicadas ao estudo e prática da endocrinologia, 
            com formação nas mais prestigiadas instituições médicas do mundo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-8">
              {credentials?.map((credential, index) => (
                <div
                  key={credential?.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activeCredential === index ? 'transform scale-105' : ''
                  }`}
                  onClick={() => setActiveCredential(index)}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                    activeCredential === index 
                      ? 'bg-primary border-white shadow-lg scale-125' 
                      : 'bg-white border-gray-300'
                  }`}></div>
                  
                  {/* Content Card */}
                  <div className={`ml-16 p-6 rounded-xl border-2 transition-all duration-300 ${
                    activeCredential === index
                      ? 'bg-primary/5 border-primary shadow-lg'
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          activeCredential === index ? 'bg-primary text-white' : 'bg-white text-primary'
                        }`}>
                          <Icon name={credential?.icon} size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-accent">{credential?.year}</div>
                          <div className="text-xs text-gray-500">{credential?.location}</div>
                        </div>
                      </div>
                      
                      {credential?.verified && (
                        <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full">
                          <Icon name="CheckCircle" size={14} />
                          <span className="text-xs font-medium">Verificado</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {credential?.institution}
                    </h3>
                    
                    <p className="text-primary font-medium mb-3">
                      {credential?.degree}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {credential?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed View & Certifications */}
          <div className="space-y-8">
            {/* Active Credential Detail */}
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Icon name={credentials?.[activeCredential]?.icon} size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{credentials?.[activeCredential]?.institution}</h3>
                  <p className="text-white/80">{credentials?.[activeCredential]?.year}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">{credentials?.[activeCredential]?.degree}</h4>
                <p className="text-white/90 leading-relaxed">{credentials?.[activeCredential]?.description}</p>
              </div>
              
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">{credentials?.[activeCredential]?.location}</span>
              </div>
            </div>

            {/* Professional Certifications */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Certificate" size={24} className="text-accent" />
                <h3 className="text-xl font-semibold text-gray-900">Certificações Ativas</h3>
              </div>
              
              <div className="space-y-4">
                {certifications?.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{cert?.name}</h4>
                      <p className="text-sm text-gray-600">Código: {cert?.code}</p>
                    </div>
                    <div className="flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm font-medium">{cert?.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Icon name="Globe" size={32} className="text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4</div>
                <div className="text-sm text-gray-600">Países de Formação</div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Icon name="Award" size={32} className="text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Certificações</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;