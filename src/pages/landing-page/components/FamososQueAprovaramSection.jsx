import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage"; // se não quiser imagem, podemos remover este import
import Button from "../../../components/ui/Button";

const FamososQueAprovaramSection = () => {
  const itensDeMidia = [
    {
      id: 1,
      titulo:
        "Revista Veja São Paulo: o ator Paulinho Vilhena faz tratamento com o Dr. Cláudio Ambrósio",
      origem: "Veja São Paulo (link para o site do Dr.)",
      descricao:
        "Matéria com referência ao cuidado médico do Dr. Cláudio Ambrósio, publicada na imprensa e disponibilizada no site oficial.",
      href: "https://drclaudioambrosio.com.br/reportagem-revista-veja-sao-paulo-o-ator-paulinho-vilhena-faz-tratamento-com-o-dr-claudio-ambrosio/",
      // imagem opcional: pode usar uma capa genérica ou thumbnail própria
      imagem:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=500&fit=crop",
      rotuloAcessibilidadeImagem:
        "Capa ilustrativa para matéria da Veja São Paulo com Paulinho Vilhena",
    },
    {
      id: 2,
      titulo:
        "Luciano Szafir e esposa fazem tratamento médico para reality show",
      origem: "Publicação no site oficial",
      descricao:
        "Conteúdo informativo sobre rotina de cuidado médico com foco em saúde e manutenção de peso.",
      href: "https://drclaudioambrosio.com.br/luciano-szafir-e-mulher-fazem-tratamento-medico-para-reality-show-eles-tentam-manter-o-peso-para-participar-de-programa/",
      imagem:
        "https://images.unsplash.com/photo-1545315176-7a424c1d5d3f?w=800&h=500&fit=crop",
      rotuloAcessibilidadeImagem:
        "Capa ilustrativa para matéria sobre Luciano Szafir",
    },
    {
      id: 3,
      titulo:
        "Revista Extra: entrevista do Dr. Cláudio Ambrósio com participação de Datena",
      origem: "Extra (link para o site do Dr.)",
      descricao:
        "Entrevista publicada na imprensa e referenciada no site oficial do Dr. Cláudio Ambrósio.",
      href: "https://drclaudioambrosio.com.br/extra-entrevista-do-dr-claudio-ambrosio-com-a-participacao-de-datena-para-a-revista-extra/",
      imagem:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=500&fit=crop",
      rotuloAcessibilidadeImagem:
        "Capa ilustrativa para entrevista na Revista Extra",
    },
  ];

  const linkInstagram = "https://www.instagram.com/drclaudioambrosio/";

  return (
    <section id="famosos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Megaphone" size={16} className="text-accent mr-2" />
            <span className="text-sm font-medium text-accent">
              Presença na mídia
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Famosos que aprovaram
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Matérias e entrevistas com o Dr. Cláudio Ambrósio e participações
            públicas de personalidades. Conteúdo informativo e jornalístico,
            sem promessa de resultados.
          </p>
        </div>

        {/* Cards com links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {itensDeMidia.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              aria-label={`${item.titulo} — abrir em nova aba`}
            >
              {/* Imagem ilustrativa (opcional) */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={item.imagem}
                  alt={item.rotuloAcessibilidadeImagem}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Newspaper" size={18} className="text-primary" />
                  <span className="text-xs font-medium text-gray-500">
                    {item.origem}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {item.titulo}
                </h3>

                <p className="text-sm text-gray-600">{item.descricao}</p>

                <div className="mt-4 inline-flex items-center text-primary text-sm font-medium">
                  Acessar matéria
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </div>
              </div>
            </a>
          ))}

          {/* Card do Instagram */}
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Instagram" size={18} />
                <span className="text-xs font-medium">Redes sociais</span>
              </div>

              <h3 className="text-xl font-bold mb-2">Instagram oficial</h3>

              <p className="text-white/90 text-sm mb-6">
                Acompanhe conteúdos, bastidores e orientações gerais sobre
                saúde e qualidade de vida.
              </p>

              <div className="mt-auto">
                <a
                  href={linkInstagram}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Abrir Instagram do Dr. Cláudio Ambrósio em nova aba"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    iconName="Instagram"
                    iconPosition="left"
                    className="bg-white text-primary hover:bg-gray-100 w-full"
                  >
                    Visitar Instagram
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Aviso ético */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Observação: conteúdos de mídia e redes sociais têm caráter
            informativo. O cuidado é sempre individualizado e não existem
            garantias de resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamososQueAprovaramSection;
