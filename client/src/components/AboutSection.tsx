export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-8 text-center" data-testid="text-about-heading">
          About Me
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-6" data-testid="text-about-content">
            I'm a Microsoft Certified Data Engineer with a passion for transforming complex data challenges 
            into elegant, scalable solutions. Over the past 4 years, I've specialized in ETL development, 
            data platform modernization, and workflow automation across cloud platforms.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground" data-testid="text-about-content-2">
            My expertise spans the entire data engineering lifecycle—from designing robust data pipelines 
            and optimizing performance to migrating legacy systems to modern cloud architectures. I've had 
            the privilege of working with industry leaders like BAT and the Income Tax Department of India, 
            where I've delivered solutions that drive efficiency and enable data-driven decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
