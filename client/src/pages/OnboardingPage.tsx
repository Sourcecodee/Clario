
import { useNavigate } from 'react-router-dom';
import type { GrowthCategory } from '../types';
import { Sparkles, Brain, Target, Lightbulb, Zap, Heart, Rocket } from 'lucide-react';
import { useGrowth } from '../contexts/GrowthContext';


const OnboardingPage = () => {
  const { selectedCategories, setSelectedCategories } = useGrowth();
  const navigate = useNavigate();

  const growthCategories = [
    {
      id: 'productivity' as GrowthCategory,
      title: 'Productivity & Focus',
      description: 'Get more done and stay focused on what matters',
      icon: Target,
      iconColor: 'bg-blue-500',
      emoji: '🎯'
    },
    {
      id: 'creativity' as GrowthCategory,
      title: 'Creativity & Innovation',
      description: 'Unlock creative thinking and innovative solutions',
      icon: Lightbulb,
      iconColor: 'bg-orange-500',
      emoji: '💡'
    },
    {
      id: 'discipline' as GrowthCategory,
      title: 'Discipline & Habits',
      description: 'Build consistency and strong daily habits',
      icon: Target,
      iconColor: 'bg-green-500',
      emoji: '💪'
    },
    {
      id: 'resilience' as GrowthCategory,
      title: 'Resilience & Mental Strength',
      description: 'Develop emotional resilience and mental toughness',
      icon: Zap,
      iconColor: 'bg-purple-500',
      emoji: '🏋️'
    },
    {
      id: 'empathy' as GrowthCategory,
      title: 'Empathy & Relationships',
      description: 'Improve understanding and connection with others',
      icon: Heart,
      iconColor: 'bg-pink-500',
      emoji: '❤️'
    },
    {
      id: 'focus' as GrowthCategory,
      title: 'Wisdom & Perspective',
      description: 'Gain deeper insights and broader life perspective',
      icon: Brain,
      iconColor: 'bg-indigo-600',
      emoji: '🧠'
    }
  ];


  const toggleCategory = (category: GrowthCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="text-center py-12 px-6">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Clario</h1>
          <Sparkles className="w-5 h-5 text-purple-500" />
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
          <Rocket className="w-4 h-4 text-red-500" />
          <p className="text-lg">
            Let's personalize your growth journey! Select the areas where you want to level up and watch the magic happen.
          </p>
          <Sparkles className="w-4 h-4 text-yellow-500" />
        </div>
      </div>

      {/* Growth Categories Grid */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {growthCategories.map((category) => {
            const isSelected = selectedCategories.includes(category.id);
            return (
              <div
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`
                  relative p-6 rounded-lg cursor-pointer transition-all duration-200
                  ${isSelected 
                    ? 'bg-blue-50 border-2 border-blue-200 shadow-md' 
                    : 'bg-gray-50 border-2 border-gray-100 hover:bg-gray-100'
                  }
                `}
              >
                {/* Checkbox */}
                <div className="absolute top-4 left-4">
                  <div className={`
                    w-5 h-5 rounded border-2 flex items-center justify-center
                    ${isSelected 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'border-gray-300'
                    }
                  `}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Category Icon */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${category.iconColor} rounded-full flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-2xl">
                    {category.emoji}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="text-center pb-12">
        <button 
          className={`
            px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center mx-auto
            ${selectedCategories.length > 0
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
          onClick={() => navigate('/dashboard')}
          disabled={selectedCategories.length === 0}
        >
          <Rocket className="w-5 h-5 mr-2 text-white" />
          Start My Growth Journey
        </button>
      </div>
    </div>
  );
};

export default OnboardingPage;
