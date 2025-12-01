import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "React bilan komponent arxitekturasini to'g'ri qurish",
      excerpt: "React loyihalarida modullik, tozalik va takrorlanmaslik — muvaffaqiyat kaliti.",
      date: "2024-01-15",
      readTime: "8 min",
      category: "Frontend",
      tags: ["React", "Architecture", "Best Practices"],
      featured: true
    },
    {
      id: 2,
      title: "Node.js backendda xavfsizlikni oshirish usullari",
      excerpt: "Sanitizatsiya, autentifikatsiya, tokenlar — Node.js backend yaratishdagi asosiy jihatlar.",
      date: "2024-01-10",
      readTime: "12 min",
      category: "Backend",
      tags: ["Node.js", "Security", "Authentication"],
      featured: true
    },
    {
      id: 3,
      title: "Junior → Middle yo'lidagi eng muhim odatlar",
      excerpt: "Kod sifati, muloqot, team bilan ishlash — dasturchilikdagi o'sishning muhim elementlari.",
      date: "2024-01-05",
      readTime: "10 min",
      category: "Career",
      tags: ["Growth", "Career", "Tips"],
      featured: false
    },
    {
      id: 4,
      title: "TypeScript bilan type safety ni maksimal darajada oshirish",
      excerpt: "Advanced TypeScript patterns va best practices lar haqida to'liq qo'llanma.",
      date: "2023-12-28",
      readTime: "15 min",
      category: "TypeScript",
      tags: ["TypeScript", "Types", "Best Practices"],
      featured: false
    },
    {
      id: 5,
      title: "Microservices architecture: Afzalliklari va qiyinchiliklari",
      excerpt: "Microservices tizimlarini loyihalash va ular bilan ishlash tajribam.",
      date: "2023-12-20",
      readTime: "14 min",
      category: "Architecture",
      tags: ["Microservices", "DevOps", "Scalability"],
      featured: false
    },
    {
      id: 6,
      title: "Tailwind CSS bilan rapid UI development",
      excerpt: "Utility-first CSS framework yordamida tez va samarali interfeyslar yaratish.",
      date: "2023-12-15",
      readTime: "6 min",
      category: "CSS",
      tags: ["Tailwind", "CSS", "UI/UX"],
      featured: false
    }
  ];

  const categories = [
    { name: "Frontend", count: 12, color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { name: "Backend", count: 8, color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
    { name: "DevOps", count: 5, color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    { name: "Career", count: 6, color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400" },
    { name: "Tips", count: 10, color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400" }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Texnologiya, tajriba va fikrlash usullarim haqida yozib boraman.
          Har bir maqola — mening o'sishim va sinovlarimning bir qismi.
        </p>
      </div>

      {/* Featured Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-yellow-600 dark:text-yellow-400">⭐</span>
          Tanlangan Maqolalar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts
            .filter(post => post.featured)
            .map((post) => (
              <Card key={post.id} className="h-full" hoverable gradient>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date} • {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    icon="📖"
                    as="a"
                    href={`/blog/${post.id}`}
                  >
                    O'qishni davom ettirish
                  </Button>
                </div>
              </Card>
            ))}
        </div>
      </div>

      {/* All Posts */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-blue-600 dark:text-blue-400">📚</span>
            Barcha Maqolalar
          </h2>
          <Button 
            variant="ghost" 
            size="sm"
            icon="📡"
          >
            RSS Feed
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="h-full" hoverable>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    icon="→"
                  >
                    O'qish
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Sidebar Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Card className="lg:col-span-3" padding="lg">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-purple-600 dark:text-purple-400">✍️</span>
            So'nggi Maqola
          </h3>
          
          <div className="space-y-6">
            {blogPosts.slice(0, 1).map((post) => (
              <div key={post.id}>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {post.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {post.excerpt}...
                </p>
                <Button 
                  variant="primary"
                  size="md"
                  icon="📖"
                  as="a"
                  href={`/blog/${post.id}`}
                >
                  To'liq o'qish
                </Button>
              </div>
            ))}
          </div>
        </Card>
        
        <Card padding="lg">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="text-green-600 dark:text-green-400">🏷️</span>
            Kategoriyalar
          </h3>
          
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.name}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-bold mb-4">Blog statistikasi</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Jami maqolalar</span>
                  <span className="font-bold">41</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>O'rtacha o'qish vaqti</span>
                  <span className="font-bold">10 min</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Blog;