import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling headphones with 30-hour battery life',
      fullDescription: 'Experience superior sound quality with our premium wireless headphones. Featuring advanced noise-cancelling technology, these headphones provide an immersive audio experience whether you\'re commuting, working, or relaxing. The 30-hour battery life ensures you can enjoy your favorite music all day long without interruption. Comfortable ear cushions and adjustable headband make these perfect for extended use.',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
      category: 'Audio',
      inStock: true,
      rating: 4.5,
      features: [
        'Active Noise Cancellation',
        '30-hour battery life',
        'Bluetooth 5.0 connectivity',
        'Comfortable over-ear design',
        'Built-in microphone for calls'
      ]
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Fitness tracking, heart rate monitor, and smartphone notifications',
      fullDescription: 'Stay connected and healthy with our advanced smart watch. Track your daily activity, monitor your heart rate, and receive smartphone notifications right on your wrist. With GPS tracking, water resistance, and a vibrant AMOLED display, this smartwatch is your perfect fitness and lifestyle companion.',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
      category: 'Wearables',
      inStock: true,
      rating: 4.7,
      features: [
        'Heart rate monitoring',
        'GPS tracking',
        'Water resistant (50m)',
        'Sleep tracking',
        '5-day battery life',
        'Smartphone notifications'
      ]
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      description: 'Water-resistant backpack with USB charging port and laptop compartment',
      fullDescription: 'Travel in style with this modern, functional laptop backpack. Designed for professionals and students alike, it features a dedicated laptop compartment that fits up to 15.6" laptops, multiple organizational pockets, and a built-in USB charging port for on-the-go power. The water-resistant material keeps your belongings safe in any weather.',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
      category: 'Accessories',
      inStock: true,
      rating: 4.3,
      features: [
        'Fits laptops up to 15.6"',
        'USB charging port',
        'Water-resistant material',
        'Multiple compartments',
        'Comfortable padded straps',
        'Anti-theft back pocket'
      ]
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      description: 'Portable waterproof speaker with 12-hour battery and deep bass',
      fullDescription: 'Take your music anywhere with this powerful portable Bluetooth speaker. IPX7 waterproof rating means you can use it poolside or at the beach without worry. The 360-degree sound and deep bass provide rich, immersive audio, while the 12-hour battery ensures the party never stops.',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop',
      category: 'Audio',
      inStock: true,
      rating: 4.6,
      features: [
        'IPX7 waterproof',
        '360-degree sound',
        '12-hour battery life',
        'Bluetooth 5.0',
        'Built-in microphone',
        'Compact and portable'
      ]
    },
    {
      id: 5,
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking and long battery life',
      fullDescription: 'Enhance your productivity with this ergonomic wireless mouse. Designed for comfort during long work sessions, it features precision optical tracking, customizable buttons, and an energy-efficient design that provides up to 18 months of battery life. Compatible with Windows, Mac, and Linux.',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop',
      category: 'Accessories',
      inStock: true,
      rating: 4.4,
      features: [
        'Ergonomic design',
        'Precision optical tracking',
        '18-month battery life',
        'Customizable buttons',
        'Universal compatibility',
        'Wireless 2.4GHz connection'
      ]
    }
  ]

  constructor(){}

  getAllProducts(){
    return this.products;
  }

  getProductById(id: number){
    return this.products.find(product => product.id === id)
  }

  getProductsByCategory(category: string){
    return this.products.filter(product => product.category == category)
  }
}
