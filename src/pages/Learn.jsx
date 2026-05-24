export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-[#FCF8F5] text-[#1F1B18]" style={{ fontFamily: 'Lora, serif' }}>
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-semibold mb-6">About Me</h1>
        <p className="text-lg leading-8 mb-4">
          Welcome to the about page. This website is a personal portfolio built with React and Vite. Here you can learn more about the experience, interests, and values behind the project.
        </p>
        <p className="text-lg leading-8">
          Use the navigation bar to return to the home page or explore other sections. The /about route is now available and fully working.
        </p>
      </div>
    </section>
  );
}
