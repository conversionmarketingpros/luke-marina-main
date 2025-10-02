export interface BlogPost {
    id: number
    slug: string
    title: string
    excerpt: string
    image: string
    readTime: string
    author: {
      name: string
      image: string
      date: string
    }
    content: {
      sections: Array<{
        heading: string
        content: string
        image?: string
      }>
    }
    relatedPosts: number[]
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: "maximizing-boat-value-expert-detailing",
      title: "Maximizing Boat Value with Expert Detailing",
      excerpt: "Discover how professional detailing preserves your boat's multi-million-dollar finish, using premium techniques tailored for Lake Coeur d'Alene's conditions.",
      image: "/images/68d28a95448d7b7da6e47f16.jpeg",
      readTime: "8 min read",
      author: {
        name: "Luke Netzel",
        image: "/images/68d12b96ec84da4ef5bd78f9.jpeg",
        date: "Dec 15, 2024",
      },
      content: {
        sections: [
          {
            heading: "The Science Behind Professional Boat Detailing",
            content: "Professional boat detailing goes far beyond simple cleaning—it's a comprehensive preservation system that protects your vessel's value and appearance. On Lake Coeur d'Alene's pristine waters, boats face unique challenges including UV exposure, mineral deposits, and fluctuating water levels. Our expert detailing process addresses these specific conditions using marine-grade products and techniques that maintain your boat's showroom condition year after year.",
          },
          {
            heading: "Premium Products for Superior Results",
            content: "We use only the finest marine-grade products specifically formulated for freshwater environments. Our detailing arsenal includes pH-balanced cleaners that won't damage gel coat, premium waxes with UV inhibitors, and specialized tools designed for marine applications. These products not only clean but actively protect your investment from Lake Coeur d'Alene's unique environmental factors.",
            image: "/images/68d330cfef40ca237dc8e22f.png",
          },
          {
            heading: "The Detailing Process That Delivers Results",
            content: "Our systematic approach begins with a thorough assessment of your vessel's condition. We start with hull cleaning using soft-bristle brushes and gentle cleaners, followed by careful deck and interior detailing. Each surface receives specialized attention—from teak refinishing to stainless steel polishing. The process concludes with protective treatments that shield your boat from future damage.",
          },
          {
            heading: "Protecting Your Investment's Value",
            content: "Regular professional detailing can increase your boat's resale value by 15-25%. A well-maintained vessel not only looks better but also demonstrates to potential buyers that the boat has been properly cared for. Our detailed service records and before/after documentation provide valuable proof of maintenance that enhances your boat's marketability.",
            image: "/images/68d32be0037a13a1d0e2bae0.jpeg",
          },
          {
            heading: "Seasonal Maintenance for Year-Round Protection",
            content: "Lake Coeur d'Alene's seasonal changes require different approaches throughout the year. Spring detailing prepares your boat for the season with deep cleaning and protective treatments. Summer maintenance focuses on UV protection and regular upkeep. Fall preparation includes thorough cleaning before winter storage, ensuring your boat emerges in perfect condition the following season.",
          },
          {
            heading: "Why Choose Professional Detailing Services",
            content: "Attempting DIY detailing can lead to costly mistakes, from using inappropriate products to causing damage with improper techniques. Our certified technicians have years of experience with high-end vessels and understand the nuances of different boat materials and finishes. We also carry comprehensive insurance, giving you peace of mind while we work on your valuable investment.",
          },
        ],
      },
      relatedPosts: [2, 3, 4, 5],
    },
    {
      id: 2,
      slug: "winter-ready-boats-shrink-wrapping",
      title: "Winter-Ready Boats: The Art of Shrink Wrapping",
      excerpt: "Explore the meticulous process of custom shrink wrapping for your high-end boat, ensuring optimal protection against Idaho winters.",
      image: "/images/blog 1.jpg",
      readTime: "9 min read",
      author: {
        name: "Luke Netzel",
        image: "/images/68d12b96ec84da4ef5bd78f9.jpeg",
        date: "Dec 10, 2024",
      },
      content: {
        sections: [
          {
            heading: "The Critical Importance of Winter Protection",
            content: "Idaho winters can be harsh on boats, with freezing temperatures, snow, ice, and wind causing significant damage to unprotected vessels. Shrink wrapping provides a complete barrier against these elements, creating a controlled environment that prevents moisture damage, UV exposure, and structural stress. For high-value boats, this protection is not just recommended—it's essential for preserving your investment.",
          },
          {
            heading: "Professional Shrink Wrap Installation Process",
            content: "Our shrink wrap installation begins with a thorough boat preparation, including cleaning and removing all loose items. We then construct a custom framework using marine-grade materials that supports the shrink wrap without damaging your vessel. The shrink wrap film is carefully measured and cut to ensure a perfect fit, then professionally installed using heat guns to create a tight, weatherproof seal.",
            image: "/images/68d12b1d2ca02b642b5fc0bc.jpeg",
          },
          {
            heading: "Custom Solutions for Every Vessel Type",
            content: "Different boats require different approaches to shrink wrapping. Sailboats need special attention to masts and rigging, while powerboats may require custom framework for radar arches and other equipment. Our team has experience with everything from small fishing boats to large luxury boats, ensuring each vessel receives the appropriate protection for its specific design and equipment.",
          },
          {
            heading: "Ventilation and Moisture Control",
            content: "Proper ventilation is crucial to prevent moisture buildup inside the shrink wrap. We install specialized vents that allow air circulation while keeping out precipitation and pests. This controlled environment prevents mold, mildew, and corrosion that can occur in improperly sealed boats. Our ventilation system ensures your boat emerges from winter storage in the same condition it entered.",
            image: "/images/testimonial 2.jpg",
          },
          {
            heading: "Durability and Longevity of Professional Installation",
            content: "Our shrink wrap installations are designed to withstand Idaho's winter weather, including heavy snow loads and strong winds. We use premium materials and professional installation techniques that ensure the wrap remains intact throughout the winter season. Regular inspections and maintenance are included in our service to address any issues that may arise.",
          },
          {
            heading: "Cost-Effective Protection for Your Investment",
            content: "While shrink wrapping represents an investment, it's far more cost-effective than repairing winter damage. The cost of professional shrink wrapping is typically 10-15% of potential winter damage repairs. For high-value boats, this protection is essential for maintaining resale value and preventing costly repairs that could have been avoided with proper winter protection.",
          },
        ],
      },
      relatedPosts: [1, 3, 4, 6],
    },
    {
      id: 3,
      slug: "interior-design-excellence-luxury-boats",
      title: "Interior Design Excellence for Luxury Boats",
      excerpt: "Discover the art of creating stunning interior spaces that reflect the luxury and sophistication of your vessel.",
      image: "/images/blog 2.jpg",
      readTime: "7 min read",
      author: {
        name: "Luke Netzel",
        image: "/images/68d12b96ec84da4ef5bd78f9.jpeg",
        date: "Dec 5, 2024",
      },
      content: {
        sections: [
          {
            heading: "The Art of Marine Interior Design",
            content: "Luxury boat interiors require specialized knowledge of marine materials, space optimization, and aesthetic design principles. Unlike residential interiors, boat spaces must be both beautiful and functional, withstanding the unique challenges of marine environments. Our interior design services focus on creating spaces that enhance your boating experience while maintaining the highest standards of quality and durability.",
            image: "/images/68d15a0ffefaa9807939d7e1.png",
          },
          {
            heading: "Material Selection for Marine Environments",
            content: "Choosing the right materials for boat interiors is crucial for both aesthetics and longevity. We work with marine-grade materials that resist moisture, UV damage, and salt exposure. From premium teak and mahogany to specialized marine fabrics and finishes, every material is selected for its beauty, durability, and suitability for marine environments.",
          },
          {
            heading: "Space Optimization and Functionality",
            content: "Boat interiors require careful space planning to maximize both comfort and functionality. Our design process considers every aspect of boat life, from storage solutions to seating arrangements that work in various sea conditions. We create multi-functional spaces that serve multiple purposes while maintaining the luxurious feel that defines high-end boating.",
          },
          {
            heading: "Custom Solutions for Unique Vessels",
            content: "Every boat is unique, and our interior design services are tailored to each vessel's specific characteristics. We work closely with owners to understand their vision and lifestyle needs, creating custom solutions that reflect their personal style while optimizing the boat's functionality. From complete interior renovations to targeted improvements, we deliver results that exceed expectations.",
            image: "/images/68d2be63ee4bdc2985cb6044.jpeg",
          },
          {
            heading: "Lighting and Ambiance Design",
            content: "Proper lighting is essential for creating the right ambiance in boat interiors. We design lighting systems that provide both functional illumination and atmospheric effects, using LED technology and marine-grade fixtures. Our lighting designs enhance the beauty of your boat's interior while providing practical illumination for all activities.",
          },
          {
            heading: "Maintenance and Care Considerations",
            content: "Beautiful boat interiors require ongoing care to maintain their appearance and functionality. We provide comprehensive maintenance programs that keep your interior looking pristine, including regular cleaning, refinishing, and repairs. Our maintenance services ensure that your investment in interior design continues to provide value and enjoyment for years to come.",
          },
        ],
      },
      relatedPosts: [1, 2, 5, 6],
    },
    {
      id: 4,
      slug: "dock-repair-maintenance-expertise",
      title: "Dock Repair & Maintenance: Expert Solutions for Lake Coeur d'Alene",
      excerpt: "Learn about comprehensive dock repair and maintenance services that keep your marina infrastructure safe, functional, and beautiful year-round.",
      image: "/images/blog 3.jpg",
      readTime: "8 min read",
      author: {
        name: "Luke Netzel",
        image: "/images/68d12b96ec84da4ef5bd78f9.jpeg",
        date: "Nov 28, 2024",
      },
      content: {
        sections: [
          {
            heading: "The Importance of Regular Dock Maintenance",
            content: "Dock maintenance is crucial for safety, functionality, and property value. Lake Coeur d'Alene's fluctuating water levels, freeze-thaw cycles, and seasonal weather changes can cause significant damage to dock structures. Regular maintenance prevents costly repairs and ensures your dock remains safe and functional for years to come. Our comprehensive maintenance programs address all aspects of dock care.",
          },
          {
            heading: "Common Dock Problems and Solutions",
            content: "Dock structures face numerous challenges including wood rot, metal corrosion, loose connections, and structural damage from ice and storms. Our experienced technicians identify and address these issues before they become major problems. We use marine-grade materials and proven repair techniques that ensure long-lasting solutions for all types of dock damage.",
            image: "/images/dock repair .jpg",
          },
          {
            heading: "Preventive Maintenance Programs",
            content: "Our preventive maintenance programs are designed to extend dock life and prevent costly repairs. Regular inspections identify potential issues early, while scheduled maintenance keeps all components in optimal condition. We provide detailed maintenance schedules and documentation, ensuring your dock receives the care it needs throughout the year.",
          },
          {
            heading: "Structural Repairs and Upgrades",
            content: "When dock damage occurs, our team provides expert repair services using the latest techniques and materials. From replacing damaged pilings to repairing decking and railings, we restore your dock to safe, functional condition. We also offer upgrade services that improve dock functionality and appearance, including new decking, lighting, and safety features.",
            image: "/images/testimonial 1.jpg",
          },
          {
            heading: "Seasonal Preparation and Protection",
            content: "Proper seasonal preparation is essential for dock longevity. Our fall preparation services include cleaning, inspection, and protective treatments that prepare your dock for winter conditions. Spring services focus on damage assessment and necessary repairs, ensuring your dock is ready for the boating season. This seasonal approach prevents damage and extends dock life.",
          },
          {
            heading: "Safety and Compliance Standards",
            content: "Dock safety is our top priority, and we ensure all repairs and maintenance meet or exceed safety standards. Our team is trained in marine construction safety and follows all applicable regulations. We provide safety inspections and recommendations that help prevent accidents and ensure compliance with local requirements.",
          },
        ],
      },
      relatedPosts: [2, 3, 5, 6],
    },
    {
      id: 5,
      slug: "lake-coeur-dalene-marina-life",
      title: "Lake Coeur d'Alene Marina Life: A Boater's Paradise",
      excerpt: "Discover the unique advantages of marina life on Lake Coeur d'Alene and how proper boat care enhances your experience on Idaho's most beautiful lake.",
      image: "/images/blog 4.jpg",
      readTime: "8 min read",
      author: {
        name: "Luke Netzel",
        image: "/images/68d12b96ec84da4ef5bd78f9.jpeg",
        date: "Nov 20, 2024",
      },
      content: {
        sections: [
          {
            heading: "The Unique Beauty of Lake Coeur d'Alene",
            content: "Lake Coeur d'Alene offers some of the most pristine boating waters in the Pacific Northwest, with crystal-clear water, stunning mountain views, and over 135 miles of shoreline to explore. The lake's unique characteristics, including its depth and water quality, create ideal conditions for boating while presenting specific challenges for boat maintenance and care.",
          },
          {
            heading: "Marina Services That Enhance Your Experience",
            content: "Living the marina life on Lake Coeur d'Alene means having access to comprehensive boat care services that keep your vessel in perfect condition. From regular detailing that maintains your boat's appearance to seasonal shrink wrapping that protects it during Idaho winters, our services ensure you can focus on enjoying the lake while we handle the maintenance.",
            image: "/images/68d32483037a1317d2e0c731.jpg",
          },
          {
            heading: "Seasonal Considerations for Lake Coeur d'Alene",
            content: "The lake's seasonal changes require different approaches to boat care throughout the year. Spring preparation includes thorough cleaning and maintenance to prepare for the season. Summer care focuses on regular upkeep and protection from UV exposure. Fall preparation involves comprehensive cleaning and winter protection to ensure your boat emerges in perfect condition the following year.",
          },
          {
            heading: "Community and Lifestyle Benefits",
            content: "Marina life on Lake Coeur d'Alene offers more than just boat access—it provides a community of like-minded individuals who share a passion for the water. Our marina services support this lifestyle by ensuring your boat is always ready for spontaneous adventures and planned excursions. We understand that your boat is more than transportation; it's your gateway to relaxation and recreation.",
            image: "/images/testimonial 1.jpg",
          },
          {
            heading: "Environmental Stewardship and Lake Care",
            content: "As stewards of Lake Coeur d'Alene, we use environmentally friendly products and practices in all our services. Our commitment to lake health includes using biodegradable cleaners, proper waste disposal, and techniques that protect water quality. We believe that enjoying the lake means taking responsibility for its preservation.",
          },
          {
            heading: "Maximizing Your Investment in Marina Life",
            content: "Proper boat care is essential for maximizing your investment in marina life. Regular maintenance, professional detailing, and proper winter storage protect your boat's value and ensure years of reliable service. Our comprehensive services are designed to support your investment, providing the care and attention your boat deserves while you enjoy the unique lifestyle that Lake Coeur d'Alene offers.",
          },
        ],
      },
      relatedPosts: [1, 3, 4, 6],
    },
    {
      id: 6,
      slug: "boat-ownership-maintenance-guide",
      title: "The Complete Guide to Boat Owner and Maintenance",
      excerpt: "Everything you need to know about owning and maintaining a boat on Lake Coeur d'Alene, from daily care to long-term preservation strategies.",
      image: "/images/68d6c62e76155420a78d471c.jpeg",
      readTime: "7 min read",
      author: {
        name: "Luke Netzel",
        image: "/images/68d12b96ec84da4ef5bd78f9.jpeg",
        date: "Nov 15, 2024",
      },
      content: {
        sections: [
          {
            heading: "Understanding Boat Ownership Responsibilities",
            content: "Boat ownership comes with significant responsibilities that extend beyond simply enjoying the water. Proper maintenance, regular inspections, and professional care are essential for protecting your investment and ensuring safe operation. Understanding these responsibilities helps you make informed decisions about care and maintenance that will serve you well throughout your ownership experience.",
          },
          {
            heading: "Daily and Weekly Maintenance Routines",
            content: "Establishing regular maintenance routines is crucial for boat care. Daily routines include checking bilge pumps, inspecting lines and fenders, and basic cleaning. Weekly maintenance should include more thorough cleaning, checking fluid levels, and inspecting safety equipment. These routines prevent small issues from becoming major problems and keep your boat in optimal condition.",
            image: "/images/68d12b2d2ca02b72155fc2c1.jpeg",
          },
          {
            heading: "Seasonal Maintenance Schedules",
            content: "Lake Coeur d'Alene's seasonal changes require different maintenance approaches throughout the year. Spring commissioning involves thorough inspections, system checks, and preparation for the season. Summer maintenance focuses on regular upkeep and monitoring. Fall preparation includes comprehensive cleaning, winterization, and storage preparation. Winter storage requires ongoing monitoring and maintenance to prevent damage.",
          },
          {
            heading: "Professional Services and When to Use Them",
            content: "While many maintenance tasks can be performed by owners, certain services require professional expertise. Professional detailing, shrink wrapping, and major repairs should be handled by experienced technicians. Our services complement your maintenance efforts, providing the specialized care that ensures your boat receives the attention it deserves.",
            image: "/images/68d15a0ffefaa9807939d7e1.png",
          },
          {
            heading: "Long-Term Preservation Strategies",
            content: "Protecting your boat's value and ensuring long-term enjoyment requires strategic planning. This includes regular professional maintenance, proper storage, and timely repairs. Our comprehensive care programs are designed to support long-term preservation, ensuring your boat maintains its value and performance for years to come.",
          },
          {
            heading: "Building a Relationship with Your Marina Service Provider",
            content: "Developing a relationship with a trusted marina service provider is essential for boat ownership. Regular service providers understand your boat's history and specific needs, enabling them to provide more effective care. We work closely with boat owners to develop customized care programs that meet their specific needs and preferences, ensuring optimal results and peace of mind.",
          },
        ],
      },
      relatedPosts: [1, 3, 4, 5],
    },
  ]
  
  export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
  }
  
  export function getRelatedPosts(postIds: number[]): BlogPost[] {
    return blogPosts.filter((post) => postIds.includes(post.id))
  }
  
  export function getFeaturedPosts(limit: number = 3): BlogPost[] {
    return blogPosts.slice(0, limit)
  }
  
  export function getPostsByCategory(category: string): BlogPost[] {
    // This could be extended based on your categorization needs
    return blogPosts.filter((post) => 
      post.title.toLowerCase().includes(category.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(category.toLowerCase())
    )
  }