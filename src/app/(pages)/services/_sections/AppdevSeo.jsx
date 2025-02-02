import { Square } from "lucide-react";

export default function AppDevSEO() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-8 md:px-14">
      {/* App Development Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute h-5 w-5 animate-ping bg-lime-400 rounded-full" />
              <div className="h-5 w-5 bg-lime-500 rounded-full" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-lime-400">{"{04} —"}</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-lime-200">
                Be on Mobile Phones
              </span>
            </div>
          </div>
          <div className="text-left mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Innovative{" "}
              <span className="bg-gradient-to-r from-lime-400 to-teal-400 text-transparent bg-clip-text">
                App Development
              </span>{" "}
              Solutions
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 mt-8">
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2">
                <h3 className="text-xl font-bold text-lime-400">
                  {feature.title}
                </h3>
                <p className="text-gray-400 line-clamp-3">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="space-y-2">
                <h3 className="text-xl font-bold text-lime-400">
                  {solution.title}
                </h3>
                <p className="text-gray-400 line-clamp-3">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute h-5 w-5 animate-ping bg-lime-400 rounded-full" />
              <div className="h-5 w-5 bg-lime-500 rounded-full" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-lime-400">{"{03} —"}</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-lime-200">
                Worldwide solutions
              </span>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Boost Your{" "}
              <span className="bg-gradient-to-r from-lime-400 to-teal-400 text-transparent bg-clip-text">
                Ranking
              </span>{" "}
              With SEO
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {seoServices.map((service) => (
            <div
              key={service.title}
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-lime-400/50 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-lime-400 to-teal-400 rounded flex items-center justify-center mb-4">
                <Square className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 line-clamp-3">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Custom Mobile Apps",
    description:
      "Create powerful applications with real-time capabilities. Modern users expect apps to provide instant results. We specialize in developing responsive applications that deliver.",
  },
  {
    title: "User Experience Design",
    description:
      "Craft intuitive and engaging interfaces that delight your users and maximize retention.",
  },
  {
    title: "Scalable Backend",
    description:
      "Build robust server infrastructure that grows with your user base and maintains performance.",
  },
  {
    title: "Real-Time Features",
    description:
      "Implement live updates, chat, and notifications to keep users engaged and informed.",
  },
];

const solutions = [
  {
    title: "Native vs. Cross-Platform Development",
    description:
      "We specialize in creating native apps for iOS and Android, ensuring optimal performance. For businesses seeking faster deployment and cost-efficiency, we use cross-platform technologies like React Native and Flutter.",
  },
  {
    title: "Tailored to Your Business",
    description:
      "Every app is built from scratch to align with your brand's identity and solve your specific business challenges. Whether it's an enterprise-wide health tracking system or a productivity tool, we create solutions that deliver.",
  },
  {
    title: "Future-Proof Solutions",
    description:
      "Our apps are designed to adapt to evolving technologies, ensuring your business stays competitive and relevant. With modular architecture, integrating new features or scaling your app becomes effortless.",
  },
];

const seoServices = [
  {
    title: "Keyword Analysis",
    description:
      "Identify high-performing keywords, analyze your competition and improve your visibility for relevant searches.",
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize titles, meta descriptions, headers, and images to make your website search-engine friendly.",
  },
  {
    title: "Technical SEO",
    description:
      "Resolve issues like broken links, slow loading times, and crawling errors to improve rankings.",
  },
  {
    title: "Content Strategy",
    description:
      "Create high-quality, keyword-focused content that boosts your domain authority and drives traffic.",
  },
  {
    title: "Packaging Design",
    description:
      "Elevate your product presentation with thoughtful, attention-grabbing packaging that mirrors your brand's values.",
  },
];