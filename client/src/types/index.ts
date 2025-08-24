// User Types
export interface User {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  growthGoals: GrowthGoal[];
  preferences: UserPreferences;
  currentMood: Mood;
  energyLevel: number;
  growthPoints: number;
  streakDays: number;
  lastActivityDate: string;
  valueProgress: ValueProgress;
  onboardingCompleted: boolean;
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  growthLevel: string;
}

export interface GrowthGoal {
  category: GrowthCategory;
  priority: number;
  description?: string;
}

export interface UserPreferences {
  contentTypes: ContentType[];
  genres: string[];
  languages: string[];
  contentLength: 'short' | 'medium' | 'long';
}

export interface ValueProgress {
  productivity: number;
  creativity: number;
  discipline: number;
  resilience: number;
  focus: number;
  empathy: number;
}

// Content Types
export interface Recommendation {
  _id: string;
  contentId: string;
  contentType: ContentType;
  title: string;
  author?: string;
  description: string;
  coverImage?: string;
  externalUrl?: string;
  growthValues: GrowthValue[];
  metadata: ContentMetadata;
  aiAnalysis: AIAnalysis;
  community: CommunityData;
  recommendationContext: RecommendationContext;
  source: SourceInfo;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  overallGrowthScore: number;
  primaryGrowthValue?: GrowthValue;
}

export interface GrowthValue {
  value: GrowthCategory;
  score: number;
  explanation: string;
  specificBenefits: string[];
}

export interface ContentMetadata {
  genre: string[];
  tags: string[];
  language: string;
  duration?: number;
  year?: number;
  rating: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  mood: ContentMood;
}

export interface AIAnalysis {
  sentiment: 'positive' | 'neutral' | 'negative';
  themes: string[];
  keyInsights: string[];
  targetAudience: string[];
  bestTimeToConsume: 'morning' | 'afternoon' | 'evening' | 'anytime';
}

export interface CommunityData {
  totalRatings: number;
  averageRating: number;
  userReviews: UserReview[];
  lifeChangingMoments: LifeChangingMoment[];
}

export interface UserReview {
  userId: string;
  rating: number;
  review: string;
  growthImpact: 'transformative' | 'significant' | 'moderate' | 'minimal';
  createdAt: string;
}

export interface LifeChangingMoment {
  userId: string;
  story: string;
  impact: string;
  createdAt: string;
}

export interface RecommendationContext {
  targetMoods: string[];
  targetGoals: string[];
  energyLevel: {
    min: number;
    max: number;
  };
  timeCommitment: 'quick' | 'moderate' | 'extended';
}

export interface SourceInfo {
  platform: 'google_books' | 'spotify' | 'youtube' | 'tmdb' | 'unsplash' | 'manual';
  sourceId?: string;
  lastUpdated: string;
}

// Progress Types
export interface UserProgress {
  _id: string;
  userId: string;
  recommendationId: string;
  status: ProgressStatus;
  progress: ProgressData;
  userFeedback?: UserFeedback;
  growthImpact?: GrowthImpactAssessment;
  engagement: EngagementMetrics;
  recommendationContext: ProgressRecommendationContext;
  createdAt: string;
  updatedAt: string;
  engagementScore: number;
}

export interface ProgressData {
  percentage: number;
  timeSpent: number;
  lastAccessed: string;
  completionDate?: string;
}

export interface UserFeedback {
  rating: number;
  review: string;
  growthImpact: 'transformative' | 'significant' | 'moderate' | 'minimal' | 'none';
  difficulty: 'too_easy' | 'just_right' | 'challenging' | 'too_hard';
  wouldRecommend?: boolean;
  notes?: string;
}

export interface GrowthImpactAssessment {
  valuesImproved: ValueImprovement[];
  insights: string[];
  actionableTakeaways: string[];
  moodBefore: string;
  moodAfter: string;
}

export interface ValueImprovement {
  value: GrowthCategory;
  beforeScore: number;
  afterScore: number;
  improvement: number;
}

export interface EngagementMetrics {
  viewCount: number;
  sessionCount: number;
  averageSessionDuration: number;
  bookmarks: number;
  shares: number;
}

export interface ProgressRecommendationContext {
  reason?: string;
  moodWhenRecommended?: string;
  energyLevelWhenRecommended?: number;
  goalsWhenRecommended?: string[];
  aiConfidence: number;
}

// Enums
export type GrowthCategory = 
  | 'productivity' 
  | 'creativity' 
  | 'discipline' 
  | 'resilience' 
  | 'focus' 
  | 'empathy' 
  | 'leadership' 
  | 'health';

export type ContentType = 
  | 'book' 
  | 'film' 
  | 'music' 
  | 'podcast' 
  | 'art' 
  | 'article' 
  | 'video';

export type Mood = 
  | 'energized' 
  | 'focused' 
  | 'creative' 
  | 'stressed' 
  | 'tired' 
  | 'inspired' 
  | 'distracted' 
  | 'motivated';

export type ContentMood = 
  | 'energizing' 
  | 'calming' 
  | 'inspiring' 
  | 'challenging' 
  | 'comforting' 
  | 'motivating';

export type ProgressStatus = 
  | 'recommended' 
  | 'viewed' 
  | 'started' 
  | 'completed' 
  | 'abandoned' 
  | 'loved';

// API Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface OnboardingRequest {
  growthGoals: GrowthGoal[];
  preferences: UserPreferences;
}

export interface UpdateMoodRequest {
  currentMood: Mood;
  energyLevel: number;
}

export interface UpdateProgressRequest {
  recommendationId: string;
  percentage: number;
  timeSpent?: number;
}

export interface AddFeedbackRequest {
  recommendationId: string;
  rating: number;
  review: string;
  growthImpact: 'transformative' | 'significant' | 'moderate' | 'minimal' | 'none';
  difficulty: 'too_easy' | 'just_right' | 'challenging' | 'too_hard';
  wouldRecommend?: boolean;
  notes?: string;
}

// UI Types
export interface NavItem {
  name: string;
  href: string;
  icon: any;
  current?: boolean;
}

export interface StatCard {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'increase' | 'decrease';
  icon: any;
}

export interface GrowthValueCard {
  value: GrowthCategory;
  score: number;
  color: string;
  icon: any;
}
