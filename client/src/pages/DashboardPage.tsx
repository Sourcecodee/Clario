import { useState, useEffect } from 'react';
import { useGrowth } from '../contexts/GrowthContext';
import { Sparkles, Brain, Zap, Target, Trophy, Users, User, Star, ArrowUpRight, BookOpen, Flame, Target as TargetIcon, Check } from 'lucide-react';

type Mood = 'energetic' | 'focused' | 'happy' | 'neutral' | 'low-energy' | 'reflective' | 'sad' | 'depressed';

// Define a type for the recommendation items to include completion status
interface RecommendationItem {
  title: string;
  author: string;
  type: string;
  score: number;
  thumbnail: string;
  growthImpact: string;
  color: string;
  isCompleted?: boolean; // Add a property to track completion
}

// Define a type for the mood recommendations with the updated item type
type MoodRecommendations = {
  [key in Mood]: RecommendationItem[];
};

interface GrowthArea {
  name: string;
  icon: React.ElementType;
  progress: number;
  color: string;
}

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); // State to manage active tab
  const [currentMood, setCurrentMood] = useState<Mood>('neutral');
  const [greeting, setGreeting] = useState('');

  // Use selected categories from context
  const { selectedCategories } = useGrowth();

  // Map GrowthCategory to display info
  const categoryMap: Record<string, { name: string; icon: React.ElementType; color: string }> = {
    productivity: { name: 'Productivity', icon: Zap, color: 'text-blue-600' },
    creativity: { name: 'Creativity', icon: Brain, color: 'text-purple-600' },
    discipline: { name: 'Discipline', icon: Target, color: 'text-green-600' },
    resilience: { name: 'Resilience', icon: Zap, color: 'text-purple-500' },
    focus: { name: 'Wisdom', icon: Brain, color: 'text-indigo-600' },
    empathy: { name: 'Empathy', icon: Brain, color: 'text-pink-600' },
    leadership: { name: 'Leadership', icon: Brain, color: 'text-yellow-600' },
    health: { name: 'Health', icon: Brain, color: 'text-red-600' },
  };

  const growthAreas = selectedCategories.length > 0
    ? selectedCategories.map(cat => ({
        name: categoryMap[cat]?.name || cat,
        icon: categoryMap[cat]?.icon || Brain,
        progress: Math.floor(Math.random() * 60) + 20, // Placeholder progress
        color: categoryMap[cat]?.color || 'text-gray-600',
      }))
    : [
        { name: 'Creativity', icon: Brain, progress: 60, color: 'text-purple-600' },
        { name: 'Productivity', icon: Zap, progress: 75, color: 'text-blue-600' },
        { name: 'Wisdom', icon: Brain, progress: 30, color: 'text-indigo-600' },
      ];

  const moods = [
    { id: 'energetic' as Mood, label: 'Energetic', emoji: '⚡', icon: Zap },
    { id: 'focused' as Mood, label: 'Focused', emoji: '☕', icon: Target },
    { id: 'happy' as Mood, label: 'Happy', emoji: '😊', icon: Sparkles },
    { id: 'neutral' as Mood, label: 'Neutral', emoji: '😐', icon: Brain },
    { id: 'low-energy' as Mood, label: 'Low Energy', emoji: '😴', icon: Brain },
    { id: 'sad' as Mood, label: 'Sad', emoji: '😢', icon: Brain },
    { id: 'depressed' as Mood, label: 'Depressed', emoji: '😞', icon: Brain },
    { id: 'reflective' as Mood, label: 'Reflective', emoji: '🌙', icon: Brain }
  ];

  const getRecommendations = (mood: Mood) => {
    const moodRecommendations: MoodRecommendations = {
      energetic: [
        {
          title: 'Atomic Habits',
          author: 'James Clear',
          type: 'book',
          score: 35,
          thumbnail: '⚡',
          growthImpact: 'Channel your energy into building powerful habits that compound over time.',
          color: 'blue'
        },
        {
          title: 'High-Intensity Workout',
          author: 'Fitness Pro',
          type: 'video',
          score: 25,
          thumbnail: '💪',
          growthImpact: 'Perfect for your energetic state - maximize your physical and mental energy.',
          color: 'green'
        },
        {
          title: 'Creative Writing Workshop',
          author: 'Writing Academy',
          type: 'course',
          score: 30,
          thumbnail: '✍️',
          growthImpact: 'Harness your energy for creative expression and storytelling.',
          color: 'purple'
        },
        {
          title: 'Productivity Mastery',
          author: 'Tim Ferriss',
          type: 'podcast',
          score: 20,
          thumbnail: '🎧',
          growthImpact: 'Optimize your high energy for maximum productivity and efficiency.',
          color: 'blue'
        }
      ],
      focused: [
        {
          title: 'Deep Work',
          author: 'Cal Newport',
          type: 'book',
          score: 40,
          thumbnail: '📚',
          growthImpact: 'Perfect for your focused state - learn to eliminate distractions and work deeply on meaningful tasks.',
          color: 'blue'
        },
        {
          title: 'Flow State Meditation',
          author: 'Mindfulness Pro',
          type: 'audio',
          score: 30,
          thumbnail: '🧘',
          growthImpact: 'Enhance your focus and enter deep flow states for optimal performance.',
          color: 'indigo'
        },
        {
          title: 'Advanced Problem Solving',
          author: 'Strategy Institute',
          type: 'course',
          score: 35,
          thumbnail: '🧩',
          growthImpact: 'Leverage your focused mindset to tackle complex challenges.',
          color: 'purple'
        },
        {
          title: 'Concentration Techniques',
          author: 'Cognitive Science Lab',
          type: 'article',
          score: 25,
          thumbnail: '🎯',
          growthImpact: 'Scientific methods to maintain and enhance your concentration.',
          color: 'blue'
        }
      ],
      happy: [
        {
          title: 'The Happiness Project',
          author: 'Gretchen Rubin',
          type: 'book',
          score: 30,
          thumbnail: '📖',
          growthImpact: 'Build on your happy mood by exploring scientifically-backed ways to cultivate lasting happiness.',
          color: 'blue'
        },
        {
          title: 'Creative Art Therapy',
          author: 'Art Studio',
          type: 'workshop',
          score: 25,
          thumbnail: '🎨',
          growthImpact: 'Express your joy through creative activities and artistic expression.',
          color: 'orange'
        },
        {
          title: 'Positive Psychology',
          author: 'Dr. Martin Seligman',
          type: 'course',
          score: 35,
          thumbnail: '🧠',
          growthImpact: 'Understand the science of happiness and positive emotions.',
          color: 'purple'
        },
        {
          title: 'Gratitude Journaling',
          author: 'Wellness Coach',
          type: 'practice',
          score: 20,
          thumbnail: '📝',
          growthImpact: 'Amplify your happiness through daily gratitude practices.',
          color: 'green'
        }
      ],
      neutral: [
        {
          title: 'Meditations',
          author: 'Marcus Aurelius',
          type: 'book',
          score: 30,
          thumbnail: '📜',
          growthImpact: 'Perfect for contemplation - timeless wisdom about life, virtue, and philosophical reflection.',
          color: 'blue'
        },
        {
          title: 'Mindfulness Photography',
          author: 'Various Artists',
          type: 'art',
          score: 25,
          thumbnail: '📸',
          growthImpact: 'Contemplative visual art that encourages mindful reflection and present-moment awareness.',
          color: 'orange'
        },
        {
          title: 'Balanced Living',
          author: 'Life Coach',
          type: 'article',
          score: 20,
          thumbnail: '⚖️',
          growthImpact: 'Strategies for maintaining balance and harmony in daily life.',
          color: 'blue'
        },
        {
          title: 'Gentle Yoga Flow',
          author: 'Yoga Studio',
          type: 'video',
          score: 25,
          thumbnail: '🧘‍♀️',
          growthImpact: 'Gentle movement and breathing to maintain your balanced state.',
          color: 'green'
        }
      ],
      'low-energy': [
        {
          title: 'The Art of Rest',
          author: 'Dr. Saundra Dalton-Smith',
          type: 'book',
          score: 30,
          thumbnail: '😴',
          growthImpact: 'Learn the different types of rest your body and mind truly need.',
          color: 'blue'
        },
        {
          title: 'Gentle Stretching',
          author: 'Wellness Coach',
          type: 'video',
          score: 20,
          thumbnail: '🤸',
          growthImpact: 'Low-impact movement to gently energize your body and mind.',
          color: 'green'
        },
        {
          title: 'Self-Care Practices',
          author: 'Mental Health Pro',
          type: 'guide',
          score: 25,
          thumbnail: '💆',
          growthImpact: 'Nurturing activities to restore your energy and well-being.',
          color: 'pink'
        },
        {
          title: 'Calming Nature Sounds',
          author: 'Nature Studio',
          type: 'audio',
          score: 20,
          thumbnail: '🌿',
          growthImpact: 'Soothing sounds to help you relax and recharge naturally.',
          color: 'green'
        }
      ],
      reflective: [
        {
          title: 'The Power of Now',
          author: 'Eckhart Tolle',
          type: 'book',
          score: 35,
          thumbnail: '📖',
          growthImpact: 'Deep spiritual insights for your contemplative state of mind.',
          color: 'blue'
        },
        {
          title: 'Philosophy of Mind',
          author: 'University Course',
          type: 'lecture',
          score: 30,
          thumbnail: '🎓',
          growthImpact: 'Explore deep philosophical questions about consciousness and existence.',
          color: 'purple'
        },
        {
          title: 'Journaling for Self-Discovery',
          author: 'Writing Therapist',
          type: 'workshop',
          score: 25,
          thumbnail: '📔',
          growthImpact: 'Use writing as a tool for deep self-reflection and insight.',
          color: 'orange'
        },
        {
          title: 'Mindful Walking',
          author: 'Meditation Guide',
          type: 'practice',
          score: 20,
          thumbnail: '🚶',
          growthImpact: 'Contemplative walking practice to deepen your reflective state.',
          color: 'green'
        }
      ],
      
      sad: [
        {
          title: 'The Little Prince',
          author: 'Antoine de Saint-Exupéry',
          type: 'book',
          score: 30, // Example score - adjust as you see fit
          thumbnail: '🦊', // Example emoji
          growthImpact: 'A gentle fable about loss, friendship, and finding meaning.',
          color: 'blue' // Example color - adjust as you see fit
        },
        {
          title: 'Whispers of the Soul',
          author: 'Various',
          type: 'playlist',
          score: 20, // Example score
          thumbnail: '🎧', // Example emoji
          growthImpact: 'Comforting and introspective music to acknowledge and process sadness.',
          color: 'indigo' // Example color
        },
        {
          title: 'A Quote on Resilience',
          author: 'Various',
          type: 'quote',
          score: 15, // Example score
          thumbnail: '💬', // Example emoji
          growthImpact: 'Find solace and strength in words of wisdom during difficult times.',
          color: 'purple' // Example color
        },
        {
          title: 'Simple Guided Meditation for Sadness',
          author: 'Meditation Teacher',
          type: 'audio',
          score: 25, // Example score
          thumbnail: '🧘‍♀️', // Example emoji
          growthImpact: 'A gentle practice to help you sit with and release feelings of sadness.',
          color: 'green' // Example color
        }
      ],
      depressed: [
        {
          title: 'Darkness Visible: A Memoir of Madness',
          author: 'William Styron',
          type: 'book',
          score: 35, // Example score
          thumbnail: '📚', // Example emoji
          growthImpact: 'A powerful and honest account of depression that can offer understanding and solidarity.',
          color: 'blue' // Example color
        },
        {
          title: 'The Song That Finds You',
          author: 'Various',
          type: 'playlist',
          score: 20, // Example score
          thumbnail: '🎵', // Example emoji
          growthImpact: 'Uplifting and hopeful music to offer a sense of connection and light.',
          color: 'green' // Example color
        },
        {
          title: 'A Quote on Hope',
          author: 'Various',
          type: 'quote',
          score: 15, // Example score
          thumbnail: '✨', // Example emoji
          growthImpact: 'Words to remind you of the possibility of brighter days.',
          color: 'orange' // Example color
        },
        {
          title: 'Gentle Movement for Mental Well-being',
          author: 'Wellness Instructor',
          type: 'video',
          score: 25, // Example score
          thumbnail: '🤸', // Example emoji
          growthImpact: 'Simple physical activity to help improve mood and energy levels.',
          color: 'pink' // Example color
        }
      ]

    };
    // Manually add recommendations for sad and depressed moods if not already present
    if (!moodRecommendations.sad) {
      moodRecommendations.sad = []; // Add your sad recommendations here
    }
    if (!moodRecommendations.depressed) {
      moodRecommendations.depressed = []; // Add your depressed recommendations here
    }
    return moodRecommendations[mood];


  };

  // State to track completed recommendations
  const [completedRecommendations, setCompletedRecommendations] = useState<Set<string>>(new Set());

  // Function to handle marking a recommendation as done
  const handleMarkDone = (itemTitle: string) => {
    setCompletedRecommendations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemTitle)) {
        newSet.delete(itemTitle);
      } else {
        newSet.add(itemTitle);
      }
      return newSet;
    });
  };

  // Function to check if a recommendation is completed
  const isCompleted = (itemTitle: string) => {
    return completedRecommendations.has(itemTitle);
  };

  const getMoodContent = (mood: Mood) => {
    const moodContent = {
      energetic: { description: 'Just going with the flow', curation: 'Balanced content, habit building, general growth topics' },
      focused: { description: 'Ready to tackle challenges', curation: 'Productivity content, deep work, skill development' },
      happy: { description: 'Feeling great today!', curation: 'Positive psychology, creativity, relationship building' },
      neutral: { description: 'Just going with the flow', curation: 'Balanced content, habit building, general growth topics' },
      'low-energy': { description: 'Taking it easy', curation: 'Gentle content, self-care, restorative activities' },
      reflective: { description: 'Deep in thought', curation: 'Philosophy, mindfulness, introspective content' },
      // Add the following lines:
      sad: { description: 'Feeling a bit down', curation: 'Comforting content, emotional processing, gentle activities' },
      depressed: { description: 'Struggling with low mood', curation: 'Supportive content, therapeutic resources, uplifting inspiration' },
    };
    return moodContent[mood];
  };

  const achievements = [
    { title: 'First Book Completed', icon: BookOpen, color: 'text-green-500' },
    { title: '5-Day Growth Streak', icon: Flame, color: 'text-orange-500' },
    { title: 'Focus Master', icon: TargetIcon, color: 'text-pink-500' }
  ];
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting('Good morning');
      } else if (hour < 18) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
    };

    updateGreeting();

  }, []); // Empty dependency array ensures this runs only once on mount

 return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
 <header className="bg-white shadow-sm border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-purple-600">Clario</h1>
                <p className="text-sm text-gray-600 flex items-center">
                  AI-Powered Growth Recommender
                  <Sparkles className="w-3 h-3 ml-1" />
                </p>
              </div>
            </div>
            
            {/* Navigation Tabs */}
            <nav className="flex items-center space-x-6">
 <button
                type="button"
                onClick={() => setActiveTab('dashboard')}
 className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors border ${activeTab === 'dashboard' ? 'bg-purple-100 text-purple-700 font-medium border-purple-400' : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-100 hover:border-gray-300'}`}
              >
                <Target className="w-4 h-4" />
                <span>Dashboard</span>
              </button>
 <button
                type="button"
                onClick={() => setActiveTab('community')}
 className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors border ${activeTab === 'community' ? 'bg-purple-100 text-purple-700 font-medium border-purple-400' : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-100 hover:border-gray-300'}`}
              >
                <Users className="w-4 h-4" />
                <span>Community</span>
              </button>
 <button
                type="button"
                onClick={() => setActiveTab('profile')}
 className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors border ${activeTab === 'profile' ? 'bg-purple-100 text-purple-700 font-medium border-purple-400' : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-100 hover:border-gray-300'}`}
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button>
            </nav>

            {/* Mobile Menu Button (Optional, can add later) */}
            <nav className="flex items-center space-x-6 lg:hidden">
              {/* Add a button here for a mobile menu if needed */}
              <button className="text-gray-600 hover:text-purple-600 focus:outline-none">
                {/* Icon for mobile menu (e.g., Menu icon from lucide-react) */}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Conditional Rendering based on activeTab */}
          {activeTab === 'dashboard' && (
            <>
              {/* Dashboard Main Content */}
              <div className="lg:col-span-3 space-y-8 flex flex-col items-center">
                {/* Welcome Section */}
                {/* Reconstructed Welcome Section for correct tag structure */}
                <div className="text-center">
 <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
 {greeting}! Your Growth Feed
                    <Sparkles className="w-6 h-6 ml-2 text-purple-500" />
                  </h2>

                  <p className="text-gray-600 mb-4">
                    Focusing on:
                    <span className="inline-flex items-center ml-2 space-x-2">
                      {growthAreas.map((area, index) => (
                        <span key={index} className={`flex items-center ${area.color}`}>
                          <area.icon className="w-4 h-4 mr-1" />
                          {area.name}
                      </span>
                      ))}
                    </span>
                  </p>
                </div>

                {/* Mood Selection Card */}
 <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      How are you feeling today?
                      <Sparkles className="w-5 h-5 ml-2 text-purple-500" />
                      <span className="ml-2">{moods.find(m => m.id === currentMood)?.emoji}</span>
                    </h3>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2">
                      <strong>Current Mood:</strong> {getMoodContent(currentMood).description}
                    </p>
                    <p className="text-sm text-gray-500">
                      Content curated for this mood: {getMoodContent(currentMood).curation}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                    {moods.map((mood) => (
                      <button
                        key={mood.id}
                        onClick={() => setCurrentMood(mood.id)}
                        className={`
                          p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center space-y-1
                          ${currentMood === mood.id
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
 : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
 }
                        `}
                      >
                        <span className="text-2xl">{mood.emoji}</span>
                        <span className="text-sm font-medium">{mood.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-blue-50 border border-blue-300 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Tip:</strong> Your mood helps us recommend content that matches your current energy and mindset. Try switching moods to see different recommendations!
                    </p>
                  </div>
                </div>

                {/* Recommendations Section */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    Recommended for You
                    <Sparkles className="w-5 h-5 ml-2 text-purple-500" />
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Curated for <span className="inline-flex items-center">{moods.find(m => m.id === currentMood)?.emoji} {moods.find(m => m.id === currentMood)?.label} mood</span>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getRecommendations(currentMood).map((item, index) => (
 <div key={index} className={`bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden ${isCompleted(item.title) ? 'opacity-75' : ''}`}>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="text-3xl">{item.thumbnail}</div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    item.color === 'blue' ? 'bg-blue-100 text-blue-800' : 
                                    item.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                                    item.color === 'green' ? 'bg-green-100 text-green-800' :
                                    item.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                                    item.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                                    item.color === 'pink' ? 'bg-pink-100 text-pink-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}>
                                    <Sparkles className="w-3 h-3 mr-1" />
                                    {item.score}
                                  </span>
                                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {item.type}
                                  </span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mt-1">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.author}</p>
                              </div>
                            </div>
                            <Star className="w-5 h-5 text-gray-400" />
                          </div>

 <div className={`p-3 rounded-lg mb-4 border-opacity-75 border ${
                            item.color === 'blue' ? 'bg-blue-50 border-blue-400' :
                            item.color === 'orange' ? 'bg-orange-50 border-orange-400' :
                            item.color === 'green' ? 'bg-green-50 border-green-400' :
                            item.color === 'purple' ? 'bg-purple-50 border-purple-400' :
                            item.color === 'indigo' ? 'bg-indigo-50 border-indigo-400' :
                            item.color === 'pink' ? 'bg-pink-50 border-pink-400' :
                            'bg-gray-50 border-gray-400'
 }`}>
                            <div className="flex items-start space-x-2">
                              <span className="text-yellow-500">💡</span>
                              <p className="text-sm text-gray-700">
                                <strong>Growth Impact:</strong> {item.growthImpact}
                              </p>
                            </div>
                          </div>

                          <div className="flex space-x-3">
                            <button className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors ${item.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600' : item.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600' : item.color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600' : item.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600' : item.color === 'indigo' ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600' : item.color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600' : 'bg-gradient-to-r from-gray-500 to-slate-500 text-white hover:from-gray-600 hover:to-slate-600'}`}>
                              <span className="flex items-center space-x-2"><span>Explore</span> <ArrowUpRight className="w-4 h-4" /></span>
                            </button>
                            <button
                              className={`flex-1 py-2 px-4 border rounded-lg font-medium transition-colors ${isCompleted(item.title)
                                ? 'border-green-500 text-green-700 bg-green-50'
                                : 'border-gray-400 text-gray-700 hover:bg-gray-50'
                              }`}
                              onClick={() => handleMarkDone(item.title)}
                            >
                              {isCompleted(item.title)
                                ? (<><Check className="w-5 h-5 inline-block mr-1" /> Done (Untick)</>)
                                : 'Mark Done'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> {/* End of Recommendations Section */}
              </div>

              {/* Dashboard Sidebar */}
              <div className="space-y-6">
                {/* This Week Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-6">
 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    This Week
                    <Trophy className="w-5 h-5 ml-2 text-purple-500" />
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">180/200 pts</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">5</div>
                      <div className="text-sm text-gray-600">Day Streak</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-sm text-gray-600">Completed</div>
                    </div>
                  </div>
                </div>

                {/* Growth Areas Card */}
 <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    Growth Areas
                    <Target className="w-5 h-5 ml-2 text-purple-500" />
                  </h3>
                  
                  <div className="space-y-4">
                    {growthAreas.map((area, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-900 flex items-center">
                            <area.icon className={`w-4 h-4 mr-2 ${area.color.replace('bg-', 'text-')}`} />
                            {area.name}
                          </span>
                          <span className="text-sm text-gray-600">{area.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${area.color} h-2 rounded-full transition-all duration-300`} 
                            style={{ width: `${area.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Achievements Card */}
 <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    Recent Achievements
                    <Trophy className="w-5 h-5 ml-2 text-purple-500" />
                  </h3>
                  
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {/* <achievement.icon className={`w-5 h-5 ${achievement.color}`} /> */}
                        <span className="text-sm text-gray-700">{achievement.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Community Content */}
          {activeTab === 'community' && (
 <div className="lg:col-span-4 bg-white rounded-xl shadow-sm border border-gray-300 p-6 flex items-center justify-center h-96">
              <p className="text-2xl font-semibold text-gray-700">Community Content Goes Here</p>
            </div>
          )}

          {/* Profile Content */}
          {activeTab === 'profile' && (
 <div className="lg:col-span-4 bg-white rounded-xl shadow-sm border border-gray-300 p-6 flex items-center justify-center h-96">
              <p className="text-2xl font-semibold text-gray-700">Profile Content Goes Here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
