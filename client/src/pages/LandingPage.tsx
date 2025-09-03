import { Sparkles, Brain, Target, TrendingUp, ArrowRight, Play } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Get personalized content recommendations based on your growth goals and current state.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented Growth',
      description: 'Track your progress across multiple growth areas and see measurable improvements.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Discover books, films, music, and more that align with your personal development journey.'
    }
  ];

  return (
  <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-100">
      {/* Navigation */}
      <nav className="px-6 py-4">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2 cursor-pointer" aria-label="Go to Home">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-purple-600">Clario</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:px-4 sm:py-2 sm:text-base">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
  <div className="px-4 py-12 sm:px-6 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Content for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Growth
              </span>
              <br />
              Not Addiction
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover AI-powered recommendations that enrich your life and accelerate your personal growth journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center max-w-xs mx-auto sm:px-8 sm:py-4 sm:text-lg">
                View Dashboard
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="/onboarding" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-base font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center max-w-xs mx-auto sm:px-8 sm:py-4 sm:text-lg">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
  <div className="px-4 py-12 sm:px-6 sm:py-20 bg-gradient-to-br from-white via-purple-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Clario?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI understands your unique growth journey and recommends content that truly matters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-white via-purple-100 to-blue-100 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
  <div className="px-4 py-12 sm:px-6 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 mb-8">
            Join thousands of users who are already experiencing meaningful growth with Clario.
          </p>
          <a href="/onboarding" className="bg-white text-blue-600 px-4 py-2 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors inline-block max-w-xs mx-auto sm:px-8 sm:py-4 sm:text-lg sm:w-auto">
            Get Started Free
          </a>
        </div>
      </div>

      {/* Footer */}
  <footer className="px-4 py-8 sm:px-6 sm:py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold text-white">Clario</span>
          </div>
          <p className="text-gray-400">
            © 2024 Clario. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
