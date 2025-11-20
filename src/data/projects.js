export const categories = [
  { key: 'web', label: 'Web' },
  { key: 'ml', label: 'Machine Learning' },
  { key: 'iot', label: 'IoT' },
  { key: 'robotics', label: 'Robotics' },
  { key: 'games', label: 'Games' },
  { key: 'ai', label: 'AI Apps' },
]

export const projects = [
  {
    id: 'sustainable-shopper',
    title: 'Sustainable Shopping Assistant',
    category: 'web',
    thumbnail: '/images/projects/sustainable.jpg',
    description: 'Browser-based assistant that nudges greener choices with product insights.',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
    body: 'An eco-first assistant that scores products, explains impact, and guides alternatives for better decisions.'
  },
  {
    id: 'laravel-recommender',
    title: 'Book Recommendation System',
    category: 'web',
    thumbnail: '/images/projects/books.jpg',
    description: 'Advanced content + CF recommender built with Laravel.',
    tech: ['Laravel', 'PHP', 'MySQL'],
    body: 'Ranking, embeddings, hybrid similarity signals, and a clean admin dashboard.'
  },
  {
    id: 'rescue-watch',
    title: 'Rescue Watch — Smart Wearable',
    category: 'iot',
    thumbnail: '/images/projects/watch.jpg',
    description: 'Health telemetry on the wrist with alerting and cloud sync.',
    tech: ['ESP32', 'MAX30105', 'MPU6050', 'OLED', 'Ubidots'],
    body: 'Compact wearable streaming vitals, fall detection, and SOS events.'
  },
  {
    id: 'plant-disease',
    title: 'Plant Disease Classification',
    category: 'ml',
    thumbnail: '/images/projects/plant.jpg',
    description: '38-class CNN model trained on agricultural datasets.',
    tech: ['Python', 'TensorFlow', 'VGG16', 'MobileNet'],
    body: 'Fast, robust inference with optimized preprocessing and transfer learning.'
  },
  {
    id: 'glut-games',
    title: 'GLUT Retro Game Pack',
    category: 'games',
    thumbnail: '/images/projects/games.jpg',
    description: 'Pokémon-style RPG, Asteroids Shooter, and 2-player dogfights.',
    tech: ['C++', 'OpenGL/GLUT'],
    body: 'Classic mechanics reimagined with handcrafted sprites and tight controls.'
  },
  {
    id: 'javafx-chat',
    title: 'Desktop Chat App + ChatGPT',
    category: 'ai',
    thumbnail: '/images/projects/chat.jpg',
    description: 'JavaFX client with Firebase auth and GPT integrations.',
    tech: ['Java', 'Firebase', 'OpenAI'],
    body: 'Conversational UI, streaming, and smart context windows for productivity.'
  }
]
