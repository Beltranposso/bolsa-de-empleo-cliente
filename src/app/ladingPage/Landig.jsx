import React, { useState, useEffect } from 'react';
import { Briefcase, Users, TrendingUp, LogIn, UserPlus, Moon, Sun, ChevronRight } from 'lucide-react';

function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const jobCategories = [
    { title: "Technology", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
    { title: "Healthcare", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80" },
    { title: "Finance", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
    { title: "Education", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % jobCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <header className="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 shadow-md sticky top-0 z-10 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">JobConnect</h1>
          <div className="flex items-center">
            
            <div className="flex space-x-4 items-center">
              <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300">
                <LogIn size={20} className="mr-1" />
                <span className="hidden sm:inline">Login</span>
              </button>
              <button className="flex items-center bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
                <UserPlus size={20} className="mr-1" />
                <span className="hidden sm:inline">Register</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">Encuentra tu trabajo aqui</h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">Deja que las empresas encuentren tu potencial</p>
          <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 animate-slide-up">
            Explore Opportunities
          </button>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Explora categorias de trabajo</h3>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeCategory ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h4 className="text-4xl font-bold text-white">{category.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Briefcase, title: "Diversas Oportunidades", description: "Explora Trabajos de alta demanda" },
            { icon: Users, title: "Crece Laboralmente", description: "Conéctate con profesionales y expande tu carrera" },
            { icon: TrendingUp, title: "Career Advancement", description: "Find resources to boost your professional growth" }
          ].map((item, index) => (
            <div key={index} className="bg-white bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-80 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Mira nuestros caso de exitos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Sarah Johnson", role: "Software Engineer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
              { name: "Michael Chen", role: "Marketing Specialist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" }
            ].map((story, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg flex">
                <img src={story.image} alt={story.name} className="w-1/3 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">{story.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{story.role}</p>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                    Read their story <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Comienza Crear tu perfil profesional</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8"></p>
          <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
            Crea tu perfil 
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 JobConnect. All rights reserved.</p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-300 transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300 transition duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-300 transition duration-300">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;