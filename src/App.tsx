import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  Star, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Play,
  CheckCircle,
  GraduationCap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-800 mr-2" />
              <span className="text-xl font-bold text-gray-900">Work</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Início</a>
                <a href="#courses" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Cursos</a>
                <a href="#about" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sobre</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Depoimentos</a>
                <a href="#contact" className="bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-900 transition-colors">Contato</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-800">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">Início</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">Cursos</a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">Sobre</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">Depoimentos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme seu 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400"> futuro</span> com educação online
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Descubra cursos online de alta qualidade que vão acelerar sua carreira. 
                Aprenda no seu ritmo, com suporte personalizado e certificação reconhecida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105">
                  Comece Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demonstração
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Estudante online" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800">50k+</div>
              <div className="text-gray-600 mt-1">Alunos Certificados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800">200+</div>
              <div className="text-gray-600 mt-1">Cursos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800">95%</div>
              <div className="text-gray-600 mt-1">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800">24/7</div>
              <div className="text-gray-600 mt-1">Suporte Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Cursos Populares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nossa seleção de cursos desenvolvidos por especialistas da indústria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Desenvolvimento Web" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-600 font-medium">Tecnologia</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Desenvolvimento Web Full Stack</h3>
                <p className="text-gray-600 mb-4">Aprenda a criar aplicações completas do zero com as tecnologias mais modernas do mercado.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-800">R$ 299</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Marketing Digital" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Users className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm text-orange-600 font-medium">Marketing</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Digital Avançado</h3>
                <p className="text-gray-600 mb-4">Domine as estratégias de marketing digital para fazer seus negócios crescerem online.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-800">R$ 249</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Gestão de Projetos" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-green-600 font-medium">Gestão</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gestão de Projetos</h3>
                <p className="text-gray-600 mb-4">Torne-se um líder eficaz e aprenda a gerenciar projetos com metodologias ágeis.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-800">R$ 199</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Work?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma experiência de aprendizado única e personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexibilidade Total</h3>
              <p className="text-gray-600">Estude no seu ritmo, quando e onde quiser. Acesso 24/7 aos materiais.</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certificação Reconhecida</h3>
              <p className="text-gray-600">Certificados válidos em todo território nacional, reconhecidos pelo mercado.</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Suporte Especializado</h3>
              <p className="text-gray-600">Tutores qualificados para tirar suas dúvidas e acompanhar seu progresso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos alunos dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação e sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "O curso de desenvolvimento web mudou minha carreira completamente. Em 6 meses consegui minha primeira vaga como desenvolvedor!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Carlos Silva" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Carlos Silva</h4>
                  <p className="text-sm text-gray-500">Desenvolvedor Front-end</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "As aulas são muito didáticas e o suporte é excepcional. Recomendo para quem quer se especializar em marketing digital."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Ana Costa" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Ana Costa</h4>
                  <p className="text-sm text-gray-500">Especialista em Marketing</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "A flexibilidade dos cursos permitiu que eu estudasse enquanto trabalhava. Hoje sou gerente de projetos graças à Work!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Roberto Santos" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Roberto Santos</h4>
                  <p className="text-sm text-gray-500">Gerente de Projetos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-xl text-blue-100">
              Entre em contato conosco e descubra como podemos ajudar você
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-cyan-400 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-blue-100">work@work.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-cyan-400 mr-4" />
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-blue-100">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-cyan-400 mr-4" />
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-blue-100">Guarulhos, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Seu nome" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Seu email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Sua mensagem" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-cyan-400 mr-2" />
                <span className="text-xl font-bold">Work</span>
              </div>
              <p className="text-gray-400">
                Transformando vidas através da educação online de qualidade.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Cursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Desenvolvimento Web</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gestão de Projetos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design UX/UI</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nossa Equipe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Work. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;