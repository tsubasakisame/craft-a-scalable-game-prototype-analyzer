interface GamePrototype {
  id: string;
  name: string;
  gameEngine: string;
  genre: string;
  players: number;
  platforms: string[];
  metrics: {
    fps: number;
    memoryUsage: number;
    loadTime: number;
  };
}

interface AnalysisResult {
  id: string;
  gamePrototypeId: string;
  scalabilityScore: number;
  bottlenecks: string[];
  recommendations: string[];
}

interface Configuration {
  // Game prototype repository
  gamePrototypes: GamePrototype[];

  // Analysis settings
  analysisSettings: {
    scalabilityThreshold: number;
    performanceMetrics: {
      fps: number;
      memoryUsage: number;
      loadTime: number;
    };
  };

  // Analyzer modules
  analyzerModules: {
    fpsAnalyzer: (gamePrototype: GamePrototype) => Promise<number>;
    memoryUsageAnalyzer: (gamePrototype: GamePrototype) => Promise<number>;
    loadTimeAnalyzer: (gamePrototype: GamePrototype) => Promise<number>;
  };

  // Output settings
  outputSettings: {
    outputDir: string;
    outputFileFormat: 'json' | 'csv';
  };
}

const config: Configuration = {
  gamePrototypes: [
    {
      id: 'proto-1',
      name: 'Game 1',
      gameEngine: 'Unity',
      genre: 'Adventure',
      players: 4,
      platforms: ['Windows', 'Mac', 'Linux'],
      metrics: {
        fps: 60,
        memoryUsage: 2048,
        loadTime: 10,
      },
    },
    {
      id: 'proto-2',
      name: 'Game 2',
      gameEngine: 'Unreal Engine',
      genre: 'Action',
      players: 2,
      platforms: ['Windows', 'PS5'],
      metrics: {
        fps: 120,
        memoryUsage: 4096,
        loadTime: 5,
      },
    },
  ],

  analysisSettings: {
    scalabilityThreshold: 0.8,
    performanceMetrics: {
      fps: 60,
      memoryUsage: 2048,
      loadTime: 10,
    },
  },

  analyzerModules: {
    fpsAnalyzer: async (gamePrototype: GamePrototype) => {
      // FPS analysis logic
      return 55;
    },
    memoryUsageAnalyzer: async (gamePrototype: GamePrototype) => {
      // Memory usage analysis logic
      return 1024;
    },
    loadTimeAnalyzer: async (gamePrototype: GamePrototype) => {
      // Load time analysis logic
      return 8;
    },
  },

  outputSettings: {
    outputDir: './analysis-results',
    outputFileFormat: 'json',
  },
};

export default config;