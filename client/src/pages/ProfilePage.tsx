
// Import icons for achievements and UI
import { Trophy, Flame, BookOpen, User, Sparkles, Star, CheckCircle, Calendar, Award } from 'lucide-react';
// Import growth context to access selected categories
import { useGrowth } from '../contexts/GrowthContext';

// List of demo achievements to display on the profile
const achievements = [
  { title: 'First Book Completed', icon: BookOpen, color: 'text-green-500', description: 'Completed your first recommended book.' },
  { title: '5-Day Growth Streak', icon: Flame, color: 'text-orange-500', description: 'Logged in and grew for 5 days in a row.' },
  { title: 'Focus Master', icon: Trophy, color: 'text-pink-500', description: 'Achieved 100% in a focus challenge.' },
  { title: 'Wisdom Seeker', icon: Star, color: 'text-indigo-500', description: 'Selected Wisdom as a growth area.' },
  { title: 'Consistency Champ', icon: Calendar, color: 'text-blue-500', description: 'Maintained a 7-day streak.' },
  { title: 'All-Rounder', icon: Award, color: 'text-yellow-500', description: 'Selected 5+ growth categories.' },
];


// ProfilePage displays the user's profile, stats, selected growth areas, and achievements
const ProfilePage = () => {
  // Get selected growth categories from context
  const { selectedCategories } = useGrowth();
  // Demo stats (replace with real data if available)
  const streak = 7; // Number of consecutive days active
  const totalCompleted = 14; // Number of completed recommendations
  const growthPoints = 320; // Total growth points earned
  const userName = 'Alex'; // Demo user name

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Profile Header: Avatar, name, and tagline */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center mb-4">
            <User className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{userName}</h2>
          <p className="text-gray-500 text-lg flex items-center">
            <Sparkles className="w-5 h-5 mr-1 text-purple-400" />
            Growth Explorer
          </p>
        </div>

        {/* Stats: Streak, completed, and growth points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Current streak card */}
          <div className="bg-purple-50 rounded-xl p-6 flex flex-col items-center">
            <Flame className="w-8 h-8 text-orange-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{streak} days</div>
            <div className="text-gray-600">Current Streak</div>
          </div>
          {/* Completed recommendations card */}
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center">
            <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{totalCompleted}</div>
            <div className="text-gray-600">Completed</div>
          </div>
          {/* Growth points card */}
          <div className="bg-yellow-50 rounded-xl p-6 flex flex-col items-center">
            <Star className="w-8 h-8 text-yellow-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{growthPoints}</div>
            <div className="text-gray-600">Growth Points</div>
          </div>
        </div>

        {/* Selected Growth Categories: User's chosen areas */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
            Your Growth Areas
          </h3>
          <div className="flex flex-wrap gap-3">
            {selectedCategories.length === 0 ? (
              <span className="text-gray-500">No categories selected yet.</span>
            ) : (
              selectedCategories.map((cat, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm">
                  {/* Capitalize first letter for display */}
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Achievements: List of earned badges */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((ach, idx) => (
              <div key={idx} className="flex items-center bg-gray-50 rounded-lg p-4 shadow-sm">
                {/* Achievement icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${ach.color} bg-opacity-10`}>
                  <ach.icon className={`w-7 h-7 ${ach.color}`} />
                </div>
                <div>
                  <div className="font-bold text-gray-800">{ach.title}</div>
                  <div className="text-gray-500 text-sm">{ach.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
