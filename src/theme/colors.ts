// Theme Colors — AIB Platform
// Brand: #374151 | Domain: business automation

export const Colors = {
  // Brand
  primary: '#374151',
  primaryDark: '#1F2937',
  primaryLight: '#6B7280',

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  gray50:  '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',

  // Semantic
  success: '#10B981',
  successLight: '#D1FAE5',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  error: '#EF4444',
  errorLight: '#FEE2E2',
  info: '#3B82F6',
  infoLight: '#DBEAFE',

  // Surfaces
  background: '#F9FAFB',
  surface: '#FFFFFF',
  surfaceSecondary: '#F3F4F6',
  overlay: 'rgba(0,0,0,0.5)',

  // Text
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  textInverse: '#FFFFFF',
  textLink: '#374151',

  // AI-specific
  aiPrimary: '#374151',
  aiSecondary: '#6B7280',
  aiBackground: '#3741511A',
  aiText: '#1F2937',

  // Input
  inputBorder: '#D1D5DB',
  inputFocusBorder: '#374151',
  inputBackground: '#FFFFFF',
  inputPlaceholder: '#9CA3AF',

  // Dark mode
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    surfaceSecondary: '#334155',
    textPrimary: '#F1F5F9',
    textSecondary: '#94A3B8',
    inputBorder: '#475569',
    inputBackground: '#1E293B',
  },
} as const;

export type ColorKey = keyof typeof Colors;
export default Colors;
