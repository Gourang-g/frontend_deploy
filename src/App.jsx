import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">AI</span>
          <span>CodeAssist</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button className="github-btn">GitHub</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <div className="badge">✨ AI-Powered Software Engineeringg</div>

          <h1>
            Your AI Assistant
            <br />
            <span>for Software Development</span>
          </h1>

          <p>
            Understand your codebase, ask questions about your project, generate
            code summaries, and get intelligent development assistance from one
            place.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started →</button>

            <button className="secondary-btn">View Demo</button>
          </div>
        </div>

        {/* Simple Code Preview */}
        <div className="code-card">
          <div className="code-header">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>Assistant.java</span>
          </div>

          <pre>
            {`public class Assistant {

    public String analyzeCode(String code) {
        return aiService
            .generateSummary(code);
    }

    public String askQuestion(String query) {
        return ragService
            .searchAndAnswer(query);
    }
}`}
          </pre>
        </div>
      </main>

      {/* Features */}
      <section id="features" className="features">
        <h2>What can it do?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Ask Questions</h3>
            <p>
              Ask questions about your source code and get contextual answers.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Understand Code</h3>
            <p>
              Analyze your project and generate summaries of files, classes, and
              functions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>RAG Powered</h3>
            <p>
              Retrieve relevant parts of your codebase before generating an AI
              response.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>Built for Developers</h2>

        <p>
          CodeAssist is designed to help developers understand and work with
          large codebases using AI, code search, and retrieval-augmented
          generation.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 CodeAssist · AI Software Engineering Assistant</p>
      </footer>
    </div>
  );
}

export default App;
