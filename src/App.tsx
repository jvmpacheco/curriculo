import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const sections: Section[] = [
    {
      id: 'experience',
      title: 'Experiência',
      content: (
        <div className="space-y-6">
          <div className="experience-item">
            <h4 className="font-semibold">Analista de TI Jr</h4>
            <p className="text-gray-600">Externa Network | Rio de Janeiro, RJ</p>
            <p className="text-gray-500">06/2023 - 06/2025</p>
            <p className="mt-2">Atendimento remoto (telefone, WhatsApp, abertura de chamados) e presencial aos usuários de outras empresas (clientes da empresa na qual trabalho) para assuntos de maior complexidade, que exigem análise e desenvolvimento de respostas específicas. Análise dos possíveis erros apresentados durante os atendimentos, busca e orientação para a solução solicitada e, de acordo com o problema, agendamento de visita técnica para resolver trabalhos que não possam ser resolvidos remotamente (acesso via AnyDesk e Área de Trabalho Remota do Windows). Auxílio, orientação e treinamento de clientes, bem como criação de documentação e tutoriais, quando necessário. Atualmente, encarregado de gerir a TI do Cemitério da Penitência, ficando responsável por prestar manutenção e suporte a computadores, notebooks, impressoras, TV Box, internet (cabeada e Wi-Fi), VOIP, DVRs e acesso às câmeras, Terminal Service, Active Directory, Windows Server e servidor de impressão.</p>
          </div>

          <div className="experience-item">
            <h4 className="font-semibold">Técnico de Suporte Nível 3</h4>
            <p className="text-gray-600">Connectcom Teleinformática Comércio e Serviços LTDA | Rio de Janeiro, RJ</p>
            <p className="text-gray-500">02/2022 - 02/2023</p>
            <p className="mt-2">Prestei serviço para o Ministério da Saúde, no Hospital Federal dos Servidores do Estado, trabalhando com suporte e manutenção de hardware e software em geral, incluindo suporte, montagem e manutenção de microcomputadores, suporte a notebooks, celulares e impressoras, Windows, Office e programas diversos pertinentes ao serviço executado nos setores do hospital, além de configurações de rede Wi-Fi, proxy e domínio, bem como suporte remoto, via ramal, quando necessário.</p>
          </div>

          <div className="experience-item">
            <h4 className="font-semibold">Almoxarife</h4>
            <p className="text-gray-600">G&E Serviços Terceirizados LTDA | Rio de Janeiro, RJ</p>
            <p className="text-gray-500">07/2021 - 02/2022</p>
            <p className="mt-2">Trabalhei prestando serviço de almoxarife no Hospital Federal dos Servidores do Estado, nos setores de Nefrologia, Patrimônio e Informática, tendo também exercido algumas funções referentes à TI no setor de Informática. Por fim, prestei serviço no Instituto Nacional de Traumatologia e Ortopedia, tendo integrado a equipe da Farmácia e, posteriormente, da ADIMP (Área de Dispositivos Implantáveis).</p>
          </div>

          <div className="experience-item">
            <h4 className="font-semibold">Supervisor de Contas a Pagar</h4>
            <p className="text-gray-600">Fibralink | Rio de Janeiro, Magé - RJ</p>
            <p className="text-gray-500">10/2018 - 01/2021</p>
            <p className="mt-2">Provedor de internet banda larga de tecnologia fibra óptica. Iniciei meus trabalhos na empresa como suporte técnico (telemarketing), trabalhando depois com retenção de cancelamento, back office financeiro, qualidade e, por fim, tornando-me supervisor do financeiro (call center e administrativo).</p>
          </div>

          <div className="experience-item">
            <h4 className="font-semibold">Operador de SAC (retenção)</h4>
            <p className="text-gray-600">Atento | Rio de Janeiro</p>
            <p className="text-gray-500">11/2014 - 10/2018</p>
            <p className="mt-2">Atendimento às solicitações e reclamações dos clientes da empresa. Convencer os clientes que desejam cancelar o produto a permanecerem com ele, explicando-lhes melhor sobre os benefícios e vantagens do serviço, que, porventura, não conheçam.</p>
          </div>

          <div className="experience-item">
            <h4 className="font-semibold">Dirigente do Serviço Público Municipal</h4>
            <p className="text-gray-600">Município de Duque de Caxias | Rio de Janeiro, Duque de Caxias - RJ</p>
            <p className="text-gray-500">03/2014 - 06/2014</p>
            <p className="mt-2">Prestei serviços de TI na Secretaria de Educação de Duque de Caxias, formatando computadores, trocando periféricos e prestando suporte geral (apenas Windows e Office).</p>
          </div>

          <div className="experience-item">
            <h4 className="font-semibold">Freelancer em Design Gráfico Direcionado ao Marketing Digital</h4>
            <p className="text-gray-600">Freelancer | Rio de Janeiro</p>
            <p className="text-gray-500">10/2012 - 12/2013</p>
            <p className="mt-2">Criação de banners (estáticos e animados) e outros tipos de artes gráficas direcionadas ao marketing digital, utilizando os softwares Photoshop e CorelDRAW.</p>
          </div>

          <div className="experience-item">
            <h4 className="font-semibold">Operador de Teleatendimento</h4>
            <p className="text-gray-600">Contax | Rio de Janeiro</p>
            <p className="text-gray-500">01/2011 - 07/2012</p>
            <p className="mt-2">Suporte a problemas em linhas telefônicas por meio do atendimento ao cliente.</p>
          </div>
        </div>
      )
    },
    {
      id: 'education',
      title: 'Formação Acadêmica',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">JavaScript e HTML: desenvolva um jogo e pratique lógica de programação</h4>
            <p className="text-gray-600">Alura Cursos Online | Rio de Janeiro</p>
            <p className="text-gray-500">03/2023 - 04/2023</p>
          </div>
          <div>
            <h4 className="font-semibold">Análise e desenvolvimento de sistemas</h4>
            <p className="text-gray-600">Faculdade UniBF | Santa Catarina</p>
            <p className="text-gray-500">12/2022 - Cursando</p>
          </div>
          <div>
            <h4 className="font-semibold">Ensino Médio (2º Grau)</h4>
            <p className="text-gray-600">Profª Alda Bernardo dos Santos Tavares | Rio de Janeiro</p>
            <p className="text-gray-500">02/2005 - 10/2007</p>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Habilidades',
      content: (
        <div className="flex flex-wrap gap-2">
          {[
            'HTML', 'CSS', 'JavaScript',
            'TypeScript', 'React', 'Vite', 'Tailwind', 'ESLint', 'Python', 'Expo', 
            'Android Studio', 'Kotlin', 'React Native', 'Flask', 'Django', 'Oracle', 'PostgreSQL', 'SQL Server',
            'Adobe Photoshop', 'Adobe Illustrator', 'CorelDraw', 'Canva', 'Figma', 
            'UI & UX Design', 'Ferramentas de IA', 'Marketing Digital', 'Copywriting', 
            'Microsoft Access','Microsoft Excel', 'Microsoft Outlook', 
            'Microsoft Office 365','Open Office', 'LibreOffice', 'Windows',
            'Edição de Som', 'Edição de Vídeo', 'Servidores E-mail',
            'Servidores Proxy', 'Servidores Web'
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      )
    },
    {
      id: 'languages',
      title: 'Idiomas',
      content: (
        <div className="flex gap-3">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Português - Nativo</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Inglês - Intermediário</span>
        </div>
      )
    },
    {
      id: 'objectives',
      title: 'Objetivos',
      content: (
        <div className="space-y-4">
          <div>
            <p className="mb-2"><strong>Atendimento ao Cliente e Suporte Técnico</strong></p>
            <p className="mb-2">- Oferecer um atendimento receptivo ágil, empático e eficaz por meio de chat, e-mail, WhatsApp e outras ferramentas de suporte.</p>
            <p className="mb-2">- Atuar na resolução de demandas técnicas e funcionais, garantindo a satisfação do cliente e a fidelização através de um relacionamento humano e personalizado.</p>
            <p className="mb-2">- Utilizar boas práticas de comunicação escrita e automações inteligentes para otimizar o tempo de resposta e a qualidade do suporte.</p>
            <p className="mb-4"></p>
            <p className="mb-2"><strong>Desenvolvimento Web</strong></p>
            <p className="mb-2">- Desenvolver aplicações web escaláveis e responsivas.</p>
            <p className="mb-2">- Criar soluções personalizadas e completas, com frontend e backend.</p>
            <p className="mb-2">- Implementar features de IA e automação, através de bots personalizados, em aplicações web.</p>
            <p className="mb-4"></p>
            <p className="mb-2"><strong>Design e UI/UX</strong></p>
            <p className="mb-2">- Projetar interfaces de usuário intuitivas e atraentes para aplicações web e móveis.</p>
            <p className="mb-2">- Desenvolver identidades visuais consistentes para marcas e empresas.</p>
            <p className="mb-4"></p>
            <p className="mb-2"><strong>Marketing Digital e IA</strong></p>
            <p className="mb-2">- Criar campanhas de marketing digital eficazes com copywriting persuasivo e análise de dados.</p>
            <p className="mb-2">- Implementar soluções de IA e automação em marketing digital para melhorar a eficiência e o ROI.</p>
            <p>• Senioridade: Júnior</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-64 rounded-[30%] overflow-hidden border-4 border-white shadow-lg">
              <img
                src="https://i.ibb.co/7xtkp3H6/Editada-Imgur.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">João Victor de Macêdo Pacheco</h1>
              <p className="text-xl text-blue-100 mb-2">35 anos</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Rua Ernesto de Souza, 133, Andaraí, 20510-360, Rio de Janeiro - RJ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>viktor.mpnsm@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <a href="https://t.me/joaovictordev89" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition-colors duration-200 underline font-semibold">Telegram</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <a href="https://wa.me/5592994431074" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition-colors duration-200 underline font-semibold">Whatsapp</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>21-996215214</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Resumo</h2>
          <p className="text-gray-700 leading-relaxed">
            Profissional dedicado, desenvolvedor full stack em formação, buscando oportunidades para aplicar meus conhecimentos e habilidades em projetos desafiadores, com foco em desenvolver soluções eficazes e de qualidade.
          </p>
        </section>

        {/* Interactive Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="border rounded-lg overflow-hidden shadow-sm">
              <button
                className={`w-full px-6 py-4 text-left font-semibold text-lg transition-colors duration-200 ${
                  activeSection === section.id ? 'bg-blue-50 text-blue-800' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => toggleSection(section.id)}
              >
                {section.title}
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeSection === section.id ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 bg-white">{section.content}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;