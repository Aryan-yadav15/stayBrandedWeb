import { Square } from "lucide-react"

export default function AppDevSEO() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-14">
      {/* App Development Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Innovative{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
              App Development
            </span>{" "}
            Solutions
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Transform your ideas into powerful mobile applications. We specialize in creating user-friendly and
            feature-rich apps for both iOS and Android, helping your business reach its audience on the go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2">
                <h3 className="text-xl font-bold text-yellow-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="space-y-2">
                <h3 className="text-xl font-bold text-yellow-400">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Boost Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
              Ranking
            </span>{" "}
            With SEO
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Drive organic traffic and improve your visibility with our expert SEO services. From on-page optimization to
            comprehensive keyword strategies, we ensure your business ranks high in search results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-yellow-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center mb-4">
                <Square className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Custom Mobile Apps",
    description:
      "Create powerful applications with real-time capabilities. Modern users expect apps to provide instant results. We specialize in developing responsive applications that deliver.",
  },
  {
    title: "User Experience Design",
    description: "Craft intuitive and engaging interfaces that delight your users and maximize retention.",
  },
  {
    title: "Scalable Backend",
    description: "Build robust server infrastructure that grows with your user base and maintains performance.",
  },
  {
    title: "Real-Time Features",
    description: "Implement live updates, chat, and notifications to keep users engaged and informed.",
  },
]

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
]

const seoServices = [
  {
    title: "Keyword Analysis",
    description:
      "Identify high-performing keywords, analyze your competition and improve your visibility for relevant searches.",
  },
  {
    title: "On-Page SEO",
    description: "Optimize titles, meta descriptions, headers, and images to make your website search-engine friendly.",
  },
  {
    title: "Technical SEO",
    description: "Resolve issues like broken links, slow loading times, and crawling errors to improve rankings.",
  },
  {
    title: "Content Strategy",
    description: "Create high-quality, keyword-focused content that boosts your domain authority and drives traffic.",
  },
  {
    title: "Packaging Design",
    description:
      "Elevate your product presentation with thoughtful, attention-grabbing packaging that mirrors your brand's values.",
  },
]

