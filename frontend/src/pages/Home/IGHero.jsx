import { Instagram } from "lucide-react";

export default function IGHero() {
  const posts = [
    {
      image: "/HomeImages/Ig1.png",
      isVideo: true,
      link: "#",
    },
    {
      image: "/HomeImages/Ig2.png",
      isVideo: true,
      link: "#",
    },
    {
      image: "/HomeImages/Ig3.png",
      isVideo: false,
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gold-100 mb-2">
            Instagram'ımıza Göz Atın
          </h2>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Video Play Icon */}
              {post.isVideo && (
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-900 ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gold-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* View on Instagram Button */}
        <div className="text-center">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-gold-200 transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram'da Görüntüle</span>
          </a>
        </div>
      </div>
    </section>
  );
}
